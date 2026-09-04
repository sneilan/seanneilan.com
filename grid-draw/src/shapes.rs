use wasm_bindgen::prelude::*;
use crate::{GridCanvas, CELL_SIZE, LINE_STRIDE, RECT_STRIDE, SCHEMA_VERSION};
use crate::buffers::{insert_record, delete_record, set_geom, resize_corners};

// Lines/rects are flat `i32` buffers of signed world-cell coordinates. Hit tests
// and intersection take WORLD coordinates (the host converts screen→world via the
// camera before calling); only render/draw_handle apply the camera transform.
#[wasm_bindgen]
impl GridCanvas {
    #[wasm_bindgen]
    pub fn draw_line(&mut self, r1: i32, c1: i32, r2: i32, c2: i32) {
        self.drawn_lines.extend_from_slice(&[r1, c1, r2, c2, self.draw_color as i32, self.line_width]);
        self.maybe_render();
    }

    /// Set the stroke width applied to NEW lines, in tenths of the base 2px
    /// stroke (10 = 1×, 15 = 1.5×, 20 = 2×, 30 = 3×, 50 = 5×).
    #[wasm_bindgen]
    pub fn set_draw_line_width(&mut self, width_x10: i32) {
        self.line_width = width_x10.max(1);
    }

    #[wasm_bindgen]
    pub fn draw_rect(&mut self, r1: i32, c1: i32, r2: i32, c2: i32) {
        // Rects carry an independent fill and outline color plus an outline
        // stroke width and alignment: [r1,c1,r2,c2,fill,outline,width_x10,align].
        // Color index 6 ("transparent") means "no fill" / "no outline".
        self.drawn_rects.extend_from_slice(&[
            r1, c1, r2, c2, self.draw_color as i32, self.outline_color as i32,
            self.rect_line_width, self.rect_stroke_align,
        ]);
        self.maybe_render();
    }

    /// Set the outline stroke width applied to NEW rects, in tenths of the base
    /// 2px stroke (10 = 1×), mirroring `set_draw_line_width`.
    #[wasm_bindgen]
    pub fn set_draw_rect_line_width(&mut self, width_x10: i32) {
        self.rect_line_width = width_x10.max(1);
    }

    /// Set the outline stroke alignment applied to NEW rects: 0 center, 1
    /// inside, 2 outside.
    #[wasm_bindgen]
    pub fn set_draw_rect_stroke_align(&mut self, align: i32) {
        self.rect_stroke_align = align.clamp(0, 2);
    }

    #[wasm_bindgen]
    pub fn get_line_count(&self) -> usize {
        self.drawn_lines.len() / LINE_STRIDE
    }

    #[wasm_bindgen]
    pub fn get_rect_count(&self) -> usize {
        self.drawn_rects.len() / RECT_STRIDE
    }

    /// Packing version of the shape buffers. The JS host compares this against
    /// the version it was built for; a mismatch means a stale/half-migrated
    /// WASM instance, and the host resets rather than render garbage.
    #[wasm_bindgen]
    pub fn get_schema_version(&self) -> u32 {
        SCHEMA_VERSION
    }

    /// True if the rect buffer is a whole number of records. A false here means
    /// a mixed-stride write corrupted the buffer (e.g. across a hot reload that
    /// changed the schema); the host should clear and start clean.
    #[wasm_bindgen]
    pub fn rects_consistent(&self) -> bool {
        self.drawn_rects.len() % RECT_STRIDE == 0
    }

    #[wasm_bindgen]
    pub fn get_line(&self, idx: usize) -> Vec<i32> {
        let start = idx * LINE_STRIDE;
        if start + LINE_STRIDE <= self.drawn_lines.len() {
            self.drawn_lines[start..start + LINE_STRIDE].to_vec()
        } else {
            vec![]
        }
    }

    #[wasm_bindgen]
    pub fn get_rect(&self, idx: usize) -> Vec<i32> {
        let start = idx * RECT_STRIDE;
        if start + RECT_STRIDE <= self.drawn_rects.len() {
            self.drawn_rects[start..start + RECT_STRIDE].to_vec()
        } else {
            vec![]
        }
    }

