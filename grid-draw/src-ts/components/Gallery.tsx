import { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { DesignThumbnail } from './DesignThumbnail';
import { DraggablePanel } from './DraggablePanel';
import { useServerStore } from '../store/serverStore';
import { logout } from '../lib/apiClient';

const BASE = import.meta.env.BASE_URL ?? '/grid-draw/';

// Open a saved design via its shareable per-drawing URL (<base>design/<name>/).
function openInEditor(name: string) {
  window.location.href = `${BASE}design/${encodeURIComponent(name)}/`;
}

function backToEditor() {
  window.location.href = BASE;
}

type GalleryProps = {
  // When provided, Gallery renders as a modal overlay (close button instead of
  // an "← Editor" link) and "Open" loads the drawing in place via onOpenDesign
  // rather than navigating to its page.
  asModal?: boolean;
  onClose?: () => void;
  onOpenDesign?: (name: string) => void;
};

/**
 * The drawing gallery. Shows saved whole-grid designs with thumbnails, plus
 * captured training examples as input→output preview pairs. Rendered either as a
 * full page (route: <base>gallery/) or as a modal overlay over the editor.
 */
export default function Gallery({ asModal, onClose, onOpenDesign }: GalleryProps = {}) {
  const designs = useServerStore((s) => s.designs);
  const examples = useServerStore((s) => s.examples);
  const loading = useServerStore((s) => s.loadingDesigns || s.loadingExamples);
  const error = useServerStore((s) => s.error);
  const loadDesigns = useServerStore((s) => s.loadDesigns);
  const loadExamples = useServerStore((s) => s.loadExamples);
  const deleteDrawing = useServerStore((s) => s.deleteDrawing);
  const deleteExamplePair = useServerStore((s) => s.deleteExamplePair);
  const refresh = useCallback(() => { loadDesigns(); loadExamples(); }, [loadDesigns, loadExamples]);
  useEffect(() => { refresh(); }, [refresh]);

  const removeDesign = useCallback((id: number, name: string) => {
    if (window.confirm(`Delete drawing “${name}”? This can't be undone.`)) deleteDrawing(id);
  }, [deleteDrawing]);
  const removeExample = useCallback((id: number) => {
    if (window.confirm("Delete this training example? This can't be undone.")) deleteExamplePair(id);
  }, [deleteExamplePair]);

  // "Open" loads in place when used as a modal, otherwise navigates to the page.
  const open = useCallback((name: string) => {
    if (onOpenDesign) onOpenDesign(name);
    else openInEditor(name);
  }, [onOpenDesign]);

  const content = (
    <>
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
                <Button size="sm" className="flex-1 text-xs" onClick={() => open(d.name)}>Open</Button>
                <Button variant="outline" size="sm" className="text-xs text-red-600" onClick={() => removeDesign(d.id, d.name)}>Delete</Button>
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
          {examples.map((ex) => (
            <div key={ex.id} className="bg-white rounded border p-2 flex flex-col gap-2">
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
              <Button variant="outline" size="sm" className="w-full text-xs text-red-600" onClick={() => removeExample(ex.id)}>Delete</Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  // Modal: a draggable panel over the editor (no backdrop dimming) — reuses the
  // same DraggablePanel as the editor's Tools/Training panels. Page: full screen.
  if (asModal) {
    return (
      <DraggablePanel
        title="Gallery"
        onClose={onClose}
        defaultPosition={{ x: Math.max(20, (window.innerWidth - 880) / 2), y: 64 }}
        className="w-[880px] max-w-[95vw] z-30"
      >
        <div className="mb-3 flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={refresh}>Refresh</Button>
          {error && <span className="text-sm text-red-500">Data server: {String(error)}</span>}
        </div>
        <div className="max-h-[70vh] overflow-auto pr-1">{content}</div>
      </DraggablePanel>
    );
  }
  return (
    <div className="min-h-screen w-full bg-gray-50 p-6">
      <header className="flex items-center gap-3 mb-6">
        <h1 className="text-xl font-semibold">Gallery</h1>
        <Button variant="outline" size="sm" onClick={backToEditor}>← Editor</Button>
        <Button variant="outline" size="sm" onClick={refresh}>Refresh</Button>
        <Button variant="outline" size="sm" onClick={() => { logout(); window.location.reload(); }}>Log out</Button>
        {error && <span className="text-sm text-red-500">Data server: {String(error)}</span>}
      </header>
      {content}
    </div>
  );
}
