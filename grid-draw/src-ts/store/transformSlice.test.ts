import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore, type ResizeTarget } from './gridStore';
import { snapQuarterTurns, rotateQuarter } from './gridHelpers';
import type { GridCanvasWasm } from '../types/grid';
import { stubWasm } from './wasmStub';

/**
 * Covers the transform slice's RESIZE lifecycle (start/update/finish/cancel for
 * line/rect/text/image) plus the rotate gesture's non-commit paths (cancelRotate,
 * the null-origin guard) and the pure rotation-math helpers. The rotate COMMIT
 * paths (finishRotate for cells/lines/rects/text + undo) live in rotate.test.ts;
 * we deliberately don't duplicate them here.
 *
 * The mock grid models mutable geometry for each shape kind so a resize gesture
 * round-trips: startResize reads the origin, update/finish mutate via the "live"
 * setters, and cancel restores through the absolute setters. Whatever a setter
 * stores is read straight back, so finishResize's from→to edit is self-consistent
 * and its inverse (undo) lands exactly on the captured origin.
 */
function makeResizeGrid(opts?: {
  lines?: number[][];
  rects?: number[][];
  texts?: number[][];
  images?: number[][];
}) {
  const lines = opts?.lines ?? [];   // [r1, c1, r2, c2, color, width]
  const rects = opts?.rects ?? [];   // [r1, c1, r2, c2, fill, outline]
  const texts = opts?.texts ?? [];   // [r, c, color, boxW, boxH, halign, valign]
  const images = opts?.images ?? []; // [r1, c1, r2, c2]

  const g: Partial<GridCanvasWasm> = {
    // --- readers ---
    get_line: (i) => Int32Array.from(lines[i] ?? []),
    get_rect: (i) => Int32Array.from(rects[i] ?? []),
    get_text: (i) => Int32Array.from(texts[i] ?? []),
    get_image: (i) => Int32Array.from(images[i] ?? []),
    get_line_count: () => lines.length,
    get_rect_count: () => rects.length,
    get_text_count: () => texts.length,
    get_image_count: () => images.length,
    get_text_size: () => 1,
    get_text_string: () => '',
    get_image_url: () => '',
    get_cell_size: () => 16,
    get_cell: () => false,
    get_cell_color: () => 0,

    // --- live-preview setters (updateResize/finishResize) ---
    // Endpoint `handle` (0 or 1) follows the cursor.
    set_line_endpoint: (i, handle, r, c) => {
      if (handle === 0) { lines[i][0] = r; lines[i][1] = c; } else { lines[i][2] = r; lines[i][3] = c; }
    },
    // The mock resizes by dragging the bottom-right corner (handle is ignored;
    // the exact corner math is WASM's job — we only need a deterministic change).
    resize_rect: (i, _handle, r, c) => { rects[i][2] = r; rects[i][3] = c; },
    resize_image: (i, _handle, r, c) => { images[i][2] = r; images[i][3] = c; },
    // Text grows its frame to the cursor from its (fixed) top-left anchor.
    resize_text: (i, _handle, r, c) => { texts[i][3] = c - texts[i][1]; texts[i][4] = r - texts[i][0]; },

    // --- absolute setters (cancelResize + applyEdit of the committed edit) ---
    set_line: (i, r1, c1, r2, c2) => { lines[i][0] = r1; lines[i][1] = c1; lines[i][2] = r2; lines[i][3] = c2; },
    set_rect: (i, r1, c1, r2, c2) => { rects[i][0] = r1; rects[i][1] = c1; rects[i][2] = r2; rects[i][3] = c2; },
    set_image_geom: (i, r1, c1, r2, c2) => { images[i][0] = r1; images[i][1] = c1; images[i][2] = r2; images[i][3] = c2; },
    set_text_frame: (i, r, c, boxW, boxH) => { texts[i][0] = r; texts[i][1] = c; texts[i][3] = boxW; texts[i][4] = boxH; },

    // --- rendering / highlight no-ops ---
    render: () => {},
    highlight_cell: () => {},
    highlight_line: () => {},
    highlight_rect: () => {},
    highlight_text: () => {},
    highlight_image: () => {},
    draw_handle: () => {},
  };
  return { g: { ...stubWasm(), ...g }, lines, rects, texts, images };
}

function resetStore(grid: GridCanvasWasm | null) {
  useGridStore.setState({
    grid,
    selectedItems: [],
    selectMode: null,
    isSelecting: false,
    resizeTarget: null,
    resizeOrigin: null,
    rotateOrigin: null,
  });
  useGridStore.getState().resetHistory();
}

