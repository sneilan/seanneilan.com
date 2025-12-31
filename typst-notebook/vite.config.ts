import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [react(), wasm(), topLevelAwait()],
  base: '/typst-notebook/',
  optimizeDeps: {
    exclude: [
      '@myriaddreamin/typst.ts',
      '@myriaddreamin/typst-ts-renderer',
      '@myriaddreamin/typst-ts-web-compiler',
    ],
  },
  build: {
    target: 'esnext',
    outDir: '../static/typst-notebook',
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
