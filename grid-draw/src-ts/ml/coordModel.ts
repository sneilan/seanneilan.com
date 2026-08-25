// The tiny in-browser model. It learns a coordinate→coordinate map (1–2 small
// integers in → 1–2 small integers out) and both trains AND runs entirely in the
// browser via TensorFlow.js — no server, no big model. TF.js is lazy-loaded on
// first train/predict so editor-only users don't pay the download.
//
// Encoding: each axis value 0..COORD_MAX is one class. Input = one-hot(r) ⊕
// one-hot(c) → [2*(COORD_MAX+1)]. Output = two softmax heads (r', c'). A small
// MLP (~tens of K params, well under the ~500K budget) is plenty for this.
//
// Persistence: the trained model is saved to indexeddb://grid-draw-coord-model
// and auto-loaded at startup — so a trained model survives reloads with no server.

import type { DesignJSON } from '../store/gridStore';
import type { SavedExample } from '../lib/localDb';
import { COORD_MAX, buildPointPairs, inRange, type PointPair } from './frame';

type TF = typeof import('@tensorflow/tfjs');
// tf.LayersModel — kept loose to avoid importing tfjs types eagerly.
type LayersModel = Awaited<ReturnType<TF['loadLayersModel']>>;

const N = COORD_MAX + 1;               // classes per axis
const MODEL_URL = 'indexeddb://grid-draw-coord-model';

let tfPromise: Promise<TF> | undefined;
let model: LayersModel | null = null;

async function tfjs(): Promise<TF> {
  tfPromise ??= import('@tensorflow/tfjs');
  return tfPromise;
}

export type TrainOpts = {
  epochs?: number;
  batchSize?: number;
  lr?: number;
  onEpoch?: (epoch: number, total: number, loss: number) => void;
};

export type TrainResult = {
  pairs: number;         // point pairs actually trained on (in range)
  droppedPoints: number; // pairs dropped for being out of 0..COORD_MAX
  skippedExamples: number;
  finalLoss: number;
};

function buildModel(tf: TF): LayersModel {
  const input = tf.input({ shape: [2 * N] });
  let h = tf.layers.dense({ units: 128, activation: 'relu' }).apply(input);
  h = tf.layers.dense({ units: 128, activation: 'relu' }).apply(h);
  const rOut = tf.layers.dense({ units: N, activation: 'softmax', name: 'r' }).apply(h);
  const cOut = tf.layers.dense({ units: N, activation: 'softmax', name: 'c' }).apply(h);
  return tf.model({ inputs: input, outputs: [rOut as never, cOut as never] });
}

// One-hot encode a batch of input points into an [n, 2N] Float32Array-backed tensor.
function encodeInputs(tf: TF, pts: Array<[number, number]>) {
  const buf = new Float32Array(pts.length * 2 * N);
  pts.forEach(([r, c], i) => {
    buf[i * 2 * N + r] = 1;
    buf[i * 2 * N + N + c] = 1;
  });
  return tf.tensor2d(buf, [pts.length, 2 * N]);
}

function oneHotAxis(tf: TF, vals: number[]) {
  const buf = new Float32Array(vals.length * N);
  vals.forEach((v, i) => { buf[i * N + v] = 1; });
  return tf.tensor2d(buf, [vals.length, N]);
}

/** Load a persisted model if one exists. Returns true when a model is now ready. */
export async function loadModel(): Promise<boolean> {
  const tf = await tfjs();
  try {
    model = await tf.loadLayersModel(MODEL_URL);
    return true;
  } catch {
    model = null;
    return false;
  }
}

export function isReady(): boolean {
  return model !== null;
}

/** Train a fresh model on the given examples, save it, and make it live. */
export async function trainModel(examples: SavedExample[], opts: TrainOpts = {}): Promise<TrainResult> {
  const { epochs = 300, batchSize = 32, lr = 1e-3, onEpoch } = opts;
  const tf = await tfjs();

  const { pairs, skippedExamples } = buildPointPairs(examples);
  // Keep only pairs whose endpoints fit the representable grid.
  const kept: PointPair[] = [];
  let droppedPoints = 0;
  for (const p of pairs) {
    if (inRange(p[0], p[1]) && inRange(p[2], p[3])) kept.push(p);
    else droppedPoints++;
  }
  if (kept.length === 0) {
    throw new Error('No trainable point pairs — capture examples where the input and output have the same number of cells (in range).');
  }

  const xs = encodeInputs(tf, kept.map((p) => [p[0], p[1]]));
  const yr = oneHotAxis(tf, kept.map((p) => p[2]));
  const yc = oneHotAxis(tf, kept.map((p) => p[3]));

  const fresh = buildModel(tf);
  fresh.compile({ optimizer: tf.train.adam(lr), loss: ['categoricalCrossentropy', 'categoricalCrossentropy'] });

  let finalLoss = NaN;
  await fresh.fit(xs, [yr, yc], {
    epochs,
    batchSize: Math.min(batchSize, kept.length),
    shuffle: true,
    callbacks: {
      onEpochEnd: async (epoch, logs) => {
        finalLoss = (logs?.loss as number) ?? finalLoss;
        onEpoch?.(epoch + 1, epochs, finalLoss);
        await tf.nextFrame(); // yield so the UI (progress bar) stays responsive
      },
    },
  });

  xs.dispose(); yr.dispose(); yc.dispose();

  // Swap in the freshly trained model and persist it.
  model?.dispose();
  model = fresh;
  await fresh.save(MODEL_URL);

  return { pairs: kept.length, droppedPoints, skippedExamples, finalLoss };
}

/**
 * Predict an output design from an input design: map each input cell's coordinate
 * through the model and emit a cell of the same color at the returned coordinate.
 * Coordinates are in the input's bbox frame (as serializeSelection produces), so
 * the caller anchors placement at the input selection's origin. Cells only.
 */
export async function predictDesign(input: DesignJSON): Promise<DesignJSON> {
  if (!model) throw new Error('No model yet — train one first.');
  const tf = await tfjs();
  const cells = input.cells ?? [];
  if (cells.length === 0) return { w: 1, h: 1, cells: [], lines: [], rects: [], texts: [] };

  const pts: Array<[number, number]> = cells.map(([r, c]) => [
    Math.max(0, Math.min(COORD_MAX, r)),
    Math.max(0, Math.min(COORD_MAX, c)),
  ]);

  const outCells: number[][] = tf.tidy(() => {
    const xs = encodeInputs(tf, pts);
    const [rProbs, cProbs] = model!.predict(xs) as [import('@tensorflow/tfjs').Tensor, import('@tensorflow/tfjs').Tensor];
    const rIdx = rProbs.argMax(1).dataSync();
    const cIdx = cProbs.argMax(1).dataSync();
    return cells.map(([, , color], i) => [rIdx[i], cIdx[i], color]);
  });

  // Dedupe cells landing on the same coordinate (last color wins), and size w/h.
  const byKey = new Map<string, number[]>();
  let maxR = 0, maxC = 0;
  for (const cell of outCells) {
    byKey.set(`${cell[0]},${cell[1]}`, cell);
    maxR = Math.max(maxR, cell[0]);
    maxC = Math.max(maxC, cell[1]);
  }
  return { w: maxC + 1, h: maxR + 1, cells: [...byKey.values()], lines: [], rects: [], texts: [] };
}
