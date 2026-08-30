import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup, act } from '@testing-library/react';
import { TextEditOverlay } from './TextEditOverlay';
import { useGridStore } from '../../store/gridStore';
import { makeGrid } from '../../store/testGrid';
import { CELL_SIZE, CELL_UNITS, HEADER_HEIGHT } from './constants';
import type { Camera } from './coords';

/**
 * The DOM-input text editor. Because it's a REAL <input>, caret movement,
 * Shift/Ctrl+arrow selection, and mouse selection are the browser's own —
 * what needs testing is the wiring: the input mirrors textEdit, edits flow to
 * the store, Enter/Escape commit/cancel, keystrokes never leak to the global
 * shortcut layer, and the camera math places it over the text frame.
 */

const CAM1: Camera = { x: 0, y: 0, zoom: 1 };

function setup(cam: Camera = CAM1) {
  const { grid, calls } = makeGrid({ texts: [[5, 10, 2, 16, 8, 0, 0]], textStrings: ['567'] });
  useGridStore.getState().resetHistory();
  useGridStore.setState({ grid, tool: 'select', colorIdx: 0, textEdit: null, selectedItems: [] });
  render(<TextEditOverlay cam={cam} />);
  return { grid, calls };
}

const input = () => screen.getByLabelText<HTMLInputElement>('Edit text');

beforeEach(() => useGridStore.setState({ textEdit: null }));
afterEach(() => cleanup());

describe('TextEditOverlay', () => {
  it('renders nothing when no text edit is active', () => {
    setup();
    expect(screen.queryByLabelText('Edit text')).toBeNull();
  });

  it('shows the text being edited, focused with the caret at the end', () => {
    setup();
    act(() => useGridStore.getState().beginTextEditAt(0));
    const el = input();
    expect(el.value).toBe('567');
    expect(document.activeElement).toBe(el);
    expect(el.selectionStart).toBe(3);
    expect(el.selectionEnd).toBe(3);
  });

  it('edits flow into the store, and Enter commits at the original index', () => {
    const { calls } = setup();
    act(() => useGridStore.getState().beginTextEditAt(0));

    // Simulates any native edit — typing at a caret, replacing a selection…
    fireEvent.change(input(), { target: { value: '5X7' } });
    expect(useGridStore.getState().textEdit?.text).toBe('5X7');

    fireEvent.keyDown(input(), { key: 'Enter' });
    expect(useGridStore.getState().textEdit).toBeNull();
    expect(calls).toContainEqual(['insert_text', 0, 5, 10, 2, 1, '5X7']);
  });

  it('Escape cancels, restoring the original', () => {
    const { calls } = setup();
    act(() => useGridStore.getState().beginTextEditAt(0));
    fireEvent.change(input(), { target: { value: 'junk' } });

    fireEvent.keyDown(input(), { key: 'Escape' });
    expect(useGridStore.getState().textEdit).toBeNull();
    expect(calls).toContainEqual(['insert_text', 0, 5, 10, 2, 1, '567']);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });

  it('keystrokes do not bubble out of the input (global shortcuts never see them)', () => {
    setup();
    act(() => useGridStore.getState().beginTextEditAt(0));
    let leaked = 0;
    const spy = () => { leaked++; };
    window.addEventListener('keydown', spy);
    fireEvent.keyDown(input(), { key: 's' }); // would switch to the select tool
    window.removeEventListener('keydown', spy);
    expect(leaked).toBe(0);
  });

  it('is positioned over the text frame through the camera', () => {
    // Frame top-left (r 5, c 10) fine units; cam (4, 6, zoom 2):
    // left = (10*2 - 4)*2 = 32, top = (5*2 - 6)*2 + header.
    setup({ x: 4, y: 6, zoom: 2 });
    act(() => useGridStore.getState().beginTextEditAt(0));
    const el = input();
    expect(el.style.left).toBe('32px');
    expect(el.style.top).toBe(`${4 * 2 + HEADER_HEIGHT}px`);
    // Font em = size(1 cell) * 16 world px * zoom 2.
    expect(el.style.font).toContain(`${CELL_UNITS * CELL_SIZE * 2}px`);
  });

  it('picking a text size mid-edit resizes the input font live', () => {
    setup();
    act(() => useGridStore.getState().beginTextEditAt(0));
    act(() => useGridStore.getState().pickTextSize(3));
    expect(input().style.font).toContain(`${3 * CELL_UNITS * CELL_SIZE}px`);
  });
});
