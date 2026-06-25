import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
// Side-effect import: installs the store subscription that auto-saves drawings.
import './lib/autosave';

const rootElement = document.getElementById('grid-draw-root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
