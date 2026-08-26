import { useEffect, useState } from 'react';
import GridCanvas from './components/GridCanvas';
import Gallery from './components/Gallery';
import TrainingData from './components/TrainingData';
import Login from './components/Login';
import { getToken, AUTH_EXPIRED_EVENT } from './lib/apiClient';
import './styles/grid-draw.css';

// Minimal path-based routing (no router dependency): the gallery lives at
// <base>gallery/, the training-data gallery (examples + predictions) at
// <base>training/, everything else is the editor.
function route(): 'gallery' | 'training' | 'editor' {
  const p = window.location.pathname;
  if (/\/gallery\/?$/.test(p)) return 'gallery';
  if (/\/training\/?$/.test(p)) return 'training';
  return 'editor';
}

function App() {
  const r = route();
  const [authed, setAuthed] = useState(() => getToken() !== null);

  // apiClient clears the token and fires this event on any 401.
  useEffect(() => {
    const onExpired = () => setAuthed(false);
    window.addEventListener(AUTH_EXPIRED_EVENT, onExpired);
    return () => window.removeEventListener(AUTH_EXPIRED_EVENT, onExpired);
  }, []);

  if (!authed) return <Login onSuccess={() => setAuthed(true)} />;
  return (
    <div className="grid-draw-app">
      {r === 'gallery' ? <Gallery />
        : r === 'training' ? <TrainingData />
        : <GridCanvas />}
    </div>
  );
}

export default App;
