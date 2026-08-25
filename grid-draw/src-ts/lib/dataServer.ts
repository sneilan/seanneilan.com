// The data layer for the Go data-server. This is the ONLY module allowed to call
// fetch() (enforced by eslint); components reach the server through these typed
// functions via TanStack Query (useQuery/useMutation). The store is append-only:
// there are no delete operations.

import type { DesignJSON } from '../store/gridStore';
import type { Edit } from '../store/edits/types';

export const DATA_SERVER =
  (import.meta as { env?: Record<string, string | undefined> }).env?.VITE_DATA_SERVER ??
  'http://localhost:7843';

// The single fetch wrapper. Returns parsed JSON, throws on a non-2xx status so
// TanStack Query surfaces it as an error state (no per-call error plumbing).
async function api<T>(path: string, body?: unknown): Promise<T> {
  const res = await fetch(`${DATA_SERVER}${path}`, body === undefined ? undefined : {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${path} → HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return res.json() as Promise<T>;
}

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

// A stored training example / prediction with its id + timestamp.
export type SavedExample = { id: number; createdAt: string; input: DesignJSON; output: DesignJSON };
export type SavedPrediction = SavedExample;

// One training run's live progress, as polled from /jobs.
export type TrainingJob = {
  id: string;
  status: string;
  step: number;
  total: number;
  loss: number;
  message: string;
  updatedAt: string;
};

// --- Designs (gallery) ------------------------------------------------------

export async function listDesigns(): Promise<SavedDesign[]> {
  return (await api<{ designs: SavedDesign[] }>('/designs')).designs ?? [];
}

export function getDesign(id: number): Promise<SavedDesign> {
  return api<SavedDesign>(`/designs/${id}`);
}

export function getDesignByName(name: string): Promise<SavedDesign> {
  return api<SavedDesign>(`/designs/by-name/${encodeURIComponent(name)}`);
}

export async function saveDesign(name: string, design: DesignJSON, history?: HistoryStacks): Promise<number> {
  return (await api<{ id: number }>('/designs', { name, design, history })).id;
}

// --- Training examples ------------------------------------------------------

export async function listExamples(): Promise<SavedExample[]> {
  return (await api<{ examples: SavedExample[] }>('/examples')).examples ?? [];
}

export async function saveExample(input: DesignJSON, output: DesignJSON): Promise<number> {
  return (await api<{ id: number }>('/examples', { input, output })).id;
}

// Overwrite an existing training example in place (PUT /examples/{id}) rather
// than appending a new one — used when an example's half is loaded into the
// editor, edited, and re-saved over the original.
export async function updateExample(id: number, input: DesignJSON, output: DesignJSON): Promise<void> {
  const res = await fetch(`${DATA_SERVER}/examples/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input, output }),
  });
  if (!res.ok) throw new Error(`/examples/${id} → HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
}

// --- Prediction + teacher ---------------------------------------------------

export function predict(input: DesignJSON): Promise<{ output: DesignJSON }> {
  return api<{ output: DesignJSON }>('/predict', { input });
}

// Ask the teacher model (Qwen3-Coder-480B via OpenRouter, proxied by the Go
// server) to draft the OUTPUT for an INPUT, learning the transform from the
// stored examples. With save=true the schema-validated pair is auto-accepted
// into the training set.
export function teacherPredict(input: DesignJSON, save: boolean): Promise<{ output: DesignJSON; saved: boolean }> {
  return api<{ output: DesignJSON; saved: boolean }>('/teacher', { input, save });
}

// Every /predict and /teacher round-trip is logged (append-only audit log /
// labeling queue) — including the empty/failed ones. Not every prediction is an
// example.
export async function listPredictions(): Promise<SavedPrediction[]> {
  return (await api<{ predictions: SavedPrediction[] }>('/predictions')).predictions ?? [];
}

// --- Training jobs ----------------------------------------------------------

export async function listJobs(): Promise<TrainingJob[]> {
  return (await api<{ jobs: TrainingJob[] }>('/jobs')).jobs ?? [];
}

export function startTraining(): Promise<{ id: string }> {
  return api<{ id: string }>('/train', {});
}
