import type { GridCanvasWasm } from '../../types/grid';
import type { Edit } from './types';

/**
 * Validate that an edit's target index is in range for the current document.
 * A failure means the edit log has desynced from the buffers (an undo/redo
 * bug); we throw so it surfaces in tests rather than silently no-opping inside
 * the WASM bounds checks. Skipped when the grid doesn't expose count getters
 * (e.g. minimal unit-test mocks).
 */
function assertInRange(grid: GridCanvasWasm, e: Edit): void {
  if (typeof grid.get_line_count !== 'function' || typeof grid.get_rect_count !== 'function') {
    return;
  }
  const lineCount = grid.get_line_count();
  const rectCount = grid.get_rect_count();
  const textCount = typeof grid.get_text_count === 'function' ? grid.get_text_count() : 0;
  const bad = (what: string, idx: number, max: number) => {
    if (idx < 0 || idx > max) {
      throw new RangeError(`applyEdit: ${e.kind} index ${idx} out of range (0..${max}) for ${what}`);
    }
  };
  switch (e.kind) {
    // Inserts may target one-past-the-end (append); others must hit an existing item.
    case 'addLine':
      bad('lines', e.idx, lineCount);
      break;
    case 'addRect':
      bad('rects', e.idx, rectCount);
      break;
    case 'deleteLine':
    case 'recolorLine':
    case 'resizeLine':
    case 'moveLine':
    case 'setLineGeom':
      bad('lines', e.idx, lineCount - 1);
      break;
    case 'deleteRect':
    case 'recolorRectFill':
    case 'recolorRectOutline':
    case 'moveRect':
    case 'setRectGeom':
      bad('rects', e.idx, rectCount - 1);
      break;
    case 'addText':
      bad('texts', e.idx, textCount);
      break;
    case 'deleteText':
    case 'recolorText':
    case 'resizeText':
    case 'alignText':
    case 'setTextFrame':
    case 'moveText':
      bad('texts', e.idx, textCount - 1);
      break;
  }
}

/**
 * The ONLY place in the app that calls WASM mutators. Every store action
 * produces `Edit` data and routes it through here (via History.commit), so the
 * set of mutations stays enumerable and the inverse logic lives in one spot.
 */
export function applyEdit(grid: GridCanvasWasm, e: Edit): void {
  assertInRange(grid, e);
  switch (e.kind) {
    case 'setCell':
      grid.set_cell(e.row, e.col, e.to);
      break;
    case 'setCellColor':
      grid.set_cell_color(e.row, e.col, e.to);
      break;
    case 'setCellState':
      if (e.to.filled) {
        grid.set_draw_color(e.to.color);
        grid.set_cell(e.row, e.col, true);
      } else {
        grid.set_cell(e.row, e.col, false);
      }
      break;
    case 'recolorLine':
      grid.set_line_color(e.idx, e.to);
      break;
    case 'resizeLine':
      grid.set_line_width(e.idx, e.to);
      break;
    case 'recolorRectFill':
      grid.set_rect_fill(e.idx, e.to);
      break;
    case 'recolorRectOutline':
      grid.set_rect_outline(e.idx, e.to);
      break;
    case 'moveLine':
      grid.move_line(e.idx, e.dRow, e.dCol);
      break;
    case 'moveRect':
      grid.move_rect(e.idx, e.dRow, e.dCol);
      break;
    case 'setLineGeom':
      grid.set_line(e.idx, e.to.r1, e.to.c1, e.to.r2, e.to.c2);
      break;
    case 'setRectGeom':
      grid.set_rect(e.idx, e.to.r1, e.to.c1, e.to.r2, e.to.c2);
      break;
    case 'addLine':
      grid.insert_line(e.idx, e.line.r1, e.line.c1, e.line.r2, e.line.c2, e.line.color, e.line.width);
      break;
    case 'addRect':
      grid.insert_rect(e.idx, e.rect.r1, e.rect.c1, e.rect.r2, e.rect.c2, e.rect.fill, e.rect.outline);
      break;
    case 'deleteLine':
      grid.delete_line(e.idx);
      break;
    case 'deleteRect':
      grid.delete_rect(e.idx);
      break;
    case 'recolorText':
      grid.set_text_color(e.idx, e.to);
      break;
    case 'resizeText':
      grid.set_text_size(e.idx, e.to);
      break;
    case 'moveText':
      grid.move_text(e.idx, e.dRow, e.dCol);
      break;
    case 'addText':
      grid.insert_text(e.idx, e.text.r, e.text.c, e.text.color, e.text.size, e.text.boxW, e.text.boxH, e.text.halign, e.text.valign, e.text.text);
      break;
    case 'alignText':
      grid.set_text_align(e.idx, e.to.halign, e.to.valign);
      break;
    case 'setTextFrame':
      grid.set_text_frame(e.idx, e.to.r, e.to.c, e.to.boxW, e.to.boxH);
      break;
    case 'deleteText':
      grid.delete_text(e.idx);
      break;
    case 'batch':
      // Apply the whole batch with rendering paused so the canvas paints ONCE at
      // the end, not once per child edit — the difference between a snappy and a
      // janky drag when moving many shapes. (Guarded for minimal test mocks.)
      grid.set_render_paused?.(true);
      try {
        for (const child of e.edits) applyEdit(grid, child);
      } finally {
        grid.set_render_paused?.(false);
      }
      break;
  }
}

