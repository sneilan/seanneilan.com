import tseslint from 'typescript-eslint';

// Enforces the data-flow architecture by lint instead of review:
//   .tsx components        -> read the zustand store, never storage/ml directly
//                             (exception: auth — login/logout via lib/apiClient)
//   store / .ts            -> orchestrate the API (lib/apiClient.ts) + TF.js (ml/) + hold state
// All network traffic goes through lib/apiClient.ts (the grid-draw-api server) —
// fetch() is banned everywhere else so ad-hoc requests can't creep in.
// Run with `npm run lint`.
export default [
  // Only lib/apiClient.ts may call fetch().
  {
    files: ['src-ts/**/*.{ts,tsx}'],
    ignores: ['src-ts/lib/apiClient.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      'no-restricted-globals': [
        'error',
        { name: 'fetch', message: 'All network goes through lib/apiClient.ts — persist via the store.' },
      ],
    },
  },

  // .tsx components: NO direct network, and no direct data-layer imports
  // (type-only is fine) — all data goes through the zustand store. Auth entry
  // points (login/logout/getToken) from lib/apiClient are the one exception.
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
            { name: 'axios', message: 'All network goes through lib/apiClient.ts — read the zustand store.' },
            { name: '../lib/localDb', allowTypeImports: true, message: 'No direct data-layer access in .tsx — use the store (type-only imports OK).' },
          ],
        },
      ],
    },
  },
];
