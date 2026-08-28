import { describe, it, expect } from 'vitest';
import type { Edit } from './types';
import { applyEdit, invertEdit } from './apply';
import { makeCountingGrid, makeRecordingGrid, roundTrip } from './recordingGrid';

describe('applyEdit — forward application', () => {
  it('addSquare inserts the record at the given index', () => {
    const { grid, calls } = makeRecordingGrid();
    applyEdit(grid, { kind: 'addSquare', idx: 2, square: { r: 0, c: 8, color: 3, size: 8 } });
    expect(calls).toEqual([['insert_square', 2, 0, 8, 3, 8]]);
  });

  it('deleteSquare removes at the given index', () => {
    const { grid, calls } = makeRecordingGrid();
    applyEdit(grid, { kind: 'deleteSquare', idx: 2, square: { r: 0, c: 8, color: 3, size: 8 } });
    expect(calls).toEqual([['delete_square', 2]]);
  });

  it('recolorSquare applies the new color', () => {
    const { grid, calls } = makeRecordingGrid();
    applyEdit(grid, { kind: 'recolorSquare', idx: 1, from: 0, to: 4 });
    expect(calls).toEqual([['set_square_color', 1, 4]]);
  });

  it('moveSquare applies the delta', () => {
    const { grid, calls } = makeRecordingGrid();
    applyEdit(grid, { kind: 'moveSquare', idx: 0, dRow: 2, dCol: -3 });
    expect(calls).toEqual([['move_square', 0, 2, -3]]);
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
  it('addSquare inverse deletes the same index', () => {
    expect(
      roundTrip({ kind: 'addSquare', idx: 3, square: { r: 8, c: 0, color: 2, size: 4 } })
    ).toEqual([
      ['insert_square', 3, 8, 0, 2, 4],
      ['delete_square', 3],
    ]);
  });

  it('deleteSquare inverse re-inserts the captured square at its index', () => {
    // The captured record (color/size/pos) is restored at its original z-index,
    // so undoing an erase brings the square back exactly where it was stacked.
    expect(
      roundTrip({ kind: 'deleteSquare', idx: 1, square: { r: 5, c: 6, color: 3, size: 2 } })
    ).toEqual([
      ['delete_square', 1],
      ['insert_square', 1, 5, 6, 3, 2],
    ]);
  });

  it('recolorSquare round-trips to the original color', () => {
    expect(roundTrip({ kind: 'recolorSquare', idx: 0, from: 2, to: 5 })).toEqual([
      ['set_square_color', 0, 5],
      ['set_square_color', 0, 2],
    ]);
  });

  it('moveSquare inverse negates the delta', () => {
    expect(roundTrip({ kind: 'moveSquare', idx: 1, dRow: -1, dCol: 4 })).toEqual([
      ['move_square', 1, -1, 4],
      ['move_square', 1, 1, -4],
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

describe('square records', () => {
  it('a re-colored square undo restores its prior color', () => {
    // A square is one atomic record: recoloring is a single set_square_color,
    // and undo puts the exact prior color back (no per-fine-cell fan-out).
    expect(roundTrip({ kind: 'recolorSquare', idx: 2, from: 1, to: 4 })).toEqual([
      ['set_square_color', 2, 4],
      ['set_square_color', 2, 1],
    ]);
  });

  it('drawing then erasing the same square is a no-op round-trip', () => {
    // add at end, then the inverse delete removes it — the buffer is unchanged.
    const { grid, calls } = makeRecordingGrid();
    const add: Edit = { kind: 'addSquare', idx: 0, square: { r: 0, c: 0, color: 2, size: 8 } };
    applyEdit(grid, add);
    applyEdit(grid, invertEdit(add));
    expect(calls).toEqual([
      ['insert_square', 0, 0, 0, 2, 8],
      ['delete_square', 0],
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

  it('inverts a batch of square deletes in REVERSE order (z-order restore)', () => {
    // Erasing squares idx 1 then idx 3 undoes by re-inserting idx 3 first, then
    // idx 1 — so each square lands back at its original stacking position.
    const batch: Edit = {
      kind: 'batch',
      edits: [
        { kind: 'deleteSquare', idx: 1, square: { r: 0, c: 0, color: 1, size: 8 } },
        { kind: 'deleteSquare', idx: 3, square: { r: 8, c: 8, color: 2, size: 4 } },
      ],
    };
    const { grid, calls } = makeRecordingGrid();
    applyEdit(grid, invertEdit(batch));
    expect(calls).toEqual([
      ['insert_square', 3, 8, 8, 2, 4],
      ['insert_square', 1, 0, 0, 1, 8],
    ]);
  });
});

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

  it('does not reject an index the grid reports as in range', () => {
    // The recording grid reports unbounded counts, so the range guard treats
    // any non-negative index as valid — mirroring how the guard no-ops for
    // grids that don't constrain their buffer size.
    const { grid } = makeRecordingGrid();
    expect(() => applyEdit(grid, { kind: 'recolorRectFill', idx: 99, from: 0, to: 1 })).not.toThrow();
  });
});
