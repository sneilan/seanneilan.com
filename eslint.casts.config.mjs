// No-type-assertions check for the TypeScript that lives outside grid-draw
// (test/, typst-notebook/). Run by `make lint` with grid-draw's eslint binary;
// grid-draw's own src-ts gets the same rule from grid-draw/eslint.config.js.
// typescript-eslint is imported from grid-draw's node_modules because the repo
// root intentionally has no eslint install of its own.
import tseslint from './grid-draw/node_modules/typescript-eslint/dist/index.js';

export default [
  {
    files: ['test/**/*.{ts,tsx}', 'typst-notebook/src/**/*.{ts,tsx}', '*.ts'],
    plugins: { '@typescript-eslint': tseslint.plugin },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        { assertionStyle: 'never' },
      ],
    },
  },
];
