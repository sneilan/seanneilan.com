import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore, type SelectedItem } from './gridStore';
import { FakeGrid, asWasm } from './edits/fakeGrid';

/**
 * Edge-case coverage (#5) for the undo layer, driven through the REAL store
 * actions against the faithful FakeGrid: overlapping square moves, resize
 * normalization (dragging an edge past its opposite), and zero-area shapes.
 */
function setup(g: FakeGrid, selectedItems: SelectedItem[] = []) {
  const grid = asWasm(g);
  useGridStore.setState({ grid, selectedItems, colorIdx: 0, outlineIdx: 6 });
  useGridStore.getState().resetHistory();
  return grid;
}

describe('undo edge cases (store + faithful grid)', () => {
  beforeEach(() => {
    useGridStore.setState({ grid: null, selectedItems: [], colorIdx: 0, outlineIdx: 6 });
  });

  it('overlapping square move round-trips exactly', () => {
    const g = new FakeGrid();
    // Two adjacent unit squares, color 2.
    g.add_square(0, 0, 2, 1);
    g.add_square(0, 1, 2, 1);
    setup(g, [{ type: 'cell', index: 0 }, { type: 'cell', index: 1 }]);
    // A one-fine-unit move needs the 1/8 grid: drags snap to the active step.
    useGridStore.setState({ subdivision: 8 });
    const before = g.snapshot();

    // Move right by 1 — square 0's destination (0,1) lands on square 1's old
    // spot. Squares are atomic, index-stable records, so nothing is clobbered.
    useGridStore.getState().startDragSelection({ row: 0, col: 0 });
    useGridStore.getState().finishDragSelection({ row: 0, col: 1 });

    // After move: squares at (0,1) and (0,2); (0,0) cleared.
    expect(g.get_cell(0, 0)).toBe(false);
    expect(g.get_cell(0, 1)).toBe(true);
    expect(g.get_cell(0, 2)).toBe(true);

    useGridStore.getState().undo();
    expect(g.snapshot()).toBe(before); // exact original restored
  });

  it('resize that flips a rect past its opposite edge undoes to the original', () => {
    const g = new FakeGrid();
    g.add_rect(2, 2, 6, 6, 0, 6); // rect occupying rows/cols 2..6
    setup(g, [{ type: 'rect', index: 0 }]);
    const before = g.snapshot();

    // Drag the bottom-right handle (4) far above-left of the top-left corner,
    // forcing re-normalization (min/max swap).
    useGridStore.getState().startResize({ shape: 'rect', index: 0, handle: 4 });
    useGridStore.getState().finishResize({ row: 0, col: 0 });

    const after = g.get_rect(0);
    // Normalized: min corner <= max corner on both axes.
    expect(after[0]).toBeLessThanOrEqual(after[2]);
    expect(after[1]).toBeLessThanOrEqual(after[3]);
    expect(g.snapshot()).not.toBe(before);

    useGridStore.getState().undo();
    expect(g.snapshot()).toBe(before); // back to (2,2,6,6)
  });

  it('cancelResize restores the live-previewed geometry', () => {
    const g = new FakeGrid();
    g.add_rect(2, 2, 6, 6, 0, 6);
    setup(g, [{ type: 'rect', index: 0 }]);
    const before = g.snapshot();

    useGridStore.getState().startResize({ shape: 'rect', index: 0, handle: 4 });
    useGridStore.getState().updateResize({ row: 10, col: 10 }); // live preview mutates
    expect(g.snapshot()).not.toBe(before);
    useGridStore.getState().cancelResize();
    expect(g.snapshot()).toBe(before);
    // A cancel must not leave an undo step behind.
    expect(useGridStore.getState().canUndo()).toBe(false);
  });

  it('a zero-area (point) line commits and round-trips', () => {
    const g = new FakeGrid();
    setup(g);
    const before = g.snapshot();

    useGridStore.getState().commitLine(5, 5, 5, 5); // start == end
    expect(g.get_line_count()).toBe(1);

    useGridStore.getState().undo();
    expect(g.snapshot()).toBe(before);
    expect(g.get_line_count()).toBe(0);
  });

  it('a zero-area rect commits and round-trips', () => {
    const g = new FakeGrid();
    setup(g);
    const before = g.snapshot();

    useGridStore.getState().commitRect(3, 3, 3, 3);
    expect(g.get_rect_count()).toBe(1);

    useGridStore.getState().undo();
    expect(g.snapshot()).toBe(before);
  });

  it('redo after undo replays a move correctly', () => {
    const g = new FakeGrid();
    g.add_rect(0, 0, 2, 2, 0, 6);
    setup(g, [{ type: 'rect', index: 0 }]);

    useGridStore.getState().startDragSelection({ row: 0, col: 0 });
    useGridStore.getState().finishDragSelection({ row: 1, col: 1 });
    const moved = g.snapshot();

    useGridStore.getState().undo();
    useGridStore.getState().redo();
    expect(g.snapshot()).toBe(moved);
  });
});
