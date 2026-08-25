// The server-data store. ALL network access flows through here: components never
// call fetch or the data layer directly — they read this zustand store and call
// its actions. The actions use TanStack Query (queryClient.fetchQuery) as the
// fetch/cache engine and write results into store state. (Enforced by eslint:
// no fetch / react-query / dataServer imports in .tsx.)

import { create } from 'zustand';
import { queryClient } from '../lib/queryClient';
import {
  listDesigns, listExamples, listPredictions, listJobs,
  getDesign, getDesignByName, saveDesign, saveExample, updateExample, predict, teacherPredict, startTraining,
  type SavedDesign, type SavedExample, type SavedPrediction, type TrainingJob, type HistoryStacks,
} from '../lib/dataServer';
import type { DesignJSON } from './gridStore';

type ServerState = {
  designs: SavedDesign[];
  examples: SavedExample[];
  predictions: SavedPrediction[];
  jobs: TrainingJob[];
  loadingDesigns: boolean;
  loadingExamples: boolean;
  loadingPredictions: boolean;
  error: string | null;

  // Reads — populate store state from the server (cached via react-query).
  loadDesigns: () => Promise<void>;
  loadExamples: () => Promise<void>;
  loadPredictions: () => Promise<void>;
  loadJobs: () => Promise<void>;

  // Commands — mutate the server, then refresh the affected lists.
  saveDrawing: (name: string, design: DesignJSON, history?: HistoryStacks) => Promise<number>;
  getDrawing: (name: string) => Promise<SavedDesign>;
  getDrawingById: (id: number) => Promise<SavedDesign>;
  saveExamplePair: (input: DesignJSON, output: DesignJSON) => Promise<void>;
  updateExamplePair: (id: number, input: DesignJSON, output: DesignJSON) => Promise<void>;
  runPredict: (input: DesignJSON) => Promise<DesignJSON>;
  runTeacher: (input: DesignJSON, save: boolean) => Promise<{ output: DesignJSON; saved: boolean }>;
  runTraining: () => Promise<string>;
};

// fetchQuery dedups + caches by key (staleTime in queryClient); invalidating a
// key makes the next load() refetch. This is the only place these keys are used.
const KEYS = {
  designs: ['designs'] as const,
  examples: ['examples'] as const,
  predictions: ['predictions'] as const,
  jobs: ['jobs'] as const,
};

export const useServerStore = create<ServerState>((set, get) => ({
  designs: [],
  examples: [],
  predictions: [],
  jobs: [],
  loadingDesigns: false,
  loadingExamples: false,
  loadingPredictions: false,
  error: null,

  loadDesigns: async () => {
    set({ loadingDesigns: true });
    try {
      const designs = await queryClient.fetchQuery({ queryKey: KEYS.designs, queryFn: listDesigns });
      set({ designs, error: null });
    } catch (e) {
      set({ error: String(e) });
    } finally {
      set({ loadingDesigns: false });
    }
  },

  loadExamples: async () => {
    set({ loadingExamples: true });
    try {
      const examples = await queryClient.fetchQuery({ queryKey: KEYS.examples, queryFn: listExamples });
      set({ examples, error: null });
    } catch (e) {
      set({ error: String(e) });
    } finally {
      set({ loadingExamples: false });
    }
  },

  loadPredictions: async () => {
    set({ loadingPredictions: true });
    try {
      const predictions = await queryClient.fetchQuery({ queryKey: KEYS.predictions, queryFn: listPredictions });
      set({ predictions, error: null });
    } catch (e) {
      set({ error: String(e) });
    } finally {
      set({ loadingPredictions: false });
    }
  },

  loadJobs: async () => {
    // Always fresh (it's a poll); fetchQuery with staleTime 0 still dedups bursts.
    const jobs = await queryClient.fetchQuery({ queryKey: KEYS.jobs, queryFn: listJobs, staleTime: 0 });
    set({ jobs });
  },

  saveDrawing: async (name, design, history) => {
    const id = await saveDesign(name, design, history);
    queryClient.invalidateQueries({ queryKey: KEYS.designs });
    return id;
  },

  getDrawing: (name) => getDesignByName(name),

  getDrawingById: (id) => getDesign(id),

  saveExamplePair: async (input, output) => {
    await saveExample(input, output);
    queryClient.invalidateQueries({ queryKey: KEYS.examples });
    await get().loadExamples();
  },

  updateExamplePair: async (id, input, output) => {
    await updateExample(id, input, output);
    queryClient.invalidateQueries({ queryKey: KEYS.examples });
    await get().loadExamples();
  },

  runPredict: async (input) => {
    const { output } = await predict(input);
    // A prediction was logged server-side; refresh the audit list.
    queryClient.invalidateQueries({ queryKey: KEYS.predictions });
    void get().loadPredictions();
    return output;
  },

  runTeacher: async (input, save) => {
    const res = await teacherPredict(input, save);
    queryClient.invalidateQueries({ queryKey: KEYS.predictions });
    void get().loadPredictions();
    if (save) {
      queryClient.invalidateQueries({ queryKey: KEYS.examples });
      void get().loadExamples();
    }
    return res;
  },

  runTraining: async () => {
    const { id } = await startTraining();
    return id;
  },
}));
