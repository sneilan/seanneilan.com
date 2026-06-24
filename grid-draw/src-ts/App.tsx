import GridCanvas from './components/GridCanvas';
import Gallery from './components/Gallery';
import './styles/grid-draw.css';

// Minimal path-based routing (no router dependency): the gallery lives at
// <base>gallery/, everything else is the editor.
function isGalleryRoute(): boolean {
  return /\/gallery\/?$/.test(window.location.pathname);
}

function App() {
  return (
    <div className="grid-draw-app">
      {isGalleryRoute() ? <Gallery /> : <GridCanvas />}
    </div>
  );
}

export default App;
