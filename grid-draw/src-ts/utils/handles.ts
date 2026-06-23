/**
 * Resize-handle geometry and hit-testing for a single selected line or rect.
 *
 * Shapes are stored as grid-intersection coordinates [r1, c1, r2, c2].
 * Handles are positioned in the same grid-unit space; callers convert to
 * pixels with CELL_SIZE for drawing and hit-testing.
 */

export type HandlePoint = {
  /** Handle index. Lines: 0,1 (endpoints). Rects: 0..7 clockwise from top-left. */
  handle: number;
  /** Row in grid-intersection units (may be fractional for rect edge midpoints). */
  r: number;
  /** Col in grid-intersection units. */
  c: number;
};

/** Two endpoint handles for a line: [r1, c1, r2, c2]. */
export function getLineHandles(coords: ArrayLike<number>): HandlePoint[] {
  if (coords.length < 4) return [];
  return [
    { handle: 0, r: coords[0], c: coords[1] },
    { handle: 1, r: coords[2], c: coords[3] },
  ];
}

/**
 * Eight handles for a rect: 4 corners + 4 edge midpoints, clockwise from
 * top-left. Indices: 0=TL, 1=top, 2=TR, 3=right, 4=BR, 5=bottom, 6=BL, 7=left.
 */
export function getRectHandles(coords: ArrayLike<number>): HandlePoint[] {
  if (coords.length < 4) return [];
  const minR = Math.min(coords[0], coords[2]);
  const maxR = Math.max(coords[0], coords[2]);
  const minC = Math.min(coords[1], coords[3]);
  const maxC = Math.max(coords[1], coords[3]);
  const midR = (minR + maxR) / 2;
  const midC = (minC + maxC) / 2;
  return [
    { handle: 0, r: minR, c: minC },
    { handle: 1, r: minR, c: midC },
    { handle: 2, r: minR, c: maxC },
    { handle: 3, r: midR, c: maxC },
    { handle: 4, r: maxR, c: maxC },
    { handle: 5, r: maxR, c: midC },
    { handle: 6, r: maxR, c: minC },
    { handle: 7, r: midR, c: minC },
  ];
}

/**
 * Return the handle whose pixel center is within `tolerance` px of (x, y),
 * picking the nearest if several match. Returns null if none are close.
 */
export function hitTestHandle(
  x: number,
  y: number,
  handles: HandlePoint[],
  cellSize: number,
  tolerance: number
): HandlePoint | null {
  let best: HandlePoint | null = null;
  let bestDistSq = tolerance * tolerance;
  for (const h of handles) {
    const hx = h.c * cellSize;
    const hy = h.r * cellSize;
    const distSq = (hx - x) * (hx - x) + (hy - y) * (hy - y);
    if (distSq <= bestDistSq) {
      best = h;
      bestDistSq = distSq;
    }
  }
  return best;
}

/** CSS cursor for a rect handle index (corners diagonal, edges straight). */
export function cursorForRectHandle(handle: number): string {
  switch (handle) {
    case 0:
    case 4:
      return 'nwse-resize';
    case 2:
    case 6:
      return 'nesw-resize';
    case 1:
    case 5:
      return 'ns-resize';
    case 3:
    case 7:
      return 'ew-resize';
    default:
      return 'default';
  }
}
