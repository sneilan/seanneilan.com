// Render a DesignJSON to a 2D canvas — used for gallery thumbnails and training
// example previews. This is a lightweight re-implementation of the WASM
// renderer's shape drawing (it doesn't need grid lines or selection chrome), so
// pictures are derived from the stored JSON and never go stale.

import type { DesignJSON } from '../store/gridStore';

// Color index -> CSS color. 1=white draws white; 6=transparent/none draws nothing.
const COLOR_HEX: (string | null)[] = [
  '#000000', '#ffffff', '#cc3333', '#ffcc00', '#2266dd', '#22aa22', null,
];

function hex(idx: number): string | null {
  return COLOR_HEX[idx] ?? '#000000';
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

  // Cells: filled unit squares.
  for (const [r, c, color] of design.cells ?? []) {
    const fill = hex(color);
    if (!fill) continue;
    ctx.fillStyle = fill;
    ctx.fillRect(c * cs, r * cs, cs, cs);
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

  // Texts: baseline on row r, rising `size` cells (matches the WASM renderer).
  ctx.textBaseline = 'alphabetic';
  for (const [r, c, color, size, str] of design.texts ?? []) {
    const fill = hex(color) ?? '#000000';
    ctx.fillStyle = fill;
    ctx.font = `${Math.max(6, size * cs)}px 'BigBlue Terminal', monospace`;
    ctx.fillText(str, c * cs, r * cs);
  }

  ctx.setTransform(1, 0, 0, 1, 0, 0);
}
