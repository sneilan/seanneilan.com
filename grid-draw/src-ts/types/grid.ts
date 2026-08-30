// Coordinates are signed world cells (the canvas is infinite). Shape buffers are
// Int32Array (they can hold negative coordinates). Only render uses the camera;
// every other coordinate here is in WORLD space (cells, or world pixels for hit
// tests) — the host converts screen↔world via the camera.
export type GridCanvasWasm = {
  // Core
  render(): void;
  clear(): void;
  // Pause/resume mutators' auto-render so a batch of edits paints once.
  set_render_paused(paused: boolean): void;

  // Camera / viewport (the grid is unbounded; only this window is drawn)
  set_viewport(view_w: number, view_h: number): void;
  set_camera(cam_x: number, cam_y: number, zoom: number): void;
  get_cam_x(): number;
  get_cam_y(): number;
  get_zoom(): number;

  // Grid info
  get_schema_version(): number;
  rects_consistent(): boolean;
  get_cell_size(): number;

  // Square records: one atomic [r, c, color, size] record per drawn square at
  // its native resolution. Index-stable like lines/rects; insertion = z-order.
  insert_square(idx: number, r: number, c: number, color: number, size: number): void;
  add_square(r: number, c: number, color: number, size: number): number;
  delete_square(idx: number): void;
  get_square(idx: number): Int32Array; // [r, c, color, size]
  get_square_count(): number;
  get_squares(): Int32Array; // flat [r, c, color, size, ...] in z-order
  set_square_color(idx: number, color: number): void;
  move_square(idx: number, dr: number, dc: number): void;
  square_at(row: number, col: number): number; // topmost covering index or -1
  squares_in_box(r1: number, c1: number, r2: number, c2: number): Uint32Array;
  // Coverage queries at a fine coordinate (topmost square wins).
  get_cell(row: number, col: number): boolean;
  get_cell_color(row: number, col: number): number;
  set_draw_color(idx: number): void;
  set_outline_color(idx: number): void;

  // Drawing tools
  render_with_line(r1: number, c1: number, r2: number, c2: number): void;
  draw_line(r1: number, c1: number, r2: number, c2: number): void;
  render_with_rect(r1: number, c1: number, r2: number, c2: number): void;
  draw_rect(r1: number, c1: number, r2: number, c2: number): void;

  // Selection
  render_with_selection_box(r1: number, c1: number, r2: number, c2: number): void;
  highlight_square(idx: number): void;
  draw_selection_box(r1: number, c1: number, r2: number, c2: number): void;

  // Shape selection (lines and rects)
  get_line_count(): number;
  get_rect_count(): number;
  get_line(idx: number): Int32Array;
  get_rect(idx: number): Int32Array;
  hit_test_line(x: number, y: number, tolerance: number): number;
  hit_test_rect(x: number, y: number): number;
  delete_line(idx: number): void;
  delete_rect(idx: number): void;
  highlight_line(idx: number): void;
  highlight_rect(idx: number): void;
  move_line(idx: number, delta_row: number, delta_col: number): void;
  move_rect(idx: number, delta_row: number, delta_col: number): void;
  set_line_endpoint(idx: number, which: number, r: number, c: number): void;
  resize_rect(idx: number, handle: number, r: number, c: number): void;
  draw_handle(r: number, c: number): void;
  // Rotate affordance: round handle on a stalk above the selection's top edge.
  draw_rotate_handle(handle_r: number, handle_c: number, stalk_r: number, stalk_c: number): void;
  preview_square(row: number, col: number, size: number, color: number): void;
  preview_line(r1: number, c1: number, r2: number, c2: number, color: number, width_x10: number): void;
  preview_rect(r1: number, c1: number, r2: number, c2: number, fill: number, outline: number): void;
  set_line_color(idx: number, color: number): void;
  // Per-line stroke width, in tenths of the base 2px stroke (10 = 1×).
  set_line_width(idx: number, width_x10: number): void;
  // Stroke width applied to newly drawn lines (tenths of 2px).
  set_draw_line_width(width_x10: number): void;
  // Grid subdivision level (1/2/4/8): draws sub-grid lines. Snapping is host-side.
  set_subdivision(level: number): void;
  get_subdivision(): number;
  set_rect_fill(idx: number, color: number): void;
  set_rect_outline(idx: number, color: number): void;
  line_intersects_box(line_idx: number, box_r1: number, box_c1: number, box_r2: number, box_c2: number): boolean;
  rect_intersects_box(rect_idx: number, box_r1: number, box_c1: number, box_r2: number, box_c2: number): boolean;
  add_line(r1: number, c1: number, r2: number, c2: number, color: number, width_x10: number): void;
  add_rect(r1: number, c1: number, r2: number, c2: number, fill: number, outline: number): void;
  // Index-stable primitives backing the undo/redo edit layer.
  insert_line(idx: number, r1: number, c1: number, r2: number, c2: number, color: number, width_x10: number): void;
  insert_rect(idx: number, r1: number, c1: number, r2: number, c2: number, fill: number, outline: number): void;
  set_line(idx: number, r1: number, c1: number, r2: number, c2: number): void;
  set_rect(idx: number, r1: number, c1: number, r2: number, c2: number): void;

  // Text shapes (BigBlue Terminal font on the canvas)
  get_text_count(): number;
  get_text(idx: number): Int32Array; // [r, c, color, boxW, boxH, halign, valign] (frame top-left, fine units)
  get_text_string(idx: number): string;
  get_text_size(idx: number): number;
  add_text(r: number, c: number, color: number, size: number, boxW: number, boxH: number, halign: number, valign: number, text: string): void;
  insert_text(idx: number, r: number, c: number, color: number, size: number, boxW: number, boxH: number, halign: number, valign: number, text: string): void;
  delete_text(idx: number): void;
  move_text(idx: number, delta_row: number, delta_col: number): void;
  set_text_color(idx: number, color: number): void;
  set_text_size(idx: number, size: number): void;
  set_text_pos(idx: number, r: number, c: number): void;
  set_text_align(idx: number, halign: number, valign: number): void;
  set_text_frame(idx: number, r: number, c: number, boxW: number, boxH: number): void;
  resize_text(idx: number, handle: number, r: number, c: number): void;
  hit_test_text(x: number, y: number): number;
  text_intersects_box(idx: number, box_r1: number, box_c1: number, box_r2: number, box_c2: number): boolean;
  highlight_text(idx: number): void;
  preview_text(r: number, c: number, color: number, size: number, boxW: number, boxH: number, halign: number, valign: number, text: string): void;
  render_text_preview(r: number, c: number, color: number, size: number, text: string, cursor: number): void;

  // Image objects (bitmaps in a grid-snapped box; pixels loaded from `url`).
  // Only the box + URL are serialized; the browser-decoded element is passed in.
  get_image_count(): number;
  get_image(idx: number): Int32Array; // [r1, c1, r2, c2] (box, fine units, normalized)
  get_image_url(idx: number): string;
  add_image(r1: number, c1: number, r2: number, c2: number, url: string, img: HTMLImageElement): void;
  insert_image(idx: number, r1: number, c1: number, r2: number, c2: number, url: string, img: HTMLImageElement): void;
  delete_image(idx: number): void;
  move_image(idx: number, delta_row: number, delta_col: number): void;
  set_image_geom(idx: number, r1: number, c1: number, r2: number, c2: number): void;
  resize_image(idx: number, handle: number, r: number, c: number): void;
  hit_test_image(x: number, y: number): number;
  image_intersects_box(idx: number, box_r1: number, box_c1: number, box_r2: number, box_c2: number): boolean;
  highlight_image(idx: number): void;
  preview_image(r1: number, c1: number, r2: number, c2: number, img: HTMLImageElement): void;
};

export type GridWasmState = {
  grid: GridCanvasWasm | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
};
