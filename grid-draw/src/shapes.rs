use wasm_bindgen::prelude::*;
use crate::{GridCanvas, CELL_SIZE};

#[wasm_bindgen]
impl GridCanvas {
    #[wasm_bindgen]
    pub fn draw_line(&mut self, r1: u32, c1: u32, r2: u32, c2: u32) {
        self.drawn_lines.extend_from_slice(&[r1, c1, r2, c2, self.draw_color as u32]);
        self.render();
    }

    #[wasm_bindgen]
    pub fn draw_rect(&mut self, r1: u32, c1: u32, r2: u32, c2: u32) {
        self.drawn_rects.extend_from_slice(&[r1, c1, r2, c2, self.draw_color as u32]);
        self.render();
    }

    #[wasm_bindgen]
    pub fn get_line_count(&self) -> usize {
        self.drawn_lines.len() / 5
    }

    #[wasm_bindgen]
    pub fn get_rect_count(&self) -> usize {
        self.drawn_rects.len() / 5
    }

    #[wasm_bindgen]
    pub fn get_line(&self, idx: usize) -> Vec<u32> {
        let start = idx * 5;
        if start + 5 <= self.drawn_lines.len() {
            self.drawn_lines[start..start + 5].to_vec()
        } else {
            vec![]
        }
    }

    #[wasm_bindgen]
    pub fn get_rect(&self, idx: usize) -> Vec<u32> {
        let start = idx * 5;
        if start + 5 <= self.drawn_rects.len() {
            self.drawn_rects[start..start + 5].to_vec()
        } else {
            vec![]
        }
    }

    /// Hit test for lines. Returns the index of the line hit, or -1 if none.
    /// Tolerance is in pixels.
    #[wasm_bindgen]
    pub fn hit_test_line(&self, x: f64, y: f64, tolerance: f64) -> i32 {
        let mut i = 0;
        let mut idx = 0;
        while i + 4 < self.drawn_lines.len() {
            let r1 = self.drawn_lines[i] as f64 * CELL_SIZE;
            let c1 = self.drawn_lines[i + 1] as f64 * CELL_SIZE;
            let r2 = self.drawn_lines[i + 2] as f64 * CELL_SIZE;
            let c2 = self.drawn_lines[i + 3] as f64 * CELL_SIZE;

            // Distance from point (x, y) to line segment (c1, r1) -> (c2, r2)
            let dist = Self::point_to_segment_distance(x, y, c1, r1, c2, r2);
            if dist <= tolerance {
                return idx;
            }

            i += 5;
            idx += 1;
        }
        -1
    }

    /// Hit test for rectangles. Returns the index of the rect hit, or -1 if none.
    #[wasm_bindgen]
    pub fn hit_test_rect(&self, x: f64, y: f64) -> i32 {
        let mut i = 0;
        let mut idx = 0;
        while i + 4 < self.drawn_rects.len() {
            let r1 = self.drawn_rects[i] as f64 * CELL_SIZE;
            let c1 = self.drawn_rects[i + 1] as f64 * CELL_SIZE;
            let r2 = self.drawn_rects[i + 2] as f64 * CELL_SIZE;
            let c2 = self.drawn_rects[i + 3] as f64 * CELL_SIZE;
            let color_idx = self.drawn_rects[i + 4];

            let min_x = c1.min(c2);
            let max_x = c1.max(c2);
            let min_y = r1.min(r2);
            let max_y = r1.max(r2);

            // For filled rects (color_idx != 6), check if point is inside
            // For outline rects (color_idx == 6), check if point is on the edge
            if color_idx == 6 {
                // Outline rect - check proximity to edges
                let tolerance = 5.0;
                let on_left = x >= min_x - tolerance && x <= min_x + tolerance && y >= min_y && y <= max_y;
                let on_right = x >= max_x - tolerance && x <= max_x + tolerance && y >= min_y && y <= max_y;
                let on_top = y >= min_y - tolerance && y <= min_y + tolerance && x >= min_x && x <= max_x;
                let on_bottom = y >= max_y - tolerance && y <= max_y + tolerance && x >= min_x && x <= max_x;
                if on_left || on_right || on_top || on_bottom {
                    return idx;
                }
            } else {
                // Filled rect - check if inside
                if x >= min_x && x <= max_x && y >= min_y && y <= max_y {
                    return idx;
                }
            }

            i += 5;
            idx += 1;
        }
        -1
    }

    fn point_to_segment_distance(px: f64, py: f64, x1: f64, y1: f64, x2: f64, y2: f64) -> f64 {
        let dx = x2 - x1;
        let dy = y2 - y1;
        let len_sq = dx * dx + dy * dy;

        if len_sq == 0.0 {
            // Segment is a point
            let ddx = px - x1;
            let ddy = py - y1;
            return (ddx * ddx + ddy * ddy).sqrt();
        }

        // Project point onto line, clamped to segment
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
        let start = idx * 5;
        if start + 5 <= self.drawn_lines.len() {
            self.drawn_lines.drain(start..start + 5);
            self.render();
        }
    }

    #[wasm_bindgen]
    pub fn delete_rect(&mut self, idx: usize) {
        let start = idx * 5;
        if start + 5 <= self.drawn_rects.len() {
            self.drawn_rects.drain(start..start + 5);
            self.render();
        }
    }

