import type { GridCanvasWasm } from '../types/grid';
import type { LineData, RectData, LineGeom, RectGeom, SquareData, TextData, TextFrame, ImageData, ImageGeom } from './edits/types';
import { getLineHandles, getRectHandles, type HandlePoint } from '../utils/handles';
import { CELL_UNITS, type DesignJSON, type SelectedItem } from './types';

// --- Shape readers ----------------------------------------------------------

export function readSquare(grid: GridCanvasWasm, idx: number): SquareData {
  const a = grid.get_square(idx); // [r, c, color, size]
  return { r: a[0], c: a[1], color: a[2], size: a[3] };
}

export function readLine(grid: GridCanvasWasm, idx: number): LineData {
  const a = grid.get_line(idx);
  return { r1: a[0], c1: a[1], r2: a[2], c2: a[3], color: a[4], width: a[5] };
}

export function readRect(grid: GridCanvasWasm, idx: number): RectData {
  const a = grid.get_rect(idx);
  return { r1: a[0], c1: a[1], r2: a[2], c2: a[3], fill: a[4], outline: a[5] };
}

export function lineGeom(grid: GridCanvasWasm, idx: number): LineGeom {
  const a = grid.get_line(idx);
  return { r1: a[0], c1: a[1], r2: a[2], c2: a[3] };
}

export function rectGeom(grid: GridCanvasWasm, idx: number): RectGeom {
  const a = grid.get_rect(idx);
  return { r1: a[0], c1: a[1], r2: a[2], c2: a[3] };
}

export function textFrame(grid: GridCanvasWasm, idx: number): TextFrame {
  const a = grid.get_text(idx); // [r, c, color, boxW, boxH, ...]
  return { r: a[0], c: a[1], boxW: a[3], boxH: a[4] };
}

export function readText(grid: GridCanvasWasm, idx: number): TextData {
  const a = grid.get_text(idx); // [r, c, color, boxW, boxH, halign, valign]
  return {
    r: a[0], c: a[1], color: a[2], size: grid.get_text_size(idx),
    boxW: a[3], boxH: a[4], halign: a[5], valign: a[6], text: grid.get_text_string(idx),
  };
}

export function imageGeom(grid: GridCanvasWasm, idx: number): ImageGeom {
  const a = grid.get_image(idx); // [r1, c1, r2, c2]
  return { r1: a[0], c1: a[1], r2: a[2], c2: a[3] };
}

export function readImage(grid: GridCanvasWasm, idx: number): ImageData {
  const a = grid.get_image(idx); // [r1, c1, r2, c2]
  return { r1: a[0], c1: a[1], r2: a[2], c2: a[3], url: grid.get_image_url(idx) };
}

// --- Selection helpers ------------------------------------------------------

// Stable signature of a selection, so consecutive recolors of the SAME
// selection coalesce into one undo step (but a different selection doesn't).
// Every item type (squares included) is index-addressed, and the first letters
// of the five type names are distinct.
export function selectionSignature(items: SelectedItem[]): string {
  return items
    .map(i => `${i.type[0]}:${i.index}`)
    .sort()
    .join('|');
}

// Helper to check if two items are equal
export function itemsEqual(a: SelectedItem, b: SelectedItem): boolean {
  return a.type === b.type && a.index === b.index;
}

// Helper to check if item is in selection
export function isItemSelected(item: SelectedItem, selection: SelectedItem[]): boolean {
  return selection.some(s => itemsEqual(s, item));
}

// Helper to add item to selection (avoiding duplicates)
export function addItemToSelectionArray(item: SelectedItem, selection: SelectedItem[]): SelectedItem[] {
  if (isItemSelected(item, selection)) return selection;
  return [...selection, item];
}

// Helper to remove item from selection
export function removeItemFromSelectionArray(item: SelectedItem, selection: SelectedItem[]): SelectedItem[] {
  return selection.filter(s => !itemsEqual(s, item));
}

/** Draw the selection highlight for one item (dispatch on its kind). A square
 * is one atomic record, so it gets one outline — never a per-fine-cell lattice. */
export function highlightItem(grid: GridCanvasWasm, item: SelectedItem): void {
  if (item.type === 'cell') {
    grid.highlight_square(item.index);
  } else if (item.type === 'line') {
    grid.highlight_line(item.index);
  } else if (item.type === 'rect') {
    grid.highlight_rect(item.index);
  } else if (item.type === 'text') {
    grid.highlight_text(item.index);
  } else {
    grid.highlight_image(item.index);
  }
}

// A text frame [r, c, color, boxW, boxH, ...] as rect corners [r1,c1,r2,c2] so
// it can reuse the rect resize-handle geometry.
export function textFrameCorners(a: ArrayLike<number>): number[] {
  return [a[0], a[1], a[0] + a[4], a[1] + a[3]];
}

