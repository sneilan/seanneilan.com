use wasm_bindgen::prelude::*;
use crate::{GridCanvas, CELL_SIZE, color_for_idx};

// Everything draws through the camera: world-pixel coords are mapped to screen
// via self.sx()/self.sy() and scaled by self.cell_px(). Only the visible window
// is drawn (the grid is infinite), and grid lines + filled cells are culled to
// that window. Stroke widths and handles stay in screen pixels for crispness.
#[wasm_bindgen]
impl GridCanvas {
    /// Inclusive world-cell column range currently visible (with a 1-cell margin).
    fn visible_cols(&self) -> (i32, i32) {
        let c0 = (self.cam_x / CELL_SIZE).floor() as i32 - 1;
        let c1 = ((self.cam_x + self.view_w / self.zoom) / CELL_SIZE).ceil() as i32 + 1;
        (c0, c1)
    }
    fn visible_rows(&self) -> (i32, i32) {
        let r0 = (self.cam_y / CELL_SIZE).floor() as i32 - 1;
        let r1 = ((self.cam_y + self.view_h / self.zoom) / CELL_SIZE).ceil() as i32 + 1;
        (r0, r1)
    }

    #[wasm_bindgen]
    pub fn render(&self) {
        let (c0, c1) = self.visible_cols();
        let (r0, r1) = self.visible_rows();
        let cp = self.cell_px();

        // Clear viewport with the empty (background) color.
        self.ctx.set_fill_style_str(&self.empty_color);
        self.ctx.fill_rect(0.0, 0.0, self.view_w, self.view_h);

        // Filled cells (sparse; cull to the visible window).
        for ((row, col), color) in &self.cells {
            if *col < c0 || *col > c1 || *row < r0 || *row > r1 {
                continue;
            }
            self.ctx.set_fill_style_str(color_for_idx(*color));
            let x = self.sx(*col as f64 * CELL_SIZE);
            let y = self.sy(*row as f64 * CELL_SIZE);
            self.ctx.fill_rect(x, y, cp, cp);
        }

        // Grid lines across the visible window. Every 10th world line is darker;
        // rem_euclid keeps the decade markers aligned across the origin (negatives).
        self.ctx.set_line_width(1.0);
        for col in c0..=c1 {
            let x = self.sx(col as f64 * CELL_SIZE) + 0.5;
            let color = if col.rem_euclid(10) == 0 { "#888888" } else { &self.line_color };
            self.ctx.set_stroke_style_str(color);
            self.ctx.begin_path();
            self.ctx.move_to(x, 0.0);
            self.ctx.line_to(x, self.view_h);
            self.ctx.stroke();
        }
        for row in r0..=r1 {
            let y = self.sy(row as f64 * CELL_SIZE) + 0.5;
            let color = if row.rem_euclid(10) == 0 { "#888888" } else { &self.line_color };
            self.ctx.set_stroke_style_str(color);
            self.ctx.begin_path();
            self.ctx.move_to(0.0, y);
            self.ctx.line_to(self.view_w, y);
            self.ctx.stroke();
        }

        // Committed rects (independent fill + outline; index 6 = none).
        let mut i = 0;
        while i + 5 < self.drawn_rects.len() {
            let r1c = self.drawn_rects[i] as f64;
            let c1c = self.drawn_rects[i + 1] as f64;
            let r2c = self.drawn_rects[i + 2] as f64;
            let c2c = self.drawn_rects[i + 3] as f64;
            let fill = self.drawn_rects[i + 4];
            let outline = self.drawn_rects[i + 5];
            let x = self.sx(c1c.min(c2c) * CELL_SIZE);
            let y = self.sy(r1c.min(r2c) * CELL_SIZE);
            let w = (c1c - c2c).abs() * cp;
            let h = (r1c - r2c).abs() * cp;
            if fill != 6 {
                self.ctx.set_fill_style_str(color_for_idx(fill as u8));
                // Inset the fill by 1px on the top/left so it doesn't paint over the
                // grid line stroked at `boundary + 0.5`. The right/bottom edges already
                // stop a pixel short of their grid line, so this keeps all four visible.
                self.ctx.fill_rect(x + 1.0, y + 1.0, w - 1.0, h - 1.0);
            }
            if outline != 6 {
                self.ctx.set_stroke_style_str(color_for_idx(outline as u8));
                self.ctx.set_line_width(2.0);
                self.ctx.stroke_rect(x, y, w, h);
                self.ctx.set_line_width(1.0);
            }
            i += 6;
        }

        // Committed lines.
        let mut i = 0;
        while i + 4 < self.drawn_lines.len() {
            let x1 = self.sx(self.drawn_lines[i + 1] as f64 * CELL_SIZE);
            let y1 = self.sy(self.drawn_lines[i] as f64 * CELL_SIZE);
            let x2 = self.sx(self.drawn_lines[i + 3] as f64 * CELL_SIZE);
            let y2 = self.sy(self.drawn_lines[i + 2] as f64 * CELL_SIZE);
            let color_idx = self.drawn_lines[i + 4] as u8;
            self.ctx.set_stroke_style_str(color_for_idx(color_idx));
            self.ctx.set_line_width(2.0);
            self.ctx.begin_path();
            self.ctx.move_to(x1, y1);
            self.ctx.line_to(x2, y2);
            self.ctx.stroke();
            self.ctx.set_line_width(1.0);
            i += 5;
        }

        // Committed texts (BigBlue Terminal). Baseline sits on grid row `r`.
        self.ctx.set_text_baseline("alphabetic");
        for t in &self.drawn_texts {
            let x = self.sx(t.c as f64 * CELL_SIZE);
            let y = self.sy(t.r as f64 * CELL_SIZE);
            self.ctx.set_font(&crate::text_font(t.size * self.zoom));
            self.ctx.set_fill_style_str(color_for_idx(if t.color >= 6 { 0 } else { t.color }));
            let _ = self.ctx.fill_text(&t.text, x, y);
        }
    }

