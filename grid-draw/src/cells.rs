use wasm_bindgen::prelude::*;
use crate::{buffers, GridCanvas, CELL_SIZE, SQUARE_STRIDE};

// Atomic square records: one [r, c, color, size] record per drawn square, at
// the resolution it was drawn (size in fine units: 1x=8, ½=4, ¼=2, ⅛=1).
// Coordinates are signed fine units (the canvas is infinite). Records are
// index-stable like lines/rects — insert/delete shift later indices — and
// insertion order is z-order (later records draw and hit-test on top).
#[wasm_bindgen]
impl GridCanvas {
    #[wasm_bindgen]
    pub fn clear(&mut self) {
        self.squares.clear();
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

    /// Insert a square record at `idx` (clamped to count, so count appends),
    /// shifting later indices up — the index-stable inverse of delete_square,
    /// which is what lets undo restore a square at its original z-position.
    #[wasm_bindgen]
    pub fn insert_square(&mut self, idx: usize, r: i32, c: i32, color: u8, size: i32) {
        buffers::insert_record(&mut self.squares, SQUARE_STRIDE, idx, &[r, c, color as i32, size.max(1)]);
        self.maybe_render();
    }

    /// Append a square on top (z-order) and return its index.
    #[wasm_bindgen]
    pub fn add_square(&mut self, r: i32, c: i32, color: u8, size: i32) -> usize {
        let idx = self.squares.len() / SQUARE_STRIDE;
        self.insert_square(idx, r, c, color, size);
        idx
    }

    #[wasm_bindgen]
    pub fn delete_square(&mut self, idx: usize) {
        buffers::delete_record(&mut self.squares, SQUARE_STRIDE, idx);
        self.maybe_render();
    }

    /// One record as [r, c, color, size]; empty if out of range.
    #[wasm_bindgen]
    pub fn get_square(&self, idx: usize) -> Vec<i32> {
        let start = idx * SQUARE_STRIDE;
        if start + SQUARE_STRIDE <= self.squares.len() {
            self.squares[start..start + SQUARE_STRIDE].to_vec()
        } else {
            Vec::new()
        }
    }

    #[wasm_bindgen]
    pub fn get_square_count(&self) -> usize {
        self.squares.len() / SQUARE_STRIDE
    }

    /// All squares as a flat [r, c, color, size, ...] buffer in z-order.
    #[wasm_bindgen]
    pub fn get_squares(&self) -> Vec<i32> {
        self.squares.clone()
    }

    #[wasm_bindgen]
    pub fn set_square_color(&mut self, idx: usize, color: u8) {
        let start = idx * SQUARE_STRIDE;
        if color < 6 && start + SQUARE_STRIDE <= self.squares.len() {
            self.squares[start + 2] = color as i32;
            self.maybe_render();
        }
    }

    #[wasm_bindgen]
    pub fn move_square(&mut self, idx: usize, dr: i32, dc: i32) {
        let start = idx * SQUARE_STRIDE;
        if start + SQUARE_STRIDE <= self.squares.len() {
            self.squares[start] += dr;
            self.squares[start + 1] += dc;
            self.maybe_render();
        }
    }

    /// Index of the topmost square covering fine coordinate (row, col), or -1.
    #[wasm_bindgen]
    pub fn square_at(&self, row: i32, col: i32) -> i32 {
        buffers::topmost_square_at(&self.squares, row, col)
    }

    /// Indices of every square intersecting the inclusive fine-unit box —
    /// squares are atomic, so touching any part of one selects the whole square.
    #[wasm_bindgen]
    pub fn squares_in_box(&self, r1: i32, c1: i32, r2: i32, c2: i32) -> Vec<u32> {
        buffers::squares_in_box(&self.squares, r1, c1, r2, c2)
    }

    /// Coverage query: is this fine coordinate inside any square? (Used by the
    /// draw tool's paint/erase toggle and shape hit-test fallthrough.)
    #[wasm_bindgen]
    pub fn get_cell(&self, row: i32, col: i32) -> bool {
        self.square_at(row, col) >= 0
    }

    /// Color visible at a fine coordinate: the topmost covering square's.
    #[wasm_bindgen]
    pub fn get_cell_color(&self, row: i32, col: i32) -> u8 {
        let idx = self.square_at(row, col);
        if idx >= 0 {
            self.squares[idx as usize * SQUARE_STRIDE + 2] as u8
        } else {
            0
        }
    }

    #[wasm_bindgen]
    pub fn get_cell_size(&self) -> f64 {
        CELL_SIZE
    }
}
