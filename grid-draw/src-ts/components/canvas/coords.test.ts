import { describe, it, expect, afterEach } from 'vitest';
import {
  getCanvasXY,
  getCellCoords,
  getIntersectionCoords,
  snapStep,
  type Camera,
} from './coords';
import {
  CELL_UNITS,
  HEADER_HEIGHT,
  isEmptyDesign,
  textFrameCorners,
  calculateViewport,
} from './constants';

// The pure coord helpers take a React.MouseEvent<HTMLCanvasElement>; grab that
// param type so the test's minimal event mock stays in sync without importing React.
type CanvasEvt = Parameters<typeof getCanvasXY>[0];

/**
 * Minimal event mock: only the fields the coord helpers read (clientX/Y and a
 * currentTarget with getBoundingClientRect + intrinsic width/height). Passing a
 * canvas width that differs from the CSS rect width exercises the DPR scale
 * factor (screen px = css px * canvas.width / rect.width).
 */
function makeEvent(
  clientX: number,
  clientY: number,
  rect: { left: number; top: number; width: number; height: number },
  canvasW: number = rect.width,
  canvasH: number = rect.height,
): CanvasEvt {
  return {
    clientX,
    clientY,
    currentTarget: {
      width: canvasW,
      height: canvasH,
      getBoundingClientRect: () => ({
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      }),
    },
  } as unknown as CanvasEvt;
}

// An event on a 1:1 canvas anchored at the origin, so screen px === client px
// and world = screen/zoom + cam. Keeps the snap-math tests easy to reason about.
const identityEvent = (clientX: number, clientY: number) =>
  makeEvent(clientX, clientY, { left: 0, top: 0, width: 100, height: 100 }, 100, 100);

describe('getCanvasXY: screen → world transform', () => {
  it('applies rect offset, DPR scale, zoom and camera together', () => {
    // rect 100px wide but canvas buffer 200px → 2× DPR scale.
    const evt = makeEvent(60, 70, { left: 10, top: 20, width: 100, height: 100 }, 200, 200);
    const cam: Camera = { x: 5, y: -3, zoom: 2 };
    // screenX = (60-10)*(200/100) = 100; world.x = 100/2 + 5 = 55.
    // screenY = (70-20)*(200/100) = 100; world.y = 100/2 - 3 = 47.
    expect(getCanvasXY(evt, cam)).toEqual({ x: 55, y: 47 });
  });

  it('is the identity map for a 1:1 canvas at the origin with the default camera', () => {
    const cam: Camera = { x: 0, y: 0, zoom: 1 };
    expect(getCanvasXY(identityEvent(37, 42), cam)).toEqual({ x: 37, y: 42 });
  });
});

describe('snapStep: fine units per snap step', () => {
  it('maps each subdivision to CELL_UNITS/subdivision', () => {
    expect(snapStep(1)).toBe(CELL_UNITS);     // whole cell = 8
    expect(snapStep(2)).toBe(CELL_UNITS / 2); // half = 4
    expect(snapStep(4)).toBe(CELL_UNITS / 4); // quarter = 2
    expect(snapStep(8)).toBe(CELL_UNITS / 8); // eighth = 1
  });
});

describe('getCellCoords vs getIntersectionCoords: floor vs round snapping', () => {
  const cam: Camera = { x: 0, y: 0, zoom: 1 };

  it('cell coords floor-snap while intersection coords round-snap at subdivision 8', () => {
    // step = 1. world x = 37 → v/2 = 18.5: floor = 18, round = 19.
    const evt = identityEvent(37, 37);
    expect(getCellCoords(evt, cam, 8)).toEqual({ col: 18, row: 18 });
    expect(getIntersectionCoords(evt, cam, 8)).toEqual({ col: 19, row: 19 });
  });

  it('snaps to the subgrid step at subdivision 2 (step 4)', () => {
    // step = 4. world x = 45 → floor(45/2)=22, /4=5.5 → floor 5 → 20.
    // round path: 45/2/4 = 5.625 → round 6 → 24.
    const evt = identityEvent(45, 45);
    expect(getCellCoords(evt, cam, 2)).toEqual({ col: 20, row: 20 });
    expect(getIntersectionCoords(evt, cam, 2)).toEqual({ col: 24, row: 24 });
  });

  it('honors the camera when snapping (world coords, not screen)', () => {
    // cam offset shifts the world point before snapping.
    const cam2: Camera = { x: 10, y: 10, zoom: 1 };
    const evt = identityEvent(6, 6); // world 6+10 = 16 → floor(16/2)=8, /8=1 → 8
    expect(getCellCoords(evt, cam2, 1)).toEqual({ col: 8, row: 8 });
  });
});

describe('constants: textFrameCorners', () => {
  it('expands a text frame [r,c,color,boxW,boxH] into rect corners [r1,c1,r2,c2]', () => {
    // a[0]=r, a[1]=c, a[3]=boxW, a[4]=boxH → [r, c, r+boxH, c+boxW].
    expect(textFrameCorners([2, 3, 0, 4, 5])).toEqual([2, 3, 7, 7]);
  });
});

describe('constants: isEmptyDesign', () => {
  it('is true only when no cells/lines/rects/texts are present', () => {
    expect(isEmptyDesign({})).toBe(true);
    expect(isEmptyDesign({ cells: [], lines: [], rects: [], texts: [] })).toBe(true);
    expect(isEmptyDesign({ cells: [[0, 0, 0]] })).toBe(false);
    expect(isEmptyDesign({ texts: [['x']] })).toBe(false);
  });
});

describe('constants: calculateViewport min-clamping', () => {
  const origW = Object.getOwnPropertyDescriptor(window, 'innerWidth');
  const origH = Object.getOwnPropertyDescriptor(window, 'innerHeight');
  const setWindow = (w: number, h: number) => {
    Object.defineProperty(window, 'innerWidth', { value: w, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: h, configurable: true });
  };
  afterEach(() => {
    if (origW) Object.defineProperty(window, 'innerWidth', origW);
    if (origH) Object.defineProperty(window, 'innerHeight', origH);
  });

  it('returns the window size below the header for a normal window', () => {
    setWindow(1024, 768);
    expect(calculateViewport()).toEqual({ w: 1024, h: 768 - HEADER_HEIGHT });
  });

  it('clamps width and height to a minimum of 1', () => {
    setWindow(0, 10); // width 0 → 1; height 10 < header 48 → 1
    expect(calculateViewport()).toEqual({ w: 1, h: 1 });
  });
});
