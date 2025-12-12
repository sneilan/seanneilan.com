import { useState, useEffect, useRef } from 'react';

interface TypstState {
  svg: string | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let typstInstance: any = null;
let initPromise: Promise<void> | null = null;

async function initTypst() {
  if (typstInstance) return;
  if (initPromise) {
    await initPromise;
    return;
  }

  initPromise = (async () => {
    const { $typst } = await import(
      '@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs'
    );

    // Configure WASM module loading - paths relative to /typst-notebook/
    $typst.setCompilerInitOptions({
      getModule: () => '/typst-notebook/typst_ts_web_compiler_bg.wasm',
    });
    $typst.setRendererInitOptions({
      getModule: () => '/typst-notebook/typst_ts_renderer_bg.wasm',
    });

    typstInstance = $typst;
  })();

  await initPromise;
}

export function useTypst(input: string, debounceMs = 300): TypstState {
  const [state, setState] = useState<TypstState>({
    svg: null,
    loading: false,
    error: null,
    initialized: false,
  });

  const timeoutRef = useRef<number | null>(null);
  const lastInputRef = useRef<string>('');

  // Initialize Typst on mount
  useEffect(() => {
    initTypst()
      .then(() => {
        setState((prev) => ({ ...prev, initialized: true }));
      })
      .catch((err) => {
        setState((prev) => ({
          ...prev,
          error: `Failed to initialize Typst: ${err.message}`,
        }));
      });
  }, []);

  // Compile input with debouncing
  useEffect(() => {
    if (!state.initialized) return;

    // Clear previous timeout
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    // Skip if input hasn't changed
    if (input === lastInputRef.current) return;

    setState((prev) => ({ ...prev, loading: true, error: null }));

    timeoutRef.current = window.setTimeout(async () => {
      lastInputRef.current = input;

      if (!input.trim()) {
        setState((prev) => ({ ...prev, svg: null, loading: false }));
        return;
      }

      try {
        // Wrap input with larger font size for better visibility
        const wrappedContent = `#set text(size: 24pt)\n#set page(width: auto, height: auto, margin: 8pt)\n${input}`;
        const svg = await typstInstance.svg({ mainContent: wrappedContent });
        setState((prev) => ({ ...prev, svg, loading: false, error: null }));
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Unknown compilation error';
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

  return state;
}
