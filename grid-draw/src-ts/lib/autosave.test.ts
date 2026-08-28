import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// Mock the API data layer before importing the autosave module (which saves
// through the store → apiClient). listDesigns is stubbed so the post-save
// refresh doesn't hit the network in jsdom.
vi.mock('./apiClient', () => ({
  saveDesign: vi.fn().mockResolvedValue(1),
  listDesigns: vi.fn().mockResolvedValue([]),
}));

import { saveDesign } from './apiClient';
import { suppressAutoCreate } from './autosave'; // import also installs the store subscription
import { useGridStore } from '../store/gridStore';
import { makeGrid } from '../store/testGrid';

/**
 * The auto-save subscription is action-driven: committing an edit (which bumps
 * historyTick) schedules a debounced save — no React effect involved. These
 * tests drive real edit actions and assert the machine saves (or doesn't).
 * A nameless drawing auto-creates a gallery piece on its first real content.
 */
describe('autosave subscription', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.mocked(saveDesign).mockClear();
    suppressAutoCreate(false);
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
    const { grid } = makeGrid();
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
    // Whole-grid serialize: one drawn 1x square → a single [relR, relC, color, size]
    // entry (subdivision 1 ⇒ size CELL_UNITS = 8), never 64 fine cells.
    expect(design.cells).toContainEqual([0, 0, 2, 8]);
    expect(history?.undo.length).toBe(1);            // the stroke = one undo step
    expect(useGridStore.getState().saveState).toBe('saved');
  });

  it('collapses a burst of edits into a single save', async () => {
    const { grid } = makeGrid();
    useGridStore.setState({ grid, currentName: 'doc1', colorIdx: 1 });

    useGridStore.getState().beginDrawStroke();
    useGridStore.getState().drawCellAt(0, 0, true);
    useGridStore.getState().drawCellAt(0, 1, true);
    useGridStore.getState().drawCellAt(0, 2, true);
    useGridStore.getState().endDrawStroke();

    await vi.advanceTimersByTimeAsync(600);
    expect(saveDesign).toHaveBeenCalledTimes(1);
  });

  it('auto-creates a named piece on the first edit of an unnamed drawing', async () => {
    const { grid } = makeGrid();
    useGridStore.setState({ grid, currentName: null, colorIdx: 2 });

    useGridStore.getState().beginDrawStroke();
    useGridStore.getState().drawCellAt(0, 0, true);
    useGridStore.getState().endDrawStroke();

    await vi.advanceTimersByTimeAsync(600);

    expect(saveDesign).toHaveBeenCalledTimes(1);
    const [name] = vi.mocked(saveDesign).mock.calls[0];
    expect(name).toMatch(/^[a-z0-9]{8}$/);           // minted auto-name
    expect(useGridStore.getState().currentName).toBe(name); // adopted for future saves
    expect(window.location.pathname).toContain(`design/${name}`);
  });

  it('does NOT create a piece when the unnamed canvas has no content', async () => {
    const { grid } = makeGrid();
    useGridStore.setState({ grid, currentName: null });

    // A committed edit that leaves the canvas empty (draw, then undo it).
    useGridStore.getState().beginDrawStroke();
    useGridStore.getState().drawCellAt(0, 0, true);
    useGridStore.getState().endDrawStroke();
    useGridStore.getState().undo();

    await vi.advanceTimersByTimeAsync(600);
    expect(saveDesign).not.toHaveBeenCalled();
    expect(useGridStore.getState().currentName).toBeNull();
  });

  it('does NOT auto-create while suppressed (editing a training-example half)', async () => {
    const { grid } = makeGrid();
    useGridStore.setState({ grid, currentName: null, colorIdx: 2 });
    suppressAutoCreate(true);

    useGridStore.getState().beginDrawStroke();
    useGridStore.getState().drawCellAt(0, 0, true);
    useGridStore.getState().endDrawStroke();

    await vi.advanceTimersByTimeAsync(600);
    expect(saveDesign).not.toHaveBeenCalled();
    expect(useGridStore.getState().currentName).toBeNull();
  });
});
