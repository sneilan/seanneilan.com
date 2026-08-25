import { create } from 'zustand';
import type { GridCanvasWasm } from '../types/grid';
import {
  getSelectionBounds,
  type Cell,
} from '../utils/selection';
import { getLineHandles, getRectHandles, rotateHandlePoint } from '../utils/handles';
import { History } from './edits/history';
import type { Edit, LineData, RectData, LineGeom, RectGeom, TextData } from './edits/types';

// Single source of undo/redo history for the document. Lives at module scope
// (one canvas per app); every mutating action routes its edits through here so
// `applyEdit` stays the only code that touches the WASM mutators.
const history = new History();

function readLine(grid: GridCanvasWasm, idx: number): LineData {
  const a = grid.get_line(idx);
  return { r1: a[0], c1: a[1], r2: a[2], c2: a[3], color: a[4] };
}

function readRect(grid: GridCanvasWasm, idx: number): RectData {
  const a = grid.get_rect(idx);
  return { r1: a[0], c1: a[1], r2: a[2], c2: a[3], fill: a[4], outline: a[5] };
}

function lineGeom(grid: GridCanvasWasm, idx: number): LineGeom {
  const a = grid.get_line(idx);
  return { r1: a[0], c1: a[1], r2: a[2], c2: a[3] };
}

function rectGeom(grid: GridCanvasWasm, idx: number): RectGeom {
  const a = grid.get_rect(idx);
  return { r1: a[0], c1: a[1], r2: a[2], c2: a[3] };
}

function readText(grid: GridCanvasWasm, idx: number): TextData {
  const a = grid.get_text(idx);
  return { r: a[0], c: a[1], color: a[2], size: grid.get_text_size(idx), text: grid.get_text_string(idx) };
}

/** Discrete text-size presets, in grid cells tall. */
export const TEXT_SIZES = [1, 1.5, 2, 3, 5];

// Types
export type DrawTool = 'draw' | 'line' | 'rect' | 'text' | 'select';
export type SelectMode = 'box' | 'drag' | 'resize' | 'rotate' | null;

// Which handle of which single shape is being dragged during a resize.
export type ResizeTarget = {
  shape: 'line' | 'rect';
  index: number;
  handle: number;
};

// Unified selection item type
export type SelectedItem =
  | { type: 'cell'; row: number; col: number }
  | { type: 'line'; index: number }
  | { type: 'rect'; index: number }
  | { type: 'text'; index: number };

// An in-progress text being typed (before it's committed as a shape). `row` is
// the baseline grid-row the text rests on.
export type TextEditState = { row: number; col: number; size: number; text: string };

// Clipboard data types
type ClipboardCell = { relRow: number; relCol: number; color: number };
type ClipboardLine = { relR1: number; relC1: number; relR2: number; relC2: number; color: number };
type ClipboardRect = { relR1: number; relC1: number; relR2: number; relC2: number; color: number; outline: number };
type ClipboardText = { relR: number; relC: number; color: number; size: number; text: string };

export type ClipboardData = {
  cells: ClipboardCell[];
  lines: ClipboardLine[];
  rects: ClipboardRect[];
  texts: ClipboardText[];
  // Original top-left of the copied selection, so paste can anchor relative to
  // it (with a small offset) instead of the mouse position.
  originRow: number;
  originCol: number;
} | null;

