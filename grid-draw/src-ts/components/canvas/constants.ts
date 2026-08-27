// World px per FINE unit; a whole cell is CELL_UNITS of these (see src/lib.rs).
export const CELL_SIZE = 2;
export const CELL_UNITS = 8;
export const HEADER_HEIGHT = 48;

export const BASE = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/grid-draw/';

export const COLORS = [
  { hex: '#000000', name: 'Black' },
  { hex: '#ffffff', name: 'White' },
  { hex: '#cc3333', name: 'Red' },
  { hex: '#ffcc00', name: 'Yellow' },
  { hex: '#2266dd', name: 'Blue' },
  { hex: '#22aa22', name: 'Green' },
  { hex: null, name: 'Transparent' },
];

// A text frame [r, c, color, boxW, boxH, ...] as rect corners [r1,c1,r2,c2] so
// it can reuse the rect resize-handle geometry.
export function textFrameCorners(a: ArrayLike<number>): number[] {
  return [a[0], a[1], a[0] + a[4], a[1] + a[3]];
}

// A design with no drawable content — used to flag an empty prediction (the
// untrained local model often returns this) so the status isn't misleading.
export function isEmptyDesign(d: { cells?: unknown[]; lines?: unknown[]; rects?: unknown[]; texts?: unknown[] }): boolean {
  return (d.cells?.length ?? 0) + (d.lines?.length ?? 0) + (d.rects?.length ?? 0) + (d.texts?.length ?? 0) === 0;
}

// Visible canvas size in CSS pixels (the viewport below the header). The world
// behind it is infinite; only this window is ever drawn.
export function calculateViewport() {
  return {
    w: Math.max(1, window.innerWidth),
    h: Math.max(1, window.innerHeight - HEADER_HEIGHT),
  };
}
