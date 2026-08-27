import { useCallback, useEffect, useState } from 'react';
import type { GridCanvasWasm } from '../../types/grid';
import { useGridStore, getSelectionBoundsAll, serializeSelection, type DesignJSON } from '../../store/gridStore';
import { useServerStore } from '../../store/serverStore';
import { suppressAutoCreate } from '../../lib/autosave';
import type { SavedExample } from '../../lib/localDb';
import { BASE, isEmptyDesign } from './constants';

/**
 * Document/session concerns around the canvas: resolving a drawing from the
 * URL, opening gallery pieces, the training-data capture/predict actions, and
 * editing a stored example's half in place. Data + model access goes through
 * the server store (IndexedDB + in-browser TF.js); this hook never touches
 * storage/ml directly.
 */
export function useDrawingSession(grid: GridCanvasWasm | null) {
  const {
    clear, resetHistory, setSaveState,
    buildTrainingExample, finishTrainingCapture,
    serializeWholeGrid, loadDesignWithHistory, setCurrentName,
  } = useGridStore();

  const getDrawing = useServerStore((s) => s.getDrawing);
  const getDrawingById = useServerStore((s) => s.getDrawingById);
  const saveExamplePair = useServerStore((s) => s.saveExamplePair);
  const updateExamplePair = useServerStore((s) => s.updateExamplePair);
  const runPredict = useServerStore((s) => s.runPredict);
  const trainModel = useServerStore((s) => s.trainModel);
  const initModel = useServerStore((s) => s.initModel);
  const modelStatus = useServerStore((s) => s.modelStatus);
  const training = useServerStore((s) => s.training);

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
  // the store's `training` state (shown in the Training panel).
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

  return {
    trainStatus,
    galleryOpen, setGalleryOpen,
    trainingOpen, setTrainingOpen,
    editingExample,
    modelStatus, training,
    saveTrainingExample, startTraining, predictFromSelection,
    openDrawing, editExampleHalf, saveExampleUpdate, newDrawing,
  };
}
