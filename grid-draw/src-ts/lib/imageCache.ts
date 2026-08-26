// Decoded-bitmap cache keyed by URL. Image *objects* on the grid store only a
// URL (the pixels live in S3); the WASM renderer needs a live HtmlImageElement
// to draw. This module owns those elements: apply.ts asks for one by URL when it
// inserts an image, and the same element is reused across undo/redo/reload so we
// never re-download or re-decode. Elements are created with crossOrigin so the
// canvas stays untainted and can still be exported to PNG (requires the bucket
// to send permissive CORS headers on GET).
//
// The store isn't imported statically: apply.ts imports this module, and the
// store imports apply.ts (via history), so a static import here would form an
// initialization cycle. The on-decode repaint uses a dynamic import instead,
// which runs only when a bitmap finishes loading — long after modules settle.

const cache = new Map<string, HTMLImageElement>();

/** Repaint the canvas once a bitmap decodes, without statically depending on
 * the store (see the module comment about the import cycle). */
function repaint() {
  void import('../store/gridStore').then((m) => m.useGridStore.getState().grid?.render());
}

/**
 * The decoded element for `url`, created on first request. A freshly created
 * element isn't loaded yet, so the WASM renderer draws nothing for it until the
 * bitmap decodes; on load we trigger one grid re-render so it appears. A load
 * error leaves the element undrawn (a broken URL simply shows nothing) rather
 * than throwing into the render path.
 */
export function getImageEl(url: string): HTMLImageElement {
  const existing = cache.get(url);
  if (existing) return existing;

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.decoding = 'async';
  img.onload = () => {
    // The image may finish decoding well after the edit was applied; repaint so
    // it shows up (and so its box, drawn while empty, fills in).
    repaint();
  };
  img.onerror = () => {
    // Leave it out of the cache-miss path but don't retry forever; a bad URL
    // just renders as an empty box the user can delete.
  };
  img.src = url;
  cache.set(url, img);
  return img;
}

/**
 * Pre-decode `url` before it's placed, resolving with its natural pixel size so
 * the caller can pick a grid-snapped box that matches the image's aspect ratio.
 * Rejects if the bitmap can't be loaded.
 */
export function loadImageSize(url: string): Promise<{ el: HTMLImageElement; width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const el = getImageEl(url);
    if (el.complete && el.naturalWidth > 0) {
      resolve({ el, width: el.naturalWidth, height: el.naturalHeight });
      return;
    }
    el.addEventListener('load', () => resolve({ el, width: el.naturalWidth, height: el.naturalHeight }), { once: true });
    el.addEventListener('error', () => reject(new Error(`failed to load image: ${url}`)), { once: true });
  });
}