    /// Hit test for lines. Returns the index of the line hit, or -1 if none.
    /// (x, y) and `tolerance` are in WORLD pixels.
    #[wasm_bindgen]
    pub fn hit_test_line(&self, x: f64, y: f64, tolerance: f64) -> i32 {
        let mut i = 0;
        let mut idx = 0;
        while i + 4 < self.drawn_lines.len() {
            let r1 = self.drawn_lines[i] as f64 * CELL_SIZE;
            let c1 = self.drawn_lines[i + 1] as f64 * CELL_SIZE;
            let r2 = self.drawn_lines[i + 2] as f64 * CELL_SIZE;
            let c2 = self.drawn_lines[i + 3] as f64 * CELL_SIZE;

            let dist = Self::point_to_segment_distance(x, y, c1, r1, c2, r2);
            if dist <= tolerance {
                return idx;
            }

            i += LINE_STRIDE;
            idx += 1;
        }
        -1
    }

    /// Hit test for rectangles. Returns the index of the rect hit, or -1 if none.
    /// (x, y) are in WORLD pixels.
    #[wasm_bindgen]
    pub fn hit_test_rect(&self, x: f64, y: f64) -> i32 {
        let mut i = 0;
        let mut idx = 0;
        while i + 5 < self.drawn_rects.len() {
            let r1 = self.drawn_rects[i] as f64 * CELL_SIZE;
            let c1 = self.drawn_rects[i + 1] as f64 * CELL_SIZE;
            let r2 = self.drawn_rects[i + 2] as f64 * CELL_SIZE;
            let c2 = self.drawn_rects[i + 3] as f64 * CELL_SIZE;
            let fill = self.drawn_rects[i + 4];

            let min_x = c1.min(c2);
            let max_x = c1.max(c2);
            let min_y = r1.min(r2);
            let max_y = r1.max(r2);

            if fill != 6 {
                if x >= min_x && x <= max_x && y >= min_y && y <= max_y {
                    return idx;
                }
            } else {
                let tolerance = 5.0;
                let on_left = x >= min_x - tolerance && x <= min_x + tolerance && y >= min_y && y <= max_y;
                let on_right = x >= max_x - tolerance && x <= max_x + tolerance && y >= min_y && y <= max_y;
                let on_top = y >= min_y - tolerance && y <= min_y + tolerance && x >= min_x && x <= max_x;
                let on_bottom = y >= max_y - tolerance && y <= max_y + tolerance && x >= min_x && x <= max_x;
                if on_left || on_right || on_top || on_bottom {
                    return idx;
                }
            }

            i += RECT_STRIDE;
            idx += 1;
        }
        -1
    }

    fn point_to_segment_distance(px: f64, py: f64, x1: f64, y1: f64, x2: f64, y2: f64) -> f64 {
        let dx = x2 - x1;
        let dy = y2 - y1;
        let len_sq = dx * dx + dy * dy;

        if len_sq == 0.0 {
            let ddx = px - x1;
            let ddy = py - y1;
            return (ddx * ddx + ddy * ddy).sqrt();
        }

        let t = ((px - x1) * dx + (py - y1) * dy) / len_sq;
        let t = t.max(0.0).min(1.0);

        let proj_x = x1 + t * dx;
        let proj_y = y1 + t * dy;

        let ddx = px - proj_x;
        let ddy = py - proj_y;
        (ddx * ddx + ddy * ddy).sqrt()
    }

    #[wasm_bindgen]
    pub fn delete_line(&mut self, idx: usize) {
        delete_record(&mut self.drawn_lines, LINE_STRIDE, idx);
        self.maybe_render();
    }

    #[wasm_bindgen]
    pub fn delete_rect(&mut self, idx: usize) {
        delete_record(&mut self.drawn_rects, RECT_STRIDE, idx);
        self.maybe_render();
    }

    #[wasm_bindgen]
    pub fn move_line(&mut self, idx: usize, delta_row: i32, delta_col: i32) {
        let start = idx * LINE_STRIDE;
        if start + LINE_STRIDE <= self.drawn_lines.len() {
            self.drawn_lines[start] += delta_row;
            self.drawn_lines[start + 1] += delta_col;
            self.drawn_lines[start + 2] += delta_row;
            self.drawn_lines[start + 3] += delta_col;
            self.maybe_render();
        }
    }

