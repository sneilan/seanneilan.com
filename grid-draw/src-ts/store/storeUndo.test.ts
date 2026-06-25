import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore, type SelectedItem } from './gridStore';
import type { GridCanvasWasm } from '../types/grid';

/**
 * Integration tests for the edit/undo layer wired into the store. Every store
 * mutation action must route through History so undo/redo produce the exact
 * inverse WASM calls. The mock records mutations and serves configurable reads
 * so actions can capture prior state.
 */
function makeGrid(opts?: {
  lines?: number[][];
  rects?: number[][];
  cell?: (r: number, c: number) => boolean;
  cellColor?: (r: number, c: number) => number;
}) {
  const calls: Array<[string, ...number[]]> = [];
  const lines = opts?.lines ?? [];
  const rects = opts?.rects ?? [];
  // Track counts so insert/delete keep get_*_count consistent (the apply-layer
  // range guard reads these); start from the seeded shape arrays.
  let lineCount = lines.length;
  let rectCount = rects.length;
  let textCount = 0;
  const g: Partial<GridCanvasWasm> = {
    set_cell: (r, c, v) => calls.push(['set_cell', r, c, v ? 1 : 0]),
    set_cell_color: (r, c, color) => calls.push(['set_cell_color', r, c, color]),
    set_draw_color: (idx) => calls.push(['set_draw_color', idx]),
    set_outline_color: () => {},
    set_line_color: (idx, color) => calls.push(['set_line_color', idx, color]),
    set_rect_fill: (idx, color) => calls.push(['set_rect_fill', idx, color]),
    set_rect_outline: (idx, color) => calls.push(['set_rect_outline', idx, color]),
    move_line: (idx, dr, dc) => calls.push(['move_line', idx, dr, dc]),
    move_rect: (idx, dr, dc) => calls.push(['move_rect', idx, dr, dc]),
    set_line: (idx, r1, c1, r2, c2) => calls.push(['set_line', idx, r1, c1, r2, c2]),
    set_rect: (idx, r1, c1, r2, c2) => calls.push(['set_rect', idx, r1, c1, r2, c2]),
    insert_line: (idx, r1, c1, r2, c2, color) => { lineCount++; calls.push(['insert_line', idx, r1, c1, r2, c2, color]); },
    insert_rect: (idx, r1, c1, r2, c2, fill, outline) => { rectCount++; calls.push(['insert_rect', idx, r1, c1, r2, c2, fill, outline]); },
    delete_line: (idx) => { lineCount--; calls.push(['delete_line', idx]); },
    delete_rect: (idx) => { rectCount--; calls.push(['delete_rect', idx]); },
    insert_text: (idx, r, c, color) => { textCount++; calls.push(['insert_text', idx, r, c, color]); },
    delete_text: (idx) => { textCount--; calls.push(['delete_text', idx]); },
    move_text: (idx, dr, dc) => calls.push(['move_text', idx, dr, dc]),
    set_text_color: (idx, color) => calls.push(['set_text_color', idx, color]),
    get_text_count: () => textCount,
    get_text: () => new Int32Array([1, 0, 0, 1, 1]),
    get_text_string: () => '',
    get_text_size: () => 1,
    delete_cell: (r, c) => calls.push(['delete_cell', r, c]),
    get_line: (idx) => new Int32Array(lines[idx] ?? [0, 0, 1, 1, 0]),
    get_rect: (idx) => new Int32Array(rects[idx] ?? [0, 0, 2, 2, 0, 6]),
    get_line_count: () => lineCount,
    get_rect_count: () => rectCount,
    get_cell: (r, c) => (opts?.cell ? opts.cell(r, c) : false),
    get_cell_color: (r, c) => (opts?.cellColor ? opts.cellColor(r, c) : 0),
    get_cell_size: () => 16,
    render: () => {},
    highlight_cell: () => {},
    highlight_line: () => {},
    highlight_rect: () => {},
    draw_handle: () => {},
    draw_selection_box: () => {},
  };
  return { grid: g as unknown as GridCanvasWasm, calls };
}

function reset(grid: GridCanvasWasm) {
  useGridStore.setState({ grid, selectedItems: [], colorIdx: 0, outlineIdx: 6 });
  useGridStore.getState().resetHistory();
}

