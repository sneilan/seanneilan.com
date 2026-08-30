import { describe, it, expect } from 'vitest';
import { useGridStore, type SelectedItem } from './gridStore';
import type { GridCanvasWasm } from '../types/grid';
import { makeGrid } from './testGrid';

/**
 * Coverage for the select tool's press decision tree (pressSelectAt), the
 * hover-affordance query (hoverAffordanceAt) and the drag ghost preview
 * (renderDragPreview) — the gesture policy that used to live in useCanvasMouse
 * and is now store-owned so it's testable without a DOM.
 *
 * Geometry notes: cellSize is 2 (world px per fine unit, matching the real
 * grid), so world px = fine units × 2. The rotate handle floats
 * ROTATE_HANDLE_GAP (1.75) fine units above the selection's top-center with a
 * 10/zoom px grab tolerance; resize handles have a 9 px tolerance.
 */

function resetStore(grid: GridCanvasWasm, selectedItems: SelectedItem[] = []) {
  useGridStore.setState({
    grid,
    tool: 'select',
    selectedItems,
    selectMode: null,
    selectBoxStart: null,
    selectDragStart: null,
    dragStartedOnEmpty: false,
    isSelecting: false,
    previousSelection: [],
    resizeTarget: null,
    resizeOrigin: null,
    rotateOrigin: null,
    subdivision: 8,
    textEdit: null,
  });
}

const press = (over: Partial<{ x: number; y: number; row: number; col: number; shift: boolean; zoom: number }>) =>
  useGridStore.getState().pressSelectAt({ x: 0, y: 0, row: 0, col: 0, shift: false, zoom: 1, ...over });

describe('pressSelectAt decision tree', () => {
  it('grabbing the rotate handle starts a rotate (wins over everything)', () => {
    // Square block rows/cols 8..15 → handle at fine (6.25, 11.5) = world (23, 12.5).
    const { grid } = makeGrid({ squares: [[8, 8, 0, 8]] });
    resetStore(grid, [{ type: 'cell', index: 0 }]);

    press({ x: 23, y: 12.5, row: 6, col: 11 });

    expect(useGridStore.getState().selectMode).toBe('rotate');
    expect(useGridStore.getState().rotateOrigin).not.toBeNull();
  });

  it('rotate-handle tolerance shrinks with zoom (a near-miss at high zoom falls through)', () => {
    const { grid } = makeGrid({ squares: [[8, 8, 0, 8]] });
    resetStore(grid, [{ type: 'cell', index: 0 }]);

    // 8 world px off the handle: inside 10/1 tolerance, outside 10/4.
    press({ x: 23 + 8, y: 12.5, row: 6, col: 15, zoom: 4 });

    expect(useGridStore.getState().selectMode).not.toBe('rotate');
  });

  it('grabbing a handle of a single selected rect starts a resize', () => {
    const { grid } = makeGrid({ rects: [[0, 0, 8, 8, 0, 6]] });
    resetStore(grid, [{ type: 'rect', index: 0 }]);

    // Bottom-right corner (8,8) = world (16,16), far from the rotate handle.
    press({ x: 16, y: 16, row: 8, col: 8 });

    expect(useGridStore.getState().selectMode).toBe('resize');
    expect(useGridStore.getState().resizeTarget).toEqual({ shape: 'rect', index: 0, handle: 4 });
  });

  it('pressing a member of a multi-selection drags the whole selection (no collapse)', () => {
    const { grid } = makeGrid({ squares: [[0, 0, 0, 8], [16, 16, 0, 8]] });
    const sel: SelectedItem[] = [{ type: 'cell', index: 0 }, { type: 'cell', index: 1 }];
    resetStore(grid, sel);

    press({ x: 34, y: 34, row: 17, col: 17 }); // on square 1

    expect(useGridStore.getState().selectMode).toBe('drag');
    expect(useGridStore.getState().selectedItems).toEqual(sel);
    expect(useGridStore.getState().dragStartedOnEmpty).toBe(false);
  });

  it('pressing empty space inside the selection bounds arms a deselect-on-release drag', () => {
    const { grid } = makeGrid({ squares: [[0, 0, 0, 8], [16, 16, 0, 8]] });
    resetStore(grid, [{ type: 'cell', index: 0 }, { type: 'cell', index: 1 }]);

    press({ x: 24, y: 24, row: 12, col: 12 }); // between the two squares

    expect(useGridStore.getState().selectMode).toBe('drag');
    expect(useGridStore.getState().dragStartedOnEmpty).toBe(true);
  });

  it('shift-press toggles an item in and out of the selection', () => {
    const { grid } = makeGrid({ lines: [[0, 0, 8, 8, 0, 10]], hit: { line: 0 } });
    resetStore(grid, []);

    press({ x: 4, y: 4, row: 2, col: 2, shift: true });
    expect(useGridStore.getState().selectedItems).toEqual([{ type: 'line', index: 0 }]);
    expect(useGridStore.getState().selectMode).toBeNull(); // toggle, not drag

    press({ x: 4, y: 4, row: 2, col: 2, shift: true });
    expect(useGridStore.getState().selectedItems).toEqual([]);
  });

  it('a plain press on a shape selects it alone and arms a drag', () => {
    const { grid, paints } = makeGrid({ rects: [[20, 20, 28, 28, 0, 6]], hit: { rect: 0 } });
    resetStore(grid, []);

    press({ x: 44, y: 44, row: 22, col: 22 });

    expect(useGridStore.getState().selectedItems).toEqual([{ type: 'rect', index: 0 }]);
    expect(useGridStore.getState().selectMode).toBe('drag');
    // Final paint is render + bare highlight (no handles while a drag is armed).
    expect(paints.slice(-2)).toEqual([['render'], ['highlight_rect', 0]]);
  });

  it('pressing empty space starts a box selection; shift makes it additive', () => {
    const { grid } = makeGrid({ rects: [[50, 50, 52, 52, 0, 6]] });
    resetStore(grid, [{ type: 'rect', index: 0 }]);

    press({ x: 4, y: 4, row: 2, col: 2, shift: true }); // far from the rect

    expect(useGridStore.getState().selectMode).toBe('box');
    expect(useGridStore.getState().previousSelection).toEqual([{ type: 'rect', index: 0 }]);

    resetStore(grid, [{ type: 'rect', index: 0 }]);
    press({ x: 4, y: 4, row: 2, col: 2 }); // non-additive: clears immediately

    expect(useGridStore.getState().selectMode).toBe('box');
    expect(useGridStore.getState().selectedItems).toEqual([]);
  });
});

