import { describe, it, expect } from 'vitest';
import { mergeEdits } from './apply';
import { History } from './history';
import { makeRecordingGrid } from './recordingGrid';

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
