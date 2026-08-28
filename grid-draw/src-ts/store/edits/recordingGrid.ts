import type { GridCanvasWasm } from '../../types/grid';
import { stubWasm } from '../wasmStub';
import type { Edit } from './types';
import { applyEdit, invertEdit } from './apply';

/**
 * Records every mutating call as a tuple so tests can assert the exact WASM
 * call sequence produced by applying an edit and its inverse. Read methods
 * return placeholder data; only mutations are asserted.
 */
export function makeRecordingGrid() {
  const calls: Array<[string, ...number[]]> = [];
  const g: Partial<GridCanvasWasm> = {
    insert_square: (idx, r, c, color, size) => calls.push(['insert_square', idx, r, c, color, size]),
    delete_square: (idx) => calls.push(['delete_square', idx]),
    set_square_color: (idx, color) => calls.push(['set_square_color', idx, color]),
    move_square: (idx, dr, dc) => calls.push(['move_square', idx, dr, dc]),
    set_draw_color: (idx) => calls.push(['set_draw_color', idx]),
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
  // This grid tests mutation PLUMBING (which WASM calls an edit emits), not
  // range validation — several tests deliberately record inserts at indices
  // past the (empty) buffer end. So it reports unbounded shape counts, which
  // means applyEdit's range guard never trips here. Real range-guard behavior
  // is covered via makeCountingGrid, which overrides these with finite counts.
  const UNBOUNDED = Number.MAX_SAFE_INTEGER;
  return {
    grid: {
      ...stubWasm(),
      ...g,
      get_line_count: () => UNBOUNDED,
      get_rect_count: () => UNBOUNDED,
      get_square_count: () => UNBOUNDED,
    },
    calls,
  };
}

/** A recording grid that also reports shape counts, for range-guard tests. */
export function makeCountingGrid(lineCount: number, rectCount: number) {
  const { grid, calls } = makeRecordingGrid();
  grid.get_line_count = () => lineCount;
  grid.get_rect_count = () => rectCount;
  return { grid, calls };
}

/** Apply an edit, then its inverse, returning the recorded call sequence. */
export function roundTrip(edit: Edit) {
  const { grid, calls } = makeRecordingGrid();
  applyEdit(grid, edit);
  applyEdit(grid, invertEdit(edit));
  return calls;
}
