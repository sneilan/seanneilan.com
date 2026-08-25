import { describe, it, expect } from 'vitest';
import { examplePairs, buildPointPairs, inRange, COORD_MAX } from './frame';
import type { SavedExample } from '../lib/localDb';
import type { DesignJSON } from '../store/gridStore';

const design = (cells: number[][]): DesignJSON => ({ w: 1, h: 1, cells, lines: [], rects: [], texts: [] });
const ex = (input: number[][], output: number[][], delta?: [number, number], id = 1): SavedExample =>
  ({ id, createdAt: '', input: design(input), output: design(output), delta });

describe('examplePairs', () => {
  it('pairs cells by index and applies delta (shared frame)', () => {
    // input two cells; output shifted by delta (2,3): a pure translation.
    const e = ex([[0, 0, 2], [1, 1, 2]], [[0, 0, 2], [1, 1, 2]], [2, 3]);
    const { pairs, skipped } = examplePairs(e);
    expect(skipped).toBeNull();
    expect(pairs).toEqual([
      [0, 0, 2, 3],
      [1, 1, 3, 4],
    ]);
  });

  it('defaults delta to [0,0] for legacy rows without it', () => {
    const { pairs } = examplePairs(ex([[5, 5, 0]], [[7, 8, 0]]));
    expect(pairs).toEqual([[5, 5, 7, 8]]);
  });

  it('skips examples whose halves have different cell counts', () => {
    const { pairs, skipped } = examplePairs(ex([[0, 0, 0]], [[0, 0, 0], [1, 1, 0]], [0, 0]));
    expect(skipped).toBe('count-mismatch');
    expect(pairs).toEqual([]);
  });

  it('flags empty halves', () => {
    expect(examplePairs(ex([], [[0, 0, 0]])).skipped).toBe('empty');
  });
});

describe('buildPointPairs', () => {
  it('flattens many examples and counts skipped ones', () => {
    const { pairs, skippedExamples } = buildPointPairs([
      ex([[0, 0, 0]], [[1, 1, 0]], [1, 1], 1), // outPoint = outCell + delta = (2,2)
      ex([[0, 0, 0]], [[0, 0, 0], [1, 1, 0]], [0, 0], 2), // count mismatch → skipped
    ]);
    expect(pairs).toEqual([[0, 0, 2, 2]]);
    expect(skippedExamples).toBe(1);
  });
});

describe('inRange', () => {
  it('accepts points inside 0..COORD_MAX and rejects outside', () => {
    expect(inRange(0, 0)).toBe(true);
    expect(inRange(COORD_MAX, COORD_MAX)).toBe(true);
    expect(inRange(-1, 0)).toBe(false);
    expect(inRange(0, COORD_MAX + 1)).toBe(false);
  });
});
