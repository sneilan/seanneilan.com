import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useGridStore } from '../../store/gridStore';
import { makeGrid } from '../../store/testGrid';
import { useCameraControls } from './useCameraControls';

/**
 * Regression: panning/zooming re-renders the scene inside the WASM set_camera,
 * which used to wipe the orange selection outlines until the next selection
 * event. applyCamera must re-apply the highlights after moving the camera.
 */

// The recording mock doesn't log camera/render calls by default; wire them into
// the shared calls array so we can assert the exact repaint order.
function makeCameraGrid() {
  const m = makeGrid({ squares: [[0, 0, 2, 8]] });
  m.grid.set_camera = (x, y, zoom) => { m.calls.push(['set_camera', x, y, zoom]); };
  m.grid.render = () => { m.calls.push(['render']); };
  m.grid.highlight_square = (idx) => { m.calls.push(['highlight_square', idx]); };
  return m;
}

function renderControls(grid: ReturnType<typeof makeGrid>['grid']) {
  const canvasRef = { current: null };
  return renderHook(() => useCameraControls(grid, canvasRef));
}

describe('useCameraControls applyCamera', () => {
  beforeEach(() => {
    useGridStore.setState({ grid: null, selectedItems: [] });
  });

  it('re-applies selection highlights after moving the camera', () => {
    const m = makeCameraGrid();
    useGridStore.setState({ grid: m.grid, selectedItems: [{ type: 'cell', index: 0 }] });
    const { result } = renderControls(m.grid);

    act(() => result.current.applyCamera({ x: 10, y: 20, zoom: 2 }));

    // set_camera repaints the bare scene; the highlight must come back after.
    expect(m.calls).toEqual([
      ['set_camera', 10, 20, 2],
      ['render'],
      ['highlight_square', 0],
    ]);
    expect(result.current.cam).toEqual({ x: 10, y: 20, zoom: 2 });
  });

  it('pans with no selection in a single render (no redundant repaint)', () => {
    const m = makeCameraGrid();
    useGridStore.setState({ grid: m.grid, selectedItems: [] });
    const { result } = renderControls(m.grid);

    act(() => result.current.applyCamera({ x: 5, y: 5, zoom: 1 }));

    expect(m.calls).toEqual([['set_camera', 5, 5, 1]]);
  });
});
