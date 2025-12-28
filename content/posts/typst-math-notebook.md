---
title: "Typst Math Notebook"
date: 2024-12-27
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

## Full notebook

The [full notebook](/typst-notebook/) has more features:
- Multiple equation cells
- Save and load notebooks
- Share via URL
- Export to SVG/PNG

Good for working through derivations, practicing math, or just having a scratchpad that looks nicer than pencil and paper.
