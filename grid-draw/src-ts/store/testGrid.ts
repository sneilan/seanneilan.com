import type { GridCanvasWasm } from '../types/grid';
import { stubWasm } from './wasmStub';

/**
 * A recording mock of the WASM GridCanvas for store/action tests. It captures
 * every mutation call and serves configurable reads so actions can capture
 * prior state and we can assert the exact WASM calls an action produces.
 * Square records are tracked in-memory (flat [r, c, color, size, ...], z-order)
 * so draw/place/clear round-trips behave like the real grid.
 */
export function makeGrid(opts?: {
  lines?: number[][];
  rects?: number[][];
  /** Pre-existing square records as [r, c, color, size] tuples. */
  squares?: number[][];
}) {
  const calls: Array<[string, ...number[]]> = [];
  const lines = opts?.lines ?? [];
  const rects = opts?.rects ?? [];
  let lineCount = lines.length;
  let rectCount = rects.length;
  let textCount = 0;
  let imageCount = 0;

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
    set_outline_color: () => {},
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
    insert_text: (idx, r, c, color) => { textCount++; calls.push(['insert_text', idx, r, c, color]); },
    delete_text: (idx) => { textCount--; calls.push(['delete_text', idx]); },
    move_text: (idx, dr, dc) => calls.push(['move_text', idx, dr, dc]),
    set_text_color: (idx, color) => calls.push(['set_text_color', idx, color]),
    get_text_count: () => textCount,
    get_text: () => new Int32Array([1, 0, 0, 1, 1]),
    get_text_string: () => '',
    get_text_size: () => 1,
    insert_image: (idx, r1, c1, r2, c2) => { imageCount++; calls.push(['insert_image', idx, r1, c1, r2, c2]); },
    add_image: (r1, c1, r2, c2) => { imageCount++; calls.push(['add_image', r1, c1, r2, c2]); },
    delete_image: (idx) => { imageCount--; calls.push(['delete_image', idx]); },
    move_image: (idx, dr, dc) => calls.push(['move_image', idx, dr, dc]),
    set_image_geom: (idx, r1, c1, r2, c2) => calls.push(['set_image_geom', idx, r1, c1, r2, c2]),
    resize_image: (idx, handle, r, c) => calls.push(['resize_image', idx, handle, r, c]),
    get_image_count: () => imageCount,
    get_image: () => new Int32Array([0, 0, 8, 8]),
    get_image_url: () => '',
    hit_test_image: () => -1,
    image_intersects_box: () => false,
    highlight_image: () => {},
    preview_image: () => {},
    get_line: (idx) => new Int32Array(lines[idx] ?? [0, 0, 1, 1, 0]),
    get_rect: (idx) => new Int32Array(rects[idx] ?? [0, 0, 2, 2, 0, 6]),
    get_line_count: () => lineCount,
    get_rect_count: () => rectCount,
    get_cell_size: () => 2,
    set_viewport: () => {},
    set_camera: () => {},
    get_cam_x: () => 0,
    get_cam_y: () => 0,
    get_zoom: () => 1,
    clear: () => { squares.length = 0; lineCount = 0; rectCount = 0; textCount = 0; imageCount = 0; },
    render: () => {},
    highlight_square: () => {},
    highlight_line: () => {},
    highlight_rect: () => {},
    draw_handle: () => {},
    draw_selection_box: () => {},
  };
  return { grid: { ...stubWasm(), ...g }, calls };
}