// Resize handles for a single selected shape: line endpoints, or the 8 box
// handles of a rect/image/text frame. Squares have none — they move, never
// resize. Shared by the press decision tree (pressSelectAt) and the hover
// affordance query so the two can't drift apart.
export function shapeHandles(grid: GridCanvasWasm, only: SelectedItem): HandlePoint[] {
  if (only.type === 'line') return getLineHandles(grid.get_line(only.index));
  if (only.type === 'rect') return getRectHandles(grid.get_rect(only.index));
  if (only.type === 'image') return getRectHandles(grid.get_image(only.index));
  if (only.type === 'text') return getRectHandles(textFrameCorners(grid.get_text(only.index)));
  return [];
}

/**
 * Type-guard factory for filtering a selection down to one variant. Because
 * `SelectedItem` is a discriminated union, a bare `items.filter(i => i.type ===
 * 'line')` still yields `SelectedItem[]`; passing this predicate instead yields
 * the correctly-narrowed subset (e.g. `Array<{ type: 'line'; index: number }>`).
 */
export function isSelectedType<T extends SelectedItem['type']>(
  type: T,
): (item: SelectedItem) => item is Extract<SelectedItem, { type: T }> {
  return (item): item is Extract<SelectedItem, { type: T }> => item.type === type;
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
      const s = grid.get_square(item.index); // [r, c, color, size]
      if (s.length >= 4) {
        // A square covers fine units [r, r+size), so its last covered unit is
        // r+size-1 (matching the old one-fine-cell convention of max = row).
        minRow = Math.min(minRow, s[0]);
        minCol = Math.min(minCol, s[1]);
        maxRow = Math.max(maxRow, s[0] + s[3] - 1);
        maxCol = Math.max(maxCol, s[1] + s[3] - 1);
      }
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
      const t = grid.get_text(item.index); // [r, c, color, boxW, boxH, ...]
      if (t.length >= 5) {
        // Text occupies its frame: top-left (t[0], t[1]), size (t[4], t[3]).
        minRow = Math.min(minRow, t[0]);
        minCol = Math.min(minCol, t[1]);
        maxRow = Math.max(maxRow, t[0] + t[4]);
        maxCol = Math.max(maxCol, t[1] + t[3]);
      }
    } else if (item.type === 'image') {
      const im = grid.get_image(item.index); // [r1, c1, r2, c2] (normalized box)
      if (im.length >= 4) {
        minRow = Math.min(minRow, im[0], im[2]);
        minCol = Math.min(minCol, im[1], im[3]);
        maxRow = Math.max(maxRow, im[0], im[2]);
        maxCol = Math.max(maxCol, im[1], im[3]);
      }
    }
  }

  return minRow === Infinity ? null : { minRow, minCol, maxRow, maxCol };
}

// Get the bounding box origin for shapes (for copy/paste)
export function getSelectionOrigin(items: SelectedItem[], grid: GridCanvasWasm): { minRow: number; minCol: number } | null {
  const bounds = getSelectionBoundsAll(items, grid);
  return bounds ? { minRow: bounds.minRow, minCol: bounds.minCol } : null;
}

// Adjust a raw drag delta so the selection's bounding-box top-left lands on the
// active grid step (fine units). Moving re-aligns to the CURRENT grid: a square
// drawn at 1/8 then dragged while the grid is 1x snaps onto the 1x lattice.
// One shared anchor (the bbox corner) keeps relative layout intact.
export function snapDragDelta(
  grid: GridCanvasWasm,
  items: SelectedItem[],
  deltaRow: number,
  deltaCol: number,
  subdivision: number,
): { deltaRow: number; deltaCol: number } {
  const bounds = getSelectionBoundsAll(items, grid);
  if (!bounds) return { deltaRow, deltaCol };
  const step = CELL_UNITS / subdivision;
  const snap = (v: number) => Math.round(v / step) * step;
  return {
    deltaRow: snap(bounds.minRow + deltaRow) - bounds.minRow,
    deltaCol: snap(bounds.minCol + deltaCol) - bounds.minCol,
  };
}

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
  const texts: Array<[number, number, number, number, number, number, number, number, string]> = [];
  const images: Array<[number, number, number, number, string]> = [];

  for (const item of items) {
    if (item.type === 'cell') {
      const s = grid.get_square(item.index); // [r, c, color, size]
      cells.push([s[0] - oR, s[1] - oC, s[2], s[3]]);
    } else if (item.type === 'line') {
      const a = grid.get_line(item.index);
      lines.push([a[0] - oR, a[1] - oC, a[2] - oR, a[3] - oC, a[4], a[5]]);
    } else if (item.type === 'rect') {
      const a = grid.get_rect(item.index);
      rects.push([a[0] - oR, a[1] - oC, a[2] - oR, a[3] - oC, a[4], a[5]]);
    } else if (item.type === 'text') {
      const a = grid.get_text(item.index); // [r, c, color, boxW, boxH, halign, valign]
      texts.push([a[0] - oR, a[1] - oC, a[2], grid.get_text_size(item.index), a[3], a[4], a[5], a[6], grid.get_text_string(item.index)]);
    } else if (item.type === 'image') {
      const a = grid.get_image(item.index); // [r1, c1, r2, c2]
      images.push([a[0] - oR, a[1] - oC, a[2] - oR, a[3] - oC, grid.get_image_url(item.index)]);
    }
  }

  // Cells stay in index order — that IS the z-order, and overlapping squares
  // must reload with the same square on top (no row-major sort).
  return {
    w: maxCol - oC + 1,
    h: maxRow - oR + 1,
    cells,
    lines,
    rects,
    texts,
    images,
    sub: CELL_UNITS,
  };
}

