import { describe, it, expect } from 'vitest';
import { useGridStore, CELL_UNITS, type DesignJSON } from './gridStore';
import { makeFullGrid, reset, seedSquare } from './fullGridMock';

/**
 * Action-driven tests for the design slice: placeDesign (incl. legacy-design
 * migration), training-data capture, importJson/importTensor, and
 * updateOutputs/clear — on the shared full recording mock (fullGridMock.ts).
 * Split from clipboardDesign.test.ts to keep both under the repo line cap.
 */
describe('placeDesign', () => {
  it('rescales a legacy (no-sub) design by CELL_UNITS but a sub-tagged one by 1', () => {
    const m = makeFullGrid();
    reset(m.grid);
    // Legacy whole-cell design: no `sub`, so coords scale by CELL_UNITS and each
    // cell entry becomes a 1x (size CELL_UNITS) square.
    useGridStore.getState().placeDesign(
      { w: 2, h: 2, cells: [[1, 1, 2]], lines: [], rects: [], texts: [] },
      0, 0,
    );
    expect(m.grid.get_cell(CELL_UNITS, CELL_UNITS)).toBe(true);
    expect(m.grid.get_cell_color(CELL_UNITS, CELL_UNITS)).toBe(2);

    // Fine-unit design (sub = CELL_UNITS) → factor 1, coords used as-is, and a
    // 3-tuple entry becomes an eighth (size-1) square at the same spot.
    useGridStore.getState().placeDesign(
      { w: 2, h: 2, cells: [[1, 1, 3]], lines: [], rects: [], texts: [], sub: CELL_UNITS },
      0, 0,
    );
    expect(m.grid.get_cell(1, 1)).toBe(true);
    expect(m.grid.get_cell_color(1, 1)).toBe(3);
  });

  it('places 4-tuple square entries verbatim (one addSquare each)', () => {
    const m = makeFullGrid();
    reset(m.grid);
    // v9 entries carry their own size; placed as-is (sub = CELL_UNITS → factor 1).
    useGridStore.getState().placeDesign(
      { w: 8, h: 8, cells: [[0, 0, 2, 8], [2, 2, 4, 4]], lines: [], rects: [], texts: [], sub: CELL_UNITS },
      0, 0,
    );
    expect(m.grid.get_square_count()).toBe(2);
    const a = m.grid.get_square(0);
    const b = m.grid.get_square(1);
    expect([a[0], a[1], a[2], a[3]]).toEqual([0, 0, 2, 8]);
    expect([b[0], b[1], b[2], b[3]]).toEqual([2, 2, 4, 4]);
    // Both placed squares are selected by index.
    expect(useGridStore.getState().selectedItems).toEqual([
      { type: 'cell', index: 0 },
      { type: 'cell', index: 1 },
    ]);
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
    useGridStore.setState({ tool: 'draw', selectedItems: [{ type: 'cell', index: 0 }] });
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
    seedSquare(m.squares, 10, 10, 0); // idx 0 — the input square
    seedSquare(m.squares, 13, 15, 0); // idx 1 — the output square
    useGridStore.getState().startTrainingCapture();

    // Input selection anchored at (10,10).
    useGridStore.setState({ selectedItems: [{ type: 'cell', index: 0 }] });
    useGridStore.getState().captureSetInput();
    let s = useGridStore.getState();
    expect(s.captureMode).toBe('output');
    expect(s.captureInputOrigin).toEqual([10, 10]);
    expect(s.captureInput).not.toBeNull();
    expect(s.selectedItems).toEqual([]);

    // Output selection anchored at (13,15): delta = (3,5).
    useGridStore.setState({ selectedItems: [{ type: 'cell', index: 1 }] });
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
    useGridStore.setState({ selectedItems: [{ type: 'cell', index: 0 }] });
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
    // At subdivision 8 the tiled squares are one fine unit each, so the legacy
    // grid's cells land on adjacent fine coords (row+r, col+c).
    useGridStore.setState({ mousePos: { row: 0, col: 0 }, subdivision: 8 });
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
    expect(m.grid.get_square_count()).toBe(0);
  });

  it('importTensor strips the tensor(...) wrapper and fills cells above 0.5', () => {
    const m = makeFullGrid();
    reset(m.grid);
    // subdivision 8 → one fine-unit square per active tensor entry.
    useGridStore.setState({ mousePos: { row: 0, col: 0 }, subdivision: 8 });
    useGridStore.getState().importTensor('tensor([[0, 1], [1, 0]])');
    expect(m.grid.get_cell(0, 1)).toBe(true);
    expect(m.grid.get_cell(1, 0)).toBe(true);
    expect(m.grid.get_cell(0, 0)).toBe(false);
    expect(m.grid.get_cell_color(0, 1)).toBe(0);   // tensor import draws black
  });
});

