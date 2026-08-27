import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore, SUBDIVISIONS, widthToTenths } from './gridStore';
import type { GridCanvasWasm } from '../types/grid';

/**
 * Focused coverage for the tool slice's behaviors that the existing store tests
 * (recolor/storeUndo/storeEdge/session) don't exercise: per-tool style memory,
 * the pick-and-restyle-plus-coalesce paths, the text-edit lifecycle, drawCellAt's
 * subdivision block painting + no-op skipping, subdivision cycling, and
 * placeImage's select-the-new-image behavior.
 *
 * Uses a self-contained in-memory recording grid (like recolor.test.ts) because
 * these actions touch WASM methods the shared testGrid mock doesn't stub
 * (set_text_size/align, set_line_width, set_draw_line_width, set_subdivision,
 * render_text_preview, highlight_text).
 */
type Call = [string, ...unknown[]];
type TextRec = { r: number; c: number; color: number; size: number; boxW: number; boxH: number; halign: number; valign: number; text: string };
type LineRec = { r1: number; c1: number; r2: number; c2: number; color: number; width: number };

function makeGrid(opts?: {
  texts?: TextRec[];
  lines?: LineRec[];
  rects?: number[][];
  cell?: (r: number, c: number) => boolean;
  cellColor?: (r: number, c: number) => number;
}) {
  const calls: Call[] = [];
  const filled = new Map<string, number>(); // "r,c" -> colorIdx
  const key = (r: number, c: number) => `${r},${c}`;
  let drawColor = 0;
  const texts: TextRec[] = (opts?.texts ?? []).map(t => ({ ...t }));
  const lines: LineRec[] = (opts?.lines ?? []).map(l => ({ ...l }));
  const rects = opts?.rects ?? [];
  let rectCount = rects.length;
  let imageCount = 0;

  if (opts?.cell) {
    for (let r = 0; r < 32; r++) {
      for (let c = 0; c < 32; c++) {
        if (opts.cell(r, c)) filled.set(key(r, c), opts.cellColor ? opts.cellColor(r, c) : 0);
      }
    }
  }

  const g: Partial<GridCanvasWasm> = {
    // Cells (in-memory so set/get round-trips like the real grid).
    set_draw_color: (idx) => { drawColor = idx; calls.push(['set_draw_color', idx]); },
    set_cell: (r, c, v) => { calls.push(['set_cell', r, c, v ? 1 : 0]); if (v) filled.set(key(r, c), drawColor); else filled.delete(key(r, c)); },
    set_cell_color: (r, c, color) => { calls.push(['set_cell_color', r, c, color]); if (filled.has(key(r, c))) filled.set(key(r, c), color); },
    delete_cell: (r, c) => { calls.push(['delete_cell', r, c]); filled.delete(key(r, c)); },
    get_cell: (r, c) => filled.has(key(r, c)),
    get_cell_color: (r, c) => filled.get(key(r, c)) ?? 0,
    get_cell_count: () => filled.size,

    // Text shapes.
    insert_text: (idx, r, c, color, size, boxW, boxH, halign, valign, text) => {
      calls.push(['insert_text', idx, r, c, color, size, text]);
      texts.splice(idx, 0, { r, c, color, size, boxW, boxH, halign, valign, text });
    },
    delete_text: (idx) => { calls.push(['delete_text', idx]); texts.splice(idx, 1); },
    set_text_size: (idx, size) => { calls.push(['set_text_size', idx, size]); texts[idx].size = size; },
    set_text_color: (idx, color) => { calls.push(['set_text_color', idx, color]); texts[idx].color = color; },
    set_text_align: (idx, halign, valign) => { calls.push(['set_text_align', idx, halign, valign]); texts[idx].halign = halign; texts[idx].valign = valign; },
    get_text_count: () => texts.length,
    get_text: (idx) => { const t = texts[idx]; return new Int32Array([t.r, t.c, t.color, t.boxW, t.boxH, t.halign, t.valign]); },
    get_text_size: (idx) => texts[idx].size,
    get_text_string: (idx) => texts[idx].text,
    render_text_preview: (r, c, color, size, text) => calls.push(['render_text_preview', r, c, color, size, text]),
    highlight_text: () => {},

    // Lines.
    insert_line: (idx, r1, c1, r2, c2, color, width) => { calls.push(['insert_line', idx, r1, c1, r2, c2, color, width]); lines.splice(idx, 0, { r1, c1, r2, c2, color, width }); },
    delete_line: (idx) => { calls.push(['delete_line', idx]); lines.splice(idx, 1); },
    set_line_width: (idx, width) => { calls.push(['set_line_width', idx, width]); lines[idx].width = width; },
    set_line_color: (idx, color) => { calls.push(['set_line_color', idx, color]); lines[idx].color = color; },
    set_draw_line_width: (w) => calls.push(['set_draw_line_width', w]),
    get_line: (idx) => { const l = lines[idx]; return new Int32Array([l.r1, l.c1, l.r2, l.c2, l.color, l.width]); },
    get_line_count: () => lines.length,

    // Rects.
    insert_rect: (idx, r1, c1, r2, c2, fill, outline) => { rectCount++; calls.push(['insert_rect', idx, r1, c1, r2, c2, fill, outline]); },
    delete_rect: (idx) => { rectCount--; calls.push(['delete_rect', idx]); },
    get_rect: (idx) => new Int32Array(rects[idx] ?? [0, 0, 2, 2, 0, 6]),
    get_rect_count: () => rectCount,

    // Images.
    insert_image: (idx, r1, c1, r2, c2) => { imageCount++; calls.push(['insert_image', idx, r1, c1, r2, c2]); },
    delete_image: (idx) => { imageCount--; calls.push(['delete_image', idx]); },
    get_image_count: () => imageCount,
    get_image: () => new Int32Array([0, 0, 8, 8]),
    get_image_url: () => '',
    highlight_image: () => {},

    // Subdivision + render/selection no-ops.
    set_subdivision: (level) => calls.push(['set_subdivision', level]),
    render: () => {},
    highlight_cell: () => {},
    highlight_line: () => {},
    highlight_rect: () => {},
    draw_handle: () => {},
    draw_selection_box: () => {},
  };
  return { grid: g as unknown as GridCanvasWasm, calls };
}

