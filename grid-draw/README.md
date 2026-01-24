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
