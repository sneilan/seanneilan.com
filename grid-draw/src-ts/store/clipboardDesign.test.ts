import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore, serializeSelection, CELL_UNITS, type SelectedItem } from './gridStore';
import { makeFullGrid, reset, seedSquare } from './fullGridMock';

/**
 * Action-driven tests for the clipboard slice (copy/paste/deleteSelected) and
 * serializeSelection, on the shared full recording mock (see fullGridMock.ts).
 * The design-slice actions (placeDesign, capture, import, clear) are covered
 * in designSlice.test.ts.
 */
describe('clipboard slice', () => {
  beforeEach(() => {
    useGridStore.setState({ grid: null, selectedItems: [], clipboard: null });
  });

  it('copy stores bbox-relative data across mixed item types (incl. text + image url)', () => {
    const m = makeFullGrid();
    reset(m.grid);
    seedSquare(m.squares, 5, 7, 2);
    m.lines.push([4, 6, 8, 10, 3, 15]);
    m.rects.push([6, 8, 9, 11, 1, 0]);
    m.texts.push({ r: 6, c: 8, color: 0, size: 1, boxW: 4, boxH: 2, halign: 0, valign: 0, text: 'Hi' });
    m.images.push({ r1: 10, c1: 12, r2: 18, c2: 20, url: 'https://s3/img.png' });

    useGridStore.setState({
      grid: m.grid,
      selectedItems: [
        { type: 'cell', index: 0 },
        { type: 'line', index: 0 },
        { type: 'rect', index: 0 },
        { type: 'text', index: 0 },
        { type: 'image', index: 0 },
      ],
    });

    useGridStore.getState().copy();
    const clip = useGridStore.getState().clipboard!;
    // Origin is the bounding-box top-left (minRow=4, minCol=6).
    expect(clip.originRow).toBe(4);
    expect(clip.originCol).toBe(6);
    // The square keeps its native size (a copied 1x/half/... square round-trips).
    expect(clip.cells).toEqual([{ relRow: 1, relCol: 1, color: 2, size: 1 }]);
    expect(clip.lines).toEqual([{ relR1: 0, relC1: 0, relR2: 4, relC2: 4, color: 3, width: 15 }]);
    expect(clip.rects).toEqual([{ relR1: 2, relC1: 2, relR2: 5, relC2: 5, color: 1, outline: 0, width: 10, strokeAlign: 0 }]);
    expect(clip.texts).toEqual([{ relR: 2, relC: 2, color: 0, size: 1, boxW: 4, boxH: 2, halign: 0, valign: 0, text: 'Hi' }]);
    expect(clip.images).toEqual([{ relR1: 6, relC1: 6, relR2: 14, relC2: 14, url: 'https://s3/img.png' }]);
  });

  it('copy with no selection is a no-op (clipboard stays null)', () => {
    const m = makeFullGrid();
    reset(m.grid);
    useGridStore.setState({ grid: m.grid, selectedItems: [] });
    useGridStore.getState().copy();
    expect(useGridStore.getState().clipboard).toBeNull();
  });

  it('pasting a square stacks it on top; one undo removes it, revealing the prior color', () => {
    const m = makeFullGrid();
    reset(m.grid);
    // A square already lives where the paste will land (anchor = origin + 1).
    seedSquare(m.squares, 11, 11, 2);
    useGridStore.setState({
      grid: m.grid,
      clipboard: { cells: [{ relRow: 0, relCol: 0, color: 5, size: 1 }], lines: [], rects: [], texts: [], images: [], originRow: 10, originCol: 10 },
    });

    useGridStore.getState().paste();
    // Paste anchors at origin+1 = (11,11); the pasted square stacks over the prior
    // one, so the topmost color there is now 5. It's selected by its new index.
    expect(m.grid.get_cell(11, 11)).toBe(true);
    expect(m.grid.get_cell_color(11, 11)).toBe(5);
    expect(useGridStore.getState().selectedItems).toEqual([{ type: 'cell', index: 1 }]);

    // A single undo removes the pasted square, revealing the original color-2 one.
    useGridStore.getState().undo();
    expect(m.grid.get_cell(11, 11)).toBe(true);
    expect(m.grid.get_cell_color(11, 11)).toBe(2);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });

  it('deleteSelected removes mixed items as one batch (high-index-first) and undo restores all', () => {
    const m = makeFullGrid();
    reset(m.grid);
    seedSquare(m.squares, 0, 0, 4);
    m.lines.push([0, 0, 1, 1, 0, 10]);   // idx 0
    m.lines.push([2, 2, 3, 3, 1, 10]);   // idx 1
    m.rects.push([0, 0, 2, 2, 1, 6]);    // idx 0
    m.texts.push({ r: 1, c: 1, color: 0, size: 1, boxW: 2, boxH: 1, halign: 0, valign: 0, text: 'T' });
    m.images.push({ r1: 5, c1: 5, r2: 9, c2: 9, url: 'https://s3/a.png' });

    useGridStore.setState({
      grid: m.grid,
      selectedItems: [
        { type: 'cell', index: 0 },
        { type: 'line', index: 0 },
        { type: 'line', index: 1 },
        { type: 'rect', index: 0 },
        { type: 'text', index: 0 },
        { type: 'image', index: 0 },
      ],
    });

    useGridStore.getState().deleteSelected();
    // Everything gone in one step.
    expect(m.grid.get_cell(0, 0)).toBe(false);
    expect(m.grid.get_square_count()).toBe(0);
    expect(m.grid.get_line_count()).toBe(0);
    expect(m.grid.get_rect_count()).toBe(0);
    expect(m.grid.get_text_count()).toBe(0);
    expect(m.grid.get_image_count()).toBe(0);
    expect(useGridStore.getState().selectedItems).toEqual([]);

    // Lines are deleted high-index-first so earlier indices stay valid.
    const lineDeletes = m.calls.filter(c => c[0] === 'delete_line').map(c => c[1]);
    expect(lineDeletes).toEqual([1, 0]);

    // A single undo re-inserts everything.
    useGridStore.getState().undo();
    expect(m.grid.get_cell(0, 0)).toBe(true);
    expect(m.grid.get_cell_color(0, 0)).toBe(4);
    expect(m.grid.get_line_count()).toBe(2);
    expect(m.grid.get_rect_count()).toBe(1);
    expect(m.grid.get_text_count()).toBe(1);
    expect(m.grid.get_image_count()).toBe(1);
    expect(m.grid.get_image_url(0)).toBe('https://s3/a.png');
    expect(m.grid.get_text_string(0)).toBe('T');
    expect(useGridStore.getState().canUndo()).toBe(false);
  });
});

