import { useCallback, useEffect, useRef, useState } from 'react';
import { useGridWasm } from '../hooks/useGridWasm';
import { useGridStore, getSelectionBoundsAll, serializeSelection, TEXT_SIZES, type SelectedItem } from '../store/gridStore';
import { getLineHandles, getRectHandles, hitTestHandle } from '../utils/handles';
import { Undo2, Redo2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { DraggablePanel } from '@/components/DraggablePanel';
import Gallery from './Gallery';
import { cn } from '@/lib/utils';
import { DATA_SERVER, saveDesign, getDesign, getDesignByName, teacherPredict } from '../lib/dataServer';

const CELL_SIZE = 16;
const HEADER_HEIGHT = 48;
const BASE = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/grid-draw/';

const COLORS = [
  { hex: '#000000', name: 'Black' },
  { hex: '#ffffff', name: 'White' },
  { hex: '#cc3333', name: 'Red' },
  { hex: '#ffcc00', name: 'Yellow' },
  { hex: '#2266dd', name: 'Blue' },
  { hex: '#22aa22', name: 'Green' },
  { hex: null, name: 'Transparent' },
];

// One training run's live progress, as reported by the trainer to the data
// server's /jobs endpoint and polled by the app.
type TrainingJob = {
  id: string;
  status: string;
  step: number;
  total: number;
  loss: number;
  message: string;
  updatedAt: string;
};

// An 8-char id of lowercase letters + digits, used to auto-name saved drawings.
function randomName(): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const bytes = new Uint8Array(8);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => alphabet[b % alphabet.length]).join('');
}

// A design with no drawable content — used to flag an empty prediction (the
// untrained local model often returns this) so the status isn't misleading.
function isEmptyDesign(d: { cells?: unknown[]; lines?: unknown[]; rects?: unknown[]; texts?: unknown[] }): boolean {
  return (d.cells?.length ?? 0) + (d.lines?.length ?? 0) + (d.rects?.length ?? 0) + (d.texts?.length ?? 0) === 0;
}

// Visible canvas size in CSS pixels (the viewport below the header). The world
// behind it is infinite; only this window is ever drawn.
function calculateViewport() {
  return {
    w: Math.max(1, window.innerWidth),
    h: Math.max(1, window.innerHeight - HEADER_HEIGHT),
  };
}

