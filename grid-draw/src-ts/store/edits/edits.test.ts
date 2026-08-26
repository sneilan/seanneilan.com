import { describe, it, expect } from 'vitest';
import type { GridCanvasWasm } from '../../types/grid';
import type { Edit } from './types';
import { applyEdit, invertEdit, mergeEdits } from './apply';
import { History } from './history';

/**
 * Records every mutating call as a tuple so tests can assert the exact WASM
 * call sequence produced by applying an edit and its inverse. Read methods
 * return placeholder data; only mutations are asserted.
 */
function makeRecordingGrid() {
  const calls: Array<[string, ...number[]]> = [];
  const g: Partial<GridCanvasWasm> = {
    set_cell: (r, c, v) => calls.push(['set_cell', r, c, v ? 1 : 0]),
    set_draw_color: (idx) => calls.push(['set_draw_color', idx]),
    set_cell_color: (r, c, color) => calls.push(['set_cell_color', r, c, color]),
    set_line_color: (idx, color) => calls.push(['set_line_color', idx, color]),
    set_rect_fill: (idx, color) => calls.push(['set_rect_fill', idx, color]),
    set_rect_outline: (idx, color) => calls.push(['set_rect_outline', idx, color]),
    move_line: (idx, dr, dc) => calls.push(['move_line', idx, dr, dc]),
    move_rect: (idx, dr, dc) => calls.push(['move_rect', idx, dr, dc]),
    set_line: (idx, r1, c1, r2, c2) => calls.push(['set_line', idx, r1, c1, r2, c2]),
    set_rect: (idx, r1, c1, r2, c2) => calls.push(['set_rect', idx, r1, c1, r2, c2]),
    insert_line: (idx, r1, c1, r2, c2, color, width) =>
      calls.push(['insert_line', idx, r1, c1, r2, c2, color, width]),
    insert_rect: (idx, r1, c1, r2, c2, fill, outline) =>
      calls.push(['insert_rect', idx, r1, c1, r2, c2, fill, outline]),
    delete_line: (idx) => calls.push(['delete_line', idx]),
    delete_rect: (idx) => calls.push(['delete_rect', idx]),
    render: () => {},
  };
  return { grid: g as unknown as GridCanvasWasm, calls };
}

/** Apply an edit, then its inverse, returning the recorded call sequence. */
function roundTrip(edit: Edit) {
  const { grid, calls } = makeRecordingGrid();
  applyEdit(grid, edit);
  applyEdit(grid, invertEdit(edit));
  return calls;
}

describe('applyEdit — forward application', () => {
  it('setCell applies the target value', () => {
    const { grid, calls } = makeRecordingGrid();
    applyEdit(grid, { kind: 'setCell', row: 2, col: 3, from: false, to: true });
    expect(calls).toEqual([['set_cell', 2, 3, 1]]);
  });

  it('recolorRectFill applies the new fill', () => {
    const { grid, calls } = makeRecordingGrid();
    applyEdit(grid, { kind: 'recolorRectFill', idx: 1, from: 0, to: 4 });
    expect(calls).toEqual([['set_rect_fill', 1, 4]]);
  });

  it('addRect inserts at the given index', () => {
    const { grid, calls } = makeRecordingGrid();
    applyEdit(grid, {
      kind: 'addRect',
      idx: 2,
      rect: { r1: 0, c1: 0, r2: 3, c2: 4, fill: 6, outline: 2 },
    });
    expect(calls).toEqual([['insert_rect', 2, 0, 0, 3, 4, 6, 2]]);
  });

  it('deleteRect removes at the given index', () => {
    const { grid, calls } = makeRecordingGrid();
    applyEdit(grid, {
      kind: 'deleteRect',
      idx: 2,
      rect: { r1: 0, c1: 0, r2: 3, c2: 4, fill: 6, outline: 2 },
    });
    expect(calls).toEqual([['delete_rect', 2]]);
  });

  it('setRectGeom applies the new geometry', () => {
    const { grid, calls } = makeRecordingGrid();
    applyEdit(grid, {
      kind: 'setRectGeom',
      idx: 0,
      from: { r1: 0, c1: 0, r2: 2, c2: 2 },
      to: { r1: 1, c1: 1, r2: 5, c2: 5 },
    });
    expect(calls).toEqual([['set_rect', 0, 1, 1, 5, 5]]);
  });
});

