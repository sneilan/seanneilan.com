//! Text shapes: strings drawn on the canvas in the BigBlue Terminal font. Each
//! text sits with its BASELINE on a grid line (row `r`) and rises upward by its
//! `size` (in cells). Coordinates are signed world cells (infinite canvas). The
//! public API mirrors the line/rect index-stable shape so the JS
//! undo/selection/drag layers reuse the same machinery. Selection/measurement
//! work in unzoomed WORLD units; only the draw helpers apply the camera + zoom.

use wasm_bindgen::prelude::*;
use crate::{GridCanvas, TextItem, CELL_SIZE, text_font, color_for_idx};

impl GridCanvas {
    /// Measured WORLD-pixel width of `text` at `size` (unzoomed). Sets the
    /// unscaled font first so the measurement matches the world geometry used by
    /// selection bounds; draw helpers multiply by zoom for the screen width.
    pub(crate) fn measure_text_px(&self, text: &str, size: f64) -> f64 {
        self.ctx.set_font(&text_font(size));
        self.ctx.measure_text(text).map(|m| m.width()).unwrap_or(0.0)
    }

    /// Width of a text in whole grid cells (rounded up, min 1) — for the JS
    /// selection-bounds math which works in cell units.
    pub(crate) fn text_width_cells(&self, text: &str, size: f64) -> u32 {
        ((self.measure_text_px(text, size) / CELL_SIZE).ceil() as u32).max(1)
    }

    /// Height of a text in whole grid cells (rounded up, min 1).
    pub(crate) fn text_height_cells(size: f64) -> u32 {
        (size.ceil() as u32).max(1)
    }
}

#[wasm_bindgen]
impl GridCanvas {
    #[wasm_bindgen]
    pub fn get_text_count(&self) -> usize {
        self.drawn_texts.len()
    }

    /// Geometry + color of a text: [r_baseline, c, color, width_cells, height_cells].
    /// r/c are signed world cells; width/height are positive. Empty if out of range.
    #[wasm_bindgen]
    pub fn get_text(&self, idx: usize) -> Vec<i32> {
        match self.drawn_texts.get(idx) {
            Some(t) => vec![
                t.r,
                t.c,
                t.color as i32,
                self.text_width_cells(&t.text, t.size) as i32,
                Self::text_height_cells(t.size) as i32,
            ],
            None => vec![],
        }
    }

    #[wasm_bindgen]
    pub fn get_text_string(&self, idx: usize) -> String {
        self.drawn_texts.get(idx).map(|t| t.text.clone()).unwrap_or_default()
    }

    #[wasm_bindgen]
    pub fn get_text_size(&self, idx: usize) -> f64 {
        self.drawn_texts.get(idx).map(|t| t.size).unwrap_or(1.0)
    }

    /// Append a text (for paste / direct add). `r` is the baseline grid-row.
    #[wasm_bindgen]
    pub fn add_text(&mut self, r: i32, c: i32, color: u8, size: f64, text: &str) {
        self.drawn_texts.push(TextItem { r, c, color, size, text: text.to_string() });
        self.maybe_render();
    }

    /// Insert a text at `idx`, shifting later texts up (index-stable inverse of
    /// delete_text). `idx` is clamped to the end, so inserting at the count appends.
    #[wasm_bindgen]
    pub fn insert_text(&mut self, idx: usize, r: i32, c: i32, color: u8, size: f64, text: &str) {
        let at = idx.min(self.drawn_texts.len());
        self.drawn_texts.insert(at, TextItem { r, c, color, size, text: text.to_string() });
        self.maybe_render();
    }

    #[wasm_bindgen]
    pub fn delete_text(&mut self, idx: usize) {
        if idx < self.drawn_texts.len() {
            self.drawn_texts.remove(idx);
            self.maybe_render();
        }
    }

    #[wasm_bindgen]
    pub fn move_text(&mut self, idx: usize, delta_row: i32, delta_col: i32) {
        if let Some(t) = self.drawn_texts.get_mut(idx) {
            t.r += delta_row;
            t.c += delta_col;
            self.maybe_render();
        }
    }

    #[wasm_bindgen]
    pub fn set_text_color(&mut self, idx: usize, color: u8) {
        if let Some(t) = self.drawn_texts.get_mut(idx) {
            t.color = color;
            self.maybe_render();
        }
    }

    #[wasm_bindgen]
    pub fn set_text_size(&mut self, idx: usize, size: f64) {
        if let Some(t) = self.drawn_texts.get_mut(idx) {
            t.size = size;
            self.maybe_render();
        }
    }

