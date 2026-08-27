import { describe, it, expect, beforeEach } from 'vitest';
import { useGridStore, serializeSelection, CELL_UNITS, type SelectedItem, type DesignJSON } from './gridStore';
import type { GridCanvasWasm } from '../types/grid';
import { stubWasm } from './wasmStub';

/**
 * Action-driven tests for the clipboard slice (copy/paste/deleteSelected) and
 * the design slice (training capture, placeDesign, serialize, import, clear).
 *
 * These use a fuller recording mock than testGrid.ts: lines/rects/texts/images
 * are stored in real arrays with splice-based insert/delete and per-shape reads,
 * so copy/paste/delete/clear round-trip through the WASM-shaped API exactly the
 * way the real grid does — which is what lets us assert undo restores state.
 */
type TextRec = { r: number; c: number; color: number; size: number; boxW: number; boxH: number; halign: number; valign: number; text: string };
type ImageRec = { r1: number; c1: number; r2: number; c2: number; url: string };

function makeFullGrid() {
  const calls: Array<[string, ...number[]]> = [];
  const filled = new Map<string, number>(); // "r,c" -> colorIdx
  const key = (r: number, c: number) => `${r},${c}`;
  let drawColor = 0;
  const lines: number[][] = [];   // [r1,c1,r2,c2,color,width]
  const rects: number[][] = [];   // [r1,c1,r2,c2,fill,outline]
  const texts: TextRec[] = [];
  const images: ImageRec[] = [];

  const g: Partial<GridCanvasWasm> = {
    set_draw_color: (idx) => { drawColor = idx; calls.push(['set_draw_color', idx]); },
    set_cell: (r, c, v) => { calls.push(['set_cell', r, c, v ? 1 : 0]); if (v) filled.set(key(r, c), drawColor); else filled.delete(key(r, c)); },
    set_cell_color: (r, c, color) => { calls.push(['set_cell_color', r, c, color]); if (filled.has(key(r, c))) filled.set(key(r, c), color); },
    get_cell: (r, c) => filled.has(key(r, c)),
    get_cell_color: (r, c) => filled.get(key(r, c)) ?? 0,
    get_cell_count: () => filled.size,
    get_filled_cells: () => {
      const out: number[] = [];
      for (const [k, color] of filled) {
        const [r, c] = k.split(',').map(Number);
        out.push(r, c, color);
      }
      return new Int32Array(out);
    },
    delete_cell: (r, c) => { calls.push(['delete_cell', r, c]); filled.delete(key(r, c)); },

    // lines
    insert_line: (idx, r1, c1, r2, c2, color, width) => { lines.splice(idx, 0, [r1, c1, r2, c2, color, width ?? 10]); calls.push(['insert_line', idx, r1, c1, r2, c2, color]); },
    delete_line: (idx) => { lines.splice(idx, 1); calls.push(['delete_line', idx]); },
    get_line: (idx) => new Int32Array(lines[idx] ?? [0, 0, 1, 1, 0, 10]),
    get_line_count: () => lines.length,

    // rects
    insert_rect: (idx, r1, c1, r2, c2, fill, outline) => { rects.splice(idx, 0, [r1, c1, r2, c2, fill, outline]); calls.push(['insert_rect', idx, r1, c1, r2, c2, fill, outline]); },
    delete_rect: (idx) => { rects.splice(idx, 1); calls.push(['delete_rect', idx]); },
    get_rect: (idx) => new Int32Array(rects[idx] ?? [0, 0, 2, 2, 0, 6]),
    get_rect_count: () => rects.length,

    // texts (insert signature mirrors apply.ts: idx,r,c,color,size,boxW,boxH,halign,valign,text)
    insert_text: (idx, r, c, color, size, boxW, boxH, halign, valign, text) => {
      texts.splice(idx, 0, { r, c, color, size, boxW, boxH, halign, valign, text });
      calls.push(['insert_text', idx, r, c, color]);
    },
    delete_text: (idx) => { texts.splice(idx, 1); calls.push(['delete_text', idx]); },
    get_text: (idx) => { const t = texts[idx]; return new Int32Array(t ? [t.r, t.c, t.color, t.boxW, t.boxH, t.halign, t.valign] : [1, 0, 0, 1, 1, 0, 0]); },
    get_text_string: (idx) => texts[idx]?.text ?? '',
    get_text_size: (idx) => texts[idx]?.size ?? 1,
    get_text_count: () => texts.length,

    // images (insert signature: idx,r1,c1,r2,c2,url,el)
    insert_image: (idx, r1, c1, r2, c2, url) => {
      images.splice(idx, 0, { r1, c1, r2, c2, url });
      calls.push(['insert_image', idx, r1, c1, r2, c2]);
    },
    delete_image: (idx) => { images.splice(idx, 1); calls.push(['delete_image', idx]); },
    get_image: (idx) => { const im = images[idx]; return new Int32Array(im ? [im.r1, im.c1, im.r2, im.c2] : [0, 0, 8, 8]); },
    get_image_url: (idx) => images[idx]?.url ?? '',
    get_image_count: () => images.length,

    render: () => {},
    highlight_cell: () => {},
    highlight_line: () => {},
    highlight_rect: () => {},
    highlight_text: () => {},
    highlight_image: () => {},
    draw_handle: () => {},
    draw_selection_box: () => {},
    get_cell_size: () => 16,
  };
  return { grid: { ...stubWasm(), ...g }, calls, filled, lines, rects, texts, images };
}