function GridCanvas() {
  const [viewport, setViewport] = useState(() => calculateViewport());
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { grid, loading, error } = useGridWasm(canvasRef, viewport.w, viewport.h);

  // Get state and actions from store
  const store = useGridStore();
  const {
    tool, setTool,
    colorIdx, setColorIdx, pickColor,
    outlineIdx, pickOutline,
    isDrawing, drawMode, startDrawing, stopDrawing,
    lineStart, startLine, finishLine,
    rectStart, startRect, finishRect,
    textSize, pickTextSize,
    beginTextEdit, typeTextChar, backspaceText, commitTextEdit, cancelTextEdit,
    selectedItems, setSelectedItems, selectAll,
    clipboard, copy, paste, deleteSelected,
    selectMode, isSelecting,
    selectBoxStart, selectDragStart,
    startBoxSelection, updateBoxSelection, finishBoxSelection, cancelBoxSelection,
    startDragSelection, finishDragSelection, cancelDragSelection,
    startResize, updateResize, finishResize, cancelResize,
    setMousePos, addItemToSelection, removeItemFromSelection,
    hitTestShapes, getSelectedCells,
    jsonOutput, tensorOutput,
    importJson, importTensor, clear,
    updateOutputs, renderSelection,
    beginDrawStroke, drawCellAt, endDrawStroke, commitLine, commitRect,
    undo, redo, canUndo, canRedo,
    captureMode, captureInput,
    startTrainingCapture, captureSetInput, buildTrainingExample,
    finishTrainingCapture, cancelTrainingCapture,
    serializeWholeGrid, exportHistory, loadDesignWithHistory,
    currentName, setCurrentName, saveState,
  } = store;

  // historyTick re-renders the component on any commit/undo/redo so the
  // undo/redo buttons' enabled state stays in sync with the history stacks.
  void store.historyTick;

  // Helper to get selected cells only
  const selectedCells = getSelectedCells();

  // Training-data capture/predict status shown in the Training Data panel.
  const [trainStatus, setTrainStatus] = useState<string>('');
  // When on, a teacher (480B) output is auto-accepted into the training set
  // (gated on server-side schema validation).
  const [teacherAutoSave, setTeacherAutoSave] = useState<boolean>(false);
  // Gallery shown as a modal overlay over the editor (no page navigation).
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);

  // Camera over the infinite world: (x, y) is the world-pixel coordinate shown
  // at the canvas top-left; zoom is the scale. The WASM grid renders through it
  // (screen = (world - cam)·zoom). Pushed to WASM via applyCamera on every change
  // — no CSS transform; the canvas is a fixed viewport-sized window.
  const [cam, setCam] = useState({ x: 0, y: 0, zoom: 1 });
  const ZOOM_MIN = 0.25;
  const ZOOM_MAX = 12;
  // Mirror `cam` in a ref so the mouse handlers can read the latest pan/zoom
  // without listing `cam` in their deps (which changes on every pan frame).
  const camRef = useRef(cam);
  camRef.current = cam;

  // Set the camera in both React state (for the % indicator) and the WASM grid
  // (which re-renders). The single chokepoint for moving/zooming the view.
  const applyCamera = useCallback((next: { x: number; y: number; zoom: number }) => {
    setCam(next);
    grid?.set_camera(next.x, next.y, next.zoom);
  }, [grid]);

  // Pan: hold Space or use the middle mouse button and drag to move the canvas.
  // isSpaceDown gates left-drag panning; spaceHeld drives the cursor; panRef
  // holds the gesture's start screen point and the camera at gesture start.
  const isSpaceDown = useRef(false);
  const [spaceHeld, setSpaceHeld] = useState(false);
  const panRef = useRef<{ x: number; y: number; camX: number; camY: number } | null>(null);

  // Save the whole current drawing to the gallery under an auto-generated
  // 8-char [a-z0-9] name (no prompt).
  const saveToGallery = useCallback(async () => {
    const design = serializeWholeGrid();
    if (!design || (design.cells.length + design.lines.length + design.rects.length + design.texts.length) === 0) {
      setTrainStatus('Nothing to save — draw something first.');
      return;
    }
    const name = randomName();
    setTrainStatus('Saving to gallery…');
    try {
      await saveDesign(name, design, exportHistory());
      // Adopt this name so subsequent edits auto-save to the same drawing (see
      // lib/autosave.ts), and reflect the shareable per-drawing URL.
      setCurrentName(name);
      window.history.replaceState({}, '', `${BASE}design/${name}/`);
      setTrainStatus(`Saved as ${name}. Auto-saving changes.`);
    } catch (err) {
      setTrainStatus(`Save failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  }, [serializeWholeGrid, exportHistory, setCurrentName]);

  // One-shot init once the async WASM grid is ready: resolve a drawing from the
  // URL and load it. The actual work lives in store actions; this thin effect
  // only bridges the external readiness signal (grid) into those actions. The
  // grid is infinite, so a loaded design is never clipped to fit — it places at
  // its absolute coordinates regardless of viewport/zoom.
  // Auto-save is wired separately as a store subscription (lib/autosave.ts), NOT
  // here — setting currentName AFTER loadDesignWithHistory's history bump is what
  // keeps the load from triggering a redundant save.
  useEffect(() => {
    if (!grid) return;
    let cancelled = false;
    const nameMatch = window.location.pathname.match(/\/design\/([A-Za-z0-9_-]+)\/?$/);
    if (nameMatch) {
      getDesignByName(nameMatch[1])
        .then((d) => {
          if (cancelled) return;
          loadDesignWithHistory(d.design, d.history ?? null);
          setCurrentName(d.name); // edits now auto-save to this drawing
        })
        .catch(() => setTrainStatus(`No drawing named "${nameMatch[1]}".`));
      return () => { cancelled = true; };
    }
    const id = new URLSearchParams(window.location.search).get('load');
    if (!id) return;
    getDesign(Number(id))
      .then((d) => {
        if (cancelled) return;
        loadDesignWithHistory(d.design, d.history ?? null);
        setCurrentName(d.name);
        // Switch the URL to the shareable per-drawing form so auto-save persists.
        window.history.replaceState({}, '', `${BASE}design/${encodeURIComponent(d.name)}/`);
      })
      .catch(() => { window.history.replaceState({}, '', BASE); });
    return () => { cancelled = true; };
  }, [grid, loadDesignWithHistory, setCurrentName]);

  // Live training-job progress, polled from the data server.
  const [jobs, setJobs] = useState<TrainingJob[]>([]);
  useEffect(() => {
    let alive = true;
    const poll = async () => {
      try {
        const res = await fetch(`${DATA_SERVER}/jobs`);
        if (!res.ok) return;
        const body = await res.json();
        if (alive) setJobs(Array.isArray(body.jobs) ? body.jobs : []);
      } catch {
        // server not running; just show nothing
      }
    };
    poll();
    const id = setInterval(poll, 2000);
    return () => { alive = false; clearInterval(id); };
  }, []);

  // POST the assembled {input, output} example to the Go data server.
  const saveTrainingExample = useCallback(async () => {
    const example = buildTrainingExample();
    if (!example) {
      setTrainStatus('Select the output region first.');
      return;
    }
    setTrainStatus('Saving…');
    try {
      const res = await fetch(`${DATA_SERVER}/examples`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(example),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const body = await res.json().catch(() => ({}));
      finishTrainingCapture();
      setTrainStatus(`Saved${typeof body.count === 'number' ? ` (${body.count} total)` : ''}.`);
    } catch (err) {
      setTrainStatus(`Save failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  }, [buildTrainingExample, finishTrainingCapture]);

  // Kick off a training run on the server; progress shows in Training Jobs.
  const startTraining = useCallback(async () => {
    setTrainStatus('Starting training…');
    try {
      const res = await fetch(`${DATA_SERVER}/train`, { method: 'POST' });
      if (!res.ok) throw new Error((await res.text()) || `HTTP ${res.status}`);
      const body = await res.json();
      setTrainStatus(`Training started (${body.id}). See Training Jobs.`);
    } catch (err) {
      setTrainStatus(`Train failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  }, []);

  // Send the current selection as an input to the trained model and stamp the
  // predicted design onto the grid (just below the input) via importJson-style
  // placement. Requires the server's /predict endpoint to be wired to a model.
  const predictFromSelection = useCallback(async () => {
    const { grid: g, selectedItems: items } = useGridStore.getState();
    if (!g) return;
    const input = serializeSelection(g, items);
    if (!input) {
      setTrainStatus('Select an input region to predict from.');
      return;
    }
    // Anchor the prediction just below the input selection's bounding box.
    const bounds = getSelectionBoundsAll(items, g);
    const anchorRow = bounds ? bounds.maxRow + 2 : 0;
    const anchorCol = bounds ? bounds.minCol : 0;
    setTrainStatus('Predicting…');
    try {
      const res = await fetch(`${DATA_SERVER}/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const body = await res.json();
      const out = body.output;
      if (!out) throw new Error('no output in response');
      useGridStore.getState().placeDesign(out, anchorRow, anchorCol);
      setTrainStatus(isEmptyDesign(out)
        ? 'Model returned an EMPTY design (the local model is untrained — try Teacher 480B).'
        : 'Prediction placed below the input.');
    } catch (err) {
      setTrainStatus(`Predict failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  }, []);

  // Ask the teacher model (Qwen3-Coder-480B) to draft the output, learning the
  // transform from the stored examples. Places it below the input to edit; with
  // auto-save on, the schema-validated pair also lands in the training set.
  const teacherFromSelection = useCallback(async () => {
    const { grid: g, selectedItems: items } = useGridStore.getState();
    if (!g) return;
    const input = serializeSelection(g, items);
    if (!input) {
      setTrainStatus('Select an input region for the teacher.');
      return;
    }
    const bounds = getSelectionBoundsAll(items, g);
    const anchorRow = bounds ? bounds.maxRow + 2 : 0;
    const anchorCol = bounds ? bounds.minCol : 0;
    setTrainStatus('Asking teacher (480B)…');
    try {
      const { output, saved } = await teacherPredict(input, teacherAutoSave);
      useGridStore.getState().placeDesign(output, anchorRow, anchorCol);
      setTrainStatus(isEmptyDesign(output)
        ? 'Teacher returned an EMPTY design.'
        : saved
          ? 'Teacher output placed & saved to training data.'
          : 'Teacher output placed below the input — fix it, then Make Training Data.');
    } catch (err) {
      setTrainStatus(`Teacher failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  }, [teacherAutoSave]);

  // Open a saved drawing in place (from the Gallery modal): fetch it with its
  // history, load it, adopt its name for auto-save, and reflect the URL — no
  // page navigation.
  const openDrawing = useCallback(async (name: string) => {
    const d = await getDesignByName(name);
    loadDesignWithHistory(d.design, d.history ?? null);
    setCurrentName(d.name);
    window.history.replaceState({}, '', `${BASE}design/${encodeURIComponent(d.name)}/`);
    setGalleryOpen(false);
  }, [loadDesignWithHistory, setCurrentName]);

  // Handle window resize: just resize the visible viewport. The world is
  // infinite, so no content is ever lost — shrinking the window only narrows the
  // window onto the same unbounded grid.
  useEffect(() => {
    const handleResize = () => {
      const v = calculateViewport();
      setViewport(v);
      grid?.set_viewport(v.w, v.h);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [grid]);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // While typing a text shape, the dedicated text handler owns the keyboard;
      // don't let tool/color shortcuts fire from the letters being typed.
      if (useGridStore.getState().textEdit) return;
      if (e.key === '\\') setTool(tool === 'line' ? 'draw' : 'line');
      if (e.key === 'm') setTool(tool === 'rect' ? 'draw' : 'rect');
      if (e.key === 't') setTool(tool === 'text' ? 'draw' : 'text');
      if (e.key === 's') setTool(tool === 'select' ? 'draw' : 'select');
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedItems.length > 0) {
        e.preventDefault();
        deleteSelected();
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        selectAll();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'c' && selectedItems.length > 0) {
        e.preventDefault();
        copy();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'v' && clipboard) {
        e.preventDefault();
        paste();
      }
      // Undo: Ctrl/Cmd+Z. Redo: Ctrl/Cmd+Shift+Z or Ctrl/Cmd+Y.
      if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        undo();
      }
      if ((e.ctrlKey || e.metaKey) && ((e.shiftKey && e.key.toLowerCase() === 'z') || e.key.toLowerCase() === 'y')) {
        e.preventDefault();
        redo();
      }
      const n = parseInt(e.key);
      if (n >= 1 && n <= 7) setColorIdx(n - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [tool, setTool, setColorIdx, selectedItems, deleteSelected, copy, paste, clipboard, undo, redo, selectAll]);

  // Inline text typing. Active only while a text shape is being edited; captures
  // printable characters, Backspace to delete, Enter to commit, Esc to cancel.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!useGridStore.getState().textEdit) return;
      if (e.key === 'Enter') { e.preventDefault(); commitTextEdit(); return; }
      if (e.key === 'Escape') { e.preventDefault(); cancelTextEdit(); return; }
      if (e.key === 'Backspace') { e.preventDefault(); backspaceText(); return; }
      // Single printable char (ignore modifier combos like Ctrl+C / Cmd+V).
      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        typeTextChar(e.key);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [commitTextEdit, cancelTextEdit, backspaceText, typeTextChar]);

  // Scroll-to-zoom centered on the cursor. Attached natively (not via React's
  // onWheel) so we can preventDefault — React's wheel listener is passive and
  // can't stop the page from scrolling. The canvas top-left is fixed at
  // (0, HEADER_HEIGHT); we keep the WORLD point under the cursor stationary by
  // solving for the camera offset at the new zoom.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const v = camRef.current;
      const factor = e.deltaY < 0 ? 1.1 : 1 / 1.1;
      const zoom = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, v.zoom * factor));
      if (zoom === v.zoom) return;
      // Cursor position in canvas/screen pixels (canvas top-left = 0, HEADER).
      const sx = e.clientX;
      const sy = e.clientY - HEADER_HEIGHT;
      // Keep the world point under the cursor fixed: cam' = cam + s*(1/z - 1/z').
      const x = v.x + sx * (1 / v.zoom - 1 / zoom);
      const y = v.y + sy * (1 / v.zoom - 1 / zoom);
      applyCamera({ x, y, zoom });
    };
    canvas.addEventListener('wheel', onWheel, { passive: false });
    return () => canvas.removeEventListener('wheel', onWheel);
  }, [applyCamera]);

  // Track Spacebar to enable pan-drag. External DOM subscription (keydown/keyup);
  // ignored while editing text so the space still types. preventDefault stops the
  // page from scrolling on space.
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.code !== 'Space' || useGridStore.getState().textEdit) return;
      e.preventDefault();
      isSpaceDown.current = true;
      setSpaceHeld(true);
    };
    const up = (e: KeyboardEvent) => {
      if (e.code !== 'Space') return;
      isSpaceDown.current = false;
      setSpaceHeld(false);
    };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up); };
  }, []);

  const resetView = useCallback(() => applyCamera({ x: 0, y: 0, zoom: 1 }), [applyCamera]);

  // Coordinate helpers. getCanvasXY returns WORLD pixels (screen → world through
  // the camera): world = screen/zoom + cam. Everything downstream (cell coords,
  // hit tests) works in world space; only WASM render applies the camera.
  const getCanvasXY = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = event.currentTarget;
    const rect = canvas.getBoundingClientRect();
    const screenX = (event.clientX - rect.left) * (canvas.width / rect.width);
    const screenY = (event.clientY - rect.top) * (canvas.height / rect.height);
    const c = camRef.current;
    return { x: screenX / c.zoom + c.x, y: screenY / c.zoom + c.y };
  };

  const getCellCoords = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getCanvasXY(event);
    return { col: Math.floor(x / CELL_SIZE), row: Math.floor(y / CELL_SIZE) };
  };

  // Nearest grid intersection (for line/rect endpoints). Infinite grid: no clamp.
  const getIntersectionCoords = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getCanvasXY(event);
    return { col: Math.round(x / CELL_SIZE), row: Math.round(y / CELL_SIZE) };
  };

  const isItemSelected = (item: SelectedItem) => {
    return selectedItems.some(s => {
      if (s.type !== item.type) return false;
      if (s.type === 'cell' && item.type === 'cell') {
        return s.row === item.row && s.col === item.col;
      }
      if (s.type === 'line' && item.type === 'line') {
        return s.index === item.index;
      }
      if (s.type === 'rect' && item.type === 'rect') {
        return s.index === item.index;
      }
      if (s.type === 'text' && item.type === 'text') {
        return s.index === item.index;
      }
      return false;
    });
  };

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (!grid) return;
      // Pan gesture (middle mouse, or Space-held left drag) takes precedence over
      // every tool and never mutates the document.
      if (event.button === 1 || (event.button === 0 && isSpaceDown.current)) {
        event.preventDefault();
        panRef.current = { x: event.clientX, y: event.clientY, camX: camRef.current.x, camY: camRef.current.y };
        event.currentTarget.style.cursor = 'grabbing';
        return;
      }
      grid.set_draw_color(colorIdx);
      grid.set_outline_color(outlineIdx);

      if (tool === 'draw') {
        const { col, row } = getCellCoords(event);
        const mode = colorIdx === 6 ? false : !grid.get_cell(row, col);
        startDrawing(mode);
        // Open one history batch for the whole stroke (mousedown → mouseup).
        beginDrawStroke();
        drawCellAt(row, col, mode);
        updateOutputs();
      } else if (tool === 'line') {
        const { col, row } = getIntersectionCoords(event);
        startLine({ row, col });
        grid.render_with_line(row, col, row, col);
      } else if (tool === 'rect') {
        const { col, row } = getIntersectionCoords(event);
        startRect({ row, col });
        grid.render_with_rect(row, col, row, col);
      } else if (tool === 'text') {
        // Place the text caret at the clicked cell and start typing. If a text
        // is already in progress, beginTextEdit commits it first.
        const { col, row } = getCellCoords(event);
        beginTextEdit({ row, col });
      } else if (tool === 'select') {
        const { col, row } = getCellCoords(event);
        const { x, y } = getCanvasXY(event);

        const shiftHeld = event.shiftKey;

        // Resize: if a single line/rect is selected and we grabbed one of its
        // handles, start a resize instead of a move. Checked before everything
        // else so handles take priority over the drag/hit-test branches.
        if (selectedItems.length === 1 && !shiftHeld) {
          const only = selectedItems[0];
          if (only.type === 'line' || only.type === 'rect') {
            const handles = only.type === 'line'
              ? getLineHandles(grid.get_line(only.index))
              : getRectHandles(grid.get_rect(only.index));
            const hit = hitTestHandle(x, y, handles, CELL_SIZE, 9);
            if (hit) {
              startResize({ shape: only.type, index: only.index, handle: hit.handle });
              return;
            }
          }
        }

        // Check if clicking on any selected item's bounding box (cells, lines, rects)
        const bounds = getSelectionBoundsAll(selectedItems, grid);
        const inBounds = bounds && row >= bounds.minRow && row <= bounds.maxRow &&
                         col >= bounds.minCol && col <= bounds.maxCol;

        // First, hit test to see if we clicked on a shape
        const hitItem = hitTestShapes(x, y);

        if (hitItem && !shiftHeld && isItemSelected(hitItem) && selectedItems.length > 1) {
          // Clicked on an item that's already part of a multi-selection -
          // drag the whole selection, don't collapse it to just this item.
          startDragSelection({ row, col });
          renderSelection();
        } else if (inBounds && selectedItems.length > 0 && !shiftHeld && !hitItem) {
          // Click inside selection bounding box (but not on a shape) - start
          // drag. Flag it as an empty-space press so a zero-movement release
          // deselects instead of keeping the selection.
          startDragSelection({ row, col }, true);
          renderSelection();
        } else if (hitItem) {
          // Clicked on a shape (cell, line, or rect)
          if (shiftHeld && !isItemSelected(hitItem)) {
            addItemToSelection(hitItem);
          } else if (shiftHeld && isItemSelected(hitItem)) {
            removeItemFromSelection(hitItem);
          } else {
            // Regular click - select single item and prepare for drag
            setSelectedItems([hitItem]);
            startDragSelection({ row, col });
            grid.render();
            // Highlight the selected item
            if (hitItem.type === 'cell') {
              grid.highlight_cell(hitItem.row, hitItem.col);
            } else if (hitItem.type === 'line') {
              grid.highlight_line(hitItem.index);
            } else if (hitItem.type === 'rect') {
              grid.highlight_rect(hitItem.index);
            }
          }
        } else {
          // Click on empty space - start box selection
          startBoxSelection({ row, col }, shiftHeld);
        }
      }
    },
    [grid, tool, colorIdx, outlineIdx, selectedItems, selectedCells, hitTestShapes, startDrawing, startLine, startRect, startBoxSelection, startDragSelection, startResize, addItemToSelection, removeItemFromSelection, setSelectedItems, updateOutputs, renderSelection, beginDrawStroke, drawCellAt, beginTextEdit]
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (!grid) return;

      // Active pan: move the camera opposite the cursor so the grabbed world
      // point follows the cursor. Screen delta maps to world delta via 1/zoom.
      if (panRef.current) {
        const p = panRef.current;
        const z = camRef.current.zoom;
        applyCamera({
          x: p.camX - (event.clientX - p.x) / z,
          y: p.camY - (event.clientY - p.y) / z,
          zoom: z,
        });
        return;
      }

      const coords = getCellCoords(event);
      setMousePos(coords);

      // Cursor feedback for the select tool: grab over a handle or a draggable
      // selection, grabbing while actively dragging/resizing, move over the
      // selection's interior, crosshair otherwise.
      if (tool === 'select') {
        const canvas = event.currentTarget;
        if (isSelecting && selectMode === 'resize') {
          canvas.style.cursor = 'grabbing';
        } else if (isSelecting && selectMode === 'drag') {
          canvas.style.cursor = 'move';
        } else {
          const { x, y } = getCanvasXY(event);
          let cursor = 'crosshair';
          // Handle hover (single line/rect selected) -> grab (resize affordance).
          if (selectedItems.length === 1) {
            const only = selectedItems[0];
            if (only.type === 'line' || only.type === 'rect') {
              const handles = only.type === 'line'
                ? getLineHandles(grid.get_line(only.index))
                : getRectHandles(grid.get_rect(only.index));
              if (hitTestHandle(x, y, handles, CELL_SIZE, 9)) cursor = 'grab';
            }
          }
          // Hover over a selected shape, or inside the selection bounds -> move
          // (four-way cross), to distinguish moving from resizing.
          if (cursor === 'crosshair' && selectedItems.length > 0) {
            const hit = hitTestShapes(x, y);
            const b = getSelectionBoundsAll(selectedItems, grid);
            const inB = b && coords.row >= b.minRow && coords.row <= b.maxRow &&
                        coords.col >= b.minCol && coords.col <= b.maxCol;
            if ((hit && isItemSelected(hit)) || inB) cursor = 'move';
          }
          canvas.style.cursor = cursor;
        }
      } else {
        event.currentTarget.style.cursor = 'crosshair';
      }

      if (!isDrawing && !isSelecting) return;

      if (tool === 'draw' && isDrawing) {
        const { col, row } = getCellCoords(event);
        drawCellAt(row, col, drawMode);
        updateOutputs();
      } else if (tool === 'line' && lineStart) {
        const { col, row } = getIntersectionCoords(event);
        grid.render_with_line(lineStart.row, lineStart.col, row, col);
      } else if (tool === 'rect' && rectStart) {
        const { col, row } = getIntersectionCoords(event);
        grid.render_with_rect(rectStart.row, rectStart.col, row, col);
      } else if (tool === 'select' && isSelecting && selectMode === 'resize') {
        // Resize uses intersection coords (corners), like line/rect drawing.
        const { col, row } = getIntersectionCoords(event);
        updateResize({ row, col });
      } else if (tool === 'select' && isSelecting) {
        // Infinite grid: no clamping — selection works in negative space too.
        const { col, row } = getCellCoords(event);

        if (selectMode === 'box' && selectBoxStart) {
          updateBoxSelection({ row, col });
        } else if (selectMode === 'drag' && selectDragStart && selectedItems.length > 0) {
          const deltaRow = row - selectDragStart.row;
          const deltaCol = col - selectDragStart.col;
          grid.render();
          // Live preview: draw each selected element as a ghost at its new
          // position so the actual cells/lines/rects appear to move with the
          // cursor (not just an outline) until release.
          for (const item of selectedItems) {
            if (item.type === 'cell') {
              const newRow = item.row + deltaRow;
              const newCol = item.col + deltaCol;
              grid.preview_cell(newRow, newCol, grid.get_cell_color(item.row, item.col));
            } else if (item.type === 'line') {
              const l = grid.get_line(item.index);
              if (l.length >= 5) {
                grid.preview_line(l[0] + deltaRow, l[1] + deltaCol, l[2] + deltaRow, l[3] + deltaCol, l[4]);
              }
            } else if (item.type === 'rect') {
              const rr = grid.get_rect(item.index);
              if (rr.length >= 6) {
                grid.preview_rect(rr[0] + deltaRow, rr[1] + deltaCol, rr[2] + deltaRow, rr[3] + deltaCol, rr[4], rr[5]);
              }
            } else if (item.type === 'text') {
              const t = grid.get_text(item.index);
              if (t.length >= 3) {
                grid.preview_text(t[0] + deltaRow, t[1] + deltaCol, t[2], grid.get_text_size(item.index), grid.get_text_string(item.index));
              }
            }
          }
        }
      }
    },
    [grid, tool, isDrawing, isSelecting, drawMode, lineStart, rectStart, selectMode, selectBoxStart, selectDragStart, selectedItems, hitTestShapes, setMousePos, updateBoxSelection, updateResize, updateOutputs, drawCellAt]
  );

  const handleMouseUp = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (!grid) return;

      // End a pan gesture; restore the appropriate idle cursor.
      if (panRef.current) {
        panRef.current = null;
        event.currentTarget.style.cursor = isSpaceDown.current ? 'grab' : 'crosshair';
        return;
      }

      if (tool === 'draw') {
        // Close the stroke's history batch (one undo step for the whole stroke).
        endDrawStroke();
        stopDrawing();
      } else if (tool === 'line') {
        if (lineStart) {
          const { col, row } = getIntersectionCoords(event);
          commitLine(lineStart.row, lineStart.col, row, col);
        }
        finishLine();
      } else if (tool === 'rect') {
        if (rectStart) {
          const { col, row } = getIntersectionCoords(event);
          commitRect(rectStart.row, rectStart.col, row, col);
        }
        finishRect();
      } else if (tool === 'select') {
        const { col, row } = getCellCoords(event);

        if (selectMode === 'resize') {
          const { col: icol, row: irow } = getIntersectionCoords(event);
          finishResize({ row: irow, col: icol });
        } else if (selectMode === 'box') {
          finishBoxSelection({ row, col });
        } else if (selectMode === 'drag') {
          finishDragSelection({ row, col });
        }
      }
    },
    [grid, tool, lineStart, rectStart, selectMode, stopDrawing, finishLine, finishRect, finishBoxSelection, finishDragSelection, finishResize, updateOutputs, endDrawStroke, commitLine, commitRect]
  );

  const handleMouseLeave = useCallback(() => {
    // Abandon any in-progress pan when the cursor leaves the canvas.
    if (panRef.current) {
      panRef.current = null;
      return;
    }
    if (tool === 'draw') {
      stopDrawing();
    } else if (tool === 'line') {
      if (grid) grid.render();
      finishLine();
    } else if (tool === 'rect') {
      if (grid) grid.render();
      finishRect();
    } else if (tool === 'select') {
      if (selectMode === 'box') {
        cancelBoxSelection();
      } else if (selectMode === 'drag') {
        cancelDragSelection();
      } else if (selectMode === 'resize') {
        cancelResize();
      }
    }
  }, [grid, tool, selectMode, stopDrawing, finishLine, finishRect, cancelBoxSelection, cancelDragSelection, cancelResize]);

  if (error) {
    return (
      <div className="flex items-center justify-center bg-gray-100 min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-red-600">Error loading WASM: {error}</p>
        </div>
      </div>
    );
  }

  // Full-screen layout
  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 flex items-center px-4">
        <h1 className="text-xl font-bold">Grid Draw</h1>
        {loading && <span className="ml-4 text-sm text-gray-500">Loading...</span>}
        <div className="ml-auto flex items-center gap-3">
          {currentName && (
            <span className="text-sm text-gray-500">
              {currentName}
              {saveState === 'saving' && ' · saving…'}
              {saveState === 'saved' && ' · saved'}
              {saveState === 'error' && ' · save failed'}
            </span>
          )}
          {(cam.zoom !== 1 || cam.x !== 0 || cam.y !== 0) && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 tabular-nums">{Math.round(cam.zoom * 100)}%</span>
              <Button variant="outline" size="sm" onClick={resetView}>Reset view</Button>
            </div>
          )}
        </div>
      </header>

      <canvas
        ref={canvasRef}
                className={cn(
          "fixed left-0 right-0 bottom-0",
          loading && "opacity-50"
        )}
        style={{
          top: HEADER_HEIGHT,
          cursor: loading ? 'wait' : spaceHeld ? 'grab' : 'crosshair',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      />

      <DraggablePanel title="Tools" defaultPosition={{ x: 20, y: HEADER_HEIGHT + 20 }}>
        <div className="space-y-3">
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">Mode</label>
            <ToggleGroup
              type="single"
              value={tool}
              onValueChange={(val) => val && setTool(val as typeof tool)}
              variant="outline"
              className="flex-wrap"
            >
              <ToggleGroupItem value="draw" className="text-xs">Draw</ToggleGroupItem>
              <ToggleGroupItem value="line" className="text-xs">Line</ToggleGroupItem>
              <ToggleGroupItem value="rect" className="text-xs">Rect</ToggleGroupItem>
              <ToggleGroupItem value="text" className="text-xs">Text</ToggleGroupItem>
              <ToggleGroupItem value="select" className="text-xs">Select</ToggleGroupItem>
            </ToggleGroup>
          </div>

          {tool === 'text' && (
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1 block">Text size</label>
              <ToggleGroup
                type="single"
                value={String(textSize)}
                onValueChange={(val) => val && pickTextSize(Number(val))}
                variant="outline"
                className="flex-wrap"
              >
                {TEXT_SIZES.map((s) => (
                  <ToggleGroupItem key={s} value={String(s)} className="text-xs">{s}&times;</ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          )}

          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">Color</label>
            <div className="flex gap-1">
              {COLORS.map((c, i) => (
                <button
                  key={i}
                  onClick={() => pickColor(i)}
                  title={`${i + 1}: ${c.name}`}
                  className={cn(
                    "w-6 h-6 rounded border-2 transition-all",
                    colorIdx === i
                      ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500"
                      : "border-gray-300 hover:border-gray-400",
                    c.hex === '#ffffff' && "shadow-sm"
                  )}
                  style={{
                    backgroundColor: c.hex ?? 'transparent',
                    backgroundImage: c.hex === null
                      ? 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)'
                      : undefined,
                    backgroundSize: c.hex === null ? '6px 6px' : undefined,
                    backgroundPosition: c.hex === null ? '0 0, 0 3px, 3px -3px, -3px 0px' : undefined,
                  }}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">Outline (rects)</label>
            <div className="flex gap-1">
              {COLORS.map((c, i) => (
                <button
                  key={i}
                  onClick={() => pickOutline(i)}
                  title={i === 6 ? 'No outline' : c.name}
                  className={cn(
                    "w-6 h-6 rounded border-2 transition-all",
                    outlineIdx === i
                      ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500"
                      : "border-gray-300 hover:border-gray-400",
                    c.hex === '#ffffff' && "shadow-sm"
                  )}
                  style={{
                    backgroundColor: c.hex ?? 'transparent',
                    backgroundImage: c.hex === null
                      ? 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)'
                      : undefined,
                    backgroundSize: c.hex === null ? '6px 6px' : undefined,
                    backgroundPosition: c.hex === null ? '0 0, 0 3px, 3px -3px, -3px 0px' : undefined,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-1">
            <Button
              variant="outline"
              onClick={undo}
              disabled={loading || !canUndo()}
              size="sm"
              className="flex-1"
              title="Undo (Ctrl/Cmd+Z)"
            >
              <Undo2 className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              onClick={redo}
              disabled={loading || !canRedo()}
              size="sm"
              className="flex-1"
              title="Redo (Ctrl/Cmd+Shift+Z)"
            >
              <Redo2 className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex gap-1">
            <Button
              variant="outline"
              onClick={saveToGallery}
              disabled={loading}
              size="sm"
              className="flex-1"
              title="Save the whole drawing to the gallery"
            >
              Save to Gallery
            </Button>
            <Button
              variant="outline"
              onClick={() => setGalleryOpen(true)}
              size="sm"
              className="flex-1"
            >
              Gallery
            </Button>
          </div>

          <Button
            variant="destructive"
            onClick={clear}
            disabled={loading}
            size="sm"
            className="w-full"
          >
            Clear Grid
          </Button>

          <p className="text-xs text-gray-400">
            \ line, m rect, t text, s select, 1-7 colors, ⌘Z undo
          </p>
        </div>
      </DraggablePanel>

      <DraggablePanel
        title="Selection Data"
        defaultPosition={{ x: Math.max(20, window.innerWidth - 340), y: HEADER_HEIGHT + 20 }}
      >
        <div className="space-y-3 w-72">
          {selectedCells.length > 0 && (
            <>
              <div>
                <label className="text-xs font-medium text-gray-500 mb-1 block">JSON (sparse)</label>
                <textarea
                  value={jsonOutput}
                  onChange={(e) => importJson(e.target.value)}
                  placeholder='[{"row":0,"col":0,"color":"#000000"},...]'
                  className="w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-gray-500 mb-1 block">2D Array (black = 1)</label>
                <textarea
                  value={tensorOutput}
                  onChange={(e) => importTensor(e.target.value)}
                  placeholder="[[1, 0], [0, 1], ...]"
                  className="w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          <p className="text-xs text-gray-400">
            {selectedItems.length === 0
              ? 'Select items with Select tool (s). Paste imports at mouse position.'
              : `${selectedItems.length} item${selectedItems.length !== 1 ? 's' : ''} selected${selectedCells.length > 0 ? ` (${selectedCells.length} cell${selectedCells.length !== 1 ? 's' : ''})` : ''}.`}
          </p>
        </div>
      </DraggablePanel>

      <DraggablePanel
        title="Training Data"
        defaultPosition={{ x: Math.max(20, window.innerWidth - 340), y: HEADER_HEIGHT + 360 }}
      >
        <div className="space-y-3 w-72">
          {captureMode === 'idle' && (
            <>
              <p className="text-xs text-gray-500">
                Capture input→output pairs to train the model, or predict an
                output from a selection.
              </p>
              <Button size="sm" className="w-full" onClick={startTrainingCapture} disabled={loading}>
                Make Training Data
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={predictFromSelection}
                disabled={loading || selectedItems.length === 0}
              >
                Predict from Selection
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={teacherFromSelection}
                disabled={loading || selectedItems.length === 0}
                title="Draft the output with Qwen3-Coder-480B (OpenRouter)"
              >
                Teacher (480B)
              </Button>
              <label className="flex items-center gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  checked={teacherAutoSave}
                  onChange={(e) => setTeacherAutoSave(e.target.checked)}
                />
                Auto-save teacher output to training data
              </label>
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={startTraining}
                disabled={loading}
              >
                Start Training Run
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={() => { window.location.href = `${BASE}training/`; }}
              >
                View Training Data
              </Button>
            </>
          )}

          {captureMode === 'input' && (
            <>
              <p className="text-xs font-medium text-blue-600">
                Step 1/2 — select the INPUT, then click Next.
              </p>
              <p className="text-xs text-gray-400">{selectedItems.length} item(s) selected.</p>
              <div className="flex gap-1">
                <Button size="sm" className="flex-1" onClick={captureSetInput} disabled={selectedItems.length === 0}>
                  Next →
                </Button>
                <Button size="sm" variant="outline" className="flex-1" onClick={cancelTrainingCapture}>
                  Cancel
                </Button>
              </div>
            </>
          )}

          {captureMode === 'output' && (
            <>
              <p className="text-xs font-medium text-green-600">
                Step 2/2 — select the OUTPUT, then Save.
              </p>
              <p className="text-xs text-gray-400">
                Input: {captureInput
                  ? `${captureInput.cells.length}c ${captureInput.lines.length}l ${captureInput.rects.length}r ${captureInput.texts.length}t`
                  : '—'} · Output: {selectedItems.length} item(s)
              </p>
              <div className="flex gap-1">
                <Button size="sm" className="flex-1" onClick={saveTrainingExample} disabled={selectedItems.length === 0}>
                  Save Example
                </Button>
                <Button size="sm" variant="outline" className="flex-1" onClick={cancelTrainingCapture}>
                  Cancel
                </Button>
              </div>
            </>
          )}

          {trainStatus && <p className="text-xs text-gray-500">{trainStatus}</p>}
        </div>
      </DraggablePanel>

      {jobs.length > 0 && (
        <DraggablePanel
          title="Training Jobs"
          defaultPosition={{ x: Math.max(20, window.innerWidth - 340), y: HEADER_HEIGHT + 560 }}
        >
          <div className="space-y-2 w-72">
            {jobs.map((j) => {
              const pct = j.total > 0 ? Math.min(100, Math.round((j.step / j.total) * 100)) : 0;
              const barColor =
                j.status === 'error' ? 'bg-red-500'
                  : j.status === 'done' ? 'bg-green-500'
                    : 'bg-blue-500';
              return (
                <div key={j.id} className="text-xs">
                  <div className="flex justify-between">
                    <span className="font-medium truncate">{j.id}</span>
                    <span className="text-gray-400">{j.status}</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded mt-1 overflow-hidden">
                    <div className={cn('h-full', barColor)} style={{ width: `${pct}%` }} />
                  </div>
                  <div className="flex justify-between text-gray-400 mt-0.5">
                    <span>{j.total > 0 ? `${j.step}/${j.total} (${pct}%)` : `step ${j.step}`}</span>
                    {j.loss > 0 && <span>loss {j.loss.toFixed(3)}</span>}
                  </div>
                  {j.message && <p className="text-gray-400 truncate">{j.message}</p>}
                </div>
              );
            })}
          </div>
        </DraggablePanel>
      )}

      {galleryOpen && (
        <Gallery asModal onClose={() => setGalleryOpen(false)} onOpenDesign={openDrawing} />
      )}
    </>
  );
}

export default GridCanvas;
