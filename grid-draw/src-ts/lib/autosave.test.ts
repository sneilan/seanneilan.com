import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// Mock the IndexedDB data layer before importing the autosave module (which saves
// through the store → localDb). listDesigns is stubbed so the post-save refresh
// doesn't hit real IndexedDB in jsdom.
vi.mock('./localDb', () => ({
  saveDesign: vi.fn().mockResolvedValue(1),
  listDesigns: vi.fn().mockResolvedValue([]),
}));

import { saveDesign } from './localDb';
import './autosave'; // side-effect import installs the store subscription
import { useGridStore } from '../store/gridStore';
import { makeGrid } from '../store/testGrid';

/**
 * The auto-save subscription is action-driven: committing an edit (which bumps
 * historyTick) schedules a debounced save — no React effect involved. These
 * tests drive real edit actions and assert the machine saves (or doesn't).
 */
describe('autosave subscription', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.mocked(saveDesign).mockClear();
    useGridStore.setState({
      grid: null, currentName: null, saveState: 'idle', saveMessage: '',
      colorIdx: 0, selectedItems: [],
    });
    useGridStore.getState().resetHistory();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('saves the grid + history (debounced) after an edit when a document is named', async () => {
    const { grid } = makeGrid({ cell: () => false });
    useGridStore.setState({ grid, currentName: 'doc1', colorIdx: 2 });

    useGridStore.getState().beginDrawStroke();
    useGridStore.getState().drawCellAt(0, 0, true);
    useGridStore.getState().endDrawStroke();

    // Debounced: nothing yet.
    expect(saveDesign).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(600);

    expect(saveDesign).toHaveBeenCalledTimes(1);
    const [name, design, history] = vi.mocked(saveDesign).mock.calls[0];
    expect(name).toBe('doc1');
    expect(design.cells).toContainEqual([0, 0, 2]); // whole-grid serialize, color 2
    expect(history?.undo.length).toBe(1);            // the stroke = one undo step
    expect(useGridStore.getState().saveState).toBe('saved');
  });

  it('collapses a burst of edits into a single save', async () => {
    const { grid } = makeGrid({ cell: () => false });
    useGridStore.setState({ grid, currentName: 'doc1', colorIdx: 1 });

    useGridStore.getState().beginDrawStroke();
    useGridStore.getState().drawCellAt(0, 0, true);
    useGridStore.getState().drawCellAt(0, 1, true);
    useGridStore.getState().drawCellAt(0, 2, true);
    useGridStore.getState().endDrawStroke();

    await vi.advanceTimersByTimeAsync(600);
    expect(saveDesign).toHaveBeenCalledTimes(1);
  });

  it('does NOT save when there is no current document (the load-before-name case)', async () => {
    const { grid } = makeGrid({ cell: () => false });
    useGridStore.setState({ grid, currentName: null, colorIdx: 2 });

    // Editing while unnamed (mirrors loadDesignWithHistory bumping historyTick
    // before setCurrentName runs) must not trigger a save.
    useGridStore.getState().beginDrawStroke();
    useGridStore.getState().drawCellAt(0, 0, true);
    useGridStore.getState().endDrawStroke();

    await vi.advanceTimersByTimeAsync(600);
    expect(saveDesign).not.toHaveBeenCalled();
  });
});