/** Seed a filled cell without recording set_cell calls (bypasses drawColor). */
function seedCell(filled: Map<string, number>, r: number, c: number, color: number) {
  filled.set(`${r},${c}`, color);
}

function reset(grid: GridCanvasWasm) {
  useGridStore.setState({
    grid, selectedItems: [], clipboard: null, colorIdx: 0, outlineIdx: 6,
    mousePos: { row: 0, col: 0 }, tool: 'draw',
    captureMode: 'idle', captureInput: null, captureInputOrigin: null,
    jsonOutput: '', tensorOutput: '',
  });
  useGridStore.getState().resetHistory();
}

describe('clipboard slice', () => {
  beforeEach(() => {
    useGridStore.setState({ grid: null, selectedItems: [], clipboard: null });
  });

  it('copy stores bbox-relative data across mixed item types (incl. text + image url)', () => {
    const m = makeFullGrid();
    reset(m.grid);
    seedCell(m.filled, 5, 7, 2);
    m.lines.push([4, 6, 8, 10, 3, 15]);
    m.rects.push([6, 8, 9, 11, 1, 0]);
    m.texts.push({ r: 6, c: 8, color: 0, size: 1, boxW: 4, boxH: 2, halign: 0, valign: 0, text: 'Hi' });
    m.images.push({ r1: 10, c1: 12, r2: 18, c2: 20, url: 'https://s3/img.png' });

    useGridStore.setState({
      grid: m.grid,
      selectedItems: [
        { type: 'cell', row: 5, col: 7 },
        { type: 'line', index: 0 },
        { type: 'rect', index: 0 },
        { type: 'text', index: 0 },
        { type: 'image', index: 0 },
      ],
    });

    useGridStore.getState().copy();
    const clip = useGridStore.getState().clipboard!;
    // Origin is the bounding-box top-left (minRow=4, minCol=6).
    expect(clip.originRow).toBe(4);
    expect(clip.originCol).toBe(6);
    expect(clip.cells).toEqual([{ relRow: 1, relCol: 1, color: 2 }]);
    expect(clip.lines).toEqual([{ relR1: 0, relC1: 0, relR2: 4, relC2: 4, color: 3, width: 15 }]);
    expect(clip.rects).toEqual([{ relR1: 2, relC1: 2, relR2: 5, relC2: 5, color: 1, outline: 0 }]);
    expect(clip.texts).toEqual([{ relR: 2, relC: 2, color: 0, size: 1, boxW: 4, boxH: 2, halign: 0, valign: 0, text: 'Hi' }]);
    expect(clip.images).toEqual([{ relR1: 6, relC1: 6, relR2: 14, relC2: 14, url: 'https://s3/img.png' }]);
  });

  it('copy with no selection is a no-op (clipboard stays null)', () => {
    const m = makeFullGrid();
    reset(m.grid);
    useGridStore.setState({ grid: m.grid, selectedItems: [] });
    useGridStore.getState().copy();
    expect(useGridStore.getState().clipboard).toBeNull();
  });

  it('pasting cells over existing cells is one undo step that restores prior color', () => {
    const m = makeFullGrid();
    reset(m.grid);
    // A cell already lives where the paste will land (anchor = origin + 1).
    seedCell(m.filled, 11, 11, 2);
    useGridStore.setState({
      grid: m.grid,
      clipboard: { cells: [{ relRow: 0, relCol: 0, color: 5 }], lines: [], rects: [], texts: [], images: [], originRow: 10, originCol: 10 },
    });

    useGridStore.getState().paste();
    // Paste anchors at origin+1 = (11,11) and overwrites the prior color.
    expect(m.grid.get_cell(11, 11)).toBe(true);
    expect(m.grid.get_cell_color(11, 11)).toBe(5);
    expect(useGridStore.getState().selectedItems).toEqual([{ type: 'cell', row: 11, col: 11 }]);

    // A single undo restores the original filled cell + its color.
    useGridStore.getState().undo();
    expect(m.grid.get_cell(11, 11)).toBe(true);
    expect(m.grid.get_cell_color(11, 11)).toBe(2);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });

  it('deleteSelected removes mixed items as one batch (high-index-first) and undo restores all', () => {
    const m = makeFullGrid();
    reset(m.grid);
    seedCell(m.filled, 0, 0, 4);
    m.lines.push([0, 0, 1, 1, 0, 10]);   // idx 0
    m.lines.push([2, 2, 3, 3, 1, 10]);   // idx 1
    m.rects.push([0, 0, 2, 2, 1, 6]);    // idx 0
    m.texts.push({ r: 1, c: 1, color: 0, size: 1, boxW: 2, boxH: 1, halign: 0, valign: 0, text: 'T' });
    m.images.push({ r1: 5, c1: 5, r2: 9, c2: 9, url: 'https://s3/a.png' });

    useGridStore.setState({
      grid: m.grid,
      selectedItems: [
        { type: 'cell', row: 0, col: 0 },
        { type: 'line', index: 0 },
        { type: 'line', index: 1 },
        { type: 'rect', index: 0 },
        { type: 'text', index: 0 },
        { type: 'image', index: 0 },
      ],
    });

    useGridStore.getState().deleteSelected();
    // Everything gone in one step.
    expect(m.grid.get_cell(0, 0)).toBe(false);
    expect(m.grid.get_line_count()).toBe(0);
    expect(m.grid.get_rect_count()).toBe(0);
    expect(m.grid.get_text_count()).toBe(0);
    expect(m.grid.get_image_count()).toBe(0);
    expect(useGridStore.getState().selectedItems).toEqual([]);

    // Lines are deleted high-index-first so earlier indices stay valid.
    const lineDeletes = m.calls.filter(c => c[0] === 'delete_line').map(c => c[1]);
    expect(lineDeletes).toEqual([1, 0]);

    // A single undo re-inserts everything.
    useGridStore.getState().undo();
    expect(m.grid.get_cell(0, 0)).toBe(true);
    expect(m.grid.get_cell_color(0, 0)).toBe(4);
    expect(m.grid.get_line_count()).toBe(2);
    expect(m.grid.get_rect_count()).toBe(1);
    expect(m.grid.get_text_count()).toBe(1);
    expect(m.grid.get_image_count()).toBe(1);
    expect(m.grid.get_image_url(0)).toBe('https://s3/a.png');
    expect(m.grid.get_text_string(0)).toBe('T');
    expect(useGridStore.getState().canUndo()).toBe(false);
  });
});

