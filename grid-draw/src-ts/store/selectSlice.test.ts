import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore, type SelectedItem } from './gridStore';
import {
  selectionSignature,
  getSelectionBoundsAll,
  itemsEqual,
  isItemSelected,
  addItemToSelectionArray,
  removeItemFromSelectionArray,
} from './gridHelpers';
import type { GridCanvasWasm } from '../types/grid';
import { stubWasm } from './wasmStub';

/**
 * Focused coverage for the selection slice (src-ts/store/slices/selectSlice.ts)
 * and the pure selection helpers (src-ts/store/gridHelpers.ts). These exercise
 * behaviors NOT covered by dragMove.test.ts (drag moves) or pasteBox.test.ts
 * (single/multi paste box drawing): additive vs. replacing box selection,
 * cancel restoring the previous selection, the dragStartedOnEmpty
 * deselect-on-release rule, hitTestShapes priority order, selectAll across all
 * item kinds, mixed-type selection bounds, and signature order-independence.
 */

type MockOpts = {
  cells?: Array<[number, number, number?]>; // [row, col, color?]
  lines?: number[][]; // [r1, c1, r2, c2, color, width]
  rects?: number[][]; // [r1, c1, r2, c2, fill, outline]
  texts?: number[][]; // [r, c, color, boxW, boxH, halign, valign]
  images?: number[][]; // [r1, c1, r2, c2]
  hit?: { line?: number; text?: number; rect?: number; image?: number };
  cellSize?: number;
};

// A box-overlap test against a shape's bounding box; matches the "intersects the
// selection box" semantics the slice relies on (finite, may be negative).
function bboxOverlaps(
  aR1: number, aC1: number, aR2: number, aC2: number,
  qR1: number, qC1: number, qR2: number, qC2: number,
): boolean {
  const minR = Math.min(aR1, aR2), maxR = Math.max(aR1, aR2);
  const minC = Math.min(aC1, aC2), maxC = Math.max(aC1, aC2);
  return !(maxR < qR1 || minR > qR2 || maxC < qC1 || minC > qC2);
}

function makeGrid(opts: MockOpts = {}) {
  const cellColor = new Map<string, number>();
  for (const [r, c, color] of opts.cells ?? []) cellColor.set(`${r},${c}`, color ?? 0);
  const lines = opts.lines ?? [];
  const rects = opts.rects ?? [];
  const texts = opts.texts ?? [];
  const images = opts.images ?? [];
  const hit = opts.hit ?? {};
  const cellSize = opts.cellSize ?? 16;

  const g: Partial<GridCanvasWasm> = {
    // Cells
    get_cell: (r, c) => cellColor.has(`${r},${c}`),
    get_cell_color: (r, c) => cellColor.get(`${r},${c}`) ?? 0,
    get_filled_cells: () => {
      const out: number[] = [];
      for (const [k, color] of cellColor) {
        const [r, c] = k.split(',').map(Number);
        out.push(r, c, color);
      }
      return new Int32Array(out);
    },
    get_cell_size: () => cellSize,

    // Counts
    get_line_count: () => lines.length,
    get_rect_count: () => rects.length,
    get_text_count: () => texts.length,
    get_image_count: () => images.length,

    // Shape readers
    get_line: (idx) => new Int32Array(lines[idx] ?? [0, 0, 1, 1, 0, 10]),
    get_rect: (idx) => new Int32Array(rects[idx] ?? [0, 0, 2, 2, 0, 6]),
    get_text: (idx) => new Int32Array(texts[idx] ?? [0, 0, 0, 1, 1, 0, 0]),
    get_text_string: () => '',
    get_text_size: () => 1,
    get_image: (idx) => new Int32Array(images[idx] ?? [0, 0, 8, 8]),
    get_image_url: () => '',

    // Box intersections (bbox overlap of the shape vs. the query box)
    line_intersects_box: (i, r1, c1, r2, c2) => {
      const l = lines[i];
      return l ? bboxOverlaps(l[0], l[1], l[2], l[3], r1, c1, r2, c2) : false;
    },
    rect_intersects_box: (i, r1, c1, r2, c2) => {
      const s = rects[i];
      return s ? bboxOverlaps(s[0], s[1], s[2], s[3], r1, c1, r2, c2) : false;
    },
    text_intersects_box: (i, r1, c1, r2, c2) => {
      const t = texts[i];
      return t ? bboxOverlaps(t[0], t[1], t[0] + t[4], t[1] + t[3], r1, c1, r2, c2) : false;
    },
    image_intersects_box: (i, r1, c1, r2, c2) => {
      const m = images[i];
      return m ? bboxOverlaps(m[0], m[1], m[2], m[3], r1, c1, r2, c2) : false;
    },

    // Hit tests (return configured indices; default miss = -1)
    hit_test_line: () => hit.line ?? -1,
    hit_test_text: () => hit.text ?? -1,
    hit_test_rect: () => hit.rect ?? -1,
    hit_test_image: () => hit.image ?? -1,

    // Rendering / highlight: no-ops (draw_rotate_handle intentionally absent so
    // renderSelection skips the rotate-handle branch).
    render: () => {},
    render_with_selection_box: () => {},
    highlight_cell: () => {},
    highlight_line: () => {},
    highlight_rect: () => {},
    highlight_text: () => {},
    highlight_image: () => {},
    draw_handle: () => {},
    draw_selection_box: () => {},
  };
  return { ...stubWasm(), ...g };
}

