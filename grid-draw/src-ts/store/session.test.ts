import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore } from './gridStore';
import type { Edit } from './edits/types';
import { makeGrid } from './testGrid';

/**
 * Action-driven tests for the document/session layer: select-all, the
 * current-document name + save-state, and history export/restore. Each test
 * drives a store action and asserts the resulting machine state — no React,
 * no DOM, no effects.
 */
describe('session/document actions', () => {
  beforeEach(() => {
    useGridStore.setState({
      grid: null, selectedItems: [], colorIdx: 0, outlineIdx: 6,
      currentName: null, saveState: 'idle', saveMessage: '', tool: 'draw',
    });
    useGridStore.getState().resetHistory();
  });

  it('selectAll selects every element and switches to the select tool', () => {
    // Two atomic square records (index-addressed, z-order = insertion order),
    // one line, one rect. selectAll enumerates squares by index, then shapes.
    const { grid } = makeGrid({
      squares: [[0, 0, 0, 8], [1, 1, 0, 8]],
      lines: [[0, 0, 1, 1, 0]],
      rects: [[0, 0, 2, 2, 0, 6]],
    });
    useGridStore.setState({ grid, tool: 'draw', selectedItems: [] });

    useGridStore.getState().selectAll();

    const { selectedItems, tool } = useGridStore.getState();
    expect(tool).toBe('select');
    expect(selectedItems).toContainEqual({ type: 'cell', index: 0 });
    expect(selectedItems).toContainEqual({ type: 'cell', index: 1 });
    expect(selectedItems).toContainEqual({ type: 'line', index: 0 });
    expect(selectedItems).toContainEqual({ type: 'rect', index: 0 });
    expect(selectedItems).toHaveLength(4);
  });

  it('selectAll on an empty grid is a no-op', () => {
    const { grid } = makeGrid();
    useGridStore.setState({ grid, tool: 'draw', selectedItems: [] });

    useGridStore.getState().selectAll();

    expect(useGridStore.getState().selectedItems).toEqual([]);
    expect(useGridStore.getState().tool).toBe('draw');
  });

  it('setCurrentName and setSaveState update document state', () => {
    useGridStore.getState().setCurrentName('abcd1234');
    expect(useGridStore.getState().currentName).toBe('abcd1234');

    useGridStore.getState().setSaveState('error', 'boom');
    expect(useGridStore.getState().saveState).toBe('error');
    expect(useGridStore.getState().saveMessage).toBe('boom');
  });

  it('loadDesignWithHistory restores the grid and the undo/redo stacks', () => {
    const { grid } = makeGrid();
    useGridStore.setState({ grid });

    // Legacy (no-sub) whole-cell design: [0,0,2] → a 1x square at the origin.
    const design = { w: 1, h: 1, cells: [[0, 0, 2]], lines: [], rects: [], texts: [] };
    // A persisted history built from the CURRENT edit vocabulary (square records)
    // installs verbatim, so undo continues exactly as it did before saving.
    const stacks: { undo: Edit[]; redo: Edit[] } = {
      undo: [{ kind: 'addSquare', idx: 0, square: { r: 0, c: 0, color: 2, size: 8 } }],
      redo: [],
    };

    useGridStore.getState().loadDesignWithHistory(design, stacks);

    // Grid reflects the loaded design (the 1x square covers the origin cell)...
    expect(grid.get_cell(0, 0)).toBe(true);
    // ...and the persisted history is installed verbatim (continue undo as before).
    expect(useGridStore.getState().canUndo()).toBe(true);
    expect(useGridStore.getState().exportHistory().undo).toEqual(stacks.undo);
  });

  it('loadDesignWithHistory drops a legacy per-fine-cell history but still loads the design', () => {
    const { grid } = makeGrid();
    useGridStore.setState({ grid });

    const design = { w: 1, h: 1, cells: [[0, 0, 2]], lines: [], rects: [], texts: [] };
    // Stacks saved before the square-record refactor carry setCell/setCellColor/
    // setCellState kinds that no longer exist. They arrive as untyped JSON, and
    // importing them would corrupt the document — so the history is dropped while
    // the drawing itself still loads.
    const legacyStacks = JSON.parse(JSON.stringify({
      undo: [{ kind: 'setCell', row: 0, col: 0, from: false, to: true }],
      redo: [],
    }));

    useGridStore.getState().loadDesignWithHistory(design, legacyStacks);

    expect(grid.get_cell(0, 0)).toBe(true);
    expect(useGridStore.getState().canUndo()).toBe(false);
    expect(useGridStore.getState().canRedo()).toBe(false);
  });

  it('loadDesignWithHistory with no stacks loads a clean (empty) history', () => {
    const { grid } = makeGrid();
    useGridStore.setState({ grid });

    const design = { w: 1, h: 1, cells: [[0, 0, 1]], lines: [], rects: [], texts: [] };
    useGridStore.getState().loadDesignWithHistory(design, null);

    expect(grid.get_cell(0, 0)).toBe(true);
    expect(useGridStore.getState().canUndo()).toBe(false);
    expect(useGridStore.getState().canRedo()).toBe(false);
  });

  it('exportHistory snapshots edits committed via actions', () => {
    const { grid } = makeGrid();
    useGridStore.setState({ grid, colorIdx: 2 });

    useGridStore.getState().beginDrawStroke();
    useGridStore.getState().drawCellAt(0, 0, true);
    useGridStore.getState().endDrawStroke();

    const snap = useGridStore.getState().exportHistory();
    expect(snap.undo.length).toBe(1);
    expect(snap.redo.length).toBe(0);
  });
});
