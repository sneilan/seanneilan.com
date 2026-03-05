import { create } from 'zustand';
import type { GridCanvasWasm } from '../types/grid';
import {
  addCellToSelection,
  removeCellFromSelection,
  mergeSelections,
  getSelectionBounds,
  filterFilledCells,
  type Cell,
} from '../utils/selection';

// Types
export type DrawTool = 'draw' | 'line' | 'rect' | 'select';
export type SelectMode = 'box' | 'drag' | null;

export type ClipboardData = {
  cells: Array<{ relRow: number; relCol: number; color: number }>;
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

  // Selection state
  selectedCells: Cell[];
  clipboard: ClipboardData;
  mousePos: Cell;
  selectMode: SelectMode;
  selectBoxStart: Cell | null;
  selectDragStart: Cell | null;
  isSelecting: boolean;
  // For additive box selection, we need to track previous selection
  previousSelection: Cell[];

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
  setSelectedCells: (cells: Cell[]) => void;
  addToSelection: (cell: Cell) => void;
  removeFromSelection: (cell: Cell) => void;
  clearSelection: () => void;
  startBoxSelection: (cell: Cell, additive: boolean) => void;
  updateBoxSelection: (currentCell: Cell) => void;
  finishBoxSelection: (endCell: Cell) => void;
  cancelBoxSelection: () => void;
  startDragSelection: (cell: Cell) => void;
  finishDragSelection: (endCell: Cell) => void;
  cancelDragSelection: () => void;
  setMousePos: (cell: Cell) => void;

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
  renderWithBoundingBox: (cells: Cell[]) => void;
};

