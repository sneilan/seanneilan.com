use wasm_bindgen::prelude::*;
use crate::{GridCanvas, CELL_SIZE, CELL_UNITS, LINE_STRIDE, color_for_idx};

/// Sub-grid lines (½/¼/⅛ boundaries) are drawn fainter than the whole-cell grid.
const SUBLINE_COLOR: &str = "#e8e8e8";

// Everything draws through the camera: world-pixel coords are mapped to screen
// via self.sx()/self.sy() and scaled by self.cell_px(). Only the visible window
// is drawn (the grid is infinite), and grid lines + filled cells are culled to
// that window. Stroke widths and handles stay in screen pixels for crispness.
#[wasm_bindgen]
impl GridCanvas {
    /// Inclusive world-cell column range currently visible (with a 1-cell margin).
    fn visible_cols(&self) -> (i32, i32) {
        let c0 = (self.cam_x / CELL_SIZE).floor() as i32 - CELL_UNITS;
        let c1 = ((self.cam_x + self.view_w / self.zoom) / CELL_SIZE).ceil() as i32 + CELL_UNITS;
        (c0, c1)
    }
    fn visible_rows(&self) -> (i32, i32) {
        let r0 = (self.cam_y / CELL_SIZE).floor() as i32 - CELL_UNITS;
        let r1 = ((self.cam_y + self.view_h / self.zoom) / CELL_SIZE).ceil() as i32 + CELL_UNITS;
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

        // Filled cells (sparse; cull to the visible window). Each edge is
        // rounded to a whole pixel — a cell's right edge and its neighbour's
        // left edge round identically, so adjacent fine cells tile exactly.
        // Fractional edges antialias into hairline seams at fine-unit pitch,
        // which makes a solid 1× block look subdivided into ⅛ cells.
        for ((row, col), color) in &self.cells {
            if *col < c0 || *col > c1 || *row < r0 || *row > r1 {
                continue;
            }
            self.ctx.set_fill_style_str(color_for_idx(*color));
            let x0 = self.sx(*col as f64 * CELL_SIZE).round();
            let y0 = self.sy(*row as f64 * CELL_SIZE).round();
            let x1 = self.sx((*col + 1) as f64 * CELL_SIZE).round();
            let y1 = self.sy((*row + 1) as f64 * CELL_SIZE).round();
            self.ctx.fill_rect(x0, y0, x1 - x0, y1 - y0);
        }

        // Grid lines. Coordinates are fine units (CELL_UNITS per cell), so most
        // fine lines are NOT drawn: whole-cell lines every CELL_UNITS (every 10th
        // cell darker), plus sub-grid lines every `sub_step` when subdivided.
        // rem_euclid keeps the decade markers aligned across the origin.
        self.ctx.set_line_width(1.0);
        let sub_step = CELL_UNITS / self.subdivision.max(1); // fine units between sub-lines
        let decade = 10 * CELL_UNITS;
        // Classify a fine coordinate: Some(color) to draw a grid line, None to skip.
        let grid_color = |u: i32| -> Option<&str> {
            if u.rem_euclid(decade) == 0 {
                Some("#888888")
            } else if u.rem_euclid(CELL_UNITS) == 0 {
                Some(self.line_color.as_str())
            } else if self.subdivision > 1 && u.rem_euclid(sub_step) == 0 {
                Some(SUBLINE_COLOR)
            } else {
                None
            }
        };
        for col in c0..=c1 {
            let Some(color) = grid_color(col) else { continue };
            let x = self.sx(col as f64 * CELL_SIZE) + 0.5;
            self.ctx.set_stroke_style_str(color);
            self.ctx.begin_path();
            self.ctx.move_to(x, 0.0);
            self.ctx.line_to(x, self.view_h);
            self.ctx.stroke();
        }
        for row in r0..=r1 {
            let Some(color) = grid_color(row) else { continue };
            let y = self.sy(row as f64 * CELL_SIZE) + 0.5;
            self.ctx.set_stroke_style_str(color);
            self.ctx.begin_path();
            self.ctx.move_to(0.0, y);
            self.ctx.line_to(self.view_w, y);
            self.ctx.stroke();
        }

        // Committed images: bitmaps composited above the grid/cells but below
        // the vector shapes, so lines/rects/text draw over a reference image and
        // transparent PNG regions keep the grid visible behind them.
        self.render_images();

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

        // Committed lines. The +0.5 lands the stroke centered on the grid line
        // (drawn at `boundary + 0.5`) instead of a half-pixel to its left.
        let mut i = 0;
        while i + 5 < self.drawn_lines.len() {
            let x1 = self.sx(self.drawn_lines[i + 1] as f64 * CELL_SIZE) + 0.5;
            let y1 = self.sy(self.drawn_lines[i] as f64 * CELL_SIZE) + 0.5;
            let x2 = self.sx(self.drawn_lines[i + 3] as f64 * CELL_SIZE) + 0.5;
            let y2 = self.sy(self.drawn_lines[i + 2] as f64 * CELL_SIZE) + 0.5;
            let color_idx = self.drawn_lines[i + 4] as u8;
            self.ctx.set_stroke_style_str(color_for_idx(color_idx));
            self.ctx.set_line_width(crate::line_px(self.drawn_lines[i + 5]));
            self.ctx.begin_path();
            self.ctx.move_to(x1, y1);
            self.ctx.line_to(x2, y2);
            self.ctx.stroke();
            self.ctx.set_line_width(1.0);
            i += LINE_STRIDE;
        }

        // Committed texts (BigBlue Terminal), positioned inside their frame by
        // halign/valign. `measure_text_px` sets the unscaled font, so re-set the
        // zoomed font before drawing.
        self.ctx.set_text_baseline("alphabetic");
        for t in &self.drawn_texts {
            let (w, asc, desc) = self.measure_screen_metrics(&t.text, t.size);
            let (x, baseline) = t.glyph_origin(self, w, asc, desc);
            self.ctx.set_font(&crate::text_font(t.size * self.zoom));
            self.ctx.set_fill_style_str(color_for_idx(if t.color >= 6 { 0 } else { t.color }));
            let _ = self.ctx.fill_text(&t.text, x, baseline);
        }
    }

