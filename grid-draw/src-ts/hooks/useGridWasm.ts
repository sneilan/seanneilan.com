import { useState, useEffect, useRef } from 'react';

interface GridCanvasWasm {
  handle_click(x: number, y: number): void;
  render(): void;
  clear(): void;
  set_draw_color(idx: number): void;
  get_cell(row: number, col: number): boolean;
  set_cell(row: number, col: number, value: boolean): void;
  get_grid_size(): number;
  get_cell_size(): number;
  render_with_line(r1: number, c1: number, r2: number, c2: number): void;
  draw_line(r1: number, c1: number, r2: number, c2: number): void;
  render_with_rect(r1: number, c1: number, r2: number, c2: number): void;
  draw_rect(r1: number, c1: number, r2: number, c2: number): void;
}

interface GridWasmState {
  grid: GridCanvasWasm | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

export function useGridWasm(canvasId: string): GridWasmState {
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
        const grid = new wasm.GridCanvas(canvasId);
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
  }, [canvasId]);

  return state;
}
