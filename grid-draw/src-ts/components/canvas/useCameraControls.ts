import { useCallback, useEffect, useRef, useState } from 'react';
import type { GridCanvasWasm } from '../../types/grid';
import { useGridStore } from '../../store/gridStore';
import { HEADER_HEIGHT } from './constants';
import type { Camera } from './coords';

const ZOOM_MIN = 0.25;
const ZOOM_MAX = 12;

export type PanGesture = { x: number; y: number; camX: number; camY: number };

/**
 * Camera over the infinite world: (x, y) is the world-pixel coordinate shown at
 * the canvas top-left; zoom is the scale. The WASM grid renders through it
 * (screen = (world - cam)·zoom). Pushed to WASM via applyCamera on every change
 * — no CSS transform; the canvas is a fixed viewport-sized window.
 *
 * Also owns the pan gesture plumbing (Space-held / middle-mouse drag state) and
 * scroll-to-zoom, which needs a native (non-passive) wheel listener.
 */
export function useCameraControls(grid: GridCanvasWasm | null, canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const [cam, setCam] = useState<Camera>({ x: 0, y: 0, zoom: 1 });
  // Mirror `cam` in a ref so the mouse handlers can read the latest pan/zoom
  // without listing `cam` in their deps (which changes on every pan frame).
  const camRef = useRef(cam);
  camRef.current = cam;

  // Pan: hold Space or use the middle mouse button and drag to move the canvas.
  // isSpaceDown gates left-drag panning; spaceHeld drives the cursor; panRef
  // holds the gesture's start screen point and the camera at gesture start.
  const isSpaceDown = useRef(false);
  const [spaceHeld, setSpaceHeld] = useState(false);
  const panRef = useRef<PanGesture | null>(null);

  // Set the camera in both React state (for the % indicator) and the WASM grid
  // (which re-renders). The single chokepoint for moving/zooming the view.
  const applyCamera = useCallback((next: Camera) => {
    setCam(next);
    if (!grid) return;
    grid.set_camera(next.x, next.y, next.zoom);
    // set_camera re-rendered the scene without selection highlights; put them
    // back. Skipped when nothing is selected so panning stays one render/frame.
    const store = useGridStore.getState();
    if (store.selectedItems.length > 0) store.renderSelection();
  }, [grid]);

  const resetView = useCallback(() => applyCamera({ x: 0, y: 0, zoom: 1 }), [applyCamera]);

  // Scroll-to-zoom centered on the cursor. Attached natively (not via React's
  // onWheel) so we can preventDefault — React's wheel listener is passive and
  // can't stop the page from scrolling. The canvas top-left is fixed at
  // (0, HEADER_HEIGHT); we keep the WORLD point under the cursor stationary by
  // solving for the camera offset at the new zoom.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const v = camRef.current;
      const factor = e.deltaY < 0 ? 1.1 : 1 / 1.1;
      const zoom = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, v.zoom * factor));
      if (zoom === v.zoom) return;
      // Cursor position in canvas/screen pixels (canvas top-left = 0, HEADER).
      const sx = e.clientX;
      const sy = e.clientY - HEADER_HEIGHT;
      // Keep the world point under the cursor fixed: cam' = cam + s*(1/z - 1/z').
      const x = v.x + sx * (1 / v.zoom - 1 / zoom);
      const y = v.y + sy * (1 / v.zoom - 1 / zoom);
      applyCamera({ x, y, zoom });
    };
    canvas.addEventListener('wheel', onWheel, { passive: false });
    return () => canvas.removeEventListener('wheel', onWheel);
  }, [applyCamera, canvasRef]);

  // Track Spacebar to enable pan-drag. External DOM subscription (keydown/keyup);
  // ignored while editing text so the space still types. preventDefault stops the
  // page from scrolling on space.
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.code !== 'Space' || useGridStore.getState().textEdit) return;
      e.preventDefault();
      isSpaceDown.current = true;
      setSpaceHeld(true);
    };
    const up = (e: KeyboardEvent) => {
      if (e.code !== 'Space') return;
      isSpaceDown.current = false;
      setSpaceHeld(false);
    };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up); };
  }, []);

  return { cam, camRef, applyCamera, resetView, spaceHeld, isSpaceDown, panRef };
}
