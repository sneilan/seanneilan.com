export type GridCanvasWasm = {
  // Core
  handle_click(x: number, y: number): void;
  render(): void;
  clear(): void;
  resize(rows: number, cols: number): void;

  // Grid info
  get_rows(): number;
  get_cols(): number;
  get_cell_size(): number;
  get_data_zone_start_row(): number;
  get_data_zone_start_col(): number;
  get_data_zone_size(): number;

  // Cell operations
  get_cell(row: number, col: number): boolean;
  get_cell_color(row: number, col: number): number;
  set_cell(row: number, col: number, value: boolean): void;
  set_draw_color(idx: number): void;
  move_cell(from_row: number, from_col: number, to_row: number, to_col: number): void;
  delete_cell(row: number, col: number): void;

  // Drawing tools
  render_with_line(r1: number, c1: number, r2: number, c2: number): void;
  draw_line(r1: number, c1: number, r2: number, c2: number): void;
  render_with_rect(r1: number, c1: number, r2: number, c2: number): void;
  draw_rect(r1: number, c1: number, r2: number, c2: number): void;

  // Selection
  render_with_selection(row: number, col: number): void;
  render_with_drag_preview(sel_row: number, sel_col: number, preview_row: number, preview_col: number): void;
  render_with_selection_box(r1: number, c1: number, r2: number, c2: number): void;
  highlight_cell(row: number, col: number): void;
  draw_selection_box(r1: number, c1: number, r2: number, c2: number): void;

  // Shape selection (lines and rects)
  get_line_count(): number;
  get_rect_count(): number;
  get_line(idx: number): Uint32Array;
  get_rect(idx: number): Uint32Array;
  hit_test_line(x: number, y: number, tolerance: number): number;
  hit_test_rect(x: number, y: number): number;
  delete_line(idx: number): void;
  delete_rect(idx: number): void;
  highlight_line(idx: number): void;
  highlight_rect(idx: number): void;
  move_line(idx: number, delta_row: number, delta_col: number): void;
  move_rect(idx: number, delta_row: number, delta_col: number): void;
  line_intersects_box(line_idx: number, box_r1: number, box_c1: number, box_r2: number, box_c2: number): boolean;
  rect_intersects_box(rect_idx: number, box_r1: number, box_c1: number, box_r2: number, box_c2: number): boolean;
  add_line(r1: number, c1: number, r2: number, c2: number, color: number): void;
  add_rect(r1: number, c1: number, r2: number, c2: number, color: number): void;

  // Import/Export
  export_json(): string;
  export_pytorch_tensor(): string;
  import_json(json_str: string): void;
  import_tensor(tensor_str: string): void;
};

export type GridWasmState = {
  grid: GridCanvasWasm | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
};
