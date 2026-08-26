import type { GridCanvasWasm } from '../../types/grid';

/**
 * A faithful in-memory reimplementation of the WASM grid's MUTATION semantics,
 * for testing the edit/undo layer without a browser/canvas. Buffer operations
 * (insert/delete/set/move/resize) mirror src/shapes.rs and src/cells.rs exactly,
 * including index-shifting and the set_cell↔draw_color coupling. Rendering and
 * highlight calls are no-ops.
 *
 * This is NOT the real WASM, but it encodes the same invariants, so an undo/redo
 * round-trip that holds here would hold against the Rust unless the Rust diverges
 * from these documented semantics.
 */
const LINE_STRIDE = 6;
const RECT_STRIDE = 6;
const TRANSPARENT = 6;

export class FakeGrid {
  lines: number[] = [];
  rects: number[] = [];
  // Filled cells keyed "r,c" → color index. Absence = empty.
  cells = new Map<string, number>();
  private drawColor = 0;
  private rows: number;
  private cols: number;

  constructor(rows = 32, cols = 32) {
    this.rows = rows;
    this.cols = cols;
  }

  /** Stable serialization of the whole document, for equality assertions. */
  snapshot(): string {
    const cells = [...this.cells.entries()].sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
    return JSON.stringify({ lines: this.lines, rects: this.rects, cells });
  }

  // --- reads ---------------------------------------------------------------
  get_rows() { return this.rows; }
  get_cols() { return this.cols; }
  get_cell_size() { return 16; }
  get_line_count() { return this.lines.length / LINE_STRIDE; }
  get_rect_count() { return this.rects.length / RECT_STRIDE; }
  get_line(idx: number) { return new Uint32Array(this.lines.slice(idx * LINE_STRIDE, idx * LINE_STRIDE + LINE_STRIDE)); }
  get_rect(idx: number) { return new Uint32Array(this.rects.slice(idx * RECT_STRIDE, idx * RECT_STRIDE + RECT_STRIDE)); }
  get_cell(row: number, col: number) { return this.cells.has(`${row},${col}`); }
  get_cell_color(row: number, col: number) { return this.cells.get(`${row},${col}`) ?? 0; }

  // --- cell mutators (mirror cells.rs) -------------------------------------
  set_draw_color(idx: number) { this.drawColor = idx; }
  set_cell(row: number, col: number, value: boolean) {
    if (row >= this.rows || col >= this.cols) return;
    if (value && this.drawColor < TRANSPARENT) this.cells.set(`${row},${col}`, this.drawColor);
    else this.cells.delete(`${row},${col}`);
  }
  set_cell_color(row: number, col: number, color: number) {
    const k = `${row},${col}`;
    if (this.cells.has(k) && color < TRANSPARENT) this.cells.set(k, color);
  }
  delete_cell(row: number, col: number) { this.cells.delete(`${row},${col}`); }

