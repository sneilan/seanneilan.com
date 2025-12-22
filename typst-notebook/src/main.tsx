import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Register service worker for WASM caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/typst-notebook/sw.js').catch((err) => {
      console.warn('Service worker registration failed:', err);
    });
  });
}

const rootElement = document.getElementById('typst-notebook-root');

if (rootElement) {
  // Check for mode attribute
  const mode = rootElement.dataset.mode as 'full' | 'simple' | undefined;

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App mode={mode || 'full'} />
    </React.StrictMode>
  );
}
