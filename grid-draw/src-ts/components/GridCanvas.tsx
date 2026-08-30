import { useEffect, useRef, useState } from 'react';
import { useGridWasm } from '../hooks/useGridWasm';
import { useGridStore } from '../store/gridStore';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Gallery from './Gallery';
import TrainingData from './TrainingData';
import { HEADER_HEIGHT, calculateViewport } from './canvas/constants';
import { useCameraControls } from './canvas/useCameraControls';
import { useCanvasMouse } from './canvas/useCanvasMouse';
import { useKeyboardShortcuts } from './canvas/useKeyboardShortcuts';
import { useImageObjects } from './canvas/useImageObjects';
import { useDrawingSession } from './canvas/useDrawingSession';
import { ToolsPanel } from './canvas/ToolsPanel';
import { SelectionDataPanel } from './canvas/SelectionDataPanel';
import { TrainingDataPanel, TrainingProgressPanel } from './canvas/TrainingPanels';

// The editor shell: canvas + camera + input wiring, with the tool/data panels.
// All behavior lives in the ./canvas hooks and the store; this component only
// composes them around the WASM-backed <canvas>.
function GridCanvas() {
  const [viewport, setViewport] = useState(() => calculateViewport());
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { grid, loading, error } = useGridWasm(canvasRef, viewport.w, viewport.h);

  const currentName = useGridStore((s) => s.currentName);
  const saveState = useGridStore((s) => s.saveState);

  const { cam, camRef, applyCamera, resetView, spaceHeld, isSpaceDown, panRef } =
    useCameraControls(grid, canvasRef);
  const { handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave } =
    useCanvasMouse({ camRef, applyCamera, isSpaceDown, panRef });
  useKeyboardShortcuts();
  const image = useImageObjects(camRef, viewport);
  const session = useDrawingSession(grid);

  // Handle window resize: just resize the visible viewport. The world is
  // infinite, so no content is ever lost — shrinking the window only narrows the
  // window onto the same unbounded grid.
  useEffect(() => {
    const handleResize = () => {
      const v = calculateViewport();
      setViewport(v);
      if (!grid) return;
      grid.set_viewport(v.w, v.h);
      // set_viewport re-rendered without highlights; restore any selection.
      const store = useGridStore.getState();
      if (store.selectedItems.length > 0) store.renderSelection();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [grid]);

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
        <h1 className="text-xl font-bold">Sean's Autism World</h1>
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

      <ToolsPanel
        loading={loading}
        imageInputRef={image.imageInputRef}
        imgStatus={image.imgStatus}
        removeBg={image.removeBg}
        setRemoveBg={image.setRemoveBg}
        addImageObject={image.addImageObject}
        editingExample={session.editingExample}
        saveExampleUpdate={session.saveExampleUpdate}
        newDrawing={session.newDrawing}
        onOpenGallery={() => session.setGalleryOpen(true)}
      />

      <SelectionDataPanel />

      <TrainingDataPanel
        loading={loading}
        trainStatus={session.trainStatus}
        modelStatus={session.modelStatus}
        training={session.training}
        saveTrainingExample={session.saveTrainingExample}
        startTraining={session.startTraining}
        predictFromSelection={session.predictFromSelection}
        onViewTrainingData={() => session.setTrainingOpen(true)}
      />

      {session.training && <TrainingProgressPanel training={session.training} />}

      {session.galleryOpen && (
        <Gallery asModal onClose={() => session.setGalleryOpen(false)} onOpenDesign={session.openDrawing} />
      )}

      {session.trainingOpen && (
        <TrainingData asModal onClose={() => session.setTrainingOpen(false)} onEditExample={session.editExampleHalf} />
      )}
    </>
  );
}

export default GridCanvas;
