//! Text shapes: strings drawn on the canvas in the BigBlue Terminal font. Each
//! text sits with its BASELINE on a grid line (row `r`) and rises upward by its
//! `size` (in cells). Coordinates are signed world cells (infinite canvas). The
//! public API mirrors the line/rect index-stable shape so the JS
//! undo/selection/drag layers reuse the same machinery. Selection/measurement
//! work in unzoomed WORLD units; only the draw helpers apply the camera + zoom.

use wasm_bindgen::prelude::*;
use crate::{GridCanvas, TextItem, CELL_SIZE, CELL_UNITS, WHOLE_PX, text_font, color_for_idx};

impl GridCanvas {
    /// Measured WORLD-pixel width of `text` at `size` (unzoomed). Sets the
    /// unscaled font first so the measurement matches the world geometry used by
    /// selection bounds; draw helpers multiply by zoom for the screen width.
    pub(crate) fn measure_text_px(&self, text: &str, size: f64) -> f64 {
        self.ctx.set_font(&text_font(size));
        self.ctx.measure_text(text).map(|m| m.width()).unwrap_or(0.0)
    }

    /// Screen-px `(width, ascent, descent)` for `text` at `size` cells and the
    /// current `zoom`. Sets the ZOOMED font, so all three are in screen pixels.
    /// Ascent/descent are the actual ink extents above/below the baseline; empty
    /// or metric-less text falls back to the font em (0.75 / 0.25 split).
    pub(crate) fn measure_screen_metrics(&self, text: &str, size: f64) -> (f64, f64, f64) {
        let font_px = size * self.whole_px();
        self.ctx.set_font(&text_font(size * self.zoom));
        match self.ctx.measure_text(text) {
            Ok(m) => {
                let asc = m.actual_bounding_box_ascent();
                let desc = m.actual_bounding_box_descent();
                // A blank line reports 0/0; keep the em so the caret has height.
                if asc + desc <= 0.0 {
                    (m.width(), font_px * 0.75, font_px * 0.25)
                } else {
                    (m.width(), asc, desc)
                }
            }
            Err(_) => (0.0, font_px * 0.75, font_px * 0.25),
        }
    }

    /// Width of a text in FINE units (rounded up, min 1) — for the JS
    /// selection-bounds math, which works in the same fine units as coordinates.
    pub(crate) fn text_width_cells(&self, text: &str, size: f64) -> u32 {
        ((self.measure_text_px(text, size) / CELL_SIZE).ceil() as u32).max(1)
    }

    /// Height of a text in FINE units (rounded up, min 1). `size` is in whole
    /// cells, so a fine-unit height is `size * CELL_UNITS`.
    pub(crate) fn text_height_cells(size: f64) -> u32 {
        ((size * CELL_UNITS as f64).ceil() as u32).max(1)
    }

    /// Auto-fit box for a text: the whole cells it touches, in fine units. Width
    /// rounds the measured px up to whole cells; height is `ceil(size)` cells.
    pub(crate) fn text_fit_box(&self, text: &str, size: f64) -> (i32, i32) {
        let w_cells = (self.measure_text_px(text, size) / WHOLE_PX).ceil().max(1.0) as i32;
        let h_cells = size.ceil().max(1.0) as i32;
        (w_cells * CELL_UNITS, h_cells * CELL_UNITS)
    }

    /// Resolve a box, auto-fitting either dimension that arrives ≤0 (so callers
    /// that don't know the measured text width can pass 0 to mean "fit").
    pub(crate) fn resolved_box(&self, text: &str, size: f64, box_w: i32, box_h: i32) -> (i32, i32) {
        let (fw, fh) = self.text_fit_box(text, size);
        (if box_w > 0 { box_w } else { fw }, if box_h > 0 { box_h } else { fh })
    }
}

#[wasm_bindgen]
impl GridCanvas {
    #[wasm_bindgen]
    pub fn get_text_count(&self) -> usize {
        self.drawn_texts.len()
    }

