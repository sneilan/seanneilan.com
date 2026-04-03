use wasm_bindgen::prelude::*;
use crate::{GridCanvas, DATA_ZONE_SIZE};

#[wasm_bindgen]
impl GridCanvas {
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
