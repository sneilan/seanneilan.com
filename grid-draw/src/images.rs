//! Image objects: a bitmap (referenced by URL, decoded by the browser into an
//! `HtmlImageElement`) placed in a grid-snapped box. Mirrors the rect object
//! model — index-stable, 8-handle resize, move, box-select — so the JS
//! undo/selection/drag layers reuse the same machinery. The pixels live in the
//! browser element; only the box geometry + URL are ever serialized. Hit tests
//! take WORLD coordinates (the host converts screen→world before calling); only
//! the draw helpers apply the camera transform. Coordinates are fine units.

use wasm_bindgen::prelude::*;
use web_sys::HtmlImageElement;
use crate::{GridCanvas, ImageItem, CELL_SIZE};
use crate::buffers::resize_corners;

/// Normalize a box so (r1,c1) is the top-left (min) corner and (r2,c2) the
/// bottom-right (max), keeping at least 1 fine unit in each dimension so a
/// collapsed drag never yields a zero-area (invisible) image.
fn norm(r1: i32, c1: i32, r2: i32, c2: i32) -> (i32, i32, i32, i32) {
    let (min_r, max_r) = (r1.min(r2), r1.max(r2));
    let (min_c, max_c) = (c1.min(c2), c1.max(c2));
    (min_r, min_c, max_r.max(min_r + 1), max_c.max(min_c + 1))
}

impl GridCanvas {
    /// Paint one image box at `alpha`. No-op until the browser has decoded the
    /// bitmap (`natural_width == 0`), so a freshly added image simply appears
    /// once its onload fires a re-render (the host wires that up).
    fn draw_image_item(&self, r1: i32, c1: i32, r2: i32, c2: i32, img: &HtmlImageElement, alpha: f64) {
        if img.natural_width() == 0 {
            return;
        }
        let x = self.sx(c1.min(c2) as f64 * CELL_SIZE);
        let y = self.sy(r1.min(r2) as f64 * CELL_SIZE);
        let w = (c1 - c2).abs() as f64 * self.cell_px();
        let h = (r1 - r2).abs() as f64 * self.cell_px();
        if w <= 0.0 || h <= 0.0 {
            return;
        }
        if alpha != 1.0 {
            self.ctx.set_global_alpha(alpha);
        }
        let _ = self
            .ctx
            .draw_image_with_html_image_element_and_dw_and_dh(img, x, y, w, h);
        if alpha != 1.0 {
            self.ctx.set_global_alpha(1.0);
        }
    }

    /// Render all committed images. Called from `render()`; images sit above the
    /// grid/cells but below the vector shapes so lines/rects/text annotate over a
    /// reference image, and transparent PNG regions keep the grid visible.
    pub(crate) fn render_images(&self) {
        for im in &self.drawn_images {
            self.draw_image_item(im.r1, im.c1, im.r2, im.c2, &im.img, 1.0);
        }
    }
}

#[wasm_bindgen]
impl GridCanvas {
    #[wasm_bindgen]
    pub fn get_image_count(&self) -> usize {
        self.drawn_images.len()
    }

    /// Box geometry of an image: [r1, c1, r2, c2] (fine units, normalized).
    /// Empty if out of range.
    #[wasm_bindgen]
    pub fn get_image(&self, idx: usize) -> Vec<i32> {
        match self.drawn_images.get(idx) {
            Some(im) => vec![im.r1, im.c1, im.r2, im.c2],
            None => vec![],
        }
    }

    #[wasm_bindgen]
    pub fn get_image_url(&self, idx: usize) -> String {
        self.drawn_images
            .get(idx)
            .map(|im| im.url.clone())
            .unwrap_or_default()
    }

    /// Append an image (paste / direct add).
    #[wasm_bindgen]
    pub fn add_image(&mut self, r1: i32, c1: i32, r2: i32, c2: i32, url: &str, img: HtmlImageElement) {
        let (nr1, nc1, nr2, nc2) = norm(r1, c1, r2, c2);
        self.drawn_images.push(ImageItem {
            r1: nr1, c1: nc1, r2: nr2, c2: nc2,
            url: url.to_string(),
            img,
        });
        self.maybe_render();
    }

    /// Insert an image at `idx`, shifting later images up (the index-stable
    /// inverse of `delete_image`). `idx` is clamped to the end (append).
    #[wasm_bindgen]
    pub fn insert_image(&mut self, idx: usize, r1: i32, c1: i32, r2: i32, c2: i32, url: &str, img: HtmlImageElement) {
        let at = idx.min(self.drawn_images.len());
        let (nr1, nc1, nr2, nc2) = norm(r1, c1, r2, c2);
        self.drawn_images.insert(at, ImageItem {
            r1: nr1, c1: nc1, r2: nr2, c2: nc2,
            url: url.to_string(),
            img,
        });
        self.maybe_render();
    }

    #[wasm_bindgen]
    pub fn delete_image(&mut self, idx: usize) {
        if idx < self.drawn_images.len() {
            self.drawn_images.remove(idx);
            self.maybe_render();
        }
    }

