# Grid Draw - Project Context

A full-screen grid drawing application built with Rust/WebAssembly + React + TypeScript + Tailwind CSS + shadcn/ui.

## Quick Start

```bash
cd grid-draw
npm install          # Install dependencies
npm run build        # Build WASM + TypeScript + Vite
npm run dev          # Development server with hot reload
npm run watch        # Watch Rust changes and rebuild
```

## Architecture

```
Canvas (Rust WASM)  <-->  React UI (TypeScript)
       |                         |
   lib.rs                  GridCanvas.tsx
   (rendering,             (mouse events,
    grid state,             UI panels,
    export)                 tool selection)
```

## Key Files

### Rust (WebAssembly)
| File | Purpose |
|------|---------|
| `src/lib.rs` | Core grid logic: dynamic grid storage (`Vec<Vec<bool>>`), rendering, cell operations, line/rect drawing, selection, JSON/tensor export. Compiled to WASM via wasm-pack. |
| `Cargo.toml` | Rust dependencies (wasm-bindgen, web-sys) |
| `pkg/` | Generated WASM output (don't edit directly) |

### TypeScript/React
| File | Purpose |
|------|---------|
| `src-ts/components/GridCanvas.tsx` | Main component: full-screen canvas, mouse handlers, tool state, floating panels, window resize handling |
| `src-ts/components/DraggablePanel.tsx` | Reusable draggable floating panel component |
| `src-ts/components/ui/` | shadcn/ui components (Button, Card, ToggleGroup) |
| `src-ts/hooks/useGridWasm.ts` | WASM loading hook, TypeScript interface for Rust methods |
| `src-ts/styles/globals.css` | Tailwind CSS + shadcn theme variables |
| `src-ts/main.tsx` | React entry point |
| `src-ts/App.tsx` | Root component (renders GridCanvas) |

### Configuration
| File | Purpose |
|------|---------|
| `index.html` | HTML entry point, Google Fonts (Roboto) |
| `vite.config.ts` | Vite build config, WASM plugin, path aliases |
| `tsconfig.json` | TypeScript config with `@/` path alias |
| `postcss.config.js` | PostCSS with Tailwind v4 |
| `package.json` | npm scripts and dependencies |

## Build Pipeline

1. `npm run build:wasm` - Compiles Rust to WASM (`wasm-pack build --target web`)
2. `tsc` - TypeScript type checking
3. `vite build` - Bundles to `../static/grid-draw/` for Hugo

## Current Features

- **Drawing Tools**: Draw (freehand), Line, Rect, Select
- **Colors**: Black, White, Red, Yellow, Blue, Green, Transparent
- **Selection**: Click to select, drag box to multi-select, move/delete selected
- **Dynamic Grid**: Fills viewport, resizes with window
- **Data Zone**: Center 10x10 area (blue border) - only this region exports to JSON/tensor
- **Floating Panels**: Draggable Tools and Output panels
- **Export**: JSON format and PyTorch tensor format

## WASM Interface (useGridWasm.ts)

Key methods exposed from Rust:
```typescript
interface GridCanvasWasm {
  // Grid operations
  resize(rows: number, cols: number): void;
  get_cell(row: number, col: number): boolean;
  set_cell(row: number, col: number, value: boolean): void;
  clear(): void;

  // Drawing
  set_draw_color(idx: number): void;
  draw_line(r1, c1, r2, c2): void;
  draw_rect(r1, c1, r2, c2): void;

  // Selection
  highlight_cell(row: number, col: number): void;
  move_cell(from_row, from_col, to_row, to_col): void;
  delete_cell(row: number, col: number): void;

  // Rendering
  render(): void;
  render_with_line(r1, c1, r2, c2): void;
  render_with_rect(r1, c1, r2, c2): void;
  render_with_selection_box(r1, c1, r2, c2): void;

  // Export
  export_json(): string;
  export_pytorch_tensor(): string;

  // Grid info
  get_rows(): number;
  get_cols(): number;
  get_data_zone_start_row(): number;
  get_data_zone_start_col(): number;
}
```

## Making Changes

### To modify grid rendering or export logic:
1. Edit `src/lib.rs`
2. Run `npm run build` or `npm run watch`

### To modify UI (tools, panels, layout):
1. Edit `src-ts/components/GridCanvas.tsx`
2. Vite hot-reloads in dev mode

### To add a new WASM method:
1. Add `#[wasm_bindgen]` function in `lib.rs`
2. Add method signature to `GridCanvasWasm` interface in `useGridWasm.ts`

### To add UI components:
```bash
npx shadcn@latest add [component-name]
```

## Constants

| Constant | Value | Location |
|----------|-------|----------|
| `CELL_SIZE` | 16px | lib.rs, GridCanvas.tsx |
| `DATA_ZONE_SIZE` | 10 | lib.rs |
| `HEADER_HEIGHT` | 48px | GridCanvas.tsx |

## Output Location

Production build outputs to `../static/grid-draw/` for Hugo static site integration.
