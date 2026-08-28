import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore, type SelectedItem } from './gridStore';
import type { GridCanvasWasm } from '../types/grid';
import { stubWasm } from './wasmStub';

/**
 * Exercises the rotate gesture's commit path (finishRotate). The live preview is
 * free-angle, but the committed result always snaps to a 90° multiple, rotating
 * about an integer cell center so squares/rects map exactly (lossless).
 *
 * We drive finishRotate directly with a pointer straight below the rotation
 * center (angle +π/2 from a startAngle of 0), which snaps to exactly one
 * clockwise quarter-turn. A square rotates as one atomic record: its block just
 * moves to where its top-left rotates to (a same-size square, via moveSquare).
 */
const STRIDE = 4;

function makeMockGrid() {
  const squares: number[] = []; // flat [r, c, color, size, ...], insertion = z-order
  const rects: number[][] = []; // [r1, c1, r2, c2, fill, outline]
  const count = () => squares.length / STRIDE;
  const g: Partial<GridCanvasWasm> = {
    get_cell_size: () => 16,
    add_square: (r, c, color, size) => { const i = count(); squares.push(r, c, color, size); return i; },
    get_square: (i) => new Int32Array(squares.slice(i * STRIDE, i * STRIDE + STRIDE)),
    get_square_count: count,
    move_square: (i, dr, dc) => { squares[i * STRIDE] += dr; squares[i * STRIDE + 1] += dc; },
    get_line_count: () => 0,
    get_rect_count: () => rects.length,
    get_text_count: () => 0,
    get_rect: (i) => Int32Array.from(rects[i] ?? []),
    set_rect: (i, r1, c1, r2, c2) => { rects[i][0] = r1; rects[i][1] = c1; rects[i][2] = r2; rects[i][3] = c2; },
    render: () => {},
    highlight_square: () => {},
    highlight_rect: () => {},
    draw_handle: () => {},
  };
  return { g: { ...stubWasm(), ...g }, squares, rects };
}

/** The set of top-left "r,c" positions of every square record, for equality. */
function positionsOf(squares: number[]): Set<string> {
  const out = new Set<string>();
  for (let i = 0; i + STRIDE <= squares.length; i += STRIDE) out.add(`${squares[i]},${squares[i + 1]}`);
  return out;
}

describe('rotate: snaps to 90° and rotates about the cell center', () => {
  beforeEach(() => {
    useGridStore.setState({
      grid: null, selectedItems: [], selectMode: null, isSelecting: false, rotateOrigin: null,
    });
  });

  it('rotates a 3-square cluster one quarter-turn clockwise', () => {
    const { g, squares } = makeMockGrid();
    g.add_square(0, 1, 0, 1);
    g.add_square(2, 1, 0, 1);
    g.add_square(1, 0, 0, 1);
    const selectedItems: SelectedItem[] = [
      { type: 'cell', index: 0 },
      { type: 'cell', index: 1 },
      { type: 'cell', index: 2 },
    ];
    // center: cols 0..1 -> 0.5*16=8, rows 0..2 -> 1*16=16.
    useGridStore.setState({ grid: g, selectedItems, selectMode: 'rotate', isSelecting: true, rotateOrigin: { cx: 8, cy: 16, startAngle: 0 } });
    useGridStore.getState().resetHistory();

    useGridStore.getState().finishRotate(8, 116); // straight down -> +90° CW

    // Integer center (icr=1, icc=1): (0,1)->(1,2); (2,1)->(1,0); (1,0)->(0,1).
    const pos = positionsOf(squares);
    expect(pos.size).toBe(3);
    expect(pos.has('1,2')).toBe(true);
    expect(pos.has('1,0')).toBe(true);
    expect(pos.has('0,1')).toBe(true);
    // Selection follows the rotated squares.
    expect(useGridStore.getState().selectedItems.length).toBe(3);
  });

  it('a quarter-turn is undoable back to the original squares', () => {
    const { g, squares } = makeMockGrid();
    g.add_square(0, 0, 0, 1);
    g.add_square(0, 1, 0, 1);
    g.add_square(0, 2, 0, 1);
    const before = positionsOf(squares);
    const selectedItems: SelectedItem[] = [
      { type: 'cell', index: 0 },
      { type: 'cell', index: 1 },
      { type: 'cell', index: 2 },
    ];
    useGridStore.setState({ grid: g, selectedItems, selectMode: 'rotate', isSelecting: true, rotateOrigin: { cx: 16, cy: 0, startAngle: 0 } });
    useGridStore.getState().resetHistory();

    useGridStore.getState().finishRotate(16, 100); // +90° CW
    expect(positionsOf(squares)).not.toEqual(before);

    useGridStore.getState().undo();
    expect(positionsOf(squares)).toEqual(before);
    expect(squares.length / STRIDE).toBe(3);
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
    const { g, squares } = makeMockGrid();
    g.add_square(0, 0, 0, 1);
    g.add_square(0, 1, 0, 1);
    const before = positionsOf(squares);
    const selectedItems: SelectedItem[] = [
      { type: 'cell', index: 0 },
      { type: 'cell', index: 1 },
    ];
    useGridStore.setState({ grid: g, selectedItems, selectMode: 'rotate', isSelecting: true, rotateOrigin: { cx: 8, cy: 0, startAngle: 0 } });
    useGridStore.getState().resetHistory();

    // Pointer essentially along the start direction -> theta ~ 0 -> k = 0.
    useGridStore.getState().finishRotate(108, 0);
    expect(positionsOf(squares)).toEqual(before);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });
});