// --- DesignJSON normalization -----------------------------------------------

/** A single text entry from a DesignJSON, normalized to an object. `text` is
 * left `unknown` (a stray prediction may put anything there) and coerced with
 * `String(...)` at the call site; numeric fields are optional and defaulted. */
export type DesignTextEntry = {
  r: number; c: number;
  color?: number; size?: number;
  boxW?: number; boxH?: number; halign?: number; valign?: number;
  text?: unknown;
};

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null;
}

function isUnknownArray(v: unknown): v is unknown[] {
  return Array.isArray(v);
}

/** Coerce a value to a number, or drop it (so a later `?? default` applies). */
function asNum(v: unknown): number | undefined {
  return typeof v === 'number' ? v : undefined;
}

/**
 * Normalize one text entry from a DesignJSON into an object with numeric coords.
 * Accepts the full frame tuple [r,c,color,size,boxW,boxH,halign,valign,text],
 * the legacy [r,c,color,size,text] tuple, or the loose object a model's JSON
 * decoder emits. Returns null for anything missing numeric r/c so a malformed
 * prediction is skipped rather than crashing the editor.
 */
export function normalizeDesignText(t: unknown): DesignTextEntry | null {
  if (isUnknownArray(t)) {
    const r = t[0];
    const c = t[1];
    if (typeof r !== 'number' || typeof c !== 'number') return null;
    if (t.length >= 9) {
      return {
        r, c, color: asNum(t[2]), size: asNum(t[3]),
        boxW: asNum(t[4]), boxH: asNum(t[5]), halign: asNum(t[6]), valign: asNum(t[7]),
        text: t[8],
      };
    }
    return { r, c, color: asNum(t[2]), size: asNum(t[3]), text: t[4] };
  }
  if (isRecord(t)) {
    if (typeof t.r !== 'number' || typeof t.c !== 'number') return null;
    return {
      r: t.r, c: t.c, color: asNum(t.color), size: asNum(t.size),
      boxW: asNum(t.boxW), boxH: asNum(t.boxH), halign: asNum(t.halign), valign: asNum(t.valign),
      text: t.text,
    };
  }
  return null;
}

// --- Rotation math ----------------------------------------------------------

/**
 * Number of clockwise quarter-turns (0..3) a free pointer rotation snaps to.
 * `theta` is the signed angle dragged from the gesture's start direction.
 */
export function snapQuarterTurns(theta: number): number {
  return ((Math.round(theta / (Math.PI / 2)) % 4) + 4) % 4;
}

/**
 * Apply `k` clockwise quarter-turns to a grid coordinate about an integer cell
 * center (icr, icc). One turn: (r,c) → (icr+(c-icc), icc-(r-icr)). Integer in,
 * integer out, so 90° steps map cells→cells exactly (lossless).
 */
export function rotateQuarter(r: number, c: number, k: number, icr: number, icc: number): { r: number; c: number } {
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

/**
 * Quarter-turn a square BLOCK (top-left r,c + size) about (icr, icc): rotate
 * two opposite corners and take the min — the block stays an axis-aligned
 * square of the same size, so only its top-left moves.
 */
export function rotateSquareQuarter(
  r: number, c: number, size: number, k: number, icr: number, icc: number,
): { r: number; c: number } {
  const a = rotateQuarter(r, c, k, icr, icc);
  const b = rotateQuarter(r + size - 1, c + size - 1, k, icr, icc);
  return { r: Math.min(a.r, b.r), c: Math.min(a.c, b.c) };
}

/** Every drawable item currently on the grid, as a selection list. */
export function allItems(grid: GridCanvasWasm): SelectedItem[] {
  const items: SelectedItem[] = [];
  for (let i = 0; i < grid.get_square_count(); i++) items.push({ type: 'cell', index: i });
  for (let i = 0; i < grid.get_line_count(); i++) items.push({ type: 'line', index: i });
  for (let i = 0; i < grid.get_rect_count(); i++) items.push({ type: 'rect', index: i });
  for (let i = 0; i < grid.get_text_count(); i++) items.push({ type: 'text', index: i });
  for (let i = 0; i < grid.get_image_count(); i++) items.push({ type: 'image', index: i });
  return items;
}
