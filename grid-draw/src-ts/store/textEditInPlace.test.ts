import { describe, it, expect } from 'vitest';
import { useGridStore } from './gridStore';
import type { GridCanvasWasm } from '../types/grid';
import { makeGrid, type TestGridOpts } from './testGrid';

/**
 * In-place text editing (select tool double-click on a text shape):
 * beginTextEditAt deletes the original inside a history batch and seeds the
 * typing flow with its content; commit re-adds at the original z-index as the
 * SAME undo step; Escape restores the original and leaves history untouched.
 * Plus the resize-handle tolerance fix: on tiny shapes the handles must not
 * swallow the interior, and their hit size stays ~constant in screen px.
 */

function setup(opts: TestGridOpts = {}) {
  const made = makeGrid(opts);
  useGridStore.getState().resetHistory();
  const grid: GridCanvasWasm = made.grid;
  useGridStore.setState({
    grid,
    tool: 'select',
    colorIdx: 0,
    subdivision: 1,
    textEdit: null,
    selectedItems: [],
    selectMode: null,
    isSelecting: false,
  });
  return made;
}

// One text at frame top-left (5, 10), color 2, box 16x8, reading "567".
const TEXT = { texts: [[5, 10, 2, 16, 8, 0, 0]], textStrings: ['567'] };

describe('beginTextEditAt', () => {
  it('deletes the original, seeds the edit with its content, previews in its color', () => {
    const { calls, paints } = setup(TEXT);
    useGridStore.setState({ selectedItems: [{ type: 'text', index: 0 }] });

    useGridStore.getState().beginTextEditAt(0);

    expect(calls).toContainEqual(['delete_text', 0]);
    const edit = useGridStore.getState().textEdit;
    expect(edit).toMatchObject({ row: 5, col: 10, text: '567' });
    expect(edit?.editing).toMatchObject({ idx: 0 });
    expect(useGridStore.getState().selectedItems).toEqual([]);
    // Preview shows the ORIGINAL string in the original color (2), not colorIdx.
    expect(paints).toContainEqual(['render_text_preview', 5, 10, 2, 1, '567']);
  });

  it('typing previews with the original color; commit replaces at the original index as ONE undo step', () => {
    const { calls, paints } = setup(TEXT);
    useGridStore.getState().beginTextEditAt(0);

    useGridStore.getState().typeTextChar('x');
    expect(paints).toContainEqual(['render_text_preview', 5, 10, 2, 1, '567x']);

    useGridStore.getState().commitTextEdit();
    expect(useGridStore.getState().textEdit).toBeNull();
    expect(calls).toContainEqual(['insert_text', 0, 5, 10, 2, 1, '567x']);

    // The whole edit (delete + re-add) is one step: a single undo restores the
    // original record, verbatim, at index 0.
    expect(useGridStore.getState().canUndo()).toBe(true);
    useGridStore.getState().undo();
    expect(calls.slice(-2)).toEqual([
      ['delete_text', 0],
      ['insert_text', 0, 5, 10, 2, 1, '567'],
    ]);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });

  it('Escape restores the original and leaves no undo step', () => {
    const { calls } = setup(TEXT);
    useGridStore.getState().beginTextEditAt(0);
    useGridStore.getState().typeTextChar('x');
    useGridStore.getState().typeTextChar('y');

    useGridStore.getState().cancelTextEdit();

    expect(useGridStore.getState().textEdit).toBeNull();
    expect(calls[calls.length - 1]).toEqual(['insert_text', 0, 5, 10, 2, 1, '567']);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });

  it('committing an emptied text deletes it, as one undoable step', () => {
    const { calls } = setup({ texts: [[5, 10, 2, 16, 8, 0, 0]], textStrings: ['ab'] });
    useGridStore.getState().beginTextEditAt(0);
    useGridStore.getState().backspaceText();
    useGridStore.getState().backspaceText();

    useGridStore.getState().commitTextEdit();

    expect(useGridStore.getState().textEdit).toBeNull();
    // No re-add: the delete from beginTextEditAt stands.
    expect(calls.filter((c) => c[0] === 'insert_text')).toEqual([]);
    expect(useGridStore.getState().canUndo()).toBe(true);
    useGridStore.getState().undo();
    expect(calls[calls.length - 1]).toEqual(['insert_text', 0, 5, 10, 2, 1, 'ab']);
  });
});

