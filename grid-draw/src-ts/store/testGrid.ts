import type { GridCanvasWasm } from '../types/grid';
import { stubWasm } from './wasmStub';

/** Configuration for the shared recording mock. */
export type TestGridOpts = {
  lines?: number[][];  // [r1, c1, r2, c2, color, width]
  rects?: number[][];  // [r1, c1, r2, c2, fill, outline]
  /** Pre-existing square records as [r, c, color, size] tuples. */
  squares?: number[][];
  texts?: number[][];  // [r, c, color, boxW, boxH, halign, valign]
  /** Strings for the configured texts, by index (default ''). */
  textStrings?: string[];
  images?: number[][]; // [r1, c1, r2, c2]
  /** Configured hit-test results by shape kind (default: miss, -1). */
  hit?: { line?: number; text?: number; rect?: number; image?: number };
  /** World px per fine unit (default 2, matching the real grid). */
  cellSize?: number;
};

// A box-overlap test against a shape's bounding box; matches the "intersects
// the selection box" semantics the select slice relies on (may be negative).
function bboxOverlaps(
  aR1: number, aC1: number, aR2: number, aC2: number,
  qR1: number, qC1: number, qR2: number, qC2: number,
): boolean {
  const minR = Math.min(aR1, aR2), maxR = Math.max(aR1, aR2);
  const minC = Math.min(aC1, aC2), maxC = Math.max(aC1, aC2);
  return !(maxR < qR1 || minR > qR2 || maxC < qC1 || minC > qC2);
}

/**
 * The one recording mock of the WASM GridCanvas for store/action tests. It
 * captures every mutation call in `calls` and every paint (render / highlight /
 * preview) in `paints`, and serves configurable reads so actions can capture
 * prior state and we can assert the exact WASM calls an action produces.
 * Square records are tracked in-memory (flat [r, c, color, size, ...], z-order)
 * so draw/place/clear round-trips behave like the real grid.
 */
