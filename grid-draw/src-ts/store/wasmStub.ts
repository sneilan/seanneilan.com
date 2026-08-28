import type { GridCanvasWasm } from '../types/grid';

/**
 * A complete, inert `GridCanvasWasm` — a null-object grid that holds no state.
 * Test mocks implement only the subset of the WASM surface they exercise;
 * spreading their partial over this base (`{ ...stubWasm(), ...partial }`)
 * yields a fully-typed `GridCanvasWasm` with no type assertions.
 *
 * The base is deliberately BENIGN rather than throwing: the production edit
 * layer probes for optional methods with `typeof grid.x === 'function'` and
 * `grid.x?.(...)` (e.g. draw_rotate_handle, set_render_paused, the shape-count
 * getters in apply.ts's range guard). A throwing stub would defeat those
 * guards; a no-op that returns empty/zero values behaves exactly as an absent
 * method did, so every mock keeps its original behavior. Mocks override the
 * methods they actually assert on.
 */
export function stubWasm(): GridCanvasWasm {
  const noop = () => {};
  const zero = () => 0;
  const no = () => false;
  const empty = () => new Int32Array();
  const emptyStr = () => '';
  return {
    // Core
    render: noop,
    clear: noop,
    set_render_paused: noop,

    // Camera / viewport
    set_viewport: noop,
    set_camera: noop,
    get_cam_x: zero,
    get_cam_y: zero,
    get_zoom: () => 1,

    // Grid info
    get_schema_version: zero,
    rects_consistent: () => true,
    get_cell_size: () => 16,

    // Cell operations
    get_cell: no,
    get_cell_color: zero,
    set_cell: noop,
    set_cell_color: noop,
    set_draw_color: noop,
    set_outline_color: noop,
    move_cell: noop,
    delete_cell: noop,
    get_cell_count: zero,
    get_filled_cells: empty,

    // Drawing tools
    render_with_line: noop,
    draw_line: noop,
    render_with_rect: noop,
    draw_rect: noop,

    // Selection
    render_with_selection: noop,
    render_with_selection_box: noop,
    highlight_cell: noop,
    highlight_cells: noop,
    draw_selection_box: noop,

    // Shape selection (lines and rects)
    get_line_count: zero,
    get_rect_count: zero,
    get_line: empty,
    get_rect: empty,
    hit_test_line: () => -1,
    hit_test_rect: () => -1,
    delete_line: noop,
    delete_rect: noop,
    highlight_line: noop,
    highlight_rect: noop,
    move_line: noop,
    move_rect: noop,
    set_line_endpoint: noop,
    resize_rect: noop,
    draw_handle: noop,
    draw_rotate_handle: noop,
    preview_cell: noop,
    preview_cells: noop,
    preview_line: noop,
    preview_rect: noop,
    set_line_color: noop,
    set_line_width: noop,
    set_draw_line_width: noop,
    set_subdivision: noop,
    get_subdivision: () => 1,
    set_rect_fill: noop,
    set_rect_outline: noop,
    line_intersects_box: no,
    rect_intersects_box: no,
    add_line: noop,
    add_rect: noop,
    insert_line: noop,
    insert_rect: noop,
    set_line: noop,
    set_rect: noop,

    // Text shapes
    get_text_count: zero,
    get_text: empty,
    get_text_string: emptyStr,
    get_text_size: () => 1,
    add_text: noop,
    insert_text: noop,
    delete_text: noop,
    move_text: noop,
    set_text_color: noop,
    set_text_size: noop,
    set_text_pos: noop,
    set_text_align: noop,
    set_text_frame: noop,
    resize_text: noop,
    hit_test_text: () => -1,
    text_intersects_box: no,
    highlight_text: noop,
    preview_text: noop,
    render_text_preview: noop,

    // Image objects
    get_image_count: zero,
    get_image: empty,
    get_image_url: emptyStr,
    add_image: noop,
    insert_image: noop,
    delete_image: noop,
    move_image: noop,
    set_image_geom: noop,
    resize_image: noop,
    hit_test_image: () => -1,
    image_intersects_box: no,
    highlight_image: noop,
    preview_image: noop,
  };
}
