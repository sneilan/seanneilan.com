use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement};
use std::collections::HashMap;

mod buffers;
mod cells;
mod rendering;
mod shapes;
mod texts;

/// The coordinate model is measured in FINE UNITS: one whole visible cell spans
/// `CELL_UNITS` fine units, and each fine unit is `CELL_SIZE` world pixels. So a
/// whole cell is `WHOLE_PX` (= CELL_SIZE * CELL_UNITS = 16px) as before, but any
/// coordinate can now land on a sub-cell boundary (½, ¼, ⅛ of a cell) while
/// staying an integer. The subdivide feature just changes the snap step; nothing
/// stores floats. All shape/cell coordinates are integers in these fine units.
pub(crate) const CELL_UNITS: i32 = 8; // fine units per whole cell
pub(crate) const CELL_SIZE: f64 = 2.0; // world px per fine unit (16 / CELL_UNITS)
pub(crate) const WHOLE_PX: f64 = CELL_SIZE * CELL_UNITS as f64; // world px per whole cell (16)

/// CSS font string for a text shape `size` cells tall. BigBlue Terminal is a
/// fixed-width oldschool terminal face loaded as a document @font-face (see
/// globals.css); the host must wait for it to load before the first text render.
/// A `size` of 1.0 makes the em box one whole cell tall (font px = size * WHOLE_PX).
pub(crate) fn text_font(size: f64) -> String {
    format!("{}px 'BigBlue Terminal', monospace", size * WHOLE_PX)
}

/// Flat-array strides for the shape buffers. These are the single source of
/// truth for the packing of `drawn_lines` / `drawn_rects`; every read/write
/// must derive offsets from them so a future field addition can't desync one
/// call site (which is exactly what caused the rect corruption bug).
pub(crate) const LINE_STRIDE: usize = 6; // [r1, c1, r2, c2, color, width_x10]
pub(crate) const RECT_STRIDE: usize = 6; // [r1, c1, r2, c2, fill, outline]

/// Bump whenever the shape packing or coordinate model changes. Exposed to JS so
/// the host can detect a stale/mismatched WASM instance and reset rather than
/// render garbage. v4 = infinite canvas: sparse signed-coordinate cells and
/// `i32` shape buffers (negative world coordinates are now valid).
/// v5 = lines carry a per-line stroke width (`width_x10`, tenths of the base
/// 2px stroke): LINE_STRIDE grew from 5 to 6.
/// v6 = coordinates are in fine units (CELL_UNITS per cell) so shapes/cells can
/// snap to sub-cell (½/¼/⅛) positions; designs stamp `sub` for rescale on load.
/// v7 = text is a resizable frame: `(r,c)` is the box top-left (was baseline)
/// and it carries box_w/box_h + halign/valign.
pub const SCHEMA_VERSION: u32 = 7;

/// A text shape: a string anchored at grid-intersection coords (r, c), drawn
/// in the BigBlue Terminal font at `color`. Coordinates are signed world cells
/// (an infinite canvas: any cell may be negative). Stored as a struct (not a
/// flat buffer like lines/rects) because it carries a String; the public WASM
/// API still mirrors the line/rect index-stable shape so undo/redo/select reuse
/// the same machinery.
/// Text is framed by a resizable, grid-snapped bounding box. `(r, c)` is the
/// box TOP-LEFT in fine units; `box_w`/`box_h` are its size in fine units. The
/// glyph run (measured width × `size` cells tall) is positioned inside the box
/// by `halign` (0 left, 1 center, 2 right) and `valign` (0 top, 1 middle,
/// 2 bottom). A freshly typed text auto-fits its box; resizing gives alignment
/// room to work.
#[derive(Clone)]
pub(crate) struct TextItem {
    pub(crate) r: i32,      // box top row (fine units)
    pub(crate) c: i32,      // box left col (fine units)
    pub(crate) color: u8,
    /// Height in whole cells (1.0, 1.5, 2.0, ...); font px = size * WHOLE_PX.
    pub(crate) size: f64,
    pub(crate) box_w: i32,  // box width (fine units)
    pub(crate) box_h: i32,  // box height (fine units)
    pub(crate) halign: u8,  // 0 left, 1 center, 2 right
    pub(crate) valign: u8,  // 0 top, 1 middle, 2 bottom
    pub(crate) text: String,
}

