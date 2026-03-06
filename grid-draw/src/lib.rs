use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement};

mod cells;
mod rendering;
mod shapes;
mod import_export;

pub(crate) const CELL_SIZE: f64 = 16.0;
pub(crate) const DATA_ZONE_SIZE: usize = 10;

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
    pub(crate) empty_color: String,
    pub(crate) line_color: String,
    pub(crate) drawn_lines: Vec<u32>, // flat: [r1, c1, r2, c2, color_idx, ...]
    pub(crate) drawn_rects: Vec<u32>, // flat: [r1, c1, r2, c2, color_idx, ...]
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
            empty_color: String::from("#ffffff"),
            line_color: String::from("#cccccc"),
            drawn_lines: Vec::new(),
            drawn_rects: Vec::new(),
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
