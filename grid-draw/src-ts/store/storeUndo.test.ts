import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore, type SelectedItem } from './gridStore';
import type { GridCanvasWasm } from '../types/grid';
import { makeGrid } from './testGrid';

/**
 * Integration tests for the edit/undo layer wired into the store. Every store
 * mutation action must route through History so undo/redo produce the exact
 * inverse WASM calls. The shared testGrid mock records mutations and tracks
 * square records in-memory so actions can capture prior state.
 */
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
        lines: [{ relR1: 0, relC1: 0, relR2: 1, relC2: 1, color: 2, width: 10 }],
        rects: [],
        texts: [],
        images: [],
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
    // Fine-unit delta → run at the 1/8 grid (drags snap to the active step).
    useGridStore.setState({ grid, selectedItems: [{ type: 'rect', index: 0 }], subdivision: 8 });

    useGridStore.getState().startDragSelection({ row: 1, col: 1 });
    useGridStore.getState().finishDragSelection({ row: 3, col: 4 });
    expect(calls).toContainEqual(['move_rect', 0, 2, 3]);

    calls.length = 0;
    useGridStore.getState().undo();
    expect(calls).toContainEqual(['move_rect', 0, -2, -3]);
  });

  it('a freehand draw stroke is one undo step', () => {
    const { grid, calls } = makeGrid();
    reset(grid);
    // subdivision 8 → one fine-unit square per draw (size = CELL_UNITS/8 = 1),
    // so a stroke over two points stacks two atomic squares, not two blocks.
    useGridStore.setState({ grid, colorIdx: 2, subdivision: 8 });

    useGridStore.getState().beginDrawStroke();
    useGridStore.getState().drawCellAt(0, 0, true);
    useGridStore.getState().drawCellAt(0, 1, true);
    useGridStore.getState().endDrawStroke();

    expect(useGridStore.getState().canUndo()).toBe(true);

    calls.length = 0;
    useGridStore.getState().undo();
    // One undo deletes both squares (reverse insertion order).
    expect(calls).toEqual([
      ['delete_square', 1],
      ['delete_square', 0],
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
