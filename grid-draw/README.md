# Grid Draw

An interactive 32x32 grid canvas powered by Rust and WebAssembly. Click on cells to toggle them on/off.

## Prerequisites

- [Rust](https://rustup.rs/) (1.70+)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)
- [Node.js](https://nodejs.org/) (18+)

### Install wasm-pack

```bash
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

Or with cargo:

```bash
cargo install wasm-pack
```

## Project Structure

```
grid-draw/
├── Cargo.toml           # Rust crate configuration
├── src/
│   └── lib.rs           # Rust WASM module (grid logic, rendering)
├── pkg/                 # wasm-pack output (generated)
├── package.json         # NPM dependencies
├── vite.config.ts       # Vite build configuration
├── index.html           # Development entry point
└── src-ts/              # TypeScript/React source
    ├── main.tsx         # React mount point
    ├── App.tsx          # Main component
    ├── components/
    │   └── GridCanvas.tsx
    ├── hooks/
    │   └── useGridWasm.ts
    └── styles/
        └── grid-draw.css
```

## Development Setup

1. Install npm dependencies:
   ```bash
   npm install
   ```

2. Build the WASM module:
   ```bash
   wasm-pack build --target web --out-dir pkg
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 in your browser

## Machine Learning: training data, gallery & prediction (all in-browser)

Grid Draw is **fully client-side** — no servers. It captures `input → output`
design pairs, saves drawings to a gallery, trains a tiny model, and predicts, all
in the browser:

- **Storage** is the browser's **IndexedDB** (gallery designs + training examples)
  via `src-ts/lib/localDb.ts`. Nothing leaves the machine; the data is per-browser.
- **The model** is a small **TensorFlow.js** net that both trains and runs in the
  browser (`src-ts/ml/`). It learns a **coordinate → coordinate map**: each cell's
  `(row, col)` is fed through the model and a cell of the same color is placed at
  the returned coordinate — i.e. it learns to "move stuff around" (translations,
  reflections, scalings). TF.js is lazy-loaded on first train/predict.

### Typical workflow

1. **Capture data** — *Make Training Data* → select the INPUT → Next → select the
   OUTPUT → Save. Each pair records a `delta` so both halves live in one frame.
2. **Train** — click *Start Training Run*. The tiny model trains in the browser;
   epoch/loss stream to the *Training* panel. The trained model is saved to
   `indexeddb://grid-draw-coord-model` and auto-loads on the next visit.
3. **Predict** — select an input and click *Predict from Selection*; each selected
   cell is mapped through the model and stamped back onto the canvas.

Notes / limits: predictions are **cells only** (lines/rects/text aren't produced),
coordinates are classified over a small range (see `COORD_MAX` in `ml/frame.ts`),
and pairs are formed only when the input and output have the same cell count.

### Gallery

*Save to Gallery* stores the whole drawing under a random 8-char name; the
*Gallery* button opens `…/grid-draw/gallery/` with thumbnails of saved drawings
and training examples (rendered client-side from the stored JSON). Everything is
read straight from IndexedDB — no backend.

## Production Build

Build everything for production:

```bash
npm run build
```

This will:
1. Compile Rust to WASM (`wasm-pack build`)
2. Type-check TypeScript (`tsc`)
3. Bundle with Vite (outputs to `../static/grid-draw/`)

The built assets will be placed in the Hugo static directory and served at `/grid-draw/`.

## Watch Mode (Auto-rebuild on Rust changes)

To automatically rebuild when Rust files change:

```bash
# Using watchexec (recommended)
npm run watch

# Or using cargo-watch
npm run watch:cargo
```

This watches `src/` for `.rs` file changes and runs the full build. Run `hugo serve` in another terminal to serve the updated assets.

### Installing watch tools

```bash
# watchexec
cargo install watchexec-cli

# cargo-watch
cargo install cargo-watch
```

## How It Works

The grid logic runs entirely in Rust compiled to WebAssembly:

- **Grid State**: A 32x32 boolean array stored in WASM memory
- **Rendering**: Rust directly draws to the HTML canvas via `web-sys`
- **Click Handling**: JavaScript captures clicks and passes coordinates to WASM
- **Performance**: All grid operations happen in WASM, no JavaScript overhead

## Tech Stack

- **Rust** - Core grid logic and canvas rendering
- **wasm-bindgen** - Rust/JavaScript interop
- **web-sys** - Web API bindings for Rust
- **React** - UI wrapper and event handling
- **Vite** - Build tooling with WASM plugin support
