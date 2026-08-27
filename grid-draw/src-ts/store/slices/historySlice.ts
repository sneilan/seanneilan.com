import type { StateCreator } from 'zustand';
import { History } from '../edits/history';
import type { GridStore, HistoryActions } from '../types';

// Single source of undo/redo history for the document. Lives at module scope
// (one canvas per app); every mutating action routes its edits through here so
// `applyEdit` stays the only code that touches the WASM mutators.
export const history = new History();

export const createHistorySlice: StateCreator<GridStore, [], [], HistoryActions> = (set, get) => ({
  commitEdits: (edits, opts) => {
    const { grid } = get();
    if (!grid || edits.length === 0) return;
    history.commit(grid, edits.length === 1 ? edits[0] : { kind: 'batch', edits }, opts);
    set({ historyTick: get().historyTick + 1 });
  },

  undo: () => {
    const { grid } = get();
    if (!grid) return;
    if (history.undoLast(grid)) {
      // Indices/positions may have shifted; drop selection rather than show stale.
      set({ selectedItems: [], historyTick: get().historyTick + 1 });
      get().renderSelection();
      get().updateOutputs();
    }
  },

  redo: () => {
    const { grid } = get();
    if (!grid) return;
    if (history.redoLast(grid)) {
      set({ selectedItems: [], historyTick: get().historyTick + 1 });
      get().renderSelection();
      get().updateOutputs();
    }
  },

  canUndo: () => history.canUndo(),
  canRedo: () => history.canRedo(),
  resetHistory: () => {
    history.clear();
    set({ historyTick: get().historyTick + 1 });
  },

  exportHistory: () => history.exportStacks(),
});
