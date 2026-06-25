import { useEffect, useState } from 'react';
import { useServerStore } from '../store/serverStore';
import type { SavedPrediction } from '../lib/dataServer';
import { pairText, isEmptyDesign } from '../utils/asciiDesign';

const BASE = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/grid-draw/';
const FONT = "'BigBlue Terminal', monospace";

const termBtn: React.CSSProperties = {
  fontFamily: FONT, background: 'transparent', color: '#cfe3cf',
  border: 'none', cursor: 'pointer', padding: 0,
};

/**
 * Predictions console (route: <base>predictions/). The append-only audit log of
 * every /predict and /teacher round-trip — including the empty/failed ones,
 * since not every prediction becomes a training example. Failures are flagged,
 * and each can be turned into a training example by having the teacher (480B)
 * label its input. Reads from the server store; network lives in the store.
 */
export default function Predictions() {
  const preds = useServerStore((s) => s.predictions);
  const isLoading = useServerStore((s) => s.loadingPredictions);
  const error = useServerStore((s) => s.error);
  const loadPredictions = useServerStore((s) => s.loadPredictions);
  const runTeacher = useServerStore((s) => s.runTeacher);
  const [note, setNote] = useState<string>('');
  const [labeling, setLabeling] = useState<number | null>(null);

  useEffect(() => { loadPredictions(); }, [loadPredictions]);

  // Turn a prediction into training data: have the teacher label its input and
  // auto-save the schema-valid pair into the examples set (the store refreshes).
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

  const failures = preds.filter((p) => isEmptyDesign(p.output)).length;

  return (
    <div style={{ fontFamily: FONT, background: '#0b0b0b', color: '#cfe3cf', minHeight: '100vh', padding: '16px' }}>
      <div style={{ color: '#e8c34a', marginBottom: 12 }}>
        GRID-DRAW :: PREDICTIONS &nbsp;[{preds.length} logged, {failures} empty/failed]
      </div>
      <div style={{ marginBottom: 16 }}>
        <button onClick={() => { window.location.href = BASE; }} style={termBtn}>[ &lt; editor ]</button>{' '}
        <button onClick={() => loadPredictions()} style={termBtn}>[ refresh ]</button>
        {error && <span style={{ color: '#e06c6c', marginLeft: 12 }}>data server: {error}</span>}
        {note && <span style={{ color: '#9aa', marginLeft: 12 }}>{note}</span>}
      </div>

      {isLoading && <div style={{ color: '#7a8a7a' }}>loading…</div>}
      {!isLoading && preds.length === 0 && (
        <div style={{ color: '#7a8a7a' }}>no predictions logged yet — use "Predict from Selection" or "Teacher (480B)".</div>
      )}

      {preds.map((p) => {
        const failed = isEmptyDesign(p.output);
        return (
          <div key={p.id} style={{ borderTop: '1px solid #233023', padding: '12px 0' }}>
            <div style={{ color: '#7a8a7a', marginBottom: 4 }}>
              #{p.id} <span style={{ color: '#9aa' }}>{p.createdAt}</span>
              {failed && <span style={{ color: '#e06c6c' }}> &nbsp;[EMPTY/FAILED]</span>}
              {' '}
              <button
                onClick={() => label(p)}
                disabled={labeling !== null}
                style={{ ...termBtn, color: '#79c0ff' }}
              >
                [ {labeling === p.id ? 'labeling…' : 'teacher-label → example'} ]
              </button>
            </div>
            <pre style={{ margin: 0, fontFamily: FONT, lineHeight: 1.1, whiteSpace: 'pre', fontSize: 14 }}>
              {pairText(p.input, p.output)}
            </pre>
          </div>
        );
      })}
    </div>
  );
}
