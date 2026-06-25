import { useEffect } from 'react';
import { useServerStore } from '../store/serverStore';
import { pairText } from '../utils/asciiDesign';

const BASE = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/grid-draw/';
const FONT = "'BigBlue Terminal', monospace";

/**
 * Training-data console (route: <base>training/). A pure-text, append-only view
 * of the captured / teacher-drafted examples, each input→output pair rendered as
 * ASCII-art grids in the BigBlue Terminal font. Reads from the server store;
 * the network lives in the store/.ts layer, never here.
 */
export default function TrainingData() {
  const examples = useServerStore((s) => s.examples);
  const isLoading = useServerStore((s) => s.loadingExamples);
  const error = useServerStore((s) => s.error);
  const loadExamples = useServerStore((s) => s.loadExamples);
  useEffect(() => { loadExamples(); }, [loadExamples]);

  return (
    <div style={{ fontFamily: FONT, background: '#0b0b0b', color: '#cfe3cf', minHeight: '100vh', padding: '16px' }}>
      <div style={{ color: '#e8c34a', marginBottom: 12 }}>
        GRID-DRAW :: TRAINING DATA &nbsp;[{examples.length} example{examples.length === 1 ? '' : 's'}]
      </div>
      <div style={{ marginBottom: 16 }}>
        <button onClick={() => { window.location.href = BASE; }} style={termBtn}>[ &lt; editor ]</button>{' '}
        <button onClick={() => loadExamples()} style={termBtn}>[ refresh ]</button>
        {error && <span style={{ color: '#e06c6c', marginLeft: 12 }}>data server: {error}</span>}
      </div>

      {isLoading && <div style={{ color: '#7a8a7a' }}>loading…</div>}
      {!isLoading && examples.length === 0 && (
        <div style={{ color: '#7a8a7a' }}>
          no training examples yet — use "Make Training Data" or "Teacher (480B)" in the editor.
        </div>
      )}

      {examples.map((ex) => (
        <div key={ex.id} style={{ borderTop: '1px solid #233023', padding: '12px 0' }}>
          <div style={{ color: '#7a8a7a', marginBottom: 4 }}>
            #{ex.id} &nbsp;<span style={{ color: '#9aa' }}>{ex.createdAt}</span>
          </div>
          <pre style={{ margin: 0, fontFamily: FONT, lineHeight: 1.1, whiteSpace: 'pre', fontSize: 14 }}>
            {pairText(ex.input, ex.output)}
          </pre>
        </div>
      ))}
    </div>
  );
}

const termBtn: React.CSSProperties = {
  fontFamily: FONT,
  background: 'transparent',
  color: '#cfe3cf',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
};