describe('transform: resize lifecycle', () => {
  beforeEach(() => resetStore(null));

  it('line: startResize captures origin, finishResize commits one undoable edit', () => {
    const { g, lines } = makeResizeGrid({ lines: [[0, 0, 2, 2, 0, 10]] });
    resetStore(g);
    const target: ResizeTarget = { shape: 'line', index: 0, handle: 1 };

    useGridStore.getState().startResize(target);
    // Origin geometry captured for finish/cancel; gesture is now active.
    expect(useGridStore.getState().resizeOrigin).toEqual({ r1: 0, c1: 0, r2: 2, c2: 2 });
    expect(useGridStore.getState().selectMode).toBe('resize');

    // Live preview drags endpoint 1 partway...
    useGridStore.getState().updateResize({ row: 5, col: 5 });
    expect(lines[0].slice(0, 4)).toEqual([0, 0, 5, 5]);

    // ...then release commits the final position as a single edit.
    useGridStore.getState().finishResize({ row: 7, col: 7 });
    expect(lines[0].slice(0, 4)).toEqual([0, 0, 7, 7]);
    // Gesture state fully cleared.
    expect(useGridStore.getState().selectMode).toBeNull();
    expect(useGridStore.getState().resizeTarget).toBeNull();
    expect(useGridStore.getState().resizeOrigin).toBeNull();

    // One undo reverses the whole resize back to the captured origin.
    expect(useGridStore.getState().canUndo()).toBe(true);
    useGridStore.getState().undo();
    expect(lines[0].slice(0, 4)).toEqual([0, 0, 2, 2]);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });

  it('rect: finishResize commits a single from→to edit reversed by one undo', () => {
    const { g, rects } = makeResizeGrid({ rects: [[1, 1, 3, 3, 0, 6]] });
    resetStore(g);

    useGridStore.getState().startResize({ shape: 'rect', index: 0, handle: 4 });
    expect(useGridStore.getState().resizeOrigin).toEqual({ r1: 1, c1: 1, r2: 3, c2: 3 });

    useGridStore.getState().finishResize({ row: 6, col: 8 });
    expect(rects[0].slice(0, 4)).toEqual([1, 1, 6, 8]);

    useGridStore.getState().undo();
    expect(rects[0].slice(0, 4)).toEqual([1, 1, 3, 3]);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });

  it('image: resize commits and undoes in one step', () => {
    const { g, images } = makeResizeGrid({ images: [[0, 0, 4, 4]] });
    resetStore(g);

    useGridStore.getState().startResize({ shape: 'image', index: 0, handle: 4 });
    expect(useGridStore.getState().resizeOrigin).toEqual({ r1: 0, c1: 0, r2: 4, c2: 4 });

    useGridStore.getState().finishResize({ row: 10, col: 10 });
    expect(images[0]).toEqual([0, 0, 10, 10]);

    useGridStore.getState().undo();
    expect(images[0]).toEqual([0, 0, 4, 4]);
  });

  it('text: resize captures the frame and commits a setTextFrame edit', () => {
    const { g, texts } = makeResizeGrid({ texts: [[2, 3, 0, 4, 4, 0, 0]] });
    resetStore(g);

    useGridStore.getState().startResize({ shape: 'text', index: 0, handle: 4 });
    // textFrame = { r, c, boxW, boxH } from [r, c, color, boxW, boxH, ...].
    expect(useGridStore.getState().resizeOrigin).toEqual({ r: 2, c: 3, boxW: 4, boxH: 4 });

    // Frame grows to (row 9, col 11): boxW = 11-3 = 8, boxH = 9-2 = 7.
    useGridStore.getState().finishResize({ row: 9, col: 11 });
    expect(texts[0][3]).toBe(8);
    expect(texts[0][4]).toBe(7);

    useGridStore.getState().undo();
    expect(texts[0][3]).toBe(4);
    expect(texts[0][4]).toBe(4);
  });

  it('cancelResize restores rect geometry after a live-preview mutation, with no history', () => {
    const { g, rects } = makeResizeGrid({ rects: [[1, 1, 3, 3, 0, 6]] });
    resetStore(g);

    useGridStore.getState().startResize({ shape: 'rect', index: 0, handle: 4 });
    // Preview already mutated the shape in place...
    useGridStore.getState().updateResize({ row: 9, col: 9 });
    expect(rects[0].slice(0, 4)).toEqual([1, 1, 9, 9]);

    // ...cancel must restore the captured pre-gesture geometry.
    useGridStore.getState().cancelResize();
    expect(rects[0].slice(0, 4)).toEqual([1, 1, 3, 3]);
    // Nothing was committed.
    expect(useGridStore.getState().canUndo()).toBe(false);
    expect(useGridStore.getState().selectMode).toBeNull();
    expect(useGridStore.getState().resizeTarget).toBeNull();
    expect(useGridStore.getState().resizeOrigin).toBeNull();
  });

  it('cancelResize restores a line via set_line after preview', () => {
    const { g, lines } = makeResizeGrid({ lines: [[0, 0, 2, 2, 0, 10]] });
    resetStore(g);

    useGridStore.getState().startResize({ shape: 'line', index: 0, handle: 1 });
    useGridStore.getState().updateResize({ row: 6, col: 6 });
    expect(lines[0].slice(0, 4)).toEqual([0, 0, 6, 6]);

    useGridStore.getState().cancelResize();
    expect(lines[0].slice(0, 4)).toEqual([0, 0, 2, 2]);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });

  it('cancelResize restores a text frame via set_text_frame after preview', () => {
    const { g, texts } = makeResizeGrid({ texts: [[2, 3, 0, 4, 4, 0, 0]] });
    resetStore(g);

    useGridStore.getState().startResize({ shape: 'text', index: 0, handle: 4 });
    useGridStore.getState().updateResize({ row: 9, col: 11 });
    expect(texts[0][3]).toBe(8);

    useGridStore.getState().cancelResize();
    expect(texts[0].slice(0, 5)).toEqual([2, 3, 0, 4, 4]);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });
});

