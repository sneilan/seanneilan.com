// The PROPOSED cell architecture, as a pure reference model (no WASM, no store):
// one atomic square record per drawn square, stored at the resolution it was
// drawn. Drawing at 1x stores/renders ONE 1x square — never 64 fine cells.
//
// This model is the executable specification for the upcoming refactor
// (squareModel.test.ts is the contract): the Rust cell store and the TS store
// will be ported to these exact semantics, and the same tests re-pointed at
// the production implementation.
//
// Coordinates stay on the shared fine lattice (FINE_UNITS per 1x cell) so
// squares of different sizes — and lines/rects/texts/images — coexist in one
// drawing without any per-design scale factor. A square's `size` is its edge
// length in fine units: 1x -> 8, half -> 4, quarter -> 2, eighth -> 1.

export const FINE_UNITS = 8;

export type Square = { row: number; col: number; size: number; color: number };

/** Serialized form: one 4-tuple [row, col, color, size] per drawn square. */
export type SquareDesignJSON = {
  v: 7;
  sub: number; // FINE_UNITS — retained so older loaders recognize the lattice
  cells: Array<[number, number, number, number]>;
};

/** Older payloads this model must migrate (cells as [r, c, color] 3-tuples). */
export type LegacyCellsJSON = { cells?: number[][]; sub?: number };

/** Edge length in fine units for a grid setting (1x=1, half=2, ... eighth=8). */
export function sizeForSubdivision(subdivision: number): number {
  return FINE_UNITS / subdivision;
}

const snap = (v: number, size: number) => Math.floor(v / size) * size;

const intersects = (s: Square, r1: number, c1: number, r2: number, c2: number) =>
  s.row <= r2 && s.row + s.size - 1 >= r1 && s.col <= c2 && s.col + s.size - 1 >= c1;

export class SquareGrid {
  // Insertion order is z-order: later squares draw (and win hit-tests) on top.
  private items: Square[] = [];

  /** One atomic record per draw. Re-drawing the exact same block recolors it
   *  in place, so dragging over a block never stacks hidden duplicates. */
  drawAt(row: number, col: number, subdivision: number, color: number): Square {
    const size = sizeForSubdivision(subdivision);
    const r = snap(row, size);
    const c = snap(col, size);
    for (let i = this.items.length - 1; i >= 0; i--) {
      const s = this.items[i];
      if (s.row === r && s.col === c && s.size === size) {
        s.color = color;
        return s;
      }
    }
    const added = { row: r, col: c, size, color };
    this.items.push(added);
    return added;
  }

  /** Atomic erase: removes every WHOLE square the eraser block touches (a
   *  square is one unit — it never splits). Returns what was removed. */
  eraseAt(row: number, col: number, subdivision: number): Square[] {
    const size = sizeForSubdivision(subdivision);
    const r = snap(row, size);
    const c = snap(col, size);
    const removed = this.items.filter((s) => intersects(s, r, c, r + size - 1, c + size - 1));
    this.items = this.items.filter((s) => !removed.includes(s));
    return removed;
  }

  /** Is this fine coordinate covered by any square? (draw-tool toggle test) */
  occupied(row: number, col: number): boolean {
    return this.colorAt(row, col) !== null;
  }

  /** Color visible at a fine coordinate: the topmost covering square's. */
  colorAt(row: number, col: number): number | null {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const s = this.items[i];
      if (intersects(s, row, col, row, col)) return s.color;
    }
    return null;
  }

  /** Box selection: whole squares intersecting the (inclusive, fine-unit) box.
   *  Selecting half of a 1x square selects the ONE square, not 32 slivers. */
  squaresIntersecting(r1: number, c1: number, r2: number, c2: number): Square[] {
    return this.items.filter((s) => intersects(s, r1, c1, r2, c2));
  }

  count(): number {
    return this.items.length;
  }

  squares(): Square[] {
    return this.items.map((s) => ({ ...s }));
  }

  /** Screen geometry of one record: a single solid quad, sized by the square's
   *  own resolution (pxPerFineUnit is CELL_SIZE in the app). */
  worldRect(s: Square, pxPerFineUnit: number): { x: number; y: number; w: number; h: number } {
    return {
      x: s.col * pxPerFineUnit,
      y: s.row * pxPerFineUnit,
      w: s.size * pxPerFineUnit,
      h: s.size * pxPerFineUnit,
    };
  }

  /** No scale factor anywhere: what you draw is exactly what serializes. */
  serialize(): SquareDesignJSON {
    return {
      v: 7,
      sub: FINE_UNITS,
      cells: this.items.map((s): [number, number, number, number] => [s.row, s.col, s.color, s.size]),
    };
  }

  /** Load v7 (4-tuples) and migrate older payloads:
   *  - v6 fine-cell designs (3-tuples, sub === FINE_UNITS): each fine cell
   *    becomes an eighth square at the same spot — identical geometry.
   *  - pre-subdivision whole-cell designs (3-tuples, no sub): each cell
   *    becomes a 1x square (coords scaled onto the fine lattice). */
  static load(design: SquareDesignJSON | LegacyCellsJSON): SquareGrid {
    const g = new SquareGrid();
    for (const e of design.cells ?? []) {
      const [r, c, color] = e;
      if (e.length >= 4) {
        g.items.push({ row: r, col: c, color, size: e[3] });
      } else if (design.sub === FINE_UNITS) {
        g.items.push({ row: r, col: c, color, size: 1 });
      } else {
        g.items.push({ row: r * FINE_UNITS, col: c * FINE_UNITS, color, size: FINE_UNITS });
      }
    }
    return g;
  }
}