    #[wasm_bindgen]
    pub fn move_image(&mut self, idx: usize, delta_row: i32, delta_col: i32) {
        if let Some(im) = self.drawn_images.get_mut(idx) {
            im.r1 += delta_row;
            im.r2 += delta_row;
            im.c1 += delta_col;
            im.c2 += delta_col;
            self.maybe_render();
        }
    }

    /// Overwrite an image's box in place (the inverse-friendly primitive behind
    /// move/resize edits). Re-normalized.
    #[wasm_bindgen]
    pub fn set_image_geom(&mut self, idx: usize, r1: i32, c1: i32, r2: i32, c2: i32) {
        if let Some(im) = self.drawn_images.get_mut(idx) {
            let (nr1, nc1, nr2, nc2) = norm(r1, c1, r2, c2);
            im.r1 = nr1;
            im.c1 = nc1;
            im.r2 = nr2;
            im.c2 = nc2;
            self.maybe_render();
        }
    }

    /// Live-resize an image box by dragging one of 8 handles to (r, c), keeping
    /// the opposite side(s) anchored. Handle indices match rects/text (0=TL,
    /// 1=top, 2=TR, 3=right, 4=BR, 5=bottom, 6=BL, 7=left).
    #[wasm_bindgen]
    pub fn resize_image(&mut self, idx: usize, handle: u32, r: i32, c: i32) {
        let (r1, c1, r2, c2) = match self.drawn_images.get(idx) {
            Some(im) => (im.r1, im.c1, im.r2, im.c2),
            None => return,
        };
        let (n1, m1, n2, m2) = resize_corners(r1, c1, r2, c2, handle, r, c);
        let (nr1, nc1, nr2, nc2) = norm(n1, m1, n2, m2);
        if let Some(im) = self.drawn_images.get_mut(idx) {
            im.r1 = nr1;
            im.c1 = nc1;
            im.r2 = nr2;
            im.c2 = nc2;
            self.maybe_render();
        }
    }

    /// Hit test: index of the image whose box contains (x, y) WORLD px, or -1.
    /// Tests last-drawn first so the topmost image wins.
    #[wasm_bindgen]
    pub fn hit_test_image(&self, x: f64, y: f64) -> i32 {
        for idx in (0..self.drawn_images.len()).rev() {
            let im = &self.drawn_images[idx];
            let min_x = im.c1.min(im.c2) as f64 * CELL_SIZE;
            let max_x = im.c1.max(im.c2) as f64 * CELL_SIZE;
            let min_y = im.r1.min(im.r2) as f64 * CELL_SIZE;
            let max_y = im.r1.max(im.r2) as f64 * CELL_SIZE;
            if x >= min_x && x <= max_x && y >= min_y && y <= max_y {
                return idx as i32;
            }
        }
        -1
    }

    /// True if the image's box overlaps the selection box (fine units).
    #[wasm_bindgen]
    pub fn image_intersects_box(&self, idx: usize, box_r1: i32, box_c1: i32, box_r2: i32, box_c2: i32) -> bool {
        let im = match self.drawn_images.get(idx) {
            Some(im) => im,
            None => return false,
        };
        let min_br = box_r1.min(box_r2);
        let max_br = box_r1.max(box_r2);
        let min_bc = box_c1.min(box_c2);
        let max_bc = box_c1.max(box_c2);

        let min_r = im.r1.min(im.r2);
        let max_r = im.r1.max(im.r2);
        let min_c = im.c1.min(im.c2);
        let max_c = im.c1.max(im.c2);

        max_r >= min_br && min_r <= max_br && max_c >= min_bc && min_c <= max_bc
    }

    #[wasm_bindgen]
    pub fn highlight_image(&self, idx: usize) {
        if let Some(im) = self.drawn_images.get(idx) {
            let x = self.sx(im.c1.min(im.c2) as f64 * CELL_SIZE);
            let y = self.sy(im.r1.min(im.r2) as f64 * CELL_SIZE);
            let w = (im.c1 - im.c2).abs() as f64 * self.cell_px();
            let h = (im.r1 - im.r2).abs() as f64 * self.cell_px();
            self.ctx.set_stroke_style_str("#ff8800");
            self.ctx.set_line_width(2.0);
            self.ctx.stroke_rect(x, y, w, h);
            self.ctx.set_line_width(1.0);
        }
    }

    /// Draw a moving "ghost" of an image box at (r1,c1)-(r2,c2). Does NOT clear;
    /// callers render() once then layer previews. Draws the bitmap semi-opaque
    /// with an orange outline so the drop target is legible.
    #[wasm_bindgen]
    pub fn preview_image(&self, r1: i32, c1: i32, r2: i32, c2: i32, img: &HtmlImageElement) {
        self.draw_image_item(r1, c1, r2, c2, img, 0.7);
        let x = self.sx(c1.min(c2) as f64 * CELL_SIZE);
        let y = self.sy(r1.min(r2) as f64 * CELL_SIZE);
        let w = (c1 - c2).abs() as f64 * self.cell_px();
        let h = (r1 - r2).abs() as f64 * self.cell_px();
        self.ctx.set_stroke_style_str("#ff8800");
        self.ctx.set_line_width(2.0);
        self.ctx.stroke_rect(x, y, w, h);
        self.ctx.set_line_width(1.0);
    }
}
