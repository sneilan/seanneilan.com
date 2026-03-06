# Grid Draw - Project Context

A full-screen grid drawing application built with Rust/WebAssembly + React + TypeScript + Zustand + Tailwind CSS + shadcn/ui.

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
Canvas (Rust WASM)  <-->  Zustand Store  <-->  React UI
       |                       |                   |
   src/*.rs              gridStore.ts        GridCanvas.tsx
   (rendering,           (selection,         (mouse events,
    grid state,           clipboard,          UI panels,
    shapes)               outputs)            tools)
```

## Key Files

### Rust (WebAssembly) - Modular Structure
| File | Purpose |
|------|---------|
| `src/lib.rs` | Core struct `GridCanvas`, constructor, resize, constants (`CELL_SIZE`, `DATA_ZONE_SIZE`), `color_for_idx()` |
| `src/cells.rs` | Cell operations: `get_cell`, `set_cell`, `move_cell`, `delete_cell`, `clear`, `handle_click` |
| `src/rendering.rs` | All render methods: `render`, `render_with_*`, `highlight_cell/line/rect`, `draw_selection_box` |
| `src/shapes.rs` | Line/rect: `draw_line/rect`, `get_line/rect`, `hit_test_*`, `move_*`, `delete_*`, `*_intersects_box` |
| `src/import_export.rs` | JSON/tensor import/export, parsing helpers, data zone accessors |
| `Cargo.toml` | Rust dependencies (wasm-bindgen, web-sys) |
| `pkg/` | Generated WASM output (don't edit directly) |

### TypeScript/React
| File | Purpose |
|------|---------|
| `src-ts/store/gridStore.ts` | Zustand store: unified selection (cells/lines/rects), clipboard, outputs, all state actions |
| `src-ts/components/GridCanvas.tsx` | Main component: canvas, mouse handlers, tool UI, floating panels |
| `src-ts/components/DraggablePanel.tsx` | Reusable draggable floating panel component |
| `src-ts/components/ui/` | shadcn/ui components (Button, Card, ToggleGroup) |
| `src-ts/hooks/useGridWasm.ts` | WASM loading hook |
| `src-ts/types/grid.ts` | TypeScript interface for WASM methods (`GridCanvasWasm`) |
| `src-ts/utils/selection.ts` | Selection utilities (bounds calculation) |
| `src-ts/styles/globals.css` | Tailwind CSS + shadcn theme variables |

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
- **Colors**: Black, White, Red, Yellow, Blue, Green, Transparent (outline-only for shapes)
- **Unified Selection**: Select cells, lines, and rects as objects
  - Click to select single item
  - Shift+click to add/remove from selection
  - Drag box to multi-select
  - Delete key removes selected items
  - Ctrl+C/V for copy/paste
- **Dynamic Grid**: Fills viewport, resizes with window
- **Export Formats**:
  - JSON: Sparse format `[{row, col, color}, ...]` with relative coordinates
  - Tensor: Dense 2D array (black=1, else=0)
- **Import**: Paste JSON/tensor at mouse position
- **Floating Panels**: Draggable Tools and Selection Data panels

## Zustand Store (gridStore.ts)

Central state management:
```typescript
// Selection types
type SelectedItem =
  | { type: 'cell'; row: number; col: number }
  | { type: 'line'; index: number }
  | { type: 'rect'; index: number };

// Key state
selectedItems: SelectedItem[]
clipboard: ClipboardData | null
selectMode: 'box' | 'drag' | null

// Key actions
hitTestShapes(x, y)        // Find item at pixel position
copy() / paste()           // Clipboard operations
deleteSelected()           // Remove all selected items
renderSelection()          // Highlight selected + draw bounding box
getSelectionBoundsAll()    // Bounds including cells, lines, rects
```

## WASM Interface (types/grid.ts)

```typescript
interface GridCanvasWasm {
  // Grid basics
  resize(rows: number, cols: number): void;
  get_rows(): number;
  get_cols(): number;
  get_cell_size(): number;

  // Cell operations
  get_cell(row: number, col: number): boolean;
  get_cell_color(row: number, col: number): number;
  set_cell(row: number, col: number, value: boolean): void;
  set_draw_color(idx: number): void;
  move_cell(from_row, from_col, to_row, to_col): void;
  delete_cell(row: number, col: number): void;
  clear(): void;

  // Shape drawing
  draw_line(r1, c1, r2, c2): void;
  draw_rect(r1, c1, r2, c2): void;
  add_line(r1, c1, r2, c2, color): void;  // For paste
  add_rect(r1, c1, r2, c2, color): void;

  // Shape queries
  get_line_count(): number;
  get_rect_count(): number;
  get_line(idx: number): Uint32Array;  // [r1, c1, r2, c2, color]
  get_rect(idx: number): Uint32Array;

  // Hit testing
  hit_test_line(x: number, y: number, tolerance: number): number;  // Returns index or -1
  hit_test_rect(x: number, y: number): number;
  line_intersects_box(idx, r1, c1, r2, c2): boolean;
  rect_intersects_box(idx, r1, c1, r2, c2): boolean;

  // Shape operations
  move_line(idx: number, delta_row: number, delta_col: number): void;
  move_rect(idx: number, delta_row: number, delta_col: number): void;
  delete_line(idx: number): void;
  delete_rect(idx: number): void;

  // Rendering
  render(): void;
  render_with_line(r1, c1, r2, c2): void;
  render_with_rect(r1, c1, r2, c2): void;
  render_with_selection_box(r1, c1, r2, c2): void;
  highlight_cell(row: number, col: number): void;
  highlight_line(idx: number): void;
  highlight_rect(idx: number): void;
  draw_selection_box(r1, c1, r2, c2): void;

  // Import/Export
  export_json(): string;
  export_pytorch_tensor(): string;
  import_json(json: string): void;
  import_tensor(tensor: string): void;
  get_data_zone_start_row(): number;
  get_data_zone_start_col(): number;
  get_data_zone_size(): number;
}
```

## Making Changes

### To modify grid rendering or shape logic:
1. Edit appropriate module in `src/` (cells.rs, rendering.rs, shapes.rs, import_export.rs)
2. Run `npm run build` or `npm run watch`

### To modify selection/clipboard behavior:
1. Edit `src-ts/store/gridStore.ts`
2. Vite hot-reloads in dev mode

### To modify UI (tools, panels, layout):
1. Edit `src-ts/components/GridCanvas.tsx`
2. Vite hot-reloads in dev mode

### To add a new WASM method:
1. Add `#[wasm_bindgen]` function in appropriate `src/*.rs` module
2. Add method signature to `GridCanvasWasm` interface in `src-ts/types/grid.ts`

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
