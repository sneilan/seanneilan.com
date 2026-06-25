use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement};
use std::collections::HashMap;

mod buffers;
mod cells;
mod rendering;
mod shapes;
mod texts;

pub(crate) const CELL_SIZE: f64 = 16.0;

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

/// Bump whenever the shape packing or coordinate model changes. Exposed to JS so
/// the host can detect a stale/mismatched WASM instance and reset rather than
/// render garbage. v4 = infinite canvas: sparse signed-coordinate cells and
/// `i32` shape buffers (negative world coordinates are now valid).
pub const SCHEMA_VERSION: u32 = 4;

/// A text shape: a string anchored at grid-intersection coords (r, c), drawn
/// in the BigBlue Terminal font at `color`. Coordinates are signed world cells
/// (an infinite canvas: any cell may be negative). Stored as a struct (not a
/// flat buffer like lines/rects) because it carries a String; the public WASM
/// API still mirrors the line/rect index-stable shape so undo/redo/select reuse
/// the same machinery.
#[derive(Clone)]
pub(crate) struct TextItem {
    /// Baseline grid-row: the text sits ON this grid line, rising upward.
    pub(crate) r: i32,
    pub(crate) c: i32,
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
    /// Canvas size in device-independent pixels (the visible viewport). The grid
    /// itself is unbounded; only this window is ever drawn.
    pub(crate) view_w: f64,
    pub(crate) view_h: f64,
    /// Camera: world-pixel coordinate shown at the canvas's top-left, and the
    /// zoom factor. screen = (world_px - cam) * zoom. Panning changes cam (and
    /// may go negative); scrolling changes zoom about the cursor.
    pub(crate) cam_x: f64,
    pub(crate) cam_y: f64,
    pub(crate) zoom: f64,
    /// Filled cells, sparse: (row, col) -> color index (0..=5). Absence = empty.
    /// Sparse + signed keys is what makes the canvas infinite in all directions.
    pub(crate) cells: HashMap<(i32, i32), u8>,
    pub(crate) draw_color: u8,
    pub(crate) outline_color: u8, // for new rects; index 6 = no outline
    pub(crate) empty_color: String,
    pub(crate) line_color: String,
    pub(crate) drawn_lines: Vec<i32>, // flat: [r1, c1, r2, c2, color_idx, ...]
    pub(crate) drawn_rects: Vec<i32>, // flat: [r1, c1, r2, c2, fill_idx, outline_idx, ...]
    pub(crate) drawn_texts: Vec<TextItem>,
}

#[wasm_bindgen]
impl GridCanvas {
    #[wasm_bindgen(constructor)]
    pub fn new(canvas_id: &str, view_w: f64, view_h: f64) -> Result<GridCanvas, JsValue> {
        let document = web_sys::window()
            .ok_or_else(|| JsValue::from_str("No window"))?
            .document()
            .ok_or_else(|| JsValue::from_str("No document"))?;

        let canvas = document
            .get_element_by_id(canvas_id)
            .ok_or_else(|| JsValue::from_str("Canvas not found"))?
            .dyn_into::<HtmlCanvasElement>()?;

        Self::from_canvas(canvas, view_w, view_h)
    }

    /// Create a GridCanvas from an existing canvas element (for shadow DOM
    /// contexts). `view_w`/`view_h` are the canvas's pixel dimensions (the
    /// visible viewport); the world is unbounded behind it.
    pub fn from_canvas(canvas: HtmlCanvasElement, view_w: f64, view_h: f64) -> Result<GridCanvas, JsValue> {
        canvas.set_width(view_w as u32);
        canvas.set_height(view_h as u32);

        let ctx = canvas
            .get_context("2d")?
            .ok_or_else(|| JsValue::from_str("No 2d context"))?
            .dyn_into::<CanvasRenderingContext2d>()?;

        let instance = GridCanvas {
            ctx,
            canvas,
            view_w,
            view_h,
            cam_x: 0.0,
            cam_y: 0.0,
            zoom: 1.0,
            cells: HashMap::new(),
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

    /// World-pixel → screen-pixel transforms (the only place the camera applies).
    pub(crate) fn sx(&self, world_x: f64) -> f64 {
        (world_x - self.cam_x) * self.zoom
    }
    pub(crate) fn sy(&self, world_y: f64) -> f64 {
        (world_y - self.cam_y) * self.zoom
    }
    /// On-screen size of one grid cell at the current zoom.
    pub(crate) fn cell_px(&self) -> f64 {
        CELL_SIZE * self.zoom
    }

    /// Resize the visible canvas (viewport) in pixels. Does not touch the world.
    #[wasm_bindgen]
    pub fn set_viewport(&mut self, view_w: f64, view_h: f64) {
        self.view_w = view_w;
        self.view_h = view_h;
        self.canvas.set_width(view_w as u32);
        self.canvas.set_height(view_h as u32);
        self.render();
    }

    /// Move/zoom the camera. `cam_x`/`cam_y` are the world-pixel coordinate at
    /// the canvas top-left; `zoom` is the scale factor. Set by the host on
    /// pan/scroll, then everything re-renders through the new transform.
    #[wasm_bindgen]
    pub fn set_camera(&mut self, cam_x: f64, cam_y: f64, zoom: f64) {
        self.cam_x = cam_x;
        self.cam_y = cam_y;
        self.zoom = zoom;
        self.render();
    }

    #[wasm_bindgen]
    pub fn get_cam_x(&self) -> f64 { self.cam_x }
    #[wasm_bindgen]
    pub fn get_cam_y(&self) -> f64 { self.cam_y }
    #[wasm_bindgen]
    pub fn get_zoom(&self) -> f64 { self.zoom }
}