describe('invertEdit — exact round-trips', () => {
  it('setCell round-trips to original value', () => {
    expect(roundTrip({ kind: 'setCell', row: 2, col: 3, from: false, to: true })).toEqual([
      ['set_cell', 2, 3, 1],
      ['set_cell', 2, 3, 0],
    ]);
  });

  it('setCellColor round-trips', () => {
    expect(roundTrip({ kind: 'setCellColor', row: 1, col: 1, from: 0, to: 3 })).toEqual([
      ['set_cell_color', 1, 1, 3],
      ['set_cell_color', 1, 1, 0],
    ]);
  });

  it('recolorLine round-trips', () => {
    expect(roundTrip({ kind: 'recolorLine', idx: 0, from: 2, to: 5 })).toEqual([
      ['set_line_color', 0, 5],
      ['set_line_color', 0, 2],
    ]);
  });

  it('recolorRectFill round-trips', () => {
    expect(roundTrip({ kind: 'recolorRectFill', idx: 1, from: 0, to: 4 })).toEqual([
      ['set_rect_fill', 1, 4],
      ['set_rect_fill', 1, 0],
    ]);
  });

  it('recolorRectOutline round-trips', () => {
    expect(roundTrip({ kind: 'recolorRectOutline', idx: 1, from: 6, to: 2 })).toEqual([
      ['set_rect_outline', 1, 2],
      ['set_rect_outline', 1, 6],
    ]);
  });

  it('moveLine inverse negates the delta', () => {
    expect(roundTrip({ kind: 'moveLine', idx: 0, dRow: 2, dCol: -3 })).toEqual([
      ['move_line', 0, 2, -3],
      ['move_line', 0, -2, 3],
    ]);
  });

  it('moveRect inverse negates the delta', () => {
    expect(roundTrip({ kind: 'moveRect', idx: 1, dRow: -1, dCol: 4 })).toEqual([
      ['move_rect', 1, -1, 4],
      ['move_rect', 1, 1, -4],
    ]);
  });

  it('setLineGeom inverse restores the old geometry', () => {
    expect(
      roundTrip({
        kind: 'setLineGeom',
        idx: 0,
        from: { r1: 0, c1: 0, r2: 1, c2: 1 },
        to: { r1: 2, c1: 2, r2: 3, c2: 3 },
      })
    ).toEqual([
      ['set_line', 0, 2, 2, 3, 3],
      ['set_line', 0, 0, 0, 1, 1],
    ]);
  });

  it('setRectGeom inverse restores the old geometry', () => {
    expect(
      roundTrip({
        kind: 'setRectGeom',
        idx: 0,
        from: { r1: 0, c1: 0, r2: 2, c2: 2 },
        to: { r1: 1, c1: 1, r2: 5, c2: 5 },
      })
    ).toEqual([
      ['set_rect', 0, 1, 1, 5, 5],
      ['set_rect', 0, 0, 0, 2, 2],
    ]);
  });

  it('addLine inverse deletes the same index', () => {
    expect(
      roundTrip({ kind: 'addLine', idx: 3, line: { r1: 0, c1: 0, r2: 1, c2: 1, color: 2, width: 10 } })
    ).toEqual([
      ['insert_line', 3, 0, 0, 1, 1, 2, 10],
      ['delete_line', 3],
    ]);
  });

  it('addRect inverse deletes the same index', () => {
    expect(
      roundTrip({
        kind: 'addRect',
        idx: 2,
        rect: { r1: 0, c1: 0, r2: 3, c2: 4, fill: 6, outline: 2 },
      })
    ).toEqual([
      ['insert_rect', 2, 0, 0, 3, 4, 6, 2],
      ['delete_rect', 2],
    ]);
  });

  it('deleteLine inverse re-inserts the captured line at its index', () => {
    expect(
      roundTrip({ kind: 'deleteLine', idx: 1, line: { r1: 5, c1: 6, r2: 7, c2: 8, color: 3, width: 10 } })
    ).toEqual([
      ['delete_line', 1],
      ['insert_line', 1, 5, 6, 7, 8, 3, 10],
    ]);
  });

  it('deleteRect inverse re-inserts the captured rect at its index', () => {
    expect(
      roundTrip({
        kind: 'deleteRect',
        idx: 0,
        rect: { r1: 1, c1: 2, r2: 3, c2: 4, fill: 5, outline: 6 },
      })
    ).toEqual([
      ['delete_rect', 0],
      ['insert_rect', 0, 1, 2, 3, 4, 5, 6],
    ]);
  });
});

