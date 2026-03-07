export type Cell = { row: number; col: number };

export type SelectionBounds = {
  minRow: number;
  maxRow: number;
  minCol: number;
  maxCol: number;
};

/**
 * Check if a cell is in the selection
 */
export function isCellInSelection(cell: Cell, selection: Cell[]): boolean {
  return selection.some(c => c.row === cell.row && c.col === cell.col);
}

/**
 * Add a cell to selection if not already present
 */
export function addCellToSelection(cell: Cell, selection: Cell[]): Cell[] {
  if (isCellInSelection(cell, selection)) {
    return selection;
  }
  return [...selection, cell];
}

/**
 * Remove a cell from selection
 */
export function removeCellFromSelection(cell: Cell, selection: Cell[]): Cell[] {
  return selection.filter(c => c.row !== cell.row || c.col !== cell.col);
}

/**
 * Toggle a cell in selection (add if not present, remove if present)
 */
export function toggleCellInSelection(cell: Cell, selection: Cell[]): Cell[] {
  if (isCellInSelection(cell, selection)) {
    return removeCellFromSelection(cell, selection);
  }
  return addCellToSelection(cell, selection);
}

/**
 * Merge two selections, avoiding duplicates
 */
export function mergeSelections(selection1: Cell[], selection2: Cell[]): Cell[] {
  const result = [...selection1];
  for (const cell of selection2) {
    if (!isCellInSelection(cell, result)) {
      result.push(cell);
    }
  }
  return result;
}

/**
 * Get bounding box of selection
 */
export function getSelectionBounds(selection: Cell[]): SelectionBounds | null {
  if (selection.length === 0) return null;

  return {
    minRow: Math.min(...selection.map(c => c.row)),
    maxRow: Math.max(...selection.map(c => c.row)),
    minCol: Math.min(...selection.map(c => c.col)),
    maxCol: Math.max(...selection.map(c => c.col)),
  };
}

/**
 * Check if a point is inside a bounding box
 */
export function isPointInBounds(row: number, col: number, bounds: SelectionBounds): boolean {
  return row >= bounds.minRow && row <= bounds.maxRow &&
         col >= bounds.minCol && col <= bounds.maxCol;
}

/**
 * Get all cells within a rectangular region
 */
export function getCellsInRect(
  r1: number, c1: number,
  r2: number, c2: number
): Cell[] {
  const minRow = Math.min(r1, r2);
  const maxRow = Math.max(r1, r2);
  const minCol = Math.min(c1, c2);
  const maxCol = Math.max(c1, c2);

  const cells: Cell[] = [];
  for (let row = minRow; row <= maxRow; row++) {
    for (let col = minCol; col <= maxCol; col++) {
      cells.push({ row, col });
    }
  }
  return cells;
}

/**
 * Move selection by delta
 */
export function moveSelection(
  selection: Cell[],
  deltaRow: number,
  deltaCol: number,
  maxRows: number,
  maxCols: number
): Cell[] {
  return selection
    .map(cell => ({
      row: cell.row + deltaRow,
      col: cell.col + deltaCol,
    }))
    .filter(cell =>
      cell.row >= 0 && cell.row < maxRows &&
      cell.col >= 0 && cell.col < maxCols
    );
}

/**
 * Filter cells to only include those that are filled (using a predicate)
 */
export function filterFilledCells(
  cells: Cell[],
  isFilled: (row: number, col: number) => boolean
): Cell[] {
  return cells.filter(cell => isFilled(cell.row, cell.col));
}