function resetStore(grid: GridCanvasWasm | null = null) {
  useGridStore.setState({
    grid,
    tool: 'draw',
    selectedItems: [],
    selectMode: null,
    selectBoxStart: null,
    selectDragStart: null,
    dragStartedOnEmpty: false,
    isSelecting: false,
    previousSelection: [],
    textEdit: null,
    mousePos: { row: 0, col: 0 },
  });
}

describe('selection helpers (gridHelpers)', () => {
  it('selectionSignature is order-independent and stable', () => {
    const a: SelectedItem[] = [
      { type: 'cell', row: 1, col: 2 },
      { type: 'line', index: 3 },
      { type: 'rect', index: 0 },
    ];
    const b: SelectedItem[] = [
      { type: 'rect', index: 0 },
      { type: 'cell', row: 1, col: 2 },
      { type: 'line', index: 3 },
    ];
    // Same set, different insertion order → identical signature.
    expect(selectionSignature(a)).toBe(selectionSignature(b));
    // A genuinely different selection → different signature.
    const c: SelectedItem[] = [{ type: 'cell', row: 1, col: 2 }];
    expect(selectionSignature(c)).not.toBe(selectionSignature(a));
  });

  it('itemsEqual / isItemSelected distinguish type and identity', () => {
    // Same index but different kind must not be equal.
    expect(itemsEqual({ type: 'line', index: 0 }, { type: 'rect', index: 0 })).toBe(false);
    expect(itemsEqual({ type: 'cell', row: 2, col: 3 }, { type: 'cell', row: 2, col: 3 })).toBe(true);
    expect(itemsEqual({ type: 'cell', row: 2, col: 3 }, { type: 'cell', row: 2, col: 4 })).toBe(false);

    const sel: SelectedItem[] = [{ type: 'image', index: 1 }, { type: 'cell', row: 0, col: 0 }];
    expect(isItemSelected({ type: 'image', index: 1 }, sel)).toBe(true);
    expect(isItemSelected({ type: 'image', index: 2 }, sel)).toBe(false);
  });

  it('add/removeItemFromSelectionArray dedupe and remove without mutating', () => {
    const sel: SelectedItem[] = [{ type: 'cell', row: 0, col: 0 }];
    const added = addItemToSelectionArray({ type: 'cell', row: 0, col: 0 }, sel);
    // Duplicate is a no-op (returns the same array reference, unchanged length).
    expect(added).toHaveLength(1);

    const added2 = addItemToSelectionArray({ type: 'line', index: 4 }, sel);
    expect(added2).toHaveLength(2);
    expect(sel).toHaveLength(1); // original untouched

    const removed = removeItemFromSelectionArray({ type: 'cell', row: 0, col: 0 }, added2);
    expect(removed).toEqual([{ type: 'line', index: 4 }]);
  });

  it('getSelectionBoundsAll spans mixed item kinds (text uses boxW/boxH, image uses box)', () => {
    const grid = makeGrid({
      // text frame: top-left (2,3), boxW=4, boxH=5 → extends to (7,7).
      texts: [[2, 3, 0, 4, 5, 0, 0]],
      // image box rows 10..12, cols 10..15.
      images: [[10, 10, 12, 15]],
    });
    const items: SelectedItem[] = [
      { type: 'cell', row: 1, col: 1 },
      { type: 'text', index: 0 },
      { type: 'image', index: 0 },
    ];
    const bounds = getSelectionBoundsAll(items, grid);
    expect(bounds).toEqual({ minRow: 1, minCol: 1, maxRow: 12, maxCol: 15 });
    expect(getSelectionBoundsAll([], grid)).toBeNull();
  });
});

