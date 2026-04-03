---
title: "Grid Draw"
description: "A 32x32 interactive grid powered by Rust and WebAssembly"
gridDraw: true
hideBackToTop: true
hidePagination: true
---

Click on cells to toggle them on/off. This grid is rendered and managed entirely by Rust code compiled to WebAssembly.

<div id="grid-draw-root"></div>

## How It Works

This interactive canvas demonstrates Rust compiled to WebAssembly using `wasm-bindgen` and `web-sys` to directly manipulate an HTML canvas element. All grid state and rendering logic runs in WASM - JavaScript only handles event forwarding.
