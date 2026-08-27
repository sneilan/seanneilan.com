import type { StateCreator } from 'zustand';
import type { Edit } from '../edits/types';
import { getSelectionBounds } from '../../utils/selection';
import {
  allItems,
  getSelectionBoundsAll,
  isSelectedType,
  normalizeDesignText,
  readImage,
  readLine,
  readRect,
  readText,
  serializeSelection,
} from '../gridHelpers';
import { CELL_UNITS, type DesignActions, type GridStore, type SelectedItem } from '../types';
import { history } from './historySlice';

export const createDesignSlice: StateCreator<GridStore, [], [], DesignActions> = (set, get) => ({
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
    let imageIdx = grid.get_image_count();

    // Rescale coordinates from the design's fine-unit resolution to the current
    // one (CELL_UNITS). A design saved at this resolution → f=1; a pre-
    // subdivision whole-cell design (no `sub`) → f=CELL_UNITS.
    const f = CELL_UNITS / (design.sub ?? 1);

    // Infinite canvas: place every cell, no bounds clipping (a large design
    // opened in a small window no longer loses cells).
    for (const [r, c, color] of design.cells ?? []) {
      const gr = anchorRow + r * f;
      const gc = anchorCol + c * f;
      edits.push({
        kind: 'setCellState', row: gr, col: gc,
        from: { filled: grid.get_cell(gr, gc), color: grid.get_cell_color(gr, gc) },
        to: { filled: true, color },
      });
      newSelected.push({ type: 'cell', row: gr, col: gc });
    }
    for (const [r1, c1, r2, c2, color, width] of design.lines ?? []) {
      edits.push({ kind: 'addLine', idx: lineIdx, line: { r1: anchorRow + r1 * f, c1: anchorCol + c1 * f, r2: anchorRow + r2 * f, c2: anchorCol + c2 * f, color, width: width ?? 10 } });
      newSelected.push({ type: 'line', index: lineIdx });
      lineIdx++;
    }
    for (const [r1, c1, r2, c2, fill, outline] of design.rects ?? []) {
      edits.push({ kind: 'addRect', idx: rectIdx, rect: { r1: anchorRow + r1 * f, c1: anchorCol + c1 * f, r2: anchorRow + r2 * f, c2: anchorCol + c2 * f, fill, outline } });
      newSelected.push({ type: 'rect', index: rectIdx });
      rectIdx++;
    }
    // Texts may arrive as tuples [r,c,color,size,text] (our serialize format) or
    // as objects {r,c,color,size,text} (what a model's JSON-schema decoder emits).
    // Normalize and skip anything malformed so a stray prediction can't crash the
    // editor (this was the "[Symbol.iterator] is not iterable" Predict failure).
    for (const t of design.texts ?? []) {
      // Full frame tuple [r,c,color,size,boxW,boxH,halign,valign,text], a legacy
      // [r,c,color,size,text] tuple, or an object (a model's JSON decoder). Box
      // dims of 0 mean "auto-fit" (WASM measures). Anything malformed is skipped
      // (normalizeDesignText returns null when numeric r/c are missing).
      const o = normalizeDesignText(t);
      if (!o) continue;
      edits.push({
        kind: 'addText', idx: textIdx,
        text: {
          r: anchorRow + o.r * f, c: anchorCol + o.c * f, color: o.color ?? 0, size: o.size ?? 1,
          boxW: (o.boxW ?? 0) * f, boxH: (o.boxH ?? 0) * f, halign: o.halign ?? 0, valign: o.valign ?? 0,
          text: String(o.text ?? ''),
        },
      });
      newSelected.push({ type: 'text', index: textIdx });
      textIdx++;
    }
    // Images: [r1, c1, r2, c2, url]. Skip malformed entries so a bad design
    // can't crash the editor; the bitmap element is re-created from the URL.
    for (const im of design.images ?? []) {
      if (!Array.isArray(im) || im.length < 5) continue;
      const [r1, c1, r2, c2, url] = im;
      if (typeof url !== 'string') continue;
      edits.push({
        kind: 'addImage', idx: imageIdx,
        image: { r1: anchorRow + r1 * f, c1: anchorCol + c1 * f, r2: anchorRow + r2 * f, c2: anchorCol + c2 * f, url },
      });
      newSelected.push({ type: 'image', index: imageIdx });
      imageIdx++;
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
    const selectedCells = selectedItems.filter(isSelectedType('cell'));

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
    for (let i = grid.get_image_count() - 1; i >= 0; i--) {
      edits.push({ kind: 'deleteImage', idx: i, image: readImage(grid, i) });
    }
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
});
