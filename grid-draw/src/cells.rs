use wasm_bindgen::prelude::*;
use crate::{GridCanvas, CELL_SIZE};

// Cell coordinates are signed world cells (the canvas is infinite). Storage is
// sparse: a cell exists in `self.cells` iff it is filled, mapping to its color
// index. There are no bounds — any (row, col) is valid, including negatives.
#[wasm_bindgen]
impl GridCanvas {
    #[wasm_bindgen]
    pub fn clear(&mut self) {
        self.cells.clear();
        self.drawn_lines.clear();
        self.drawn_rects.clear();
        self.drawn_texts.clear();
        self.drawn_images.clear();
        self.maybe_render();
    }

    #[wasm_bindgen]
    pub fn set_draw_color(&mut self, idx: u8) {
        self.draw_color = idx;
    }

    #[wasm_bindgen]
    pub fn set_outline_color(&mut self, idx: u8) {
        self.outline_color = idx;
    }

    /// Set the grid subdivision level (1, 2, 4, or 8). Controls which sub-grid
    /// lines are drawn; snapping to this step is the host's job.
    #[wasm_bindgen]
    pub fn set_subdivision(&mut self, level: i32) {
        self.subdivision = level.max(1);
        self.maybe_render();
    }

    #[wasm_bindgen]
    pub fn get_subdivision(&self) -> i32 {
        self.subdivision
    }

    /// Recolor an already-filled cell (for recoloring a selection).
    #[wasm_bindgen]
    pub fn set_cell_color(&mut self, row: i32, col: i32, color: u8) {
        if color < 6 && self.cells.contains_key(&(row, col)) {
            self.cells.insert((row, col), color);
            self.maybe_render();
        }
    }

    #[wasm_bindgen]
    pub fn get_cell(&self, row: i32, col: i32) -> bool {
        self.cells.contains_key(&(row, col))
    }

    #[wasm_bindgen]
    pub fn get_cell_color(&self, row: i32, col: i32) -> u8 {
        *self.cells.get(&(row, col)).unwrap_or(&0)
    }

    #[wasm_bindgen]
    pub fn set_cell(&mut self, row: i32, col: i32, value: bool) {
        if value && self.draw_color < 6 {
            self.cells.insert((row, col), self.draw_color);
        } else {
            self.cells.remove(&(row, col));
        }
        self.maybe_render();
    }

    #[wasm_bindgen]
    pub fn get_cell_size(&self) -> f64 {
        CELL_SIZE
    }

    /// Number of filled cells.
    #[wasm_bindgen]
    pub fn get_cell_count(&self) -> usize {
        self.cells.len()
    }

    /// All filled cells as a flat [row, col, color, ...] buffer (stride 3).
    /// Replaces the old "iterate every row×col" enumeration, which is impossible
    /// on an unbounded grid. Order is unspecified (sparse map); callers that need
    /// a stable order sort the result (serialization already does).
    #[wasm_bindgen]
    pub fn get_filled_cells(&self) -> Vec<i32> {
        let mut out = Vec::with_capacity(self.cells.len() * 3);
        for ((r, c), color) in &self.cells {
            out.push(*r);
            out.push(*c);
            out.push(*color as i32);
        }
        out
    }

    #[wasm_bindgen]
    pub fn move_cell(&mut self, from_row: i32, from_col: i32, to_row: i32, to_col: i32) {
        if let Some(color) = self.cells.remove(&(from_row, from_col)) {
            self.cells.insert((to_row, to_col), color);
            self.maybe_render();
        }
    }

    #[wasm_bindgen]
    pub fn delete_cell(&mut self, row: i32, col: i32) {
        if self.cells.remove(&(row, col)).is_some() {
            self.maybe_render();
        }
    }
}
