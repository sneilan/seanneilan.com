// Integration test for the in-browser pipeline, run headlessly: fake-indexeddb
// provides `indexedDB` (for tf's indexeddb:// model save/load), and TF.js falls
// back to its pure-JS CPU backend in Node. Trains the real coordModel on a
// synthetic translation and checks it both learns the move and persists.
import 'fake-indexeddb/auto';
import { describe, it, expect, beforeAll } from 'vitest';
import * as tf from '@tensorflow/tfjs';
import * as coordModel from './coordModel';
import type { SavedExample } from '../lib/localDb';
import type { DesignJSON } from '../store/gridStore';

// Node has no WebGL; pin the pure-JS CPU backend so tf doesn't try (and log) it.
beforeAll(async () => { await tf.setBackend('cpu'); });

const design = (cells: number[][]): DesignJSON => ({ w: 8, h: 8, cells, lines: [], rects: [], texts: [] });

// A dataset that all encodes the SAME map: shift every cell right by 2 columns.
// Input cells are bbox-relative; delta carries the +2 column move into the frame.
function shiftRightExamples(): SavedExample[] {
  const exs: SavedExample[] = [];
  let id = 1;
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      exs.push({
        id: id++, createdAt: '',
        input: design([[r, c, 2]]),
        output: design([[r, c, 2]]), // same relative cell...
        delta: [0, 2],               // ...but +2 cols in the shared frame
      });
    }
  }
  return exs;
}

describe('coordModel end-to-end (headless)', () => {
  it('learns a translation, predicts the move, and persists to indexeddb', async () => {
    const examples = shiftRightExamples();

    const res = await coordModel.trainModel(examples, { epochs: 120, onEpoch: () => {} });
    expect(res.pairs).toBe(16);
    expect(res.droppedPoints).toBe(0);
    expect(Number.isFinite(res.finalLoss)).toBe(true);
    expect(coordModel.isReady()).toBe(true);

    // Predict on a fresh input cell at (1,1): the learned map should move it to
    // (1, 3) (shift right by 2). Input is bbox-relative so (1,1)->(0,0) locally...
    // use a two-cell input to keep relative coords meaningful.
    const out = await coordModel.predictDesign(design([[0, 0, 2], [1, 1, 2]]));
    // Every predicted cell should be shifted +2 columns from its input rel coord.
    const cols = out.cells.map((c) => c[1]).sort((a, b) => a - b);
    expect(cols).toEqual([2, 3]); // input cols {0,1} -> {2,3}
    expect(out.cells.every((c) => c.length === 3)).toBe(true);
    // Predictions are fine-unit coordinates; without the `sub` stamp,
    // placeDesign scales them up 8x (a 1x square became an 8x8-cell cube).
    expect(out.sub).toBe(8);

    // Persistence: a fresh load from indexeddb:// should succeed.
    expect(await coordModel.loadModel()).toBe(true);
  }, 30000);
});