describe('setCellState', () => {
  it('placing a colored cell sets draw color then fills', () => {
    const { grid, calls } = makeRecordingGrid();
    applyEdit(grid, {
      kind: 'setCellState',
      row: 2, col: 3,
      from: { filled: false, color: 0 },
      to: { filled: true, color: 4 },
    });
    expect(calls).toEqual([
      ['set_draw_color', 4],
      ['set_cell', 2, 3, 1],
    ]);
  });

  it('erasing a cell clears it (no draw color needed)', () => {
    const { grid, calls } = makeRecordingGrid();
    applyEdit(grid, {
      kind: 'setCellState',
      row: 0, col: 0,
      from: { filled: true, color: 2 },
      to: { filled: false, color: 2 },
    });
    expect(calls).toEqual([['set_cell', 0, 0, 0]]);
  });

  it('round-trips: undo restores the prior fill and color', () => {
    expect(
      roundTrip({
        kind: 'setCellState',
        row: 1, col: 1,
        from: { filled: true, color: 2 },
        to: { filled: true, color: 5 },
      })
    ).toEqual([
      ['set_draw_color', 5],
      ['set_cell', 1, 1, 1],
      ['set_draw_color', 2],
      ['set_cell', 1, 1, 1],
    ]);
  });
});

describe('batch edits', () => {
  it('applies children in order', () => {
    const { grid, calls } = makeRecordingGrid();
    applyEdit(grid, {
      kind: 'batch',
      edits: [
        { kind: 'recolorRectFill', idx: 0, from: 0, to: 1 },
        { kind: 'recolorRectFill', idx: 1, from: 0, to: 2 },
      ],
    });
    expect(calls).toEqual([
      ['set_rect_fill', 0, 1],
      ['set_rect_fill', 1, 2],
    ]);
  });

  it('inverts children in REVERSE order so index-shifting deletes round-trip', () => {
    // Deleting idx 1 then idx 3 must undo by inserting idx 3 first, then idx 1.
    const batch: Edit = {
      kind: 'batch',
      edits: [
        { kind: 'deleteRect', idx: 1, rect: { r1: 0, c1: 0, r2: 1, c2: 1, fill: 0, outline: 6 } },
        { kind: 'deleteRect', idx: 3, rect: { r1: 2, c1: 2, r2: 3, c2: 3, fill: 0, outline: 6 } },
      ],
    };
    const { grid, calls } = makeRecordingGrid();
    applyEdit(grid, invertEdit(batch));
    expect(calls).toEqual([
      ['insert_rect', 3, 2, 2, 3, 3, 0, 6],
      ['insert_rect', 1, 0, 0, 1, 1, 0, 6],
    ]);
  });
});

