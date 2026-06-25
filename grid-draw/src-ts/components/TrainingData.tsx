import { useCallback, useEffect, useState } from 'react';
import { listExamples, deleteExample, type SavedExample } from '../lib/dataServer';
import type { DesignJSON } from '../store/gridStore';

const BASE = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/grid-draw/';
const FONT = "'BigBlue Terminal', monospace";

// Rasterize a design into rows of monospace text: filled cells/line points/rect
// cells become a full block, empty stays a middle-dot. The BigBlue Terminal font
// has the block + box glyphs, so each design reads as a little retro grid.
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

function designToAscii(d: DesignJSON, maxW = 64, maxH = 40): string[] {
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

// Lay an input/output pair out side-by-side, line for line, with an arrow gutter.
function pairText(inp: DesignJSON, out: DesignJSON): string {
  const a = designToAscii(inp), b = designToAscii(out);
  const aw = Math.max(5, ...a.map((l) => l.length));
  const rows = Math.max(a.length, b.length);
  const lines: string[] = ['input'.padEnd(aw) + '   ->   output'];
  for (let i = 0; i < rows; i++) {
    lines.push((a[i] ?? '').padEnd(aw) + '   ->   ' + (b[i] ?? ''));
  }
  return lines.join('\n');
}

/**
 * Training-data console (route: <base>training/). A pure-text view of the
 * captured / teacher-drafted examples, each input→output pair rendered as
 * ASCII-art grids in the BigBlue Terminal font — the same font the canvas uses.
 */
export default function TrainingData() {
  const [examples, setExamples] = useState<SavedExample[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      setExamples(await listExamples());
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const onDelete = useCallback(async (id: number) => {
    await deleteExample(id);
    refresh();
  }, [refresh]);

  return (
    <div style={{ fontFamily: FONT, background: '#0b0b0b', color: '#cfe3cf', minHeight: '100vh', padding: '16px' }}>
      <div style={{ color: '#e8c34a', marginBottom: 12 }}>
        GRID-DRAW :: TRAINING DATA &nbsp;[{examples.length} example{examples.length === 1 ? '' : 's'}]
      </div>
      <div style={{ marginBottom: 16 }}>
        <button onClick={() => { window.location.href = BASE; }} style={termBtn}>[ &lt; editor ]</button>{' '}
        <button onClick={refresh} style={termBtn}>[ refresh ]</button>
        {error && <span style={{ color: '#e06c6c', marginLeft: 12 }}>data server: {error}</span>}
      </div>

      {loading && <div style={{ color: '#7a8a7a' }}>loading…</div>}
      {!loading && examples.length === 0 && (
        <div style={{ color: '#7a8a7a' }}>
          no training examples yet — use "Make Training Data" or "Teacher (480B)" in the editor.
        </div>
      )}

      {examples.map((ex) => (
        <div key={ex.id} style={{ borderTop: '1px solid #233023', padding: '12px 0' }}>
          <div style={{ color: '#7a8a7a', marginBottom: 4 }}>
            #{ex.id} &nbsp;<span style={{ color: '#9aa' }}>{ex.createdAt}</span>{' '}
            <button onClick={() => onDelete(ex.id)} style={{ ...termBtn, color: '#e06c6c' }}>[ delete ]</button>
          </div>
          <pre style={{ margin: 0, fontFamily: FONT, lineHeight: 1.1, whiteSpace: 'pre', fontSize: 14 }}>
            {pairText(ex.input, ex.output)}
          </pre>
        </div>
      ))}
    </div>
  );
}

const termBtn: React.CSSProperties = {
  fontFamily: FONT,
  background: 'transparent',
  color: '#cfe3cf',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
};
