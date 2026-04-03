import { useEffect } from 'react';
import { useGridStore } from '../store/gridStore';

/**
 * Listens for Tauri events emitted by the native backend.
 * Only activates when running inside a Tauri window (window.__TAURI__ is defined).
 *
 * Events:
 *   tensor-from-python  payload: JSON string of a 2D array
 *     Emitted when Python POSTs to http://localhost:7842/tensor
 *     Calls importTensor() so the canvas updates without any copy/paste.
 */
export function useTauriEvents() {
  const importTensor = useGridStore((s) => s.importTensor);

  useEffect(() => {
    // Guard: only run inside Tauri, not in browser/widget mode
    if (!('__TAURI__' in window)) return;

    let unlisten: (() => void) | undefined;

    (async () => {
      const { listen } = await import('@tauri-apps/api/event');
      const unlistenFn = await listen<string>('tensor-from-python', (event) => {
        importTensor(event.payload);
      });
      unlisten = unlistenFn;
    })();

    return () => {
      unlisten?.();
    };
  }, [importTensor]);
}