type GridState = {
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
  resizeOrigin: LineGeom | RectGeom | null;

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

type GridActions = {
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
  beginTextEdit: (cell: Cell) => void;
  typeTextChar: (ch: string) => void;
  backspaceText: () => void;
  commitTextEdit: () => void;
  cancelTextEdit: () => void;

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
  setMousePos: (cell: Cell) => void;

  // Hit testing for shapes
  hitTestShapes: (x: number, y: number) => SelectedItem | null;

  // Clipboard actions
  copy: () => void;
  paste: () => void;
  deleteSelected: () => void;

  // Drawing commits (used by the canvas component; route through history)
  beginDrawStroke: () => void;
  drawCellAt: (row: number, col: number, filled: boolean) => void;
  endDrawStroke: () => void;
  commitLine: (r1: number, c1: number, r2: number, c2: number) => void;
  commitRect: (r1: number, c1: number, r2: number, c2: number) => void;

  // Undo/redo
  commitEdits: (edits: Edit[], opts?: { coalesceKey?: string }) => void;
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
  resetHistory: () => void;

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
  // Snapshot the undo/redo stacks for persistence (auto-save).
  exportHistory: () => { undo: Edit[]; redo: Edit[] };
  // Replace the grid with a saved design AND restore its undo/redo stacks,
  // so reopening a drawing continues undo/redo exactly as before. When stacks
  // are absent, behaves like loadDesign with a clean (single-step) history.
  loadDesignWithHistory: (design: DesignJSON, stacks: { undo?: Edit[]; redo?: Edit[] } | null) => void;

  // Output actions
  updateOutputs: () => void;
  importJson: (json: string) => void;
  importTensor: (tensor: string) => void;
  clear: () => void;

  // Rendering helpers
  renderSelection: () => void;

  // Helper to get selected cells only (for backwards compat)
  getSelectedCells: () => Cell[];
};

export type GridStore = GridState & GridActions;

// Stable signature of a selection, so consecutive recolors of the SAME
// selection coalesce into one undo step (but a different selection doesn't).
function selectionSignature(items: SelectedItem[]): string {
  return items
    .map(i => (i.type === 'cell' ? `c:${i.row},${i.col}` : `${i.type[0]}:${i.index}`))
    .sort()
    .join('|');
}

// Helper to check if two items are equal
function itemsEqual(a: SelectedItem, b: SelectedItem): boolean {
  if (a.type !== b.type) return false;
  if (a.type === 'cell' && b.type === 'cell') {
    return a.row === b.row && a.col === b.col;
  }
  if (a.type === 'line' && b.type === 'line') {
    return a.index === b.index;
  }
  if (a.type === 'rect' && b.type === 'rect') {
    return a.index === b.index;
  }
  if (a.type === 'text' && b.type === 'text') {
    return a.index === b.index;
  }
  return false;
}

// Helper to check if item is in selection
function isItemSelected(item: SelectedItem, selection: SelectedItem[]): boolean {
  return selection.some(s => itemsEqual(s, item));
}

// Helper to add item to selection (avoiding duplicates)
function addItemToSelectionArray(item: SelectedItem, selection: SelectedItem[]): SelectedItem[] {
  if (isItemSelected(item, selection)) return selection;
  return [...selection, item];
}

// Helper to remove item from selection
function removeItemFromSelectionArray(item: SelectedItem, selection: SelectedItem[]): SelectedItem[] {
  return selection.filter(s => !itemsEqual(s, item));
}

// Get the full bounding box for all selected items
export function getSelectionBoundsAll(items: SelectedItem[], grid: GridCanvasWasm): { minRow: number; minCol: number; maxRow: number; maxCol: number } | null {
  if (items.length === 0) return null;

  let minRow = Infinity;
  let minCol = Infinity;
  let maxRow = -Infinity;
  let maxCol = -Infinity;

  for (const item of items) {
    if (item.type === 'cell') {
      minRow = Math.min(minRow, item.row);
      minCol = Math.min(minCol, item.col);
      maxRow = Math.max(maxRow, item.row);
      maxCol = Math.max(maxCol, item.col);
    } else if (item.type === 'line') {
      const lineData = grid.get_line(item.index);
      if (lineData.length >= 4) {
        minRow = Math.min(minRow, lineData[0], lineData[2]);
        minCol = Math.min(minCol, lineData[1], lineData[3]);
        maxRow = Math.max(maxRow, lineData[0], lineData[2]);
        maxCol = Math.max(maxCol, lineData[1], lineData[3]);
      }
    } else if (item.type === 'rect') {
      const rectData = grid.get_rect(item.index);
      if (rectData.length >= 4) {
        minRow = Math.min(minRow, rectData[0], rectData[2]);
        minCol = Math.min(minCol, rectData[1], rectData[3]);
        maxRow = Math.max(maxRow, rectData[0], rectData[2]);
        maxCol = Math.max(maxCol, rectData[1], rectData[3]);
      }
    } else if (item.type === 'text') {
      const t = grid.get_text(item.index); // [r_baseline, c, color, wCells, hCells]
      if (t.length >= 5) {
        // Text rests its baseline on row t[0] and rises t[4] cells upward.
        minRow = Math.min(minRow, t[0] - t[4]);
        minCol = Math.min(minCol, t[1]);
        maxRow = Math.max(maxRow, t[0]);
        maxCol = Math.max(maxCol, t[1] + t[3]);
      }
    }
  }

  return minRow === Infinity ? null : { minRow, minCol, maxRow, maxCol };
}

// Get the bounding box origin for shapes (for copy/paste)
function getSelectionOrigin(items: SelectedItem[], grid: GridCanvasWasm): { minRow: number; minCol: number } | null {
  const bounds = getSelectionBoundsAll(items, grid);
  return bounds ? { minRow: bounds.minRow, minCol: bounds.minCol } : null;
}

// --- Training-data capture --------------------------------------------------
// A captured selection serialized into the same sparse, bounding-box-relative
// shape as export_json (cells/lines/rects as flat arrays), extended with texts
// and the selection's pixel-free width/height in cells. This is exactly what a
// training example's input/output halves look like, and what gets POSTed to the
// data server and (after augmentation) fed to the trainer.
export type DesignJSON = {
  w: number;
  h: number;
  cells: number[][];        // [relRow, relCol, colorIdx]
  lines: number[][];        // [r1, c1, r2, c2, colorIdx]
  rects: number[][];        // [r1, c1, r2, c2, fillIdx, outlineIdx]
  texts: Array<[number, number, number, number, string]>; // [r, c, colorIdx, size, text]
};

/**
 * Serialize the given selection into a DesignJSON, with all coordinates made
 * relative to the selection's bounding box (so the same shape captured anywhere
 * on the grid produces identical data). Returns null for an empty selection.
 */
export function serializeSelection(
  grid: GridCanvasWasm,
  items: SelectedItem[],
  opts: { absolute?: boolean } = {},
): DesignJSON | null {
  const bounds = getSelectionBoundsAll(items, grid);
  if (!bounds) return null;
  const { minRow, minCol, maxRow, maxCol } = bounds;
  // In absolute mode coordinates are kept as-is (origin 0,0) so a restored
  // drawing lands where it was made; otherwise they're made bounding-box-
  // relative (so the same shape captured anywhere serializes identically).
  const oR = opts.absolute ? 0 : minRow;
  const oC = opts.absolute ? 0 : minCol;

  const cells: number[][] = [];
  const lines: number[][] = [];
  const rects: number[][] = [];
  const texts: Array<[number, number, number, number, string]> = [];

  for (const item of items) {
    if (item.type === 'cell') {
      cells.push([item.row - oR, item.col - oC, grid.get_cell_color(item.row, item.col)]);
    } else if (item.type === 'line') {
      const a = grid.get_line(item.index);
      lines.push([a[0] - oR, a[1] - oC, a[2] - oR, a[3] - oC, a[4]]);
    } else if (item.type === 'rect') {
      const a = grid.get_rect(item.index);
      rects.push([a[0] - oR, a[1] - oC, a[2] - oR, a[3] - oC, a[4], a[5]]);
    } else if (item.type === 'text') {
      const a = grid.get_text(item.index);
      texts.push([a[0] - oR, a[1] - oC, a[2], grid.get_text_size(item.index), grid.get_text_string(item.index)]);
    }
  }

  // Sort for stable, augmentation-friendly output (row-major, then by kind).
  cells.sort((p, q) => p[0] - q[0] || p[1] - q[1]);
  return {
    w: maxCol - oC + 1,
    h: maxRow - oR + 1,
    cells,
    lines,
    rects,
    texts,
  };
}

export type CaptureMode = 'idle' | 'input' | 'output';

/**
 * Number of clockwise quarter-turns (0..3) a free pointer rotation snaps to.
 * `theta` is the signed angle dragged from the gesture's start direction.
 */
function snapQuarterTurns(theta: number): number {
  return ((Math.round(theta / (Math.PI / 2)) % 4) + 4) % 4;
}

/**
 * Apply `k` clockwise quarter-turns to a grid coordinate about an integer cell
 * center (icr, icc). One turn: (r,c) → (icr+(c-icc), icc-(r-icr)). Integer in,
 * integer out, so 90° steps map cells→cells exactly (lossless).
 */
function rotateQuarter(r: number, c: number, k: number, icr: number, icc: number): { r: number; c: number } {
  let rr = r;
  let cc = c;
  for (let n = 0; n < k; n++) {
    const nr = icr + (cc - icc);
    const nc = icc - (rr - icr);
    rr = nr;
    cc = nc;
  }
  return { r: rr, c: cc };
}

/** Every drawable item currently on the grid, as a selection list. */
function allItems(grid: GridCanvasWasm): SelectedItem[] {
  const items: SelectedItem[] = [];
  // The grid is infinite/sparse, so enumerate filled cells via the WASM buffer
  // ([row, col, color, ...]) rather than scanning a bounded row×col range.
  const cells = grid.get_filled_cells();
  for (let i = 0; i + 2 < cells.length; i += 3) {
    items.push({ type: 'cell', row: cells[i], col: cells[i + 1] });
  }
  for (let i = 0; i < grid.get_line_count(); i++) items.push({ type: 'line', index: i });
  for (let i = 0; i < grid.get_rect_count(); i++) items.push({ type: 'rect', index: i });
  for (let i = 0; i < grid.get_text_count(); i++) items.push({ type: 'text', index: i });
  return items;
}

export const useGridStore = create<GridStore>((set, get) => ({
  // Initial state
  grid: null,
  gridSize: { rows: 10, cols: 10 },

  tool: 'draw',
  colorIdx: 0,
  outlineIdx: 6,
  toolStyles: {
    draw: { colorIdx: 0, outlineIdx: 6 },
    line: { colorIdx: 0, outlineIdx: 6 },
    rect: { colorIdx: 6, outlineIdx: 0 }, // default rect: transparent fill, black outline
    text: { colorIdx: 0, outlineIdx: 6 }, // default text: black
    select: { colorIdx: 0, outlineIdx: 6 },
  },
  isDrawing: false,
  drawMode: false,
  lineStart: null,
  rectStart: null,
  textEdit: null,
  textSize: 1,

  selectedItems: [],
  clipboard: null,
  mousePos: { row: 0, col: 0 },
  selectMode: null,
  selectBoxStart: null,
  selectDragStart: null,
  dragStartedOnEmpty: false,
  isSelecting: false,
  previousSelection: [],
  resizeTarget: null,
  resizeOrigin: null,
  rotateOrigin: null,

  captureMode: 'idle',
  captureInput: null,
  captureInputOrigin: null,

  jsonOutput: '',
  tensorOutput: '',
  historyTick: 0,
  currentName: null,
  saveState: 'idle',
  saveMessage: '',

  // Grid actions
  setGrid: (grid) => set({ grid }),
  setGridSize: (gridSize) => set({ gridSize }),
  setCurrentName: (currentName) => set({ currentName }),
  setSaveState: (saveState, message = '') => set({ saveState, saveMessage: message }),

  // Drawing actions
  setTool: (tool) => {
    // Commit any in-progress text before leaving (don't silently lose it).
    if (get().textEdit) get().commitTextEdit();
    // Restore the color/outline last used in the tool we're switching to.
    const style = get().toolStyles[tool];
    set({ tool, colorIdx: style.colorIdx, outlineIdx: style.outlineIdx });
  },
  setColorIdx: (idx) => set((s) => ({
    colorIdx: idx,
    toolStyles: { ...s.toolStyles, [s.tool]: { ...s.toolStyles[s.tool], colorIdx: idx } },
  })),
  setOutlineIdx: (idx) => set((s) => ({
    outlineIdx: idx,
    toolStyles: { ...s.toolStyles, [s.tool]: { ...s.toolStyles[s.tool], outlineIdx: idx } },
  })),

  pickColor: (idx) => {
    set((s) => ({
      colorIdx: idx,
      toolStyles: { ...s.toolStyles, [s.tool]: { ...s.toolStyles[s.tool], colorIdx: idx } },
    }));
    const { grid, selectedItems } = get();
    if (!grid || selectedItems.length === 0) return;
    // Recolor the fill of every selected cell/rect and the stroke of every line.
    const edits: Edit[] = [];
    for (const item of selectedItems) {
      if (item.type === 'cell') {
        edits.push({ kind: 'setCellColor', row: item.row, col: item.col, from: grid.get_cell_color(item.row, item.col), to: idx });
      } else if (item.type === 'line') {
        edits.push({ kind: 'recolorLine', idx: item.index, from: grid.get_line(item.index)[4], to: idx });
      } else if (item.type === 'rect') {
        edits.push({ kind: 'recolorRectFill', idx: item.index, from: grid.get_rect(item.index)[4], to: idx });
      } else if (item.type === 'text') {
        edits.push({ kind: 'recolorText', idx: item.index, from: grid.get_text(item.index)[2], to: idx });
      }
    }
    get().commitEdits(edits, { coalesceKey: `fill:${selectionSignature(selectedItems)}` });
    get().renderSelection();
    get().updateOutputs();
  },

  pickOutline: (idx) => {
    set((s) => ({
      outlineIdx: idx,
      toolStyles: { ...s.toolStyles, [s.tool]: { ...s.toolStyles[s.tool], outlineIdx: idx } },
    }));
    const { grid, selectedItems } = get();
    if (!grid || selectedItems.length === 0) return;
    // Outline only applies to rects.
    const edits: Edit[] = [];
    for (const item of selectedItems) {
      if (item.type === 'rect') {
        edits.push({ kind: 'recolorRectOutline', idx: item.index, from: grid.get_rect(item.index)[5], to: idx });
      }
    }
    get().commitEdits(edits, { coalesceKey: `outline:${selectionSignature(selectedItems)}` });
    get().renderSelection();
    get().updateOutputs();
  },
  startDrawing: (mode) => set({ isDrawing: true, drawMode: mode }),
  stopDrawing: () => set({ isDrawing: false }),
  startLine: (cell) => set({ lineStart: cell, isDrawing: true }),
  finishLine: () => set({ lineStart: null, isDrawing: false }),
  startRect: (cell) => set({ rectStart: cell, isDrawing: true }),
  finishRect: () => set({ rectStart: null, isDrawing: false }),

  // --- Text tool ------------------------------------------------------------
  // Live typing draws a preview via render_text_preview; nothing touches the
  // document until commitTextEdit appends a single undoable text shape.
  setTextSize: (size) => set({ textSize: size }),

  pickTextSize: (size) => {
    set({ textSize: size });
    const { grid, selectedItems } = get();
    if (!grid || selectedItems.length === 0) return;
    const edits: Edit[] = [];
    for (const item of selectedItems) {
      if (item.type === 'text') {
        edits.push({ kind: 'resizeText', idx: item.index, from: grid.get_text_size(item.index), to: size });
      }
    }
    if (edits.length === 0) return;
    get().commitEdits(edits, { coalesceKey: `size:${selectionSignature(selectedItems)}` });
    get().renderSelection();
  },

  beginTextEdit: (cell) => {
    // Starting a new text commits any text already being typed.
    if (get().textEdit) get().commitTextEdit();
    const { grid, colorIdx, textSize } = get();
    // The text rests its baseline on the bottom grid line of the clicked cell,
    // so a 1-cell text fills exactly that cell.
    const baseline = cell.row + 1;
    set({ textEdit: { row: baseline, col: cell.col, size: textSize, text: '' }, selectedItems: [] });
    if (grid) grid.render_text_preview(baseline, cell.col, colorIdx, textSize, '');
  },

  typeTextChar: (ch) => {
    const { grid, textEdit, colorIdx } = get();
    if (!textEdit) return;
    const next = { ...textEdit, text: textEdit.text + ch };
    set({ textEdit: next });
    if (grid) grid.render_text_preview(next.row, next.col, colorIdx, next.size, next.text);
  },

  backspaceText: () => {
    const { grid, textEdit, colorIdx } = get();
    if (!textEdit) return;
    const next = { ...textEdit, text: textEdit.text.slice(0, -1) };
    set({ textEdit: next });
    if (grid) grid.render_text_preview(next.row, next.col, colorIdx, next.size, next.text);
  },

  commitTextEdit: () => {
    const { grid, textEdit, colorIdx } = get();
    set({ textEdit: null });
    if (!grid || !textEdit || textEdit.text.length === 0) {
      grid?.render();
      return;
    }
    get().commitEdits([{
      kind: 'addText',
      idx: grid.get_text_count(),
      text: { r: textEdit.row, c: textEdit.col, color: colorIdx, size: textEdit.size, text: textEdit.text },
    }]);
    grid.render();
  },

  cancelTextEdit: () => {
    const { grid } = get();
    set({ textEdit: null });
    grid?.render();
  },

  // Selection actions
  setSelectedItems: (items) => {
    set({ selectedItems: items });
    // Repaint so the canvas always matches the selection (no stale boxes/handles).
    get().renderSelection();
    setTimeout(() => get().updateOutputs(), 0);
  },

  selectAll: () => {
    const { grid } = get();
    if (!grid) return;
    if (get().textEdit) get().commitTextEdit();
    const items = allItems(grid);
    if (items.length === 0) return;
    // Switch to the select tool so handles/box behave as expected post-select.
    set({ tool: 'select', selectedItems: items });
    get().renderSelection();
    get().updateOutputs();
  },

  addItemToSelection: (item) => {
    const { selectedItems } = get();
    const newSelected = addItemToSelectionArray(item, selectedItems);
    set({ selectedItems: newSelected });
    get().renderSelection();
    get().updateOutputs();
  },

  removeItemFromSelection: (item) => {
    const { selectedItems } = get();
    const newSelected = removeItemFromSelectionArray(item, selectedItems);
    set({ selectedItems: newSelected });
    get().renderSelection();
    get().updateOutputs();
  },

  clearSelection: () => {
    set({ selectedItems: [] });
    get().updateOutputs();
  },

  startBoxSelection: (cell, additive) => {
    const { selectedItems, grid } = get();
    const previousSelection = additive ? [...selectedItems] : [];
    set({
      selectMode: 'box',
      selectBoxStart: cell,
      isSelecting: true,
      previousSelection,
      selectedItems: additive ? selectedItems : [],
    });
    grid?.render();
  },

  updateBoxSelection: (currentCell) => {
    const { grid, selectBoxStart, previousSelection } = get();
    if (!grid || !selectBoxStart) return;
    grid.render_with_selection_box(selectBoxStart.row, selectBoxStart.col, currentCell.row, currentCell.col);
    // Highlight previously selected items
    for (const item of previousSelection) {
      if (item.type === 'cell') {
        grid.highlight_cell(item.row, item.col);
      } else if (item.type === 'line') {
        grid.highlight_line(item.index);
      } else if (item.type === 'rect') {
        grid.highlight_rect(item.index);
      } else if (item.type === 'text') {
        grid.highlight_text(item.index);
      }
    }
  },

  finishBoxSelection: (endCell) => {
    const { grid, selectBoxStart, previousSelection } = get();
    if (!grid || !selectBoxStart) {
      set({ selectMode: null, selectBoxStart: null, isSelecting: false, previousSelection: [] });
      return;
    }

    const r1 = Math.min(selectBoxStart.row, endCell.row);
    const r2 = Math.max(selectBoxStart.row, endCell.row);
    const c1 = Math.min(selectBoxStart.col, endCell.col);
    const c2 = Math.max(selectBoxStart.col, endCell.col);

    // Collect all items in the box
    const boxItems: SelectedItem[] = [];

    // Get filled cells in box (the box is finite; coords may be negative).
    for (let r = r1; r <= r2; r++) {
      for (let c = c1; c <= c2; c++) {
        if (grid.get_cell(r, c)) {
          boxItems.push({ type: 'cell', row: r, col: c });
        }
      }
    }

    // Get lines that intersect the box
    const lineCount = grid.get_line_count();
    for (let i = 0; i < lineCount; i++) {
      if (grid.line_intersects_box(i, r1, c1, r2, c2)) {
        boxItems.push({ type: 'line', index: i });
      }
    }

    // Get rects that intersect the box
    const rectCount = grid.get_rect_count();
    for (let i = 0; i < rectCount; i++) {
      if (grid.rect_intersects_box(i, r1, c1, r2, c2)) {
        boxItems.push({ type: 'rect', index: i });
      }
    }

    // Get texts that intersect the box
    const textCount = grid.get_text_count();
    for (let i = 0; i < textCount; i++) {
      if (grid.text_intersects_box(i, r1, c1, r2, c2)) {
        boxItems.push({ type: 'text', index: i });
      }
    }

    // Merge with previous selection
    let newSelected = [...previousSelection];
    for (const item of boxItems) {
      if (!isItemSelected(item, newSelected)) {
        newSelected.push(item);
      }
    }

    set({
      selectedItems: newSelected,
      selectMode: null,
      selectBoxStart: null,
      isSelecting: false,
      previousSelection: [],
    });

    get().renderSelection();
    get().updateOutputs();
  },

  cancelBoxSelection: () => {
    const { previousSelection } = get();
    set({
      selectMode: null,
      selectBoxStart: null,
      isSelecting: false,
      selectedItems: previousSelection,
      previousSelection: [],
    });
    get().renderSelection();
  },

  startDragSelection: (cell, onEmpty = false) => {
    set({
      selectMode: 'drag',
      selectDragStart: cell,
      dragStartedOnEmpty: onEmpty,
      isSelecting: true,
    });
  },

  finishDragSelection: (endCell) => {
    const { grid, selectDragStart, selectedItems, dragStartedOnEmpty, updateOutputs } = get();
    if (!grid || !selectDragStart || selectedItems.length === 0) {
      set({ selectMode: null, selectDragStart: null, dragStartedOnEmpty: false, isSelecting: false });
      return;
    }

    const deltaRow = endCell.row - selectDragStart.row;
    const deltaCol = endCell.col - selectDragStart.col;

    if (deltaRow !== 0 || deltaCol !== 0) {
      const newSelected: SelectedItem[] = [];

      // Build one batch describing the whole move. For cells we emit all source
      // clears first, then all destination writes, so overlapping source/dest
      // footprints never clobber (a dest write can't land on a not-yet-cleared
      // source). `from` states are captured pre-gesture, so undo restores the
      // exact original contents of both source and destination cells.
      const clears: Edit[] = [];
      const writes: Edit[] = [];
      for (const item of selectedItems) {
        if (item.type === 'cell') {
          if (!grid.get_cell(item.row, item.col)) continue;
          const color = grid.get_cell_color(item.row, item.col);
          const newRow = item.row + deltaRow;
          const newCol = item.col + deltaCol;
          clears.push({
            kind: 'setCellState', row: item.row, col: item.col,
            from: { filled: true, color }, to: { filled: false, color },
          });
          // Infinite canvas: any destination cell is valid (incl. negative).
          writes.push({
            kind: 'setCellState', row: newRow, col: newCol,
            from: { filled: grid.get_cell(newRow, newCol), color: grid.get_cell_color(newRow, newCol) },
            to: { filled: true, color },
          });
          newSelected.push({ type: 'cell', row: newRow, col: newCol });
        }
      }

      const lineEdits: Edit[] = [];
      const linesToMove = selectedItems.filter(i => i.type === 'line') as Array<{ type: 'line'; index: number }>;
      for (const item of linesToMove) {
        lineEdits.push({ kind: 'moveLine', idx: item.index, dRow: deltaRow, dCol: deltaCol });
        newSelected.push({ type: 'line', index: item.index });
      }

      const rectEdits: Edit[] = [];
      const rectsToMove = selectedItems.filter(i => i.type === 'rect') as Array<{ type: 'rect'; index: number }>;
      for (const item of rectsToMove) {
        rectEdits.push({ kind: 'moveRect', idx: item.index, dRow: deltaRow, dCol: deltaCol });
        newSelected.push({ type: 'rect', index: item.index });
      }

      const textEdits: Edit[] = [];
      const textsToMove = selectedItems.filter(i => i.type === 'text') as Array<{ type: 'text'; index: number }>;
      for (const item of textsToMove) {
        textEdits.push({ kind: 'moveText', idx: item.index, dRow: deltaRow, dCol: deltaCol });
        newSelected.push({ type: 'text', index: item.index });
      }

      get().commitEdits([...clears, ...writes, ...lineEdits, ...rectEdits, ...textEdits]);

      set({
        selectedItems: newSelected,
        selectMode: null,
        selectDragStart: null,
        dragStartedOnEmpty: false,
        isSelecting: false,
      });
      updateOutputs();
      get().renderSelection();
    } else {
      // No movement. If the press landed on empty space inside the selection
      // bounds (not on a shape), treat it as a click-to-deselect. Pressing on
      // an actual shape keeps the selection intact.
      set({
        selectMode: null,
        selectDragStart: null,
        dragStartedOnEmpty: false,
        isSelecting: false,
        selectedItems: dragStartedOnEmpty ? [] : selectedItems,
      });
      grid.render();
      if (!dragStartedOnEmpty) get().renderSelection();
      if (dragStartedOnEmpty) updateOutputs();
    }
  },

  cancelDragSelection: () => {
    set({ selectMode: null, selectDragStart: null, dragStartedOnEmpty: false, isSelecting: false });
    get().renderSelection();
  },

  startResize: (target) => {
    const { grid } = get();
    // Capture the pre-resize geometry so finish/cancel can commit/restore it.
    const resizeOrigin = grid
      ? (target.shape === 'line' ? lineGeom(grid, target.index) : rectGeom(grid, target.index))
      : null;
    set({ selectMode: 'resize', resizeTarget: target, resizeOrigin, isSelecting: true });
  },

  updateResize: (cell) => {
    const { grid, resizeTarget } = get();
    if (!grid || !resizeTarget) return;
    // Live-apply (preview): the WASM setters re-render so the shape follows the
    // cursor. This is NOT recorded; finishResize commits the single net edit.
    if (resizeTarget.shape === 'line') {
      grid.set_line_endpoint(resizeTarget.index, resizeTarget.handle, cell.row, cell.col);
    } else {
      grid.resize_rect(resizeTarget.index, resizeTarget.handle, cell.row, cell.col);
    }
    get().renderSelection();
  },

  finishResize: (endCell) => {
    const { grid, resizeTarget, resizeOrigin } = get();
    if (grid && resizeTarget) {
      // Apply the final live position, then read the resulting geometry and
      // record a single from(origin)→to(final) edit for undo.
      if (resizeTarget.shape === 'line') {
        grid.set_line_endpoint(resizeTarget.index, resizeTarget.handle, endCell.row, endCell.col);
        if (resizeOrigin) {
          get().commitEdits([{ kind: 'setLineGeom', idx: resizeTarget.index, from: resizeOrigin, to: lineGeom(grid, resizeTarget.index) }]);
        }
      } else {
        grid.resize_rect(resizeTarget.index, resizeTarget.handle, endCell.row, endCell.col);
        if (resizeOrigin) {
          get().commitEdits([{ kind: 'setRectGeom', idx: resizeTarget.index, from: resizeOrigin, to: rectGeom(grid, resizeTarget.index) }]);
        }
      }
    }
    set({ selectMode: null, resizeTarget: null, resizeOrigin: null, isSelecting: false });
    get().renderSelection();
    get().updateOutputs();
  },

  cancelResize: () => {
    const { grid, resizeTarget, resizeOrigin } = get();
    // The live preview already mutated the shape; restore the captured geometry.
    if (grid && resizeTarget && resizeOrigin) {
      if (resizeTarget.shape === 'line') {
        grid.set_line(resizeTarget.index, resizeOrigin.r1, resizeOrigin.c1, resizeOrigin.r2, resizeOrigin.c2);
      } else {
        grid.set_rect(resizeTarget.index, resizeOrigin.r1, resizeOrigin.c1, resizeOrigin.r2, resizeOrigin.c2);
      }
    }
    set({ selectMode: null, resizeTarget: null, resizeOrigin: null, isSelecting: false });
    get().renderSelection();
  },

  // --- Rotate (free drag, snaps to 90° on release) --------------------------

  startRotate: (x, y) => {
    const { grid, selectedItems } = get();
    if (!grid) return;
    const bounds = getSelectionBoundsAll(selectedItems, grid);
    if (!bounds) return;
    const cs = grid.get_cell_size();
    const cx = ((bounds.minCol + bounds.maxCol) / 2) * cs;
    const cy = ((bounds.minRow + bounds.maxRow) / 2) * cs;
    set({
      selectMode: 'rotate',
      isSelecting: true,
      rotateOrigin: { cx, cy, startAngle: Math.atan2(y - cy, x - cx) },
    });
  },

  updateRotate: (x, y) => {
    const { grid, selectedItems, rotateOrigin } = get();
    if (!grid || !rotateOrigin) return;
    const { cx, cy, startAngle } = rotateOrigin;
    // Snap the preview to the nearest quarter-turn — never show an in-between
    // tilt — so the ghost is exactly what the release will commit.
    const k = snapQuarterTurns(Math.atan2(y - cy, x - cx) - startAngle);
    grid.render();
    if (k === 0) {
      // Back at 0°: show the selection in place (with its highlights/handles).
      get().renderSelection();
      return;
    }
    const bounds = getSelectionBoundsAll(selectedItems, grid);
    if (!bounds) return;
    const icr = Math.round((bounds.minRow + bounds.maxRow) / 2);
    const icc = Math.round((bounds.minCol + bounds.maxCol) / 2);
    for (const item of selectedItems) {
      if (item.type === 'cell') {
        const p = rotateQuarter(item.row, item.col, k, icr, icc);
        grid.preview_cell(p.r, p.c, grid.get_cell_color(item.row, item.col));
      } else if (item.type === 'line') {
        const l = grid.get_line(item.index);
        if (l.length >= 5) {
          const a = rotateQuarter(l[0], l[1], k, icr, icc);
          const b = rotateQuarter(l[2], l[3], k, icr, icc);
          grid.preview_line(a.r, a.c, b.r, b.c, l[4]);
        }
      } else if (item.type === 'rect') {
        const r = grid.get_rect(item.index);
        if (r.length >= 6) {
          const a = rotateQuarter(r[0], r[1], k, icr, icc);
          const b = rotateQuarter(r[2], r[3], k, icr, icc);
          grid.preview_rect(a.r, a.c, b.r, b.c, r[4], r[5]);
        }
      } else if (item.type === 'text') {
        const t = grid.get_text(item.index);
        if (t.length >= 3) {
          const p = rotateQuarter(t[0], t[1], k, icr, icc);
          grid.preview_text(p.r, p.c, t[2], grid.get_text_size(item.index), grid.get_text_string(item.index));
        }
      }
    }
  },

  finishRotate: (x, y) => {
    const { grid, selectedItems, rotateOrigin } = get();
    if (!grid || !rotateOrigin) {
      set({ selectMode: null, rotateOrigin: null, isSelecting: false });
      return;
    }
    const { cx, cy, startAngle } = rotateOrigin;
    // Snap to the nearest quarter-turn (0..3 clockwise). 0 = no change.
    const k = snapQuarterTurns(Math.atan2(y - cy, x - cx) - startAngle);
    const bounds = getSelectionBoundsAll(selectedItems, grid);
    if (k === 0 || !bounds) {
      set({ selectMode: null, rotateOrigin: null, isSelecting: false });
      get().renderSelection();
      return;
    }

    // Rotate about an INTEGER cell center so 90° steps map cells→cells exactly
    // (lossless, and four turns return to the original).
    const icr = Math.round((bounds.minRow + bounds.maxRow) / 2);
    const icc = Math.round((bounds.minCol + bounds.maxCol) / 2);
    const quarter = (r: number, c: number) => rotateQuarter(r, c, k, icr, icc);

    // Cells: clear every source first, then write every destination, so an
    // overlapping source/dest footprint never clobbers (mirrors the drag move).
    const clears: Edit[] = [];
    const writes: Edit[] = [];
    const geomEdits: Edit[] = [];
    const newSelected: SelectedItem[] = [];

    for (const item of selectedItems) {
      if (item.type === 'cell') {
        if (!grid.get_cell(item.row, item.col)) continue;
        const color = grid.get_cell_color(item.row, item.col);
        const np = quarter(item.row, item.col);
        clears.push({
          kind: 'setCellState', row: item.row, col: item.col,
          from: { filled: true, color }, to: { filled: false, color },
        });
        writes.push({
          kind: 'setCellState', row: np.r, col: np.c,
          from: { filled: grid.get_cell(np.r, np.c), color: grid.get_cell_color(np.r, np.c) },
          to: { filled: true, color },
        });
        newSelected.push({ type: 'cell', row: np.r, col: np.c });
      } else if (item.type === 'line') {
        const l = grid.get_line(item.index);
        if (l.length < 5) continue;
        const a = quarter(l[0], l[1]);
        const b = quarter(l[2], l[3]);
        geomEdits.push({
          kind: 'setLineGeom', idx: item.index,
          from: { r1: l[0], c1: l[1], r2: l[2], c2: l[3] },
          to: { r1: a.r, c1: a.c, r2: b.r, c2: b.c },
        });
        newSelected.push({ type: 'line', index: item.index });
      } else if (item.type === 'rect') {
        const r = grid.get_rect(item.index);
        if (r.length < 6) continue;
        const a = quarter(r[0], r[1]);
        const b = quarter(r[2], r[3]);
        geomEdits.push({
          kind: 'setRectGeom', idx: item.index,
          from: { r1: r[0], c1: r[1], r2: r[2], c2: r[3] },
          to: { r1: a.r, c1: a.c, r2: b.r, c2: b.c },
        });
        newSelected.push({ type: 'rect', index: item.index });
      } else if (item.type === 'text') {
        const t = grid.get_text(item.index);
        if (t.length < 3) continue;
        // Text can't render rotated glyphs, so rotate its anchor and keep it
        // upright (the position follows the group; the glyphs stay horizontal).
        const np = quarter(t[0], t[1]);
        geomEdits.push({ kind: 'moveText', idx: item.index, dRow: np.r - t[0], dCol: np.c - t[1] });
        newSelected.push({ type: 'text', index: item.index });
      }
    }

    set({ selectMode: null, rotateOrigin: null, isSelecting: false });
    get().commitEdits([...clears, ...writes, ...geomEdits]);
    set({ selectedItems: newSelected });
    get().renderSelection();
    get().updateOutputs();
  },

  cancelRotate: () => {
    set({ selectMode: null, rotateOrigin: null, isSelecting: false });
    get().renderSelection();
  },

  setMousePos: (cell) => set({ mousePos: cell }),

  // --- Undo/redo plumbing ---------------------------------------------------

  commitEdits: (edits, opts) => {
    const { grid } = get();
    if (!grid || edits.length === 0) return;
    history.commit(grid, edits.length === 1 ? edits[0] : { kind: 'batch', edits }, opts);
    set({ historyTick: get().historyTick + 1 });
  },

  undo: () => {
    const { grid } = get();
    if (!grid) return;
    if (history.undoLast(grid)) {
      // Indices/positions may have shifted; drop selection rather than show stale.
      set({ selectedItems: [], historyTick: get().historyTick + 1 });
      get().renderSelection();
      get().updateOutputs();
    }
  },

  redo: () => {
    const { grid } = get();
    if (!grid) return;
    if (history.redoLast(grid)) {
      set({ selectedItems: [], historyTick: get().historyTick + 1 });
      get().renderSelection();
      get().updateOutputs();
    }
  },

  canUndo: () => history.canUndo(),
  canRedo: () => history.canRedo(),
  resetHistory: () => {
    history.clear();
    set({ historyTick: get().historyTick + 1 });
  },

  // --- Drawing commits (called by the canvas component) ---------------------

  beginDrawStroke: () => {
    history.beginBatch();
  },

  drawCellAt: (row, col, filled) => {
    const { grid, colorIdx } = get();
    if (!grid) return;
    // colorIdx 6 (transparent) erases; otherwise place a filled cell of that color.
    const to = filled && colorIdx < 6
      ? { filled: true, color: colorIdx }
      : { filled: false, color: colorIdx < 6 ? colorIdx : grid.get_cell_color(row, col) };
    const from = { filled: grid.get_cell(row, col), color: grid.get_cell_color(row, col) };
    // Skip no-op writes so dragging across the same cell doesn't bloat history.
    if (from.filled === to.filled && (!to.filled || from.color === to.color)) return;
    get().commitEdits([{ kind: 'setCellState', row, col, from, to }]);
  },

  endDrawStroke: () => {
    history.endBatch();
    set({ historyTick: get().historyTick + 1 });
    get().updateOutputs();
  },

  commitLine: (r1, c1, r2, c2) => {
    const { grid, colorIdx } = get();
    if (!grid) return;
    get().commitEdits([{ kind: 'addLine', idx: grid.get_line_count(), line: { r1, c1, r2, c2, color: colorIdx } }]);
    get().updateOutputs();
  },

  commitRect: (r1, c1, r2, c2) => {
    const { grid, colorIdx, outlineIdx } = get();
    if (!grid) return;
    get().commitEdits([{ kind: 'addRect', idx: grid.get_rect_count(), rect: { r1, c1, r2, c2, fill: colorIdx, outline: outlineIdx } }]);
    get().updateOutputs();
  },

  // Hit test for shapes - returns the topmost shape at position
  hitTestShapes: (x, y) => {
    const { grid } = get();
    if (!grid) return null;

    // Test lines first (they're thin, need priority)
    const lineIdx = grid.hit_test_line(x, y, 8.0); // 8px tolerance
    if (lineIdx >= 0) {
      return { type: 'line', index: lineIdx };
    }

    // Test texts (before rects: a text label sits on top of any rect it's over)
    const textIdx = grid.hit_test_text(x, y);
    if (textIdx >= 0) {
      return { type: 'text', index: textIdx };
    }

    // Test rects
    const rectIdx = grid.hit_test_rect(x, y);
    if (rectIdx >= 0) {
      return { type: 'rect', index: rectIdx };
    }

    // Test cells
    const cellSize = grid.get_cell_size();
    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);
    if (grid.get_cell(row, col)) {
      return { type: 'cell', row, col };
    }

    return null;
  },

  // Clipboard actions
  copy: () => {
    const { grid, selectedItems } = get();
    if (!grid || selectedItems.length === 0) return;

    const origin = getSelectionOrigin(selectedItems, grid);
    if (!origin) return;

    const cells: ClipboardCell[] = [];
    const lines: ClipboardLine[] = [];
    const rects: ClipboardRect[] = [];
    const texts: ClipboardText[] = [];

    for (const item of selectedItems) {
      if (item.type === 'cell') {
        cells.push({
          relRow: item.row - origin.minRow,
          relCol: item.col - origin.minCol,
          color: grid.get_cell_color(item.row, item.col),
        });
      } else if (item.type === 'line') {
        const lineData = grid.get_line(item.index);
        if (lineData.length >= 5) {
          lines.push({
            relR1: lineData[0] - origin.minRow,
            relC1: lineData[1] - origin.minCol,
            relR2: lineData[2] - origin.minRow,
            relC2: lineData[3] - origin.minCol,
            color: lineData[4],
          });
        }
      } else if (item.type === 'rect') {
        const rectData = grid.get_rect(item.index);
        if (rectData.length >= 6) {
          rects.push({
            relR1: rectData[0] - origin.minRow,
            relC1: rectData[1] - origin.minCol,
            relR2: rectData[2] - origin.minRow,
            relC2: rectData[3] - origin.minCol,
            color: rectData[4],
            outline: rectData[5],
          });
        }
      } else if (item.type === 'text') {
        const t = grid.get_text(item.index);
        if (t.length >= 3) {
          texts.push({
            relR: t[0] - origin.minRow,
            relC: t[1] - origin.minCol,
            color: t[2],
            size: grid.get_text_size(item.index),
            text: grid.get_text_string(item.index),
          });
        }
      }
    }

    set({ clipboard: { cells, lines, rects, texts, originRow: origin.minRow, originCol: origin.minCol } });
  },

  paste: () => {
    const { grid, clipboard, updateOutputs } = get();
    if (!grid || !clipboard) return;

    const newSelected: SelectedItem[] = [];

    // Anchor the paste at the original copied location plus a small offset, so
    // the copy lands visibly near the source and never gets dumped at the grid
    // origin (which happens if we anchored on a stale/over-toolbar mouse pos).
    const PASTE_OFFSET = 1;
    const anchor = {
      row: clipboard.originRow + PASTE_OFFSET,
      col: clipboard.originCol + PASTE_OFFSET,
    };

    // Build one batch so a paste is a single undo step. New lines/rects append,
    // so their index is the current count plus however many we've added so far.
    const edits: Edit[] = [];
    let lineIdx = grid.get_line_count();
    let rectIdx = grid.get_rect_count();
    let textIdx = grid.get_text_count();

    // Paste cells. Infinite canvas: any coordinate is valid (incl. negative).
    for (const cell of clipboard.cells) {
      const newRow = anchor.row + cell.relRow;
      const newCol = anchor.col + cell.relCol;
      edits.push({
        kind: 'setCellState',
        row: newRow, col: newCol,
        from: { filled: grid.get_cell(newRow, newCol), color: grid.get_cell_color(newRow, newCol) },
        to: { filled: true, color: cell.color },
      });
      newSelected.push({ type: 'cell', row: newRow, col: newCol });
    }

    // Paste lines
    for (const line of clipboard.lines) {
      const r1 = anchor.row + line.relR1;
      const c1 = anchor.col + line.relC1;
      const r2 = anchor.row + line.relR2;
      const c2 = anchor.col + line.relC2;
      edits.push({ kind: 'addLine', idx: lineIdx, line: { r1, c1, r2, c2, color: line.color } });
      newSelected.push({ type: 'line', index: lineIdx });
      lineIdx++;
    }

    // Paste rects
    for (const rect of clipboard.rects) {
      const r1 = anchor.row + rect.relR1;
      const c1 = anchor.col + rect.relC1;
      const r2 = anchor.row + rect.relR2;
      const c2 = anchor.col + rect.relC2;
      edits.push({ kind: 'addRect', idx: rectIdx, rect: { r1, c1, r2, c2, fill: rect.color, outline: rect.outline } });
      newSelected.push({ type: 'rect', index: rectIdx });
      rectIdx++;
    }

    // Paste texts
    for (const t of clipboard.texts ?? []) {
      const r = anchor.row + t.relR;
      const c = anchor.col + t.relC;
      edits.push({ kind: 'addText', idx: textIdx, text: { r, c, color: t.color, size: t.size, text: t.text } });
      newSelected.push({ type: 'text', index: textIdx });
      textIdx++;
    }

    get().commitEdits(edits);
    grid.render();
    set({ selectedItems: newSelected });
    get().renderSelection();
    updateOutputs();
  },

  deleteSelected: () => {
    const { grid, selectedItems, updateOutputs } = get();
    if (!grid || selectedItems.length === 0) return;

    // Build one batch. Capture each shape's data BEFORE any deletion so undo can
    // re-insert it. Lines/rects are deleted high-index-first so earlier indices
    // stay valid; the batch's reverse-order inverse re-inserts low-index-first.
    const lineIndices = selectedItems
      .filter(i => i.type === 'line')
      .map(i => (i as { type: 'line'; index: number }).index)
      .sort((a, b) => b - a);

    const rectIndices = selectedItems
      .filter(i => i.type === 'rect')
      .map(i => (i as { type: 'rect'; index: number }).index)
      .sort((a, b) => b - a);

    const textIndices = selectedItems
      .filter(i => i.type === 'text')
      .map(i => (i as { type: 'text'; index: number }).index)
      .sort((a, b) => b - a);

    const edits: Edit[] = [];

    for (const item of selectedItems) {
      if (item.type === 'cell') {
        const color = grid.get_cell_color(item.row, item.col);
        edits.push({
          kind: 'setCellState',
          row: item.row, col: item.col,
          from: { filled: true, color },
          to: { filled: false, color },
        });
      }
    }
    for (const idx of lineIndices) {
      edits.push({ kind: 'deleteLine', idx, line: readLine(grid, idx) });
    }
    for (const idx of rectIndices) {
      edits.push({ kind: 'deleteRect', idx, rect: readRect(grid, idx) });
    }
    for (const idx of textIndices) {
      edits.push({ kind: 'deleteText', idx, text: readText(grid, idx) });
    }

    get().commitEdits(edits);
    set({ selectedItems: [] });
    grid.render();
    updateOutputs();
  },

  // --- Training-data capture -----------------------------------------------
  // A two-step state machine: capture an input selection, then an output
  // selection, producing one {input, output} example. Forces the select tool so
  // the user is box-selecting, not drawing, during capture.
  startTrainingCapture: () => {
    if (get().textEdit) get().commitTextEdit();
    set({ captureMode: 'input', captureInput: null, captureInputOrigin: null, selectedItems: [], tool: 'select' });
    get().renderSelection();
  },

  captureSetInput: () => {
    const { grid, selectedItems } = get();
    if (!grid) return;
    const input = serializeSelection(grid, selectedItems);
    if (!input) return; // ignore an empty input selection
    // Record the input's absolute origin so the output can be expressed in the
    // same frame (see captureInputOrigin / buildTrainingExample's delta).
    const b = getSelectionBoundsAll(selectedItems, grid);
    const origin: [number, number] = b ? [b.minRow, b.minCol] : [0, 0];
    set({ captureInput: input, captureInputOrigin: origin, captureMode: 'output', selectedItems: [] });
    get().renderSelection();
  },

  buildTrainingExample: () => {
    const { grid, selectedItems, captureInput, captureInputOrigin } = get();
    if (!grid || !captureInput) return null;
    const output = serializeSelection(grid, selectedItems);
    if (!output) return null;
    // delta = outputOrigin - inputOrigin (absolute bbox-mins). The coordinate
    // model uses it to place both halves in one shared frame.
    const b = getSelectionBoundsAll(selectedItems, grid);
    const inO = captureInputOrigin ?? [0, 0];
    const outO: [number, number] = b ? [b.minRow, b.minCol] : [0, 0];
    const delta: [number, number] = [outO[0] - inO[0], outO[1] - inO[1]];
    return { input: captureInput, output, delta };
  },

  finishTrainingCapture: () => {
    set({ captureMode: 'idle', captureInput: null, captureInputOrigin: null, selectedItems: [] });
    get().renderSelection();
  },

  cancelTrainingCapture: () => {
    set({ captureMode: 'idle', captureInput: null, captureInputOrigin: null, selectedItems: [] });
    get().renderSelection();
  },

  placeDesign: (design, anchorRow, anchorCol) => {
    const { grid } = get();
    if (!grid) return;
    const edits: Edit[] = [];
    const newSelected: SelectedItem[] = [];
    let lineIdx = grid.get_line_count();
    let rectIdx = grid.get_rect_count();
    let textIdx = grid.get_text_count();

    // Infinite canvas: place every cell, no bounds clipping (a large design
    // opened in a small window no longer loses cells).
    for (const [r, c, color] of design.cells ?? []) {
      const gr = anchorRow + r;
      const gc = anchorCol + c;
      edits.push({
        kind: 'setCellState', row: gr, col: gc,
        from: { filled: grid.get_cell(gr, gc), color: grid.get_cell_color(gr, gc) },
        to: { filled: true, color },
      });
      newSelected.push({ type: 'cell', row: gr, col: gc });
    }
    for (const [r1, c1, r2, c2, color] of design.lines ?? []) {
      edits.push({ kind: 'addLine', idx: lineIdx, line: { r1: anchorRow + r1, c1: anchorCol + c1, r2: anchorRow + r2, c2: anchorCol + c2, color } });
      newSelected.push({ type: 'line', index: lineIdx });
      lineIdx++;
    }
    for (const [r1, c1, r2, c2, fill, outline] of design.rects ?? []) {
      edits.push({ kind: 'addRect', idx: rectIdx, rect: { r1: anchorRow + r1, c1: anchorCol + c1, r2: anchorRow + r2, c2: anchorCol + c2, fill, outline } });
      newSelected.push({ type: 'rect', index: rectIdx });
      rectIdx++;
    }
    // Texts may arrive as tuples [r,c,color,size,text] (our serialize format) or
    // as objects {r,c,color,size,text} (what a model's JSON-schema decoder emits).
    // Normalize and skip anything malformed so a stray prediction can't crash the
    // editor (this was the "[Symbol.iterator] is not iterable" Predict failure).
    for (const t of design.texts ?? []) {
      const o = Array.isArray(t)
        ? { r: t[0], c: t[1], color: t[2], size: t[3], text: t[4] }
        : (t as { r: number; c: number; color: number; size: number; text: string });
      if (!o || typeof o.r !== 'number' || typeof o.c !== 'number') continue;
      edits.push({
        kind: 'addText', idx: textIdx,
        text: { r: anchorRow + o.r, c: anchorCol + o.c, color: o.color ?? 0, size: o.size ?? 1, text: String(o.text ?? '') },
      });
      newSelected.push({ type: 'text', index: textIdx });
      textIdx++;
    }

    if (edits.length === 0) return;
    get().commitEdits(edits);
    grid.render();
    set({ selectedItems: newSelected });
    get().renderSelection();
    get().updateOutputs();
  },

  serializeWholeGrid: () => {
    const { grid } = get();
    if (!grid) return null;
    // Absolute coords so loadDesign restores the drawing to its original spot.
    return serializeSelection(grid, allItems(grid), { absolute: true });
  },

  loadDesign: (design) => {
    const { grid } = get();
    if (!grid) return;
    get().clear();                 // undoable: wipes the current grid
    get().placeDesign(design, 0, 0); // undoable: stamps the saved design
    set({ selectedItems: [] });
    get().renderSelection();
  },

  exportHistory: () => history.exportStacks(),

  loadDesignWithHistory: (design, stacks) => {
    const { grid } = get();
    if (!grid) return;
    // Bring the grid to the saved final state, then drop the synthetic load
    // edits and install the persisted stacks so the grid (= top of undo stack)
    // and history stay consistent. Without stacks, keep a clean single history.
    get().loadDesign(design);
    if (stacks && ((stacks.undo?.length ?? 0) > 0 || (stacks.redo?.length ?? 0) > 0)) {
      history.importStacks(stacks);
    } else {
      history.clear();
    }
    set({ selectedItems: [], historyTick: get().historyTick + 1 });
    get().renderSelection();
  },

  // Output actions - sparse format for cells
  updateOutputs: () => {
    const { grid, selectedItems } = get();
    const selectedCells = selectedItems.filter(i => i.type === 'cell') as Array<{ type: 'cell'; row: number; col: number }>;

    if (!grid || selectedCells.length === 0) {
      set({ jsonOutput: '', tensorOutput: '' });
      return;
    }

    const colorMap = ['#000000', '#ffffff', '#cc3333', '#ffcc00', '#2266dd', '#22aa22', null];

    // Sparse format: list of {row, col, color}
    const sparseList: Array<{ row: number; col: number; color: string }> = [];

    // Find bounds for relative coords
    const cells = selectedCells.map(c => ({ row: c.row, col: c.col }));
    const bounds = getSelectionBounds(cells);
    if (!bounds) {
      set({ jsonOutput: '', tensorOutput: '' });
      return;
    }

    for (const cell of selectedCells) {
      if (grid.get_cell(cell.row, cell.col)) {
        const colorIdx = grid.get_cell_color(cell.row, cell.col);
        const colorHex = colorMap[colorIdx] ?? '#000000';
        // Use relative coordinates (from top-left of selection)
        sparseList.push({
          row: cell.row - bounds.minRow,
          col: cell.col - bounds.minCol,
          color: colorHex,
        });
      }
    }

    // Sort by row, then col for consistent output
    sparseList.sort((a, b) => a.row - b.row || a.col - b.col);

    // Generate Python code for PyTorch sparse COO tensor
    const height = bounds.maxRow - bounds.minRow + 1;
    const width = bounds.maxCol - bounds.minCol + 1;
    const rowIndices: number[] = [];
    const colIndices: number[] = [];

    for (const cell of sparseList) {
      // Only black cells (color index 0) are included
      if (cell.color === '#000000') {
        rowIndices.push(cell.row);
        colIndices.push(cell.col);
      }
    }

    const valuesStr = rowIndices.map(() => '1.0').join(', ');
    const pythonCode = `import torch

indices = torch.tensor([[${rowIndices.join(', ')}], [${colIndices.join(', ')}]])
values = torch.tensor([${valuesStr}])
sparse = torch.sparse_coo_tensor(indices, values, size=(${height}, ${width}))
sparse = sparse.coalesce()`;

    set({
      jsonOutput: JSON.stringify(sparseList, null, 2),
      tensorOutput: pythonCode,
    });
  },

  importJson: (json) => {
    const { grid, mousePos } = get();
    if (!grid || !json.trim()) return;

    const colorMap: Record<string, number> = {
      '#000000': 0, '#ffffff': 1, '#cc3333': 2,
      '#ffcc00': 3, '#2266dd': 4, '#22aa22': 5,
    };

    try {
      const parsed = JSON.parse(json);
      if (!Array.isArray(parsed)) return;

      const newSelected: SelectedItem[] = [];

      // Check if it's sparse format (array of {row, col, color} objects)
      const isSparse = parsed.length > 0 && typeof parsed[0] === 'object' && 'row' in parsed[0] && 'col' in parsed[0];

      if (isSparse) {
        // Sparse format: [{row, col, color}, ...]. Infinite canvas: no bounds.
        for (const cell of parsed) {
          if (typeof cell !== 'object' || cell === null) continue;
          const r = cell.row;
          const c = cell.col;
          const color = cell.color;
          if (typeof r !== 'number' || typeof c !== 'number') continue;

          const gridRow = mousePos.row + r;
          const gridCol = mousePos.col + c;
          const colorIdx = colorMap[color] ?? 0;
          grid.set_draw_color(colorIdx);
          grid.set_cell(gridRow, gridCol, true);
          newSelected.push({ type: 'cell', row: gridRow, col: gridCol });
        }
      } else {
        // Legacy 2D grid format: [[{color}, null, ...], ...]
        for (let r = 0; r < parsed.length; r++) {
          const row = parsed[r];
          if (!Array.isArray(row)) continue;
          for (let c = 0; c < row.length; c++) {
            const gridRow = mousePos.row + r;
            const gridCol = mousePos.col + c;
            const cell = row[c];
            if (cell && typeof cell === 'object' && cell.color) {
              const colorIdx = colorMap[cell.color] ?? 0;
              grid.set_draw_color(colorIdx);
              grid.set_cell(gridRow, gridCol, true);
              newSelected.push({ type: 'cell', row: gridRow, col: gridCol });
            }
          }
        }
      }

      if (newSelected.length > 0) {
        set({ selectedItems: newSelected });
      }
      grid.render();
      get().renderSelection();
    } catch {
      // Ignore parse errors while typing
    }
  },

  importTensor: (tensor) => {
    const { grid, mousePos } = get();
    if (!grid || !tensor.trim()) return;

    try {
      let cleaned = tensor.trim();
      if (cleaned.startsWith('tensor(')) {
        cleaned = cleaned.slice(7);
        if (cleaned.endsWith(')')) {
          cleaned = cleaned.slice(0, -1);
        }
      }

      const parsed = JSON.parse(cleaned);
      if (!Array.isArray(parsed)) return;

      const newSelected: SelectedItem[] = [];

      grid.set_draw_color(0); // Black for tensor import

      for (let r = 0; r < parsed.length; r++) {
        const row = parsed[r];
        if (!Array.isArray(row)) continue;
        for (let c = 0; c < row.length; c++) {
          const gridRow = mousePos.row + r;
          const gridCol = mousePos.col + c;
          const val = Number(row[c]);
          if (val > 0.5) {
            grid.set_cell(gridRow, gridCol, true);
            newSelected.push({ type: 'cell', row: gridRow, col: gridCol });
          }
        }
      }

      if (newSelected.length > 0) {
        set({ selectedItems: newSelected });
      }
      grid.render();
      get().renderSelection();
    } catch {
      // Ignore parse errors while typing
    }
  },

  clear: () => {
    const { grid, updateOutputs } = get();
    if (!grid) return;

    // Express clear as one undoable batch: remove every rect/line (high index
    // first) and every filled cell. Undo restores the whole document.
    const edits: Edit[] = [];
    for (let i = grid.get_text_count() - 1; i >= 0; i--) {
      edits.push({ kind: 'deleteText', idx: i, text: readText(grid, i) });
    }
    for (let i = grid.get_rect_count() - 1; i >= 0; i--) {
      edits.push({ kind: 'deleteRect', idx: i, rect: readRect(grid, i) });
    }
    for (let i = grid.get_line_count() - 1; i >= 0; i--) {
      edits.push({ kind: 'deleteLine', idx: i, line: readLine(grid, i) });
    }
    // Enumerate filled cells from the sparse buffer ([row, col, color, ...]).
    const cells = grid.get_filled_cells();
    for (let i = 0; i + 2 < cells.length; i += 3) {
      const r = cells[i], c = cells[i + 1], color = cells[i + 2];
      edits.push({ kind: 'setCellState', row: r, col: c, from: { filled: true, color }, to: { filled: false, color } });
    }

    get().commitEdits(edits);
    set({ selectedItems: [] });
    updateOutputs();
  },

  // Rendering helpers
  renderSelection: () => {
    const { grid, selectedItems } = get();
    if (!grid) return;
    grid.render();

    // Highlight all selected items
    for (const item of selectedItems) {
      if (item.type === 'cell') {
        grid.highlight_cell(item.row, item.col);
      } else if (item.type === 'line') {
        grid.highlight_line(item.index);
      } else if (item.type === 'rect') {
        grid.highlight_rect(item.index);
      } else if (item.type === 'text') {
        grid.highlight_text(item.index);
      }
    }

    // Draw resize handles when exactly one line or rect is selected.
    if (selectedItems.length === 1) {
      const only = selectedItems[0];
      if (only.type === 'line') {
        const handles = getLineHandles(grid.get_line(only.index));
        for (const h of handles) grid.draw_handle(h.r, h.c);
      } else if (only.type === 'rect') {
        const handles = getRectHandles(grid.get_rect(only.index));
        for (const h of handles) grid.draw_handle(h.r, h.c);
      }
    }

    // Rotate handle floats above the whole selection (any number of items).
    if (selectedItems.length > 0 && typeof grid.draw_rotate_handle === 'function') {
      const bounds = getSelectionBoundsAll(selectedItems, grid);
      if (bounds) {
        const h = rotateHandlePoint(bounds);
        grid.draw_rotate_handle(h.r, h.c, bounds.minRow, h.c);
      }
    }
  },

  // Helper to get selected cells only
  getSelectedCells: () => {
    const { selectedItems } = get();
    return selectedItems
      .filter(i => i.type === 'cell')
      .map(i => ({ row: (i as { type: 'cell'; row: number; col: number }).row, col: (i as { type: 'cell'; row: number; col: number }).col }));
  },
}));

// Selectors for performance
export const useGrid = () => useGridStore((s) => s.grid);
export const useTool = () => useGridStore((s) => s.tool);
export const useColorIdx = () => useGridStore((s) => s.colorIdx);
export const useOutlineIdx = () => useGridStore((s) => s.outlineIdx);
export const useSelectedItems = () => useGridStore((s) => s.selectedItems);
export const useClipboard = () => useGridStore((s) => s.clipboard);
export const useJsonOutput = () => useGridStore((s) => s.jsonOutput);
export const useTensorOutput = () => useGridStore((s) => s.tensorOutput);
export const useSelectMode = () => useGridStore((s) => s.selectMode);