impl TextItem {
    /// Screen-space glyph origin (left x, baseline y) inside the box, given the
    /// measured world-pixel text width and the canvas transform helpers.
    pub(crate) fn glyph_origin(&self, gc: &GridCanvas, text_w_px: f64) -> (f64, f64) {
        let box_left = gc.sx(self.c as f64 * CELL_SIZE);
        let box_top = gc.sy(self.r as f64 * CELL_SIZE);
        let box_w_px = self.box_w as f64 * gc.cell_px();
        let box_h_px = self.box_h as f64 * gc.cell_px();
        let block_h = self.size * gc.whole_px(); // text block height (screen px)
        let x_slack = box_w_px - text_w_px;
        let y_slack = box_h_px - block_h;
        // 1px inset on the flush edges so glyphs clear the box's grid line.
        let x = box_left + match self.halign {
            1 => x_slack / 2.0,
            2 => (x_slack - 1.0).max(0.0),
            _ => 1.0,
        };
        let baseline = box_top + block_h + match self.valign {
            1 => y_slack / 2.0,
            2 => y_slack,
            _ => 0.0,
        };
        (x, baseline)
    }
}

/// Screen-pixel stroke width for a line whose stored width is `width_x10`
/// (tenths of the base 2px stroke): 10 → 2px, 15 → 3px, 50 → 10px.
pub(crate) fn line_px(width_x10: i32) -> f64 {
    (width_x10.max(1) as f64 / 10.0) * 2.0
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
    /// When false, mutators skip their internal re-render (see maybe_render).
    /// Lets the host apply a whole batch of edits and paint once at the end —
    /// e.g. dragging many shapes is one render instead of one per shape.
    pub(crate) render_enabled: bool,
    /// Filled cells, sparse: (row, col) -> color index (0..=5). Absence = empty.
    /// Sparse + signed keys is what makes the canvas infinite in all directions.
    pub(crate) cells: HashMap<(i32, i32), u8>,
    pub(crate) draw_color: u8,
    pub(crate) outline_color: u8, // for new rects; index 6 = no outline
    /// Stroke width for NEW lines, in tenths of the base 2px stroke (10 = 1×,
    /// 15 = 1.5×, …). Per-line width lives in `drawn_lines[..+5]`; this is just
    /// the current pick applied when `draw_line` appends.
    pub(crate) line_width: i32,
    /// Grid subdivision level for display + snapping: 1 = whole cells only,
    /// 2 = halves, 4 = quarters, 8 = eighths. Only affects which sub-grid lines
    /// are drawn (the host owns snapping); coordinates are always fine units.
    pub(crate) subdivision: i32,
    pub(crate) empty_color: String,
    pub(crate) line_color: String,
    pub(crate) drawn_lines: Vec<i32>, // flat: [r1, c1, r2, c2, color_idx, width_x10, ...]
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
            render_enabled: true,
            cells: HashMap::new(),
            draw_color: 0,
            outline_color: 6, // default: no outline
            line_width: 10,   // default: 1× (2px)
            subdivision: 1,   // default: whole cells, no sub-grid
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
    /// On-screen size of one FINE unit at the current zoom (a filled cell is one
    /// fine unit; a whole cell is CELL_UNITS of these).
    pub(crate) fn cell_px(&self) -> f64 {
        CELL_SIZE * self.zoom
    }
    /// On-screen size of one WHOLE cell at the current zoom (for text scaling).
    pub(crate) fn whole_px(&self) -> f64 {
        WHOLE_PX * self.zoom
    }

    /// Render unless paused — mutators call this instead of render() directly so
    /// a batch can suppress intermediate paints.
    pub(crate) fn maybe_render(&self) {
        if self.render_enabled {
            self.render();
        }
    }

    /// Pause/resume the mutators' auto-render. Resuming paints once, so the host
    /// wraps a batch of edits in set_render_paused(true)…(false) for one repaint.
    #[wasm_bindgen]
    pub fn set_render_paused(&mut self, paused: bool) {
        self.render_enabled = !paused;
        if !paused {
            self.render();
        }
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
