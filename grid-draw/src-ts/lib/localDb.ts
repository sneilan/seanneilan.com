// The client-side data layer. grid-draw is fully offline: the gallery (designs)
// and training examples live in the browser's IndexedDB — there is NO server.
// This module is the storage analog of the old lib/dataServer.ts; the server
// store (store/serverStore.ts) is the single funnel components read through, so
// .tsx never touches storage directly.
//
// Migration: NONE. The hosted site never had a backend (the old Go+SQLite server
// only ran on localhost for dev), so there is no production data to import — the
// database simply starts empty and the upgrade() handler creates the two stores.

import { openDB, type DBSchema, type IDBPDatabase } from 'idb';
import type { DesignJSON } from '../store/gridStore';
import type { Edit } from '../store/edits/types';

/** Serialized undo/redo stacks persisted alongside a saved drawing. */
export type HistoryStacks = { undo: Edit[]; redo: Edit[] };

export type SavedDesign = {
  id: number;
  createdAt: string;
  name: string;
  design: DesignJSON;
  history?: HistoryStacks;
};

export type TrainingExample = { input: DesignJSON; output: DesignJSON };

// A stored training example with its id + timestamp. `delta` is the
// (outputOrigin - inputOrigin) bbox-min offset captured at record time; it lets
// the coordinate model reconstruct a shared input/output frame. Optional so
// legacy rows (delta absent) still load — treated as [0, 0].
export type SavedExample = {
  id: number;
  createdAt: string;
  input: DesignJSON;
  output: DesignJSON;
  delta?: [number, number];
};

// On write the `id` is assigned by the store's autoIncrement keyPath, so it must
// be absent from the value we hand to add(). These row types make `id` optional
// for that purpose; reads bridge back to the id-required public types via
// withId(), which asserts (at runtime) the key IndexedDB always populates.
type DesignRow = Omit<SavedDesign, 'id'> & { id?: number };
type ExampleRow = Omit<SavedExample, 'id'> & { id?: number };

interface GridDrawDB extends DBSchema {
  designs: { key: number; value: DesignRow; indexes: { 'by-name': string } };
  examples: { key: number; value: ExampleRow };
}

function withId<T extends { id?: number }>(row: T): T & { id: number } {
  if (typeof row.id !== 'number') throw new Error('stored record is missing its id');
  return { ...row, id: row.id };
}

let dbPromise: Promise<IDBPDatabase<GridDrawDB>> | undefined;

function db(): Promise<IDBPDatabase<GridDrawDB>> {
  dbPromise ??= openDB<GridDrawDB>('grid-draw', 1, {
    upgrade(d) {
      const designs = d.createObjectStore('designs', { keyPath: 'id', autoIncrement: true });
      designs.createIndex('by-name', 'name', { unique: true });
      d.createObjectStore('examples', { keyPath: 'id', autoIncrement: true });
    },
  });
  return dbPromise;
}

function nowIso(): string {
  return new Date().toISOString();
}

// --- Designs (gallery) ------------------------------------------------------

export async function listDesigns(): Promise<SavedDesign[]> {
  return (await (await db()).getAll('designs')).map(withId); // ascending id = insertion order
}

export async function getDesign(id: number): Promise<SavedDesign> {
  const d = await (await db()).get('designs', id);
  if (!d) throw new Error(`design ${id} not found`);
  return withId(d);
}

export async function getDesignByName(name: string): Promise<SavedDesign> {
  const d = await (await db()).getFromIndex('designs', 'by-name', name);
  if (!d) throw new Error(`design "${name}" not found`);
  return withId(d);
}

// Upsert by name (the autosave-critical semantic: repeated saves of the same
// name update one row rather than appending). Read-then-write runs in a single
// readwrite transaction so concurrent autosaves can't create a duplicate.
export async function saveDesign(name: string, design: DesignJSON, history?: HistoryStacks): Promise<number> {
  const tx = (await db()).transaction('designs', 'readwrite');
  const existing = await tx.store.index('by-name').get(name);
  if (existing) {
    const row = withId(existing);
    await tx.store.put({ ...row, name, design, history }); // keep id + createdAt
    await tx.done;
    return row.id;
  }
  const id = await tx.store.add({ createdAt: nowIso(), name, design, history });
  await tx.done;
  return id;
}

export async function deleteDesign(id: number): Promise<void> {
  await (await db()).delete('designs', id);
}

// --- Training examples ------------------------------------------------------

export async function listExamples(): Promise<SavedExample[]> {
  const all = await (await db()).getAll('examples');
  return all.reverse().map(withId); // newest first (parity with the old server's ORDER BY id DESC)
}

export async function saveExample(input: DesignJSON, output: DesignJSON, delta?: [number, number]): Promise<number> {
  const id = await (await db()).add('examples', { createdAt: nowIso(), input, output, delta });
  return id;
}

// Overwrite an existing example in place (used when an example's half is loaded
// into the editor, edited, and re-saved). Preserves id + createdAt.
export async function updateExample(id: number, input: DesignJSON, output: DesignJSON, delta?: [number, number]): Promise<void> {
  const tx = (await db()).transaction('examples', 'readwrite');
  const existing = await tx.store.get(id);
  if (!existing) throw new Error(`example ${id} not found`);
  await tx.store.put({ ...existing, input, output, delta: delta ?? existing.delta });
  await tx.done;
}

export async function deleteExample(id: number): Promise<void> {
  await (await db()).delete('examples', id);
}