describe('serializeSelection', () => {
  it('relative mode offsets coords to the bbox and sorts cells row-major', () => {
    const m = makeFullGrid();
    seedCell(m.filled, 2, 3, 0);
    seedCell(m.filled, 2, 1, 1);
    seedCell(m.filled, 4, 2, 2);
    const items: SelectedItem[] = [
      { type: 'cell', row: 2, col: 3 },
      { type: 'cell', row: 2, col: 1 },
      { type: 'cell', row: 4, col: 2 },
    ];
    const d = serializeSelection(m.grid, items)!;
    // bbox min = (2,1); cells become relative and sorted by row then col.
    expect(d.cells).toEqual([[0, 0, 1], [0, 2, 0], [2, 1, 2]]);
    expect(d.w).toBe(3);
    expect(d.h).toBe(3);
    expect(d.sub).toBe(CELL_UNITS);
  });

  it('absolute mode keeps original coords (origin 0,0)', () => {
    const m = makeFullGrid();
    seedCell(m.filled, 2, 3, 0);
    seedCell(m.filled, 4, 2, 2);
    const items: SelectedItem[] = [
      { type: 'cell', row: 2, col: 3 },
      { type: 'cell', row: 4, col: 2 },
    ];
    const d = serializeSelection(m.grid, items, { absolute: true })!;
    expect(d.cells).toEqual([[2, 3, 0], [4, 2, 2]]);
    // w/h measured from origin (0,0): maxCol+1 = 4, maxRow+1 = 5.
    expect(d.w).toBe(4);
    expect(d.h).toBe(5);
  });

  it('returns null for an empty selection', () => {
    const m = makeFullGrid();
    expect(serializeSelection(m.grid, [])).toBeNull();
  });
});

