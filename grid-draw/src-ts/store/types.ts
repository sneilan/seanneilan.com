import type { GridCanvasWasm } from '../types/grid';
import type { Cell } from '../utils/selection';
import type { Edit, LineGeom, RectGeom, TextData, TextFrame, ImageGeom } from './edits/types';

/** Discrete text-size presets, in grid cells tall. */
export const TEXT_SIZES = [1, 1.5, 2, 3, 5];

/** Discrete line-width presets, as multiples of the base 2px stroke. Shared by
 * the line tool and the rect-outline width. */
export const LINE_WIDTHS = [1, 1.5, 2, 3, 5];

/** Rect outline stroke alignment: how the outline sits relative to the box edge.
 * 0 center (straddles the edge; pre-v10 behavior), 1 inside, 2 outside. */
export const STROKE_ALIGNS = [
  { value: 0, label: 'Center' },
  { value: 1, label: 'Inside' },
  { value: 2, label: 'Outside' },
] as const;

/** Fine units per whole cell (must match CELL_UNITS in src/lib.rs). Coordinates
 * are integers in fine units, so a whole cell spans this many. */
export const CELL_UNITS = 8;
/** Selectable grid subdivisions and the fine-unit snap step each implies. */
export const SUBDIVISIONS = [1, 2, 4, 8];

/** Line widths are stored as tenths of the base stroke (10 = 1×) so they fit the
 * integer shape buffer; the UI picks a multiplier. */
export const widthToTenths = (mult: number) => Math.round(mult * 10);
export const tenthsToWidth = (tenths: number) => tenths / 10;

// Types
export type DrawTool = 'draw' | 'line' | 'rect' | 'text' | 'select';
export type SelectMode = 'box' | 'drag' | 'resize' | 'rotate' | null;

// What the idle pointer is over with the select tool (drives the CSS cursor).
export type HoverAffordance = 'rotate' | 'resize' | 'move' | 'none';

// Which handle of which single shape is being dragged during a resize.
export type ResizeTarget = {
  shape: 'line' | 'rect' | 'text' | 'image';
  index: number;
  handle: number;
};

// Unified selection item type. A 'cell' is one atomic square RECORD (drawn at
// its native 1x/½/¼/⅛ size), addressed by index like every other shape.
export type SelectedItem =
  | { type: 'cell'; index: number }
  | { type: 'line'; index: number }
  | { type: 'rect'; index: number }
  | { type: 'text'; index: number }
  | { type: 'image'; index: number };

// An in-progress text being typed (before it's committed as a shape). `row`/
// `col` are the text frame's TOP-LEFT grid coords (fine units). When an
// EXISTING text is being edited in place (double-click), `editing` carries its
// index and full original record: the original is deleted while typing (so the
// preview isn't drawn over it) and either replaced on commit or restored
// verbatim on cancel — both at the original z-index.
// The text itself is edited in a DOM <input> overlaid on the canvas
// (TextEditOverlay), which owns the caret/selection natively; this state only
// carries the frame geometry, style, and current string.
export type TextEditState = {
  row: number; col: number; size: number; text: string; halign: number; valign: number;
  editing?: { idx: number; original: TextData };
};

// Clipboard data types
export type ClipboardCell = { relRow: number; relCol: number; color: number; size: number };
export type ClipboardLine = { relR1: number; relC1: number; relR2: number; relC2: number; color: number; width: number };
export type ClipboardRect = { relR1: number; relC1: number; relR2: number; relC2: number; color: number; outline: number; width: number; strokeAlign: number };
export type ClipboardText = { relR: number; relC: number; color: number; size: number; boxW: number; boxH: number; halign: number; valign: number; text: string };
export type ClipboardImage = { relR1: number; relC1: number; relR2: number; relC2: number; url: string };

export type ClipboardData = {
  cells: ClipboardCell[];
  lines: ClipboardLine[];
  rects: ClipboardRect[];
  texts: ClipboardText[];
  images: ClipboardImage[];
  // Original top-left of the copied selection, so paste can anchor relative to
  // it (with a small offset) instead of the mouse position.
  originRow: number;
  originCol: number;
} | null;