export type GridStore = GridState & GridActions;

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

  selectedCells: [],
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
  setSelectedCells: (cells) => {
    set({ selectedCells: cells });
    // Defer updateOutputs to avoid stale state
    setTimeout(() => get().updateOutputs(), 0);
  },

  addToSelection: (cell) => {
    const { selectedCells } = get();
    const newSelected = addCellToSelection(cell, selectedCells);
    set({ selectedCells: newSelected });
    get().renderWithBoundingBox(newSelected);
    get().updateOutputs();
  },

  removeFromSelection: (cell) => {
    const { selectedCells } = get();
    const newSelected = removeCellFromSelection(cell, selectedCells);
    set({ selectedCells: newSelected });
    get().renderWithBoundingBox(newSelected);
    get().updateOutputs();
  },

  clearSelection: () => {
    set({ selectedCells: [] });
    get().updateOutputs();
  },

  startBoxSelection: (cell, additive) => {
    const { selectedCells, grid } = get();
    const previousSelection = additive ? [...selectedCells] : [];
    set({
      selectMode: 'box',
      selectBoxStart: cell,
      isSelecting: true,
      previousSelection,
      selectedCells: additive ? selectedCells : [],
    });
    grid?.render();
  },

  updateBoxSelection: (currentCell) => {
    const { grid, selectBoxStart, previousSelection } = get();
    if (!grid || !selectBoxStart) return;
    grid.render_with_selection_box(selectBoxStart.row, selectBoxStart.col, currentCell.row, currentCell.col);
    // Highlight previously selected cells
    for (const cell of previousSelection) {
      grid.highlight_cell(cell.row, cell.col);
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

    // Get all cells in box
    const boxCells: Cell[] = [];
    for (let r = r1; r <= r2 && r < rows; r++) {
      for (let c = c1; c <= c2 && c < cols; c++) {
        boxCells.push({ row: r, col: c });
      }
    }
    const boxSelected = filterFilledCells(boxCells, (r, c) => grid.get_cell(r, c));

    // Merge with previous selection
    const newSelected = mergeSelections(previousSelection, boxSelected);

    set({
      selectedCells: newSelected,
      selectMode: null,
      selectBoxStart: null,
      isSelecting: false,
      previousSelection: [],
    });

    get().renderWithBoundingBox(newSelected);
    get().updateOutputs();
  },

  cancelBoxSelection: () => {
    const { previousSelection } = get();
    set({
      selectMode: null,
      selectBoxStart: null,
      isSelecting: false,
      selectedCells: previousSelection,
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
    const { grid, selectDragStart, selectedCells, updateOutputs } = get();
    if (!grid || !selectDragStart || selectedCells.length === 0) {
      set({ selectMode: null, selectDragStart: null, isSelecting: false });
      return;
    }

    const deltaRow = endCell.row - selectDragStart.row;
    const deltaCol = endCell.col - selectDragStart.col;

    if (deltaRow !== 0 || deltaCol !== 0) {
      const rows = grid.get_rows();
      const cols = grid.get_cols();
      const newSelected: Cell[] = [];

      for (const cell of selectedCells) {
        const newRow = cell.row + deltaRow;
        const newCol = cell.col + deltaCol;
        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
          grid.move_cell(cell.row, cell.col, newRow, newCol);
          newSelected.push({ row: newRow, col: newCol });
        }
      }

      set({
        selectedCells: newSelected,
        selectMode: null,
        selectDragStart: null,
        isSelecting: false,
      });
      updateOutputs();
      get().renderWithBoundingBox(newSelected);
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

  // Clipboard actions
  copy: () => {
    const { grid, selectedCells } = get();
    if (!grid || selectedCells.length === 0) return;

    const bounds = getSelectionBounds(selectedCells);
    if (!bounds) return;

    const cells = selectedCells.map(cell => ({
      relRow: cell.row - bounds.minRow,
      relCol: cell.col - bounds.minCol,
      color: grid.get_cell_color(cell.row, cell.col),
    }));

    set({ clipboard: { cells } });
  },

  paste: () => {
    const { grid, clipboard, mousePos, updateOutputs } = get();
    if (!grid || !clipboard || clipboard.cells.length === 0) return;

    const rows = grid.get_rows();
    const cols = grid.get_cols();
    const newSelected: Cell[] = [];

    for (const cell of clipboard.cells) {
      const newRow = mousePos.row + cell.relRow;
      const newCol = mousePos.col + cell.relCol;

      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        grid.set_draw_color(cell.color);
        grid.set_cell(newRow, newCol, true);
        newSelected.push({ row: newRow, col: newCol });
      }
    }

    set({ selectedCells: newSelected });
    get().renderWithBoundingBox(newSelected);
    updateOutputs();
  },

  deleteSelected: () => {
    const { grid, selectedCells, updateOutputs } = get();
    if (!grid || selectedCells.length === 0) return;

    for (const cell of selectedCells) {
      grid.delete_cell(cell.row, cell.col);
    }
    set({ selectedCells: [] });
    grid.render();
    updateOutputs();
  },

  // Output actions - now based on selection instead of data zone
  updateOutputs: () => {
    const { grid, selectedCells } = get();
    if (!grid || selectedCells.length === 0) {
      set({ jsonOutput: '', tensorOutput: '' });
      return;
    }

    const bounds = getSelectionBounds(selectedCells);
    if (!bounds) {
      set({ jsonOutput: '', tensorOutput: '' });
      return;
    }

    const height = bounds.maxRow - bounds.minRow + 1;
    const width = bounds.maxCol - bounds.minCol + 1;

    // Create 2D arrays for JSON (with colors) and tensor (binary)
    const jsonGrid: Array<Array<{ color: string } | null>> = [];
    const tensorGrid: number[][] = [];

    const colorMap = ['#000000', '#ffffff', '#cc3333', '#ffcc00', '#2266dd', '#22aa22', null];

    for (let r = 0; r < height; r++) {
      const jsonRow: Array<{ color: string } | null> = [];
      const tensorRow: number[] = [];
      for (let c = 0; c < width; c++) {
        const gridRow = bounds.minRow + r;
        const gridCol = bounds.minCol + c;
        // Check if this cell is in our selection
        const isSelected = selectedCells.some(cell => cell.row === gridRow && cell.col === gridCol);
        if (isSelected && grid.get_cell(gridRow, gridCol)) {
          const colorIdx = grid.get_cell_color(gridRow, gridCol);
          const colorHex = colorMap[colorIdx] ?? '#000000';
          jsonRow.push({ color: colorHex });
          tensorRow.push(colorIdx === 0 ? 1 : 0); // Only black cells are 1 in tensor
        } else {
          jsonRow.push(null);
          tensorRow.push(0);
        }
      }
      jsonGrid.push(jsonRow);
      tensorGrid.push(tensorRow);
    }

    set({
      jsonOutput: JSON.stringify(jsonGrid, null, 2),
      tensorOutput: JSON.stringify(tensorGrid),
    });
  },

  importJson: (json) => {
    const { grid, selectedCells } = get();
    if (!grid || !json.trim() || selectedCells.length === 0) return;

    const bounds = getSelectionBounds(selectedCells);
    if (!bounds) return;

    try {
      const parsed = JSON.parse(json);
      if (!Array.isArray(parsed)) return;

      const colorMap: Record<string, number> = {
        '#000000': 0, '#ffffff': 1, '#cc3333': 2,
        '#ffcc00': 3, '#2266dd': 4, '#22aa22': 5,
      };

      for (let r = 0; r < parsed.length; r++) {
        const row = parsed[r];
        if (!Array.isArray(row)) continue;
        for (let c = 0; c < row.length; c++) {
          const gridRow = bounds.minRow + r;
          const gridCol = bounds.minCol + c;
          if (gridRow >= grid.get_rows() || gridCol >= grid.get_cols()) continue;

          const cell = row[c];
          if (cell && typeof cell === 'object' && cell.color) {
            const colorIdx = colorMap[cell.color] ?? 0;
            grid.set_draw_color(colorIdx);
            grid.set_cell(gridRow, gridCol, true);
          } else if (cell === null) {
            grid.delete_cell(gridRow, gridCol);
          }
        }
      }
      grid.render();
      get().renderSelection();
    } catch {
      // Ignore parse errors while typing
    }
  },

  importTensor: (tensor) => {
    const { grid, selectedCells } = get();
    if (!grid || !tensor.trim() || selectedCells.length === 0) return;

    const bounds = getSelectionBounds(selectedCells);
    if (!bounds) return;

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

      grid.set_draw_color(0); // Black for tensor import

      for (let r = 0; r < parsed.length; r++) {
        const row = parsed[r];
        if (!Array.isArray(row)) continue;
        for (let c = 0; c < row.length; c++) {
          const gridRow = bounds.minRow + r;
          const gridCol = bounds.minCol + c;
          if (gridRow >= grid.get_rows() || gridCol >= grid.get_cols()) continue;

          const val = Number(row[c]);
          if (val > 0.5) {
            grid.set_cell(gridRow, gridCol, true);
          } else {
            grid.delete_cell(gridRow, gridCol);
          }
        }
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
    set({ selectedCells: [] });
    updateOutputs();
  },

  // Rendering helpers
  renderSelection: () => {
    const { grid, selectedCells } = get();
    if (!grid) return;
    grid.render();
    for (const cell of selectedCells) {
      grid.highlight_cell(cell.row, cell.col);
    }
    const bounds = getSelectionBounds(selectedCells);
    if (bounds && selectedCells.length > 1) {
      grid.draw_selection_box(bounds.minRow, bounds.minCol, bounds.maxRow + 1, bounds.maxCol + 1);
    }
  },

  renderWithBoundingBox: (cells) => {
    const { grid } = get();
    if (!grid) return;
    grid.render();
    for (const cell of cells) {
      grid.highlight_cell(cell.row, cell.col);
    }
    const bounds = getSelectionBounds(cells);
    if (bounds && cells.length > 1) {
      grid.draw_selection_box(bounds.minRow, bounds.minCol, bounds.maxRow + 1, bounds.maxCol + 1);
    }
  },
}));

// Selectors for performance (only re-render when specific state changes)
export const useGrid = () => useGridStore((s) => s.grid);
export const useTool = () => useGridStore((s) => s.tool);
export const useColorIdx = () => useGridStore((s) => s.colorIdx);
export const useSelectedCells = () => useGridStore((s) => s.selectedCells);
export const useClipboard = () => useGridStore((s) => s.clipboard);
export const useJsonOutput = () => useGridStore((s) => s.jsonOutput);
export const useTensorOutput = () => useGridStore((s) => s.tensorOutput);
export const useSelectMode = () => useGridStore((s) => s.selectMode);
