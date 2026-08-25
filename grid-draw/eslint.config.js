import tseslint from 'typescript-eslint';

// Enforces the data-flow architecture by lint instead of review:
//   .tsx components        -> read the zustand store, never storage/ml directly
//   store / .ts            -> orchestrate IndexedDB (lib/localDb.ts) + TF.js (ml/) + hold state
// grid-draw is fully client-side (IndexedDB + in-browser TF.js) — there is no
// network, so fetch() is banned everywhere as a guard against a backend creeping
// back in. Run with `npm run lint`.
export default [
  // Nothing may call fetch() — the app has no backend.
  {
    files: ['src-ts/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      'no-restricted-globals': [
        'error',
        { name: 'fetch', message: 'grid-draw has no backend — persist to IndexedDB (lib/localDb.ts) via the store.' },
      ],
    },
  },

  // .tsx components: NO network of any kind, and no direct data-layer imports
  // (type-only is fine) — all data goes through the zustand store.
  {
    files: ['src-ts/**/*.tsx'],
    plugins: { '@typescript-eslint': tseslint.plugin },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      'no-restricted-globals': [
        'error',
        { name: 'fetch', message: 'No network in .tsx — read the zustand store.' },
        { name: 'XMLHttpRequest', message: 'No network in .tsx — read the zustand store.' },
      ],
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            { name: 'axios', message: 'grid-draw has no backend — read the zustand store.' },
            { name: '../lib/localDb', allowTypeImports: true, message: 'No direct data-layer access in .tsx — use the store (type-only imports OK).' },
          ],
        },
      ],
    },
  },
];
