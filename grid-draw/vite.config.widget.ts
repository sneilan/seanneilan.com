import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import path from 'path';

export default defineConfig({
  plugins: [react(), wasm(), topLevelAwait()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': JSON.stringify({}),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src-ts'),
    },
  },
  build: {
    target: 'esnext',
    outDir: '../grid-draw-widget/grid_draw_widget/static',
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src-ts/widget-entry.tsx'),
      formats: ['es'],
      fileName: () => 'widget.js',
    },
    rollupOptions: {
      // Don't externalize anything - bundle everything including React
      external: [],
      output: {
        // Inline all chunks into one file
        inlineDynamicImports: true,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'widget.css';
          }
          return '[name][extname]';
        },
      },
    },
    // Inline all assets including WASM
    assetsInlineLimit: 1000000,
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