describe('History', () => {
  it('commit applies the edit and enables undo', () => {
    const { grid, calls } = makeRecordingGrid();
    const h = new History();
    expect(h.canUndo()).toBe(false);
    h.commit(grid, { kind: 'recolorRectFill', idx: 0, from: 0, to: 4 });
    expect(calls).toEqual([['set_rect_fill', 0, 4]]);
    expect(h.canUndo()).toBe(true);
    expect(h.canRedo()).toBe(false);
  });

  it('undo applies the inverse, redo re-applies the edit', () => {
    const { grid, calls } = makeRecordingGrid();
    const h = new History();
    h.commit(grid, { kind: 'recolorRectFill', idx: 0, from: 0, to: 4 });
    h.undoLast(grid);
    h.redoLast(grid);
    expect(calls).toEqual([
      ['set_rect_fill', 0, 4],
      ['set_rect_fill', 0, 0],
      ['set_rect_fill', 0, 4],
    ]);
    expect(h.canUndo()).toBe(true);
    expect(h.canRedo()).toBe(false);
  });

  it('a new commit clears the redo stack', () => {
    const { grid } = makeRecordingGrid();
    const h = new History();
    h.commit(grid, { kind: 'recolorRectFill', idx: 0, from: 0, to: 1 });
    h.undoLast(grid);
    expect(h.canRedo()).toBe(true);
    h.commit(grid, { kind: 'recolorRectFill', idx: 0, from: 0, to: 2 });
    expect(h.canRedo()).toBe(false);
  });

  it('undo/redo on empty stacks are no-ops returning false', () => {
    const { grid } = makeRecordingGrid();
    const h = new History();
    expect(h.undoLast(grid)).toBe(false);
    expect(h.redoLast(grid)).toBe(false);
  });

  it('a batch gesture commits as a single undo step', () => {
    const { grid, calls } = makeRecordingGrid();
    const h = new History();
    h.beginBatch();
    h.commit(grid, { kind: 'setCell', row: 0, col: 0, from: false, to: true });
    h.commit(grid, { kind: 'setCell', row: 0, col: 1, from: false, to: true });
    h.endBatch();
    // Both edits applied during the gesture.
    expect(calls).toEqual([
      ['set_cell', 0, 0, 1],
      ['set_cell', 0, 1, 1],
    ]);
    calls.length = 0;
    // ...but a single undo reverts the whole stroke (reverse order).
    h.undoLast(grid);
    expect(calls).toEqual([
      ['set_cell', 0, 1, 0],
      ['set_cell', 0, 0, 0],
    ]);
    expect(h.canUndo()).toBe(false);
  });

  it('an empty batch records no history', () => {
    const h = new History();
    h.beginBatch();
    h.endBatch();
    expect(h.canUndo()).toBe(false);
  });

  it('multiple commits undo in LIFO order', () => {
    const { grid, calls } = makeRecordingGrid();
    const h = new History();
    h.commit(grid, { kind: 'setCell', row: 0, col: 0, from: false, to: true });
    h.commit(grid, { kind: 'setCell', row: 1, col: 1, from: false, to: true });
    calls.length = 0;
    h.undoLast(grid);
    h.undoLast(grid);
    expect(calls).toEqual([
      ['set_cell', 1, 1, 0],
      ['set_cell', 0, 0, 0],
    ]);
  });
});

/** A recording grid that also reports shape counts, for range-guard tests. */
function makeCountingGrid(lineCount: number, rectCount: number) {
  const { grid, calls } = makeRecordingGrid();
  (grid as unknown as { get_line_count: () => number }).get_line_count = () => lineCount;
  (grid as unknown as { get_rect_count: () => number }).get_rect_count = () => rectCount;
  return { grid, calls };
}

describe('applyEdit range guard', () => {
  it('throws when a rect edit targets an out-of-range index', () => {
    const { grid } = makeCountingGrid(0, 1); // one rect: valid idx is 0
    expect(() => applyEdit(grid, { kind: 'recolorRectFill', idx: 5, from: 0, to: 1 })).toThrow(/out of range/);
  });

  it('allows an insert at one-past-the-end (append)', () => {
    const { grid } = makeCountingGrid(2, 0); // two lines: insert idx 2 = append
    expect(() =>
      applyEdit(grid, { kind: 'addLine', idx: 2, line: { r1: 0, c1: 0, r2: 1, c2: 1, color: 0, width: 10 } })
    ).not.toThrow();
  });

  it('rejects an insert beyond one-past-the-end', () => {
    const { grid } = makeCountingGrid(2, 0);
    expect(() =>
      applyEdit(grid, { kind: 'addLine', idx: 3, line: { r1: 0, c1: 0, r2: 1, c2: 1, color: 0, width: 10 } })
    ).toThrow(/out of range/);
  });

  it('does not validate when the grid lacks count getters (minimal mocks)', () => {
    const { grid } = makeRecordingGrid();
    expect(() => applyEdit(grid, { kind: 'recolorRectFill', idx: 99, from: 0, to: 1 })).not.toThrow();
  });
});

