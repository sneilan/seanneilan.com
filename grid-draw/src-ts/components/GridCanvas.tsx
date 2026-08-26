import { useCallback, useEffect, useRef, useState } from 'react';
import { useGridWasm } from '../hooks/useGridWasm';
import { useGridStore, getSelectionBoundsAll, serializeSelection, TEXT_SIZES, LINE_WIDTHS, type SelectedItem } from '../store/gridStore';
import { uploadImage } from '../lib/apiClient';
import { suppressAutoCreate } from '../lib/autosave';
import { loadImageSize } from '../lib/imageCache';
import { getLineHandles, getRectHandles, hitTestHandle, rotateHandlePoint } from '../utils/handles';
import { Undo2, Redo2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { DraggablePanel } from '@/components/DraggablePanel';
import Gallery from './Gallery';
import TrainingData from './TrainingData';
import { cn } from '@/lib/utils';
import { useServerStore } from '../store/serverStore';
import type { SavedExample } from '../lib/localDb';
import type { DesignJSON } from '../store/gridStore';

// World px per FINE unit; a whole cell is CELL_UNITS of these (see src/lib.rs).
const CELL_SIZE = 2;
const CELL_UNITS = 8;
const HEADER_HEIGHT = 48;

// A text frame [r, c, color, boxW, boxH, ...] as rect corners [r1,c1,r2,c2] so
// it can reuse the rect resize-handle geometry.
function textFrameCorners(a: ArrayLike<number>): number[] {
  return [a[0], a[1], a[0] + a[4], a[1] + a[3]];
}
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
    lineWidth, pickLineWidth,
    pickTextAlign,
    subdivision, cycleSubdivision, setSubdivision,
    beginTextEdit, typeTextChar, backspaceText, commitTextEdit, cancelTextEdit,
    selectedItems, setSelectedItems, selectAll,
    clipboard, copy, paste, deleteSelected,
    selectMode, isSelecting,
    selectBoxStart, selectDragStart,
    startBoxSelection, updateBoxSelection, finishBoxSelection, cancelBoxSelection,
    startDragSelection, finishDragSelection, cancelDragSelection,
    startResize, updateResize, finishResize, cancelResize,
    startRotate, updateRotate, finishRotate, cancelRotate,
    setMousePos, addItemToSelection, removeItemFromSelection,
    hitTestShapes, getSelectedCells,
    jsonOutput, tensorOutput,
    importJson, importTensor, clear,
    updateOutputs, renderSelection,
    beginDrawStroke, drawCellAt, endDrawStroke, commitLine, commitRect, placeImage,
    undo, redo, canUndo, canRedo,
    captureMode, captureInput,
    startTrainingCapture, captureSetInput, buildTrainingExample,
    finishTrainingCapture, cancelTrainingCapture,
    serializeWholeGrid, loadDesignWithHistory,
    currentName, setCurrentName, saveState, setSaveState, resetHistory,
  } = store;

  // historyTick re-renders the component on any commit/undo/redo so the
  // undo/redo buttons' enabled state stays in sync with the history stacks.
  void store.historyTick;

  // Data + model access goes through the store (IndexedDB + in-browser TF.js;
  // this component never touches storage/ml directly). Training progress comes
  // from the store's local `training` state (no server, no polling).
  const getDrawing = useServerStore((s) => s.getDrawing);
  const getDrawingById = useServerStore((s) => s.getDrawingById);
  const saveExamplePair = useServerStore((s) => s.saveExamplePair);
  const updateExamplePair = useServerStore((s) => s.updateExamplePair);
  const runPredict = useServerStore((s) => s.runPredict);
  const trainModel = useServerStore((s) => s.trainModel);
  const initModel = useServerStore((s) => s.initModel);
  const modelStatus = useServerStore((s) => s.modelStatus);
  const training = useServerStore((s) => s.training);

  // Helper to get selected cells only
  const selectedCells = getSelectedCells();

  // Training-data capture/predict status shown in the Training Data panel.
  const [trainStatus, setTrainStatus] = useState<string>('');
  // Gallery shown as a modal overlay over the editor (no page navigation).
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);
  // Training-data console shown as a draggable modal over the editor.
  const [trainingOpen, setTrainingOpen] = useState<boolean>(false);
  // When a training example's half was loaded into the canvas for editing, this
  // tracks which example/half so "Update example" can overwrite it in place; the
  // untouched half (otherHalf) is preserved. Null when not editing an example.
  const [editingExample, setEditingExample] =
    useState<{ id: number; half: 'input' | 'output'; otherHalf: DesignJSON } | null>(null);

  // Image-object add flow: hidden <input> for upload, and a status line for
  // upload/decoding/errors shown under the Image controls.
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [imgStatus, setImgStatus] = useState<string>('');
  // Default longest-side size (whole cells) for a newly added image; the user
  // then drags the handles to fit.
  const IMG_DEFAULT_CELLS = 16;

  // Add an image object to the drawing. `source` is either a Blob (upload/paste
  // — sent to S3 first) or a URL string (referenced directly). The box is sized
  // from the image's aspect ratio and centered in the current viewport, snapped
  // to whole cells; the user resizes from there.
  const addImageObject = useCallback(async (source: Blob | string) => {
    try {
      let url: string;
      if (typeof source === 'string') {
        url = source;
      } else {
        setImgStatus('Uploading…');
        url = await uploadImage(source);
      }
      setImgStatus('Loading…');
      const { width, height } = await loadImageSize(url);
      const maxNat = Math.max(width, height) || 1;
      const wCells = Math.max(1, Math.round((width / maxNat) * IMG_DEFAULT_CELLS));
      const hCells = Math.max(1, Math.round((height / maxNat) * IMG_DEFAULT_CELLS));
      // Center of the current viewport, in whole cells (fine units), snapped.
      const c = camRef.current;
      const centerCol = Math.round((c.x + viewport.w / 2 / c.zoom) / CELL_SIZE / CELL_UNITS) * CELL_UNITS;
      const centerRow = Math.round((c.y + viewport.h / 2 / c.zoom) / CELL_SIZE / CELL_UNITS) * CELL_UNITS;
      const c1 = centerCol - Math.round(wCells / 2) * CELL_UNITS;
      const r1 = centerRow - Math.round(hCells / 2) * CELL_UNITS;
      placeImage(url, { r1, c1, r2: r1 + hCells * CELL_UNITS, c2: c1 + wCells * CELL_UNITS });
      setImgStatus('');
    } catch (e) {
      setImgStatus(e instanceof Error ? e.message : 'image failed');
    }
  }, [placeImage, viewport.w, viewport.h]);

  // Paste an image from the OS clipboard (Cmd/Ctrl+V of a copied picture). The
  // DOM paste event carries the bitmap even though the keyboard handler's
  // grid-clipboard paste runs too (that just no-ops when the grid clipboard is
  // empty). Only intercept when an actual image is present.
  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      if (useGridStore.getState().textEdit) return; // typing: let text input handle it
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const it of items) {
        if (it.kind === 'file' && it.type.startsWith('image/')) {
          const file = it.getAsFile();
          if (file) {
            e.preventDefault();
            void addImageObject(file);
            return;
          }
        }
      }
    };
    document.addEventListener('paste', onPaste);
    return () => document.removeEventListener('paste', onPaste);
  }, [addImageObject]);

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
      getDrawing(nameMatch[1])
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
    getDrawingById(Number(id))
      .then((d) => {
        if (cancelled) return;
        loadDesignWithHistory(d.design, d.history ?? null);
        setCurrentName(d.name);
        // Switch the URL to the shareable per-drawing form so auto-save persists.
        window.history.replaceState({}, '', `${BASE}design/${encodeURIComponent(d.name)}/`);
      })
      .catch(() => { window.history.replaceState({}, '', BASE); });
    return () => { cancelled = true; };
  }, [grid, loadDesignWithHistory, setCurrentName, getDrawing, getDrawingById]);

  // Load any persisted in-browser model at startup so Predict works after a
  // reload with no server (replaces the old /jobs polling).
  useEffect(() => { initModel(); }, [initModel]);

  // Save the assembled {input, output, delta} example to IndexedDB. `delta` puts
  // the two halves in a shared frame so the coordinate model can learn the move.
  const saveTrainingExample = useCallback(async () => {
    const example = buildTrainingExample();
    if (!example) {
      setTrainStatus('Select the output region first.');
      return;
    }
    setTrainStatus('Saving…');
    try {
      await saveExamplePair(example.input, example.output, example.delta);
      finishTrainingCapture();
      setTrainStatus('Saved.');
    } catch (err) {
      setTrainStatus(`Save failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  }, [buildTrainingExample, finishTrainingCapture, saveExamplePair]);

  // Train the tiny in-browser model on the stored examples. Progress streams into
  // the store's `training` state (shown in the Training panel below).
  const startTraining = useCallback(async () => {
    setTrainStatus('Training in the browser…');
    try {
      await trainModel();
      setTrainStatus('Model trained. Try Predict from Selection.');
    } catch (err) {
      setTrainStatus(`Train failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  }, [trainModel]);

  // Run the in-browser coordinate model over the selection: each selected cell's
  // coordinate is mapped to a new coordinate (same color). The model outputs
  // coordinates in the input's bbox frame, so we anchor placement at the input's
  // origin (its top-left), reproducing the learned absolute move.
  const predictFromSelection = useCallback(async () => {
    const { grid: g, selectedItems: items } = useGridStore.getState();
    if (!g) return;
    const input = serializeSelection(g, items);
    if (!input) {
      setTrainStatus('Select an input region to predict from.');
      return;
    }
    const bounds = getSelectionBoundsAll(items, g);
    const anchorRow = bounds ? bounds.minRow : 0;
    const anchorCol = bounds ? bounds.minCol : 0;
    setTrainStatus('Predicting…');
    try {
      const out = await runPredict(input);
      useGridStore.getState().placeDesign(out, anchorRow, anchorCol);
      setTrainStatus(isEmptyDesign(out)
        ? 'Model returned nothing — capture more examples and train again.'
        : 'Prediction placed.');
    } catch (err) {
      setTrainStatus(`Predict failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  }, [runPredict]);

  // Open a saved drawing in place (from the Gallery modal): fetch it with its
  // history, load it, adopt its name for auto-save, and reflect the URL — no
  // page navigation.
  const openDrawing = useCallback(async (name: string) => {
    const d = await getDrawing(name);
    loadDesignWithHistory(d.design, d.history ?? null);
    setCurrentName(d.name);
    setEditingExample(null);
    suppressAutoCreate(false);
    window.history.replaceState({}, '', `${BASE}design/${encodeURIComponent(d.name)}/`);
    setGalleryOpen(false);
  }, [loadDesignWithHistory, setCurrentName, getDrawing]);

  // Load one half (input or output) of a training example into the canvas to
  // edit it. Detaches from any gallery document (currentName=null) and suppresses
  // auto-create so edits here never mint a gallery piece; remembers the example +
  // half so "Update example" can overwrite it in place, keeping the untouched half.
  const editExampleHalf = useCallback((ex: SavedExample, half: 'input' | 'output') => {
    const design = half === 'input' ? ex.input : ex.output;
    const otherHalf = half === 'input' ? ex.output : ex.input;
    loadDesignWithHistory(design, null);
    setCurrentName(null);
    suppressAutoCreate(true);
    setEditingExample({ id: ex.id, half, otherHalf });
    window.history.replaceState({}, '', BASE);
    setTrainingOpen(false);
    setTrainStatus(`Editing example #${ex.id} (${half}) — click "Update example" to save over it.`);
  }, [loadDesignWithHistory, setCurrentName]);

  // Overwrite the loaded training example in place: the current canvas becomes
  // the half that was loaded; the other half is sent unchanged.
  const saveExampleUpdate = useCallback(async () => {
    if (!editingExample) return;
    const design = serializeWholeGrid();
    if (!design) {
      setTrainStatus('Nothing to save — draw something first.');
      return;
    }
    const { id, half, otherHalf } = editingExample;
    const input = half === 'input' ? design : otherHalf;
    const output = half === 'output' ? design : otherHalf;
    setTrainStatus(`Updating example #${id}…`);
    try {
      await updateExamplePair(id, input, output);
      setTrainStatus(`Example #${id} (${half}) updated.`);
    } catch (err) {
      setTrainStatus(`Update failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  }, [editingExample, serializeWholeGrid, updateExamplePair]);

  // Start a fresh, unsaved drawing: detach from any current document FIRST (so
  // clearing doesn't auto-save the blank over the old one), wipe the canvas,
  // reset history, and return the URL to the base editor. The next real edit
  // auto-creates a new gallery piece (lib/autosave.ts).
  const newDrawing = useCallback(() => {
    setCurrentName(null);
    setEditingExample(null);
    suppressAutoCreate(false);
    clear();
    resetHistory();
    setSaveState('idle');
    window.history.replaceState({}, '', BASE);
    setTrainStatus('');
  }, [setCurrentName, clear, resetHistory, setSaveState]);

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
      // Grid subdivision: Ctrl/Cmd+G cycles whole → ½ → ¼ → ⅛ → whole.
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'g') {
        e.preventDefault();
        cycleSubdivision();
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
  }, [tool, setTool, setColorIdx, selectedItems, deleteSelected, copy, paste, clipboard, undo, redo, selectAll, cycleSubdivision]);

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

  // Fine units per snap step at the current subdivision (8 = whole cell, 4 =
  // half, 2 = quarter, 1 = eighth). Snapping quantizes to this in fine units.
  const snapStep = () => CELL_UNITS / subdivision;

  // Top-left of the cell/block the pointer is over, snapped to the subgrid.
  const getCellCoords = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getCanvasXY(event);
    const step = snapStep();
    const snap = (v: number) => Math.floor(Math.floor(v / CELL_SIZE) / step) * step;
    return { col: snap(x), row: snap(y) };
  };

  // Nearest sub-grid intersection (for line/rect endpoints). Infinite grid: no clamp.
  const getIntersectionCoords = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getCanvasXY(event);
    const step = snapStep();
    const snap = (v: number) => Math.round(v / CELL_SIZE / step) * step;
    return { col: snap(x), row: snap(y) };
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
      if (s.type === 'image' && item.type === 'image') {
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

        // Rotate: grabbing the round handle above the selection starts a rotate
        // (works for any selection). Checked first so it wins over drag/box.
        if (selectedItems.length > 0 && !shiftHeld) {
          const rb = getSelectionBoundsAll(selectedItems, grid);
          if (rb) {
            const h = rotateHandlePoint(rb);
            const tol = 10 / camRef.current.zoom; // ~10 screen px regardless of zoom
            if (Math.hypot(x - h.c * CELL_SIZE, y - h.r * CELL_SIZE) <= tol) {
              startRotate(x, y);
              return;
            }
          }
        }

        // Resize: if a single line/rect is selected and we grabbed one of its
        // handles, start a resize instead of a move. Checked before everything
        // else so handles take priority over the drag/hit-test branches.
        if (selectedItems.length === 1 && !shiftHeld) {
          const only = selectedItems[0];
          if (only.type === 'line' || only.type === 'rect' || only.type === 'text' || only.type === 'image') {
            const handles = only.type === 'line'
              ? getLineHandles(grid.get_line(only.index))
              : only.type === 'rect'
                ? getRectHandles(grid.get_rect(only.index))
                : only.type === 'image'
                  ? getRectHandles(grid.get_image(only.index))
                  : getRectHandles(textFrameCorners(grid.get_text(only.index)));
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
            } else if (hitItem.type === 'image') {
              grid.highlight_image(hitItem.index);
            }
          }
        } else {
          // Click on empty space - start box selection
          startBoxSelection({ row, col }, shiftHeld);
        }
      }
    },
    [grid, tool, colorIdx, outlineIdx, selectedItems, selectedCells, hitTestShapes, startDrawing, startLine, startRect, startBoxSelection, startDragSelection, startResize, startRotate, addItemToSelection, removeItemFromSelection, setSelectedItems, updateOutputs, renderSelection, beginDrawStroke, drawCellAt, beginTextEdit]
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
        if (isSelecting && (selectMode === 'resize' || selectMode === 'rotate')) {
          canvas.style.cursor = 'grabbing';
        } else if (isSelecting && selectMode === 'drag') {
          canvas.style.cursor = 'move';
        } else {
          const { x, y } = getCanvasXY(event);
          let cursor = 'crosshair';
          // Rotate-handle hover (any selection) -> grab.
          if (selectedItems.length > 0) {
            const rb = getSelectionBoundsAll(selectedItems, grid);
            if (rb) {
              const h = rotateHandlePoint(rb);
              if (Math.hypot(x - h.c * CELL_SIZE, y - h.r * CELL_SIZE) <= 10 / camRef.current.zoom) {
                cursor = 'grab';
              }
            }
          }
          // Handle hover (single line/rect selected) -> grab (resize affordance).
          if (cursor === 'crosshair' && selectedItems.length === 1) {
            const only = selectedItems[0];
            if (only.type === 'line' || only.type === 'rect' || only.type === 'text' || only.type === 'image') {
              const handles = only.type === 'line'
                ? getLineHandles(grid.get_line(only.index))
                : only.type === 'rect'
                  ? getRectHandles(grid.get_rect(only.index))
                  : only.type === 'image'
                    ? getRectHandles(grid.get_image(only.index))
                    : getRectHandles(textFrameCorners(grid.get_text(only.index)));
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
      } else if (tool === 'select' && isSelecting && selectMode === 'rotate') {
        const { x, y } = getCanvasXY(event);
        updateRotate(x, y);
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
              if (l.length >= 6) {
                grid.preview_line(l[0] + deltaRow, l[1] + deltaCol, l[2] + deltaRow, l[3] + deltaCol, l[4], l[5]);
              }
            } else if (item.type === 'rect') {
              const rr = grid.get_rect(item.index);
              if (rr.length >= 6) {
                grid.preview_rect(rr[0] + deltaRow, rr[1] + deltaCol, rr[2] + deltaRow, rr[3] + deltaCol, rr[4], rr[5]);
              }
            } else if (item.type === 'text') {
              const t = grid.get_text(item.index); // [r, c, color, boxW, boxH, halign, valign]
              if (t.length >= 7) {
                grid.preview_text(t[0] + deltaRow, t[1] + deltaCol, t[2], grid.get_text_size(item.index), t[3], t[4], t[5], t[6], grid.get_text_string(item.index));
              }
            }
          }
        }
      }
    },
    [grid, tool, isDrawing, isSelecting, drawMode, lineStart, rectStart, selectMode, selectBoxStart, selectDragStart, selectedItems, hitTestShapes, setMousePos, updateBoxSelection, updateResize, updateRotate, updateOutputs, drawCellAt]
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

        if (selectMode === 'rotate') {
          const { x, y } = getCanvasXY(event);
          finishRotate(x, y);
        } else if (selectMode === 'resize') {
          const { col: icol, row: irow } = getIntersectionCoords(event);
          finishResize({ row: irow, col: icol });
        } else if (selectMode === 'box') {
          finishBoxSelection({ row, col });
        } else if (selectMode === 'drag') {
          finishDragSelection({ row, col });
        }
      }
    },
    [grid, tool, lineStart, rectStart, selectMode, stopDrawing, finishLine, finishRect, finishBoxSelection, finishDragSelection, finishResize, finishRotate, updateOutputs, endDrawStroke, commitLine, commitRect]
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
      } else if (selectMode === 'rotate') {
        cancelRotate();
      }
    }
  }, [grid, tool, selectMode, stopDrawing, finishLine, finishRect, cancelBoxSelection, cancelDragSelection, cancelResize, cancelRotate]);

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

          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">Grid (Ctrl+G)</label>
            <ToggleGroup
              type="single"
              value={String(subdivision)}
              onValueChange={(val) => val && setSubdivision(Number(val))}
              variant="outline"
              className="flex-wrap"
            >
              <ToggleGroupItem value="1" className="text-xs" title="Whole cells">1&times;</ToggleGroupItem>
              <ToggleGroupItem value="2" className="text-xs" title="Half cells">&frac12;</ToggleGroupItem>
              <ToggleGroupItem value="4" className="text-xs" title="Quarter cells">&frac14;</ToggleGroupItem>
              <ToggleGroupItem value="8" className="text-xs" title="Eighth cells">&#8539;</ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">Image</label>
            <div className="flex gap-1">
              <Button
                variant="outline"
                size="sm"
                className="text-xs flex-1"
                onClick={() => imageInputRef.current?.click()}
                title="Upload an image (transparent PNG works best)"
              >
                Upload
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs flex-1"
                onClick={() => {
                  const url = window.prompt('Image URL (transparent PNG works best):');
                  if (url && url.trim()) void addImageObject(url.trim());
                }}
                title="Add an image by URL"
              >
                From URL
              </Button>
            </div>
            <p className="text-[10px] text-gray-400 mt-1">…or paste an image (Ctrl/Cmd+V)</p>
            {imgStatus && <p className="text-[10px] text-gray-500 mt-1">{imgStatus}</p>}
            <input
              ref={imageInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) void addImageObject(file);
                e.target.value = ''; // allow re-selecting the same file
              }}
            />
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

          {selectedItems.some((i) => i.type === 'text') && (
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1 block">Text align (drag the box to resize)</label>
              <div className="flex gap-1 mb-1">
                <Button variant="outline" size="sm" className="text-xs flex-1" onClick={() => pickTextAlign(0, null)}>Left</Button>
                <Button variant="outline" size="sm" className="text-xs flex-1" onClick={() => pickTextAlign(1, null)}>Center</Button>
                <Button variant="outline" size="sm" className="text-xs flex-1" onClick={() => pickTextAlign(2, null)}>Right</Button>
              </div>
              <div className="flex gap-1">
                <Button variant="outline" size="sm" className="text-xs flex-1" onClick={() => pickTextAlign(null, 0)}>Top</Button>
                <Button variant="outline" size="sm" className="text-xs flex-1" onClick={() => pickTextAlign(null, 1)}>Middle</Button>
                <Button variant="outline" size="sm" className="text-xs flex-1" onClick={() => pickTextAlign(null, 2)}>Bottom</Button>
              </div>
            </div>
          )}

          {tool === 'line' && (
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1 block">Line width</label>
              <ToggleGroup
                type="single"
                value={String(lineWidth)}
                onValueChange={(val) => val && pickLineWidth(Number(val))}
                variant="outline"
                className="flex-wrap"
              >
                {LINE_WIDTHS.map((w) => (
                  <ToggleGroupItem key={w} value={String(w)} className="text-xs">{w}&times;</ToggleGroupItem>
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

          <Button
            variant="outline"
            onClick={() => setGalleryOpen(true)}
            size="sm"
            className="w-full"
          >
            Gallery
          </Button>

          {editingExample && (
            <Button
              variant="outline"
              onClick={saveExampleUpdate}
              disabled={loading}
              size="sm"
              className="w-full border-amber-400 text-amber-700 hover:bg-amber-50"
              title={`Overwrite training example #${editingExample.id}'s ${editingExample.half} with the current canvas`}
            >
              Update example #{editingExample.id} ({editingExample.half})
            </Button>
          )}

          <Button
            variant="destructive"
            onClick={clear}
            disabled={loading}
            size="sm"
            className="w-full"
          >
            Clear Grid
          </Button>

          <Button
            onClick={newDrawing}
            disabled={loading}
            size="sm"
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            New Drawing
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
                Capture input→output pairs, train the tiny in-browser model, then
                predict a moved output from a selection.
              </p>
              <Button size="sm" className="w-full" onClick={startTrainingCapture} disabled={loading}>
                Make Training Data
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={predictFromSelection}
                disabled={loading || selectedItems.length === 0 || modelStatus !== 'ready'}
                title={modelStatus !== 'ready' ? 'Train a model first' : 'Map the selection through the model'}
              >
                Predict from Selection
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={startTraining}
                disabled={loading || training?.status === 'running'}
              >
                {training?.status === 'running' ? 'Training…' : 'Start Training Run'}
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={() => setTrainingOpen(true)}
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

      {training && (
        <DraggablePanel
          title="Training"
          defaultPosition={{ x: Math.max(20, window.innerWidth - 340), y: HEADER_HEIGHT + 540 }}
        >
          <div className="space-y-2 w-72 text-xs">
            {(() => {
              const pct = training.total > 0 ? Math.min(100, Math.round((training.epoch / training.total) * 100)) : (training.status === 'done' ? 100 : 0);
              const barColor =
                training.status === 'error' ? 'bg-red-500'
                  : training.status === 'done' ? 'bg-green-500'
                    : 'bg-blue-500';
              return (
                <>
                  <div className="flex justify-between">
                    <span className="font-medium">In-browser model</span>
                    <span className="text-gray-400">{training.status}</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded overflow-hidden">
                    <div className={cn('h-full', barColor)} style={{ width: `${pct}%` }} />
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>{training.total > 0 ? `epoch ${training.epoch}/${training.total} (${pct}%)` : ''}</span>
                    {Number.isFinite(training.loss) && <span>loss {training.loss.toFixed(4)}</span>}
                  </div>
                  {training.message && <p className="text-gray-400">{training.message}</p>}
                </>
              );
            })()}
          </div>
        </DraggablePanel>
      )}

      {galleryOpen && (
        <Gallery asModal onClose={() => setGalleryOpen(false)} onOpenDesign={openDrawing} />
      )}

      {trainingOpen && (
        <TrainingData asModal onClose={() => setTrainingOpen(false)} onEditExample={editExampleHalf} />
      )}
    </>
  );
}

export default GridCanvas;