  // --- shape mutators (mirror shapes.rs) -----------------------------------
  set_line_color(idx: number, color: number) {
    const s = idx * LINE_STRIDE;
    if (s + LINE_STRIDE <= this.lines.length) this.lines[s + 4] = color;
  }
  set_line_width(idx: number, width: number) {
    const s = idx * LINE_STRIDE;
    if (s + LINE_STRIDE <= this.lines.length) this.lines[s + 5] = Math.max(1, width);
  }
  set_draw_line_width() {}
  set_rect_fill(idx: number, color: number) {
    const s = idx * RECT_STRIDE;
    if (s + RECT_STRIDE <= this.rects.length) this.rects[s + 4] = color;
  }
  set_rect_outline(idx: number, color: number) {
    const s = idx * RECT_STRIDE;
    if (s + RECT_STRIDE <= this.rects.length) this.rects[s + 5] = color;
  }
  move_line(idx: number, dr: number, dc: number) {
    const s = idx * LINE_STRIDE;
    if (s + LINE_STRIDE > this.lines.length) return;
    if ([this.lines[s] + dr, this.lines[s + 1] + dc, this.lines[s + 2] + dr, this.lines[s + 3] + dc].some(v => v < 0)) return;
    this.lines[s] += dr; this.lines[s + 1] += dc; this.lines[s + 2] += dr; this.lines[s + 3] += dc;
  }
  move_rect(idx: number, dr: number, dc: number) {
    const s = idx * RECT_STRIDE;
    if (s + RECT_STRIDE > this.rects.length) return;
    if ([this.rects[s] + dr, this.rects[s + 1] + dc, this.rects[s + 2] + dr, this.rects[s + 3] + dc].some(v => v < 0)) return;
    this.rects[s] += dr; this.rects[s + 1] += dc; this.rects[s + 2] += dr; this.rects[s + 3] += dc;
  }
  set_line(idx: number, r1: number, c1: number, r2: number, c2: number) {
    const s = idx * LINE_STRIDE;
    if (s + LINE_STRIDE > this.lines.length) return;
    this.lines[s] = r1; this.lines[s + 1] = c1; this.lines[s + 2] = r2; this.lines[s + 3] = c2;
  }
  set_rect(idx: number, r1: number, c1: number, r2: number, c2: number) {
    const s = idx * RECT_STRIDE;
    if (s + RECT_STRIDE > this.rects.length) return;
    this.rects[s] = r1; this.rects[s + 1] = c1; this.rects[s + 2] = r2; this.rects[s + 3] = c2;
  }
  insert_line(idx: number, r1: number, c1: number, r2: number, c2: number, color: number, width = 10) {
    const at = Math.min(idx, this.get_line_count()) * LINE_STRIDE;
    this.lines.splice(at, 0, r1, c1, r2, c2, color, width);
  }
  insert_rect(idx: number, r1: number, c1: number, r2: number, c2: number, fill: number, outline: number) {
    const at = Math.min(idx, this.get_rect_count()) * RECT_STRIDE;
    this.rects.splice(at, 0, r1, c1, r2, c2, fill, outline);
  }
  delete_line(idx: number) {
    const s = idx * LINE_STRIDE;
    if (s + LINE_STRIDE <= this.lines.length) this.lines.splice(s, LINE_STRIDE);
  }
  delete_rect(idx: number) {
    const s = idx * RECT_STRIDE;
    if (s + RECT_STRIDE <= this.rects.length) this.rects.splice(s, RECT_STRIDE);
  }
  set_line_endpoint(idx: number, which: number, r: number, c: number) {
    const s = idx * LINE_STRIDE;
    if (s + LINE_STRIDE > this.lines.length) return;
    if (which === 0) { this.lines[s] = r; this.lines[s + 1] = c; }
    else { this.lines[s + 2] = r; this.lines[s + 3] = c; }
  }
  /** Mirror resize_rect normalization in shapes.rs (handles 0..7). */
  resize_rect(idx: number, handle: number, r: number, c: number) {
    const s = idx * RECT_STRIDE;
    if (s + RECT_STRIDE > this.rects.length) return;
    let minR = Math.min(this.rects[s], this.rects[s + 2]);
    let maxR = Math.max(this.rects[s], this.rects[s + 2]);
    let minC = Math.min(this.rects[s + 1], this.rects[s + 3]);
    let maxC = Math.max(this.rects[s + 1], this.rects[s + 3]);
    if (handle === 0 || handle === 1 || handle === 2) minR = r;
    if (handle === 4 || handle === 5 || handle === 6) maxR = r;
    if (handle === 0 || handle === 6 || handle === 7) minC = c;
    if (handle === 2 || handle === 3 || handle === 4) maxC = c;
    this.rects[s] = Math.min(minR, maxR);
    this.rects[s + 1] = Math.min(minC, maxC);
    this.rects[s + 2] = Math.max(minR, maxR);
    this.rects[s + 3] = Math.max(minC, maxC);
  }
  add_line(r1: number, c1: number, r2: number, c2: number, color: number, width = 10) { this.lines.push(r1, c1, r2, c2, color, width); }
  add_rect(r1: number, c1: number, r2: number, c2: number, fill: number, outline: number) { this.rects.push(r1, c1, r2, c2, fill, outline); }

  // --- no-op rendering / selection surface ---------------------------------
  render() {}
  highlight_cell() {}
  highlight_line() {}
  highlight_rect() {}
  draw_handle() {}
  draw_selection_box() {}
  set_outline_color() {}
}

/** Cast helper: the FakeGrid implements the mutation subset the edit layer uses. */
export function asWasm(g: FakeGrid): GridCanvasWasm {
  return g as unknown as GridCanvasWasm;
}
