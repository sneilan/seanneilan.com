use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement};

const GRID_SIZE: usize = 32;
const CELL_SIZE: f64 = 16.0;

fn color_for_idx(idx: u8) -> &'static str {
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
    ctx: CanvasRenderingContext2d,
    grid: [[bool; GRID_SIZE]; GRID_SIZE],
    grid_colors: [[u8; GRID_SIZE]; GRID_SIZE],
    draw_color: u8,
    empty_color: String,
    line_color: String,
    drawn_lines: Vec<u32>, // flat: [r1, c1, r2, c2, color_idx, ...]
    drawn_rects: Vec<u32>, // flat: [r1, c1, r2, c2, color_idx, ...]  (intersection indices)
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
            grid_colors: [[0; GRID_SIZE]; GRID_SIZE],
            draw_color: 0,
            empty_color: String::from("#ffffff"),
            line_color: String::from("#cccccc"),
            drawn_lines: Vec::new(),
            drawn_rects: Vec::new(),
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
        for row in 0..GRID_SIZE {
            for col in 0..GRID_SIZE {
                if self.grid[row][col] {
                    self.ctx.set_fill_style_str(color_for_idx(self.grid_colors[row][col]));
                    let x = (col as f64) * CELL_SIZE;
                    let y = (row as f64) * CELL_SIZE;
                    self.ctx.fill_rect(x, y, CELL_SIZE, CELL_SIZE);
                }
            }
        }

        // Draw grid lines
        self.ctx.set_line_width(1.0);

        for i in 0..=GRID_SIZE {
            let pos = (i as f64) * CELL_SIZE + 0.5;
            let color = if i % 10 == 0 { "#000000" } else { &self.line_color };
            self.ctx.set_stroke_style_str(color);

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

        // Draw committed rects
        let mut i = 0;
        while i + 4 < self.drawn_rects.len() {
            let r1 = self.drawn_rects[i]     as f64 * CELL_SIZE;
            let c1 = self.drawn_rects[i + 1] as f64 * CELL_SIZE;
            let r2 = self.drawn_rects[i + 2] as f64 * CELL_SIZE;
            let c2 = self.drawn_rects[i + 3] as f64 * CELL_SIZE;
            let color_idx = self.drawn_rects[i + 4] as u8;
            let x = c1.min(c2);
            let y = r1.min(r2);
            let w = (c1 - c2).abs();
            let h = (r1 - r2).abs();
            if color_idx == 6 {
                self.ctx.set_stroke_style_str("#333333");
                self.ctx.set_line_width(2.0);
                self.ctx.stroke_rect(x, y, w, h);
                self.ctx.set_line_width(1.0);
            } else {
                self.ctx.set_fill_style_str(color_for_idx(color_idx));
                self.ctx.fill_rect(x, y, w, h);
            }
            i += 5;
        }

        // Draw committed lines (stored as intersection indices: r1, c1, r2, c2, color_idx)
        let mut i = 0;
        while i + 4 < self.drawn_lines.len() {
            let r1 = self.drawn_lines[i] as f64 * CELL_SIZE;
            let c1 = self.drawn_lines[i + 1] as f64 * CELL_SIZE;
            let r2 = self.drawn_lines[i + 2] as f64 * CELL_SIZE;
            let c2 = self.drawn_lines[i + 3] as f64 * CELL_SIZE;
            let color_idx = self.drawn_lines[i + 4] as u8;
            self.ctx.set_stroke_style_str(color_for_idx(color_idx));
            self.ctx.set_line_width(2.0);
            self.ctx.begin_path();
            self.ctx.move_to(c1, r1);
            self.ctx.line_to(c2, r2);
            self.ctx.stroke();
            self.ctx.set_line_width(1.0);
            i += 5;
        }
    }

    #[wasm_bindgen]
    pub fn clear(&mut self) {
        self.grid = [[false; GRID_SIZE]; GRID_SIZE];
        self.grid_colors = [[0; GRID_SIZE]; GRID_SIZE];
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
        if row < GRID_SIZE && col < GRID_SIZE {
            self.grid[row][col]
        } else {
            false
        }
    }

    #[wasm_bindgen]
    pub fn set_cell(&mut self, row: usize, col: usize, value: bool) {
        if row < GRID_SIZE && col < GRID_SIZE {
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
    pub fn get_grid_size(&self) -> usize {
        GRID_SIZE
    }

    #[wasm_bindgen]
    pub fn get_cell_size(&self) -> f64 {
        CELL_SIZE
    }

    // r1,c1,r2,c2 are intersection indices (0..=GRID_SIZE), not cell indices
    #[wasm_bindgen]
    pub fn render_with_line(&self, r1: u32, c1: u32, r2: u32, c2: u32) {
        self.render();
        let x1 = c1 as f64 * CELL_SIZE;
        let y1 = r1 as f64 * CELL_SIZE;
        let x2 = c2 as f64 * CELL_SIZE;
        let y2 = r2 as f64 * CELL_SIZE;
        self.ctx.set_stroke_style_str("#4488ff");
        self.ctx.set_line_width(2.0);
        self.ctx.begin_path();
        self.ctx.move_to(x1, y1);
        self.ctx.line_to(x2, y2);
        self.ctx.stroke();
        self.ctx.set_line_width(1.0);
    }

    // Commits a line permanently; r1,c1,r2,c2 are intersection indices
    #[wasm_bindgen]
    pub fn draw_line(&mut self, r1: u32, c1: u32, r2: u32, c2: u32) {
        self.drawn_lines.extend_from_slice(&[r1, c1, r2, c2, self.draw_color as u32]);
        self.render();
    }

    #[wasm_bindgen]
    pub fn render_with_rect(&self, r1: u32, c1: u32, r2: u32, c2: u32) {
        self.render();
        let x = (c1 as f64).min(c2 as f64) * CELL_SIZE;
        let y = (r1 as f64).min(r2 as f64) * CELL_SIZE;
        let w = (c1 as f64 - c2 as f64).abs() * CELL_SIZE;
        let h = (r1 as f64 - r2 as f64).abs() * CELL_SIZE;
        self.ctx.set_stroke_style_str("#4488ff");
        self.ctx.set_line_width(2.0);
        self.ctx.stroke_rect(x, y, w, h);
        self.ctx.set_line_width(1.0);
    }

    #[wasm_bindgen]
    pub fn draw_rect(&mut self, r1: u32, c1: u32, r2: u32, c2: u32) {
        self.drawn_rects.extend_from_slice(&[r1, c1, r2, c2, self.draw_color as u32]);
        self.render();
    }
}