describe('placeDesign', () => {
  it('rescales a legacy (no-sub) design by CELL_UNITS but a sub-tagged one by 1', () => {
    const m = makeFullGrid();
    reset(m.grid);
    // Legacy whole-cell design: no `sub`, so coords scale by CELL_UNITS.
    useGridStore.getState().placeDesign(
      { w: 2, h: 2, cells: [[1, 1, 2]], lines: [], rects: [], texts: [] },
      0, 0,
    );
    expect(m.grid.get_cell(CELL_UNITS, CELL_UNITS)).toBe(true);
    expect(m.grid.get_cell_color(CELL_UNITS, CELL_UNITS)).toBe(2);

    // Fine-unit design (sub = CELL_UNITS) → factor 1, coords used as-is.
    useGridStore.getState().placeDesign(
      { w: 2, h: 2, cells: [[1, 1, 3]], lines: [], rects: [], texts: [], sub: CELL_UNITS },
      0, 0,
    );
    expect(m.grid.get_cell(1, 1)).toBe(true);
    expect(m.grid.get_cell_color(1, 1)).toBe(3);
  });

  it('places valid texts/images and skips malformed ones without crashing', () => {
    const m = makeFullGrid();
    reset(m.grid);
    // Deliberately malformed entries exercise placeDesign's skip-without-crash
    // path. JSON round-tripping yields `any`, so it lands in a DesignJSON slot
    // without a type assertion — exactly how a bad payload arrives at runtime.
    const design: DesignJSON = JSON.parse(JSON.stringify({
      w: 10, h: 10, cells: [], lines: [], rects: [],
      texts: [
        [1, 1, 2, 1, 'legacy'],                                   // legacy 5-tuple → valid
        { r: 2, c: 2, color: 0, size: 1, text: 'obj' },           // object → valid
        ['x'],                                                    // malformed: r not a number → skip
        { c: 5, text: 'nope' },                                   // malformed object: missing r → skip
      ],
      images: [
        [0, 0, 8, 8, 'https://s3/ok.png'],                        // valid
        [0, 0, 8, 8],                                             // too short → skip
        [0, 0, 8, 8, 123],                                        // non-string url → skip
      ],
      sub: CELL_UNITS,
    }));

    expect(() => useGridStore.getState().placeDesign(design, 0, 0)).not.toThrow();
    expect(m.grid.get_text_count()).toBe(2);
    expect(m.grid.get_image_count()).toBe(1);
    expect(m.grid.get_text_string(0)).toBe('legacy');
    expect(m.grid.get_image_url(0)).toBe('https://s3/ok.png');
  });

  it('is a no-op (no history entry) for a fully-empty design', () => {
    const m = makeFullGrid();
    reset(m.grid);
    useGridStore.getState().placeDesign({ w: 0, h: 0, cells: [], lines: [], rects: [], texts: [] }, 0, 0);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });
});

