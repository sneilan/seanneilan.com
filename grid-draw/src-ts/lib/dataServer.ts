// Client for the Go data-server (examples, designs, jobs, predict). Centralized
// so the editor and the gallery share one base URL and request shape.

import type { DesignJSON } from '../store/gridStore';
import type { Edit } from '../store/edits/types';

export const DATA_SERVER =
  (import.meta as { env?: Record<string, string | undefined> }).env?.VITE_DATA_SERVER ??
  'http://localhost:7843';

/** Serialized undo/redo stacks persisted alongside a saved drawing. */
export type HistoryStacks = { undo: Edit[]; redo: Edit[] };

export type SavedDesign = {
  id: number;
  createdAt: string;
  name: string;
  design: DesignJSON;
  history?: HistoryStacks;
};

export type TrainingExample = {
  input: DesignJSON;
  output: DesignJSON;
};

// A stored training example with its id + timestamp, for the training-data viewer.
export type SavedExample = {
  id: number;
  createdAt: string;
  input: DesignJSON;
  output: DesignJSON;
};

async function jsonOrThrow(res: Response) {
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// Ask the teacher model (Qwen3-Coder-480B via OpenRouter, proxied by the Go
// server) to draft the OUTPUT for an INPUT, learning the transform from the
// stored examples. With save=true the schema-validated pair is auto-accepted
// into the training set.
export async function teacherPredict(
  input: DesignJSON,
  save: boolean,
): Promise<{ output: DesignJSON; saved: boolean }> {
  return jsonOrThrow(
    await fetch(`${DATA_SERVER}/teacher`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input, save }),
    }),
  );
}

export async function listExamples(): Promise<SavedExample[]> {
  const body = await jsonOrThrow(await fetch(`${DATA_SERVER}/examples`));
  return Array.isArray(body.examples) ? body.examples : [];
}

export async function deleteExample(id: number): Promise<void> {
  await jsonOrThrow(await fetch(`${DATA_SERVER}/examples/${id}`, { method: 'DELETE' }));
}

export async function listDesigns(): Promise<SavedDesign[]> {
  const body = await jsonOrThrow(await fetch(`${DATA_SERVER}/designs`));
  return Array.isArray(body.designs) ? body.designs : [];
}

export async function getDesign(id: number): Promise<SavedDesign> {
  return jsonOrThrow(await fetch(`${DATA_SERVER}/designs/${id}`));
}

export async function getDesignByName(name: string): Promise<SavedDesign> {
  return jsonOrThrow(await fetch(`${DATA_SERVER}/designs/by-name/${encodeURIComponent(name)}`));
}

export async function saveDesign(
  name: string,
  design: DesignJSON,
  history?: HistoryStacks,
): Promise<number> {
  const body = await jsonOrThrow(
    await fetch(`${DATA_SERVER}/designs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, design, history }),
    }),
  );
  return body.id as number;
}

export async function deleteDesign(id: number): Promise<void> {
  await jsonOrThrow(await fetch(`${DATA_SERVER}/designs/${id}`, { method: 'DELETE' }));
}

export async function listTrainingExamples(): Promise<TrainingExample[]> {
  const res = await fetch(`${DATA_SERVER}/examples.jsonl`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();
  return text
    .split('\n')
    .filter((l) => l.trim())
    .map((l) => JSON.parse(l) as TrainingExample);
}