    #[wasm_bindgen]
    pub fn move_rect(&mut self, idx: usize, delta_row: i32, delta_col: i32) {
        let start = idx * RECT_STRIDE;
        if start + RECT_STRIDE <= self.drawn_rects.len() {
            self.drawn_rects[start] += delta_row;
            self.drawn_rects[start + 1] += delta_col;
            self.drawn_rects[start + 2] += delta_row;
            self.drawn_rects[start + 3] += delta_col;
            self.maybe_render();
        }
    }

    /// Move a single endpoint of a line to (r, c). `which` is 0 (first point) or 1 (second point).
    #[wasm_bindgen]
    pub fn set_line_endpoint(&mut self, idx: usize, which: u32, r: i32, c: i32) {
        let start = idx * LINE_STRIDE;
        if start + LINE_STRIDE <= self.drawn_lines.len() {
            if which == 0 {
                self.drawn_lines[start] = r;
                self.drawn_lines[start + 1] = c;
            } else {
                self.drawn_lines[start + 2] = r;
                self.drawn_lines[start + 3] = c;
            }
            self.maybe_render();
        }
    }

    /// Resize a rectangle by dragging one of 8 handles to (r, c), keeping the
    /// opposite side(s) anchored. Handle indices (clockwise from top-left):
    /// 0=TL, 1=top, 2=TR, 3=right, 4=BR, 5=bottom, 6=BL, 7=left.
    /// The rect is re-normalized so r1,c1 is the min corner and r2,c2 the max.
    #[wasm_bindgen]
    pub fn resize_rect(&mut self, idx: usize, handle: u32, r: i32, c: i32) {
        let start = idx * RECT_STRIDE;
        if start + RECT_STRIDE > self.drawn_rects.len() {
            return;
        }

        let (r1, c1, r2, c2) = resize_corners(
            self.drawn_rects[start], self.drawn_rects[start + 1],
            self.drawn_rects[start + 2], self.drawn_rects[start + 3],
            handle, r, c,
        );
        set_geom(&mut self.drawn_rects, RECT_STRIDE, idx, r1, c1, r2, c2);
        self.maybe_render();
    }

    /// Draw a small square grab-handle centered on a grid coordinate (r, c).
    /// Coords are fractional WORLD grid units; the handle is a fixed screen size.
    #[wasm_bindgen]
    pub fn draw_handle(&self, r: f64, c: f64) {
        let x = self.sx(c * CELL_SIZE);
        let y = self.sy(r * CELL_SIZE);
        let size = 13.0;
        let hx = x - size / 2.0;
        let hy = y - size / 2.0;
        self.ctx.set_fill_style_str("#ffffff");
        self.ctx.fill_rect(hx, hy, size, size);
        self.ctx.set_stroke_style_str("#ff8800");
        self.ctx.set_line_width(2.0);
        self.ctx.stroke_rect(hx, hy, size, size);
        self.ctx.set_line_width(1.0);
    }

    /// Draw the rotate affordance: a short "stalk" line from the top-center of
    /// the selection (stalk_r, stalk_c) up to a round grab-handle at
    /// (handle_r, handle_c). Coords are fractional WORLD grid units; the circle
    /// is a fixed screen size.
    #[wasm_bindgen]
    pub fn draw_rotate_handle(&self, handle_r: f64, handle_c: f64, stalk_r: f64, stalk_c: f64) {
        let hx = self.sx(handle_c * CELL_SIZE);
        let hy = self.sy(handle_r * CELL_SIZE);
        let bx = self.sx(stalk_c * CELL_SIZE);
        let by = self.sy(stalk_r * CELL_SIZE);
        // Stalk from the selection's top edge to the handle.
        self.ctx.set_stroke_style_str("#ff8800");
        self.ctx.set_line_width(2.0);
        self.ctx.begin_path();
        self.ctx.move_to(bx, by);
        self.ctx.line_to(hx, hy);
        self.ctx.stroke();
        // Round handle (white fill, orange ring).
        let radius = 6.0;
        let tau = std::f64::consts::PI * 2.0;
        self.ctx.set_fill_style_str("#ffffff");
        self.ctx.begin_path();
        let _ = self.ctx.arc(hx, hy, radius, 0.0, tau);
        self.ctx.fill();
        self.ctx.begin_path();
        let _ = self.ctx.arc(hx, hy, radius, 0.0, tau);
        self.ctx.stroke();
        self.ctx.set_line_width(1.0);
    }