// --- Training-data capture --------------------------------------------------
// A captured selection serialized into the same sparse, bounding-box-relative
// shape as export_json (cells/lines/rects as flat arrays), extended with texts
// and the selection's pixel-free width/height in cells. This is exactly what a
// training example's input/output halves look like, and what gets POSTed to the
// data server and (after augmentation) fed to the trainer.
export type DesignJSON = {
  w: number;
  h: number;
  // One atomic square record per drawn square: [relRow, relCol, colorIdx, size]
  // (size in fine units — the resolution it was drawn at). Legacy designs have
  // [relRow, relCol, colorIdx] 3-tuples; loaders migrate them (see placeDesign).
  cells: number[][];
  lines: number[][];        // [r1, c1, r2, c2, colorIdx, widthX10]
  rects: number[][];        // [r1, c1, r2, c2, fillIdx, outlineIdx, widthX10?, strokeAlign?]
                            // (widthX10/strokeAlign added in schema v10; absent → 10/0)
  // [r, c, colorIdx, size, boxW, boxH, halign, valign, text] (frame top-left, fine units)
  texts: Array<[number, number, number, number, number, number, number, number, string]>;
  // [r1, c1, r2, c2, url] — image objects (grid-snapped box + S3/remote source).
  // Optional so older designs (and training-example halves) stay valid.
  images?: Array<[number, number, number, number, string]>;
  // Fine units per whole cell at save time. Coordinates are canonically fine
  // units (sub = CELL_UNITS); the ONLY scaling anywhere is the legacy-migration
  // path for designs saved without it (whole-cell units, coords ×CELL_UNITS).
  sub?: number;
};

export type CaptureMode = 'idle' | 'input' | 'output';

export type GridState = {
  // Grid reference (set after WASM loads)
  grid: GridCanvasWasm | null;
  gridSize: { rows: number; cols: number };

  // Drawing state
  tool: DrawTool;
  colorIdx: number;
  outlineIdx: number; // outline color for rects; 6 = none
  // Per-tool memory of the last color/outline so switching tools restores the
  // style you last used in that tool (e.g. red rect stays red when you return).
  toolStyles: Record<DrawTool, { colorIdx: number; outlineIdx: number }>;
  isDrawing: boolean;
  drawMode: boolean; // true = drawing, false = erasing
  lineStart: Cell | null;
  rectStart: Cell | null;
  // In-progress text being typed with the text tool, or null when not editing.
  textEdit: TextEditState | null;
  // Active size (cells tall) for new text shapes.
  textSize: number;
  // Active stroke width (multiple of the base 2px) for new lines.
  lineWidth: number;
  // Active outline stroke width (multiple of the base 2px) for new rects.
  rectLineWidth: number;
  // Active outline stroke alignment for new rects: 0 center, 1 inside, 2 outside.
  rectStrokeAlign: number;
  // Grid subdivision for snapping + display: 1 (whole cells), 2, 4, or 8.
  subdivision: number;

  // Selection state - now unified
  selectedItems: SelectedItem[];
  clipboard: ClipboardData;
  mousePos: Cell;
  selectMode: SelectMode;
  selectBoxStart: Cell | null;
  selectDragStart: Cell | null;
  // True when a drag was started by pressing on empty space inside the
  // selection's bounding box (not on an actual shape). Used to deselect on a
  // zero-movement release.
  dragStartedOnEmpty: boolean;
  isSelecting: boolean;
  previousSelection: SelectedItem[];

  // Resize state - active when dragging a handle of a single line/rect
  resizeTarget: ResizeTarget | null;

  // Geometry of the shape being resized, captured at gesture start so the
  // whole resize commits as a single from→to edit on release.
  resizeOrigin: LineGeom | RectGeom | TextFrame | ImageGeom | null;

  // Active during a rotate gesture: the selection's center in WORLD pixels and
  // the pointer angle (radians) at gesture start. The live drag rotates freely
  // around the center; the release snaps to the nearest quarter-turn.
  rotateOrigin: { cx: number; cy: number; startAngle: number } | null;

  // Training-data capture state. 'idle' = off; 'input' = waiting for the user to
  // box-select the example's input; 'output' = input captured, waiting for the
  // target output selection. captureInput holds the serialized input half.
  captureMode: CaptureMode;
  captureInput: DesignJSON | null;
  // Absolute bbox-min (row,col) of the input selection at capture time. Lets the
  // coordinate model reconstruct a shared input/output frame (the two halves are
  // each bbox-normalized, so without this the relative move between them is lost).
  captureInputOrigin: [number, number] | null;

  // Output state
  jsonOutput: string;
  tensorOutput: string;

  // Bumped on every commit/undo/redo so selectors (e.g. toolbar buttons) can
  // react to undo/redo availability changes, and so the autosave subscription
  // knows the document changed.
  historyTick: number;

  // The drawing currently being edited (from the /design/<name>/ URL or a manual
  // "Save to Gallery"). When set, edits auto-save to it (see lib/autosave.ts).
  currentName: string | null;
  // Auto-save status, surfaced in the UI. 'idle' before any save this session.
  saveState: 'idle' | 'saving' | 'saved' | 'error';
  saveMessage: string;
};

