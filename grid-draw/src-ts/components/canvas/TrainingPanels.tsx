import { Button } from '@/components/ui/button';
import { DraggablePanel } from '@/components/DraggablePanel';
import { cn } from '@/lib/utils';
import { useGridStore } from '../../store/gridStore';
import type { useServerStore } from '../../store/serverStore';
import { HEADER_HEIGHT } from './constants';

type ServerState = ReturnType<typeof useServerStore.getState>;

type TrainingDataPanelProps = {
  loading: boolean;
  trainStatus: string;
  modelStatus: ServerState['modelStatus'];
  training: ServerState['training'];
  saveTrainingExample: () => Promise<void>;
  startTraining: () => Promise<void>;
  predictFromSelection: () => Promise<void>;
  onViewTrainingData: () => void;
};

/** The capture/train/predict console: a two-step input→output capture flow. */
export function TrainingDataPanel({
  loading, trainStatus, modelStatus, training,
  saveTrainingExample, startTraining, predictFromSelection, onViewTrainingData,
}: TrainingDataPanelProps) {
  const {
    selectedItems,
    captureMode, captureInput,
    startTrainingCapture, captureSetInput, cancelTrainingCapture,
  } = useGridStore();

  return (
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
              onClick={onViewTrainingData}
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
  );
}

/** Live progress of the in-browser training run (epoch bar + loss). */
export function TrainingProgressPanel({ training }: { training: NonNullable<ServerState['training']> }) {
  const pct = training.total > 0 ? Math.min(100, Math.round((training.epoch / training.total) * 100)) : (training.status === 'done' ? 100 : 0);
  const barColor =
    training.status === 'error' ? 'bg-red-500'
      : training.status === 'done' ? 'bg-green-500'
        : 'bg-blue-500';
  return (
    <DraggablePanel
      title="Training"
      defaultPosition={{ x: Math.max(20, window.innerWidth - 340), y: HEADER_HEIGHT + 540 }}
    >
      <div className="space-y-2 w-72 text-xs">
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
      </div>
    </DraggablePanel>
  );
}