    #[wasm_bindgen]
    pub fn render_with_line(&self, r1: i32, c1: i32, r2: i32, c2: i32) {
        self.render();
        self.ctx.set_stroke_style_str("#4488ff");
        self.ctx.set_line_width(crate::line_px(self.line_width));
        self.ctx.begin_path();
        self.ctx.move_to(self.sx(c1 as f64 * CELL_SIZE) + 0.5, self.sy(r1 as f64 * CELL_SIZE) + 0.5);
        self.ctx.line_to(self.sx(c2 as f64 * CELL_SIZE) + 0.5, self.sy(r2 as f64 * CELL_SIZE) + 0.5);
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
        // Same pixel-snapped edges as render()'s cell loop, so a dragged block
        // of fine cells previews seamlessly too.
        let x0 = self.sx(col as f64 * CELL_SIZE).round();
        let y0 = self.sy(row as f64 * CELL_SIZE).round();
        let x1 = self.sx((col + 1) as f64 * CELL_SIZE).round();
        let y1 = self.sy((row + 1) as f64 * CELL_SIZE).round();
        self.ctx.set_global_alpha(0.7);
        self.ctx.set_fill_style_str(color_for_idx(color));
        self.ctx.fill_rect(x0, y0, x1 - x0, y1 - y0);
        self.ctx.set_global_alpha(1.0);
        self.ctx.set_stroke_style_str("#ff8800");
        self.ctx.set_line_width(2.0);
        self.ctx.stroke_rect(x0 + 1.0, y0 + 1.0, (x1 - x0) - 2.0, (y1 - y0) - 2.0);
        self.ctx.set_line_width(1.0);
    }

    /// Moving "ghosts" of a set of cells: translucent per-cell fills plus ONE
    /// merged orange outline around the set (only edges not shared within it),
    /// so a dragged 1x block previews as one square, not an 8x8 lattice.
    /// `cells` is flat [r, c, color, ...]. Does NOT clear.
    #[wasm_bindgen]
    pub fn preview_cells(&self, cells: &[i32]) {
        let set: std::collections::HashSet<(i32, i32)> =
            cells.chunks_exact(3).map(|p| (p[0], p[1])).collect();
        self.ctx.set_global_alpha(0.7);
        for p in cells.chunks_exact(3) {
            let x0 = self.sx(p[1] as f64 * CELL_SIZE).round();
            let y0 = self.sy(p[0] as f64 * CELL_SIZE).round();
            let x1 = self.sx((p[1] + 1) as f64 * CELL_SIZE).round();
            let y1 = self.sy((p[0] + 1) as f64 * CELL_SIZE).round();
            self.ctx.set_fill_style_str(color_for_idx(p[2] as u8));
            self.ctx.fill_rect(x0, y0, x1 - x0, y1 - y0);
        }
        self.ctx.set_global_alpha(1.0);
        self.ctx.set_stroke_style_str("#ff8800");
        self.ctx.set_line_width(2.0);
        self.ctx.begin_path();
        for &(r, c) in &set {
            let x0 = self.sx(c as f64 * CELL_SIZE).round();
            let y0 = self.sy(r as f64 * CELL_SIZE).round();
            let x1 = self.sx((c + 1) as f64 * CELL_SIZE).round();
            let y1 = self.sy((r + 1) as f64 * CELL_SIZE).round();
            if !set.contains(&(r - 1, c)) { self.ctx.move_to(x0, y0 + 1.0); self.ctx.line_to(x1, y0 + 1.0); }
            if !set.contains(&(r + 1, c)) { self.ctx.move_to(x0, y1 - 1.0); self.ctx.line_to(x1, y1 - 1.0); }
            if !set.contains(&(r, c - 1)) { self.ctx.move_to(x0 + 1.0, y0); self.ctx.line_to(x0 + 1.0, y1); }
            if !set.contains(&(r, c + 1)) { self.ctx.move_to(x1 - 1.0, y0); self.ctx.line_to(x1 - 1.0, y1); }
        }
        self.ctx.stroke();
        self.ctx.set_line_width(1.0);
    }

