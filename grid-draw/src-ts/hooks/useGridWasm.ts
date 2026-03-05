import { useState, useEffect, useRef } from 'react';

interface GridCanvasWasm {
  handle_click(x: number, y: number): void;
  render(): void;
  clear(): void;
  resize(rows: number, cols: number): void;
  set_draw_color(idx: number): void;
  get_cell(row: number, col: number): boolean;
  get_cell_color(row: number, col: number): number;
  set_cell(row: number, col: number, value: boolean): void;
  get_rows(): number;
  get_cols(): number;
  get_cell_size(): number;
  render_with_line(r1: number, c1: number, r2: number, c2: number): void;
  draw_line(r1: number, c1: number, r2: number, c2: number): void;
  render_with_rect(r1: number, c1: number, r2: number, c2: number): void;
  draw_rect(r1: number, c1: number, r2: number, c2: number): void;
  render_with_selection(row: number, col: number): void;
  render_with_drag_preview(sel_row: number, sel_col: number, preview_row: number, preview_col: number): void;
  move_cell(from_row: number, from_col: number, to_row: number, to_col: number): void;
  delete_cell(row: number, col: number): void;
  render_with_selection_box(r1: number, c1: number, r2: number, c2: number): void;
  highlight_cell(row: number, col: number): void;
  export_json(): string;
  export_pytorch_tensor(): string;
  import_json(json_str: string): void;
  import_tensor(tensor_str: string): void;
  get_data_zone_start_row(): number;
  get_data_zone_start_col(): number;
  get_data_zone_size(): number;
}

interface GridWasmState {
  grid: GridCanvasWasm | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

export function useGridWasm(
  canvasId: string,
  initialRows: number,
  initialCols: number
): GridWasmState {
  const [state, setState] = useState<GridWasmState>({
    grid: null,
    loading: true,
    error: null,
    initialized: false,
  });

  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;

    (async () => {
      try {
        const wasm = await import('../../pkg/grid_draw_wasm');
        await wasm.default();
        const grid = new wasm.GridCanvas(canvasId, initialRows, initialCols);
        setState({
          grid,
          loading: false,
          error: null,
          initialized: true,
        });
      } catch (err) {
        setState((prev) => ({
          ...prev,
          loading: false,
          error: err instanceof Error ? err.message : String(err),
        }));
      }
    })();
  }, [canvasId, initialRows, initialCols]);

  return state;
}
