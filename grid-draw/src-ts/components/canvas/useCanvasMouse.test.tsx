import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import type React from 'react';
import { useGridStore } from '../../store/gridStore';
import { makeGrid } from '../../store/testGrid';
import { useCanvasMouse } from './useCanvasMouse';
import type { Camera } from './coords';
import { makeCanvas, makeCanvasMouseEvent, type CanvasMouseInit } from './testEvents';
import type { DrawTool } from '../../store/gridStore';

/**
 * Behavioral coverage for the four canvas mouse handlers (useCanvasMouse). These
 * drive real store actions through the recording WASM mock (store/testGrid) and
 * assert the document-level effects: pan gestures (never mutating the doc), the
 * single-undo draw stroke batch, line/rect commit-on-release at intersection
 * coords, and the select-tool box/drag/cancel branches.
 *
 * A note on coordinates: getCanvasXY maps screen→world via the canvas
 * rect/size. We give the fake canvas a 1:1 rect (width === bounding width) and a
 * default camera (x:0, y:0, zoom:1) so world x === clientX. With subdivision 1
 * (CELL_SIZE 2, step 8) a whole "cell" spans 16 world px, so clientX 8 → cell 0.
 */

type Deps = {
  grid: ReturnType<typeof makeGrid>['grid'];
  camRef: React.MutableRefObject<Camera>;
  applyCamera: (next: Camera) => void;
  isSpaceDown: React.MutableRefObject<boolean>;
  panRef: React.MutableRefObject<{ x: number; y: number; camX: number; camY: number } | null>;
};

// Minimal fake React.MouseEvent backed by a real jsdom <canvas> whose 1:1 rect
// matches its buffer (so world x === clientX) and whose style.cursor the pan
// handler can set for real. See ./testEvents for the honestly-typed factory.
function mouseEvent(over: CanvasMouseInit = {}): React.MouseEvent<HTMLCanvasElement> {
  const canvas = makeCanvas({ width: 800, height: 600, rect: { left: 0, top: 0, width: 800, height: 600 } });
  return makeCanvasMouseEvent(canvas, over);
}

// testGrid omits the vector hit-test methods (they're canvas/WASM geometry).
// The select tool always probes them first, so stub them as misses; a filled
// cell (if any) then decides the hit via hitTestShapes' fallthrough.
function withHitTests(grid: ReturnType<typeof makeGrid>['grid']) {
  grid.hit_test_line = () => -1;
  grid.hit_test_text = () => -1;
  grid.hit_test_rect = () => -1;
  return grid;
}

function makeDeps(grid: ReturnType<typeof makeGrid>['grid']): Deps {
  return {
    grid,
    camRef: { current: { x: 0, y: 0, zoom: 1 } },
    applyCamera: vi.fn(),
    isSpaceDown: { current: false },
    panRef: { current: null },
  };
}

// Baseline store state for a mouse test: real actions, mock grid, chosen tool.
function setupStore(grid: ReturnType<typeof makeGrid>['grid'], tool: DrawTool) {
  useGridStore.getState().resetHistory();
  useGridStore.setState({
    grid,
    tool,
    colorIdx: 0,
    outlineIdx: 6,
    subdivision: 1,
    lineWidth: 1,
    isDrawing: false,
    drawMode: false,
    lineStart: null,
    rectStart: null,
    textEdit: null,
    selectedItems: [],
    selectMode: null,
    selectBoxStart: null,
    selectDragStart: null,
    dragStartedOnEmpty: false,
    isSelecting: false,
    previousSelection: [],
  });
}

describe('useCanvasMouse — pan gesture', () => {
  beforeEach(() => useGridStore.getState().resetHistory());

  it('middle-button mousedown starts a pan (no document mutation)', () => {
    const { grid, calls } = makeGrid();
    setupStore(grid, 'draw');
    const deps = makeDeps(grid);
    const { result } = renderHook(() => useCanvasMouse(deps));

    const ev = mouseEvent({ button: 1, clientX: 100, clientY: 100 });
    act(() => result.current.handleMouseDown(ev));

    expect(deps.panRef.current).toEqual({ x: 100, y: 100, camX: 0, camY: 0 });
    expect(ev.preventDefault).toHaveBeenCalled();
    expect(ev.currentTarget.style.cursor).toBe('grabbing');
    // Pan must not touch the document (no draw color / cell writes).
    expect(calls.some(([name]) => name === 'set_cell' || name === 'set_draw_color')).toBe(false);
  });

  it('active pan: mousemove moves the camera via applyCamera, not the store', () => {
    const { grid, calls } = makeGrid();
    setupStore(grid, 'draw');
    const deps = makeDeps(grid);
    deps.panRef.current = { x: 100, y: 100, camX: 0, camY: 0 };
    const { result } = renderHook(() => useCanvasMouse(deps));

    act(() => result.current.handleMouseMove(mouseEvent({ clientX: 150, clientY: 120 })));

    // world delta = screen delta / zoom, camera moves opposite the cursor.
    expect(deps.applyCamera).toHaveBeenCalledWith({ x: -50, y: -20, zoom: 1 });
    expect(calls.some(([name]) => name === 'set_cell')).toBe(false);
    expect(useGridStore.getState().isDrawing).toBe(false);
  });

  it('space-held left-drag mousedown starts a pan', () => {
    const { grid } = makeGrid();
    setupStore(grid, 'draw');
    const deps = makeDeps(grid);
    deps.isSpaceDown.current = true;
    const { result } = renderHook(() => useCanvasMouse(deps));

    const ev = mouseEvent({ button: 0, clientX: 40, clientY: 40 });
    act(() => result.current.handleMouseDown(ev));

    expect(deps.panRef.current).toEqual({ x: 40, y: 40, camX: 0, camY: 0 });
    expect(useGridStore.getState().isDrawing).toBe(false);
  });
});

