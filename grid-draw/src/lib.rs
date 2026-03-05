use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement};

const CELL_SIZE: f64 = 16.0;
const DATA_ZONE_SIZE: usize = 10;

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
    canvas: HtmlCanvasElement,
    rows: usize,
    cols: usize,
    grid: Vec<Vec<bool>>,
    grid_colors: Vec<Vec<u8>>,
    draw_color: u8,
    empty_color: String,
    line_color: String,
    drawn_lines: Vec<u32>, // flat: [r1, c1, r2, c2, color_idx, ...]
    drawn_rects: Vec<u32>, // flat: [r1, c1, r2, c2, color_idx, ...]
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

    fn data_zone_start_row(&self) -> usize {
        self.rows.saturating_sub(DATA_ZONE_SIZE) / 2
    }

    fn data_zone_start_col(&self) -> usize {
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
    pub fn render(&self) {
        let canvas_width = (self.cols as f64) * CELL_SIZE;
        let canvas_height = (self.rows as f64) * CELL_SIZE;

        // Clear canvas with empty color
        self.ctx.set_fill_style_str(&self.empty_color);
        self.ctx.fill_rect(0.0, 0.0, canvas_width, canvas_height);

        // Draw filled cells first
        for row in 0..self.rows {
            for col in 0..self.cols {
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

        // Vertical lines
        for i in 0..=self.cols {
            let pos = (i as f64) * CELL_SIZE + 0.5;
            let is_tenth = i % 10 == 0;
            let color = if is_tenth { "#888888" } else { &self.line_color };
            self.ctx.set_stroke_style_str(color);
            self.ctx.begin_path();
            self.ctx.move_to(pos, 0.0);
            self.ctx.line_to(pos, canvas_height);
            self.ctx.stroke();
        }

        // Horizontal lines
        for i in 0..=self.rows {
            let pos = (i as f64) * CELL_SIZE + 0.5;
            let is_tenth = i % 10 == 0;
            let color = if is_tenth { "#888888" } else { &self.line_color };
            self.ctx.set_stroke_style_str(color);
            self.ctx.begin_path();
            self.ctx.move_to(0.0, pos);
            self.ctx.line_to(canvas_width, pos);
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

        // Draw committed lines
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

    #[wasm_bindgen]
    pub fn render_with_selection(&self, row: usize, col: usize) {
        self.render();
        if row < self.rows && col < self.cols && self.grid[row][col] {
            let x = (col as f64) * CELL_SIZE;
            let y = (row as f64) * CELL_SIZE;
            self.ctx.set_stroke_style_str("#ff8800");
            self.ctx.set_line_width(3.0);
            self.ctx.stroke_rect(x + 1.5, y + 1.5, CELL_SIZE - 3.0, CELL_SIZE - 3.0);
            self.ctx.set_line_width(1.0);
        }
    }

    #[wasm_bindgen]
    pub fn render_with_drag_preview(&self, sel_row: usize, sel_col: usize, preview_row: usize, preview_col: usize) {
        self.render();
        // Draw selection highlight on original cell
        if sel_row < self.rows && sel_col < self.cols && self.grid[sel_row][sel_col] {
            let x = (sel_col as f64) * CELL_SIZE;
            let y = (sel_row as f64) * CELL_SIZE;
            self.ctx.set_stroke_style_str("#ff8800");
            self.ctx.set_line_width(3.0);
            self.ctx.stroke_rect(x + 1.5, y + 1.5, CELL_SIZE - 3.0, CELL_SIZE - 3.0);
            self.ctx.set_line_width(1.0);
        }
        // Draw ghost preview at target position
        if preview_row < self.rows && preview_col < self.cols {
            let x = (preview_col as f64) * CELL_SIZE;
            let y = (preview_row as f64) * CELL_SIZE;
            self.ctx.set_global_alpha(0.5);
            self.ctx.set_fill_style_str(color_for_idx(self.grid_colors[sel_row][sel_col]));
            self.ctx.fill_rect(x, y, CELL_SIZE, CELL_SIZE);
            self.ctx.set_global_alpha(1.0);
            self.ctx.set_stroke_style_str("#4488ff");
            self.ctx.set_line_width(2.0);
            self.ctx.stroke_rect(x + 1.0, y + 1.0, CELL_SIZE - 2.0, CELL_SIZE - 2.0);
            self.ctx.set_line_width(1.0);
        }
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

    #[wasm_bindgen]
    pub fn render_with_selection_box(&self, r1: usize, c1: usize, r2: usize, c2: usize) {
        self.render();
        let x = (c1.min(c2) as f64) * CELL_SIZE;
        let y = (r1.min(r2) as f64) * CELL_SIZE;
        let w = ((c1 as i32 - c2 as i32).abs() as f64 + 1.0) * CELL_SIZE;
        let h = ((r1 as i32 - r2 as i32).abs() as f64 + 1.0) * CELL_SIZE;
        self.ctx.set_stroke_style_str("#4488ff");
        self.ctx.set_line_width(2.0);
        self.ctx.stroke_rect(x, y, w, h);
        self.ctx.set_line_width(1.0);
    }

    #[wasm_bindgen]
    pub fn highlight_cell(&self, row: usize, col: usize) {
        if row < self.rows && col < self.cols {
            let x = (col as f64) * CELL_SIZE;
            let y = (row as f64) * CELL_SIZE;
            self.ctx.set_stroke_style_str("#ff8800");
            self.ctx.set_line_width(3.0);
            self.ctx.stroke_rect(x + 1.5, y + 1.5, CELL_SIZE - 3.0, CELL_SIZE - 3.0);
            self.ctx.set_line_width(1.0);
        }
    }

    #[wasm_bindgen]
    pub fn draw_selection_box(&self, r1: usize, c1: usize, r2: usize, c2: usize) {
        let x = (c1.min(c2) as f64) * CELL_SIZE;
        let y = (r1.min(r2) as f64) * CELL_SIZE;
        let w = ((c1 as i32 - c2 as i32).abs() as f64) * CELL_SIZE;
        let h = ((r1 as i32 - r2 as i32).abs() as f64) * CELL_SIZE;
        self.ctx.set_stroke_style_str("#ff8800");
        self.ctx.set_line_width(2.0);
        self.ctx.stroke_rect(x, y, w, h);
        self.ctx.set_line_width(1.0);
    }

    #[wasm_bindgen]
    pub fn export_json(&self) -> String {
        let mut json = String::from("{\n");
        let dz_row_start = self.data_zone_start_row();
        let dz_col_start = self.data_zone_start_col();
        let dz_row_end = dz_row_start + DATA_ZONE_SIZE;
        let dz_col_end = dz_col_start + DATA_ZONE_SIZE;

        // Export filled cells (only within 10x10 data zone, coords relative to zone)
        json.push_str("  \"cells\": [\n");
        let mut first = true;
        for row in dz_row_start..dz_row_end.min(self.rows) {
            for col in dz_col_start..dz_col_end.min(self.cols) {
                if self.grid[row][col] {
                    if !first { json.push_str(",\n"); }
                    first = false;
                    let rel_row = row - dz_row_start;
                    let rel_col = col - dz_col_start;
                    json.push_str(&format!("    [{}, {}, {}]", rel_row, rel_col, self.grid_colors[row][col]));
                }
            }
        }
        json.push_str("\n  ],\n");

        // Export lines (only if both endpoints are within data zone, coords relative)
        json.push_str("  \"lines\": [\n");
        let mut i = 0;
        let mut first = true;
        while i + 4 < self.drawn_lines.len() {
            let r1 = self.drawn_lines[i] as usize;
            let c1 = self.drawn_lines[i + 1] as usize;
            let r2 = self.drawn_lines[i + 2] as usize;
            let c2 = self.drawn_lines[i + 3] as usize;
            if r1 >= dz_row_start && r1 <= dz_row_end &&
               r2 >= dz_row_start && r2 <= dz_row_end &&
               c1 >= dz_col_start && c1 <= dz_col_end &&
               c2 >= dz_col_start && c2 <= dz_col_end {
                if !first { json.push_str(",\n"); }
                first = false;
                json.push_str(&format!("    [{}, {}, {}, {}, {}]",
                    r1 - dz_row_start,
                    c1 - dz_col_start,
                    r2 - dz_row_start,
                    c2 - dz_col_start,
                    self.drawn_lines[i + 4]
                ));
            }
            i += 5;
        }
        json.push_str("\n  ],\n");

        // Export rects (only if fully within data zone, coords relative)
        json.push_str("  \"rects\": [\n");
        let mut i = 0;
        let mut first = true;
        while i + 4 < self.drawn_rects.len() {
            let r1 = self.drawn_rects[i] as usize;
            let c1 = self.drawn_rects[i + 1] as usize;
            let r2 = self.drawn_rects[i + 2] as usize;
            let c2 = self.drawn_rects[i + 3] as usize;
            if r1 >= dz_row_start && r1 <= dz_row_end &&
               r2 >= dz_row_start && r2 <= dz_row_end &&
               c1 >= dz_col_start && c1 <= dz_col_end &&
               c2 >= dz_col_start && c2 <= dz_col_end {
                if !first { json.push_str(",\n"); }
                first = false;
                json.push_str(&format!("    [{}, {}, {}, {}, {}]",
                    r1 - dz_row_start,
                    c1 - dz_col_start,
                    r2 - dz_row_start,
                    c2 - dz_col_start,
                    self.drawn_rects[i + 4]
                ));
            }
            i += 5;
        }
        json.push_str("\n  ]\n}");

        json
    }

    #[wasm_bindgen]
    pub fn export_pytorch_tensor(&self) -> String {
        let dz_row_start = self.data_zone_start_row();
        let dz_col_start = self.data_zone_start_col();
        let dz_row_end = (dz_row_start + DATA_ZONE_SIZE).min(self.rows);
        let dz_col_end = (dz_col_start + DATA_ZONE_SIZE).min(self.cols);

        let mut out = String::from("[\n");
        for row in dz_row_start..dz_row_end {
            out.push_str("  [");
            for col in dz_col_start..dz_col_end {
                let val = if self.grid[row][col] && self.grid_colors[row][col] == 0 { 1 } else { 0 };
                out.push_str(&format!("{}", val));
                if col < dz_col_end - 1 {
                    out.push_str(", ");
                }
            }
            out.push(']');
            if row < dz_row_end - 1 {
                out.push(',');
            }
            out.push('\n');
        }
        out.push(']');
        out
    }

    #[wasm_bindgen]
    pub fn get_data_zone_start_row(&self) -> usize {
        self.data_zone_start_row()
    }

    #[wasm_bindgen]
    pub fn get_data_zone_start_col(&self) -> usize {
        self.data_zone_start_col()
    }

    #[wasm_bindgen]
    pub fn get_data_zone_size(&self) -> usize {
        DATA_ZONE_SIZE
    }

    #[wasm_bindgen]
    pub fn import_json(&mut self, json_str: &str) -> Result<(), JsValue> {
        let dz_row_start = self.data_zone_start_row();
        let dz_col_start = self.data_zone_start_col();

        // Clear data zone first
        for r in dz_row_start..(dz_row_start + DATA_ZONE_SIZE).min(self.rows) {
            for c in dz_col_start..(dz_col_start + DATA_ZONE_SIZE).min(self.cols) {
                self.grid[r][c] = false;
                self.grid_colors[r][c] = 0;
            }
        }
        // Clear lines and rects that were in data zone
        self.drawn_lines.clear();
        self.drawn_rects.clear();

        // Parse JSON manually (simple parser for our known format)
        // Look for "cells": [...] array
        if let Some(cells_start) = json_str.find("\"cells\"") {
            if let Some(arr_start) = json_str[cells_start..].find('[') {
                let arr_start = cells_start + arr_start;
                if let Some(arr_end) = Self::find_matching_bracket(&json_str[arr_start..]) {
                    let cells_arr = &json_str[arr_start + 1..arr_start + arr_end];
                    self.parse_cells(cells_arr, dz_row_start, dz_col_start);
                }
            }
        }

        // Look for "lines": [...] array
        if let Some(lines_start) = json_str.find("\"lines\"") {
            if let Some(arr_start) = json_str[lines_start..].find('[') {
                let arr_start = lines_start + arr_start;
                if let Some(arr_end) = Self::find_matching_bracket(&json_str[arr_start..]) {
                    let lines_arr = &json_str[arr_start + 1..arr_start + arr_end];
                    self.parse_lines(lines_arr, dz_row_start, dz_col_start);
                }
            }
        }

        // Look for "rects": [...] array
        if let Some(rects_start) = json_str.find("\"rects\"") {
            if let Some(arr_start) = json_str[rects_start..].find('[') {
                let arr_start = rects_start + arr_start;
                if let Some(arr_end) = Self::find_matching_bracket(&json_str[arr_start..]) {
                    let rects_arr = &json_str[arr_start + 1..arr_start + arr_end];
                    self.parse_rects(rects_arr, dz_row_start, dz_col_start);
                }
            }
        }

        self.render();
        Ok(())
    }

    fn find_matching_bracket(s: &str) -> Option<usize> {
        let mut depth = 0;
        for (i, c) in s.chars().enumerate() {
            match c {
                '[' => depth += 1,
                ']' => {
                    depth -= 1;
                    if depth == 0 {
                        return Some(i);
                    }
                }
                _ => {}
            }
        }
        None
    }

    fn parse_cells(&mut self, arr: &str, dz_row: usize, dz_col: usize) {
        // Parse [[row, col, color], [row, col, color], ...]
        let mut in_tuple = false;
        let mut nums: Vec<usize> = Vec::new();
        let mut num_str = String::new();

        for c in arr.chars() {
            match c {
                '[' => {
                    in_tuple = true;
                    nums.clear();
                    num_str.clear();
                }
                ']' => {
                    if in_tuple {
                        if !num_str.is_empty() {
                            if let Ok(n) = num_str.trim().parse::<usize>() {
                                nums.push(n);
                            }
                        }
                        if nums.len() >= 2 {
                            let rel_row = nums[0];
                            let rel_col = nums[1];
                            let color = if nums.len() >= 3 { nums[2] as u8 } else { 0 };
                            let abs_row = dz_row + rel_row;
                            let abs_col = dz_col + rel_col;
                            if abs_row < self.rows && abs_col < self.cols && rel_row < DATA_ZONE_SIZE && rel_col < DATA_ZONE_SIZE {
                                self.grid[abs_row][abs_col] = true;
                                self.grid_colors[abs_row][abs_col] = color;
                            }
                        }
                        in_tuple = false;
                    }
                }
                ',' => {
                    if in_tuple && !num_str.is_empty() {
                        if let Ok(n) = num_str.trim().parse::<usize>() {
                            nums.push(n);
                        }
                        num_str.clear();
                    }
                }
                '0'..='9' => {
                    if in_tuple {
                        num_str.push(c);
                    }
                }
                _ => {}
            }
        }
    }

    fn parse_lines(&mut self, arr: &str, dz_row: usize, dz_col: usize) {
        // Parse [[r1, c1, r2, c2, color], ...]
        let mut in_tuple = false;
        let mut nums: Vec<u32> = Vec::new();
        let mut num_str = String::new();

        for c in arr.chars() {
            match c {
                '[' => {
                    in_tuple = true;
                    nums.clear();
                    num_str.clear();
                }
                ']' => {
                    if in_tuple {
                        if !num_str.is_empty() {
                            if let Ok(n) = num_str.trim().parse::<u32>() {
                                nums.push(n);
                            }
                        }
                        if nums.len() >= 5 {
                            let r1 = dz_row as u32 + nums[0];
                            let c1 = dz_col as u32 + nums[1];
                            let r2 = dz_row as u32 + nums[2];
                            let c2 = dz_col as u32 + nums[3];
                            let color = nums[4];
                            self.drawn_lines.extend_from_slice(&[r1, c1, r2, c2, color]);
                        }
                        in_tuple = false;
                    }
                }
                ',' => {
                    if in_tuple && !num_str.is_empty() {
                        if let Ok(n) = num_str.trim().parse::<u32>() {
                            nums.push(n);
                        }
                        num_str.clear();
                    }
                }
                '0'..='9' => {
                    if in_tuple {
                        num_str.push(c);
                    }
                }
                _ => {}
            }
        }
    }

    fn parse_rects(&mut self, arr: &str, dz_row: usize, dz_col: usize) {
        // Parse [[r1, c1, r2, c2, color], ...]
        let mut in_tuple = false;
        let mut nums: Vec<u32> = Vec::new();
        let mut num_str = String::new();

        for c in arr.chars() {
            match c {
                '[' => {
                    in_tuple = true;
                    nums.clear();
                    num_str.clear();
                }
                ']' => {
                    if in_tuple {
                        if !num_str.is_empty() {
                            if let Ok(n) = num_str.trim().parse::<u32>() {
                                nums.push(n);
                            }
                        }
                        if nums.len() >= 5 {
                            let r1 = dz_row as u32 + nums[0];
                            let c1 = dz_col as u32 + nums[1];
                            let r2 = dz_row as u32 + nums[2];
                            let c2 = dz_col as u32 + nums[3];
                            let color = nums[4];
                            self.drawn_rects.extend_from_slice(&[r1, c1, r2, c2, color]);
                        }
                        in_tuple = false;
                    }
                }
                ',' => {
                    if in_tuple && !num_str.is_empty() {
                        if let Ok(n) = num_str.trim().parse::<u32>() {
                            nums.push(n);
                        }
                        num_str.clear();
                    }
                }
                '0'..='9' => {
                    if in_tuple {
                        num_str.push(c);
                    }
                }
                _ => {}
            }
        }
    }

    #[wasm_bindgen]
    pub fn import_tensor(&mut self, tensor_str: &str) -> Result<(), JsValue> {
        let dz_row_start = self.data_zone_start_row();
        let dz_col_start = self.data_zone_start_col();

        // Clear data zone first
        for r in dz_row_start..(dz_row_start + DATA_ZONE_SIZE).min(self.rows) {
            for c in dz_col_start..(dz_col_start + DATA_ZONE_SIZE).min(self.cols) {
                self.grid[r][c] = false;
                self.grid_colors[r][c] = 0;
            }
        }
        self.drawn_lines.clear();
        self.drawn_rects.clear();

        // Parse 2D array format: [[...], [...], ...]
        // Handles: integers (1, 0), floats (1., 1.0, 0.5), booleans (true, false)
        let mut row_starts: Vec<usize> = Vec::new();
        let mut row_ends: Vec<usize> = Vec::new();
        let mut depth = 0;

        for (i, c) in tensor_str.chars().enumerate() {
            match c {
                '[' => {
                    depth += 1;
                    if depth == 2 {
                        row_starts.push(i);
                    }
                }
                ']' => {
                    if depth == 2 {
                        row_ends.push(i);
                    }
                    depth -= 1;
                }
                _ => {}
            }
        }

        // Parse each row
        for (row_idx, (start, end)) in row_starts.iter().zip(row_ends.iter()).enumerate() {
            if row_idx >= DATA_ZONE_SIZE {
                break;
            }
            let row_content = &tensor_str[*start + 1..*end];
            let values: Vec<&str> = row_content.split(',').collect();

            for (col_idx, val_str) in values.iter().enumerate() {
                if col_idx >= DATA_ZONE_SIZE {
                    break;
                }
                let trimmed = val_str.trim();
                let is_truthy = Self::parse_truthy(trimmed);
                if is_truthy {
                    let abs_row = dz_row_start + row_idx;
                    let abs_col = dz_col_start + col_idx;
                    if abs_row < self.rows && abs_col < self.cols {
                        self.grid[abs_row][abs_col] = true;
                        self.grid_colors[abs_row][abs_col] = 0; // Black for tensor import
                    }
                }
            }
        }

        self.render();
        Ok(())
    }

    fn parse_truthy(s: &str) -> bool {
        // Handle: true, false, 1, 0, 1., 1.0, 0., 0.0, etc.
        let lower = s.to_lowercase();
        if lower == "true" {
            return true;
        }
        if lower == "false" {
            return false;
        }
        // Try parsing as float (handles "1.", "1.0", "1", etc.)
        if let Ok(f) = s.parse::<f64>() {
            return f != 0.0;
        }
        false
    }
}
