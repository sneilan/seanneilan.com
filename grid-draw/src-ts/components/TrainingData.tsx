import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { DraggablePanel } from './DraggablePanel';
import { DesignThumbnail } from './DesignThumbnail';
import { useServerStore } from '../store/serverStore';
import { isEmptyDesign } from '../utils/designUtils';
import type { SavedPrediction } from '../lib/dataServer';
import type { DesignJSON } from '../store/gridStore';

const BASE = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/grid-draw/';

type Props = {
  // Render as a draggable modal panel over the editor (like the Gallery), vs the
  // full-page route at <base>training/.
  asModal?: boolean;
  onClose?: () => void;
};

// An input → output pair rendered as two thumbnails (the gallery look).
function Pair({ input, output }: { input: DesignJSON; output: DesignJSON }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex flex-col items-center">
        <DesignThumbnail design={input} size={84} />
        <span className="text-[10px] text-gray-400 mt-1">input</span>
      </div>
      <span className="text-gray-300">→</span>
      <div className="flex flex-col items-center">
        <DesignThumbnail design={output} size={84} />
        <span className="text-[10px] text-gray-400 mt-1">output</span>
      </div>
    </div>
  );
}

/**
 * Training-data gallery: the append-only training examples AND the prediction
 * log, each shown as rendered input→output thumbnail pairs. Predictions that
 * came back empty/failed are flagged, and any prediction can be turned into a
 * training example by having the teacher (480B) label its input. Reads from the
 * server store; the network lives in the store/.ts layer.
 */
export default function TrainingData({ asModal, onClose }: Props = {}) {
  const examples = useServerStore((s) => s.examples);
  const predictions = useServerStore((s) => s.predictions);
  const error = useServerStore((s) => s.error);
  const loadExamples = useServerStore((s) => s.loadExamples);
  const loadPredictions = useServerStore((s) => s.loadPredictions);
  const runTeacher = useServerStore((s) => s.runTeacher);
  const [note, setNote] = useState('');
  const [labeling, setLabeling] = useState<number | null>(null);

  useEffect(() => { loadExamples(); loadPredictions(); }, [loadExamples, loadPredictions]);

  const refresh = () => { loadExamples(); loadPredictions(); };

  // Turn a prediction into training data: teacher labels its input, auto-saved.
  const label = async (p: SavedPrediction) => {
    setLabeling(p.id);
    setNote(`#${p.id}: asking teacher (480B)…`);
    try {
      const res = await runTeacher(p.input, true);
      setNote(res.saved && !isEmptyDesign(res.output)
        ? `#${p.id}: teacher-labeled → saved to training data.`
        : `#${p.id}: teacher returned an empty design — not useful.`);
    } catch (err) {
      setNote(`#${p.id}: teacher failed — ${String(err)}`);
    } finally {
      setLabeling(null);
    }
  };

  const failures = predictions.filter((p) => isEmptyDesign(p.output)).length;
  const grid = 'grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4';

  const content = (
    <>
      <div className="flex items-center gap-3 mb-4">
        <Button variant="outline" size="sm" onClick={refresh}>Refresh</Button>
        {error && <span className="text-sm text-red-500">Data server: {error}</span>}
        {note && <span className="text-sm text-gray-500">{note}</span>}
      </div>

      <section className="mb-8">
        <h2 className="text-sm font-medium text-gray-500 mb-3">Training examples ({examples.length})</h2>
        {examples.length === 0 && (
          <p className="text-sm text-gray-400">No training examples yet — use “Make Training Data” or “Teacher (480B)”.</p>
        )}
        <div className={grid}>
          {examples.map((ex) => (
            <div key={ex.id} className="bg-white rounded border p-2 flex flex-col gap-1">
              <Pair input={ex.input} output={ex.output} />
              <span className="text-[10px] text-gray-400">#{ex.id}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-medium text-gray-500 mb-3">
          Predictions ({predictions.length} logged, {failures} empty/failed)
        </h2>
        {predictions.length === 0 && (
          <p className="text-sm text-gray-400">No predictions logged yet.</p>
        )}
        <div className={grid}>
          {predictions.map((p) => {
            const failed = isEmptyDesign(p.output);
            return (
              <div key={p.id} className="bg-white rounded border p-2 flex flex-col gap-1">
                <Pair input={p.input} output={p.output} />
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[10px]" style={{ color: failed ? '#dc2626' : '#9ca3af' }}>
                    #{p.id}{failed ? ' · empty' : ''}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-[10px] h-6 px-2"
                    onClick={() => label(p)}
                    disabled={labeling !== null}
                  >
                    {labeling === p.id ? 'labeling…' : 'teacher-label'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );

  if (asModal) {
    return (
      <DraggablePanel
        title="Training Data"
        onClose={onClose}
        defaultPosition={{ x: Math.max(20, (window.innerWidth - 900) / 2), y: 64 }}
        className="w-[900px] max-w-[95vw] z-30"
      >
        <div className="max-h-[72vh] overflow-auto pr-1">{content}</div>
      </DraggablePanel>
    );
  }
  return (
    <div className="min-h-screen w-full bg-gray-50 p-6">
      <header className="flex items-center gap-3 mb-6">
        <h1 className="text-xl font-semibold">Training Data</h1>
        <Button variant="outline" size="sm" onClick={() => { window.location.href = BASE; }}>← Editor</Button>
      </header>
      {content}
    </div>
  );
}
