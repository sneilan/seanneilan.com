import { describe, it, expect } from 'vitest';
import { useGridStore, type SelectedItem } from './gridStore';
import type { GridCanvasWasm } from '../types/grid';
import { stubWasm } from './wasmStub';

/**
 * Coverage for the select tool's press decision tree (pressSelectAt) and the
 * drag ghost preview (renderDragPreview) — the gesture policy that used to live
 * in useCanvasMouse and is now store-owned so it's testable without a DOM.
 *
 * Geometry notes: cellSize is 2 (world px per fine unit, matching the real
 * grid), so world px = fine units × 2. The rotate handle floats
 * ROTATE_HANDLE_GAP (1.75) fine units above the selection's top-center with a
 * 10/zoom px grab tolerance; resize handles have a 9 px tolerance.
 */
type MockOpts = {
  squares?: Array<[number, number, number?, number?]>; // [row, col, color?, size?]
  lines?: number[][]; // [r1, c1, r2, c2, color, width]
  rects?: number[][]; // [r1, c1, r2, c2, fill, outline]
  texts?: number[][]; // [r, c, color, boxW, boxH, halign, valign]
  images?: number[][]; // [r1, c1, r2, c2]
  hit?: { line?: number; text?: number; rect?: number; image?: number };
};

function makeGrid(opts: MockOpts = {}) {
  const calls: Array<Array<string | number>> = [];
  const STRIDE = 4;
  const squares: number[] = (opts.squares ?? []).flatMap(([r, c, color, size]) => [r, c, color ?? 0, size ?? 1]);
  const squareCount = () => squares.length / STRIDE;
  const squareAt = (row: number, col: number) => {
    for (let i = squareCount() - 1; i >= 0; i--) {
      const s = i * STRIDE;
      const [r, c, size] = [squares[s], squares[s + 1], squares[s + 3]];
      if (row >= r && row < r + size && col >= c && col < c + size) return i;
    }
    return -1;
  };
  const lines = opts.lines ?? [];
  const rects = opts.rects ?? [];
  const texts = opts.texts ?? [];
  const images = opts.images ?? [];
  const hit = opts.hit ?? {};

  const g: Partial<GridCanvasWasm> = {
    get_square: (idx) => new Int32Array(squares.slice(idx * STRIDE, idx * STRIDE + STRIDE)),
    get_square_count: squareCount,
    square_at: squareAt,
    get_cell: (r, c) => squareAt(r, c) >= 0,
    get_cell_size: () => 2,

    get_line_count: () => lines.length,
    get_rect_count: () => rects.length,
    get_text_count: () => texts.length,
    get_image_count: () => images.length,
    get_line: (idx) => new Int32Array(lines[idx] ?? [0, 0, 1, 1, 0, 10]),
    get_rect: (idx) => new Int32Array(rects[idx] ?? [0, 0, 2, 2, 0, 6]),
    get_text: (idx) => new Int32Array(texts[idx] ?? [0, 0, 0, 1, 1, 0, 0]),
    get_text_string: () => 'hi',
    get_text_size: () => 2,
    get_image: (idx) => new Int32Array(images[idx] ?? [0, 0, 8, 8]),
    get_image_url: () => '',

    hit_test_line: () => hit.line ?? -1,
    hit_test_text: () => hit.text ?? -1,
    hit_test_rect: () => hit.rect ?? -1,
    hit_test_image: () => hit.image ?? -1,

    render: () => { calls.push(['render']); },
    highlight_square: (idx) => { calls.push(['highlight_square', idx]); },
    highlight_line: (idx) => { calls.push(['highlight_line', idx]); },
    highlight_rect: (idx) => { calls.push(['highlight_rect', idx]); },
    highlight_text: (idx) => { calls.push(['highlight_text', idx]); },
    highlight_image: (idx) => { calls.push(['highlight_image', idx]); },
    preview_square: (r, c, size, color) => { calls.push(['preview_square', r, c, size, color]); },
    preview_line: (r1, c1, r2, c2, color, w) => { calls.push(['preview_line', r1, c1, r2, c2, color, w]); },
    preview_rect: (r1, c1, r2, c2, fill, outline) => { calls.push(['preview_rect', r1, c1, r2, c2, fill, outline]); },
    preview_text: (r, c, color, size, boxW, boxH, halign, valign, text) => {
      calls.push(['preview_text', r, c, color, size, boxW, boxH, halign, valign, text]);
    },
    preview_image: () => { calls.push(['preview_image']); },
    draw_handle: () => {},
    draw_selection_box: () => {},
  };
  return { grid: { ...stubWasm(), ...g }, calls };
}