describe('serializeSelection', () => {
  it('relative mode offsets coords to the bbox and keeps cells in index (z) order', () => {
    const m = makeFullGrid();
    seedSquare(m.squares, 2, 3, 0); // idx 0
    seedSquare(m.squares, 2, 1, 1); // idx 1
    seedSquare(m.squares, 4, 2, 2); // idx 2
    const items: SelectedItem[] = [
      { type: 'cell', index: 0 },
      { type: 'cell', index: 1 },
      { type: 'cell', index: 2 },
    ];
    const d = serializeSelection(m.grid, items)!;
    // bbox min = (2,1); cells become 4-tuples [relR, relC, color, size], kept in
    // INDEX order (that IS the z-order — no row-major sort).
    expect(d.cells).toEqual([[0, 2, 0, 1], [0, 0, 1, 1], [2, 1, 2, 1]]);
    expect(d.w).toBe(3);
    expect(d.h).toBe(3);
    expect(d.sub).toBe(CELL_UNITS);
  });

  it('absolute mode keeps original coords (origin 0,0)', () => {
    const m = makeFullGrid();
    seedSquare(m.squares, 2, 3, 0); // idx 0
    seedSquare(m.squares, 4, 2, 2); // idx 1
    const items: SelectedItem[] = [
      { type: 'cell', index: 0 },
      { type: 'cell', index: 1 },
    ];
    const d = serializeSelection(m.grid, items, { absolute: true })!;
    expect(d.cells).toEqual([[2, 3, 0, 1], [4, 2, 2, 1]]);
    // w/h measured from origin (0,0): maxCol+1 = 4, maxRow+1 = 5.
    expect(d.w).toBe(4);
    expect(d.h).toBe(5);
  });

  it('returns null for an empty selection', () => {
    const m = makeFullGrid();
    expect(serializeSelection(m.grid, [])).toBeNull();
  });
});
