import tseslint from 'typescript-eslint';

// Enforces the data-flow architecture by lint instead of review:
//   .tsx components        -> read the zustand server store, never the network
//   store / .ts            -> orchestrate fetching (react-query) + hold state
//   lib/dataServer.ts      -> the ONLY place fetch() is allowed
// Run with `npm run lint`.
export default [
  // Nothing outside the data layer may call fetch().
  {
    files: ['src-ts/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      'no-restricted-globals': [
        'error',
        { name: 'fetch', message: 'Use the data layer (lib/dataServer.ts) + the server store, not raw fetch().' },
      ],
    },
  },

  // .tsx components: NO network of any kind. No fetch/XHR, no react-query, and no
  // direct data-layer imports (type-only is fine) — all data goes through the
  // zustand server store.
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
        { name: 'fetch', message: 'No network in .tsx — read the zustand server store.' },
        { name: 'XMLHttpRequest', message: 'No network in .tsx — read the zustand server store.' },
      ],
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            { name: '@tanstack/react-query', message: 'react-query lives in the store (.ts), not components.' },
            { name: 'axios', message: 'No network in .tsx — read the zustand server store.' },
            { name: '../lib/dataServer', allowTypeImports: true, message: 'No direct data-layer access in .tsx — use the server store.' },
          ],
        },
      ],
    },
  },

  // The data layer is the one place allowed to call fetch().
  {
    files: ['src-ts/lib/dataServer.ts'],
    rules: { 'no-restricted-globals': 'off' },
  },
];
