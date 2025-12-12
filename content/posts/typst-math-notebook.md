---
title: "Building a Typst Math Notebook for the Web"
date: 2024-12-09
summary: "How I built an interactive math notebook using Typst's WASM compiler"
description: "A deep dive into building a browser-based math notebook with Typst, React, and WebAssembly"
toc: true
readTime: true
typstNotebook: true
tags:
  - typst
  - math
  - wasm
  - react
showTags: true
---

## Why Typst?

I wrote previously about [doing math with LaTeX](/posts/doing-math-with-latex/). While LaTeX is powerful, I discovered Typst - a modern typesetting language that offers some compelling advantages:

- **Simpler syntax**: `x^2` instead of `x^{2}`, `a/b` instead of `\frac{a}{b}`
- **Faster compilation**: The WASM-based compiler runs entirely in the browser
- **Cleaner output**: Beautiful SVG rendering with proper scaling

## Try It

Here's a simplified version of the notebook. Try typing an equation like `sum_(i=1)^n i^2`:

<div id="typst-notebook-root" data-mode="simple"></div>

For the full experience with save/load, sharing, and multiple equations, check out the [full notebook](/typst-notebook/).

## Technical Implementation

The notebook is built with React and uses the [@myriaddreamin/typst.ts](https://github.com/Myriad-Dreamin/typst.ts) library, which provides a WebAssembly build of the Typst compiler.

### The WASM Challenge

The trickiest part was getting the WASM modules to load correctly. The typst.ts library requires two WASM files:
- `typst_ts_web_compiler_bg.wasm` (~15MB) - The actual Typst compiler
- `typst_ts_renderer_bg.wasm` (~6MB) - The SVG renderer

These files are large but cache well in browsers. The initialization happens once, and subsequent compilations are nearly instant.

### Live Compilation

The notebook uses a debounced approach - it waits 300ms after you stop typing before compiling. This prevents the compiler from running on every keystroke while still feeling responsive:

```typescript
useEffect(() => {
  const timeout = setTimeout(async () => {
    const svg = await typstInstance.svg({ mainContent: input });
    setState({ svg, loading: false });
  }, 300);
  return () => clearTimeout(timeout);
}, [input]);
```

### Features

- **Save/Load**: Notebooks are stored in localStorage
- **URL Sharing**: Equations are base64-encoded into the URL
- **Export**: SVG exports directly; PNG uses canvas conversion

## Typst vs LaTeX

| Feature | Typst | LaTeX |
|---------|-------|-------|
| Fractions | `a/b` | `\frac{a}{b}` |
| Superscript | `x^2` | `x^{2}` |
| Subscript | `x_1` | `x_{1}` |
| Greek | `alpha` | `\alpha` |
| Compilation | ~50ms (WASM) | External tool |

For quick math work in the browser, Typst's simpler syntax and instant feedback make it a great choice.

## Source Code

The notebook is open source. The implementation uses:
- Vite for building (handles WASM plugins)
- React for the UI
- Hugo for the static site integration

Check it out at [/typst-notebook/](/typst-notebook/).