describe('hoverAffordanceAt', () => {
  it('reports rotate over the rotate handle, resize over a shape handle, move inside the selection', () => {
    // Rect 20..60 (big enough that its center clears the 9px handle tolerance).
    // Rotate handle: fine (18.25, 40) = world (80, 36.5); BR resize handle at
    // (60,60) = world (120,120); center (40,40) = world (80,80).
    const { grid } = makeGrid({ rects: [[20, 20, 60, 60, 0, 6]] });
    resetStore(grid, [{ type: 'rect', index: 0 }]);
    const q = (x: number, y: number, row: number, col: number, zoom = 1) =>
      useGridStore.getState().hoverAffordanceAt({ x, y, row, col, zoom });

    expect(q(80, 36.5, 18, 40)).toBe('rotate');
    expect(q(120, 120, 60, 60)).toBe('resize');
    expect(q(80, 80, 40, 40)).toBe('move'); // inside bounds, clear of handles
    expect(q(400, 400, 200, 200)).toBe('none'); // far away
  });

  it('reports none with an empty selection and move over a selected shape in a multi-selection', () => {
    const { grid } = makeGrid({ squares: [[0, 0, 0, 8], [16, 16, 0, 8]] });
    resetStore(grid, []);
    expect(useGridStore.getState().hoverAffordanceAt({ x: 8, y: 8, row: 4, col: 4, zoom: 1 })).toBe('none');

    resetStore(grid, [{ type: 'cell', index: 0 }, { type: 'cell', index: 1 }]);
    // Over square 1 (a selected member): a press would drag → move.
    expect(useGridStore.getState().hoverAffordanceAt({ x: 34, y: 34, row: 17, col: 17, zoom: 1 })).toBe('move');
  });
});

describe('renderDragPreview', () => {
  it('ghosts every shape kind at the snapped delta (images move but get no ghost)', () => {
    const { grid, paints } = makeGrid({
      squares: [[0, 0, 3, 8]],
      lines: [[0, 0, 8, 8, 2, 10]],
      rects: [[0, 0, 8, 8, 4, 6]],
      texts: [[1, 2, 3, 4, 5, 0, 1]],
      images: [[0, 0, 8, 8]],
    });
    resetStore(grid, [
      { type: 'cell', index: 0 },
      { type: 'line', index: 0 },
      { type: 'rect', index: 0 },
      { type: 'text', index: 0 },
      { type: 'image', index: 0 },
    ]);
    useGridStore.setState({ selectMode: 'drag', selectDragStart: { row: 0, col: 0 }, isSelecting: true });
    paints.length = 0;

    // Subdivision 8 → snap step 1 fine unit → delta passes through as (3, 3).
    // Text ghost carries the mock's default size (1) and string ('').
    useGridStore.getState().renderDragPreview({ row: 3, col: 3 });

    expect(paints).toEqual([
      ['render'],
      ['preview_square', 3, 3, 8, 3],
      ['preview_line', 3, 3, 11, 11, 2, 10],
      ['preview_rect', 3, 3, 11, 11, 4, 6],
      ['preview_text', 4, 5, 3, 1, 4, 5, 0, 1, ''],
    ]);
  });

  it('snaps the ghost delta to the active grid step (same rule as the commit)', () => {
    const { grid, paints } = makeGrid({ squares: [[0, 0, 0, 8]] });
    resetStore(grid, [{ type: 'cell', index: 0 }]);
    useGridStore.setState({
      selectMode: 'drag', selectDragStart: { row: 0, col: 0 }, isSelecting: true,
      subdivision: 1, // whole cells: snap step = 8 fine units
    });
    paints.length = 0;

    useGridStore.getState().renderDragPreview({ row: 5, col: 5 }); // 5 rounds to 8

    expect(paints).toEqual([['render'], ['preview_square', 8, 8, 8, 0]]);
  });

  it('is a no-op without an active drag start or selection', () => {
    const { grid, paints } = makeGrid({ squares: [[0, 0, 0, 8]] });
    resetStore(grid, [{ type: 'cell', index: 0 }]);
    paints.length = 0;

    useGridStore.getState().renderDragPreview({ row: 3, col: 3 }); // no selectDragStart

    expect(paints).toEqual([]);
  });
});
