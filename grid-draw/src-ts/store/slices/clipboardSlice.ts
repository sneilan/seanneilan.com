import type { StateCreator } from 'zustand';
import type { Edit } from '../edits/types';
import { getSelectionOrigin, isSelectedType, readImage, readLine, readRect, readText } from '../gridHelpers';
import type {
  ClipboardCell,
  ClipboardImage,
  ClipboardLine,
  ClipboardRect,
  ClipboardText,
  ClipboardActions,
  GridStore,
  SelectedItem,
} from '../types';

export const createClipboardSlice: StateCreator<GridStore, [], [], ClipboardActions> = (set, get) => ({
  copy: () => {
    const { grid, selectedItems } = get();
    if (!grid || selectedItems.length === 0) return;

    const origin = getSelectionOrigin(selectedItems, grid);
    if (!origin) return;

    const cells: ClipboardCell[] = [];
    const lines: ClipboardLine[] = [];
    const rects: ClipboardRect[] = [];
    const texts: ClipboardText[] = [];
    const images: ClipboardImage[] = [];

    for (const item of selectedItems) {
      if (item.type === 'cell') {
        cells.push({
          relRow: item.row - origin.minRow,
          relCol: item.col - origin.minCol,
          color: grid.get_cell_color(item.row, item.col),
        });
      } else if (item.type === 'line') {
        const lineData = grid.get_line(item.index);
        if (lineData.length >= 6) {
          lines.push({
            relR1: lineData[0] - origin.minRow,
            relC1: lineData[1] - origin.minCol,
            relR2: lineData[2] - origin.minRow,
            relC2: lineData[3] - origin.minCol,
            color: lineData[4],
            width: lineData[5],
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
        const t = grid.get_text(item.index); // [r, c, color, boxW, boxH, halign, valign]
        if (t.length >= 7) {
          texts.push({
            relR: t[0] - origin.minRow,
            relC: t[1] - origin.minCol,
            color: t[2],
            size: grid.get_text_size(item.index),
            boxW: t[3], boxH: t[4], halign: t[5], valign: t[6],
            text: grid.get_text_string(item.index),
          });
        }
      } else if (item.type === 'image') {
        const a = grid.get_image(item.index); // [r1, c1, r2, c2]
        if (a.length >= 4) {
          images.push({
            relR1: a[0] - origin.minRow,
            relC1: a[1] - origin.minCol,
            relR2: a[2] - origin.minRow,
            relC2: a[3] - origin.minCol,
            url: grid.get_image_url(item.index),
          });
        }
      }
    }

    set({ clipboard: { cells, lines, rects, texts, images, originRow: origin.minRow, originCol: origin.minCol } });
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
    let imageIdx = grid.get_image_count();

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
      edits.push({ kind: 'addLine', idx: lineIdx, line: { r1, c1, r2, c2, color: line.color, width: line.width ?? 10 } });
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
      edits.push({ kind: 'addText', idx: textIdx, text: { r, c, color: t.color, size: t.size, boxW: t.boxW, boxH: t.boxH, halign: t.halign, valign: t.valign, text: t.text } });
      newSelected.push({ type: 'text', index: textIdx });
      textIdx++;
    }

    // Paste images (box + URL; the bitmap element is re-created from the URL).
    for (const im of clipboard.images ?? []) {
      edits.push({
        kind: 'addImage', idx: imageIdx,
        image: {
          r1: anchor.row + im.relR1, c1: anchor.col + im.relC1,
          r2: anchor.row + im.relR2, c2: anchor.col + im.relC2, url: im.url,
        },
      });
      newSelected.push({ type: 'image', index: imageIdx });
      imageIdx++;
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
      .filter(isSelectedType('line'))
      .map(i => i.index)
      .sort((a, b) => b - a);

    const rectIndices = selectedItems
      .filter(isSelectedType('rect'))
      .map(i => i.index)
      .sort((a, b) => b - a);

    const textIndices = selectedItems
      .filter(isSelectedType('text'))
      .map(i => i.index)
      .sort((a, b) => b - a);

    const imageIndices = selectedItems
      .filter(isSelectedType('image'))
      .map(i => i.index)
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
    for (const idx of imageIndices) {
      edits.push({ kind: 'deleteImage', idx, image: readImage(grid, idx) });
    }

    get().commitEdits(edits);
    set({ selectedItems: [] });
    grid.render();
    updateOutputs();
  },
});