describe('training-data capture', () => {
  it('startTrainingCapture forces the select tool and enters input mode', () => {
    const m = makeFullGrid();
    reset(m.grid);
    useGridStore.setState({ tool: 'draw', selectedItems: [{ type: 'cell', row: 0, col: 0 }] });
    useGridStore.getState().startTrainingCapture();
    const s = useGridStore.getState();
    expect(s.captureMode).toBe('input');
    expect(s.tool).toBe('select');
    expect(s.selectedItems).toEqual([]);
    expect(s.captureInput).toBeNull();
  });

  it('captureSetInput → buildTrainingExample computes the output-minus-input delta', () => {
    const m = makeFullGrid();
    reset(m.grid);
    useGridStore.getState().startTrainingCapture();

    // Input selection anchored at (10,10).
    useGridStore.setState({ selectedItems: [{ type: 'cell', row: 10, col: 10 }] });
    useGridStore.getState().captureSetInput();
    let s = useGridStore.getState();
    expect(s.captureMode).toBe('output');
    expect(s.captureInputOrigin).toEqual([10, 10]);
    expect(s.captureInput).not.toBeNull();
    expect(s.selectedItems).toEqual([]);

    // Output selection anchored at (13,15): delta = (3,5).
    useGridStore.setState({ selectedItems: [{ type: 'cell', row: 13, col: 15 }] });
    const example = useGridStore.getState().buildTrainingExample()!;
    expect(example.delta).toEqual([3, 5]);
    expect(example.input).not.toBeNull();
    expect(example.output).not.toBeNull();

    // cancel resets the whole machine.
    useGridStore.getState().cancelTrainingCapture();
    s = useGridStore.getState();
    expect(s.captureMode).toBe('idle');
    expect(s.captureInput).toBeNull();
    expect(s.captureInputOrigin).toBeNull();
  });

  it('buildTrainingExample returns null without a captured input or with empty output', () => {
    const m = makeFullGrid();
    reset(m.grid);
    // No captured input yet.
    useGridStore.setState({ selectedItems: [{ type: 'cell', row: 0, col: 0 }] });
    expect(useGridStore.getState().buildTrainingExample()).toBeNull();

    // Captured input, but empty output selection.
    useGridStore.setState({ captureInput: { w: 1, h: 1, cells: [[0, 0, 0]], lines: [], rects: [], texts: [] }, captureInputOrigin: [0, 0], selectedItems: [] });
    expect(useGridStore.getState().buildTrainingExample()).toBeNull();
  });
});

