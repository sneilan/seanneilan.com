// Turns stored training examples into the coordinate→coordinate point pairs the
// tiny model learns from. Each example is an {input, output} pair of designs;
// the model learns a single global map f(r,c) → (r',c') ("move stuff around").
//
// Frame: input cells are bbox-relative to the input's origin. The output cells
// are bbox-relative to the OUTPUT's origin, so on their own they'd lose the move
// between the two halves. `delta` (= outputOrigin − inputOrigin, recorded at
// capture time) re-expresses the output in the INPUT's frame, making the move
// visible: outPoint = outCell + delta.

import type { SavedExample } from '../lib/localDb';

// Largest coordinate value the model represents (one softmax class per value,
// 0..COORD_MAX). Designs are captured bbox-relative so most selections fit;
// points that fall outside are dropped (see coordModel dataset build).
export const COORD_MAX = 31;

export type PointPair = [inR: number, inC: number, outR: number, outC: number];

/**
 * Extract (inR,inC)→(outR,outC) pairs from one example. Input and output cells
 * are both row-major sorted by serializeSelection, so we pair by index — but only
 * when the two halves have the same cell count (an unambiguous 1:1 correspondence).
 * Unequal-count examples yield no pairs (they'd need a real matching algorithm).
 * Returns the pairs plus a `skipped` reason for logging/telemetry.
 */
export function examplePairs(ex: SavedExample): { pairs: PointPair[]; skipped: null | 'count-mismatch' | 'empty' } {
  const inCells = ex.input?.cells ?? [];
  const outCells = ex.output?.cells ?? [];
  if (inCells.length === 0 || outCells.length === 0) return { pairs: [], skipped: 'empty' };
  if (inCells.length !== outCells.length) return { pairs: [], skipped: 'count-mismatch' };

  const [dR, dC] = ex.delta ?? [0, 0];
  const pairs: PointPair[] = [];
  for (let i = 0; i < inCells.length; i++) {
    const [ir, ic] = inCells[i];
    const [or, oc] = outCells[i];
    pairs.push([ir, ic, or + dR, oc + dC]);
  }
  return { pairs, skipped: null };
}

/** Flatten many examples into one training set of point pairs. */
export function buildPointPairs(examples: SavedExample[]): { pairs: PointPair[]; skippedExamples: number } {
  const pairs: PointPair[] = [];
  let skippedExamples = 0;
  for (const ex of examples) {
    const { pairs: p, skipped } = examplePairs(ex);
    if (skipped) skippedExamples++;
    else pairs.push(...p);
  }
  return { pairs, skippedExamples };
}

/** True when a point sits inside the representable 0..COORD_MAX grid on both axes. */
export function inRange(r: number, c: number): boolean {
  return r >= 0 && r <= COORD_MAX && c >= 0 && c <= COORD_MAX;
}
