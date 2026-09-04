import { useGridStore } from './gridStore';
import type { GridCanvasWasm } from '../types/grid';
import { stubWasm } from './wasmStub';

/**
 * A fuller recording mock than testGrid.ts, shared by the clipboard/design
 * slice tests: squares/lines/rects/texts/images live in real buffers with
 * splice-based insert/delete and per-shape reads, so copy/paste/delete/clear
 * round-trip through the WASM-shaped API exactly the way the real grid does —
 * which is what lets tests assert undo restores state. A drawn square is ONE
 * atomic record [r, c, color, size] (size in fine units), index-addressed and
 * z-ordered like every other shape.
 */
export type TextRec = { r: number; c: number; color: number; size: number; boxW: number; boxH: number; halign: number; valign: number; text: string };
export type ImageRec = { r1: number; c1: number; r2: number; c2: number; url: string };

export function makeFullGrid() {
  const calls: Array<[string, ...number[]]> = [];
  const lines: number[][] = [];   // [r1,c1,r2,c2,color,width]
  const rects: number[][] = [];   // [r1,c1,r2,c2,fill,outline]
  const texts: TextRec[] = [];
  const images: ImageRec[] = [];

  // Square records, z-ordered (topmost last), flat [r, c, color, size, ...].
  const STRIDE = 4;
  const squares: number[] = [];
  const squareCount = () => squares.length / STRIDE;
  const squareAt = (row: number, col: number) => {
    for (let i = squareCount() - 1; i >= 0; i--) {
      const s = i * STRIDE;
      const [r, c, size] = [squares[s], squares[s + 1], squares[s + 3]];
      if (row >= r && row < r + size && col >= c && col < c + size) return i;
    }
    return -1;
  };

  const g: Partial<GridCanvasWasm> = {
    // Square records + coverage queries.
    insert_square: (idx, r, c, color, size) => { calls.push(['insert_square', idx, r, c, color, size]); squares.splice(Math.min(idx, squareCount()) * STRIDE, 0, r, c, color, size); },
    add_square: (r, c, color, size) => { const idx = squareCount(); calls.push(['add_square', r, c, color, size]); squares.push(r, c, color, size); return idx; },
    delete_square: (idx) => { calls.push(['delete_square', idx]); if (idx * STRIDE + STRIDE <= squares.length) squares.splice(idx * STRIDE, STRIDE); },
    set_square_color: (idx, color) => { calls.push(['set_square_color', idx, color]); if (idx * STRIDE + STRIDE <= squares.length) squares[idx * STRIDE + 2] = color; },
    move_square: (idx, dr, dc) => { calls.push(['move_square', idx, dr, dc]); if (idx * STRIDE + STRIDE <= squares.length) { squares[idx * STRIDE] += dr; squares[idx * STRIDE + 1] += dc; } },
    get_square: (idx) => new Int32Array(squares.slice(idx * STRIDE, idx * STRIDE + STRIDE)),
    get_square_count: squareCount,
    get_squares: () => new Int32Array(squares),
    square_at: squareAt,
    squares_in_box: (r1, c1, r2, c2) => {
      const [rLo, rHi] = [Math.min(r1, r2), Math.max(r1, r2)];
      const [cLo, cHi] = [Math.min(c1, c2), Math.max(c1, c2)];
      const out: number[] = [];
      for (let i = 0; i < squareCount(); i++) {
        const s = i * STRIDE;
        const [r, c, size] = [squares[s], squares[s + 1], squares[s + 3]];
        if (r <= rHi && r + size - 1 >= rLo && c <= cHi && c + size - 1 >= cLo) out.push(i);
      }
      return new Uint32Array(out);
    },
    get_cell: (r, c) => squareAt(r, c) >= 0,
    get_cell_color: (r, c) => { const idx = squareAt(r, c); return idx >= 0 ? squares[idx * STRIDE + 2] : 0; },

    // lines
    insert_line: (idx, r1, c1, r2, c2, color, width) => { lines.splice(idx, 0, [r1, c1, r2, c2, color, width ?? 10]); calls.push(['insert_line', idx, r1, c1, r2, c2, color]); },
    delete_line: (idx) => { lines.splice(idx, 1); calls.push(['delete_line', idx]); },
    get_line: (idx) => new Int32Array(lines[idx] ?? [0, 0, 1, 1, 0, 10]),
    get_line_count: () => lines.length,

    // rects
    insert_rect: (idx, r1, c1, r2, c2, fill, outline, width, strokeAlign) => { rects.splice(idx, 0, [r1, c1, r2, c2, fill, outline, width, strokeAlign]); calls.push(['insert_rect', idx, r1, c1, r2, c2, fill, outline, width, strokeAlign]); },
    delete_rect: (idx) => { rects.splice(idx, 1); calls.push(['delete_rect', idx]); },
    get_rect: (idx) => new Int32Array(rects[idx] ?? [0, 0, 2, 2, 0, 6, 10, 0]),
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
    highlight_square: () => {},
    highlight_line: () => {},
    highlight_rect: () => {},
    highlight_text: () => {},
    highlight_image: () => {},
    draw_handle: () => {},
    draw_selection_box: () => {},
    get_cell_size: () => 16,
  };
  return { grid: { ...stubWasm(), ...g }, calls, squares, lines, rects, texts, images };
}

/** Seed a pre-existing square record directly (bypasses the edit/history layer). */
export function seedSquare(squares: number[], r: number, c: number, color: number, size = 1) {
  squares.push(r, c, color, size);
}

export function reset(grid: GridCanvasWasm) {
  useGridStore.setState({
    grid, selectedItems: [], clipboard: null, colorIdx: 0, outlineIdx: 6,
    mousePos: { row: 0, col: 0 }, tool: 'draw', subdivision: 1,
    captureMode: 'idle', captureInput: null, captureInputOrigin: null,
    jsonOutput: '', tensorOutput: '',
  });
  useGridStore.getState().resetHistory();
}