describe('useCanvasMouse — draw tool', () => {
  beforeEach(() => useGridStore.getState().resetHistory());

  it('wraps a down→up stroke in a single undo batch (one undo restores every painted cell)', () => {
    const { grid } = makeGrid();
    setupStore(grid, 'draw');
    const deps = makeDeps(grid);
    const { result } = renderHook(() => useCanvasMouse(deps));

    act(() => result.current.handleMouseDown(mouseEvent({ clientX: 8, clientY: 8 })));
    // A whole-cell block at subdivision 1 fills CELL_UNITS² = 64 fine cells.
    const painted = grid.get_cell_count();
    expect(painted).toBe(64);
    expect(useGridStore.getState().isDrawing).toBe(true);

    act(() => result.current.handleMouseUp(mouseEvent({ clientX: 8, clientY: 8 })));
    expect(useGridStore.getState().isDrawing).toBe(false);

    // Exactly one undo step for the whole stroke.
    expect(useGridStore.getState().canUndo()).toBe(true);
    act(() => useGridStore.getState().undo());
    expect(grid.get_cell_count()).toBe(0);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });
});

describe('useCanvasMouse — line / rect commit on release', () => {
  beforeEach(() => useGridStore.getState().resetHistory());

  it('line tool commits one line on mouseup at intersection-snapped coords', () => {
    const { grid, calls } = makeGrid();
    grid.render_with_line = () => {};
    setupStore(grid, 'line');
    const deps = makeDeps(grid);
    const { result } = renderHook(() => useCanvasMouse(deps));

    act(() => result.current.handleMouseDown(mouseEvent({ clientX: 0, clientY: 0 })));
    expect(useGridStore.getState().lineStart).toEqual({ row: 0, col: 0 });

    // clientX 32 → world 32 → /CELL_SIZE(2)/step(8) = 2 → *8 = 16 (intersection snap).
    act(() => result.current.handleMouseUp(mouseEvent({ clientX: 32, clientY: 32 })));

    const insert = calls.find(([name]) => name === 'insert_line');
    expect(insert).toBeDefined();
    // recorded as ['insert_line', idx, r1, c1, r2, c2, color]
    expect(insert!.slice(2, 6)).toEqual([0, 0, 16, 16]);
    expect(grid.get_line_count()).toBe(1);
    expect(useGridStore.getState().lineStart).toBeNull();
  });

  it('rect tool commits one rect on mouseup at intersection-snapped coords', () => {
    const { grid, calls } = makeGrid();
    grid.render_with_rect = () => {};
    setupStore(grid, 'rect');
    const deps = makeDeps(grid);
    const { result } = renderHook(() => useCanvasMouse(deps));

    act(() => result.current.handleMouseDown(mouseEvent({ clientX: 0, clientY: 0 })));
    expect(useGridStore.getState().rectStart).toEqual({ row: 0, col: 0 });

    act(() => result.current.handleMouseUp(mouseEvent({ clientX: 32, clientY: 16 })));

    const insert = calls.find(([name]) => name === 'insert_rect');
    expect(insert).toBeDefined();
    // ['insert_rect', idx, r1, c1, r2, c2, ...]; clientY 16 → 8, clientX 32 → 16.
    expect(insert!.slice(2, 6)).toEqual([0, 0, 8, 16]);
    expect(grid.get_rect_count()).toBe(1);
    expect(useGridStore.getState().rectStart).toBeNull();
  });
});

describe('useCanvasMouse — select tool', () => {
  beforeEach(() => useGridStore.getState().resetHistory());

  it('mousedown on empty space starts a box selection', () => {
    const { grid } = makeGrid();
    withHitTests(grid);
    setupStore(grid, 'select');
    const deps = makeDeps(grid);
    const { result } = renderHook(() => useCanvasMouse(deps));

    act(() => result.current.handleMouseDown(mouseEvent({ clientX: 8, clientY: 8 })));

    expect(useGridStore.getState().selectMode).toBe('box');
    expect(useGridStore.getState().isSelecting).toBe(true);
    expect(useGridStore.getState().selectBoxStart).toEqual({ row: 0, col: 0 });
  });

  it('mousedown on a shape selects it and starts a drag', () => {
    // A filled cell at (0,0) is the hit target (testGrid has no vector hit-tests,
    // so hitTestShapes falls through to the filled-cell check).
    const { grid } = makeGrid({ cell: (r, c) => r === 0 && c === 0 });
    withHitTests(grid);
    setupStore(grid, 'select');
    const deps = makeDeps(grid);
    const { result } = renderHook(() => useCanvasMouse(deps));

    act(() => result.current.handleMouseDown(mouseEvent({ clientX: 8, clientY: 8 })));

    expect(useGridStore.getState().selectedItems).toEqual([{ type: 'cell', row: 0, col: 0 }]);
    expect(useGridStore.getState().selectMode).toBe('drag');
    expect(useGridStore.getState().isSelecting).toBe(true);
  });

  it('mouseleave cancels the active box-selection gesture', () => {
    const { grid } = makeGrid();
    withHitTests(grid);
    setupStore(grid, 'select');
    const deps = makeDeps(grid);
    const { result } = renderHook(() => useCanvasMouse(deps));

    act(() => result.current.handleMouseDown(mouseEvent({ clientX: 8, clientY: 8 })));
    expect(useGridStore.getState().selectMode).toBe('box');

    act(() => result.current.handleMouseLeave());

    expect(useGridStore.getState().selectMode).toBeNull();
    expect(useGridStore.getState().isSelecting).toBe(false);
  });
});
