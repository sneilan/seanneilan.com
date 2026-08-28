import type { StateCreator } from 'zustand';
import type { Edit } from '../edits/types';
import { selectionSignature } from '../gridHelpers';
import { CELL_UNITS, SUBDIVISIONS, widthToTenths, type GridStore, type ToolActions } from '../types';
import { history } from './historySlice';

export const createToolSlice: StateCreator<GridStore, [], [], ToolActions> = (set, get) => ({
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
    // Recolor the fill of every selected square/rect and the stroke of every line.
    const edits: Edit[] = [];
    for (const item of selectedItems) {
      if (item.type === 'cell') {
        edits.push({ kind: 'recolorSquare', idx: item.index, from: grid.get_square(item.index)[2], to: idx });
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
    const { grid, selectedItems, textEdit, colorIdx } = get();
    // If text is actively being typed, resize it live so the in-progress text
    // reflows to the new size (the preview is re-rendered, not committed).
    if (textEdit) {
      const next = { ...textEdit, size };
      set({ textEdit: next });
      grid?.render_text_preview(next.row, next.col, colorIdx, next.size, next.text);
      return;
    }
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

  setLineWidth: (width) => set({ lineWidth: width }),

  pickLineWidth: (width) => {
    set({ lineWidth: width });
    const { grid, selectedItems } = get();
    if (!grid) return;
    // Keep the WASM "new line" width in sync so the drag preview shows the pick.
    grid.set_draw_line_width(widthToTenths(width));
    if (selectedItems.length === 0) return;
    // Restyle every selected line, like recolor/resizeText do for their kinds.
    const to = widthToTenths(width);
    const edits: Edit[] = [];
    for (const item of selectedItems) {
      if (item.type === 'line') {
        edits.push({ kind: 'resizeLine', idx: item.index, from: grid.get_line(item.index)[5], to });
      }
    }
    if (edits.length === 0) return;
    get().commitEdits(edits, { coalesceKey: `lineWidth:${selectionSignature(selectedItems)}` });
    get().renderSelection();
  },

  pickTextAlign: (halign, valign) => {
    const { grid, selectedItems, textEdit } = get();
    // Text being typed: remember the pick so the commit carries it. (Alignment
    // has no visible effect until the auto-fit box is resized, so no preview.)
    if (textEdit) {
      set({ textEdit: { ...textEdit, halign: halign ?? textEdit.halign, valign: valign ?? textEdit.valign } });
      return;
    }
    if (!grid || selectedItems.length === 0) return;
    const edits: Edit[] = [];
    for (const item of selectedItems) {
      if (item.type === 'text') {
        const t = grid.get_text(item.index); // [r, c, color, boxW, boxH, halign, valign]
        edits.push({
          kind: 'alignText', idx: item.index,
          from: { halign: t[5], valign: t[6] },
          to: { halign: halign ?? t[5], valign: valign ?? t[6] },
        });
      }
    }
    if (edits.length === 0) return;
    get().commitEdits(edits, { coalesceKey: `align:${selectionSignature(selectedItems)}` });
    get().renderSelection();
  },

  setSubdivision: (level) => {
    const lvl = SUBDIVISIONS.includes(level) ? level : 1;
    set({ subdivision: lvl });
    const { grid } = get();
    grid?.set_subdivision(lvl); // redraws the sub-grid
  },

  cycleSubdivision: () => {
    const cur = get().subdivision;
    const next = SUBDIVISIONS[(SUBDIVISIONS.indexOf(cur) + 1) % SUBDIVISIONS.length];
    get().setSubdivision(next);
  },

  beginTextEdit: (cell) => {
    // Starting a new text commits any text already being typed.
    if (get().textEdit) get().commitTextEdit();
    const { grid, colorIdx, textSize } = get();
    // The text frame's top-left is the clicked cell, so a 1-cell text fills it.
    set({ textEdit: { row: cell.row, col: cell.col, size: textSize, text: '', halign: 0, valign: 0 }, selectedItems: [] });
    if (grid) grid.render_text_preview(cell.row, cell.col, colorIdx, textSize, '');
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
      // box 0/0 → WASM auto-fits the frame to the text; align picked while
      // typing takes effect once the box is resized.
      text: { r: textEdit.row, c: textEdit.col, color: colorIdx, size: textEdit.size, boxW: 0, boxH: 0, halign: textEdit.halign, valign: textEdit.valign, text: textEdit.text },
    }]);
    grid.render();
  },

  cancelTextEdit: () => {
    const { grid } = get();
    set({ textEdit: null });
    grid?.render();
  },

  // --- Drawing commits (called by the canvas component) ---------------------

  beginDrawStroke: () => {
    history.beginBatch();
  },

  drawCellAt: (row, col, filled) => {
    const { grid, colorIdx, subdivision } = get();
    if (!grid) return;
    // ONE atomic square record per drawn square, at the resolution it was drawn
    // (1x = CELL_UNITS fine units per side, ½ = half that, ...). (row, col) is
    // the block's snapped top-left.
    const size = CELL_UNITS / subdivision;
    if (filled && colorIdx < 6) {
      // Re-drawing an existing exact-size block recolors it in place (a drag
      // over the same block is a no-op); anything else stacks a new square on
      // top — squares are atomic, they never expand into or clobber others.
      const covering = grid.squares_in_box(row, col, row + size - 1, col + size - 1);
      for (let i = covering.length - 1; i >= 0; i--) {
        const s = grid.get_square(covering[i]);
        if (s[0] === row && s[1] === col && s[3] === size) {
          if (s[2] !== colorIdx) {
            get().commitEdits([{ kind: 'recolorSquare', idx: covering[i], from: s[2], to: colorIdx }]);
          }
          return;
        }
      }
      get().commitEdits([{
        kind: 'addSquare', idx: grid.get_square_count(),
        square: { r: row, c: col, color: colorIdx, size },
      }]);
    } else {
      // Erase: remove every WHOLE square the eraser block touches (squares are
      // atomic — they never split). High-index-first keeps indices valid.
      const hits = grid.squares_in_box(row, col, row + size - 1, col + size - 1);
      const edits: Edit[] = [];
      for (let i = hits.length - 1; i >= 0; i--) {
        const idx = hits[i];
        const s = grid.get_square(idx);
        edits.push({ kind: 'deleteSquare', idx, square: { r: s[0], c: s[1], color: s[2], size: s[3] } });
      }
      if (edits.length > 0) get().commitEdits(edits);
    }
  },

  endDrawStroke: () => {
    history.endBatch();
    set({ historyTick: get().historyTick + 1 });
    get().updateOutputs();
  },

  commitLine: (r1, c1, r2, c2) => {
    const { grid, colorIdx, lineWidth } = get();
    if (!grid) return;
    get().commitEdits([{ kind: 'addLine', idx: grid.get_line_count(), line: { r1, c1, r2, c2, color: colorIdx, width: widthToTenths(lineWidth) } }]);
    get().updateOutputs();
  },

  commitRect: (r1, c1, r2, c2) => {
    const { grid, colorIdx, outlineIdx } = get();
    if (!grid) return;
    get().commitEdits([{ kind: 'addRect', idx: grid.get_rect_count(), rect: { r1, c1, r2, c2, fill: colorIdx, outline: outlineIdx } }]);
    get().updateOutputs();
  },

  placeImage: (url, box) => {
    const { grid } = get();
    if (!grid) return;
    if (get().textEdit) get().commitTextEdit();
    const idx = grid.get_image_count();
    get().commitEdits([{ kind: 'addImage', idx, image: { r1: box.r1, c1: box.c1, r2: box.r2, c2: box.c2, url } }]);
    // Select the new image with the select tool so it's immediately movable.
    set({ tool: 'select', selectedItems: [{ type: 'image', index: idx }] });
    grid.render();
    get().renderSelection();
    get().updateOutputs();
  },
});
