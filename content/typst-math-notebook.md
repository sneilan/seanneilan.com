---
title: "Typst Math Notebook"
description: "An interactive math notebook using Typst for beautiful equation rendering"
typstNotebook: true
hideBackToTop: true
hidePagination: true
---

A live math notebook that lets you write and render equations using [Typst](https://typst.app/) syntax. Type in an equation, press the + button to duplicate it, then edit the copy to show your work. Use in place of pencil and paper for practicing math.

Powered by a stripped-down version of the Typst Rust WASM binary—reduced from 20 MB to 8.3 MB (3.1 MB brotli) by removing bibliography support (hayagriva) and syntax highlighting (syntect/two-face). See [typst-stripped-math-only](https://github.com/sneilan/typst-stripped-math-only) to build your own.

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

<div id="typst-notebook-root"></div>

## Typst Syntax Reference

| Math | Typst |
|------|-------|
| Fractions | `a/b` or `frac(a, b)` |
| Superscript | `x^2` |
| Subscript | `x_1` |
| Square root | `sqrt(x)` |
| Sum | `sum_(i=1)^n` |
| Integral | `integral_a^b` |
| Greek letters | `alpha`, `beta`, `pi`, `theta` |
| Matrices | `mat(a, b; c, d)` |

See the [Typst documentation](https://typst.app/docs/reference/math/) for complete syntax.
