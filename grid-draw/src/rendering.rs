use wasm_bindgen::prelude::*;
use crate::{GridCanvas, CELL_SIZE, color_for_idx};

#[wasm_bindgen]
impl GridCanvas {
    #[wasm_bindgen]
    pub fn render(&self) {
        let canvas_width = (self.cols as f64) * CELL_SIZE;
        let canvas_height = (self.rows as f64) * CELL_SIZE;

        // Clear canvas with empty color
        self.ctx.set_fill_style_str(&self.empty_color);
        self.ctx.fill_rect(0.0, 0.0, canvas_width, canvas_height);

        // Draw filled cells first
        for row in 0..self.rows {
            for col in 0..self.cols {
                if self.grid[row][col] {
                    self.ctx.set_fill_style_str(color_for_idx(self.grid_colors[row][col]));
                    let x = (col as f64) * CELL_SIZE;
                    let y = (row as f64) * CELL_SIZE;
                    self.ctx.fill_rect(x, y, CELL_SIZE, CELL_SIZE);
                }
            }
        }

        // Draw grid lines
        self.ctx.set_line_width(1.0);

        // Vertical lines
        for i in 0..=self.cols {
            let pos = (i as f64) * CELL_SIZE + 0.5;
            let is_tenth = i % 10 == 0;
            let color = if is_tenth { "#888888" } else { &self.line_color };
            self.ctx.set_stroke_style_str(color);
            self.ctx.begin_path();
            self.ctx.move_to(pos, 0.0);
            self.ctx.line_to(pos, canvas_height);
            self.ctx.stroke();
        }

        // Horizontal lines
        for i in 0..=self.rows {
            let pos = (i as f64) * CELL_SIZE + 0.5;
            let is_tenth = i % 10 == 0;
            let color = if is_tenth { "#888888" } else { &self.line_color };
            self.ctx.set_stroke_style_str(color);
            self.ctx.begin_path();
            self.ctx.move_to(0.0, pos);
            self.ctx.line_to(canvas_width, pos);
            self.ctx.stroke();
        }

        // Draw committed rects
        let mut i = 0;
        while i + 4 < self.drawn_rects.len() {
            let r1 = self.drawn_rects[i]     as f64 * CELL_SIZE;
            let c1 = self.drawn_rects[i + 1] as f64 * CELL_SIZE;
            let r2 = self.drawn_rects[i + 2] as f64 * CELL_SIZE;
            let c2 = self.drawn_rects[i + 3] as f64 * CELL_SIZE;
            let color_idx = self.drawn_rects[i + 4] as u8;
            let x = c1.min(c2);
            let y = r1.min(r2);
            let w = (c1 - c2).abs();
            let h = (r1 - r2).abs();
            if color_idx == 6 {
                self.ctx.set_stroke_style_str("#333333");
                self.ctx.set_line_width(2.0);
                self.ctx.stroke_rect(x, y, w, h);
                self.ctx.set_line_width(1.0);
            } else {
                self.ctx.set_fill_style_str(color_for_idx(color_idx));
                self.ctx.fill_rect(x, y, w, h);
            }
            i += 5;
        }

        // Draw committed lines
        let mut i = 0;
        while i + 4 < self.drawn_lines.len() {
            let r1 = self.drawn_lines[i] as f64 * CELL_SIZE;
            let c1 = self.drawn_lines[i + 1] as f64 * CELL_SIZE;
            let r2 = self.drawn_lines[i + 2] as f64 * CELL_SIZE;
            let c2 = self.drawn_lines[i + 3] as f64 * CELL_SIZE;
            let color_idx = self.drawn_lines[i + 4] as u8;
            self.ctx.set_stroke_style_str(color_for_idx(color_idx));
            self.ctx.set_line_width(2.0);
            self.ctx.begin_path();
            self.ctx.move_to(c1, r1);
            self.ctx.line_to(c2, r2);
            self.ctx.stroke();
            self.ctx.set_line_width(1.0);
            i += 5;
        }
    }

    #[wasm_bindgen]
    pub fn render_with_line(&self, r1: u32, c1: u32, r2: u32, c2: u32) {
        self.render();
        let x1 = c1 as f64 * CELL_SIZE;
        let y1 = r1 as f64 * CELL_SIZE;
        let x2 = c2 as f64 * CELL_SIZE;
        let y2 = r2 as f64 * CELL_SIZE;
        self.ctx.set_stroke_style_str("#4488ff");
        self.ctx.set_line_width(2.0);
        self.ctx.begin_path();
        self.ctx.move_to(x1, y1);
        self.ctx.line_to(x2, y2);
        self.ctx.stroke();
        self.ctx.set_line_width(1.0);
    }

    #[wasm_bindgen]
    pub fn render_with_rect(&self, r1: u32, c1: u32, r2: u32, c2: u32) {
        self.render();
        let x = (c1 as f64).min(c2 as f64) * CELL_SIZE;
        let y = (r1 as f64).min(r2 as f64) * CELL_SIZE;
        let w = (c1 as f64 - c2 as f64).abs() * CELL_SIZE;
        let h = (r1 as f64 - r2 as f64).abs() * CELL_SIZE;
        self.ctx.set_stroke_style_str("#4488ff");
        self.ctx.set_line_width(2.0);
        self.ctx.stroke_rect(x, y, w, h);
        self.ctx.set_line_width(1.0);
    }

