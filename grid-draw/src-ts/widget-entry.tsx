/**
 * Anywidget entry point for the Grid Draw widget.
 * This file exports a render function that anywidget calls to initialize the widget.
 */

import { createRoot, Root } from 'react-dom/client';
import GridCanvas from './components/GridCanvas';
import type { AnywidgetRenderContext } from './types/anywidget';
import './styles/globals.css';

export function render({ model, el }: AnywidgetRenderContext) {
  // Create a container div for React
  const container = document.createElement('div');
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.position = 'relative';
  el.appendChild(container);

  // Get initial dimensions from model
  const width = model.get<number>('width') ?? 800;
  const height = model.get<number>('height') ?? 600;

  // Create React root and render (no StrictMode to avoid double-mounting)
  const root: Root = createRoot(container);
  root.render(
    <GridCanvas
      anywidgetModel={model}
      widgetWidth={width}
      widgetHeight={height}
    />
  );

  // Return cleanup function
  return () => {
    root.unmount();
    container.remove();
  };
}

export default { render };
