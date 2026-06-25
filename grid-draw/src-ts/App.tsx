import GridCanvas from './components/GridCanvas';
import Gallery from './components/Gallery';
import TrainingData from './components/TrainingData';
import './styles/grid-draw.css';

// Minimal path-based routing (no router dependency): the gallery lives at
// <base>gallery/, the training-data console at <base>training/, everything else
// is the editor.
function route(): 'gallery' | 'training' | 'editor' {
  const p = window.location.pathname;
  if (/\/gallery\/?$/.test(p)) return 'gallery';
  if (/\/training\/?$/.test(p)) return 'training';
  return 'editor';
}

function App() {
  const r = route();
  return (
    <div className="grid-draw-app">
      {r === 'gallery' ? <Gallery /> : r === 'training' ? <TrainingData /> : <GridCanvas />}
    </div>
  );
}

export default App;
