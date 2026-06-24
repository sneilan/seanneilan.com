import { useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { DesignThumbnail } from './DesignThumbnail';
import {
  listDesigns, deleteDesign, listTrainingExamples,
  type SavedDesign, type TrainingExample,
} from '../lib/dataServer';

const BASE = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/grid-draw/';

// Open a saved design via its shareable per-drawing URL (<base>design/<name>/).
function openInEditor(name: string) {
  window.location.href = `${BASE}design/${encodeURIComponent(name)}/`;
}

function backToEditor() {
  window.location.href = BASE;
}

/**
 * The drawing gallery (route: <base>gallery/). Shows saved whole-grid designs
 * with thumbnails, plus captured training examples as input→output preview
 * pairs. Both thumbnails are rendered from the stored DesignJSON.
 */
export default function Gallery() {
  const [designs, setDesigns] = useState<SavedDesign[]>([]);
  const [examples, setExamples] = useState<TrainingExample[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const [d, e] = await Promise.all([listDesigns(), listTrainingExamples().catch(() => [])]);
      setDesigns(d);
      setExamples(e);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const onDelete = useCallback(async (id: number) => {
    await deleteDesign(id);
    refresh();
  }, [refresh]);

  return (
    <div className="min-h-screen w-full bg-gray-50 p-6">
      <header className="flex items-center gap-3 mb-6">
        <h1 className="text-xl font-semibold">Gallery</h1>
        <Button variant="outline" size="sm" onClick={backToEditor}>← Editor</Button>
        <Button variant="outline" size="sm" onClick={refresh}>Refresh</Button>
        {error && <span className="text-sm text-red-500">Data server: {error}</span>}
      </header>

      {loading && <p className="text-sm text-gray-400">Loading…</p>}

      <section className="mb-10">
        <h2 className="text-sm font-medium text-gray-500 mb-3">Saved drawings ({designs.length})</h2>
        {designs.length === 0 && !loading && (
          <p className="text-sm text-gray-400">No saved drawings yet — use “Save to Gallery” in the editor.</p>
        )}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4">
          {designs.map((d) => (
            <div key={d.id} className="bg-white rounded border p-2 flex flex-col gap-2">
              <div className="flex items-center justify-center bg-gray-100 rounded h-28 overflow-hidden">
                <DesignThumbnail design={d.design} size={120} />
              </div>
              <div className="text-xs font-medium truncate" title={d.name}>{d.name}</div>
              <div className="flex gap-1">
                <Button size="sm" className="flex-1 text-xs" onClick={() => openInEditor(d.name)}>Open</Button>
                <Button size="sm" variant="outline" className="text-xs" onClick={() => onDelete(d.id)}>✕</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-medium text-gray-500 mb-3">Training examples ({examples.length})</h2>
        {examples.length === 0 && !loading && (
          <p className="text-sm text-gray-400">No training examples yet — capture some with “Make Training Data”.</p>
        )}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          {examples.map((ex, i) => (
            <div key={i} className="bg-white rounded border p-2">
              <div className="flex items-center justify-center gap-2">
                <div className="flex flex-col items-center">
                  <DesignThumbnail design={ex.input} size={80} />
                  <span className="text-[10px] text-gray-400 mt-1">input</span>
                </div>
                <span className="text-gray-300">→</span>
                <div className="flex flex-col items-center">
                  <DesignThumbnail design={ex.output} size={80} />
                  <span className="text-[10px] text-gray-400 mt-1">output</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
