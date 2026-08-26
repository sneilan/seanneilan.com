// The edit-action layer: every mutation in the app is described as one of these
// plain data objects. A single executor (apply.ts) is the only code that calls
// the WASM mutators; everything else produces `Edit` data. Because each edit
// carries both its old and new values, the inverse is a pure data transform.

/** A line as stored in WASM: [r1, c1, r2, c2, color, width_x10]. `width` is in
 * tenths of the base 2px stroke (10 = 1×, 15 = 1.5×, …). */
export type LineData = { r1: number; c1: number; r2: number; c2: number; color: number; width: number };

/** A rect as stored in WASM: [r1, c1, r2, c2, fill, outline]. */
export type RectData = {
  r1: number; c1: number; r2: number; c2: number; fill: number; outline: number;
};

/** Just the geometry of a line (no color), for move/resize edits. */
export type LineGeom = { r1: number; c1: number; r2: number; c2: number };

/** Just the geometry of a rect (no colors), for move/resize edits. */
export type RectGeom = { r1: number; c1: number; r2: number; c2: number };

/** An image object as stored in WASM: a grid-snapped box + the URL its bitmap
 * is loaded from. Only the box + URL are ever persisted — the decoded
 * HtmlImageElement is re-created from the URL on apply (see lib/imageCache.ts),
 * which keeps this edit pure data and the undo history JSON-serializable. */
export type ImageData = { r1: number; c1: number; r2: number; c2: number; url: string };

/** Just the box geometry of an image, for move/resize edits. */
export type ImageGeom = { r1: number; c1: number; r2: number; c2: number };

/** A text shape: frame top-left (r, c) + size (fine units) in `box`, color,
 * size (cells), alignment, string. Coordinates are fine units. */
export type TextFrame = { r: number; c: number; boxW: number; boxH: number };
export type TextData = {
  r: number; c: number; color: number; size: number;
  boxW: number; boxH: number; halign: number; valign: number; text: string;
};

/** Full state of a single cell: whether it is filled, and its color index. */
export type CellState = { filled: boolean; color: number };

export type Edit =
  | { kind: 'setCell'; row: number; col: number; from: boolean; to: boolean }
  | { kind: 'setCellColor'; row: number; col: number; from: number; to: number }
  // Combined fill+color edit; the invertible primitive for placing/erasing/
  // moving colored cells (a bare set_cell can't restore a prior color).
  | { kind: 'setCellState'; row: number; col: number; from: CellState; to: CellState }
  | { kind: 'recolorLine'; idx: number; from: number; to: number }
  | { kind: 'resizeLine'; idx: number; from: number; to: number }
  | { kind: 'recolorRectFill'; idx: number; from: number; to: number }
  | { kind: 'recolorRectOutline'; idx: number; from: number; to: number }
  | { kind: 'moveLine'; idx: number; dRow: number; dCol: number }
  | { kind: 'moveRect'; idx: number; dRow: number; dCol: number }
  | { kind: 'setLineGeom'; idx: number; from: LineGeom; to: LineGeom }
  | { kind: 'setRectGeom'; idx: number; from: RectGeom; to: RectGeom }
  // idx = the position the shape occupies in the buffer after insertion / before deletion.
  | { kind: 'addLine'; idx: number; line: LineData }
  | { kind: 'addRect'; idx: number; rect: RectData }
  | { kind: 'deleteLine'; idx: number; line: LineData }
  | { kind: 'deleteRect'; idx: number; rect: RectData }
  | { kind: 'recolorText'; idx: number; from: number; to: number }
  | { kind: 'resizeText'; idx: number; from: number; to: number }
  | { kind: 'alignText'; idx: number; from: { halign: number; valign: number }; to: { halign: number; valign: number } }
  | { kind: 'setTextFrame'; idx: number; from: TextFrame; to: TextFrame }
  | { kind: 'moveText'; idx: number; dRow: number; dCol: number }
  | { kind: 'addText'; idx: number; text: TextData }
  | { kind: 'deleteText'; idx: number; text: TextData }
  | { kind: 'moveImage'; idx: number; dRow: number; dCol: number }
  | { kind: 'setImageGeom'; idx: number; from: ImageGeom; to: ImageGeom }
  | { kind: 'addImage'; idx: number; image: ImageData }
  | { kind: 'deleteImage'; idx: number; image: ImageData }
  // A group of edits that undo/redo as a single step (gestures, multi-select ops).
  | { kind: 'batch'; edits: Edit[] };
