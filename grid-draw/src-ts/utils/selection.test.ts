import { describe, it, expect } from 'vitest';
import {
  isCellInSelection,
  addCellToSelection,
  removeCellFromSelection,
  toggleCellInSelection,
  mergeSelections,
  getSelectionBounds,
  isPointInBounds,
  getCellsInRect,
  moveSelection,
  filterFilledCells,
  type Cell,
} from './selection';

describe('selection utilities', () => {
  describe('isCellInSelection', () => {
    it('returns true when cell is in selection', () => {
      const selection: Cell[] = [{ row: 1, col: 2 }, { row: 3, col: 4 }];
      expect(isCellInSelection({ row: 1, col: 2 }, selection)).toBe(true);
    });

    it('returns false when cell is not in selection', () => {
      const selection: Cell[] = [{ row: 1, col: 2 }, { row: 3, col: 4 }];
      expect(isCellInSelection({ row: 5, col: 6 }, selection)).toBe(false);
    });

    it('returns false for empty selection', () => {
      expect(isCellInSelection({ row: 1, col: 2 }, [])).toBe(false);
    });
  });

  describe('addCellToSelection', () => {
    it('adds cell to selection', () => {
      const selection: Cell[] = [{ row: 1, col: 2 }];
      const result = addCellToSelection({ row: 3, col: 4 }, selection);
      expect(result).toHaveLength(2);
      expect(isCellInSelection({ row: 3, col: 4 }, result)).toBe(true);
    });

    it('does not add duplicate cell', () => {
      const selection: Cell[] = [{ row: 1, col: 2 }];
      const result = addCellToSelection({ row: 1, col: 2 }, selection);
      expect(result).toHaveLength(1);
    });

    it('adds to empty selection', () => {
      const result = addCellToSelection({ row: 1, col: 2 }, []);
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({ row: 1, col: 2 });
    });
  });

  describe('removeCellFromSelection', () => {
    it('removes cell from selection', () => {
      const selection: Cell[] = [{ row: 1, col: 2 }, { row: 3, col: 4 }];
      const result = removeCellFromSelection({ row: 1, col: 2 }, selection);
      expect(result).toHaveLength(1);
      expect(isCellInSelection({ row: 1, col: 2 }, result)).toBe(false);
    });

    it('does nothing when cell not in selection', () => {
      const selection: Cell[] = [{ row: 1, col: 2 }];
      const result = removeCellFromSelection({ row: 5, col: 6 }, selection);
      expect(result).toHaveLength(1);
    });
  });

  describe('toggleCellInSelection', () => {
    it('adds cell when not in selection', () => {
      const selection: Cell[] = [{ row: 1, col: 2 }];
      const result = toggleCellInSelection({ row: 3, col: 4 }, selection);
      expect(result).toHaveLength(2);
      expect(isCellInSelection({ row: 3, col: 4 }, result)).toBe(true);
    });

    it('removes cell when already in selection', () => {
      const selection: Cell[] = [{ row: 1, col: 2 }, { row: 3, col: 4 }];
      const result = toggleCellInSelection({ row: 1, col: 2 }, selection);
      expect(result).toHaveLength(1);
      expect(isCellInSelection({ row: 1, col: 2 }, result)).toBe(false);
    });
  });

  describe('mergeSelections', () => {
    it('merges two selections without duplicates', () => {
      const selection1: Cell[] = [{ row: 1, col: 2 }, { row: 3, col: 4 }];
      const selection2: Cell[] = [{ row: 3, col: 4 }, { row: 5, col: 6 }];
      const result = mergeSelections(selection1, selection2);
      expect(result).toHaveLength(3);
      expect(isCellInSelection({ row: 1, col: 2 }, result)).toBe(true);
      expect(isCellInSelection({ row: 3, col: 4 }, result)).toBe(true);
      expect(isCellInSelection({ row: 5, col: 6 }, result)).toBe(true);
    });

    it('handles empty first selection', () => {
      const selection2: Cell[] = [{ row: 1, col: 2 }];
      const result = mergeSelections([], selection2);
      expect(result).toHaveLength(1);
    });

    it('handles empty second selection', () => {
      const selection1: Cell[] = [{ row: 1, col: 2 }];
      const result = mergeSelections(selection1, []);
      expect(result).toHaveLength(1);
    });

    it('preserves order with first selection cells first', () => {
      const selection1: Cell[] = [{ row: 1, col: 1 }];
      const selection2: Cell[] = [{ row: 2, col: 2 }];
      const result = mergeSelections(selection1, selection2);
      expect(result[0]).toEqual({ row: 1, col: 1 });
      expect(result[1]).toEqual({ row: 2, col: 2 });
    });
  });

  describe('getSelectionBounds', () => {
    it('returns correct bounds for selection', () => {
      const selection: Cell[] = [
        { row: 2, col: 3 },
        { row: 5, col: 1 },
        { row: 3, col: 7 },
      ];
      const bounds = getSelectionBounds(selection);
      expect(bounds).toEqual({
        minRow: 2,
        maxRow: 5,
        minCol: 1,
        maxCol: 7,
      });
    });

    it('returns null for empty selection', () => {
      expect(getSelectionBounds([])).toBeNull();
    });

    it('returns same bounds for single cell', () => {
      const selection: Cell[] = [{ row: 3, col: 4 }];
      const bounds = getSelectionBounds(selection);
      expect(bounds).toEqual({
        minRow: 3,
        maxRow: 3,
        minCol: 4,
        maxCol: 4,
      });
    });
  });

  describe('isPointInBounds', () => {
    const bounds = { minRow: 2, maxRow: 5, minCol: 3, maxCol: 7 };

    it('returns true for point inside bounds', () => {
      expect(isPointInBounds(3, 5, bounds)).toBe(true);
    });

    it('returns true for point on boundary', () => {
      expect(isPointInBounds(2, 3, bounds)).toBe(true);
      expect(isPointInBounds(5, 7, bounds)).toBe(true);
    });

    it('returns false for point outside bounds', () => {
      expect(isPointInBounds(1, 5, bounds)).toBe(false);
      expect(isPointInBounds(3, 8, bounds)).toBe(false);
    });
  });

  describe('getCellsInRect', () => {
    it('returns all cells in rectangle', () => {
      const cells = getCellsInRect(1, 2, 2, 3);
      expect(cells).toHaveLength(4);
      expect(cells).toContainEqual({ row: 1, col: 2 });
      expect(cells).toContainEqual({ row: 1, col: 3 });
      expect(cells).toContainEqual({ row: 2, col: 2 });
      expect(cells).toContainEqual({ row: 2, col: 3 });
    });

    it('handles reversed coordinates', () => {
      const cells = getCellsInRect(2, 3, 1, 2);
      expect(cells).toHaveLength(4);
    });

    it('returns single cell for same start and end', () => {
      const cells = getCellsInRect(1, 1, 1, 1);
      expect(cells).toHaveLength(1);
      expect(cells[0]).toEqual({ row: 1, col: 1 });
    });
  });

  describe('moveSelection', () => {
    it('moves selection by delta', () => {
      const selection: Cell[] = [{ row: 2, col: 3 }, { row: 4, col: 5 }];
      const result = moveSelection(selection, 1, 2, 10, 10);
      expect(result).toHaveLength(2);
      expect(result).toContainEqual({ row: 3, col: 5 });
      expect(result).toContainEqual({ row: 5, col: 7 });
    });

    it('filters out cells that go out of bounds', () => {
      const selection: Cell[] = [{ row: 8, col: 8 }];
      const result = moveSelection(selection, 5, 5, 10, 10);
      expect(result).toHaveLength(0);
    });

    it('handles negative deltas', () => {
      const selection: Cell[] = [{ row: 5, col: 5 }];
      const result = moveSelection(selection, -2, -3, 10, 10);
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({ row: 3, col: 2 });
    });

    it('filters cells that go negative', () => {
      const selection: Cell[] = [{ row: 1, col: 1 }];
      const result = moveSelection(selection, -5, -5, 10, 10);
      expect(result).toHaveLength(0);
    });
  });

  describe('filterFilledCells', () => {
    it('filters cells based on predicate', () => {
      const cells: Cell[] = [
        { row: 0, col: 0 },
        { row: 1, col: 1 },
        { row: 2, col: 2 },
      ];
      // Only even rows are "filled"
      const isFilled = (row: number, _col: number) => row % 2 === 0;
      const result = filterFilledCells(cells, isFilled);
      expect(result).toHaveLength(2);
      expect(result).toContainEqual({ row: 0, col: 0 });
      expect(result).toContainEqual({ row: 2, col: 2 });
    });

    it('returns empty array when no cells are filled', () => {
      const cells: Cell[] = [{ row: 1, col: 1 }];
      const isFilled = () => false;
      const result = filterFilledCells(cells, isFilled);
      expect(result).toHaveLength(0);
    });
  });

  describe('shift+selection integration scenarios', () => {
    it('shift+click adds to existing selection', () => {
      // User has selected some cells
      let selection: Cell[] = [{ row: 1, col: 1 }, { row: 2, col: 2 }];

      // User shift+clicks on a new cell
      const newCell = { row: 5, col: 5 };
      selection = addCellToSelection(newCell, selection);

      expect(selection).toHaveLength(3);
      expect(isCellInSelection({ row: 1, col: 1 }, selection)).toBe(true);
      expect(isCellInSelection({ row: 2, col: 2 }, selection)).toBe(true);
      expect(isCellInSelection({ row: 5, col: 5 }, selection)).toBe(true);
    });

    it('shift+box selection merges with existing selection', () => {
      // User has selected some cells
      const existingSelection: Cell[] = [{ row: 0, col: 0 }, { row: 1, col: 1 }];

      // User shift+drags a box from (3,3) to (4,4)
      const boxCells = getCellsInRect(3, 3, 4, 4);

      // Filter to only filled cells (simulate grid check)
      const filledCells = filterFilledCells(boxCells, (row, col) => {
        // Simulate: cells at (3,3) and (4,4) are filled
        return (row === 3 && col === 3) || (row === 4 && col === 4);
      });

      // Merge selections
      const result = mergeSelections(existingSelection, filledCells);

      expect(result).toHaveLength(4);
      expect(isCellInSelection({ row: 0, col: 0 }, result)).toBe(true);
      expect(isCellInSelection({ row: 1, col: 1 }, result)).toBe(true);
      expect(isCellInSelection({ row: 3, col: 3 }, result)).toBe(true);
      expect(isCellInSelection({ row: 4, col: 4 }, result)).toBe(true);
    });

    it('shift+click on selected cell removes it', () => {
      let selection: Cell[] = [{ row: 1, col: 1 }, { row: 2, col: 2 }, { row: 3, col: 3 }];

      // User shift+clicks on already selected cell
      selection = toggleCellInSelection({ row: 2, col: 2 }, selection);

      expect(selection).toHaveLength(2);
      expect(isCellInSelection({ row: 1, col: 1 }, selection)).toBe(true);
      expect(isCellInSelection({ row: 2, col: 2 }, selection)).toBe(false);
      expect(isCellInSelection({ row: 3, col: 3 }, selection)).toBe(true);
    });

    it('clicking without shift replaces selection', () => {
      // Simulate: user has existing selection
      const existingSelection: Cell[] = [{ row: 1, col: 1 }, { row: 2, col: 2 }];

      // Without shift, we just replace (this is what the component does)
      // Note: replace is not a utility function - component just sets new array
      const newSelection: Cell[] = [{ row: 5, col: 5 }];

      // New selection should only have the clicked cell
      expect(newSelection).toHaveLength(1);
      expect(isCellInSelection({ row: 5, col: 5 }, newSelection)).toBe(true);

      // Old selection cells should not be in new selection
      expect(isCellInSelection({ row: 1, col: 1 }, newSelection)).toBe(false);
      expect(isCellInSelection(existingSelection[0], newSelection)).toBe(false);
    });

    it('handles random scattered selection with shift+add', () => {
      // Start with random scattered cells
      let selection: Cell[] = [
        { row: 2, col: 8 },
        { row: 7, col: 3 },
        { row: 4, col: 5 },
      ];

      // Add more cells with shift+click
      selection = addCellToSelection({ row: 9, col: 1 }, selection);
      selection = addCellToSelection({ row: 0, col: 9 }, selection);

      expect(selection).toHaveLength(5);

      // Check bounds include all scattered cells
      const bounds = getSelectionBounds(selection);
      expect(bounds).toEqual({
        minRow: 0,
        maxRow: 9,
        minCol: 1,
        maxCol: 9,
      });
    });
  });
});