/** Reset the slice's mutable state + history to a known baseline between tests. */
function reset(grid: GridCanvasWasm | null = null) {
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

describe('toolSlice: per-tool style memory', () => {
  beforeEach(() => reset());

  it('setTool restores the color/outline last used in the target tool', () => {
    // rect's default style is transparent fill (6) + black outline (0).
    useGridStore.getState().setTool('rect');
    expect(useGridStore.getState().colorIdx).toBe(6);
    expect(useGridStore.getState().outlineIdx).toBe(0);

    useGridStore.getState().setTool('draw');
    expect(useGridStore.getState().colorIdx).toBe(0);
    expect(useGridStore.getState().outlineIdx).toBe(6);
  });

  it('setColorIdx/setOutlineIdx remember the style per active tool', () => {
    // Pick red while on the draw tool.
    useGridStore.getState().setColorIdx(2);
    expect(useGridStore.getState().toolStyles.draw.colorIdx).toBe(2);

    // Switch to rect (its own memory), then back to draw restores red.
    useGridStore.getState().setTool('rect');
    expect(useGridStore.getState().colorIdx).toBe(6);
    useGridStore.getState().setTool('draw');
    expect(useGridStore.getState().colorIdx).toBe(2);
  });

  it('setTool commits any in-progress text before switching away', () => {
    const { grid } = makeGrid();
    reset(grid);
    useGridStore.getState().setTool('text');
    useGridStore.getState().beginTextEdit({ row: 0, col: 0 });
    useGridStore.getState().typeTextChar('h');

    useGridStore.getState().setTool('select');

    expect(useGridStore.getState().textEdit).toBeNull();
    expect(grid.get_text_count()).toBe(1);
    expect(useGridStore.getState().canUndo()).toBe(true);
  });
});

describe('toolSlice: text tool restyle picks', () => {
  beforeEach(() => reset());

  it('pickTextSize resizes selected text shapes and is undoable', () => {
    const { grid, calls } = makeGrid({ texts: [{ r: 0, c: 0, color: 0, size: 1, boxW: 0, boxH: 0, halign: 0, valign: 0, text: 'hi' }] });
    reset(grid);
    useGridStore.setState({ grid, selectedItems: [{ type: 'text', index: 0 }] });

    useGridStore.getState().pickTextSize(3);
    expect(useGridStore.getState().textSize).toBe(3);
    expect(calls).toContainEqual(['set_text_size', 0, 3]);

    useGridStore.getState().undo();
    expect(grid.get_text_size(0)).toBe(1); // restored to original
  });

  it('pickTextSize during an active text edit reflows the preview, not the doc', () => {
    const { grid, calls } = makeGrid();
    reset(grid);
    useGridStore.getState().beginTextEdit({ row: 2, col: 3 });
    useGridStore.getState().typeTextChar('a');
    calls.length = 0;

    useGridStore.getState().pickTextSize(2);

    expect(useGridStore.getState().textEdit?.size).toBe(2);
    // The preview is re-rendered at the new size; nothing is committed.
    expect(calls).toContainEqual(['render_text_preview', 2, 3, 0, 2, 'a']);
    expect(grid.get_text_count()).toBe(0);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });

  it('consecutive pickTextSize on the same selection coalesce into one undo step', () => {
    const { grid } = makeGrid({ texts: [{ r: 0, c: 0, color: 0, size: 1, boxW: 0, boxH: 0, halign: 0, valign: 0, text: 'hi' }] });
    reset(grid);
    useGridStore.setState({ grid, selectedItems: [{ type: 'text', index: 0 }] });

    useGridStore.getState().pickTextSize(2);
    useGridStore.getState().pickTextSize(5);
    expect(grid.get_text_size(0)).toBe(5);

    // A single undo reverts the whole coalesced resize back to the original.
    useGridStore.getState().undo();
    expect(grid.get_text_size(0)).toBe(1);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });

  it('pickTextAlign sets the given axis and keeps the unspecified one', () => {
    const { grid, calls } = makeGrid({ texts: [{ r: 0, c: 0, color: 0, size: 1, boxW: 0, boxH: 0, halign: 2, valign: 1, text: 'hi' }] });
    reset(grid);
    useGridStore.setState({ grid, selectedItems: [{ type: 'text', index: 0 }] });

    // Change halign to 1, leave valign untouched (keeps its current 1).
    useGridStore.getState().pickTextAlign(1, null);
    expect(calls).toContainEqual(['set_text_align', 0, 1, 1]);

    useGridStore.getState().undo();
    const t = grid.get_text(0);
    expect([t[5], t[6]]).toEqual([2, 1]); // original halign/valign restored
  });
});

describe('toolSlice: line width picks', () => {
  beforeEach(() => reset());

  it('pickLineWidth restyles selected lines and syncs the draw width', () => {
    const { grid, calls } = makeGrid({ lines: [{ r1: 0, c1: 0, r2: 1, c2: 1, color: 0, width: 10 }] });
    reset(grid);
    useGridStore.setState({ grid, selectedItems: [{ type: 'line', index: 0 }] });

    useGridStore.getState().pickLineWidth(2);
    expect(useGridStore.getState().lineWidth).toBe(2);
    expect(calls).toContainEqual(['set_draw_line_width', widthToTenths(2)]);
    expect(calls).toContainEqual(['set_line_width', 0, widthToTenths(2)]);

    useGridStore.getState().undo();
    expect(grid.get_line(0)[5]).toBe(10); // original width restored
  });

  it('pickLineWidth with no selection sets the active/draw width but adds no undo step', () => {
    const { grid, calls } = makeGrid();
    reset(grid);

    useGridStore.getState().pickLineWidth(3);
    expect(useGridStore.getState().lineWidth).toBe(3);
    expect(calls).toContainEqual(['set_draw_line_width', widthToTenths(3)]);
    expect(calls.some(c => c[0] === 'set_line_width')).toBe(false);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });
});

describe('toolSlice: text edit lifecycle', () => {
  beforeEach(() => reset());

  it('begin/type/backspace/commit appends one undoable text shape', () => {
    const { grid } = makeGrid();
    reset(grid);

    useGridStore.getState().beginTextEdit({ row: 1, col: 2 });
    useGridStore.getState().typeTextChar('h');
    useGridStore.getState().typeTextChar('x');
    useGridStore.getState().backspaceText();
    useGridStore.getState().typeTextChar('i');
    useGridStore.getState().commitTextEdit();

    expect(useGridStore.getState().textEdit).toBeNull();
    expect(grid.get_text_count()).toBe(1);
    expect(grid.get_text_string(0)).toBe('hi');
    expect(useGridStore.getState().canUndo()).toBe(true);
  });

  it('committing an empty text adds nothing', () => {
    const { grid } = makeGrid();
    reset(grid);

    useGridStore.getState().beginTextEdit({ row: 0, col: 0 });
    useGridStore.getState().commitTextEdit();

    expect(useGridStore.getState().textEdit).toBeNull();
    expect(grid.get_text_count()).toBe(0);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });

  it('cancelTextEdit discards the in-progress text without committing', () => {
    const { grid } = makeGrid();
    reset(grid);

    useGridStore.getState().beginTextEdit({ row: 0, col: 0 });
    useGridStore.getState().typeTextChar('a');
    useGridStore.getState().cancelTextEdit();

    expect(useGridStore.getState().textEdit).toBeNull();
    expect(grid.get_text_count()).toBe(0);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });

  it('beginTextEdit commits the text already being typed', () => {
    const { grid } = makeGrid();
    reset(grid);

    useGridStore.getState().beginTextEdit({ row: 0, col: 0 });
    useGridStore.getState().typeTextChar('a');
    useGridStore.getState().beginTextEdit({ row: 5, col: 5 });

    // Previous non-empty text committed; a fresh empty edit is now open.
    expect(grid.get_text_count()).toBe(1);
    expect(grid.get_text_string(0)).toBe('a');
    expect(useGridStore.getState().textEdit).toEqual({ row: 5, col: 5, size: 1, text: '' });
  });
});

describe('toolSlice: drawCellAt subdivision painting', () => {
  beforeEach(() => reset());

  it('paints a full CELL_UNITS² block at subdivision 1 as one undo step', () => {
    const { grid } = makeGrid();
    reset(grid);
    useGridStore.setState({ grid, colorIdx: 2, subdivision: 1 });

    useGridStore.getState().drawCellAt(0, 0, true);

    // subdivision 1 → block = CELL_UNITS/1 = 8, so 8×8 = 64 fine cells painted.
    expect(grid.get_cell_count()).toBe(64);
    expect(grid.get_cell_color(0, 0)).toBe(2);
    expect(useGridStore.getState().canUndo()).toBe(true);

    useGridStore.getState().undo();
    expect(grid.get_cell_count()).toBe(0); // one undo clears the whole block
  });

  it('drawCellAt skips no-op cells so a re-paint of identical state adds no step', () => {
    // (0,0) already filled with color 2; painting the same block is a no-op.
    const { grid } = makeGrid({ cell: (r, c) => r === 0 && c === 0, cellColor: () => 2 });
    reset(grid);
    useGridStore.setState({ grid, colorIdx: 2, subdivision: 8 }); // block = 1 fine cell

    useGridStore.getState().drawCellAt(0, 0, true);

    expect(useGridStore.getState().canUndo()).toBe(false);
  });
});

describe('toolSlice: subdivision + placeImage', () => {
  beforeEach(() => reset());

  it('setSubdivision accepts valid levels and falls back to 1 on invalid', () => {
    const { grid, calls } = makeGrid();
    reset(grid);

    useGridStore.getState().setSubdivision(4);
    expect(useGridStore.getState().subdivision).toBe(4);
    expect(calls).toContainEqual(['set_subdivision', 4]);

    useGridStore.getState().setSubdivision(3); // not in SUBDIVISIONS
    expect(useGridStore.getState().subdivision).toBe(1);
  });

  it('cycleSubdivision advances through SUBDIVISIONS and wraps around', () => {
    const { grid } = makeGrid();
    reset(grid);
    useGridStore.setState({ grid, subdivision: SUBDIVISIONS[SUBDIVISIONS.length - 1] });

    useGridStore.getState().cycleSubdivision();
    expect(useGridStore.getState().subdivision).toBe(SUBDIVISIONS[0]); // wrapped
  });

  it('placeImage adds the image, selects it, and switches to the select tool', () => {
    const { grid } = makeGrid();
    reset(grid);
    useGridStore.setState({ grid, tool: 'draw' });

    useGridStore.getState().placeImage('https://example.com/x.png', { r1: 0, c1: 0, r2: 8, c2: 8 });

    expect(grid.get_image_count()).toBe(1);
    expect(useGridStore.getState().tool).toBe('select');
    expect(useGridStore.getState().selectedItems).toEqual([{ type: 'image', index: 0 }]);
    expect(useGridStore.getState().canUndo()).toBe(true);
  });
});