describe('box selection (additive / replace / cancel)', () => {
  beforeEach(() => resetStore());

  it('non-additive start clears the existing selection immediately', () => {
    const grid = makeGrid();
    resetStore(grid);
    useGridStore.setState({ selectedItems: [{ type: 'rect', index: 0 }] });

    useGridStore.getState().startBoxSelection({ row: 0, col: 0 }, false);

    expect(useGridStore.getState().selectedItems).toEqual([]);
    expect(useGridStore.getState().previousSelection).toEqual([]);
    expect(useGridStore.getState().selectMode).toBe('box');
    expect(useGridStore.getState().isSelecting).toBe(true);
  });

  it('additive box selection merges box items with the previous selection', () => {
    // A pre-selected rect (idx 0, far from the box) plus a filled cell in the box.
    const grid = makeGrid({
      rects: [[50, 50, 52, 52, 0, 6]],
      cells: [[2, 2, 0]],
    });
    resetStore(grid);
    useGridStore.setState({ selectedItems: [{ type: 'rect', index: 0 }] });

    useGridStore.getState().startBoxSelection({ row: 2, col: 2 }, true);
    // Selection is preserved during an additive drag.
    expect(useGridStore.getState().selectedItems).toEqual([{ type: 'rect', index: 0 }]);
    useGridStore.getState().finishBoxSelection({ row: 2, col: 2 });

    const sel = useGridStore.getState().selectedItems;
    expect(sel).toContainEqual({ type: 'rect', index: 0 });
    expect(sel).toContainEqual({ type: 'cell', row: 2, col: 2 });
    expect(sel).toHaveLength(2);
    // Transient box state is fully cleared on finish.
    expect(useGridStore.getState().selectMode).toBeNull();
    expect(useGridStore.getState().previousSelection).toEqual([]);
  });

  it('non-additive box selection returns only the box contents', () => {
    const grid = makeGrid({
      rects: [[50, 50, 52, 52, 0, 6]], // pre-selected, but outside the box
      cells: [[3, 4, 0]],
    });
    resetStore(grid);
    useGridStore.setState({ selectedItems: [{ type: 'rect', index: 0 }] });

    useGridStore.getState().startBoxSelection({ row: 3, col: 4 }, false);
    useGridStore.getState().finishBoxSelection({ row: 3, col: 4 });

    expect(useGridStore.getState().selectedItems).toEqual([{ type: 'cell', row: 3, col: 4 }]);
  });

  it('finishBoxSelection collects every intersecting item kind', () => {
    const grid = makeGrid({
      cells: [[1, 1, 0]],
      lines: [[0, 0, 3, 3, 0, 10]],
      rects: [[0, 0, 2, 2, 0, 6]],
      texts: [[1, 1, 0, 2, 2, 0, 0]],
      images: [[0, 0, 3, 3]],
    });
    resetStore(grid);

    useGridStore.getState().startBoxSelection({ row: 0, col: 0 }, false);
    useGridStore.getState().finishBoxSelection({ row: 3, col: 3 });

    const kinds = useGridStore.getState().selectedItems.map(i => i.type).sort();
    expect(kinds).toEqual(['cell', 'image', 'line', 'rect', 'text']);
  });

  it('cancelBoxSelection restores the pre-drag (additive) selection', () => {
    const grid = makeGrid({ cells: [[5, 5, 0]] });
    resetStore(grid);
    const original: SelectedItem[] = [{ type: 'rect', index: 0 }];
    useGridStore.setState({ selectedItems: original });

    useGridStore.getState().startBoxSelection({ row: 5, col: 5 }, true);
    useGridStore.getState().cancelBoxSelection();

    expect(useGridStore.getState().selectedItems).toEqual(original);
    expect(useGridStore.getState().selectMode).toBeNull();
    expect(useGridStore.getState().previousSelection).toEqual([]);
    expect(useGridStore.getState().isSelecting).toBe(false);
  });
});

