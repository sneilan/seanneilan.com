import { create } from 'zustand';
import type { GridCanvasWasm } from '../types/grid';
import {
  getSelectionBounds,
  type Cell,
} from '../utils/selection';

// Types
export type DrawTool = 'draw' | 'line' | 'rect' | 'select';
export type SelectMode = 'box' | 'drag' | null;

// Unified selection item type
export type SelectedItem =
  | { type: 'cell'; row: number; col: number }
  | { type: 'line'; index: number }
  | { type: 'rect'; index: number };

// Clipboard data types
type ClipboardCell = { relRow: number; relCol: number; color: number };
type ClipboardLine = { relR1: number; relC1: number; relR2: number; relC2: number; color: number };
type ClipboardRect = { relR1: number; relC1: number; relR2: number; relC2: number; color: number };

export type ClipboardData = {
  cells: ClipboardCell[];
  lines: ClipboardLine[];
  rects: ClipboardRect[];
} | null;

type GridState = {
  // Grid reference (set after WASM loads)
  grid: GridCanvasWasm | null;
  gridSize: { rows: number; cols: number };

  // Drawing state
  tool: DrawTool;
  colorIdx: number;
  isDrawing: boolean;
  drawMode: boolean; // true = drawing, false = erasing
  lineStart: Cell | null;
  rectStart: Cell | null;

  // Selection state - now unified
  selectedItems: SelectedItem[];
  clipboard: ClipboardData;
  mousePos: Cell;
  selectMode: SelectMode;
  selectBoxStart: Cell | null;
  selectDragStart: Cell | null;
  isSelecting: boolean;
  previousSelection: SelectedItem[];

  // Output state
  jsonOutput: string;
  tensorOutput: string;
};

type GridActions = {
  // Grid actions
  setGrid: (grid: GridCanvasWasm | null) => void;
  setGridSize: (size: { rows: number; cols: number }) => void;

  // Drawing actions
  setTool: (tool: DrawTool) => void;
  setColorIdx: (idx: number) => void;
  startDrawing: (mode: boolean) => void;
  stopDrawing: () => void;
  startLine: (cell: Cell) => void;
  finishLine: () => void;
  startRect: (cell: Cell) => void;
  finishRect: () => void;

  // Selection actions
  setSelectedItems: (items: SelectedItem[]) => void;
  addItemToSelection: (item: SelectedItem) => void;
  removeItemFromSelection: (item: SelectedItem) => void;
  clearSelection: () => void;
  startBoxSelection: (cell: Cell, additive: boolean) => void;
  updateBoxSelection: (currentCell: Cell) => void;
  finishBoxSelection: (endCell: Cell) => void;
  cancelBoxSelection: () => void;
  startDragSelection: (cell: Cell) => void;
  finishDragSelection: (endCell: Cell) => void;
  cancelDragSelection: () => void;
  setMousePos: (cell: Cell) => void;

  // Hit testing for shapes
  hitTestShapes: (x: number, y: number) => SelectedItem | null;

  // Clipboard actions
  copy: () => void;
  paste: () => void;
  deleteSelected: () => void;

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
    }
  }

  return minRow === Infinity ? null : { minRow, minCol, maxRow, maxCol };
}

// Get the bounding box origin for shapes (for copy/paste)
function getSelectionOrigin(items: SelectedItem[], grid: GridCanvasWasm): { minRow: number; minCol: number } | null {
  const bounds = getSelectionBoundsAll(items, grid);
  return bounds ? { minRow: bounds.minRow, minCol: bounds.minCol } : null;
}

