import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import path from 'path';

export default defineConfig({
  plugins: [react(), wasm(), topLevelAwait()],
  base: '/grid-draw/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src-ts'),
    },
  },
  build: {
    target: 'esnext',
    outDir: '../static/grid-draw',
    emptyDirFirst: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