describe('updateOutputs / clear', () => {
  it('updateOutputs emits relative sparse JSON + a torch tensor for selected black squares', () => {
    const m = makeFullGrid();
    reset(m.grid);
    seedSquare(m.squares, 3, 4, 0); // idx 0
    seedSquare(m.squares, 4, 5, 0); // idx 1
    useGridStore.setState({
      grid: m.grid,
      selectedItems: [{ type: 'cell', index: 0 }, { type: 'cell', index: 1 }],
    });
    useGridStore.getState().updateOutputs();
    const { jsonOutput, tensorOutput } = useGridStore.getState();
    const parsed = JSON.parse(jsonOutput);
    // Coordinates are relative to the selection's top-left (3,4), in FINE units,
    // and each square carries its own size (size-1 eighth squares here).
    expect(parsed).toEqual([
      { row: 0, col: 0, size: 1, color: '#000000' },
      { row: 1, col: 1, size: 1, color: '#000000' },
    ]);
    expect(tensorOutput).toContain('torch.sparse_coo_tensor');
    expect(tensorOutput).toContain('size=(2, 2)');
  });

  it('updateOutputs exports a pure-1x selection in whole-cell units', () => {
    const m = makeFullGrid();
    reset(m.grid);
    // Two 1x (size 8) squares on the whole-cell lattice, one cell apart.
    seedSquare(m.squares, 0, 0, 0, 8); // idx 0
    seedSquare(m.squares, 0, 8, 0, 8); // idx 1
    useGridStore.setState({
      grid: m.grid,
      selectedItems: [{ type: 'cell', index: 0 }, { type: 'cell', index: 1 }],
    });
    useGridStore.getState().updateOutputs();
    const { tensorOutput } = useGridStore.getState();
    // When every square shares one size and alignment, indices divide by that
    // size: two side-by-side 1x squares span a 1×2 whole-cell tensor.
    expect(tensorOutput).toContain('size=(1, 2)');
    expect(tensorOutput).toContain('[[0, 0], [0, 1]]');
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
    seedSquare(m.squares, 0, 0, 1);
    seedSquare(m.squares, 1, 1, 2);
    m.lines.push([0, 0, 1, 1, 0, 10]);
    m.rects.push([0, 0, 2, 2, 1, 6]);
    m.texts.push({ r: 1, c: 1, color: 0, size: 1, boxW: 2, boxH: 1, halign: 0, valign: 0, text: 'T' });
    m.images.push({ r1: 5, c1: 5, r2: 9, c2: 9, url: 'https://s3/a.png' });
    useGridStore.setState({ grid: m.grid });

    useGridStore.getState().clear();
    expect(m.grid.get_square_count()).toBe(0);
    expect(m.grid.get_line_count()).toBe(0);
    expect(m.grid.get_rect_count()).toBe(0);
    expect(m.grid.get_text_count()).toBe(0);
    expect(m.grid.get_image_count()).toBe(0);

    // One undo restores everything.
    useGridStore.getState().undo();
    expect(m.grid.get_square_count()).toBe(2);
    expect(m.grid.get_line_count()).toBe(1);
    expect(m.grid.get_rect_count()).toBe(1);
    expect(m.grid.get_text_count()).toBe(1);
    expect(m.grid.get_image_count()).toBe(1);
    expect(useGridStore.getState().canUndo()).toBe(false);
  });
});
