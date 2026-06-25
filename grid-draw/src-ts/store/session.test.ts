import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore } from './gridStore';
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
    const { grid } = makeGrid({
      cell: (r, c) => (r === 0 && c === 0) || (r === 1 && c === 1),
      lines: [[0, 0, 1, 1, 0]],
      rects: [[0, 0, 2, 2, 0, 6]],
    });
    useGridStore.setState({ grid, tool: 'draw', selectedItems: [] });

    useGridStore.getState().selectAll();

    const { selectedItems, tool } = useGridStore.getState();
    expect(tool).toBe('select');
    expect(selectedItems).toContainEqual({ type: 'cell', row: 0, col: 0 });
    expect(selectedItems).toContainEqual({ type: 'cell', row: 1, col: 1 });
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

    const design = { w: 1, h: 1, cells: [[0, 0, 2]], lines: [], rects: [], texts: [] };
    const stacks = {
      undo: [{ kind: 'setCell', row: 0, col: 0, from: false, to: true } as const],
      redo: [],
    };

    useGridStore.getState().loadDesignWithHistory(design, stacks);

    // Grid reflects the loaded design...
    expect(grid.get_cell(0, 0)).toBe(true);
    // ...and the persisted history is installed verbatim (continue undo as before).
    expect(useGridStore.getState().canUndo()).toBe(true);
    expect(useGridStore.getState().exportHistory().undo).toEqual(stacks.undo);
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
    const { grid } = makeGrid({ cell: () => false });
    useGridStore.setState({ grid, colorIdx: 2 });

    useGridStore.getState().beginDrawStroke();
    useGridStore.getState().drawCellAt(0, 0, true);
    useGridStore.getState().endDrawStroke();

    const snap = useGridStore.getState().exportHistory();
    expect(snap.undo.length).toBe(1);
    expect(snap.redo.length).toBe(0);
  });
});