export const useGridStore = create<GridStore>((set, get) => ({
  // Initial state
  grid: null,
  gridSize: { rows: 10, cols: 10 },

  tool: 'draw',
  colorIdx: 0,
  isDrawing: false,
  drawMode: false,
  lineStart: null,
  rectStart: null,

  selectedItems: [],
  clipboard: null,
  mousePos: { row: 0, col: 0 },
  selectMode: null,
  selectBoxStart: null,
  selectDragStart: null,
  isSelecting: false,
  previousSelection: [],

  jsonOutput: '',
  tensorOutput: '',

  // Grid actions
  setGrid: (grid) => set({ grid }),
  setGridSize: (gridSize) => set({ gridSize }),

  // Drawing actions
  setTool: (tool) => set({ tool }),
  setColorIdx: (idx) => set({ colorIdx: idx }),
  startDrawing: (mode) => set({ isDrawing: true, drawMode: mode }),
  stopDrawing: () => set({ isDrawing: false }),
  startLine: (cell) => set({ lineStart: cell, isDrawing: true }),
  finishLine: () => set({ lineStart: null, isDrawing: false }),
  startRect: (cell) => set({ rectStart: cell, isDrawing: true }),
  finishRect: () => set({ rectStart: null, isDrawing: false }),

  // Selection actions
  setSelectedItems: (items) => {
    set({ selectedItems: items });
    setTimeout(() => get().updateOutputs(), 0);
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

    const rows = grid.get_rows();
    const cols = grid.get_cols();

    // Collect all items in the box
    const boxItems: SelectedItem[] = [];

    // Get filled cells in box
    for (let r = r1; r <= r2 && r < rows; r++) {
      for (let c = c1; c <= c2 && c < cols; c++) {
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

  startDragSelection: (cell) => {
    set({
      selectMode: 'drag',
      selectDragStart: cell,
      isSelecting: true,
    });
  },

  finishDragSelection: (endCell) => {
    const { grid, selectDragStart, selectedItems, updateOutputs } = get();
    if (!grid || !selectDragStart || selectedItems.length === 0) {
      set({ selectMode: null, selectDragStart: null, isSelecting: false });
      return;
    }

    const deltaRow = endCell.row - selectDragStart.row;
    const deltaCol = endCell.col - selectDragStart.col;

    if (deltaRow !== 0 || deltaCol !== 0) {
      const rows = grid.get_rows();
      const cols = grid.get_cols();
      const newSelected: SelectedItem[] = [];

      // Move cells
      for (const item of selectedItems) {
        if (item.type === 'cell') {
          const newRow = item.row + deltaRow;
          const newCol = item.col + deltaCol;
          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
            grid.move_cell(item.row, item.col, newRow, newCol);
            newSelected.push({ type: 'cell', row: newRow, col: newCol });
          }
        }
      }

      // Move lines (indices may change if we delete, so collect first)
      const linesToMove = selectedItems.filter(i => i.type === 'line') as Array<{ type: 'line'; index: number }>;
      for (const item of linesToMove) {
        grid.move_line(item.index, deltaRow, deltaCol);
        newSelected.push({ type: 'line', index: item.index });
      }

      // Move rects
      const rectsToMove = selectedItems.filter(i => i.type === 'rect') as Array<{ type: 'rect'; index: number }>;
      for (const item of rectsToMove) {
        grid.move_rect(item.index, deltaRow, deltaCol);
        newSelected.push({ type: 'rect', index: item.index });
      }

      set({
        selectedItems: newSelected,
        selectMode: null,
        selectDragStart: null,
        isSelecting: false,
      });
      updateOutputs();
      get().renderSelection();
    } else {
      set({ selectMode: null, selectDragStart: null, isSelecting: false });
      get().renderSelection();
    }
  },

  cancelDragSelection: () => {
    set({ selectMode: null, selectDragStart: null, isSelecting: false });
    get().renderSelection();
  },

  setMousePos: (cell) => set({ mousePos: cell }),

  // Hit test for shapes - returns the topmost shape at position
  hitTestShapes: (x, y) => {
    const { grid } = get();
    if (!grid) return null;

    // Test lines first (they're thin, need priority)
    const lineIdx = grid.hit_test_line(x, y, 8.0); // 8px tolerance
    if (lineIdx >= 0) {
      return { type: 'line', index: lineIdx };
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
    if (row >= 0 && row < grid.get_rows() && col >= 0 && col < grid.get_cols()) {
      if (grid.get_cell(row, col)) {
        return { type: 'cell', row, col };
      }
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
        if (rectData.length >= 5) {
          rects.push({
            relR1: rectData[0] - origin.minRow,
            relC1: rectData[1] - origin.minCol,
            relR2: rectData[2] - origin.minRow,
            relC2: rectData[3] - origin.minCol,
            color: rectData[4],
          });
        }
      }
    }

    set({ clipboard: { cells, lines, rects } });
  },

  paste: () => {
    const { grid, clipboard, mousePos, updateOutputs } = get();
    if (!grid || !clipboard) return;

    const rows = grid.get_rows();
    const cols = grid.get_cols();
    const newSelected: SelectedItem[] = [];

    // Paste cells
    for (const cell of clipboard.cells) {
      const newRow = mousePos.row + cell.relRow;
      const newCol = mousePos.col + cell.relCol;

      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        grid.set_draw_color(cell.color);
        grid.set_cell(newRow, newCol, true);
        newSelected.push({ type: 'cell', row: newRow, col: newCol });
      }
    }

    // Paste lines
    for (const line of clipboard.lines) {
      const r1 = mousePos.row + line.relR1;
      const c1 = mousePos.col + line.relC1;
      const r2 = mousePos.row + line.relR2;
      const c2 = mousePos.col + line.relC2;

      if (r1 >= 0 && c1 >= 0 && r2 >= 0 && c2 >= 0) {
        grid.add_line(r1, c1, r2, c2, line.color);
        // The new line is at the end
        newSelected.push({ type: 'line', index: grid.get_line_count() - 1 });
      }
    }

    // Paste rects
    for (const rect of clipboard.rects) {
      const r1 = mousePos.row + rect.relR1;
      const c1 = mousePos.col + rect.relC1;
      const r2 = mousePos.row + rect.relR2;
      const c2 = mousePos.col + rect.relC2;

      if (r1 >= 0 && c1 >= 0 && r2 >= 0 && c2 >= 0) {
        grid.add_rect(r1, c1, r2, c2, rect.color);
        // The new rect is at the end
        newSelected.push({ type: 'rect', index: grid.get_rect_count() - 1 });
      }
    }

    grid.render();
    set({ selectedItems: newSelected });
    get().renderSelection();
    updateOutputs();
  },

  deleteSelected: () => {
    const { grid, selectedItems, updateOutputs } = get();
    if (!grid || selectedItems.length === 0) return;

    // Delete in reverse order of indices to avoid index shifting issues
    // First, collect indices
    const lineIndices = selectedItems
      .filter(i => i.type === 'line')
      .map(i => (i as { type: 'line'; index: number }).index)
      .sort((a, b) => b - a); // Reverse order

    const rectIndices = selectedItems
      .filter(i => i.type === 'rect')
      .map(i => (i as { type: 'rect'; index: number }).index)
      .sort((a, b) => b - a); // Reverse order

    // Delete cells
    for (const item of selectedItems) {
      if (item.type === 'cell') {
        grid.delete_cell(item.row, item.col);
      }
    }

    // Delete lines (reverse order)
    for (const idx of lineIndices) {
      grid.delete_line(idx);
    }

    // Delete rects (reverse order)
    for (const idx of rectIndices) {
      grid.delete_rect(idx);
    }

    set({ selectedItems: [] });
    grid.render();
    updateOutputs();
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

    // Tensor: still use dense 2D format (typical for ML)
    const height = bounds.maxRow - bounds.minRow + 1;
    const width = bounds.maxCol - bounds.minCol + 1;
    const tensorGrid: number[][] = Array.from({ length: height }, () => Array(width).fill(0));

    for (const cell of sparseList) {
      // Only black cells (color index 0) are 1 in tensor
      if (cell.color === '#000000') {
        tensorGrid[cell.row][cell.col] = 1;
      }
    }

    set({
      jsonOutput: JSON.stringify(sparseList, null, 2),
      tensorOutput: JSON.stringify(tensorGrid),
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

      const rows = grid.get_rows();
      const cols = grid.get_cols();
      const newSelected: SelectedItem[] = [];

      // Check if it's sparse format (array of {row, col, color} objects)
      const isSparse = parsed.length > 0 && typeof parsed[0] === 'object' && 'row' in parsed[0] && 'col' in parsed[0];

      if (isSparse) {
        // Sparse format: [{row, col, color}, ...]
        for (const cell of parsed) {
          if (typeof cell !== 'object' || cell === null) continue;
          const r = cell.row;
          const c = cell.col;
          const color = cell.color;
          if (typeof r !== 'number' || typeof c !== 'number') continue;

          const gridRow = mousePos.row + r;
          const gridCol = mousePos.col + c;
          if (gridRow >= 0 && gridRow < rows && gridCol >= 0 && gridCol < cols) {
            const colorIdx = colorMap[color] ?? 0;
            grid.set_draw_color(colorIdx);
            grid.set_cell(gridRow, gridCol, true);
            newSelected.push({ type: 'cell', row: gridRow, col: gridCol });
          }
        }
      } else {
        // Legacy 2D grid format: [[{color}, null, ...], ...]
        for (let r = 0; r < parsed.length; r++) {
          const row = parsed[r];
          if (!Array.isArray(row)) continue;
          for (let c = 0; c < row.length; c++) {
            const gridRow = mousePos.row + r;
            const gridCol = mousePos.col + c;
            if (gridRow >= rows || gridCol >= cols) continue;

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

      const rows = grid.get_rows();
      const cols = grid.get_cols();
      const newSelected: SelectedItem[] = [];

      grid.set_draw_color(0); // Black for tensor import

      for (let r = 0; r < parsed.length; r++) {
        const row = parsed[r];
        if (!Array.isArray(row)) continue;
        for (let c = 0; c < row.length; c++) {
          const gridRow = mousePos.row + r;
          const gridCol = mousePos.col + c;
          if (gridRow >= rows || gridCol >= cols) continue;

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
    grid?.clear();
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
      }
    }

    // Draw bounding box around all selected items (cells, lines, rects)
    if (selectedItems.length > 1) {
      const bounds = getSelectionBoundsAll(selectedItems, grid);
      if (bounds) {
        grid.draw_selection_box(bounds.minRow, bounds.minCol, bounds.maxRow + 1, bounds.maxCol + 1);
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
export const useSelectedItems = () => useGridStore((s) => s.selectedItems);
export const useClipboard = () => useGridStore((s) => s.clipboard);
export const useJsonOutput = () => useGridStore((s) => s.jsonOutput);
export const useTensorOutput = () => useGridStore((s) => s.tensorOutput);
export const useSelectMode = () => useGridStore((s) => s.selectMode);