describe('store undo/redo integration', () => {
  beforeEach(() => {
    useGridStore.setState({ grid: null, selectedItems: [], colorIdx: 0, outlineIdx: 6 });
  });

  it('pickColor is undoable and restores prior fills/colors', () => {
    const { grid, calls } = makeGrid({
      rects: [[0, 0, 2, 2, 3, 6]], // fill index 3
      lines: [[0, 0, 1, 1, 2]],    // color index 2
    });
    reset(grid);
    const selectedItems: SelectedItem[] = [
      { type: 'rect', index: 0 },
      { type: 'line', index: 0 },
    ];
    useGridStore.setState({ grid, selectedItems });

    useGridStore.getState().pickColor(5);
    expect(calls).toContainEqual(['set_rect_fill', 0, 5]);
    expect(calls).toContainEqual(['set_line_color', 0, 5]);

    calls.length = 0;
    useGridStore.getState().undo();
    // Inverse restores the captured prior colors.
    expect(calls).toContainEqual(['set_rect_fill', 0, 3]);
    expect(calls).toContainEqual(['set_line_color', 0, 2]);
  });

  it('deleteSelected is undoable and re-inserts shapes at their indices', () => {
    const { grid, calls } = makeGrid({
      rects: [[1, 2, 3, 4, 5, 6]],
    });
    reset(grid);
    useGridStore.setState({ grid, selectedItems: [{ type: 'rect', index: 0 }] });

    useGridStore.getState().deleteSelected();
    expect(calls).toContainEqual(['delete_rect', 0]);

    calls.length = 0;
    useGridStore.getState().undo();
    expect(calls).toContainEqual(['insert_rect', 0, 1, 2, 3, 4, 5, 6]);

    calls.length = 0;
    useGridStore.getState().redo();
    expect(calls).toContainEqual(['delete_rect', 0]);
  });

  it('paste is undoable and removes the pasted shapes', () => {
    const { grid, calls } = makeGrid();
    reset(grid);
    useGridStore.setState({
      grid,
      clipboard: {
        cells: [],
        lines: [{ relR1: 0, relC1: 0, relR2: 1, relC2: 1, color: 2 }],
        rects: [],
        texts: [],
        originRow: 0,
        originCol: 0,
      },
    });

    useGridStore.getState().paste();
    expect(calls.some(c => c[0] === 'insert_line')).toBe(true);

    calls.length = 0;
    useGridStore.getState().undo();
    expect(calls.some(c => c[0] === 'delete_line')).toBe(true);
  });

  it('move (finishDragSelection) is undoable and moves shapes back', () => {
    const { grid, calls } = makeGrid({ rects: [[0, 0, 2, 2, 0, 6]] });
    reset(grid);
    useGridStore.setState({ grid, selectedItems: [{ type: 'rect', index: 0 }] });

    useGridStore.getState().startDragSelection({ row: 1, col: 1 });
    useGridStore.getState().finishDragSelection({ row: 3, col: 4 });
    expect(calls).toContainEqual(['move_rect', 0, 2, 3]);

    calls.length = 0;
    useGridStore.getState().undo();
    expect(calls).toContainEqual(['move_rect', 0, -2, -3]);
  });

  it('a freehand draw stroke is one undo step', () => {
    const { grid, calls } = makeGrid({ cell: () => false });
    reset(grid);
    useGridStore.setState({ grid, colorIdx: 2 });

    useGridStore.getState().beginDrawStroke();
    useGridStore.getState().drawCellAt(0, 0, true);
    useGridStore.getState().drawCellAt(0, 1, true);
    useGridStore.getState().endDrawStroke();

    expect(useGridStore.getState().canUndo()).toBe(true);

    calls.length = 0;
    useGridStore.getState().undo();
    // One undo reverts both cells (reverse order), clearing them.
    expect(calls).toEqual([
      ['set_cell', 0, 1, 0],
      ['set_cell', 0, 0, 0],
    ]);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });

  it('canUndo/canRedo reflect history state', () => {
    const { grid } = makeGrid({ rects: [[0, 0, 2, 2, 0, 6]] });
    reset(grid);
    expect(useGridStore.getState().canUndo()).toBe(false);
    expect(useGridStore.getState().canRedo()).toBe(false);

    useGridStore.setState({ grid, selectedItems: [{ type: 'rect', index: 0 }] });
    useGridStore.getState().pickColor(4);
    expect(useGridStore.getState().canUndo()).toBe(true);

    useGridStore.getState().undo();
    expect(useGridStore.getState().canUndo()).toBe(false);
    expect(useGridStore.getState().canRedo()).toBe(true);
  });
});
