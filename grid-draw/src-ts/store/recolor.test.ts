import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore, type SelectedItem } from './gridStore';
import type { GridCanvasWasm } from '../types/grid';

/**
 * pickColor recolors the fill of selected cells/rects and the stroke of lines;
 * pickOutline recolors only selected rects' outlines. Both also set the active
 * color for newly drawn shapes.
 */
function makeRecordingGrid() {
  const calls: Array<[string, ...number[]]> = [];
  const g: Partial<GridCanvasWasm> = {
    set_cell_color: (r, c, color) => calls.push(['cell', r, c, color]),
    set_line_color: (idx, color) => calls.push(['line', idx, color]),
    set_rect_fill: (idx, color) => calls.push(['rect_fill', idx, color]),
    set_rect_outline: (idx, color) => calls.push(['rect_outline', idx, color]),
    // renderSelection / updateOutputs touch these:
    render: () => {},
    highlight_cell: () => {},
    highlight_line: () => {},
    highlight_rect: () => {},
    draw_handle: () => {},
    draw_selection_box: () => {},
    get_line: () => new Int32Array([0, 0, 1, 1, 0]),
    get_rect: () => new Int32Array([0, 0, 2, 2, 0, 6]),
    get_cell: () => false,
    get_cell_color: () => 0,
  };
  return { grid: g as GridCanvasWasm, calls };
}

describe('recolor selection', () => {
  beforeEach(() => {
    useGridStore.setState({ grid: null, selectedItems: [], colorIdx: 0, outlineIdx: 6 });
  });

  it('pickColor sets active color and recolors fills/strokes of the selection', () => {
    const { grid, calls } = makeRecordingGrid();
    const selectedItems: SelectedItem[] = [
      { type: 'cell', row: 1, col: 2 },
      { type: 'line', index: 0 },
      { type: 'rect', index: 0 },
    ];
    useGridStore.setState({ grid, selectedItems });

    useGridStore.getState().pickColor(4);

    expect(useGridStore.getState().colorIdx).toBe(4);
    expect(calls).toContainEqual(['cell', 1, 2, 4]);
    expect(calls).toContainEqual(['line', 0, 4]);
    expect(calls).toContainEqual(['rect_fill', 0, 4]);
    // pickColor must not touch rect outlines.
    expect(calls.some(c => c[0] === 'rect_outline')).toBe(false);
  });

  it('pickOutline sets active outline and recolors only rect outlines', () => {
    const { grid, calls } = makeRecordingGrid();
    const selectedItems: SelectedItem[] = [
      { type: 'cell', row: 0, col: 0 },
      { type: 'rect', index: 0 },
    ];
    useGridStore.setState({ grid, selectedItems });

    useGridStore.getState().pickOutline(2);

    expect(useGridStore.getState().outlineIdx).toBe(2);
    expect(calls).toContainEqual(['rect_outline', 0, 2]);
    // No fill/cell/line recoloring from pickOutline.
    expect(calls.some(c => c[0] === 'rect_fill' || c[0] === 'cell' || c[0] === 'line')).toBe(false);
  });

  it('picking a color with no selection only sets the active color', () => {
    const { grid, calls } = makeRecordingGrid();
    useGridStore.setState({ grid, selectedItems: [] });

    useGridStore.getState().pickColor(3);

    expect(useGridStore.getState().colorIdx).toBe(3);
    expect(calls).toHaveLength(0);
  });
});
