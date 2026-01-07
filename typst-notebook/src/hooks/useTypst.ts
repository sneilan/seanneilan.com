import { useState, useEffect, useRef, useCallback } from 'react';
import brotliPromise from 'brotli-wasm';

interface TypstState {
  svg: string | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
  downloadProgress: number;
  downloading: boolean;
}

interface TypstWasm {
  init: () => void;
  compile_to_svg: (source: string) => string;
}

let typstModule: TypstWasm | null = null;
let initPromise: Promise<void> | null = null;
let downloadProgressCallback: ((progress: number) => void) | null = null;

async function fetchWithProgress(url: string, decompress = false): Promise<ArrayBuffer> {
  const response = await fetch(url);
  const contentLength = response.headers.get('Content-Length');

  if (!contentLength || !response.body) {
    const buffer = await response.arrayBuffer();
    if (decompress) {
      return decompressBrotli(buffer);
    }
    return buffer;
  }

  const total = parseInt(contentLength, 10);
  let loaded = 0;
  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    chunks.push(value);
    loaded += value.length;

    if (downloadProgressCallback) {
      downloadProgressCallback(Math.round((loaded / total) * 100));
    }
  }

  const result = new Uint8Array(loaded);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }

  if (decompress) {
    return decompressBrotli(result.buffer);
  }
  return result.buffer;
}

async function decompressBrotli(buffer: ArrayBuffer): Promise<ArrayBuffer> {
  const brotli = await brotliPromise;
  const input = new Uint8Array(buffer);
  const decompressed = brotli.decompress(input);
  return decompressed.buffer as ArrayBuffer;
}

async function initTypst(onProgress?: (progress: number) => void) {
  if (typstModule) return;
  if (initPromise) {
    await initPromise;
    return;
  }

  downloadProgressCallback = onProgress || null;

  initPromise = (async () => {
    // Fetch the JS glue code from S3
    const jsResponse = await fetch('https://aaa4.s3.us-west-1.amazonaws.com/typst_wasm_test.js');
    const jsCode = await jsResponse.text();

    // Create a blob URL to import it as a module
    const blob = new Blob([jsCode], { type: 'application/javascript' });
    const blobUrl = URL.createObjectURL(blob);

    // Dynamically import the module
    const wasm = await import(/* @vite-ignore */ blobUrl);
    URL.revokeObjectURL(blobUrl);

    // Fetch Brotli-compressed WASM from S3 with progress and decompress
    const wasmBuffer = await fetchWithProgress('https://aaa4.s3.us-west-1.amazonaws.com/typst_wasm_test_bg.wasm.br', true);

    // Initialize the module
    await wasm.default(wasmBuffer);
    wasm.init();

    typstModule = wasm as TypstWasm;
    downloadProgressCallback = null;
  })();

  await initPromise;
}

export function useTypst(input: string, debounceMs = 300, lazyLoad = true): TypstState & { triggerInit: () => void } {
  const [state, setState] = useState<TypstState>({
    svg: null,
    loading: false,
    error: null,
    initialized: false,
    downloadProgress: 0,
    downloading: false,
  });

  const timeoutRef = useRef<number | null>(null);
  const lastInputRef = useRef<string>('');
  const initTriggeredRef = useRef<boolean>(false);

  const triggerInit = useCallback(() => {
    if (initTriggeredRef.current || state.initialized) return;
    initTriggeredRef.current = true;

    setState((prev) => ({ ...prev, downloading: true, downloadProgress: 0 }));

    initTypst((progress) => {
      setState((prev) => ({ ...prev, downloadProgress: progress }));
    })
      .then(() => {
        setState((prev) => ({
          ...prev,
          initialized: true,
          downloading: false,
          downloadProgress: 100
        }));
      })
      .catch((err) => {
        setState((prev) => ({
          ...prev,
          error: `Failed to initialize Typst: ${err.message}`,
          downloading: false,
        }));
      });
  }, [state.initialized]);

  useEffect(() => {
    if (!lazyLoad) {
      triggerInit();
    }
  }, [lazyLoad, triggerInit]);

  useEffect(() => {
    if (!state.initialized) return;

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    if (input === lastInputRef.current) return;

    setState((prev) => ({ ...prev, loading: true, error: null }));

    timeoutRef.current = window.setTimeout(async () => {
      lastInputRef.current = input;

      if (!input.trim()) {
        setState((prev) => ({ ...prev, svg: null, loading: false }));
        return;
      }

      try {
        // Wrap input with page settings and use our embedded font
        const wrappedContent = `#set text(size: 24pt, font: "New Computer Modern")\n#set page(width: auto, height: auto, margin: 8pt, fill: none)\n${input}`;
        const svg = typstModule!.compile_to_svg(wrappedContent);
        setState((prev) => ({ ...prev, svg, loading: false, error: null }));
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : String(err);
        setState((prev) => ({
          ...prev,
          svg: null,
          loading: false,
          error: errorMessage,
        }));
      }
    }, debounceMs);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [input, state.initialized, debounceMs]);

  return { ...state, triggerInit };
}
