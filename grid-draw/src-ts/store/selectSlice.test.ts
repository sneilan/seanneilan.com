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
import { makeGrid as makeTestGrid, type TestGridOpts } from './testGrid';

/**
 * Focused coverage for the selection slice (src-ts/store/slices/selectSlice.ts)
 * and the pure selection helpers (src-ts/store/gridHelpers.ts). These exercise
 * behaviors NOT covered by dragMove.test.ts (drag moves) or pasteBox.test.ts
 * (single/multi paste box drawing): additive vs. replacing box selection,
 * cancel restoring the previous selection, the dragStartedOnEmpty
 * deselect-on-release rule, hitTestShapes priority order, selectAll across all
 * item kinds, mixed-type selection bounds, and signature order-independence.
 *
 * A drawn square is ONE atomic record [r, c, color, size] (size in fine units),
 * index-addressed like every other shape — so a selected 'cell' is { type:
 * 'cell', index } and box selection picks WHOLE squares that touch the box.
 *
 * Uses the shared recording mock (store/testGrid), defaulted to cellSize 16 so
 * the hitTestShapes tests' pixel→fine math stays as written ((8,8) → cell 0).
 */
function makeGrid(opts: TestGridOpts = {}): GridCanvasWasm {
  return makeTestGrid({ cellSize: 16, ...opts }).grid;
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
      { type: 'cell', index: 2 },
      { type: 'line', index: 3 },
      { type: 'rect', index: 0 },
    ];
    const b: SelectedItem[] = [
      { type: 'rect', index: 0 },
      { type: 'cell', index: 2 },
      { type: 'line', index: 3 },
    ];
    // Same set, different insertion order → identical signature.
    expect(selectionSignature(a)).toBe(selectionSignature(b));
    // A genuinely different selection → different signature.
    const c: SelectedItem[] = [{ type: 'cell', index: 2 }];
    expect(selectionSignature(c)).not.toBe(selectionSignature(a));
  });

  it('itemsEqual / isItemSelected distinguish type and identity', () => {
    // Same index but different kind must not be equal.
    expect(itemsEqual({ type: 'line', index: 0 }, { type: 'rect', index: 0 })).toBe(false);
    expect(itemsEqual({ type: 'cell', index: 5 }, { type: 'cell', index: 5 })).toBe(true);
    expect(itemsEqual({ type: 'cell', index: 5 }, { type: 'cell', index: 6 })).toBe(false);

    const sel: SelectedItem[] = [{ type: 'image', index: 1 }, { type: 'cell', index: 0 }];
    expect(isItemSelected({ type: 'image', index: 1 }, sel)).toBe(true);
    expect(isItemSelected({ type: 'image', index: 2 }, sel)).toBe(false);
  });

  it('add/removeItemFromSelectionArray dedupe and remove without mutating', () => {
    const sel: SelectedItem[] = [{ type: 'cell', index: 0 }];
    const added = addItemToSelectionArray({ type: 'cell', index: 0 }, sel);
    // Duplicate is a no-op (returns the same array reference, unchanged length).
    expect(added).toHaveLength(1);

    const added2 = addItemToSelectionArray({ type: 'line', index: 4 }, sel);
    expect(added2).toHaveLength(2);
    expect(sel).toHaveLength(1); // original untouched

    const removed = removeItemFromSelectionArray({ type: 'cell', index: 0 }, added2);
    expect(removed).toEqual([{ type: 'line', index: 4 }]);
  });

  it('getSelectionBoundsAll spans mixed item kinds (square block, text boxW/boxH, image box)', () => {
    const grid = makeGrid({
      // one eighth square (size 1) at (1,1) — covers exactly fine cell (1,1).
      squares: [[1, 1, 0, 1]],
      // text frame: top-left (2,3), boxW=4, boxH=5 → extends to (7,7).
      texts: [[2, 3, 0, 4, 5, 0, 0]],
      // image box rows 10..12, cols 10..15.
      images: [[10, 10, 12, 15]],
    });
    const items: SelectedItem[] = [
      { type: 'cell', index: 0 },
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
    // A pre-selected rect (idx 0, far from the box) plus a square inside the box.
    const grid = makeGrid({
      rects: [[50, 50, 52, 52, 0, 6]],
      squares: [[2, 2, 0, 1]],
    });
    resetStore(grid);
    useGridStore.setState({ selectedItems: [{ type: 'rect', index: 0 }] });

    useGridStore.getState().startBoxSelection({ row: 2, col: 2 }, true);
    // Selection is preserved during an additive drag.
    expect(useGridStore.getState().selectedItems).toEqual([{ type: 'rect', index: 0 }]);
    useGridStore.getState().finishBoxSelection({ row: 2, col: 2 });

    const sel = useGridStore.getState().selectedItems;
    expect(sel).toContainEqual({ type: 'rect', index: 0 });
    expect(sel).toContainEqual({ type: 'cell', index: 0 });
    expect(sel).toHaveLength(2);
    // Transient box state is fully cleared on finish.
    expect(useGridStore.getState().selectMode).toBeNull();
    expect(useGridStore.getState().previousSelection).toEqual([]);
  });

  it('non-additive box selection returns only the box contents', () => {
    const grid = makeGrid({
      rects: [[50, 50, 52, 52, 0, 6]], // pre-selected, but outside the box
      squares: [[3, 4, 0, 1]],
    });
    resetStore(grid);
    useGridStore.setState({ selectedItems: [{ type: 'rect', index: 0 }] });

    useGridStore.getState().startBoxSelection({ row: 3, col: 4 }, false);
    useGridStore.getState().finishBoxSelection({ row: 3, col: 4 });

    expect(useGridStore.getState().selectedItems).toEqual([{ type: 'cell', index: 0 }]);
  });

  it('finishBoxSelection collects every intersecting item kind', () => {
    const grid = makeGrid({
      squares: [[1, 1, 0, 1]],
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
    const grid = makeGrid({ squares: [[5, 5, 0, 1]] });
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
    const grid = makeGrid({ squares: [[0, 0, 0, 1]] });
    resetStore(grid);
    useGridStore.setState({ selectedItems: [{ type: 'cell', index: 0 }] });

    useGridStore.getState().startDragSelection({ row: 0, col: 0 }, true); // onEmpty = true
    useGridStore.getState().finishDragSelection({ row: 0, col: 0 }); // no movement

    expect(useGridStore.getState().selectedItems).toEqual([]);
    expect(useGridStore.getState().selectMode).toBeNull();
    expect(useGridStore.getState().dragStartedOnEmpty).toBe(false);
  });

  it('pressing on a shape and releasing without moving keeps the selection', () => {
    const grid = makeGrid({ squares: [[0, 0, 0, 1]] });
    resetStore(grid);
    const sel: SelectedItem[] = [{ type: 'cell', index: 0 }];
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
    // All four shape hit-tests report a hit AND a square covers the point.
    // cellSize 16, point (8,8) → row 0, col 0.
    const base: TestGridOpts = {
      squares: [[0, 0, 0, 1]],
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
    expect(useGridStore.getState().hitTestShapes(8, 8)).toEqual({ type: 'cell', index: 0 });
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
      squares: [[0, 0, 0, 1], [1, 2, 3, 1]],
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
