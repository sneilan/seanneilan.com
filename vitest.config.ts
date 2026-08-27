import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    // Only this repo-root suite: grid-draw/ and typst-notebook/ are separate
    // packages with their own vitest configs (and different React majors), so
    // the default repo-wide sweep must not pick their tests up here.
    include: ['test/**/*.{test,spec}.{ts,tsx}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
  resolve: {
    alias: {
      '@': '/themes/typo/assets/js',
    },
  },
});
