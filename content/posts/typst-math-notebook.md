---
title: "Typst Math Notebook"
date: 2025-12-27
summary: "An interactive math notebook that runs entirely in your browser"
description: "Write and render beautiful math equations using Typst syntax, right in your browser"
toc: false
readTime: true
typstNotebook: true
tags:
  - typst
  - math
  - tools
showTags: true
---

I will die on the hill of never using pencil and paper for math. So I built an interactive math notebook that runs entirely in your browser. Type equations using [Typst](https://typst.app/) syntax and see them render instantly.

## Try it

<div id="typst-notebook-root" data-mode="simple"></div>

Type something like `sum_(i=1)^n i^2 = n(n+1)(2n+1)/6` and watch it render.

## Why Typst?

Typst has a much simpler syntax than LaTeX:

| Math | Typst | LaTeX |
|------|-------|-------|
| Fraction | `a/b` | `\frac{a}{b}` |
| Power | `x^2` | `x^{2}` |
| Subscript | `x_1` | `x_{1}` |
| Greek | `alpha` | `\alpha` |
| Sum | `sum_(i=1)^n` | `\sum_{i=1}^{n}` |

The Typst compiler runs as WebAssembly, so everything happens locally in your browser with no server round-trips.

## How It's Built

Powered by a stripped-down version of the Typst Rust WASM binary—reduced from 20 MB to 8.3 MB (3.1 MB brotli compressed) by removing bibliography support (hayagriva) and syntax highlighting (syntect/two-face). See [typst-stripped-math-only](https://github.com/sneilan/typst-stripped-math-only) for details.

**Build it yourself:**
```bash
# Clone and build
git clone https://github.com/sneilan/typst-stripped-math-only.git
cd typst-stripped-math-only/crates/typst-wasm-test
wasm-pack build --target web --release

# Optimize with wasm-opt
wasm-opt -Oz --enable-bulk-memory --enable-nontrapping-float-to-int \
  pkg/typst_wasm_test_bg.wasm -o pkg/typst_wasm_test_bg.wasm

# Compress with brotli
brotli --best pkg/typst_wasm_test_bg.wasm

# Check size
ls -lh pkg/typst_wasm_test_bg.wasm*

# Test it - render math to SVG
node --input-type=module -e "
import init, { compile_to_svg } from './pkg/typst_wasm_test.js';
import { readFileSync, writeFileSync } from 'fs';

await init(readFileSync('./pkg/typst_wasm_test_bg.wasm'));
const svg = compile_to_svg('$ sum_(i=1)^n i^2 = n(n+1)(2n+1)/6 $');
writeFileSync('output.svg', svg);
console.log('Rendered to output.svg');
"
```

## Full notebook

The [full notebook](/typst-math-notebook/) has more features:
- Multiple equation cells
- Save and load notebooks
- Share via URL
- Export to SVG/PNG

Good for working through derivations, practicing math, or just having a scratchpad that looks nicer than pencil and paper.