/**
 * The exact inverse of an edit, as pure data. Swaps from/to, negates deltas,
 * turns add↔delete. A `batch` inverts its children in REVERSE order so that
 * index-shifting deletes/inserts round-trip correctly.
 */
export function invertEdit(e: Edit): Edit {
  switch (e.kind) {
    case 'setCell':
      return { ...e, from: e.to, to: e.from };
    case 'setCellColor':
      return { ...e, from: e.to, to: e.from };
    case 'setCellState':
      return { ...e, from: e.to, to: e.from };
    case 'recolorLine':
    case 'resizeLine':
    case 'recolorRectFill':
    case 'recolorRectOutline':
      return { ...e, from: e.to, to: e.from };
    case 'moveLine':
    case 'moveRect':
      return { ...e, dRow: -e.dRow, dCol: -e.dCol };
    case 'setLineGeom':
    case 'setRectGeom':
      return { ...e, from: e.to, to: e.from };
    case 'addLine':
      return { kind: 'deleteLine', idx: e.idx, line: e.line };
    case 'addRect':
      return { kind: 'deleteRect', idx: e.idx, rect: e.rect };
    case 'deleteLine':
      return { kind: 'addLine', idx: e.idx, line: e.line };
    case 'deleteRect':
      return { kind: 'addRect', idx: e.idx, rect: e.rect };
    case 'recolorText':
    case 'resizeText':
      return { ...e, from: e.to, to: e.from };
    case 'alignText':
      return { ...e, from: e.to, to: e.from };
    case 'setTextFrame':
      return { ...e, from: e.to, to: e.from };
    case 'moveText':
      return { ...e, dRow: -e.dRow, dCol: -e.dCol };
    case 'addText':
      return { kind: 'deleteText', idx: e.idx, text: e.text };
    case 'deleteText':
      return { kind: 'addText', idx: e.idx, text: e.text };
    case 'batch':
      return { kind: 'batch', edits: [...e.edits].reverse().map(invertEdit) };
  }
}

/**
 * Merge a freshly-committed edit into the previous one when they target the same
 * thing, so a rapid sequence (recolor drag, repeated nudge) collapses into a
 * single undo step. Returns the merged edit, or null if the two can't merge —
 * in which case the caller records a separate step.
 *
 * The merge keeps the EARLIER edit's `from` (the true pre-sequence state) and
 * takes the LATER edit's `to`; move edits sum their deltas. Edits must be the
 * same kind and target the same index/cell to merge.
 */
export function mergeEdits(prev: Edit, next: Edit): Edit | null {
  if (prev.kind !== next.kind) return null;

  switch (prev.kind) {
    case 'recolorLine':
    case 'resizeLine':
    case 'recolorRectFill':
    case 'recolorRectOutline':
    case 'recolorText':
    case 'resizeText':
      if (next.kind === prev.kind && prev.idx === next.idx) return { ...prev, to: next.to };
      return null;
    case 'alignText':
      if (next.kind === 'alignText' && prev.idx === next.idx) return { ...prev, to: next.to };
      return null;
    case 'setTextFrame':
      if (next.kind === 'setTextFrame' && prev.idx === next.idx) return { ...prev, to: next.to };
      return null;
    case 'setCellColor':
      if (next.kind === 'setCellColor' && prev.row === next.row && prev.col === next.col) {
        return { ...prev, to: next.to };
      }
      return null;
    case 'setCellState':
      if (next.kind === 'setCellState' && prev.row === next.row && prev.col === next.col) {
        return { ...prev, to: next.to };
      }
      return null;
    case 'setLineGeom':
    case 'setRectGeom':
      if (next.kind === prev.kind && prev.idx === next.idx) return { ...prev, to: next.to };
      return null;
    case 'moveLine':
    case 'moveRect':
    case 'moveText':
      if (next.kind === prev.kind && prev.idx === next.idx) {
        return { ...prev, dRow: prev.dRow + next.dRow, dCol: prev.dCol + next.dCol };
      }
      return null;
    case 'batch':
      // Two structurally-identical batches (same kinds/targets, same length)
      // merge element-wise — e.g. recoloring a multi-item selection repeatedly.
      if (next.kind === 'batch' && prev.edits.length === next.edits.length) {
        const merged: Edit[] = [];
        for (let i = 0; i < prev.edits.length; i++) {
          const m = mergeEdits(prev.edits[i], next.edits[i]);
          if (!m) return null;
          merged.push(m);
        }
        return { kind: 'batch', edits: merged };
      }
      return null;
    default:
      return null;
  }
}
