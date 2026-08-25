// The local data + model store. grid-draw is fully client-side: this store is the
// single funnel components read through. Storage is IndexedDB (lib/localDb.ts);
// prediction/training is a tiny in-browser TensorFlow.js model (ml/coordModel.ts).
// There is NO network — components never import the data/ml layers directly.
//
// (Named useServerStore for historical continuity; nothing here talks to a server.)

import { create } from 'zustand';
import {
  listDesigns, listExamples, getDesign, getDesignByName, saveDesign, saveExample, updateExample,
  type SavedDesign, type SavedExample, type HistoryStacks,
} from '../lib/localDb';
import * as coordModel from '../ml/coordModel';
import type { DesignJSON } from './gridStore';

export type ModelStatus = 'none' | 'loading' | 'ready';
export type TrainingState = {
  status: 'running' | 'done' | 'error';
  epoch: number;
  total: number;
  loss: number;
  message: string;
};

type ServerState = {
  designs: SavedDesign[];
  examples: SavedExample[];
  loadingDesigns: boolean;
  loadingExamples: boolean;
  error: string | null;

  // In-browser model state (replaces the polled /jobs + server prediction).
  modelStatus: ModelStatus;
  training: TrainingState | null;

  // Reads — populate store state from IndexedDB.
  loadDesigns: () => Promise<void>;
  loadExamples: () => Promise<void>;

  // Commands — mutate IndexedDB, then refresh the affected list.
  saveDrawing: (name: string, design: DesignJSON, history?: HistoryStacks) => Promise<number>;
  getDrawing: (name: string) => Promise<SavedDesign>;
  getDrawingById: (id: number) => Promise<SavedDesign>;
  saveExamplePair: (input: DesignJSON, output: DesignJSON, delta?: [number, number]) => Promise<void>;
  updateExamplePair: (id: number, input: DesignJSON, output: DesignJSON, delta?: [number, number]) => Promise<void>;

  // Model — train/predict/load, all in-browser via TF.js.
  initModel: () => Promise<void>;
  trainModel: () => Promise<void>;
  runPredict: (input: DesignJSON) => Promise<DesignJSON>;
};

export const useServerStore = create<ServerState>((set, get) => ({
  designs: [],
  examples: [],
  loadingDesigns: false,
  loadingExamples: false,
  error: null,
  modelStatus: 'none',
  training: null,

  loadDesigns: async () => {
    set({ loadingDesigns: true });
    try {
      set({ designs: await listDesigns(), error: null });
    } catch (e) {
      set({ error: String(e) });
    } finally {
      set({ loadingDesigns: false });
    }
  },

  loadExamples: async () => {
    set({ loadingExamples: true });
    try {
      set({ examples: await listExamples(), error: null });
    } catch (e) {
      set({ error: String(e) });
    } finally {
      set({ loadingExamples: false });
    }
  },

  saveDrawing: async (name, design, history) => {
    const id = await saveDesign(name, design, history);
    await get().loadDesigns();
    return id;
  },

  getDrawing: (name) => getDesignByName(name),

  getDrawingById: (id) => getDesign(id),

  saveExamplePair: async (input, output, delta) => {
    await saveExample(input, output, delta);
    await get().loadExamples();
  },

  updateExamplePair: async (id, input, output, delta) => {
    await updateExample(id, input, output, delta);
    await get().loadExamples();
  },

  initModel: async () => {
    set({ modelStatus: 'loading' });
    try {
      const ok = await coordModel.loadModel();
      set({ modelStatus: ok ? 'ready' : 'none' });
    } catch (e) {
      set({ modelStatus: 'none', error: String(e) });
    }
  },

  trainModel: async () => {
    const examples = await listExamples();
    set({ examples, training: { status: 'running', epoch: 0, total: 0, loss: NaN, message: 'Preparing…' } });
    try {
      const res = await coordModel.trainModel(examples, {
        onEpoch: (epoch, total, loss) => set({
          training: { status: 'running', epoch, total, loss, message: `Training… epoch ${epoch}/${total}` },
        }),
      });
      const note = res.skippedExamples || res.droppedPoints
        ? ` (${res.pairs} pairs; skipped ${res.skippedExamples} examples, ${res.droppedPoints} out-of-range points)`
        : ` (${res.pairs} pairs)`;
      set({
        modelStatus: 'ready',
        training: { status: 'done', epoch: 0, total: 0, loss: res.finalLoss, message: `Done — loss ${res.finalLoss.toFixed(4)}${note}` },
      });
    } catch (e) {
      set({ training: { status: 'error', epoch: 0, total: 0, loss: NaN, message: String(e) } });
      throw e;
    }
  },

  runPredict: (input) => coordModel.predictDesign(input),
}));
