import type { DesignJSON } from '../store/gridStore';

// Render designs as monospace ASCII so the training-data and predictions views
// can show them as text in the BigBlue Terminal font (block glyphs render as
// solid cells). Filled cells / line points / rect cells become a full block,
// empty stays a middle-dot.

function bresenham(r1: number, c1: number, r2: number, c2: number, put: (r: number, c: number) => void) {
  const dr = Math.abs(r2 - r1), dc = Math.abs(c2 - c1);
  const sr = r1 < r2 ? 1 : -1, sc = c1 < c2 ? 1 : -1;
  let err = dc - dr, r = r1, c = c1;
  for (;;) {
    put(r, c);
    if (r === r2 && c === c2) break;
    const e2 = 2 * err;
    if (e2 > -dr) { err -= dr; c += sc; }
    if (e2 < dc) { err += dc; r += sr; }
  }
}

export function designToAscii(d: DesignJSON, maxW = 64, maxH = 40): string[] {
  const w = Math.max(1, Math.min(d.w || 1, maxW));
  const h = Math.max(1, Math.min(d.h || 1, maxH));
  const g: string[][] = Array.from({ length: h }, () => Array(w).fill('·'));
  const put = (r: number, c: number) => { if (r >= 0 && r < h && c >= 0 && c < w) g[r][c] = '█'; };
  for (const cell of d.cells ?? []) put(cell[0], cell[1]);
  for (const ln of d.lines ?? []) bresenham(ln[0], ln[1], ln[2], ln[3], put);
  for (const rc of d.rects ?? []) {
    const [r1, c1, r2, c2, fill] = rc;
    const rlo = Math.min(r1, r2), rhi = Math.max(r1, r2), clo = Math.min(c1, c2), chi = Math.max(c1, c2);
    for (let r = rlo; r <= rhi; r++) for (let c = clo; c <= chi; c++) {
      const edge = r === rlo || r === rhi || c === clo || c === chi;
      if (fill !== 6 || edge) put(r, c);
    }
  }
  return g.map((row) => row.join(''));
}

/** True when a design has nothing drawable — an empty/failed prediction. */
export function isEmptyDesign(d: DesignJSON): boolean {
  return (d.cells?.length ?? 0) + (d.lines?.length ?? 0) + (d.rects?.length ?? 0) + (d.texts?.length ?? 0) === 0;
}

/** Lay an input/output pair out side-by-side, line for line, with an arrow gutter. */
export function pairText(inp: DesignJSON, out: DesignJSON): string {
  const a = designToAscii(inp), b = designToAscii(out);
  const aw = Math.max(5, ...a.map((l) => l.length));
  const rows = Math.max(a.length, b.length);
  const lines: string[] = ['input'.padEnd(aw) + '   ->   output'];
  for (let i = 0; i < rows; i++) {
    lines.push((a[i] ?? '').padEnd(aw) + '   ->   ' + (b[i] ?? ''));
  }
  return lines.join('\n');
}
