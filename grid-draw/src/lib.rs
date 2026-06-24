use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement};

mod buffers;
mod cells;
mod rendering;
mod shapes;
mod texts;
mod import_export;

pub(crate) const CELL_SIZE: f64 = 16.0;
pub(crate) const DATA_ZONE_SIZE: usize = 10;

/// CSS font string for a text shape `size` cells tall. BigBlue Terminal is a
/// fixed-width oldschool terminal face loaded as a document @font-face (see
/// globals.css); the host must wait for it to load before the first text render.
/// A `size` of 1.0 makes the em box one grid cell tall (font px = size * CELL_SIZE).
pub(crate) fn text_font(size: f64) -> String {
    format!("{}px 'BigBlue Terminal', monospace", size * CELL_SIZE)
}

/// Flat-array strides for the shape buffers. These are the single source of
/// truth for the packing of `drawn_lines` / `drawn_rects`; every read/write
/// must derive offsets from them so a future field addition can't desync one
/// call site (which is exactly what caused the rect corruption bug).
pub(crate) const LINE_STRIDE: usize = 5; // [r1, c1, r2, c2, color]
pub(crate) const RECT_STRIDE: usize = 6; // [r1, c1, r2, c2, fill, outline]

/// Bump whenever the shape packing changes. Exposed to JS so the host can
/// detect a stale/mismatched WASM instance and reset rather than render
/// garbage from a half-migrated buffer.
pub const SCHEMA_VERSION: u32 = 3;

/// A text shape: a string anchored at grid-intersection coords (r, c), drawn
/// in the BigBlue Terminal font at `color`. Stored as a struct (not a flat u32
/// buffer like lines/rects) because it carries a String; the public WASM API
/// still mirrors the line/rect index-stable shape so undo/redo/select reuse the
/// same machinery.
#[derive(Clone)]
pub(crate) struct TextItem {
    /// Baseline grid-row: the text sits ON this grid line, rising upward.
    pub(crate) r: u32,
    pub(crate) c: u32,
    pub(crate) color: u8,
    /// Height in grid cells (1.0, 1.5, 2.0, ...); font px = size * CELL_SIZE.
    pub(crate) size: f64,
    pub(crate) text: String,
}

pub(crate) fn color_for_idx(idx: u8) -> &'static str {
    match idx {
        0 => "#000000",
        1 => "#ffffff",
        2 => "#cc3333",
        3 => "#ffcc00",
        4 => "#2266dd",
        5 => "#22aa22",
        _ => "#ffffff", // transparent → background color for lines
    }
}

#[wasm_bindgen]
pub struct GridCanvas {
    pub(crate) ctx: CanvasRenderingContext2d,
    pub(crate) canvas: HtmlCanvasElement,
    pub(crate) rows: usize,
    pub(crate) cols: usize,
    pub(crate) grid: Vec<Vec<bool>>,
    pub(crate) grid_colors: Vec<Vec<u8>>,
    pub(crate) draw_color: u8,
    pub(crate) outline_color: u8, // for new rects; index 6 = no outline
    pub(crate) empty_color: String,
    pub(crate) line_color: String,
    pub(crate) drawn_lines: Vec<u32>, // flat: [r1, c1, r2, c2, color_idx, ...]
    pub(crate) drawn_rects: Vec<u32>, // flat: [r1, c1, r2, c2, fill_idx, outline_idx, ...]
    pub(crate) drawn_texts: Vec<TextItem>,
}

#[wasm_bindgen]
impl GridCanvas {
    #[wasm_bindgen(constructor)]
    pub fn new(canvas_id: &str, rows: usize, cols: usize) -> Result<GridCanvas, JsValue> {
        let document = web_sys::window()
            .ok_or_else(|| JsValue::from_str("No window"))?
            .document()
            .ok_or_else(|| JsValue::from_str("No document"))?;

        let canvas = document
            .get_element_by_id(canvas_id)
            .ok_or_else(|| JsValue::from_str("Canvas not found"))?
            .dyn_into::<HtmlCanvasElement>()?;

        Self::from_canvas(canvas, rows, cols)
    }

    /// Create a GridCanvas from an existing canvas element (for shadow DOM contexts)
    pub fn from_canvas(canvas: HtmlCanvasElement, rows: usize, cols: usize) -> Result<GridCanvas, JsValue> {
        // Set canvas dimensions
        canvas.set_width((cols as f64 * CELL_SIZE) as u32);
        canvas.set_height((rows as f64 * CELL_SIZE) as u32);

        let ctx = canvas
            .get_context("2d")?
            .ok_or_else(|| JsValue::from_str("No 2d context"))?
            .dyn_into::<CanvasRenderingContext2d>()?;

        let grid = vec![vec![false; cols]; rows];
        let grid_colors = vec![vec![0u8; cols]; rows];

        let instance = GridCanvas {
            ctx,
            canvas,
            rows,
            cols,
            grid,
            grid_colors,
            draw_color: 0,
            outline_color: 6, // default: no outline
            empty_color: String::from("#ffffff"),
            line_color: String::from("#cccccc"),
            drawn_lines: Vec::new(),
            drawn_rects: Vec::new(),
            drawn_texts: Vec::new(),
        };

        instance.render();
        Ok(instance)
    }

    pub(crate) fn data_zone_start_row(&self) -> usize {
        self.rows.saturating_sub(DATA_ZONE_SIZE) / 2
    }

    pub(crate) fn data_zone_start_col(&self) -> usize {
        self.cols.saturating_sub(DATA_ZONE_SIZE) / 2
    }

    #[wasm_bindgen]
    pub fn resize(&mut self, rows: usize, cols: usize) {
        // Update canvas dimensions
        self.canvas.set_width((cols as f64 * CELL_SIZE) as u32);
        self.canvas.set_height((rows as f64 * CELL_SIZE) as u32);

        // Create new grid, preserving data where possible
        let mut new_grid = vec![vec![false; cols]; rows];
        let mut new_colors = vec![vec![0u8; cols]; rows];

        // Copy existing data that fits in new dimensions
        for r in 0..rows.min(self.rows) {
            for c in 0..cols.min(self.cols) {
                new_grid[r][c] = self.grid[r][c];
                new_colors[r][c] = self.grid_colors[r][c];
            }
        }

        self.rows = rows;
        self.cols = cols;
        self.grid = new_grid;
        self.grid_colors = new_colors;

        self.render();
    }
}
