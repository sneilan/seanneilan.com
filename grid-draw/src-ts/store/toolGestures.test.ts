import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore } from './gridStore';
import type { GridCanvasWasm } from '../types/grid';
import { makeGrid } from './testGrid';

/**
 * Coverage for the tool-slice gesture actions that moved in from useCanvasMouse:
 * pressDrawAt's draw-vs-erase rule (transparent always erases, otherwise toggle
 * on coverage), dragDrawAt's stroke guard, the line/rect rubber-band previews
 * (start renders a zero-length band; cancel repaints and resets), and the
 * draw/outline color sync into WASM on every style change.
 */

function resetStore(grid: GridCanvasWasm) {
  useGridStore.getState().resetHistory();
  useGridStore.setState({
    grid,
    tool: 'draw',
    colorIdx: 0,
    outlineIdx: 6,
    subdivision: 1,
    isDrawing: false,
    drawMode: false,
    lineStart: null,
    rectStart: null,
    textEdit: null,
    selectedItems: [],
  });
}

describe('pressDrawAt / dragDrawAt', () => {
  beforeEach(() => useGridStore.getState().resetHistory());

  it('pressing an empty cell draws; the whole down→drag→up stroke is one undo step', () => {
    const { grid } = makeGrid();
    resetStore(grid);

    useGridStore.getState().pressDrawAt({ row: 0, col: 0 });
    expect(useGridStore.getState().isDrawing).toBe(true);
    expect(useGridStore.getState().drawMode).toBe(true);
    useGridStore.getState().dragDrawAt({ row: 8, col: 8 });
    useGridStore.getState().endDrawStroke();
    useGridStore.getState().stopDrawing();

    expect(grid.get_square_count()).toBe(2);
    useGridStore.getState().undo();
    expect(grid.get_square_count()).toBe(0); // one batch undid both squares
  });

  it('pressing a covered cell toggles to erase mode', () => {
    const { grid } = makeGrid({ squares: [[0, 0, 3, 8]] });
    resetStore(grid);

    useGridStore.getState().pressDrawAt({ row: 0, col: 0 });

    expect(useGridStore.getState().drawMode).toBe(false); // erasing
    expect(grid.get_square_count()).toBe(0);
  });

  it('the transparent color always erases, even over empty cells', () => {
    const { grid } = makeGrid({ squares: [[0, 0, 3, 8]] });
    resetStore(grid);
    useGridStore.setState({ colorIdx: 6 });

    // Press on an EMPTY cell far from the square: still erase mode.
    useGridStore.getState().pressDrawAt({ row: 100, col: 100 });
    expect(useGridStore.getState().drawMode).toBe(false);
    expect(grid.get_square_count()).toBe(1); // nothing there to erase

    // Dragging across the square erases it.
    useGridStore.getState().dragDrawAt({ row: 0, col: 0 });
    expect(grid.get_square_count()).toBe(0);
  });

  it('dragDrawAt is a no-op when no stroke is active', () => {
    const { grid } = makeGrid();
    resetStore(grid);

    useGridStore.getState().dragDrawAt({ row: 0, col: 0 });

    expect(grid.get_square_count()).toBe(0);
  });
});

describe('line/rect rubber-band previews', () => {
  it('startLine renders a zero-length band; renderLinePreview follows the pointer; cancelLine repaints and resets', () => {
    const { grid, paints } = makeGrid();
    resetStore(grid);
    useGridStore.setState({ tool: 'line' });

    useGridStore.getState().startLine({ row: 8, col: 8 });
    expect(paints).toContainEqual(['render_with_line', 8, 8, 8, 8]);

    useGridStore.getState().renderLinePreview({ row: 16, col: 24 });
    expect(paints).toContainEqual(['render_with_line', 8, 8, 16, 24]);

    paints.length = 0;
    useGridStore.getState().cancelLine();
    expect(paints).toEqual([['render']]); // rubber band cleared
    expect(useGridStore.getState().lineStart).toBeNull();
    expect(useGridStore.getState().isDrawing).toBe(false);
  });

  it('renderRectPreview is a no-op without a rect gesture in progress', () => {
    const { grid, paints } = makeGrid();
    resetStore(grid);

    useGridStore.getState().renderRectPreview({ row: 16, col: 16 });
    expect(paints).toEqual([]);

    useGridStore.getState().startRect({ row: 0, col: 0 });
    useGridStore.getState().renderRectPreview({ row: 16, col: 16 });
    expect(paints).toContainEqual(['render_with_rect', 0, 0, 16, 16]);
  });
});

describe('draw/outline color sync into WASM', () => {
  it('setColorIdx / setOutlineIdx push the pick to the grid immediately', () => {
    const { grid, calls } = makeGrid();
    resetStore(grid);

    useGridStore.getState().setColorIdx(2);
    expect(calls).toContainEqual(['set_draw_color', 2]);

    useGridStore.getState().setOutlineIdx(4);
    expect(calls).toContainEqual(['set_outline_color', 4]);
  });

  it('setTool pushes the restored per-tool style; setGrid pushes the current one', () => {
    const { grid, calls } = makeGrid();
    resetStore(grid);
    // rect's remembered style: transparent fill (6), black outline (0).
    useGridStore.getState().setTool('rect');
    expect(calls).toContainEqual(['set_draw_color', 6]);
    expect(calls).toContainEqual(['set_outline_color', 0]);

    // A freshly attached grid gets the active colors without any user action.
    const fresh = makeGrid();
    useGridStore.getState().setGrid(fresh.grid);
    expect(fresh.calls).toContainEqual(['set_draw_color', 6]);
    expect(fresh.calls).toContainEqual(['set_outline_color', 0]);
    useGridStore.getState().setGrid(null); // detach for later tests
  });
});
