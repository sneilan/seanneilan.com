import { useState, useEffect, useRef, RefObject } from 'react';
import type { GridCanvasWasm, GridWasmState } from '../types/grid';
import { useGridStore } from '../store/gridStore';

export type { GridCanvasWasm, GridWasmState };

/**
 * Shape-buffer packing version this build of the app expects. Must match the
 * Rust SCHEMA_VERSION constant. If a loaded WASM instance reports a different
 * version (e.g. a stale module survived a hot reload that changed the schema),
 * we reset it instead of rendering garbage from a half-migrated buffer.
 */
const EXPECTED_SCHEMA_VERSION = 9;

// Read Vite's `import.meta.env.DEV` without asserting import.meta's shape (the TS
// lib types it as only `{ url }`); `'env' in meta` narrows it to read the flag.
function isDevBuild(): boolean {
  const meta: ImportMeta = import.meta;
  if (!('env' in meta)) return false;
  const env = meta.env;
  return typeof env === 'object' && env !== null && 'DEV' in env && env.DEV === true;
}

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
  initialViewW: number,
  initialViewH: number
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
        const grid = wasm.GridCanvas.from_canvas(canvas, initialViewW, initialViewH);
        guardSchema(grid);
        // Publish the grid handle to the store so actions can mutate it directly,
        // rather than the component bridging it across with a useEffect.
        useGridStore.getState().setGrid(grid);
        // Dev-only handle for e2e/manual debugging (e.g. inspecting filled cells).
        if (isDevBuild()) {
          // Window doesn't declare our test-only field; an optional-property view
          // of the same object lets us assign it without an assertion.
          const testWindow: Window & { __gridForTest?: unknown } = window;
          testWindow.__gridForTest = grid;
        }
        setState({
          grid,
          loading: false,
          error: null,
          initialized: true,
        });
        // The text tool draws BigBlue Terminal on the canvas via fillText, which
        // needs the @font-face to be loaded. Trigger the load and re-render once
        // ready so any already-placed text repaints in the correct font.
        if (typeof document !== 'undefined' && document.fonts?.load) {
          document.fonts.load("16px 'BigBlue Terminal'").then(() => grid.render()).catch(() => {});
        }
      } catch (err) {
        initRef.current = false; // Allow retry on error
        setState((prev) => ({
          ...prev,
          loading: false,
          error: err instanceof Error ? err.message : String(err),
        }));
      }
    })();
  }, [canvasRef.current, initialViewW, initialViewH]);

  return state;
}
