import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { renderHook, act, cleanup } from '@testing-library/react';
import { useKeyboardShortcuts } from './useKeyboardShortcuts';
import { useGridStore } from '../../store/gridStore';
import { makeGrid } from '../../store/testGrid';
import type { GridCanvasWasm } from '../../types/grid';

/**
 * Integration tests for the global keyboard-shortcut hook, driven through the
 * REAL gridStore with the shared testGrid mock. We dispatch window `keydown`
 * events (as the browser would) and assert the resulting store effects, plus
 * that shortcuts are suppressed while a text shape is being edited.
 *
 * testGrid's recording mock omits a couple of WASM methods these paths hit
 * (set_subdivision, render_text_preview); we patch them as no-ops since the
 * tests assert store state, not those specific calls.
 */
function makePatchedGrid(opts?: Parameters<typeof makeGrid>[0]) {
  const { grid, calls } = makeGrid(opts);
  grid.set_subdivision = () => {};
  grid.render_text_preview = () => {};
  grid.highlight_text = () => {};
  return { grid, calls };
}

/** Reset the store to a known baseline (like the store slice tests do). */
function reset(grid: GridCanvasWasm) {
  useGridStore.setState({
    grid,
    selectedItems: [],
    colorIdx: 0,
    outlineIdx: 6,
    tool: 'draw',
    toolStyles: {
      draw: { colorIdx: 0, outlineIdx: 6 },
      line: { colorIdx: 0, outlineIdx: 6 },
      rect: { colorIdx: 6, outlineIdx: 0 },
      text: { colorIdx: 0, outlineIdx: 6 },
      select: { colorIdx: 0, outlineIdx: 6 },
    },
    textEdit: null,
    textSize: 1,
    lineWidth: 1,
    subdivision: 1,
  });
  useGridStore.getState().resetHistory();
}

const store = () => useGridStore.getState();

/** Mount the hook so its window listeners are active for the test. */
const mount = () => renderHook(() => useKeyboardShortcuts());

/** Dispatch a keydown on window inside act() so store-driven re-renders flush. */
function press(key: string, opts: Partial<KeyboardEventInit> = {}) {
  act(() => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, ...opts }));
  });
}

afterEach(() => cleanup());

describe('useKeyboardShortcuts: tool switching', () => {
  beforeEach(() => reset(makePatchedGrid().grid));

  it('switches tools with \\, m, t, s', () => {
    mount();
    press('m');
    expect(store().tool).toBe('rect');
    press('t');
    expect(store().tool).toBe('text');
    press('s');
    expect(store().tool).toBe('select');
    press('\\');
    expect(store().tool).toBe('line');
  });

  it('toggles a tool back to draw when its key is pressed twice', () => {
    mount();
    press('m');
    expect(store().tool).toBe('rect');
    press('m');
    expect(store().tool).toBe('draw');
  });
});

describe('useKeyboardShortcuts: color keys', () => {
  beforeEach(() => reset(makePatchedGrid().grid));

  it('maps number keys 1-7 to color indices 0-6', () => {
    mount();
    press('3');
    expect(store().colorIdx).toBe(2);
    press('7');
    expect(store().colorIdx).toBe(6);
    press('1');
    expect(store().colorIdx).toBe(0);
  });
});

describe('useKeyboardShortcuts: undo / redo', () => {
  it('Ctrl+Z undoes and Ctrl+Shift+Z redoes the last commit', () => {
    const { grid } = makePatchedGrid();
    reset(grid);
    useGridStore.setState({ colorIdx: 2, subdivision: 8 }); // size-1 squares

    // Create one undoable edit (a single drawn square).
    store().beginDrawStroke();
    store().drawCellAt(0, 0, true);
    store().endDrawStroke();
    expect(grid.get_square_count()).toBe(1);
    expect(store().canUndo()).toBe(true);

    mount();
    press('z', { ctrlKey: true });
    expect(grid.get_square_count()).toBe(0);
    expect(store().canUndo()).toBe(false);
    expect(store().canRedo()).toBe(true);

    press('z', { ctrlKey: true, shiftKey: true });
    expect(grid.get_square_count()).toBe(1);
    expect(store().canRedo()).toBe(false);
  });
});

describe('useKeyboardShortcuts: delete selection', () => {
  it('Delete removes the current selection', () => {
    const { grid } = makePatchedGrid({ rects: [[1, 2, 3, 4, 5, 6]] });
    reset(grid);
    useGridStore.setState({ selectedItems: [{ type: 'rect', index: 0 }] });
    expect(grid.get_rect_count()).toBe(1);

    mount();
    press('Delete');

    expect(grid.get_rect_count()).toBe(0);
    expect(store().selectedItems).toEqual([]);
  });
});

describe('useKeyboardShortcuts: subdivision cycling', () => {
  it('Ctrl+G advances the subdivision through SUBDIVISIONS', () => {
    reset(makePatchedGrid().grid);
    expect(store().subdivision).toBe(1);

    mount();
    press('g', { ctrlKey: true });
    expect(store().subdivision).toBe(2);
    press('g', { ctrlKey: true });
    expect(store().subdivision).toBe(4);
  });
});

describe('useKeyboardShortcuts: text-edit suppression', () => {
  // Typing itself happens in the TextEditOverlay <input> (covered by its own
  // test); here we only assert the GLOBAL shortcuts stand down while editing.
  it('does not run tool/color/delete shortcuts while a text edit is active', () => {
    const { grid } = makePatchedGrid({ rects: [[1, 2, 3, 4, 5, 6]] });
    reset(grid);
    store().beginTextEdit({ row: 0, col: 0 });
    useGridStore.setState({ selectedItems: [{ type: 'rect', index: 0 }] });
    mount();

    press('m'); // would switch to the rect tool
    expect(store().tool).toBe('draw'); // unchanged
    press('3'); // would pick color 2
    expect(store().colorIdx).toBe(0); // unchanged
    press('Backspace'); // would delete the selection
    expect(grid.get_rect_count()).toBe(1); // still there
  });
});
