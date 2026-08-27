import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore, type SelectedItem } from './gridStore';
import type { GridCanvasWasm } from '../types/grid';
import { stubWasm } from './wasmStub';

/**
 * Exercises the rotate gesture's commit path (finishRotate). The live preview is
 * free-angle, but the committed result always snaps to a 90° multiple, rotating
 * about an integer cell center so cells/rects map exactly (lossless).
 *
 * We drive finishRotate directly with a pointer straight below the rotation
 * center (angle +π/2 from a startAngle of 0), which snaps to exactly one
 * clockwise quarter-turn.
 */
function makeMockGrid() {
  const cells = new Map<string, number>(); // "r,c" -> color index
  const rects: number[][] = []; // [r1, c1, r2, c2, fill, outline]
  let drawColor = 0;
  const g: Partial<GridCanvasWasm> = {
    get_cell_size: () => 16,
    get_cell: (r, c) => cells.has(`${r},${c}`),
    get_cell_color: (r, c) => cells.get(`${r},${c}`) ?? 0,
    set_draw_color: (i) => { drawColor = i; },
    set_cell: (r, c, v) => { if (v) cells.set(`${r},${c}`, drawColor); else cells.delete(`${r},${c}`); },
    get_line_count: () => 0,
    get_rect_count: () => rects.length,
    get_text_count: () => 0,
    get_rect: (i) => Int32Array.from(rects[i] ?? []),
    set_rect: (i, r1, c1, r2, c2) => { rects[i][0] = r1; rects[i][1] = c1; rects[i][2] = r2; rects[i][3] = c2; },
    render: () => {},
    highlight_cell: () => {},
    highlight_rect: () => {},
    draw_handle: () => {},
  };
  return { g: { ...stubWasm(), ...g }, cells, rects };
}

describe('rotate: snaps to 90° and rotates about the cell center', () => {
  beforeEach(() => {
    useGridStore.setState({
      grid: null, selectedItems: [], selectMode: null, isSelecting: false, rotateOrigin: null,
    });
  });

  it('rotates a 3-cell cluster one quarter-turn clockwise', () => {
    const { g, cells } = makeMockGrid();
    g.set_cell(0, 1, true);
    g.set_cell(2, 1, true);
    g.set_cell(1, 0, true);
    const selectedItems: SelectedItem[] = [
      { type: 'cell', row: 0, col: 1 },
      { type: 'cell', row: 2, col: 1 },
      { type: 'cell', row: 1, col: 0 },
    ];
    // center: cols 0..1 -> 0.5*16=8, rows 0..2 -> 1*16=16.
    useGridStore.setState({ grid: g, selectedItems, selectMode: 'rotate', isSelecting: true, rotateOrigin: { cx: 8, cy: 16, startAngle: 0 } });
    useGridStore.getState().resetHistory();

    useGridStore.getState().finishRotate(8, 116); // straight down -> +90° CW

    // Integer center is (icr=1, icc=1): (0,1)->(0,1)? recompute per formula.
    // (0,1)->(1,2); (2,1)->(1,0); (1,0)->(0,1).
    expect(cells.size).toBe(3);
    expect(cells.has('1,2')).toBe(true);
    expect(cells.has('1,0')).toBe(true);
    expect(cells.has('0,1')).toBe(true);
    // Selection follows the rotated cells.
    expect(useGridStore.getState().selectedItems.length).toBe(3);
  });

  it('a quarter-turn is undoable back to the original cells', () => {
    const { g, cells } = makeMockGrid();
    g.set_cell(0, 0, true);
    g.set_cell(0, 1, true);
    g.set_cell(0, 2, true);
    const before = new Set(cells.keys());
    const selectedItems: SelectedItem[] = [
      { type: 'cell', row: 0, col: 0 },
      { type: 'cell', row: 0, col: 1 },
      { type: 'cell', row: 0, col: 2 },
    ];
    useGridStore.setState({ grid: g, selectedItems, selectMode: 'rotate', isSelecting: true, rotateOrigin: { cx: 16, cy: 0, startAngle: 0 } });
    useGridStore.getState().resetHistory();

    useGridStore.getState().finishRotate(16, 100); // +90° CW
    expect(new Set(cells.keys())).not.toEqual(before);

    useGridStore.getState().undo();
    expect(new Set(cells.keys())).toEqual(before);
    expect(cells.size).toBe(3);
  });

  it('rotates a rect one quarter-turn clockwise (corners swap about center)', () => {
    const { g, rects } = makeMockGrid();
    rects.push([1, 1, 3, 4, 0, 0]); // r1,c1,r2,c2,fill,outline
    const selectedItems: SelectedItem[] = [{ type: 'rect', index: 0 }];
    // center: cols 1..4 -> 2.5*16=40, rows 1..3 -> 2*16=32.
    useGridStore.setState({ grid: g, selectedItems, selectMode: 'rotate', isSelecting: true, rotateOrigin: { cx: 40, cy: 32, startAngle: 0 } });
    useGridStore.getState().resetHistory();

    useGridStore.getState().finishRotate(40, 132); // +90° CW

    // icr=2, icc=3: (1,1)->(0,4); (3,4)->(3,2).
    expect(rects[0].slice(0, 4)).toEqual([0, 4, 3, 2]);
  });

  it('a near-zero drag snaps to 0° and changes nothing', () => {
    const { g, cells } = makeMockGrid();
    g.set_cell(0, 0, true);
    g.set_cell(0, 1, true);
    const before = new Set(cells.keys());
    const selectedItems: SelectedItem[] = [
      { type: 'cell', row: 0, col: 0 },
      { type: 'cell', row: 0, col: 1 },
    ];
    useGridStore.setState({ grid: g, selectedItems, selectMode: 'rotate', isSelecting: true, rotateOrigin: { cx: 8, cy: 0, startAngle: 0 } });
    useGridStore.getState().resetHistory();

    // Pointer essentially along the start direction -> theta ~ 0 -> k = 0.
    useGridStore.getState().finishRotate(108, 0);
    expect(new Set(cells.keys())).toEqual(before);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });
});