    #[wasm_bindgen]
    pub fn render_with_line(&self, r1: i32, c1: i32, r2: i32, c2: i32) {
        self.render();
        self.ctx.set_stroke_style_str("#4488ff");
        self.ctx.set_line_width(2.0);
        self.ctx.begin_path();
        self.ctx.move_to(self.sx(c1 as f64 * CELL_SIZE), self.sy(r1 as f64 * CELL_SIZE));
        self.ctx.line_to(self.sx(c2 as f64 * CELL_SIZE), self.sy(r2 as f64 * CELL_SIZE));
        self.ctx.stroke();
        self.ctx.set_line_width(1.0);
    }

    #[wasm_bindgen]
    pub fn render_with_rect(&self, r1: i32, c1: i32, r2: i32, c2: i32) {
        self.render();
        let x = self.sx((c1.min(c2)) as f64 * CELL_SIZE);
        let y = self.sy((r1.min(r2)) as f64 * CELL_SIZE);
        let w = (c1 - c2).abs() as f64 * self.cell_px();
        let h = (r1 - r2).abs() as f64 * self.cell_px();
        self.ctx.set_stroke_style_str("#4488ff");
        self.ctx.set_line_width(2.0);
        self.ctx.stroke_rect(x, y, w, h);
        self.ctx.set_line_width(1.0);
    }

    /// Moving "ghost" of a cell, in its color, with an orange selected outline.
    /// Does NOT clear the canvas, so callers render() once then layer previews.
    #[wasm_bindgen]
    pub fn preview_cell(&self, row: i32, col: i32, color: u8) {
        let cp = self.cell_px();
        let x = self.sx(col as f64 * CELL_SIZE);
        let y = self.sy(row as f64 * CELL_SIZE);
        self.ctx.set_global_alpha(0.7);
        self.ctx.set_fill_style_str(color_for_idx(color));
        self.ctx.fill_rect(x, y, cp, cp);
        self.ctx.set_global_alpha(1.0);
        self.ctx.set_stroke_style_str("#ff8800");
        self.ctx.set_line_width(2.0);
        self.ctx.stroke_rect(x + 1.0, y + 1.0, cp - 2.0, cp - 2.0);
        self.ctx.set_line_width(1.0);
    }

    /// Moving "ghost" of a line. Does NOT clear.
    #[wasm_bindgen]
    pub fn preview_line(&self, r1: i32, c1: i32, r2: i32, c2: i32, color: u8) {
        self.ctx.set_global_alpha(0.7);
        self.ctx.set_stroke_style_str(color_for_idx(color));
        self.ctx.set_line_width(2.0);
        self.ctx.begin_path();
        self.ctx.move_to(self.sx(c1 as f64 * CELL_SIZE), self.sy(r1 as f64 * CELL_SIZE));
        self.ctx.line_to(self.sx(c2 as f64 * CELL_SIZE), self.sy(r2 as f64 * CELL_SIZE));
        self.ctx.stroke();
        self.ctx.set_global_alpha(1.0);
        self.ctx.set_line_width(1.0);
    }

