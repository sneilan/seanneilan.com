// Client for the Go data-server (examples, designs, jobs, predict). Centralized
// so the editor and the gallery share one base URL and request shape.

import type { DesignJSON } from '../store/gridStore';

export const DATA_SERVER =
  (import.meta as { env?: Record<string, string | undefined> }).env?.VITE_DATA_SERVER ??
  'http://localhost:7843';

export type SavedDesign = {
  id: number;
  createdAt: string;
  name: string;
  design: DesignJSON;
};

export type TrainingExample = {
  input: DesignJSON;
  output: DesignJSON;
};

async function jsonOrThrow(res: Response) {
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
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

export async function saveDesign(name: string, design: DesignJSON): Promise<number> {
  const body = await jsonOrThrow(
    await fetch(`${DATA_SERVER}/designs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, design }),
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