function resetStore(grid: GridCanvasWasm, selectedItems: SelectedItem[] = []) {
  useGridStore.setState({
    grid,
    tool: 'select',
    selectedItems,
    selectMode: null,
    selectBoxStart: null,
    selectDragStart: null,
    dragStartedOnEmpty: false,
    isSelecting: false,
    previousSelection: [],
    resizeTarget: null,
    resizeOrigin: null,
    rotateOrigin: null,
    subdivision: 8,
    textEdit: null,
  });
}

const press = (over: Partial<{ x: number; y: number; row: number; col: number; shift: boolean; zoom: number }>) =>
  useGridStore.getState().pressSelectAt({ x: 0, y: 0, row: 0, col: 0, shift: false, zoom: 1, ...over });

describe('pressSelectAt decision tree', () => {
  it('grabbing the rotate handle starts a rotate (wins over everything)', () => {
    // Square block rows/cols 8..15 → handle at fine (6.25, 11.5) = world (23, 12.5).
    const { grid } = makeGrid({ squares: [[8, 8, 0, 8]] });
    resetStore(grid, [{ type: 'cell', index: 0 }]);

    press({ x: 23, y: 12.5, row: 6, col: 11 });

    expect(useGridStore.getState().selectMode).toBe('rotate');
    expect(useGridStore.getState().rotateOrigin).not.toBeNull();
  });

  it('rotate-handle tolerance shrinks with zoom (a near-miss at high zoom falls through)', () => {
    const { grid } = makeGrid({ squares: [[8, 8, 0, 8]] });
    resetStore(grid, [{ type: 'cell', index: 0 }]);

    // 8 world px off the handle: inside 10/1 tolerance, outside 10/4.
    press({ x: 23 + 8, y: 12.5, row: 6, col: 15, zoom: 4 });

    expect(useGridStore.getState().selectMode).not.toBe('rotate');
  });

  it('grabbing a handle of a single selected rect starts a resize', () => {
    const { grid } = makeGrid({ rects: [[0, 0, 8, 8, 0, 6]] });
    resetStore(grid, [{ type: 'rect', index: 0 }]);

    // Bottom-right corner (8,8) = world (16,16), far from the rotate handle.
    press({ x: 16, y: 16, row: 8, col: 8 });

    expect(useGridStore.getState().selectMode).toBe('resize');
    expect(useGridStore.getState().resizeTarget).toEqual({ shape: 'rect', index: 0, handle: 4 });
  });

  it('pressing a member of a multi-selection drags the whole selection (no collapse)', () => {
    const { grid } = makeGrid({ squares: [[0, 0, 0, 8], [16, 16, 0, 8]] });
    const sel: SelectedItem[] = [{ type: 'cell', index: 0 }, { type: 'cell', index: 1 }];
    resetStore(grid, sel);

    press({ x: 34, y: 34, row: 17, col: 17 }); // on square 1

    expect(useGridStore.getState().selectMode).toBe('drag');
    expect(useGridStore.getState().selectedItems).toEqual(sel);
    expect(useGridStore.getState().dragStartedOnEmpty).toBe(false);
  });

  it('pressing empty space inside the selection bounds arms a deselect-on-release drag', () => {
    const { grid } = makeGrid({ squares: [[0, 0, 0, 8], [16, 16, 0, 8]] });
    resetStore(grid, [{ type: 'cell', index: 0 }, { type: 'cell', index: 1 }]);

    press({ x: 24, y: 24, row: 12, col: 12 }); // between the two squares

    expect(useGridStore.getState().selectMode).toBe('drag');
    expect(useGridStore.getState().dragStartedOnEmpty).toBe(true);
  });

  it('shift-press toggles an item in and out of the selection', () => {
    const { grid } = makeGrid({ lines: [[0, 0, 8, 8, 0, 10]], hit: { line: 0 } });
    resetStore(grid, []);

    press({ x: 4, y: 4, row: 2, col: 2, shift: true });
    expect(useGridStore.getState().selectedItems).toEqual([{ type: 'line', index: 0 }]);
    expect(useGridStore.getState().selectMode).toBeNull(); // toggle, not drag

    press({ x: 4, y: 4, row: 2, col: 2, shift: true });
    expect(useGridStore.getState().selectedItems).toEqual([]);
  });

  it('a plain press on a shape selects it alone and arms a drag', () => {
    const { grid, calls } = makeGrid({ rects: [[20, 20, 28, 28, 0, 6]], hit: { rect: 0 } });
    resetStore(grid, []);

    press({ x: 44, y: 44, row: 22, col: 22 });

    expect(useGridStore.getState().selectedItems).toEqual([{ type: 'rect', index: 0 }]);
    expect(useGridStore.getState().selectMode).toBe('drag');
    // Final paint is render + bare highlight (no handles while a drag is armed).
    expect(calls.slice(-2)).toEqual([['render'], ['highlight_rect', 0]]);
  });

  it('pressing empty space starts a box selection; shift makes it additive', () => {
    const { grid } = makeGrid({ rects: [[50, 50, 52, 52, 0, 6]] });
    resetStore(grid, [{ type: 'rect', index: 0 }]);

    press({ x: 4, y: 4, row: 2, col: 2, shift: true }); // far from the rect

    expect(useGridStore.getState().selectMode).toBe('box');
    expect(useGridStore.getState().previousSelection).toEqual([{ type: 'rect', index: 0 }]);

    resetStore(grid, [{ type: 'rect', index: 0 }]);
    press({ x: 4, y: 4, row: 2, col: 2 }); // non-additive: clears immediately

    expect(useGridStore.getState().selectMode).toBe('box');
    expect(useGridStore.getState().selectedItems).toEqual([]);
  });
});

