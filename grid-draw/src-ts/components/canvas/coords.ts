import { CELL_SIZE, CELL_UNITS } from './constants';

export type Camera = { x: number; y: number; zoom: number };

// Coordinate helpers. getCanvasXY returns WORLD pixels (screen → world through
// the camera): world = screen/zoom + cam. Everything downstream (cell coords,
// hit tests) works in world space; only WASM render applies the camera.
export function getCanvasXY(event: React.MouseEvent<HTMLCanvasElement>, cam: Camera) {
  const canvas = event.currentTarget;
  const rect = canvas.getBoundingClientRect();
  const screenX = (event.clientX - rect.left) * (canvas.width / rect.width);
  const screenY = (event.clientY - rect.top) * (canvas.height / rect.height);
  return { x: screenX / cam.zoom + cam.x, y: screenY / cam.zoom + cam.y };
}

// Fine units per snap step at the given subdivision (8 = whole cell, 4 = half,
// 2 = quarter, 1 = eighth). Snapping quantizes to this in fine units.
export function snapStep(subdivision: number): number {
  return CELL_UNITS / subdivision;
}

// Top-left of the cell/block the pointer is over, snapped to the subgrid.
export function getCellCoords(event: React.MouseEvent<HTMLCanvasElement>, cam: Camera, subdivision: number) {
  const { x, y } = getCanvasXY(event, cam);
  const step = snapStep(subdivision);
  const snap = (v: number) => Math.floor(Math.floor(v / CELL_SIZE) / step) * step;
  return { col: snap(x), row: snap(y) };
}

// Nearest sub-grid intersection (for line/rect endpoints). Infinite grid: no clamp.
export function getIntersectionCoords(event: React.MouseEvent<HTMLCanvasElement>, cam: Camera, subdivision: number) {
  const { x, y } = getCanvasXY(event, cam);
  const step = snapStep(subdivision);
  const snap = (v: number) => Math.round(v / CELL_SIZE / step) * step;
  return { col: snap(x), row: snap(y) };
}