// Action groups, one per slice (see ./slices/*). GridActions is their union.

export type HistoryActions = {
  // Undo/redo
  commitEdits: (edits: Edit[], opts?: { coalesceKey?: string }) => void;
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
  resetHistory: () => void;
  // Snapshot the undo/redo stacks for persistence (auto-save).
  exportHistory: () => { undo: Edit[]; redo: Edit[] };
};

export type ToolActions = {
  // Grid actions
  setGrid: (grid: GridCanvasWasm | null) => void;
  setGridSize: (size: { rows: number; cols: number }) => void;
  // Identify the document being edited (enables auto-save to that name).
  setCurrentName: (name: string | null) => void;
  // Report auto-save progress for the UI; message is optional context.
  setSaveState: (state: 'idle' | 'saving' | 'saved' | 'error', message?: string) => void;

  // Drawing actions
  setTool: (tool: DrawTool) => void;
  setColorIdx: (idx: number) => void;
  setOutlineIdx: (idx: number) => void;
  // Pick a color: set it active for new shapes AND recolor the current selection.
  pickColor: (idx: number) => void;
  pickOutline: (idx: number) => void;
  startDrawing: (mode: boolean) => void;
  stopDrawing: () => void;
  startLine: (cell: Cell) => void;
  finishLine: () => void;
  startRect: (cell: Cell) => void;
  finishRect: () => void;

  // Text tool actions
  setTextSize: (size: number) => void;
  // Set the active size AND resize any selected text shapes (undoable).
  pickTextSize: (size: number) => void;
  setLineWidth: (width: number) => void;
  pickLineWidth: (width: number) => void;
  // Set the active rect outline width / alignment AND restyle selected rects.
  pickRectLineWidth: (width: number) => void;
  pickRectStrokeAlign: (align: number) => void;
  // Set horizontal and/or vertical alignment on selected texts (null = keep).
  pickTextAlign: (halign: number | null, valign: number | null) => void;
  setSubdivision: (level: number) => void;
  cycleSubdivision: () => void;
  beginTextEdit: (cell: Cell) => void;
  // Reopen an existing text shape for in-place editing (see TextEditState).
  beginTextEditAt: (index: number) => void;
  // Replace the in-progress text wholesale (the overlay input's onChange).
  setTextEditText: (text: string) => void;
  commitTextEdit: () => void;
  cancelTextEdit: () => void;

  // Drawing commits (used by the canvas component; route through history)
  beginDrawStroke: () => void;
  drawCellAt: (row: number, col: number, filled: boolean) => void;
  endDrawStroke: () => void;
  commitLine: (r1: number, c1: number, r2: number, c2: number) => void;
  commitRect: (r1: number, c1: number, r2: number, c2: number) => void;

  // One draw-tool press: transparent always erases; any other color toggles
  // based on what's under the pointer. Opens the stroke's history batch
  // (closed by endDrawStroke on release).
  pressDrawAt: (cell: Cell) => void;
  // Continue an in-progress draw stroke (no-op unless a press started one).
  dragDrawAt: (cell: Cell) => void;
  // Rubber-band previews while dragging out a line/rect.
  renderLinePreview: (cell: Cell) => void;
  renderRectPreview: (cell: Cell) => void;
  // Abandon an in-progress line/rect gesture (e.g. pointer left the canvas):
  // repaint to clear the rubber band, then reset the gesture state.
  cancelLine: () => void;
  cancelRect: () => void;
  // Add an image object (grid-snapped box + URL) as one undoable step and select
  // it. `url` is a public bitmap source (uploaded to S3, or a pasted-in URL).
  placeImage: (url: string, box: { r1: number; c1: number; r2: number; c2: number }) => void;
};