describe('doubleClickAt', () => {
  it('on a text shape opens the in-place edit', () => {
    setup({ ...TEXT, hit: { text: 0 } });
    useGridStore.getState().doubleClickAt({ x: 25, y: 12 });
    expect(useGridStore.getState().textEdit).toMatchObject({ text: '567' });
  });

  it('on a non-text shape (or empty space) does nothing', () => {
    setup({ lines: [[0, 0, 8, 8, 0, 10]], hit: { line: 0 } });
    useGridStore.getState().doubleClickAt({ x: 4, y: 4 });
    expect(useGridStore.getState().textEdit).toBeNull();
  });
});

describe('pressSelectAt while typing', () => {
  it('commits the in-progress in-place edit before running the press decision tree', () => {
    const { calls } = setup({ ...TEXT, hit: {} });
    useGridStore.getState().beginTextEditAt(0);
    useGridStore.getState().typeTextChar('!');

    useGridStore.getState().pressSelectAt({ x: 500, y: 500, row: 250, col: 250, shift: false, zoom: 1 });

    expect(useGridStore.getState().textEdit).toBeNull();
    expect(calls).toContainEqual(['insert_text', 0, 5, 10, 2, 1, '567!']);
  });
});

describe('resize-handle tolerance on small shapes', () => {
  // A 1-cell text: frame 0..8 fine units = 16x16 world px at cellSize 2.
  // With the old fixed 9px-world tolerance every interior point hit a handle.
  const SMALL = { texts: [[0, 0, 2, 8, 8, 0, 0]], textStrings: ['5'], hit: { text: 0 } };

  it('the center of a tiny text is draggable (move), not a resize handle', () => {
    setup(SMALL);
    useGridStore.setState({ selectedItems: [{ type: 'text', index: 0 }] });
    // Center of the 16x16px frame, well inside all handles.
    const affordance = useGridStore.getState().hoverAffordanceAt({ x: 8, y: 8, row: 4, col: 4, zoom: 1 });
    expect(affordance).toBe('move');
  });

  // Corner tests use the BOTTOM-right corner (world 16,16): the top corners of
  // a shape this small sit inside the rotate handle's 10px radius, which
  // rightly wins by priority.
  it('its corners still resize', () => {
    setup(SMALL);
    useGridStore.setState({ selectedItems: [{ type: 'text', index: 0 }] });
    const affordance = useGridStore.getState().hoverAffordanceAt({ x: 15, y: 15, row: 7, col: 7, zoom: 1 });
    expect(affordance).toBe('resize');
  });

  it('handle hit size shrinks in world px when zoomed in (~constant screen px)', () => {
    setup(SMALL);
    useGridStore.setState({ selectedItems: [{ type: 'text', index: 0 }] });
    // 3 world px inside the corner diagonally (dist ~4.2): within reach at
    // zoom 1 (tolerance ~5.7)...
    expect(useGridStore.getState().hoverAffordanceAt({ x: 13, y: 13, row: 6, col: 6, zoom: 1 })).toBe('resize');
    // ...but at zoom 4 the tolerance is 9/4 = 2.25 world px, so this is a move.
    expect(useGridStore.getState().hoverAffordanceAt({ x: 13, y: 13, row: 6, col: 6, zoom: 4 })).toBe('move');
  });

  it('a press at the tiny text center starts a drag, not a resize', () => {
    setup(SMALL);
    useGridStore.setState({ selectedItems: [{ type: 'text', index: 0 }] });
    useGridStore.getState().pressSelectAt({ x: 8, y: 8, row: 4, col: 4, shift: false, zoom: 1 });
    expect(useGridStore.getState().selectMode).toBe('drag');
  });
});
