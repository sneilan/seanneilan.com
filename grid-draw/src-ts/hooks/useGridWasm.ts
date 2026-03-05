import { useState, useEffect, useRef } from 'react';
import type { GridCanvasWasm, GridWasmState } from '../types/grid';

export type { GridCanvasWasm, GridWasmState };

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