describe('transform: rotate non-commit paths', () => {
  beforeEach(() => resetStore(null));

  it('cancelRotate clears gesture state without committing an edit', () => {
    const { g } = makeResizeGrid();
    useGridStore.setState({
      grid: g,
      selectedItems: [{ type: 'cell', row: 0, col: 0 }],
      selectMode: 'rotate',
      isSelecting: true,
      rotateOrigin: { cx: 8, cy: 8, startAngle: 0 },
    });
    useGridStore.getState().resetHistory();

    useGridStore.getState().cancelRotate();

    expect(useGridStore.getState().selectMode).toBeNull();
    expect(useGridStore.getState().rotateOrigin).toBeNull();
    expect(useGridStore.getState().isSelecting).toBe(false);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });

  it('finishRotate with no active rotateOrigin clears state safely and commits nothing', () => {
    const { g } = makeResizeGrid();
    useGridStore.setState({
      grid: g,
      selectedItems: [{ type: 'cell', row: 0, col: 0 }],
      selectMode: 'rotate',
      isSelecting: true,
      rotateOrigin: null,
    });
    useGridStore.getState().resetHistory();

    useGridStore.getState().finishRotate(10, 10);

    expect(useGridStore.getState().selectMode).toBeNull();
    expect(useGridStore.getState().rotateOrigin).toBeNull();
    expect(useGridStore.getState().isSelecting).toBe(false);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });
});

describe('transform: rotation math helpers', () => {
  it('snapQuarterTurns maps signed angles to 0..3 clockwise turns (with wraparound)', () => {
    const q = Math.PI / 2;
    expect(snapQuarterTurns(0)).toBe(0);
    expect(snapQuarterTurns(q)).toBe(1);
    expect(snapQuarterTurns(2 * q)).toBe(2);       // π
    expect(snapQuarterTurns(3 * q)).toBe(3);       // 3π/2
    expect(snapQuarterTurns(4 * q)).toBe(0);       // 2π wraps to 0
    expect(snapQuarterTurns(-q)).toBe(3);          // negative wraps into range
    expect(snapQuarterTurns(-2 * q)).toBe(2);      // -π
  });

  it('snapQuarterTurns rounds at the ±45°/±135° boundaries', () => {
    // JS Math.round breaks .5 toward +∞, so the two signs are not symmetric.
    expect(snapQuarterTurns(Math.PI / 4)).toBe(1);    // +45° → 1
    expect(snapQuarterTurns(-Math.PI / 4)).toBe(0);   // -45° → 0
    expect(snapQuarterTurns(3 * Math.PI / 4)).toBe(2); // +135° → 2
    expect(snapQuarterTurns(-3 * Math.PI / 4)).toBe(3); // -135° → 3
  });

  it('rotateQuarter is identity for 0 turns and lossless after 4 (full circle)', () => {
    const pts = [[0, 0], [3, 7], [-2, 5], [11, -4]];
    for (const [r, c] of pts) {
      expect(rotateQuarter(r, c, 0, 1, 1)).toEqual({ r, c });
      expect(rotateQuarter(r, c, 4, 1, 1)).toEqual({ r, c });
      // A different (integer) center is equally lossless over a full circle.
      expect(rotateQuarter(r, c, 4, 3, -2)).toEqual({ r, c });
    }
  });

  it('rotateQuarter applies one clockwise quarter-turn about an integer center', () => {
    // One turn about (1,1): (0,1) → (1,2); (2,1) → (1,0); (1,0) → (0,1).
    expect(rotateQuarter(0, 1, 1, 1, 1)).toEqual({ r: 1, c: 2 });
    expect(rotateQuarter(2, 1, 1, 1, 1)).toEqual({ r: 1, c: 0 });
    expect(rotateQuarter(1, 0, 1, 1, 1)).toEqual({ r: 0, c: 1 });
    // Two turns = point reflection through the center.
    expect(rotateQuarter(0, 1, 2, 1, 1)).toEqual({ r: 2, c: 1 });
  });
});
