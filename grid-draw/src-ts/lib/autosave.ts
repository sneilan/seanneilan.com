// Auto-save: persist the current drawing (grid + undo/redo history) on every
// committed edit, debounced. This is wired as a one-time store SUBSCRIPTION set
// up at module load — deliberately NOT a React useEffect observing a counter.
// The causal chain is explicit: an edit bumps historyTick → the subscription
// schedules a debounced save. Importing this module once (see main.tsx) installs it.

import { useGridStore } from '../store/gridStore';
import { saveDesign } from './dataServer';

const DEBOUNCE_MS = 600;
let timer: ReturnType<typeof setTimeout> | undefined;

function schedule() {
  // No document name yet (blank editor) → nothing to auto-save to.
  if (!useGridStore.getState().currentName) return;
  clearTimeout(timer);
  timer = setTimeout(flush, DEBOUNCE_MS);
}

async function flush() {
  const s = useGridStore.getState();
  if (!s.currentName || !s.grid) return;
  const design = s.serializeWholeGrid();
  if (!design) return;
  s.setSaveState('saving');
  try {
    await saveDesign(s.currentName, design, s.exportHistory());
    useGridStore.getState().setSaveState('saved');
  } catch (err) {
    useGridStore.getState().setSaveState('error', err instanceof Error ? err.message : String(err));
  }
}

// Fire on any change that bumps historyTick (commit/undo/redo). Loading a
// drawing bumps historyTick BEFORE currentName is set, so the load itself does
// not trigger a redundant save.
useGridStore.subscribe((state, prev) => {
  if (state.historyTick !== prev.historyTick) schedule();
});
