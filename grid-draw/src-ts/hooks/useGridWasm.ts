import { useState, useEffect, useRef, RefObject } from 'react';
import type { GridCanvasWasm, GridWasmState } from '../types/grid';

export type { GridCanvasWasm, GridWasmState };

export function useGridWasm(
  canvasRef: RefObject<HTMLCanvasElement | null>,
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

    const canvas = canvasRef.current;
    if (!canvas) return; // Wait for canvas to be available

    initRef.current = true;

    (async () => {
      try {
        const wasm = await import('../../pkg/grid_draw_wasm');
        await wasm.default();
        // Use from_canvas to pass element directly (works in shadow DOM)
        const grid = wasm.GridCanvas.from_canvas(canvas, initialRows, initialCols);
        setState({
          grid,
          loading: false,
          error: null,
          initialized: true,
        });
      } catch (err) {
        initRef.current = false; // Allow retry on error
        setState((prev) => ({
          ...prev,
          loading: false,
          error: err instanceof Error ? err.message : String(err),
        }));
      }
    })();
  }, [canvasRef.current, initialRows, initialCols]);

  return state;
}