describe('importJson / importTensor', () => {
  it('imports sparse [{row,col,color}] cells at the mouse position', () => {
    const m = makeFullGrid();
    reset(m.grid);
    useGridStore.setState({ mousePos: { row: 5, col: 5 } });
    useGridStore.getState().importJson(JSON.stringify([
      { row: 0, col: 0, color: '#cc3333' },
      { row: 1, col: 2, color: '#000000' },
    ]));
    expect(m.grid.get_cell(5, 5)).toBe(true);
    expect(m.grid.get_cell_color(5, 5)).toBe(2);   // #cc3333 → 2
    expect(m.grid.get_cell(6, 7)).toBe(true);
    expect(m.grid.get_cell_color(6, 7)).toBe(0);   // #000000 → 0
    expect(useGridStore.getState().selectedItems).toHaveLength(2);
  });

  it('imports the legacy 2D grid format', () => {
    const m = makeFullGrid();
    reset(m.grid);
    useGridStore.setState({ mousePos: { row: 0, col: 0 } });
    useGridStore.getState().importJson(JSON.stringify([
      [{ color: '#000000' }, null],
      [null, { color: '#ffcc00' }],
    ]));
    expect(m.grid.get_cell(0, 0)).toBe(true);
    expect(m.grid.get_cell(1, 1)).toBe(true);
    expect(m.grid.get_cell_color(1, 1)).toBe(3);   // #ffcc00 → 3
    expect(m.grid.get_cell(0, 1)).toBe(false);
  });

  it('ignores malformed / non-array JSON without changing the grid', () => {
    const m = makeFullGrid();
    reset(m.grid);
    useGridStore.getState().importJson('{not valid');
    useGridStore.getState().importJson('42');
    expect(m.grid.get_cell_count()).toBe(0);
  });

  it('importTensor strips the tensor(...) wrapper and fills cells above 0.5', () => {
    const m = makeFullGrid();
    reset(m.grid);
    useGridStore.setState({ mousePos: { row: 0, col: 0 } });
    useGridStore.getState().importTensor('tensor([[0, 1], [1, 0]])');
    expect(m.grid.get_cell(0, 1)).toBe(true);
    expect(m.grid.get_cell(1, 0)).toBe(true);
    expect(m.grid.get_cell(0, 0)).toBe(false);
    expect(m.grid.get_cell_color(0, 1)).toBe(0);   // tensor import draws black
  });
});

describe('updateOutputs / clear', () => {
  it('updateOutputs emits relative sparse JSON + a torch tensor for selected black cells', () => {
    const m = makeFullGrid();
    reset(m.grid);
    seedCell(m.filled, 3, 4, 0);
    seedCell(m.filled, 4, 5, 0);
    useGridStore.setState({
      grid: m.grid,
      selectedItems: [{ type: 'cell', row: 3, col: 4 }, { type: 'cell', row: 4, col: 5 }],
    });
    useGridStore.getState().updateOutputs();
    const { jsonOutput, tensorOutput } = useGridStore.getState();
    const parsed = JSON.parse(jsonOutput);
    // Coordinates are relative to the selection's top-left (3,4).
    expect(parsed).toEqual([
      { row: 0, col: 0, color: '#000000' },
      { row: 1, col: 1, color: '#000000' },
    ]);
    expect(tensorOutput).toContain('torch.sparse_coo_tensor');
    expect(tensorOutput).toContain('size=(2, 2)');
  });

  it('updateOutputs clears outputs when no cells are selected', () => {
    const m = makeFullGrid();
    reset(m.grid);
    useGridStore.setState({ grid: m.grid, selectedItems: [], jsonOutput: 'stale', tensorOutput: 'stale' });
    useGridStore.getState().updateOutputs();
    expect(useGridStore.getState().jsonOutput).toBe('');
    expect(useGridStore.getState().tensorOutput).toBe('');
  });

  it('clear removes the whole document as one undoable batch', () => {
    const m = makeFullGrid();
    reset(m.grid);
    seedCell(m.filled, 0, 0, 1);
    seedCell(m.filled, 1, 1, 2);
    m.lines.push([0, 0, 1, 1, 0, 10]);
    m.rects.push([0, 0, 2, 2, 1, 6]);
    m.texts.push({ r: 1, c: 1, color: 0, size: 1, boxW: 2, boxH: 1, halign: 0, valign: 0, text: 'T' });
    m.images.push({ r1: 5, c1: 5, r2: 9, c2: 9, url: 'https://s3/a.png' });
    useGridStore.setState({ grid: m.grid });

    useGridStore.getState().clear();
    expect(m.grid.get_cell_count()).toBe(0);
    expect(m.grid.get_line_count()).toBe(0);
    expect(m.grid.get_rect_count()).toBe(0);
    expect(m.grid.get_text_count()).toBe(0);
    expect(m.grid.get_image_count()).toBe(0);

    // One undo restores everything.
    useGridStore.getState().undo();
    expect(m.grid.get_cell_count()).toBe(2);
    expect(m.grid.get_line_count()).toBe(1);
    expect(m.grid.get_rect_count()).toBe(1);
    expect(m.grid.get_text_count()).toBe(1);
    expect(m.grid.get_image_count()).toBe(1);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });
});
