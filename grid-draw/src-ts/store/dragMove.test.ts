import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore, type SelectedItem } from './gridStore';
import type { GridCanvasWasm } from '../types/grid';
import { makeGrid } from './testGrid';

/**
 * Regression coverage for the old "squares disappear after a select-drag-move"
 * bug. In the pre-square architecture the grid bits were mutated in-place one
 * cell at a time, so a move whose delta overlapped the selection's own
 * footprint clobbered a not-yet-moved source and silently lost filled cells.
 *
 * Under the square-record architecture each drawn square is ONE atomic,
 * index-stable record; a drag-move emits one moveSquare edit per selected
 * square (identity preserved), so overlapping moves can never clobber. These
 * tests pin that: the count of records — and of selection outlines — is
 * conserved across moves that overlap their own footprint.
 */
function countFilled(grid: GridCanvasWasm, rows: number, cols: number): number {
  let n = 0;
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) if (grid.get_cell(r, c)) n++;
  return n;
}

describe('select-drag-move: squares should not disappear', () => {
  beforeEach(() => {
    // Reset relevant store state between tests.
    useGridStore.setState({
      grid: null,
      selectedItems: [],
      selectMode: null,
      selectDragStart: null,
      isSelecting: false,
    });
    useGridStore.getState().resetHistory();
  });

  it('moving two adjacent squares right by 1 keeps both records', () => {
    const rows = 8, cols = 8;
    // Two adjacent unit squares.
    const { grid } = makeGrid({ squares: [[0, 0, 0, 1], [0, 1, 0, 1]] });

    const selectedItems: SelectedItem[] = [
      { type: 'cell', index: 0 },
      { type: 'cell', index: 1 },
    ];

    useGridStore.setState({
      grid,
      selectedItems,
      selectMode: 'drag',
      selectDragStart: { row: 0, col: 0 },
      isSelecting: true,
    });

    // Drag start (0,0) -> end (0,1): delta = (0, +1). Square 0's destination
    // (0,1) overlaps square 1's source, but records are atomic so both survive.
    useGridStore.getState().finishDragSelection({ row: 0, col: 1 });

    // Two squares went in, two squares should remain.
    expect(countFilled(grid, rows, cols)).toBe(2);
    // Specifically the destinations (0,1) and (0,2) should both be filled.
    expect(grid.get_cell(0, 1)).toBe(true);
    expect(grid.get_cell(0, 2)).toBe(true);
  });

  it('selection outline count matches actual filled squares after move', () => {
    const rows = 8, cols = 8;
    // A 2x2 block of unit squares.
    const { grid } = makeGrid({ squares: [[0, 0, 0, 1], [0, 1, 0, 1], [1, 0, 0, 1], [1, 1, 0, 1]] });

    const selectedItems: SelectedItem[] = [
      { type: 'cell', index: 0 },
      { type: 'cell', index: 1 },
      { type: 'cell', index: 2 },
      { type: 'cell', index: 3 },
    ];

    useGridStore.setState({
      grid,
      selectedItems,
      selectMode: 'drag',
      selectDragStart: { row: 0, col: 0 },
      isSelecting: true,
    });

    // Move the block down-right by (1,1) -> overlaps its own footprint.
    useGridStore.getState().finishDragSelection({ row: 1, col: 1 });

    const outlineCount = useGridStore.getState().selectedItems.length;
    const actualFilled = countFilled(grid, rows, cols);

    // The number of selection outlines must equal the number of real squares.
    expect(actualFilled).toBe(outlineCount);
    expect(actualFilled).toBe(4);
  });

  it('moving down by 1 (vertical overlap) keeps a column intact', () => {
    const rows = 8, cols = 8;
    const { grid } = makeGrid({ squares: [[0, 0, 0, 1], [1, 0, 0, 1], [2, 0, 0, 1]] });

    useGridStore.setState({
      grid,
      selectedItems: [
        { type: 'cell', index: 0 },
        { type: 'cell', index: 1 },
        { type: 'cell', index: 2 },
      ],
      selectMode: 'drag',
      selectDragStart: { row: 0, col: 0 },
      isSelecting: true,
    });

    useGridStore.getState().finishDragSelection({ row: 1, col: 0 }); // delta (1,0)

    expect(countFilled(grid, rows, cols)).toBe(3);
  });
});
