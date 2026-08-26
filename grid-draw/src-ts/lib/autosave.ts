// Auto-save: persist the current drawing (grid + undo/redo history) on every
// committed edit, debounced. This is wired as a one-time store SUBSCRIPTION set
// up at module load — deliberately NOT a React useEffect observing a counter.
// The causal chain is explicit: an edit bumps historyTick → the subscription
// schedules a debounced save. Importing this module once (see main.tsx) installs it.
//
// A drawing with no name yet auto-creates one: the first edit that leaves real
// content on the canvas mints a random name, adopts it (so the header shows it
// and the URL becomes shareable), and saves. An empty canvas never creates a
// piece, so opening the editor and leaving adds nothing to the gallery.

import { useGridStore, type DesignJSON } from '../store/gridStore';
import { useServerStore } from '../store/serverStore';

const DEBOUNCE_MS = 600;
const BASE = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/grid-draw/';
let timer: ReturnType<typeof setTimeout> | undefined;

// While a training-example half is loaded for editing, the canvas is
// deliberately unnamed and must stay out of the gallery — auto-create would
// silently mint a gallery piece from the example. GridCanvas toggles this.
let autoCreateSuppressed = false;
export function suppressAutoCreate(on: boolean) {
  autoCreateSuppressed = on;
}

// An 8-char id of lowercase letters + digits, used to auto-name new drawings.
function randomName(): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const bytes = new Uint8Array(8);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => alphabet[b % alphabet.length]).join('');
}

function hasContent(d: DesignJSON): boolean {
  return d.cells.length + d.lines.length + d.rects.length + d.texts.length
    + (d.images?.length ?? 0) > 0;
}

function schedule() {
  clearTimeout(timer);
  timer = setTimeout(flush, DEBOUNCE_MS);
}

async function flush() {
  const s = useGridStore.getState();
  if (!s.grid) return;
  const design = s.serializeWholeGrid();
  if (!design) return;
  let name = s.currentName;
  if (!name) {
    if (autoCreateSuppressed || !hasContent(design)) return;
    name = randomName();
    s.setCurrentName(name);
    window.history.replaceState({}, '', `${BASE}design/${name}/`);
  }
  s.setSaveState('saving');
  try {
    await useServerStore.getState().saveDrawing(name, design, s.exportHistory());
    useGridStore.getState().setSaveState('saved');
  } catch (err) {
    useGridStore.getState().setSaveState('error', err instanceof Error ? err.message : String(err));
  }
}

// Fire on any change that bumps historyTick (commit/undo/redo). Loading a
// drawing bumps historyTick BEFORE currentName is set; by flush time the name
// is set, so the load re-saves identical content — a harmless no-op write, and
// crucially NOT an auto-create of a duplicate piece.
useGridStore.subscribe((state, prev) => {
  if (state.historyTick !== prev.historyTick) schedule();
});
