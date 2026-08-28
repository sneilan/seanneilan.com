// Render a DesignJSON to a 2D canvas — used for gallery thumbnails and training
// example previews. This is a lightweight re-implementation of the WASM
// renderer's shape drawing (it doesn't need grid lines or selection chrome), so
// pictures are derived from the stored JSON and never go stale.

import { CELL_UNITS, type DesignJSON } from '../store/gridStore';

// Color index -> CSS color. 1=white draws white; 6=transparent/none draws nothing.
const COLOR_HEX: (string | null)[] = [
  '#000000', '#ffffff', '#cc3333', '#ffcc00', '#2266dd', '#22aa22', null,
];

function hex(idx: number): string | null {
  return COLOR_HEX[idx] ?? '#000000';
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null;
}

type NormalizedText = { r: number; c: number; color: number; size: number; text: string };

// A stored text may be the full 9-tuple, a legacy [r,c,color,size,text] tuple, or
// a plain object — narrow the untyped entry to the fields we draw, or null for
// junk. Reads coords/color/size defensively (numbers only) with the same
// fallbacks the previous cast-based code relied on.
function normalizeText(t: unknown): NormalizedText | null {
  let r: unknown;
  let c: unknown;
  let color: unknown;
  let size: unknown;
  let text: unknown;
  if (Array.isArray(t)) {
    r = t[0];
    c = t[1];
    color = t[2];
    size = t[3];
    text = t.length >= 9 ? t[8] : t[4];
  } else if (isRecord(t)) {
    r = t.r;
    c = t.c;
    color = t.color;
    size = t.size;
    text = t.text;
  } else {
    return null;
  }
  if (typeof r !== 'number' || typeof c !== 'number') return null;
  return {
    r,
    c,
    color: typeof color === 'number' ? color : 0,
    size: typeof size === 'number' ? size : 1,
    text: typeof text === 'string' ? text : String(text ?? ''),
  };
}

export type PreviewOptions = {
  /** Target pixel box the design is scaled to fit (preserving aspect). */
  maxSize?: number;
  /** Background fill; null leaves it transparent. Default white. */
  background?: string | null;
  /** Padding in pixels around the drawing. Default 2. */
  padding?: number;
};

/**
 * Draw `design` into `canvas`, sizing the canvas to fit `maxSize` while keeping
 * the design's aspect ratio. Safe to call with an empty design (draws only the
 * background).
 */
export function renderDesignToCanvas(
  canvas: HTMLCanvasElement,
  design: DesignJSON,
  opts: PreviewOptions = {},
): void {
  const maxSize = opts.maxSize ?? 96;
  const pad = opts.padding ?? 2;
  const background = opts.background === undefined ? '#ffffff' : opts.background;

  const w = Math.max(1, design.w || 1);
  const h = Math.max(1, design.h || 1);
  // Cell size in px so the larger dimension fills maxSize (minus padding).
  const cs = Math.max(1, Math.floor((maxSize - pad * 2) / Math.max(w, h)));
  const pxW = w * cs + pad * 2;
  const pxH = h * cs + pad * 2;
  canvas.width = pxW;
  canvas.height = pxH;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  if (background) {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, pxW, pxH);
  }
  ctx.translate(pad, pad);

  // Squares: one filled quad per record at its native size. Legacy 3-tuple
  // entries (no size) are fine cells → unit squares.
  for (const cell of design.cells ?? []) {
    const [r, c, color] = cell;
    const size = cell.length >= 4 ? cell[3] : 1;
    const fill = hex(color);
    if (!fill) continue;
    ctx.fillStyle = fill;
    ctx.fillRect(c * cs, r * cs, size * cs, size * cs);
  }

  // Images: a bitmap referenced by URL. Thumbnails are drawn synchronously from
  // the stored JSON, so we can't wait on a remote decode here — represent each
  // image as a light placeholder box (matching the real render order: above the
  // cells, below the vector shapes) so the layout still reads correctly.
  for (const im of design.images ?? []) {
    if (!Array.isArray(im) || im.length < 4) continue;
    const [r1, c1, r2, c2] = im;
    const x = Math.min(c1, c2) * cs;
    const y = Math.min(r1, r2) * cs;
    const rw = Math.abs(c2 - c1) * cs;
    const rh = Math.abs(r2 - r1) * cs;
    ctx.fillStyle = '#eef2f7';
    ctx.fillRect(x, y, rw, rh);
    ctx.strokeStyle = '#c3ccd8';
    ctx.lineWidth = 1;
    ctx.strokeRect(x + 0.5, y + 0.5, rw - 1, rh - 1);
  }

  // Rects: fill then outline (intersection coords).
  for (const [r1, c1, r2, c2, fillIdx, outlineIdx] of design.rects ?? []) {
    const x = Math.min(c1, c2) * cs;
    const y = Math.min(r1, r2) * cs;
    const rw = Math.abs(c2 - c1) * cs;
    const rh = Math.abs(r2 - r1) * cs;
    const fill = hex(fillIdx);
    if (fill) { ctx.fillStyle = fill; ctx.fillRect(x, y, rw, rh); }
    const outline = hex(outlineIdx);
    if (outline) { ctx.strokeStyle = outline; ctx.lineWidth = Math.max(1, cs / 8); ctx.strokeRect(x, y, rw, rh); }
  }

  // Lines (intersection coords).
  for (const [r1, c1, r2, c2, color] of design.lines ?? []) {
    const stroke = hex(color);
    if (!stroke) continue;
    ctx.strokeStyle = stroke;
    ctx.lineWidth = Math.max(1, cs / 6);
    ctx.beginPath();
    ctx.moveTo(c1 * cs, r1 * cs);
    ctx.lineTo(c2 * cs, r2 * cs);
    ctx.stroke();
  }

  // Texts: (r,c) is the frame top-left in fine units; the glyph run is `size`
  // whole cells tall with its baseline at the block bottom. Accept the full
  // tuple, a legacy [r,c,color,size,text] tuple, or an object; skip junk.
  ctx.textBaseline = 'alphabetic';
  for (const t of design.texts ?? []) {
    const o = normalizeText(t);
    if (!o) continue;
    ctx.fillStyle = hex(o.color) ?? '#000000';
    ctx.font = `${Math.max(6, o.size * cs * CELL_UNITS)}px 'BigBlue Terminal', monospace`;
    ctx.fillText(o.text, o.c * cs, (o.r + o.size * CELL_UNITS) * cs);
  }

  ctx.setTransform(1, 0, 0, 1, 0, 0);
}
