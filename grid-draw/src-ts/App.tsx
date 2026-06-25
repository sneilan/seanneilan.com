import GridCanvas from './components/GridCanvas';
import Gallery from './components/Gallery';
import TrainingData from './components/TrainingData';
import Predictions from './components/Predictions';
import './styles/grid-draw.css';

// Minimal path-based routing (no router dependency): the gallery lives at
// <base>gallery/, the training-data console at <base>training/, the predictions
// log at <base>predictions/, everything else is the editor.
function route(): 'gallery' | 'training' | 'predictions' | 'editor' {
  const p = window.location.pathname;
  if (/\/gallery\/?$/.test(p)) return 'gallery';
  if (/\/training\/?$/.test(p)) return 'training';
  if (/\/predictions\/?$/.test(p)) return 'predictions';
  return 'editor';
}

function App() {
  const r = route();
  return (
    <div className="grid-draw-app">
      {r === 'gallery' ? <Gallery />
        : r === 'training' ? <TrainingData />
        : r === 'predictions' ? <Predictions />
        : <GridCanvas />}
    </div>
  );
}

export default App;
