# Typst WASM Integration Issues & Solutions

A chronicle of issues encountered while building a custom Typst WASM module for the browser.

## Goal

Replace the 20MB typst.ts WASM with a smaller custom build that only includes what we need for math rendering.

## Final Result

- **Original typst.ts**: 20MB
- **Custom WASM with fonts**: 8.3MB (2.5MB brotli)

---

## Issue 1: WebAssembly.Compile Disallowed on Main Thread

**Error**: `WebAssembly.Compile is disallowed on the main thread if buffer size is larger than 8MB`

**Cause**: The browser blocks synchronous WASM compilation for large files. The old 20MB typst.ts WASMs were being cached by a service worker and served even after we deployed the new smaller WASM.

**Solution**:
1. Bump the service worker cache version to invalidate old cached files
2. Use `WebAssembly.compileStreaming()` or pass an `ArrayBuffer` to the wasm-bindgen init function for async compilation

```javascript
const wasmBuffer = await fetchWithProgress('/typst-notebook/typst_wasm_test_bg.wasm');
await wasm.default(wasmBuffer);  // Async initialization
```

---

## Issue 2: "No Font Could Be Found"

**Error**: Typst compiled successfully but rendered nothing, reporting "no font could be found"

**Cause**: We embedded fonts, but the wrong ones:
- We had "Latin Modern Math" and "New Computer Modern" (text font)
- Typst's math renderer looks for "New Computer Modern Math" (math-specific font)

The fallback font list in `typst-layout/src/math/shared.rs`:
```rust
[
    "new computer modern math",  // <-- This is what it needs
    "libertinus serif",
    "twitter color emoji",
    // ...
]
```

**Solution**: Download and embed the actual math font:
```rust
const NEW_CM_MATH_REGULAR: &[u8] = include_bytes!("fonts/NewCMMath-Regular.otf");
```

Fonts embedded in final build:
- `NewCMMath-Regular.otf` - for math rendering
- `NewCM10-Regular.otf` - for text
- `NewCM10-Book.otf`
- `NewCM10-Bold.otf`
- `NewCM10-Italic.otf`

---

## Issue 3: White Square Rendered Instead of Math

**Symptom**: WASM loaded, fonts loaded (console showed "Loaded 5 fonts"), but only a white rectangle appeared.

**Cause**: CSS was overriding all SVG fills:

```css
/* This was the problem */
.renderer svg path,
.renderer svg * {
  fill: var(--notebook-text);
}
```

This made the white background AND the black text the same dark color.

**Solution**: Be more specific with CSS selectors:
```css
/* Only target text elements, not background shapes */
.renderer svg .typst-text use {
  fill: var(--notebook-text);
}

/* Hide white background in dark mode only */
.dark .renderer svg > path.typst-shape {
  fill: transparent !important;
}
```

---

## Issue 4: SVG Glyphs Not Rendering

**Debug Process**: Added console logging to inspect SVG output:
```javascript
console.log('SVG start:', svg.substring(0, 500));
console.log('SVG end:', svg.substring(svg.length - 500));
```

This revealed the SVG structure:
- Uses `<use xlink:href="#glyph-id">` to reference glyphs
- Glyph definitions (`<defs><symbol>`) are at the END of the SVG
- The `typst_svg::svg()` function properly includes all defs via `finalize()`

The SVG was actually correct - it was the CSS issue above.

---

## Issue 5: Static Files Overriding Hugo Content

**Symptom**: `/typst-notebook/` showed standalone HTML without site theme.

**Cause**:
- `static/typst-notebook/index.html` (Vite build output) took precedence
- Hugo's content page at `content/typst-notebook.md` was being shadowed

**Solution**:
1. Delete `static/typst-notebook/index.html`
2. Keep assets in `static/typst-notebook/assets/`
3. Let Hugo generate the themed page from `content/typst-notebook.md`
4. Theme loads notebook via partial when `typstNotebook: true` in frontmatter

---

## Issue 6: Hugo Not Detecting Content Changes

**Symptom**: After removing static index.html, page showed 404.

**Cause**: File permissions were `600` (owner only), and Hugo's file watcher wasn't triggering.

**Solution**:
```bash
chmod 644 content/typst-notebook.md
```

---

## Key Files

| File | Purpose |
|------|---------|
| `typst-fork/crates/typst-wasm-test/src/lib.rs` | Custom WASM module with font embedding |
| `typst-fork/crates/typst-wasm-test/src/fonts/` | Embedded font files |
| `typst-notebook/src/hooks/useTypst.ts` | React hook for WASM loading |
| `static/typst-notebook/sw.js` | Service worker for WASM caching |
| `themes/typo/layouts/partials/projects/typst-notebook.html` | Hugo partial to load notebook assets |

---

## Build Commands

```bash
# Build WASM
cd typst-fork/crates/typst-wasm-test
wasm-pack build --target web --release

# Optimize (saves ~20% size)
wasm-opt -Oz --enable-bulk-memory --enable-nontrapping-float-to-int \
  pkg/typst_wasm_test_bg.wasm -o pkg/typst_wasm_test_bg.wasm

# Deploy
cp pkg/typst_wasm_test_bg.wasm pkg/typst_wasm_test.js \
  ../../static/typst-notebook/

# Rebuild notebook frontend
cd typst-notebook && npm run build
```

---

## Lessons Learned

1. **Service workers cache aggressively** - Always bump cache version when deploying new WASM
2. **Font names matter exactly** - "New Computer Modern" ≠ "New Computer Modern Math"
3. **CSS wildcards are dangerous** - `svg *` will match backgrounds too
4. **Debug SVG output directly** - Console.log the actual SVG to see what's generated
5. **Static files shadow content** - Hugo's static folder takes precedence over content pages