describe('drag-select zero-movement release (dragStartedOnEmpty)', () => {
  beforeEach(() => resetStore());

  it('pressing empty space inside the selection and releasing without moving deselects', () => {
    const grid = makeGrid({ cells: [[0, 0, 0]] });
    resetStore(grid);
    useGridStore.setState({ selectedItems: [{ type: 'cell', row: 0, col: 0 }] });

    useGridStore.getState().startDragSelection({ row: 0, col: 0 }, true); // onEmpty = true
    useGridStore.getState().finishDragSelection({ row: 0, col: 0 }); // no movement

    expect(useGridStore.getState().selectedItems).toEqual([]);
    expect(useGridStore.getState().selectMode).toBeNull();
    expect(useGridStore.getState().dragStartedOnEmpty).toBe(false);
  });

  it('pressing on a shape and releasing without moving keeps the selection', () => {
    const grid = makeGrid({ cells: [[0, 0, 0]] });
    resetStore(grid);
    const sel: SelectedItem[] = [{ type: 'cell', row: 0, col: 0 }];
    useGridStore.setState({ selectedItems: sel });

    useGridStore.getState().startDragSelection({ row: 0, col: 0 }, false); // onEmpty = false
    useGridStore.getState().finishDragSelection({ row: 0, col: 0 }); // no movement

    expect(useGridStore.getState().selectedItems).toEqual(sel);
    expect(useGridStore.getState().selectMode).toBeNull();
  });
});

describe('hitTestShapes priority order', () => {
  beforeEach(() => resetStore());

  it('prefers line > text > rect > image > cell at the same point', () => {
    // All four shape hit-tests report a hit AND a cell is filled under the point.
    // cellSize 16, point (8,8) → row 0, col 0.
    const base: MockOpts = {
      cells: [[0, 0, 0]],
      hit: { line: 0, text: 1, rect: 2, image: 3 },
    };

    resetStore(makeGrid(base));
    expect(useGridStore.getState().hitTestShapes(8, 8)).toEqual({ type: 'line', index: 0 });

    resetStore(makeGrid({ ...base, hit: { line: -1, text: 1, rect: 2, image: 3 } }));
    expect(useGridStore.getState().hitTestShapes(8, 8)).toEqual({ type: 'text', index: 1 });

    resetStore(makeGrid({ ...base, hit: { line: -1, text: -1, rect: 2, image: 3 } }));
    expect(useGridStore.getState().hitTestShapes(8, 8)).toEqual({ type: 'rect', index: 2 });

    resetStore(makeGrid({ ...base, hit: { line: -1, text: -1, rect: -1, image: 3 } }));
    expect(useGridStore.getState().hitTestShapes(8, 8)).toEqual({ type: 'image', index: 3 });

    resetStore(makeGrid({ ...base, hit: {} }));
    expect(useGridStore.getState().hitTestShapes(8, 8)).toEqual({ type: 'cell', row: 0, col: 0 });
  });

  it('returns null when nothing is hit', () => {
    resetStore(makeGrid());
    expect(useGridStore.getState().hitTestShapes(8, 8)).toBeNull();
  });
});

describe('selectAll', () => {
  beforeEach(() => resetStore());

  it('switches to the select tool and enumerates every item kind', () => {
    const grid = makeGrid({
      cells: [[0, 0, 0], [1, 2, 3]],
      lines: [[0, 0, 1, 1, 0, 10]],
      rects: [[0, 0, 2, 2, 0, 6]],
      texts: [[0, 0, 0, 1, 1, 0, 0]],
      images: [[0, 0, 4, 4]],
    });
    resetStore(grid);

    useGridStore.getState().selectAll();

    expect(useGridStore.getState().tool).toBe('select');
    const sel = useGridStore.getState().selectedItems;
    const counts = sel.reduce<Record<string, number>>((m, i) => {
      m[i.type] = (m[i.type] ?? 0) + 1;
      return m;
    }, {});
    expect(counts).toEqual({ cell: 2, line: 1, rect: 1, text: 1, image: 1 });
  });

  it('is a no-op on an empty grid (nothing selected, tool unchanged)', () => {
    const grid = makeGrid();
    resetStore(grid);

    useGridStore.getState().selectAll();

    expect(useGridStore.getState().selectedItems).toEqual([]);
    expect(useGridStore.getState().tool).toBe('draw');
  });
});