    /// Moving "ghost" of a line. Does NOT clear.
    #[wasm_bindgen]
    pub fn preview_line(&self, r1: i32, c1: i32, r2: i32, c2: i32, color: u8, width_x10: i32) {
        self.ctx.set_global_alpha(0.7);
        self.ctx.set_stroke_style_str(color_for_idx(color));
        self.ctx.set_line_width(crate::line_px(width_x10));
        self.ctx.begin_path();
        self.ctx.move_to(self.sx(c1 as f64 * CELL_SIZE) + 0.5, self.sy(r1 as f64 * CELL_SIZE) + 0.5);
        self.ctx.line_to(self.sx(c2 as f64 * CELL_SIZE) + 0.5, self.sy(r2 as f64 * CELL_SIZE) + 0.5);
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

    /// Highlight a set of selected fine cells as one merged region: stroke only
    /// the edges NOT shared with another cell in the set. A 1x square (8x8 fine
    /// cells) reads as one selected square, not an 8x8 lattice of tiny outlines.
    /// `cells` is flat [r, c, r, c, ...].
    #[wasm_bindgen]
    pub fn highlight_cells(&self, cells: &[i32]) {
        let set: std::collections::HashSet<(i32, i32)> =
            cells.chunks_exact(2).map(|p| (p[0], p[1])).collect();
        self.ctx.set_stroke_style_str("#ff8800");
        self.ctx.set_line_width(3.0);
        self.ctx.begin_path();
        for &(r, c) in &set {
            // Same pixel-snapped edges as render()'s cell loop, so the outline
            // hugs the fill exactly; each exposed edge is inset 1.5px inward so
            // the 3px stroke sits inside the region (like highlight_cell).
            let x0 = self.sx(c as f64 * CELL_SIZE).round();
            let y0 = self.sy(r as f64 * CELL_SIZE).round();
            let x1 = self.sx((c + 1) as f64 * CELL_SIZE).round();
            let y1 = self.sy((r + 1) as f64 * CELL_SIZE).round();
            if !set.contains(&(r - 1, c)) { self.ctx.move_to(x0, y0 + 1.5); self.ctx.line_to(x1, y0 + 1.5); }
            if !set.contains(&(r + 1, c)) { self.ctx.move_to(x0, y1 - 1.5); self.ctx.line_to(x1, y1 - 1.5); }
            if !set.contains(&(r, c - 1)) { self.ctx.move_to(x0 + 1.5, y0); self.ctx.line_to(x0 + 1.5, y1); }
            if !set.contains(&(r, c + 1)) { self.ctx.move_to(x1 - 1.5, y0); self.ctx.line_to(x1 - 1.5, y1); }
        }
        self.ctx.stroke();
        self.ctx.set_line_width(1.0);
    }

    #[wasm_bindgen]
    pub fn highlight_line(&self, idx: usize) {
        let start = idx * 5;
        if start + 5 <= self.drawn_lines.len() {
            self.ctx.set_stroke_style_str("#ff8800");
            self.ctx.set_line_width(5.0);
            self.ctx.begin_path();
            self.ctx.move_to(self.sx(self.drawn_lines[start + 1] as f64 * CELL_SIZE) + 0.5, self.sy(self.drawn_lines[start] as f64 * CELL_SIZE) + 0.5);
            self.ctx.line_to(self.sx(self.drawn_lines[start + 3] as f64 * CELL_SIZE) + 0.5, self.sy(self.drawn_lines[start + 2] as f64 * CELL_SIZE) + 0.5);
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
