import { describe, it, expect } from 'vitest';
import { History } from './history';
import type { Edit } from './types';
import { FakeGrid, asWasm } from './fakeGrid';

/**
 * Property test (#1): generate a long sequence of random valid edits, then undo
 * every step back to the empty document and redo every step forward, asserting
 * the document snapshot matches at EVERY point. This is what catches the
 * index-shift / inverse-ordering bugs that hand-written examples miss.
 */

// Small deterministic PRNG (mulberry32) so failures reproduce.
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Produce a random edit valid for the grid's current state, or null. */
function randomEdit(g: FakeGrid, rand: () => number): Edit | null {
  const lc = g.get_line_count();
  const rc = g.get_rect_count();
  const ri = (n: number) => Math.floor(rand() * n);
  const coord = () => ri(20); // keep within bounds, deltas stay non-negative
  const color = () => ri(6);

  const choices: Array<() => Edit | null> = [
    // add line
    () => ({ kind: 'addLine', idx: lc, line: { r1: coord(), c1: coord(), r2: coord(), c2: coord(), color: color(), width: 10 } }),
    // add rect
    () => ({ kind: 'addRect', idx: rc, rect: { r1: coord(), c1: coord(), r2: coord(), c2: coord(), fill: rand() < 0.5 ? 6 : color(), outline: rand() < 0.5 ? 6 : color() } }),
    // cell on/off — capture the TRUE current state as `from`, like the store does
    () => {
      const row = ri(10), col = ri(10);
      const from = { filled: g.get_cell(row, col), color: g.get_cell_color(row, col) };
      const to = rand() < 0.5 ? { filled: true, color: color() } : { filled: false, color: from.color };
      return { kind: 'setCellState', row, col, from, to };
    },
    // delete line
    () => { if (lc === 0) return null; const idx = ri(lc); return { kind: 'deleteLine', idx, line: toLine(g, idx) }; },
    // delete rect
    () => { if (rc === 0) return null; const idx = ri(rc); return { kind: 'deleteRect', idx, rect: toRect(g, idx) }; },
    // recolor line
    () => (lc > 0 ? recolorLine(g, ri(lc), color()) : null),
    // recolor rect fill
    () => (rc > 0 ? recolorRectFill(g, ri(rc), color()) : null),
    // move rect
    () => (rc > 0 ? { kind: 'moveRect', idx: ri(rc), dRow: ri(3), dCol: ri(3) } : null),
    // set rect geom
    () => (rc > 0 ? setRectGeom(g, ri(rc)) : null),
  ];
  return choices[ri(choices.length)]();
}

function toLine(g: FakeGrid, idx: number) {
  const a = g.get_line(idx);
  return { r1: a[0], c1: a[1], r2: a[2], c2: a[3], color: a[4], width: a[5] };
}
function toRect(g: FakeGrid, idx: number) {
  const a = g.get_rect(idx);
  return { r1: a[0], c1: a[1], r2: a[2], c2: a[3], fill: a[4], outline: a[5] };
}
function recolorLine(g: FakeGrid, idx: number, to: number): Edit {
  return { kind: 'recolorLine', idx, from: g.get_line(idx)[4], to };
}
function recolorRectFill(g: FakeGrid, idx: number, to: number): Edit {
  return { kind: 'recolorRectFill', idx, from: g.get_rect(idx)[4], to };
}
function setRectGeom(g: FakeGrid, idx: number): Edit {
  const a = g.get_rect(idx);
  return {
    kind: 'setRectGeom', idx,
    from: { r1: a[0], c1: a[1], r2: a[2], c2: a[3] },
    to: { r1: 1, c1: 2, r2: 8, c2: 9 },
  };
}

describe('undo/redo property test', () => {
  for (const seed of [1, 7, 42, 99, 12345]) {
    it(`round-trips a random op sequence (seed ${seed})`, () => {
      const rand = rng(seed);
      const g = new FakeGrid();
      const grid = asWasm(g);
      const h = new History();

      // snapshots[k] = document state after k committed edits.
      const snapshots: string[] = [g.snapshot()];

      let committed = 0;
      for (let i = 0; i < 120 && committed < 80; i++) {
        const edit = randomEdit(g, rand);
        if (!edit) continue;
        h.commit(grid, edit);
        snapshots.push(g.snapshot());
        committed++;
      }

      expect(committed).toBeGreaterThan(20); // sanity: we actually did work

      // Undo everything, checking we retrace each prior snapshot exactly.
      for (let k = committed; k >= 1; k--) {
        expect(g.snapshot()).toBe(snapshots[k]);
        expect(h.undoLast(grid)).toBe(true);
        expect(g.snapshot()).toBe(snapshots[k - 1]);
      }
      expect(h.canUndo()).toBe(false);
      expect(g.snapshot()).toBe(snapshots[0]); // back to empty

      // Redo everything, checking we retrace forward exactly.
      for (let k = 1; k <= committed; k++) {
        expect(h.redoLast(grid)).toBe(true);
        expect(g.snapshot()).toBe(snapshots[k]);
      }
      expect(h.canRedo()).toBe(false);
    });
  }

  it('batched multi-deletes round-trip (index-shift stress)', () => {
    const g = new FakeGrid();
    const grid = asWasm(g);
    const h = new History();
    // Five rects.
    for (let i = 0; i < 5; i++) g.add_rect(i, i, i + 2, i + 2, i % 6, 6);
    const before = g.snapshot();

    // Delete indices 3 then 1 then 0 as ONE batch (high-first).
    h.commit(grid, {
      kind: 'batch',
      edits: [
        { kind: 'deleteRect', idx: 3, rect: r(g, 3) },
        { kind: 'deleteRect', idx: 1, rect: r(g, 1) },
        { kind: 'deleteRect', idx: 0, rect: r(g, 0) },
      ],
    });
    expect(g.get_rect_count()).toBe(2);

    h.undoLast(grid);
    expect(g.snapshot()).toBe(before); // all five back, in original positions
  });
});

function r(g: FakeGrid, idx: number) {
  const a = g.get_rect(idx);
  return { r1: a[0], c1: a[1], r2: a[2], c2: a[3], fill: a[4], outline: a[5] };
}