    /// Check if a line intersects a box (for box selection). Box in world cells.
    #[wasm_bindgen]
    pub fn line_intersects_box(&self, line_idx: usize, box_r1: i32, box_c1: i32, box_r2: i32, box_c2: i32) -> bool {
        let start = line_idx * LINE_STRIDE;
        if start + LINE_STRIDE > self.drawn_lines.len() {
            return false;
        }

        let lr1 = self.drawn_lines[start];
        let lc1 = self.drawn_lines[start + 1];
        let lr2 = self.drawn_lines[start + 2];
        let lc2 = self.drawn_lines[start + 3];

        let min_br = box_r1.min(box_r2);
        let max_br = box_r1.max(box_r2);
        let min_bc = box_c1.min(box_c2);
        let max_bc = box_c1.max(box_c2);

        let p1_in = lr1 >= min_br && lr1 <= max_br && lc1 >= min_bc && lc1 <= max_bc;
        let p2_in = lr2 >= min_br && lr2 <= max_br && lc2 >= min_bc && lc2 <= max_bc;
        if p1_in || p2_in {
            return true;
        }

        let line_min_r = lr1.min(lr2);
        let line_max_r = lr1.max(lr2);
        let line_min_c = lc1.min(lc2);
        let line_max_c = lc1.max(lc2);

        line_max_r >= min_br && line_min_r <= max_br && line_max_c >= min_bc && line_min_c <= max_bc
    }

    /// Check if a rect intersects a box (for box selection). Box in world cells.
    #[wasm_bindgen]
    pub fn rect_intersects_box(&self, rect_idx: usize, box_r1: i32, box_c1: i32, box_r2: i32, box_c2: i32) -> bool {
        let start = rect_idx * RECT_STRIDE;
        if start + RECT_STRIDE > self.drawn_rects.len() {
            return false;
        }

        let rr1 = self.drawn_rects[start];
        let rc1 = self.drawn_rects[start + 1];
        let rr2 = self.drawn_rects[start + 2];
        let rc2 = self.drawn_rects[start + 3];
        let fill = self.drawn_rects[start + 4];

        let min_br = box_r1.min(box_r2);
        let max_br = box_r1.max(box_r2);
        let min_bc = box_c1.min(box_c2);
        let max_bc = box_c1.max(box_c2);

        let rect_min_r = rr1.min(rr2);
        let rect_max_r = rr1.max(rr2);
        let rect_min_c = rc1.min(rc2);
        let rect_max_c = rc1.max(rc2);

        let overlap = rect_max_r >= min_br && rect_min_r <= max_br
            && rect_max_c >= min_bc && rect_min_c <= max_bc;

        if fill != 6 {
            return overlap;
        }

        // Transparent rect: only its frame is "real", so a selection box that
        // sits entirely inside the interior touches nothing.
        let strictly_inside = min_br > rect_min_r && max_br < rect_max_r
            && min_bc > rect_min_c && max_bc < rect_max_c;
        overlap && !strictly_inside
    }

    /// Add a line directly (for paste operations)
    #[wasm_bindgen]
    pub fn add_line(&mut self, r1: i32, c1: i32, r2: i32, c2: i32, color: i32, width_x10: i32) {
        self.drawn_lines.extend_from_slice(&[r1, c1, r2, c2, color, width_x10]);
    }

    /// Add a rect directly (for paste operations)
    #[wasm_bindgen]
    pub fn add_rect(&mut self, r1: i32, c1: i32, r2: i32, c2: i32, fill: i32, outline: i32, width_x10: i32, stroke_align: i32) {
        self.drawn_rects.extend_from_slice(&[r1, c1, r2, c2, fill, outline, width_x10.max(1), stroke_align.clamp(0, 2)]);
    }

