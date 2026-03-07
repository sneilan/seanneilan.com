use wasm_bindgen::prelude::*;
use crate::{GridCanvas, CELL_SIZE};

#[wasm_bindgen]
impl GridCanvas {
    #[wasm_bindgen]
    pub fn handle_click(&mut self, x: f64, y: f64) {
        let col = (x / CELL_SIZE) as usize;
        let row = (y / CELL_SIZE) as usize;

        if col < self.cols && row < self.rows {
            self.grid[row][col] = !self.grid[row][col];
            self.render();
        }
    }

    #[wasm_bindgen]
    pub fn clear(&mut self) {
        self.grid = vec![vec![false; self.cols]; self.rows];
        self.grid_colors = vec![vec![0u8; self.cols]; self.rows];
        self.drawn_lines.clear();
        self.drawn_rects.clear();
        self.render();
    }

    #[wasm_bindgen]
    pub fn set_draw_color(&mut self, idx: u8) {
        self.draw_color = idx;
    }

    #[wasm_bindgen]
    pub fn get_cell(&self, row: usize, col: usize) -> bool {
        if row < self.rows && col < self.cols {
            self.grid[row][col]
        } else {
            false
        }
    }

    #[wasm_bindgen]
    pub fn get_cell_color(&self, row: usize, col: usize) -> u8 {
        if row < self.rows && col < self.cols && self.grid[row][col] {
            self.grid_colors[row][col]
        } else {
            0
        }
    }

    #[wasm_bindgen]
    pub fn set_cell(&mut self, row: usize, col: usize, value: bool) {
        if row < self.rows && col < self.cols {
            if value && self.draw_color < 6 {
                self.grid[row][col] = true;
                self.grid_colors[row][col] = self.draw_color;
            } else {
                self.grid[row][col] = false;
            }
            self.render();
        }
    }

    #[wasm_bindgen]
    pub fn get_rows(&self) -> usize {
        self.rows
    }

    #[wasm_bindgen]
    pub fn get_cols(&self) -> usize {
        self.cols
    }

    #[wasm_bindgen]
    pub fn get_cell_size(&self) -> f64 {
        CELL_SIZE
    }

    #[wasm_bindgen]
    pub fn move_cell(&mut self, from_row: usize, from_col: usize, to_row: usize, to_col: usize) {
        if from_row < self.rows && from_col < self.cols && to_row < self.rows && to_col < self.cols {
            if self.grid[from_row][from_col] {
                let color = self.grid_colors[from_row][from_col];
                self.grid[from_row][from_col] = false;
                self.grid[to_row][to_col] = true;
                self.grid_colors[to_row][to_col] = color;
                self.render();
            }
        }
    }

    #[wasm_bindgen]
    pub fn delete_cell(&mut self, row: usize, col: usize) {
        if row < self.rows && col < self.cols {
            self.grid[row][col] = false;
            self.render();
        }
    }
}