    #[wasm_bindgen]
    pub fn render_with_selection(&self, row: usize, col: usize) {
        self.render();
        if row < self.rows && col < self.cols && self.grid[row][col] {
            let x = (col as f64) * CELL_SIZE;
            let y = (row as f64) * CELL_SIZE;
            self.ctx.set_stroke_style_str("#ff8800");
            self.ctx.set_line_width(3.0);
            self.ctx.stroke_rect(x + 1.5, y + 1.5, CELL_SIZE - 3.0, CELL_SIZE - 3.0);
            self.ctx.set_line_width(1.0);
        }
    }

    #[wasm_bindgen]
    pub fn render_with_drag_preview(&self, sel_row: usize, sel_col: usize, preview_row: usize, preview_col: usize) {
        self.render();
        // Draw selection highlight on original cell
        if sel_row < self.rows && sel_col < self.cols && self.grid[sel_row][sel_col] {
            let x = (sel_col as f64) * CELL_SIZE;
            let y = (sel_row as f64) * CELL_SIZE;
            self.ctx.set_stroke_style_str("#ff8800");
            self.ctx.set_line_width(3.0);
            self.ctx.stroke_rect(x + 1.5, y + 1.5, CELL_SIZE - 3.0, CELL_SIZE - 3.0);
            self.ctx.set_line_width(1.0);
        }
        // Draw ghost preview at target position
        if preview_row < self.rows && preview_col < self.cols {
            let x = (preview_col as f64) * CELL_SIZE;
            let y = (preview_row as f64) * CELL_SIZE;
            self.ctx.set_global_alpha(0.5);
            self.ctx.set_fill_style_str(color_for_idx(self.grid_colors[sel_row][sel_col]));
            self.ctx.fill_rect(x, y, CELL_SIZE, CELL_SIZE);
            self.ctx.set_global_alpha(1.0);
            self.ctx.set_stroke_style_str("#4488ff");
            self.ctx.set_line_width(2.0);
            self.ctx.stroke_rect(x + 1.0, y + 1.0, CELL_SIZE - 2.0, CELL_SIZE - 2.0);
            self.ctx.set_line_width(1.0);
        }
    }

    #[wasm_bindgen]
    pub fn render_with_selection_box(&self, r1: usize, c1: usize, r2: usize, c2: usize) {
        self.render();
        let x = (c1.min(c2) as f64) * CELL_SIZE;
        let y = (r1.min(r2) as f64) * CELL_SIZE;
        let w = ((c1 as i32 - c2 as i32).abs() as f64 + 1.0) * CELL_SIZE;
        let h = ((r1 as i32 - r2 as i32).abs() as f64 + 1.0) * CELL_SIZE;
        self.ctx.set_stroke_style_str("#4488ff");
        self.ctx.set_line_width(2.0);
        self.ctx.stroke_rect(x, y, w, h);
        self.ctx.set_line_width(1.0);
    }

    #[wasm_bindgen]
    pub fn highlight_cell(&self, row: usize, col: usize) {
        if row < self.rows && col < self.cols {
            let x = (col as f64) * CELL_SIZE;
            let y = (row as f64) * CELL_SIZE;
            self.ctx.set_stroke_style_str("#ff8800");
            self.ctx.set_line_width(3.0);
            self.ctx.stroke_rect(x + 1.5, y + 1.5, CELL_SIZE - 3.0, CELL_SIZE - 3.0);
            self.ctx.set_line_width(1.0);
        }
    }

    #[wasm_bindgen]
    pub fn highlight_line(&self, idx: usize) {
        let start = idx * 5;
        if start + 5 <= self.drawn_lines.len() {
            let r1 = self.drawn_lines[start] as f64 * CELL_SIZE;
            let c1 = self.drawn_lines[start + 1] as f64 * CELL_SIZE;
            let r2 = self.drawn_lines[start + 2] as f64 * CELL_SIZE;
            let c2 = self.drawn_lines[start + 3] as f64 * CELL_SIZE;

            // Draw highlight
            self.ctx.set_stroke_style_str("#ff8800");
            self.ctx.set_line_width(5.0);
            self.ctx.begin_path();
            self.ctx.move_to(c1, r1);
            self.ctx.line_to(c2, r2);
            self.ctx.stroke();
            self.ctx.set_line_width(1.0);
        }
    }

    #[wasm_bindgen]
    pub fn highlight_rect(&self, idx: usize) {
        let start = idx * 5;
        if start + 5 <= self.drawn_rects.len() {
            let r1 = self.drawn_rects[start] as f64 * CELL_SIZE;
            let c1 = self.drawn_rects[start + 1] as f64 * CELL_SIZE;
            let r2 = self.drawn_rects[start + 2] as f64 * CELL_SIZE;
            let c2 = self.drawn_rects[start + 3] as f64 * CELL_SIZE;

            let x = c1.min(c2);
            let y = r1.min(r2);
            let w = (c1 - c2).abs();
            let h = (r1 - r2).abs();

            // Draw highlight
            self.ctx.set_stroke_style_str("#ff8800");
            self.ctx.set_line_width(4.0);
            self.ctx.stroke_rect(x - 2.0, y - 2.0, w + 4.0, h + 4.0);
            self.ctx.set_line_width(1.0);
        }
    }

    #[wasm_bindgen]
    pub fn draw_selection_box(&self, r1: usize, c1: usize, r2: usize, c2: usize) {
        let x = (c1.min(c2) as f64) * CELL_SIZE;
        let y = (r1.min(r2) as f64) * CELL_SIZE;
        let w = ((c1 as i32 - c2 as i32).abs() as f64) * CELL_SIZE;
        let h = ((r1 as i32 - r2 as i32).abs() as f64) * CELL_SIZE;
        self.ctx.set_stroke_style_str("#ff8800");
        self.ctx.set_line_width(2.0);
        self.ctx.stroke_rect(x, y, w, h);
        self.ctx.set_line_width(1.0);
    }
}
