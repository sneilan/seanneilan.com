import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore, type SelectedItem } from './gridStore';
import type { GridCanvasWasm } from '../types/grid';

/**
 * A faithful JS model of the Rust `GridCanvas` cell logic (src/cells.rs).
 *
 * The point of these tests is to reproduce the "squares disappear after a
 * select-drag-move" bug. The selection outlines track the *intended*
 * destinations (newSelected), but the actual grid bits are mutated in-place
 * one cell at a time, in selection-insertion order, with no scratch buffer.
 * When the move delta overlaps the selection's own footprint, a destination
 * write clobbers a not-yet-moved source (or a later read picks up a bit a
 * previous move just wrote), so filled cells are silently lost.
 */
function makeMockGrid(rows: number, cols: number): GridCanvasWasm {
  const filled: boolean[][] = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const colors: number[][] = Array.from({ length: rows }, () => new Array(cols).fill(0));

  let drawColor = 0;
  const g: Partial<GridCanvasWasm> = {
    get_cell: (r, c) => (r < rows && c < cols ? filled[r][c] : false),
    get_cell_color: (r, c) => (r < rows && c < cols && filled[r][c] ? colors[r][c] : 0),
    set_draw_color: (idx) => { drawColor = idx; },
    set_cell: (r, c, v) => { if (r < rows && c < cols) { filled[r][c] = v; if (v) colors[r][c] = drawColor; } },
    delete_cell: (r, c) => { if (r < rows && c < cols) filled[r][c] = false; },
    // Mirrors src/cells.rs move_cell exactly: clear source, then set dest.
    move_cell: (fr, fc, tr, tc) => {
      if (fr < rows && fc < cols && tr < rows && tc < cols && filled[fr][fc]) {
        const color = colors[fr][fc];
        filled[fr][fc] = false;
        filled[tr][tc] = true;
        colors[tr][tc] = color;
      }
    },
    // Rendering / highlight calls are no-ops for the test.
    render: () => {},
    highlight_cell: () => {},
    draw_selection_box: () => {},
  };
  return g as GridCanvasWasm;
}

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
  });

  it('moving two adjacent cells right by 1 keeps both filled', () => {
    const rows = 8, cols = 8;
    const grid = makeMockGrid(rows, cols);
    grid.set_cell(0, 0, true);
    grid.set_cell(0, 1, true);

    const selectedItems: SelectedItem[] = [
      { type: 'cell', row: 0, col: 0 },
      { type: 'cell', row: 0, col: 1 },
    ];

    useGridStore.setState({
      grid,
      selectedItems,
      selectMode: 'drag',
      selectDragStart: { row: 0, col: 0 },
      isSelecting: true,
    });

    // Drag start (0,0) -> end (0,1): delta = (0, +1)
    useGridStore.getState().finishDragSelection({ row: 0, col: 1 });

    // Two cells went in, two cells should remain.
    expect(countFilled(grid, rows, cols)).toBe(2);
    // Specifically the destinations (0,1) and (0,2) should both be filled.
    expect(grid.get_cell(0, 1)).toBe(true);
    expect(grid.get_cell(0, 2)).toBe(true);
  });

  it('selection outline count matches actual filled cells after move', () => {
    const rows = 8, cols = 8;
    const grid = makeMockGrid(rows, cols);
    // A 2x2 block.
    grid.set_cell(0, 0, true);
    grid.set_cell(0, 1, true);
    grid.set_cell(1, 0, true);
    grid.set_cell(1, 1, true);

    const selectedItems: SelectedItem[] = [
      { type: 'cell', row: 0, col: 0 },
      { type: 'cell', row: 0, col: 1 },
      { type: 'cell', row: 1, col: 0 },
      { type: 'cell', row: 1, col: 1 },
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
    const grid = makeMockGrid(rows, cols);
    grid.set_cell(0, 0, true);
    grid.set_cell(1, 0, true);
    grid.set_cell(2, 0, true);

    useGridStore.setState({
      grid,
      selectedItems: [
        { type: 'cell', row: 0, col: 0 },
        { type: 'cell', row: 1, col: 0 },
        { type: 'cell', row: 2, col: 0 },
      ],
      selectMode: 'drag',
      selectDragStart: { row: 0, col: 0 },
      isSelecting: true,
    });

    useGridStore.getState().finishDragSelection({ row: 1, col: 0 }); // delta (1,0)

    expect(countFilled(grid, rows, cols)).toBe(3);
  });
});
