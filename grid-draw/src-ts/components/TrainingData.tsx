import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { DraggablePanel } from './DraggablePanel';
import { DesignThumbnail } from './DesignThumbnail';
import { useServerStore } from '../store/serverStore';
import type { SavedExample } from '../lib/localDb';
import type { DesignJSON } from '../store/gridStore';

const BASE = import.meta.env.BASE_URL ?? '/grid-draw/';

type Props = {
  // Render as a draggable modal panel over the editor (like the Gallery), vs the
  // full-page route at <base>training/.
  asModal?: boolean;
  onClose?: () => void;
  // Load one half of a training example into the editor for editing. Only wired
  // in the modal (over the editor); absent on the standalone page.
  onEditExample?: (ex: SavedExample, half: 'input' | 'output') => void;
};

// One labelled thumbnail. When onClick is given it becomes a button that loads
// that half into the editor (a subtle hover ring signals it's clickable).
function Half({ design, label, onClick }: { design: DesignJSON; label: string; onClick?: () => void }) {
  const thumb = <DesignThumbnail design={design} size={84} />;
  return (
    <div className="flex flex-col items-center">
      {onClick ? (
        <button
          type="button"
          onClick={onClick}
          title={`Load this ${label} into the editor`}
          className="rounded ring-1 ring-transparent hover:ring-blue-400 hover:ring-2 focus:outline-none focus:ring-blue-500 cursor-pointer"
        >
          {thumb}
        </button>
      ) : thumb}
      <span className="text-[10px] text-gray-400 mt-1">{label}</span>
    </div>
  );
}

// An input → output pair rendered as two thumbnails (the gallery look). When
// onInput/onOutput are supplied, that half is clickable to load into the editor.
function Pair({
  input, output, onInput, onOutput,
}: {
  input: DesignJSON;
  output: DesignJSON;
  onInput?: () => void;
  onOutput?: () => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      <Half design={input} label="input" onClick={onInput} />
      <span className="text-gray-300">→</span>
      <Half design={output} label="output" onClick={onOutput} />
    </div>
  );
}

/**
 * Training-data gallery: the stored input→output training examples shown as
 * rendered thumbnail pairs. Click a half to load it into the editor. Reads from
 * the store (IndexedDB-backed); no network.
 */
export default function TrainingData({ asModal, onClose, onEditExample }: Props = {}) {
  const examples = useServerStore((s) => s.examples);
  const error = useServerStore((s) => s.error);
  const loadExamples = useServerStore((s) => s.loadExamples);

  useEffect(() => { loadExamples(); }, [loadExamples]);

  const grid = 'grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4';

  const content = (
    <>
      <div className="flex items-center gap-3 mb-4">
        <Button variant="outline" size="sm" onClick={loadExamples}>Refresh</Button>
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>

      <section>
        <h2 className="text-sm font-medium text-gray-500 mb-3">Training examples ({examples.length})</h2>
        {examples.length === 0 && (
          <p className="text-sm text-gray-400">No training examples yet — use “Make Training Data”.</p>
        )}
        <div className={grid}>
          {examples.map((ex) => (
            <div key={ex.id} className="bg-white rounded border p-2 flex flex-col gap-1">
              <Pair
                input={ex.input}
                output={ex.output}
                onInput={onEditExample && (() => onEditExample(ex, 'input'))}
                onOutput={onEditExample && (() => onEditExample(ex, 'output'))}
              />
              <span className="text-[10px] text-gray-400">#{ex.id}</span>
            </div>
          ))}
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