    /// Moving "ghost" of a rect. Does NOT clear.
    #[wasm_bindgen]
    pub fn preview_rect(&self, r1: i32, c1: i32, r2: i32, c2: i32, fill: u8, outline: u8) {
        let x = self.sx((c1.min(c2)) as f64 * CELL_SIZE);
        let y = self.sy((r1.min(r2)) as f64 * CELL_SIZE);
        let w = (c1 - c2).abs() as f64 * self.cell_px();
        let h = (r1 - r2).abs() as f64 * self.cell_px();
        self.ctx.set_global_alpha(0.7);
        if fill != 6 {
            self.ctx.set_fill_style_str(color_for_idx(fill));
            // Match render(): inset the fill so the grid lines stay visible.
            self.ctx.fill_rect(x + 1.0, y + 1.0, w - 1.0, h - 1.0);
        }
        if outline != 6 {
            self.ctx.set_stroke_style_str(color_for_idx(outline));
            self.ctx.set_line_width(2.0);
            self.ctx.stroke_rect(x, y, w, h);
        } else if fill == 6 {
            self.ctx.set_stroke_style_str("#888888");
            self.ctx.set_line_width(2.0);
            self.ctx.stroke_rect(x, y, w, h);
        }
        self.ctx.set_global_alpha(1.0);
        self.ctx.set_line_width(1.0);
    }

    #[wasm_bindgen]
    pub fn render_with_selection(&self, row: i32, col: i32) {
        self.render();
        if self.cells.contains_key(&(row, col)) {
            self.highlight_cell(row, col);
        }
    }

    #[wasm_bindgen]
    pub fn render_with_selection_box(&self, r1: i32, c1: i32, r2: i32, c2: i32) {
        self.render();
        let x = self.sx((c1.min(c2)) as f64 * CELL_SIZE);
        let y = self.sy((r1.min(r2)) as f64 * CELL_SIZE);
        let w = ((c1 - c2).abs() as f64 + 1.0) * self.cell_px();
        let h = ((r1 - r2).abs() as f64 + 1.0) * self.cell_px();
        self.ctx.set_stroke_style_str("#4488ff");
        self.ctx.set_line_width(2.0);
        self.ctx.stroke_rect(x, y, w, h);
        self.ctx.set_line_width(1.0);
    }

    #[wasm_bindgen]
    pub fn highlight_cell(&self, row: i32, col: i32) {
        let cp = self.cell_px();
        let x = self.sx(col as f64 * CELL_SIZE);
        let y = self.sy(row as f64 * CELL_SIZE);
        self.ctx.set_stroke_style_str("#ff8800");
        self.ctx.set_line_width(3.0);
        self.ctx.stroke_rect(x + 1.5, y + 1.5, cp - 3.0, cp - 3.0);
        self.ctx.set_line_width(1.0);
    }

    #[wasm_bindgen]
    pub fn highlight_line(&self, idx: usize) {
        let start = idx * 5;
        if start + 5 <= self.drawn_lines.len() {
            self.ctx.set_stroke_style_str("#ff8800");
            self.ctx.set_line_width(5.0);
            self.ctx.begin_path();
            self.ctx.move_to(self.sx(self.drawn_lines[start + 1] as f64 * CELL_SIZE), self.sy(self.drawn_lines[start] as f64 * CELL_SIZE));
            self.ctx.line_to(self.sx(self.drawn_lines[start + 3] as f64 * CELL_SIZE), self.sy(self.drawn_lines[start + 2] as f64 * CELL_SIZE));
            self.ctx.stroke();
            self.ctx.set_line_width(1.0);
        }
    }

    #[wasm_bindgen]
    pub fn highlight_rect(&self, idx: usize) {
        let start = idx * 6;
        if start + 6 <= self.drawn_rects.len() {
            let r1 = self.drawn_rects[start] as f64;
            let c1 = self.drawn_rects[start + 1] as f64;
            let r2 = self.drawn_rects[start + 2] as f64;
            let c2 = self.drawn_rects[start + 3] as f64;
            let x = self.sx(c1.min(c2) * CELL_SIZE);
            let y = self.sy(r1.min(r2) * CELL_SIZE);
            let w = (c1 - c2).abs() * self.cell_px();
            let h = (r1 - r2).abs() * self.cell_px();
            self.ctx.set_stroke_style_str("#ff8800");
            self.ctx.set_line_width(4.0);
            self.ctx.stroke_rect(x - 2.0, y - 2.0, w + 4.0, h + 4.0);
            self.ctx.set_line_width(1.0);
        }
    }

    #[wasm_bindgen]
    pub fn draw_selection_box(&self, r1: i32, c1: i32, r2: i32, c2: i32) {
        let x = self.sx((c1.min(c2)) as f64 * CELL_SIZE);
        let y = self.sy((r1.min(r2)) as f64 * CELL_SIZE);
        let w = (c1 - c2).abs() as f64 * self.cell_px();
        let h = (r1 - r2).abs() as f64 * self.cell_px();
        self.ctx.set_stroke_style_str("#ff8800");
        self.ctx.set_line_width(2.0);
        self.ctx.stroke_rect(x, y, w, h);
        self.ctx.set_line_width(1.0);
    }
}
