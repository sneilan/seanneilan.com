import type { GridCanvasWasm } from '../types/grid';

/**
 * A recording mock of the WASM GridCanvas for store/action tests. It captures
 * every mutation call and serves configurable reads so actions can capture
 * prior state and we can assert the exact WASM calls an action produces. Cell
 * fills/colors are tracked in-memory so place/clear round-trips behave like the
 * real grid (needed by loadDesign and friends).
 */
export function makeGrid(opts?: {
  rows?: number;
  cols?: number;
  lines?: number[][];
  rects?: number[][];
  cell?: (r: number, c: number) => boolean;
  cellColor?: (r: number, c: number) => number;
}) {
  const calls: Array<[string, ...number[]]> = [];
  const rows = opts?.rows ?? 32;
  const cols = opts?.cols ?? 32;
  const lines = opts?.lines ?? [];
  const rects = opts?.rects ?? [];
  let lineCount = lines.length;
  let rectCount = rects.length;
  let textCount = 0;
  let imageCount = 0;

  // In-memory cell state so set/get round-trips (place → serialize) work.
  const filled = new Map<string, number>(); // "r,c" -> colorIdx
  const key = (r: number, c: number) => `${r},${c}`;
  // Mirror the real grid: set_cell(true) fills with the current draw color.
  let drawColor = 0;
  if (opts?.cell) {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (opts.cell(r, c)) filled.set(key(r, c), opts.cellColor ? opts.cellColor(r, c) : 0);
      }
    }
  }

  const g: Partial<GridCanvasWasm> = {
    set_cell: (r, c, v) => { calls.push(['set_cell', r, c, v ? 1 : 0]); if (v) filled.set(key(r, c), drawColor); else filled.delete(key(r, c)); },
    set_cell_color: (r, c, color) => { calls.push(['set_cell_color', r, c, color]); if (filled.has(key(r, c))) filled.set(key(r, c), color); },
    set_draw_color: (idx) => { drawColor = idx; calls.push(['set_draw_color', idx]); },
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
    delete_cell: (r, c) => { calls.push(['delete_cell', r, c]); filled.delete(key(r, c)); },
    get_line: (idx) => new Int32Array(lines[idx] ?? [0, 0, 1, 1, 0]),
    get_rect: (idx) => new Int32Array(rects[idx] ?? [0, 0, 2, 2, 0, 6]),
    get_line_count: () => lineCount,
    get_rect_count: () => rectCount,
    get_cell: (r, c) => filled.has(key(r, c)),
    get_cell_color: (r, c) => filled.get(key(r, c)) ?? 0,
    get_cell_count: () => filled.size,
    get_filled_cells: () => {
      const out: number[] = [];
      for (const [k, color] of filled) {
        const [r, c] = k.split(',').map(Number);
        out.push(r, c, color);
      }
      return new Int32Array(out);
    },
    get_cell_size: () => 16,
    set_viewport: () => {},
    set_camera: () => {},
    get_cam_x: () => 0,
    get_cam_y: () => 0,
    get_zoom: () => 1,
    clear: () => { filled.clear(); lineCount = 0; rectCount = 0; textCount = 0; imageCount = 0; },
    render: () => {},
    highlight_cell: () => {},
    highlight_line: () => {},
    highlight_rect: () => {},
    draw_handle: () => {},
    draw_selection_box: () => {},
  };
  return { grid: g as unknown as GridCanvasWasm, calls };
}
