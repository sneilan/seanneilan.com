use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement};

const GRID_SIZE: usize = 32;
const CELL_SIZE: f64 = 16.0;

#[wasm_bindgen]
pub struct GridCanvas {
    ctx: CanvasRenderingContext2d,
    grid: [[bool; GRID_SIZE]; GRID_SIZE],
    fill_color: String,
    empty_color: String,
    line_color: String,
}

#[wasm_bindgen]
impl GridCanvas {
    #[wasm_bindgen(constructor)]
    pub fn new(canvas_id: &str) -> Result<GridCanvas, JsValue> {
        let document = web_sys::window()
            .ok_or_else(|| JsValue::from_str("No window"))?
            .document()
            .ok_or_else(|| JsValue::from_str("No document"))?;

        let canvas = document
            .get_element_by_id(canvas_id)
            .ok_or_else(|| JsValue::from_str("Canvas not found"))?
            .dyn_into::<HtmlCanvasElement>()?;

        let ctx = canvas
            .get_context("2d")?
            .ok_or_else(|| JsValue::from_str("No 2d context"))?
            .dyn_into::<CanvasRenderingContext2d>()?;

        let grid = [[false; GRID_SIZE]; GRID_SIZE];

        let instance = GridCanvas {
            ctx,
            grid,
            fill_color: String::from("#333333"),
            empty_color: String::from("#ffffff"),
            line_color: String::from("#cccccc"),
        };

        instance.render();
        Ok(instance)
    }

    #[wasm_bindgen]
    pub fn handle_click(&mut self, x: f64, y: f64) {
        let col = (x / CELL_SIZE) as usize;
        let row = (y / CELL_SIZE) as usize;

        if col < GRID_SIZE && row < GRID_SIZE {
            self.grid[row][col] = !self.grid[row][col];
            self.render();
        }
    }

    #[wasm_bindgen]
    pub fn render(&self) {
        let canvas_size = (GRID_SIZE as f64) * CELL_SIZE;

        // Clear canvas with empty color
        self.ctx.set_fill_style_str(&self.empty_color);
        self.ctx.fill_rect(0.0, 0.0, canvas_size, canvas_size);

        // Draw filled cells first
        self.ctx.set_fill_style_str(&self.fill_color);
        for row in 0..GRID_SIZE {
            for col in 0..GRID_SIZE {
                if self.grid[row][col] {
                    let x = (col as f64) * CELL_SIZE;
                    let y = (row as f64) * CELL_SIZE;
                    self.ctx.fill_rect(x, y, CELL_SIZE, CELL_SIZE);
                }
            }
        }

        // Draw grid lines
        self.ctx.set_stroke_style_str(&self.line_color);
        self.ctx.set_line_width(1.0);

        for i in 0..=GRID_SIZE {
            let pos = (i as f64) * CELL_SIZE;

            // Vertical line
            self.ctx.begin_path();
            self.ctx.move_to(pos, 0.0);
            self.ctx.line_to(pos, canvas_size);
            self.ctx.stroke();

            // Horizontal line
            self.ctx.begin_path();
            self.ctx.move_to(0.0, pos);
            self.ctx.line_to(canvas_size, pos);
            self.ctx.stroke();
        }
    }

    #[wasm_bindgen]
    pub fn clear(&mut self) {
        self.grid = [[false; GRID_SIZE]; GRID_SIZE];
        self.render();
    }

    #[wasm_bindgen]
    pub fn set_fill_color(&mut self, color: &str) {
        self.fill_color = color.to_string();
        self.render();
    }

    #[wasm_bindgen]
    pub fn get_cell(&self, row: usize, col: usize) -> bool {
        if row < GRID_SIZE && col < GRID_SIZE {
            self.grid[row][col]
        } else {
            false
        }
    }

    #[wasm_bindgen]
    pub fn set_cell(&mut self, row: usize, col: usize, value: bool) {
        if row < GRID_SIZE && col < GRID_SIZE {
            self.grid[row][col] = value;
            self.render();
        }
    }

    #[wasm_bindgen]
    pub fn get_grid_size(&self) -> usize {
        GRID_SIZE
    }

    #[wasm_bindgen]
    pub fn get_cell_size(&self) -> f64 {
        CELL_SIZE
    }
}