    #[wasm_bindgen]
    pub fn move_line(&mut self, idx: usize, delta_row: i32, delta_col: i32) {
        let start = idx * 5;
        if start + 5 <= self.drawn_lines.len() {
            let r1 = self.drawn_lines[start] as i32 + delta_row;
            let c1 = self.drawn_lines[start + 1] as i32 + delta_col;
            let r2 = self.drawn_lines[start + 2] as i32 + delta_row;
            let c2 = self.drawn_lines[start + 3] as i32 + delta_col;

            if r1 >= 0 && c1 >= 0 && r2 >= 0 && c2 >= 0 {
                self.drawn_lines[start] = r1 as u32;
                self.drawn_lines[start + 1] = c1 as u32;
                self.drawn_lines[start + 2] = r2 as u32;
                self.drawn_lines[start + 3] = c2 as u32;
                self.render();
            }
        }
    }

    #[wasm_bindgen]
    pub fn move_rect(&mut self, idx: usize, delta_row: i32, delta_col: i32) {
        let start = idx * 5;
        if start + 5 <= self.drawn_rects.len() {
            let r1 = self.drawn_rects[start] as i32 + delta_row;
            let c1 = self.drawn_rects[start + 1] as i32 + delta_col;
            let r2 = self.drawn_rects[start + 2] as i32 + delta_row;
            let c2 = self.drawn_rects[start + 3] as i32 + delta_col;

            if r1 >= 0 && c1 >= 0 && r2 >= 0 && c2 >= 0 {
                self.drawn_rects[start] = r1 as u32;
                self.drawn_rects[start + 1] = c1 as u32;
                self.drawn_rects[start + 2] = r2 as u32;
                self.drawn_rects[start + 3] = c2 as u32;
                self.render();
            }
        }
    }

    /// Check if a line intersects a box (for box selection)
    #[wasm_bindgen]
    pub fn line_intersects_box(&self, line_idx: usize, box_r1: usize, box_c1: usize, box_r2: usize, box_c2: usize) -> bool {
        let start = line_idx * 5;
        if start + 5 > self.drawn_lines.len() {
            return false;
        }

        let lr1 = self.drawn_lines[start] as usize;
        let lc1 = self.drawn_lines[start + 1] as usize;
        let lr2 = self.drawn_lines[start + 2] as usize;
        let lc2 = self.drawn_lines[start + 3] as usize;

        let min_br = box_r1.min(box_r2);
        let max_br = box_r1.max(box_r2);
        let min_bc = box_c1.min(box_c2);
        let max_bc = box_c1.max(box_c2);

        // Check if either endpoint is in the box
        let p1_in = lr1 >= min_br && lr1 <= max_br && lc1 >= min_bc && lc1 <= max_bc;
        let p2_in = lr2 >= min_br && lr2 <= max_br && lc2 >= min_bc && lc2 <= max_bc;
        if p1_in || p2_in {
            return true;
        }

        // Check if line segment intersects box edges (simplified: check line's bounding box overlap)
        let line_min_r = lr1.min(lr2);
        let line_max_r = lr1.max(lr2);
        let line_min_c = lc1.min(lc2);
        let line_max_c = lc1.max(lc2);

        line_max_r >= min_br && line_min_r <= max_br && line_max_c >= min_bc && line_min_c <= max_bc
    }

    /// Check if a rect intersects a box (for box selection)
    #[wasm_bindgen]
    pub fn rect_intersects_box(&self, rect_idx: usize, box_r1: usize, box_c1: usize, box_r2: usize, box_c2: usize) -> bool {
        let start = rect_idx * 5;
        if start + 5 > self.drawn_rects.len() {
            return false;
        }

        let rr1 = self.drawn_rects[start] as usize;
        let rc1 = self.drawn_rects[start + 1] as usize;
        let rr2 = self.drawn_rects[start + 2] as usize;
        let rc2 = self.drawn_rects[start + 3] as usize;

        let min_br = box_r1.min(box_r2);
        let max_br = box_r1.max(box_r2);
        let min_bc = box_c1.min(box_c2);
        let max_bc = box_c1.max(box_c2);

        let rect_min_r = rr1.min(rr2);
        let rect_max_r = rr1.max(rr2);
        let rect_min_c = rc1.min(rc2);
        let rect_max_c = rc1.max(rc2);

        // Check bounding box overlap
        rect_max_r >= min_br && rect_min_r <= max_br && rect_max_c >= min_bc && rect_min_c <= max_bc
    }

    /// Add a line directly (for paste operations)
    #[wasm_bindgen]
    pub fn add_line(&mut self, r1: u32, c1: u32, r2: u32, c2: u32, color: u32) {
        self.drawn_lines.extend_from_slice(&[r1, c1, r2, c2, color]);
    }

    /// Add a rect directly (for paste operations)
    #[wasm_bindgen]
    pub fn add_rect(&mut self, r1: u32, c1: u32, r2: u32, c2: u32, color: u32) {
        self.drawn_rects.extend_from_slice(&[r1, c1, r2, c2, color]);
    }
}