    /// Geometry of a text FRAME: [r, c, color, box_w, box_h, halign, valign].
    /// r/c are the box top-left (fine units); box_w/box_h its size (fine units).
    /// Empty if out of range.
    #[wasm_bindgen]
    pub fn get_text(&self, idx: usize) -> Vec<i32> {
        match self.drawn_texts.get(idx) {
            Some(t) => vec![
                t.r,
                t.c,
                t.color as i32,
                t.box_w,
                t.box_h,
                t.halign as i32,
                t.valign as i32,
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

    /// Append a text (for paste / direct add). `(r,c)` is the box top-left.
    #[wasm_bindgen]
    #[allow(clippy::too_many_arguments)]
    pub fn add_text(&mut self, r: i32, c: i32, color: u8, size: f64, box_w: i32, box_h: i32, halign: u8, valign: u8, text: &str) {
        let (bw, bh) = self.resolved_box(text, size, box_w, box_h);
        self.drawn_texts.push(TextItem { r, c, color, size, box_w: bw, box_h: bh, halign, valign, text: text.to_string() });
        self.maybe_render();
    }

    /// Insert a text at `idx`, shifting later texts up (index-stable inverse of
    /// delete_text). `idx` is clamped to the end, so inserting at the count appends.
    #[wasm_bindgen]
    #[allow(clippy::too_many_arguments)]
    pub fn insert_text(&mut self, idx: usize, r: i32, c: i32, color: u8, size: f64, box_w: i32, box_h: i32, halign: u8, valign: u8, text: &str) {
        let at = idx.min(self.drawn_texts.len());
        let (bw, bh) = self.resolved_box(text, size, box_w, box_h);
        self.drawn_texts.insert(at, TextItem { r, c, color, size, box_w: bw, box_h: bh, halign, valign, text: text.to_string() });
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

    /// Set a text's alignment (halign 0/1/2 = L/C/R, valign 0/1/2 = T/M/B).
    #[wasm_bindgen]
    pub fn set_text_align(&mut self, idx: usize, halign: u8, valign: u8) {
        if let Some(t) = self.drawn_texts.get_mut(idx) {
            t.halign = halign.min(2);
            t.valign = valign.min(2);
            self.maybe_render();
        }
    }

    /// Overwrite a text's frame in place (resize undo primitive). Box clamped ≥1.
    #[wasm_bindgen]
    pub fn set_text_frame(&mut self, idx: usize, r: i32, c: i32, box_w: i32, box_h: i32) {
        if let Some(t) = self.drawn_texts.get_mut(idx) {
            t.r = r;
            t.c = c;
            t.box_w = box_w.max(1);
            t.box_h = box_h.max(1);
            self.maybe_render();
        }
    }

    /// Live-resize a text frame by dragging one of 8 handles to (r, c), like a
    /// rect. Coords are fine units (the host snaps them to the sub-grid).
    #[wasm_bindgen]
    pub fn resize_text(&mut self, idx: usize, handle: u32, r: i32, c: i32) {
        let (tr, tc, tw, th) = match self.drawn_texts.get(idx) {
            Some(t) => (t.r, t.c, t.box_w, t.box_h),
            None => return,
        };
        let (r1, c1, r2, c2) = crate::buffers::resize_corners(tr, tc, tr + th, tc + tw, handle, r, c);
        let nr = r1.min(r2);
        let nc = c1.min(c2);
        let nh = (r1 - r2).abs().max(1);
        let nw = (c1 - c2).abs().max(1);
        if let Some(t) = self.drawn_texts.get_mut(idx) {
            t.r = nr;
            t.c = nc;
            t.box_w = nw;
            t.box_h = nh;
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

    /// Hit test: index of the text whose FRAME contains (x, y) WORLD px, or -1.
    /// Tests last-drawn first so the topmost text wins.
    #[wasm_bindgen]
    pub fn hit_test_text(&self, x: f64, y: f64) -> i32 {
        for idx in (0..self.drawn_texts.len()).rev() {
            let t = &self.drawn_texts[idx];
            let left = t.c as f64 * CELL_SIZE;
            let top = t.r as f64 * CELL_SIZE;
            let right = (t.c + t.box_w) as f64 * CELL_SIZE;
            let bottom = (t.r + t.box_h) as f64 * CELL_SIZE;
            if x >= left && x <= right && y >= top && y <= bottom {
                return idx as i32;
            }
        }
        -1
    }

    /// True if the text's FRAME overlaps the selection box (fine units).
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

        let t_min_r = t.r;
        let t_max_r = t.r + t.box_h;
        let t_min_c = t.c;
        let t_max_c = t.c + t.box_w;

        t_max_r >= min_br && t_min_r <= max_br && t_max_c >= min_bc && t_min_c <= max_bc
    }

    #[wasm_bindgen]
    pub fn highlight_text(&self, idx: usize) {
        if let Some(t) = self.drawn_texts.get(idx) {
            let x = self.sx(t.c as f64 * CELL_SIZE);
            let y = self.sy(t.r as f64 * CELL_SIZE);
            let w = t.box_w as f64 * self.cell_px();
            let h = t.box_h as f64 * self.cell_px();
            self.ctx.set_stroke_style_str("#ff8800");
            self.ctx.set_line_width(2.0);
            self.ctx.stroke_rect(x, y, w, h);
            self.ctx.set_line_width(1.0);
        }
    }

    /// Draw a moving "ghost" of a text frame. `(r,c)` is the box top-left.
    #[wasm_bindgen]
    #[allow(clippy::too_many_arguments)]
    pub fn preview_text(&self, r: i32, c: i32, color: u8, size: f64, box_w: i32, box_h: i32, halign: u8, valign: u8, text: &str) {
        let ghost = TextItem { r, c, color, size, box_w, box_h, halign, valign, text: text.to_string() };
        let (w, asc, desc) = self.measure_screen_metrics(text, size);
        let (x, baseline) = ghost.glyph_origin(self, w, asc, desc);
        self.ctx.set_global_alpha(0.7);
        self.ctx.set_font(&text_font(size * self.zoom));
        self.ctx.set_text_baseline("alphabetic");
        self.ctx.set_fill_style_str(color_for_idx(if color >= 6 { 0 } else { color }));
        let _ = self.ctx.fill_text(text, x, baseline);
        self.ctx.set_global_alpha(1.0);
    }

    /// Re-render then draw a live typing preview: box top-left at `(r,c)`, text
    /// left/top inside an auto-fit box, with a caret after the text.
    #[wasm_bindgen]
    pub fn render_text_preview(&self, r: i32, c: i32, color: u8, size: f64, text: &str) {
        self.maybe_render();
        let (w, asc, desc) = self.measure_screen_metrics(text, size);
        let (box_w, box_h) = self.text_fit_box(text, size);
        let ghost = TextItem { r, c, color, size, box_w, box_h, halign: 0, valign: 0, text: text.to_string() };
        let (x, baseline) = ghost.glyph_origin(self, w, asc, desc);
        self.ctx.set_font(&text_font(size * self.zoom));
        self.ctx.set_text_baseline("alphabetic");
        self.ctx.set_fill_style_str(color_for_idx(if color >= 6 { 0 } else { color }));
        let _ = self.ctx.fill_text(text, x, baseline);
        // Caret bar (em height) right after the text.
        self.ctx.set_stroke_style_str("#ff8800");
        self.ctx.set_line_width(1.5);
        self.ctx.begin_path();
        self.ctx.move_to(x + w + 1.0, baseline - size * self.whole_px());
        self.ctx.line_to(x + w + 1.0, baseline);
        self.ctx.stroke();
        self.ctx.set_line_width(1.0);
    }
}
