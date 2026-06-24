import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore, type SelectedItem } from './gridStore';
import type { GridCanvasWasm } from '../types/grid';

/**
 * Repro for the "giant orange selection box after copy/paste" bug.
 *
 * A rect-backed mock that records canvas draw calls, so we can assert what the
 * final paint looks like after copy()+paste(). The selection bounding box
 * (draw_selection_box) must only ever surround the actually-selected items.
 */
function makeMock(rows = 40, cols = 80) {
  // flat [r1,c1,r2,c2,fill,outline] per rect
  const rects: number[] = [];
  const draws: Array<[string, ...number[]]> = [];
  let drawColor = 0;
  const g: Partial<GridCanvasWasm> = {
    get_rows: () => rows,
    get_cols: () => cols,
    get_rect_count: () => rects.length / 6,
    get_rect: (idx) => new Uint32Array(rects.slice(idx * 6, idx * 6 + 6)),
    add_rect: (r1, c1, r2, c2, fill, outline) => { rects.push(r1, c1, r2, c2, fill, outline); },
    insert_rect: (idx, r1, c1, r2, c2, fill, outline) => { rects.splice(idx * 6, 0, r1, c1, r2, c2, fill, outline); },
    get_line_count: () => 0,
    get_text_count: () => 0,
    set_draw_color: (c) => { drawColor = c; },
    set_cell: () => {},
    get_cell: () => false,
    get_cell_color: () => drawColor,
    render: () => draws.push(['render']),
    highlight_rect: (idx) => draws.push(['highlight_rect', idx]),
    highlight_cell: () => {},
    highlight_line: () => {},
    draw_handle: (r, c) => draws.push(['draw_handle', r, c]),
    draw_selection_box: (r1, c1, r2, c2) => draws.push(['draw_selection_box', r1, c1, r2, c2]),
    get_line: () => new Uint32Array([]),
  };
  return { grid: g as GridCanvasWasm, rects, draws };
}

describe('copy/paste selection box', () => {
  beforeEach(() => {
    useGridStore.setState({ grid: null, selectedItems: [], clipboard: null, mousePos: { row: 0, col: 0 } });
  });

  it('pasting a single copied rect selects exactly one item and draws NO bounding box', () => {
    const { grid, rects, draws } = makeMock();
    // One committed rect at rows 20-25, cols 50-55.
    rects.push(20, 50, 25, 55, 1, 0);
    const sel: SelectedItem[] = [{ type: 'rect', index: 0 }];
    useGridStore.setState({ grid, selectedItems: sel });

    useGridStore.getState().copy();
    // Paste while the mouse is parked at the origin (e.g. over the toolbar) -
    // this used to dump the copy at (0,0) and draw a giant box.
    useGridStore.setState({ mousePos: { row: 0, col: 0 } });
    draws.length = 0;
    useGridStore.getState().paste();

    const selected = useGridStore.getState().selectedItems;
    expect(selected).toHaveLength(1);
    // The pasted rect lands near the original (row ~21), never at the origin.
    const r = rects.slice(-6);
    expect(r[0]).toBeGreaterThan(0);
    expect(r[1]).toBeGreaterThan(0);
    // A single-item selection must NOT draw a bounding box.
    const boxes = draws.filter(d => d[0] === 'draw_selection_box');
    expect(boxes).toHaveLength(0);
    // It should draw handles for the single pasted rect instead.
    expect(draws.some(d => d[0] === 'draw_handle')).toBe(true);
  });

  it('never draws a selection bounding box, even for a multi-item paste', () => {
    const { grid, rects, draws } = makeMock();
    // Two committed rects.
    rects.push(20, 50, 25, 55, 1, 0); // idx 0
    rects.push(20, 58, 25, 63, 1, 0); // idx 1
    useGridStore.setState({
      grid,
      selectedItems: [{ type: 'rect', index: 0 }, { type: 'rect', index: 1 }],
    });

    useGridStore.getState().copy();
    useGridStore.setState({ mousePos: { row: 0, col: 0 } });
    draws.length = 0;
    useGridStore.getState().paste();

    // The confusing bounding box is gone; per-item highlights stand in for it.
    expect(draws.some(d => d[0] === 'draw_selection_box')).toBe(false);
    expect(draws.filter(d => d[0] === 'highlight_rect')).toHaveLength(2);
  });
});