describe('batch hygiene', () => {
  it('beginBatch auto-finalizes a previously-open batch', () => {
    const { grid } = makeRecordingGrid();
    const h = new History();
    h.beginBatch();
    h.commit(grid, { kind: 'setCell', row: 0, col: 0, from: false, to: true });
    // A second beginBatch (e.g. a new stroke after one was interrupted) must
    // not strand the first batch's edit — it should already be recorded.
    h.beginBatch();
    expect(h.canUndo()).toBe(true);
    h.commit(grid, { kind: 'setCell', row: 0, col: 1, from: false, to: true });
    h.endBatch();
    // Two separate undo steps now.
    h.undoLast(grid);
    expect(h.canUndo()).toBe(true);
    h.undoLast(grid);
    expect(h.canUndo()).toBe(false);
  });

  it('cancelBatch discards bookkeeping without recording a step', () => {
    const { grid } = makeRecordingGrid();
    const h = new History();
    h.beginBatch();
    h.commit(grid, { kind: 'setCell', row: 0, col: 0, from: false, to: true });
    h.cancelBatch();
    expect(h.canUndo()).toBe(false);
    expect(h.isBatching()).toBe(false);
  });
});

describe('coalescing', () => {
  it('merges same-key recolors within the window into one step', () => {
    const { grid } = makeRecordingGrid();
    const h = new History();
    h.commit(grid, { kind: 'recolorRectFill', idx: 0, from: 0, to: 2 }, { coalesceKey: 'fill:0', now: 0 });
    h.commit(grid, { kind: 'recolorRectFill', idx: 0, from: 2, to: 3 }, { coalesceKey: 'fill:0', now: 100 });
    h.commit(grid, { kind: 'recolorRectFill', idx: 0, from: 3, to: 5 }, { coalesceKey: 'fill:0', now: 200 });
    // All three merged → a single undo restores the ORIGINAL fill (0).
    const { grid: g2, calls } = makeRecordingGrid();
    h.undoLast(g2);
    expect(calls).toEqual([['set_rect_fill', 0, 0]]);
    expect(h.canUndo()).toBe(false);
  });

  it('does NOT merge once the time window has passed', () => {
    const { grid } = makeRecordingGrid();
    const h = new History();
    h.commit(grid, { kind: 'recolorRectFill', idx: 0, from: 0, to: 2 }, { coalesceKey: 'fill:0', now: 0 });
    h.commit(grid, { kind: 'recolorRectFill', idx: 0, from: 2, to: 3 }, { coalesceKey: 'fill:0', now: 5000 });
    // Two separate steps.
    h.undoLast(grid);
    expect(h.canUndo()).toBe(true);
  });

  it('does NOT merge across a different key', () => {
    const { grid } = makeRecordingGrid();
    const h = new History();
    h.commit(grid, { kind: 'recolorRectFill', idx: 0, from: 0, to: 2 }, { coalesceKey: 'fill:0', now: 0 });
    h.commit(grid, { kind: 'recolorRectFill', idx: 1, from: 0, to: 2 }, { coalesceKey: 'fill:1', now: 10 });
    h.undoLast(grid);
    expect(h.canUndo()).toBe(true);
  });

  it('does not coalesce across an undo', () => {
    const { grid } = makeRecordingGrid();
    const h = new History();
    h.commit(grid, { kind: 'recolorRectFill', idx: 0, from: 0, to: 2 }, { coalesceKey: 'fill:0', now: 0 });
    h.undoLast(grid);
    h.commit(grid, { kind: 'recolorRectFill', idx: 0, from: 0, to: 3 }, { coalesceKey: 'fill:0', now: 10 });
    // The post-undo commit must be its own step, not merged into the undone one.
    expect(h.canUndo()).toBe(true);
    expect(h.canRedo()).toBe(false); // new commit cleared redo
  });

  it('mergeEdits sums move deltas and keeps original from for recolors', () => {
    expect(
      mergeEdits({ kind: 'moveRect', idx: 0, dRow: 1, dCol: 2 }, { kind: 'moveRect', idx: 0, dRow: 3, dCol: -1 })
    ).toEqual({ kind: 'moveRect', idx: 0, dRow: 4, dCol: 1 });

    expect(
      mergeEdits({ kind: 'recolorLine', idx: 0, from: 0, to: 2 }, { kind: 'recolorLine', idx: 0, from: 2, to: 5 })
    ).toEqual({ kind: 'recolorLine', idx: 0, from: 0, to: 5 });

    // Different targets don't merge.
    expect(
      mergeEdits({ kind: 'moveRect', idx: 0, dRow: 1, dCol: 0 }, { kind: 'moveRect', idx: 1, dRow: 1, dCol: 0 })
    ).toBeNull();
  });
});
