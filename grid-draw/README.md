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

## Machine Learning: training data, gallery & prediction

Grid Draw can capture `input → output` design pairs, save drawings to a gallery,
train a small model to predict outputs, and run predictions back in the canvas.

```
 App (browser :5173)          data-server (Go + SQLite :7843)        model server (Python :7844)
 ──────────────────           ──────────────────────────────        ───────────────────────────
 Make Training Data ─POST /examples─▶ examples table
 Save to Gallery    ─POST /designs ─▶ designs table  ◀─GET /designs── Gallery page
 Start Training Run ─POST /train  ─▶ spawns ─────────────────────────▶ train.py  (QLoRA → adapter)
 Training Jobs  ◀───GET /jobs──── jobs (in-mem) ◀──POST /jobs──────── ProgressCallback
 Predict        ─POST /predict ─▶ proxy ──PREDICT_URL──────────────▶ serve.py  (constrained gen)
```

Three processes: the **Vite app**, the **Go data-server** (stores examples,
designs, training jobs; proxies prediction), and the **Python model server**
(few-shot / fine-tuned inference with grammar-constrained decoding). Training
runs as a subprocess the Go server launches.

### Extra prerequisites

- [Go](https://go.dev/dl/) 1.22+ — the data-server (pure-Go SQLite, no cgo)
- [uv](https://docs.astral.sh/uv/) — Python env for the trainer/model server
- An NVIDIA GPU is recommended for training/inference (works on CPU, slowly)

### One-time install

```bash
# 1. App (from grid-draw/)
npm install
npm run build:wasm           # = wasm-pack build --target web --out-dir pkg

# 2. Data-server (from grid-draw/data-server/)
cd data-server && go build -o grid-draw-data-server . && cd ..

# 3. Python trainer + model server (from grid-draw/trainer/)
cd trainer && uv sync && cd ..
```

### Turn on all the servers

Run each in its own terminal (order doesn't matter; the app degrades gracefully
when a server is down).

```bash
# Terminal 1 — app
npm run dev                                   # http://localhost:5173/grid-draw/

# Terminal 2 — data-server (with prediction proxy enabled)
cd data-server
PREDICT_URL=http://localhost:7844/predict ./grid-draw-data-server   # :7843

# Terminal 3 — model server (omit ADAPTER for the untrained few-shot baseline)
cd trainer
ADAPTER=outputs/<job-id> uv run uvicorn serve:app --port 7844 --host 127.0.0.1
```

That's everything: capture pairs, save to the gallery, train, and predict all
work from the app. If you only want to draw, just `npm run dev`.

### Typical workflow

1. **Capture data** — *Make Training Data* → select the input → Next → select the
   output → Save. Repeat. (Augmentation in `trainer/augment.py` multiplies each
   pair by the 8 dihedral symmetries + color permutations at train time.)
2. **Train** — click *Start Training Run*. Progress streams to the *Training Jobs*
   panel. The adapter lands in `trainer/outputs/<job-id>/`.
3. **Serve the trained model** — restart the model server with
   `ADAPTER=outputs/<job-id>` (it loads the adapter once at startup).
4. **Predict** — select an input and click *Predict from Selection*; the
   predicted design is stamped onto the canvas. Output is always schema-valid
   (logits are constrained to the design grammar via `outlines`). Every
   prediction's `input → output` is logged to the `predictions` table and
   exported at `GET /predictions.jsonl` (same shape as `/examples.jsonl`, so it
   can be folded back into training).

### Gallery

*Save to Gallery* stores the whole drawing under a random 8-char name; the
*Gallery* button opens `…/grid-draw/gallery/` with thumbnails of saved drawings
and training examples (rendered client-side from the stored JSON). Each drawing
has a shareable URL: `…/grid-draw/design/<name>/`.

### Server env vars

| Server | Var | Default | Purpose |
|--------|-----|---------|---------|
| data-server | `ADDR` | `:7843` | listen address |
| data-server | `DB_PATH` | `grid-draw.db` | SQLite file |
| data-server | `PREDICT_URL` | — | model server `/predict` (else 501) |
| data-server | `TRAIN_CMD` | `uv run python train.py` | training launch command |
| data-server | `TRAIN_DIR` | `../trainer` | working dir for training |
| model server | `MODEL` | `Qwen/Qwen2.5-1.5B-Instruct` | base model |
| model server | `ADAPTER` | — | LoRA adapter dir to merge |
| model server | `NUM_SHOTS` | `4` | few-shot demos pulled from data-server |
| trainer | `DATA_SERVER` | `http://localhost:7843` | where to read/report |

See [`trainer/README.md`](trainer/README.md) for training/augmentation details.

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
