import { describe, it, expect } from 'vitest';
import { SquareGrid, FINE_UNITS, sizeForSubdivision } from './squareModel';

/**
 * Executable spec for the proposed square-record architecture: draw at 1x ->
 * store/render ONE 1x square; draw at half -> ONE half square. Storage scales
 * with squares drawn, never with fine cells. This suite is the contract the
 * Rust/TS refactor must satisfy (see squareModel.ts).
 */
describe('square records store at the resolution they were drawn', () => {
  it('drawing one square at 1x stores exactly ONE record — not 64 fine cells', () => {
    const g = new SquareGrid();
    g.drawAt(0, 0, 1, 0);
    expect(g.count()).toBe(1);
    expect(g.squares()).toEqual([{ row: 0, col: 0, size: FINE_UNITS, color: 0 }]);
  });

  it('each grid setting stores its own native size: 1x=8, half=4, quarter=2, eighth=1', () => {
    expect(sizeForSubdivision(1)).toBe(8);
    expect(sizeForSubdivision(2)).toBe(4);
    expect(sizeForSubdivision(4)).toBe(2);
    expect(sizeForSubdivision(8)).toBe(1);

    const g = new SquareGrid();
    g.drawAt(0, 0, 1, 0);
    g.drawAt(8, 0, 2, 1);
    g.drawAt(16, 0, 4, 2);
    g.drawAt(24, 0, 8, 3);
    expect(g.squares().map((s) => s.size)).toEqual([8, 4, 2, 1]);
  });

  it('a 1x record renders as ONE solid whole-cell quad (16x16 world px)', () => {
    const g = new SquareGrid();
    const s = g.drawAt(8, 16, 1, 0);
    // CELL_SIZE in the app is 2 world px per fine unit.
    expect(g.worldRect(s, 2)).toEqual({ x: 32, y: 16, w: 16, h: 16 });
  });

  it('draws snap to the lattice of their own grid size', () => {
    const g = new SquareGrid();
    // A click anywhere inside a 1x cell lands the square on the whole-cell lattice.
    const s = g.drawAt(13, 21, 1, 0);
    expect([s.row, s.col]).toEqual([8, 16]);
    // Negative space too (the canvas is infinite).
    const n = g.drawAt(-3, -9, 2, 0);
    expect([n.row, n.col, n.size]).toEqual([-4, -12, 4]);
  });
});

describe('storage scales with squares drawn, not fine cells', () => {
  it('100 strokes at 1x = 100 records and 100 serialized entries (was 6400 fine cells)', () => {
    const g = new SquareGrid();
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 10; c++) {
        g.drawAt(r * FINE_UNITS, c * FINE_UNITS, 1, 0);
      }
    }
    expect(g.count()).toBe(100);
    expect(g.serialize().cells).toHaveLength(100);
  });

  it('dragging over the same block never stacks duplicates', () => {
    const g = new SquareGrid();
    g.drawAt(0, 0, 1, 0);
    g.drawAt(3, 5, 1, 0); // same 1x block, different pointer position
    expect(g.count()).toBe(1);
  });

  it('re-drawing the same block in a new color recolors in place', () => {
    const g = new SquareGrid();
    g.drawAt(0, 0, 1, 0);
    g.drawAt(0, 0, 1, 2);
    expect(g.count()).toBe(1);
    expect(g.squares()[0].color).toBe(2);
  });
});

describe('squares are atomic units', () => {
  it('mixed resolutions coexist: an eighth square stacks over a 1x square, which stays intact', () => {
    const g = new SquareGrid();
    g.drawAt(0, 0, 1, 0); // black 1x square
    g.drawAt(2, 2, 8, 2); // red eighth square on top of it
    expect(g.count()).toBe(2);
    expect(g.colorAt(2, 2)).toBe(2); // topmost wins where they overlap
    expect(g.colorAt(0, 0)).toBe(0); // the 1x square is untouched elsewhere
    expect(g.squares()[0]).toEqual({ row: 0, col: 0, size: 8, color: 0 });
  });

  it('erasing at eighth removes the WHOLE 1x square it touches — squares never split', () => {
    const g = new SquareGrid();
    g.drawAt(0, 0, 1, 0);
    const removed = g.eraseAt(2, 2, 8); // eighth-sized eraser inside the square
    expect(removed).toEqual([{ row: 0, col: 0, size: 8, color: 0 }]);
    expect(g.count()).toBe(0);
    expect(g.occupied(0, 0)).toBe(false);
  });

  it('a 1x eraser sweeps away every smaller square inside its block', () => {
    const g = new SquareGrid();
    g.drawAt(0, 0, 8, 1);
    g.drawAt(4, 4, 8, 2);
    g.drawAt(0, 8, 1, 0); // neighboring cell — must survive
    expect(g.eraseAt(0, 0, 1)).toHaveLength(2);
    expect(g.count()).toBe(1);
    expect(g.squares()[0].col).toBe(8);
  });

  it('box selection picks whole squares: a box over half a 1x square selects ONE item', () => {
    const g = new SquareGrid();
    g.drawAt(0, 0, 1, 0);
    const hit = g.squaresIntersecting(0, 0, 3, 3); // covers only a quarter of it
    expect(hit).toHaveLength(1);
    expect(hit[0].size).toBe(FINE_UNITS);
  });
});

describe('serialization has NO scale factor — what you draw is what round-trips', () => {
  it('serialize -> load -> serialize is the identity (order/z preserved)', () => {
    const g = new SquareGrid();
    g.drawAt(0, 0, 1, 0);
    g.drawAt(2, 2, 8, 2);
    g.drawAt(-8, 16, 2, 4);
    const once = g.serialize();
    const twice = SquareGrid.load(once).serialize();
    expect(twice).toEqual(once);
    // The reloaded drawing still resolves overlap by z-order.
    expect(SquareGrid.load(once).colorAt(2, 2)).toBe(2);
  });

  it('a 1x square saved and reloaded is still ONE 1x square — never an 8x8 anything', () => {
    const g = new SquareGrid();
    g.drawAt(0, 0, 1, 0);
    const back = SquareGrid.load(g.serialize());
    expect(back.count()).toBe(1);
    expect(back.squares()[0].size).toBe(FINE_UNITS);
  });

  it('migrates v6 fine-cell designs as eighth squares (identical geometry)', () => {
    const back = SquareGrid.load({ sub: FINE_UNITS, cells: [[0, 0, 0], [0, 1, 2]] });
    expect(back.squares()).toEqual([
      { row: 0, col: 0, size: 1, color: 0 },
      { row: 0, col: 1, size: 1, color: 2 },
    ]);
  });

  it('migrates pre-subdivision whole-cell designs as 1x squares', () => {
    const back = SquareGrid.load({ cells: [[1, 2, 3]] });
    expect(back.squares()).toEqual([{ row: 8, col: 16, size: 8, color: 3 }]);
  });
});