    /// Insert a line at a specific index, shifting later lines up. This is the
    /// index-stable inverse of `delete_line`, used by the undo/redo edit layer.
    /// `idx` is clamped to the end, so inserting at the count appends.
    #[wasm_bindgen]
    pub fn insert_line(&mut self, idx: usize, r1: i32, c1: i32, r2: i32, c2: i32, color: i32, width_x10: i32) {
        insert_record(&mut self.drawn_lines, LINE_STRIDE, idx, &[r1, c1, r2, c2, color, width_x10]);
        self.maybe_render();
    }

    /// Insert a rect at a specific index, shifting later rects up. The
    /// index-stable inverse of `delete_rect`. `idx` is clamped to the end.
    #[wasm_bindgen]
    pub fn insert_rect(&mut self, idx: usize, r1: i32, c1: i32, r2: i32, c2: i32, fill: i32, outline: i32, width_x10: i32, stroke_align: i32) {
        insert_record(&mut self.drawn_rects, RECT_STRIDE, idx, &[r1, c1, r2, c2, fill, outline, width_x10.max(1), stroke_align.clamp(0, 2)]);
        self.maybe_render();
    }

    /// Overwrite a line's geometry in place, leaving its color untouched. The
    /// inverse-friendly primitive behind move/resize edits.
    #[wasm_bindgen]
    pub fn set_line(&mut self, idx: usize, r1: i32, c1: i32, r2: i32, c2: i32) {
        set_geom(&mut self.drawn_lines, LINE_STRIDE, idx, r1, c1, r2, c2);
        self.maybe_render();
    }

    /// Overwrite a rect's geometry in place, leaving its fill/outline untouched.
    /// The inverse-friendly primitive behind move/resize edits.
    #[wasm_bindgen]
    pub fn set_rect(&mut self, idx: usize, r1: i32, c1: i32, r2: i32, c2: i32) {
        set_geom(&mut self.drawn_rects, RECT_STRIDE, idx, r1, c1, r2, c2);
        self.maybe_render();
    }

    /// Recolor a line's stroke (for recoloring a selection).
    #[wasm_bindgen]
    pub fn set_line_color(&mut self, idx: usize, color: i32) {
        let start = idx * LINE_STRIDE;
        if start + LINE_STRIDE <= self.drawn_lines.len() {
            self.drawn_lines[start + 4] = color;
            self.maybe_render();
        }
    }

    /// Change one line's stroke width in place (`width_x10` = tenths of 2px).
    #[wasm_bindgen]
    pub fn set_line_width(&mut self, idx: usize, width_x10: i32) {
        let start = idx * LINE_STRIDE;
        if start + LINE_STRIDE <= self.drawn_lines.len() {
            self.drawn_lines[start + 5] = width_x10.max(1);
            self.maybe_render();
        }
    }

    /// Recolor a rect's fill (index 6 = transparent / no fill).
    #[wasm_bindgen]
    pub fn set_rect_fill(&mut self, idx: usize, color: i32) {
        let start = idx * RECT_STRIDE;
        if start + RECT_STRIDE <= self.drawn_rects.len() {
            self.drawn_rects[start + 4] = color;
            self.maybe_render();
        }
    }

    /// Recolor a rect's outline (index 6 = transparent / no outline).
    #[wasm_bindgen]
    pub fn set_rect_outline(&mut self, idx: usize, color: i32) {
        let start = idx * RECT_STRIDE;
        if start + RECT_STRIDE <= self.drawn_rects.len() {
            self.drawn_rects[start + 5] = color;
            self.maybe_render();
        }
    }

    /// Change one rect's outline stroke width in place (`width_x10` = tenths of 2px).
    #[wasm_bindgen]
    pub fn set_rect_line_width(&mut self, idx: usize, width_x10: i32) {
        let start = idx * RECT_STRIDE;
        if start + RECT_STRIDE <= self.drawn_rects.len() {
            self.drawn_rects[start + 6] = width_x10.max(1);
            self.maybe_render();
        }
    }

    /// Change one rect's outline stroke alignment in place (0 center, 1 inside, 2 outside).
    #[wasm_bindgen]
    pub fn set_rect_stroke_align(&mut self, idx: usize, align: i32) {
        let start = idx * RECT_STRIDE;
        if start + RECT_STRIDE <= self.drawn_rects.len() {
            self.drawn_rects[start + 7] = align.clamp(0, 2);
            self.maybe_render();
        }
    }
}
