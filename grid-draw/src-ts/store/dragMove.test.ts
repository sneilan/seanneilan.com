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
    // Reset relevant store state between tests. These tests move unit squares
    // by single fine units, which is a 1/8-grid operation now that drag-moves
    // snap the selection to the ACTIVE grid step.
    useGridStore.setState({
      grid: null,
      selectedItems: [],
      selectMode: null,
      selectDragStart: null,
      isSelecting: false,
      subdivision: 8,
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

describe('drag-move snaps to the ACTIVE grid step', () => {
  beforeEach(() => {
    useGridStore.setState({
      grid: null,
      selectedItems: [],
      selectMode: null,
      selectDragStart: null,
      isSelecting: false,
      subdivision: 1,
    });
    useGridStore.getState().resetHistory();
  });

  it('a 1/8-drawn square dragged at the 1x grid re-aligns to the 1x lattice', () => {
    // Unit square at (3, 3) — off the 1x lattice (drawn while the grid was 1/8).
    const { grid, calls } = makeGrid({ squares: [[3, 3, 0, 1]] });
    useGridStore.setState({
      grid,
      selectedItems: [{ type: 'cell', index: 0 }],
      selectMode: 'drag',
      selectDragStart: { row: 0, col: 0 },
      isSelecting: true,
    });

    // Mouse moved one whole cell down-right (raw delta 8,8). The square must
    // land ON the 1x lattice at (8, 8), so the applied delta is (5, 5).
    useGridStore.getState().finishDragSelection({ row: 8, col: 8 });

    expect(calls).toContainEqual(['move_square', 0, 5, 5]);
    const s = grid.get_square(0);
    expect([s[0], s[1]]).toEqual([8, 8]);
  });

  it('a group snaps by its bbox corner, preserving relative offsets', () => {
    // Two unit squares one fine unit apart, both off the 1x lattice.
    const { grid } = makeGrid({ squares: [[3, 3, 0, 1], [3, 4, 1, 1]] });
    useGridStore.setState({
      grid,
      selectedItems: [{ type: 'cell', index: 0 }, { type: 'cell', index: 1 }],
      selectMode: 'drag',
      selectDragStart: { row: 0, col: 0 },
      isSelecting: true,
    });

    useGridStore.getState().finishDragSelection({ row: 8, col: 8 });

    // bbox corner (3,3) snapped to (8,8); the neighbour keeps its +1 offset.
    const a = grid.get_square(0);
    const b = grid.get_square(1);
    expect([a[0], a[1]]).toEqual([8, 8]);
    expect([b[0], b[1]]).toEqual([8, 9]);
  });

  it('a snapped-to-zero delta is a no-op (no edits, nothing moves)', () => {
    // Square already on the 1x lattice; a sub-step wiggle must not move it.
    const { grid, calls } = makeGrid({ squares: [[8, 8, 0, 8]] });
    useGridStore.setState({
      grid,
      selectedItems: [{ type: 'cell', index: 0 }],
      selectMode: 'drag',
      selectDragStart: { row: 0, col: 0 },
      isSelecting: true,
    });

    useGridStore.getState().finishDragSelection({ row: 2, col: 2 }); // < half a step

    expect(calls.filter(c => c[0] === 'move_square')).toEqual([]);
    const s = grid.get_square(0);
    expect([s[0], s[1]]).toEqual([8, 8]);
  });
});
