// Service Worker for Typst Notebook WASM caching
const CACHE_NAME = 'typst-wasm-v11';  // v11: Load WASM from S3

// Install: pre-cache nothing, just activate immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('typst-wasm-') && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch: cache WASM files on first request, serve from cache thereafter
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Only handle WASM files (including Brotli-compressed .wasm.br)
  if (!url.pathname.endsWith('.wasm') && !url.pathname.endsWith('.wasm.br')) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request).then((response) => {
          if (response.ok) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      });
    })
  );
});