export type SelectActions = {
  // Selection actions
  setSelectedItems: (items: SelectedItem[]) => void;
  // Select every element on the grid (cells, lines, rects, texts).
  selectAll: () => void;
  addItemToSelection: (item: SelectedItem) => void;
  removeItemFromSelection: (item: SelectedItem) => void;
  clearSelection: () => void;
  startBoxSelection: (cell: Cell, additive: boolean) => void;
  updateBoxSelection: (currentCell: Cell) => void;
  finishBoxSelection: (endCell: Cell) => void;
  cancelBoxSelection: () => void;
  startDragSelection: (cell: Cell, onEmpty?: boolean) => void;
  finishDragSelection: (endCell: Cell) => void;
  cancelDragSelection: () => void;
  setMousePos: (cell: Cell) => void;

  // One select-tool press: the entire mousedown decision tree (rotate handle >
  // resize handle > drag selection > shift-toggle > single-select > box select).
  // (x, y) are world pixels, (row, col) the snapped cell, zoom the camera zoom
  // (for zoom-independent handle tolerance). The input layer just converts
  // coordinates and calls this.
  pressSelectAt: (press: { x: number; y: number; row: number; col: number; shift: boolean; zoom: number }) => void;
  // Repaint with ghost previews of the selection at the drag's destination,
  // using the same snap as finishDragSelection so ghosts land exactly where
  // the commit will.
  renderDragPreview: (cell: Cell) => void;
  // What the idle pointer is over, for cursor feedback — same geometry and
  // priority as pressSelectAt: the rotate handle, a resize handle, something
  // draggable (a selected shape or the selection's bounds), or nothing.
  hoverAffordanceAt: (q: { x: number; y: number; row: number; col: number; zoom: number }) => HoverAffordance;
  // A select-tool double-click: on a text shape, reopen it for in-place editing.
  doubleClickAt: (pt: { x: number; y: number }) => void;

  // Hit testing for shapes
  hitTestShapes: (x: number, y: number) => SelectedItem | null;

  // Rendering helpers
  renderSelection: () => void;

  // Helper to get selected cells only (for backwards compat)
  getSelectedCells: () => Cell[];
};

export type TransformActions = {
  startResize: (target: ResizeTarget) => void;
  updateResize: (cell: Cell) => void;
  finishResize: (endCell: Cell) => void;
  cancelResize: () => void;
  // Rotate the whole selection. Coordinates are WORLD pixels (the pointer).
  // start captures the center + start angle; update previews a free-angle
  // rotation; finish snaps to the nearest 90° and commits it as one undo step.
  startRotate: (x: number, y: number) => void;
  updateRotate: (x: number, y: number) => void;
  finishRotate: (x: number, y: number) => void;
  cancelRotate: () => void;
};

export type ClipboardActions = {
  copy: () => void;
  paste: () => void;
  deleteSelected: () => void;
};

export type DesignActions = {
  // Training-data capture actions
  startTrainingCapture: () => void;
  captureSetInput: () => void;
  cancelTrainingCapture: () => void;
  // Build the {input, output} example from the captured input + current
  // selection (the output). Returns null if either half is empty.
  buildTrainingExample: () => { input: DesignJSON; output: DesignJSON; delta: [number, number] } | null;
  finishTrainingCapture: () => void;
  // Place a serialized design onto the grid at (anchorRow, anchorCol) as one
  // undoable batch, selecting the placed shapes. Used for model predictions.
  placeDesign: (design: DesignJSON, anchorRow: number, anchorCol: number) => void;
  // Serialize the ENTIRE grid (every cell/line/rect/text) into a DesignJSON,
  // normalized to its bounding box. Used to save a drawing to the gallery.
  serializeWholeGrid: () => DesignJSON | null;
  // Replace the whole grid with a saved design (clear, then place at origin).
  loadDesign: (design: DesignJSON) => void;
  // Replace the grid with a saved design AND restore its undo/redo stacks,
  // so reopening a drawing continues undo/redo exactly as before. When stacks
  // are absent, behaves like loadDesign with a clean (single-step) history.
  loadDesignWithHistory: (design: DesignJSON, stacks: { undo?: Edit[]; redo?: Edit[] } | null) => void;

  // Output actions
  updateOutputs: () => void;
  importJson: (json: string) => void;
  importTensor: (tensor: string) => void;
  clear: () => void;
};

export type GridActions = HistoryActions & ToolActions & SelectActions & TransformActions & ClipboardActions & DesignActions;

export type GridStore = GridState & GridActions;