    /// Overwrite a text's position in place (move undo primitive).
    #[wasm_bindgen]
    pub fn set_text_pos(&mut self, idx: usize, r: i32, c: i32) {
        if let Some(t) = self.drawn_texts.get_mut(idx) {
            t.r = r;
            t.c = c;
            self.maybe_render();
        }
    }

    /// Hit test: index of the text whose bounding box contains (x, y) WORLD px,
    /// or -1. Tests last-drawn first so the topmost text wins.
    #[wasm_bindgen]
    pub fn hit_test_text(&self, x: f64, y: f64) -> i32 {
        for idx in (0..self.drawn_texts.len()).rev() {
            let t = &self.drawn_texts[idx];
            let tx = t.c as f64 * CELL_SIZE;
            let baseline = t.r as f64 * CELL_SIZE;
            let w = self.measure_text_px(&t.text, t.size);
            let top = baseline - t.size * CELL_SIZE;
            let bottom = baseline + t.size * CELL_SIZE * 0.2; // descender slack
            if x >= tx && x <= tx + w && y >= top && y <= bottom {
                return idx as i32;
            }
        }
        -1
    }

    /// True if the text's bounding box overlaps the selection box (world cells).
    #[wasm_bindgen]
    pub fn text_intersects_box(&self, idx: usize, box_r1: i32, box_c1: i32, box_r2: i32, box_c2: i32) -> bool {
        let t = match self.drawn_texts.get(idx) {
            Some(t) => t,
            None => return false,
        };
        let min_br = box_r1.min(box_r2);
        let max_br = box_r1.max(box_r2);
        let min_bc = box_c1.min(box_c2);
        let max_bc = box_c1.max(box_c2);

        let h = Self::text_height_cells(t.size) as i32;
        let t_min_r = t.r - h;
        let t_max_r = t.r;
        let t_min_c = t.c;
        let t_max_c = t.c + self.text_width_cells(&t.text, t.size) as i32;

        t_max_r >= min_br && t_min_r <= max_br && t_max_c >= min_bc && t_min_c <= max_bc
    }

    #[wasm_bindgen]
    pub fn highlight_text(&self, idx: usize) {
        if let Some(t) = self.drawn_texts.get(idx) {
            let w = self.measure_text_px(&t.text, t.size) * self.zoom;
            let x = self.sx(t.c as f64 * CELL_SIZE);
            let baseline = self.sy(t.r as f64 * CELL_SIZE);
            let top = baseline - t.size * self.cell_px();
            let h = t.size * self.cell_px() * 1.2;
            self.ctx.set_stroke_style_str("#ff8800");
            self.ctx.set_line_width(2.0);
            self.ctx.stroke_rect(x - 1.0, top - 1.0, w + 2.0, h + 2.0);
            self.ctx.set_line_width(1.0);
        }
    }

    /// Draw a moving "ghost" of a text with baseline at row `r`. Does NOT clear.
    #[wasm_bindgen]
    pub fn preview_text(&self, r: i32, c: i32, color: u8, size: f64, text: &str) {
        let x = self.sx(c as f64 * CELL_SIZE);
        let y = self.sy(r as f64 * CELL_SIZE);
        self.ctx.set_global_alpha(0.7);
        self.ctx.set_font(&text_font(size * self.zoom));
        self.ctx.set_text_baseline("alphabetic");
        self.ctx.set_fill_style_str(color_for_idx(if color >= 6 { 0 } else { color }));
        let _ = self.ctx.fill_text(text, x, y);
        self.ctx.set_global_alpha(1.0);
    }

    /// Re-render then draw a live typing preview with baseline at row `r` and a
    /// caret after the text, so the in-progress text appears as you type.
    #[wasm_bindgen]
    pub fn render_text_preview(&self, r: i32, c: i32, color: u8, size: f64, text: &str) {
        self.maybe_render();
        // World-px width first (sets unscaled font), then scale to screen.
        let w = self.measure_text_px(text, size) * self.zoom;
        let x = self.sx(c as f64 * CELL_SIZE);
        let y = self.sy(r as f64 * CELL_SIZE);
        self.ctx.set_font(&text_font(size * self.zoom));
        self.ctx.set_text_baseline("alphabetic");
        self.ctx.set_fill_style_str(color_for_idx(if color >= 6 { 0 } else { color }));
        let _ = self.ctx.fill_text(text, x, y);
        // Caret bar (full text height) right after the text.
        self.ctx.set_stroke_style_str("#ff8800");
        self.ctx.set_line_width(1.5);
        self.ctx.begin_path();
        self.ctx.move_to(x + w + 1.0, y - size * self.cell_px());
        self.ctx.line_to(x + w + 1.0, y);
        self.ctx.stroke();
        self.ctx.set_line_width(1.0);
    }
}