export function makeGrid(opts?: TestGridOpts) {
  const calls: Array<Array<string | number>> = [];
  const paints: Array<Array<string | number>> = [];
  const lines = opts?.lines ?? [];
  const rects = opts?.rects ?? [];
  const texts = opts?.texts ?? [];
  const images = opts?.images ?? [];
  const hit = opts?.hit ?? {};
  const cellSize = opts?.cellSize ?? 2;
  let lineCount = lines.length;
  let rectCount = rects.length;
  let textCount = texts.length;
  let imageCount = images.length;

  const STRIDE = 4;
  const squares: number[] = (opts?.squares ?? []).flatMap(([r, c, color, size]) => [r, c, color ?? 0, size ?? 1]);
  const squareCount = () => squares.length / STRIDE;
  const squareAt = (row: number, col: number) => {
    for (let i = squareCount() - 1; i >= 0; i--) {
      const s = i * STRIDE;
      const [r, c, size] = [squares[s], squares[s + 1], squares[s + 3]];
      if (row >= r && row < r + size && col >= c && col < c + size) return i;
    }
    return -1;
  };

  const g: Partial<GridCanvasWasm> = {
    insert_square: (idx, r, c, color, size) => {
      calls.push(['insert_square', idx, r, c, color, size]);
      squares.splice(Math.min(idx, squareCount()) * STRIDE, 0, r, c, color, size);
    },
    add_square: (r, c, color, size) => {
      const idx = squareCount();
      calls.push(['add_square', r, c, color, size]);
      squares.push(r, c, color, size);
      return idx;
    },
    delete_square: (idx) => {
      calls.push(['delete_square', idx]);
      if (idx * STRIDE + STRIDE <= squares.length) squares.splice(idx * STRIDE, STRIDE);
    },
    get_square: (idx) => new Int32Array(squares.slice(idx * STRIDE, idx * STRIDE + STRIDE)),
    get_square_count: squareCount,
    get_squares: () => new Int32Array(squares),
    set_square_color: (idx, color) => {
      calls.push(['set_square_color', idx, color]);
      if (idx * STRIDE + STRIDE <= squares.length) squares[idx * STRIDE + 2] = color;
    },
    move_square: (idx, dr, dc) => {
      calls.push(['move_square', idx, dr, dc]);
      if (idx * STRIDE + STRIDE <= squares.length) {
        squares[idx * STRIDE] += dr;
        squares[idx * STRIDE + 1] += dc;
      }
    },
    square_at: squareAt,
    squares_in_box: (r1, c1, r2, c2) => {
      const [rLo, rHi] = [Math.min(r1, r2), Math.max(r1, r2)];
      const [cLo, cHi] = [Math.min(c1, c2), Math.max(c1, c2)];
      const out: number[] = [];
      for (let i = 0; i < squareCount(); i++) {
        const s = i * STRIDE;
        const [r, c, size] = [squares[s], squares[s + 1], squares[s + 3]];
        if (r <= rHi && r + size - 1 >= rLo && c <= cHi && c + size - 1 >= cLo) out.push(i);
      }
      return new Uint32Array(out);
    },
    get_cell: (r, c) => squareAt(r, c) >= 0,
    get_cell_color: (r, c) => {
      const idx = squareAt(r, c);
      return idx >= 0 ? squares[idx * STRIDE + 2] : 0;
    },
    set_draw_color: (idx) => { calls.push(['set_draw_color', idx]); },
    set_outline_color: (idx) => { calls.push(['set_outline_color', idx]); },
    set_line_color: (idx, color) => calls.push(['set_line_color', idx, color]),
    set_rect_fill: (idx, color) => calls.push(['set_rect_fill', idx, color]),
    set_rect_outline: (idx, color) => calls.push(['set_rect_outline', idx, color]),
    move_line: (idx, dr, dc) => calls.push(['move_line', idx, dr, dc]),
    move_rect: (idx, dr, dc) => calls.push(['move_rect', idx, dr, dc]),
    set_line: (idx, r1, c1, r2, c2) => calls.push(['set_line', idx, r1, c1, r2, c2]),
    set_rect: (idx, r1, c1, r2, c2) => calls.push(['set_rect', idx, r1, c1, r2, c2]),
    insert_line: (idx, r1, c1, r2, c2, color) => { lineCount++; calls.push(['insert_line', idx, r1, c1, r2, c2, color]); },
    insert_rect: (idx, r1, c1, r2, c2, fill, outline) => { rectCount++; calls.push(['insert_rect', idx, r1, c1, r2, c2, fill, outline]); },
    delete_line: (idx) => { lineCount--; calls.push(['delete_line', idx]); },
    delete_rect: (idx) => { rectCount--; calls.push(['delete_rect', idx]); },
    insert_text: (idx, r, c, color, size, _boxW, _boxH, _halign, _valign, text) => {
      textCount++;
      calls.push(['insert_text', idx, r, c, color, size, text]);
    },
    delete_text: (idx) => { textCount--; calls.push(['delete_text', idx]); },
    move_text: (idx, dr, dc) => calls.push(['move_text', idx, dr, dc]),
    set_text_color: (idx, color) => calls.push(['set_text_color', idx, color]),
    get_text_count: () => textCount,
    get_text: (idx) => new Int32Array(texts[idx] ?? [1, 0, 0, 1, 1]),
    get_text_string: (idx) => opts?.textStrings?.[idx] ?? '',
    get_text_size: () => 1,
    insert_image: (idx, r1, c1, r2, c2) => { imageCount++; calls.push(['insert_image', idx, r1, c1, r2, c2]); },
    add_image: (r1, c1, r2, c2) => { imageCount++; calls.push(['add_image', r1, c1, r2, c2]); },
    delete_image: (idx) => { imageCount--; calls.push(['delete_image', idx]); },
    move_image: (idx, dr, dc) => calls.push(['move_image', idx, dr, dc]),
    set_image_geom: (idx, r1, c1, r2, c2) => calls.push(['set_image_geom', idx, r1, c1, r2, c2]),
    resize_image: (idx, handle, r, c) => calls.push(['resize_image', idx, handle, r, c]),
    get_image_count: () => imageCount,
    get_image: (idx) => new Int32Array(images[idx] ?? [0, 0, 8, 8]),
    get_image_url: () => '',
    get_line: (idx) => new Int32Array(lines[idx] ?? [0, 0, 1, 1, 0]),
    get_rect: (idx) => new Int32Array(rects[idx] ?? [0, 0, 2, 2, 0, 6]),
    get_line_count: () => lineCount,
    get_rect_count: () => rectCount,
    get_cell_size: () => cellSize,

    // Hit tests: configured index or miss. Box intersections do a real bbox
    // overlap against the configured shape rows (absent rows never intersect).
    hit_test_line: () => hit.line ?? -1,
    hit_test_text: () => hit.text ?? -1,
    hit_test_rect: () => hit.rect ?? -1,
    hit_test_image: () => hit.image ?? -1,
    line_intersects_box: (i, r1, c1, r2, c2) => {
      const l = lines[i];
      return l ? bboxOverlaps(l[0], l[1], l[2], l[3], r1, c1, r2, c2) : false;
    },
    rect_intersects_box: (i, r1, c1, r2, c2) => {
      const s = rects[i];
      return s ? bboxOverlaps(s[0], s[1], s[2], s[3], r1, c1, r2, c2) : false;
    },
    text_intersects_box: (i, r1, c1, r2, c2) => {
      const t = texts[i];
      return t ? bboxOverlaps(t[0], t[1], t[0] + t[4], t[1] + t[3], r1, c1, r2, c2) : false;
    },
    image_intersects_box: (i, r1, c1, r2, c2) => {
      const m = images[i];
      return m ? bboxOverlaps(m[0], m[1], m[2], m[3], r1, c1, r2, c2) : false;
    },

    set_viewport: () => {},
    set_camera: () => {},
    get_cam_x: () => 0,
    get_cam_y: () => 0,
    get_zoom: () => 1,
    clear: () => { squares.length = 0; lineCount = 0; rectCount = 0; textCount = 0; imageCount = 0; },

    // Paints land in `paints` (not `calls`) so mutation-sequence assertions
    // stay stable while preview/highlight tests can assert paint order.
    render: () => { paints.push(['render']); },
    render_with_line: (r1, c1, r2, c2) => { paints.push(['render_with_line', r1, c1, r2, c2]); },
    render_with_rect: (r1, c1, r2, c2) => { paints.push(['render_with_rect', r1, c1, r2, c2]); },
    render_with_selection_box: (r1, c1, r2, c2) => { paints.push(['render_with_selection_box', r1, c1, r2, c2]); },
    highlight_square: (idx) => { paints.push(['highlight_square', idx]); },
    highlight_line: (idx) => { paints.push(['highlight_line', idx]); },
    highlight_rect: (idx) => { paints.push(['highlight_rect', idx]); },
    highlight_text: (idx) => { paints.push(['highlight_text', idx]); },
    highlight_image: (idx) => { paints.push(['highlight_image', idx]); },
    preview_square: (r, c, size, color) => { paints.push(['preview_square', r, c, size, color]); },
    preview_line: (r1, c1, r2, c2, color, w) => { paints.push(['preview_line', r1, c1, r2, c2, color, w]); },
    preview_rect: (r1, c1, r2, c2, fill, outline) => { paints.push(['preview_rect', r1, c1, r2, c2, fill, outline]); },
    preview_text: (r, c, color, size, boxW, boxH, halign, valign, text) => {
      paints.push(['preview_text', r, c, color, size, boxW, boxH, halign, valign, text]);
    },
    preview_image: () => { paints.push(['preview_image']); },
    render_text_preview: (r, c, color, size, text) => { paints.push(['render_text_preview', r, c, color, size, text]); },
    draw_handle: () => {},
    draw_selection_box: () => {},
  };
  return { grid: { ...stubWasm(), ...g }, calls, paints };
}