describe('renderDragPreview', () => {
  it('ghosts every shape kind at the snapped delta (images move but get no ghost)', () => {
    const { grid, calls } = makeGrid({
      squares: [[0, 0, 3, 8]],
      lines: [[0, 0, 8, 8, 2, 10]],
      rects: [[0, 0, 8, 8, 4, 6]],
      texts: [[1, 2, 3, 4, 5, 0, 1]],
      images: [[0, 0, 8, 8]],
    });
    resetStore(grid, [
      { type: 'cell', index: 0 },
      { type: 'line', index: 0 },
      { type: 'rect', index: 0 },
      { type: 'text', index: 0 },
      { type: 'image', index: 0 },
    ]);
    useGridStore.setState({ selectMode: 'drag', selectDragStart: { row: 0, col: 0 }, isSelecting: true });
    calls.length = 0;

    // Subdivision 8 → snap step 1 fine unit → delta passes through as (3, 3).
    useGridStore.getState().renderDragPreview({ row: 3, col: 3 });

    expect(calls).toEqual([
      ['render'],
      ['preview_square', 3, 3, 8, 3],
      ['preview_line', 3, 3, 11, 11, 2, 10],
      ['preview_rect', 3, 3, 11, 11, 4, 6],
      ['preview_text', 4, 5, 3, 2, 4, 5, 0, 1, 'hi'],
    ]);
  });

  it('snaps the ghost delta to the active grid step (same rule as the commit)', () => {
    const { grid, calls } = makeGrid({ squares: [[0, 0, 0, 8]] });
    resetStore(grid, [{ type: 'cell', index: 0 }]);
    useGridStore.setState({
      selectMode: 'drag', selectDragStart: { row: 0, col: 0 }, isSelecting: true,
      subdivision: 1, // whole cells: snap step = 8 fine units
    });
    calls.length = 0;

    useGridStore.getState().renderDragPreview({ row: 5, col: 5 }); // 5 rounds to 8

    expect(calls).toEqual([['render'], ['preview_square', 8, 8, 8, 0]]);
  });

  it('is a no-op without an active drag start or selection', () => {
    const { grid, calls } = makeGrid({ squares: [[0, 0, 0, 8]] });
    resetStore(grid, [{ type: 'cell', index: 0 }]);
    calls.length = 0;

    useGridStore.getState().renderDragPreview({ row: 3, col: 3 }); // no selectDragStart

    expect(calls).toEqual([]);
  });
});
