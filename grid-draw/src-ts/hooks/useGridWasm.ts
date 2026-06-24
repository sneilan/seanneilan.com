import { useState, useEffect, useRef, RefObject } from 'react';
import type { GridCanvasWasm, GridWasmState } from '../types/grid';

export type { GridCanvasWasm, GridWasmState };

/**
 * Shape-buffer packing version this build of the app expects. Must match the
 * Rust SCHEMA_VERSION constant. If a loaded WASM instance reports a different
 * version (e.g. a stale module survived a hot reload that changed the schema),
 * we reset it instead of rendering garbage from a half-migrated buffer.
 */
const EXPECTED_SCHEMA_VERSION = 2;

function guardSchema(grid: GridCanvasWasm) {
  const version = grid.get_schema_version?.();
  if (version !== EXPECTED_SCHEMA_VERSION || !grid.rects_consistent?.()) {
    console.warn(
      `[grid-draw] WASM schema mismatch (got ${version}, expected ${EXPECTED_SCHEMA_VERSION}) ` +
      `or inconsistent buffer; clearing to avoid corrupted rendering.`
    );
    grid.clear();
  }
}

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
        guardSchema(grid);
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
