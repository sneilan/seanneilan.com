# Grid store layout

The grid document store (zustand) was split from one 2,126-line `gridStore.ts`
into slices (2026-08-26). **Import from `gridStore.ts` only** — it re-exports
everything external code needs (`useGridStore`, `DesignJSON`, `SelectedItem`,
`CELL_UNITS`, `serializeSelection`, `getSelectionBoundsAll`, selectors, …).

## Files

- `gridStore.ts` — public entry point: initial state, slice combiner, selectors, re-exports.
- `types.ts` — all constants (`CELL_UNITS`, `TEXT_SIZES`, …) and types; `GridActions` is split into one interface per slice.
- `gridHelpers.ts` — pure functions: WASM shape readers (`readLine`, `textFrame`, …), selection equality/bounds, `serializeSelection`, quarter-turn rotation math, `allItems`.
- `slices/historySlice.ts` — owns the module-scope `History` instance; `commitEdits`/`undo`/`redo`/`resetHistory`/`exportHistory`.
- `slices/toolSlice.ts` — tool/color/outline state (per-tool style memory, synced into WASM on every change), text-tool typing lifecycle with a movable caret (`textEdit.cursor`: arrows/Home/End move it, typing inserts there, Backspace/Delete edit around it; including `beginTextEditAt`: in-place editing of an existing text — the original is deleted inside a history batch and replaced on commit as one undo step, or restored verbatim on Escape), subdivision, draw-stroke/line/rect/image commits; `pressDrawAt`/`dragDrawAt` (draw-vs-erase rule) and the line/rect rubber-band preview/cancel actions.
- `slices/selectSlice.ts` — selection set/add/remove, box selection, drag-move, `hitTestShapes` (priority: line > text > rect > image > cell), `renderSelection`; `pressSelectAt` (the select tool's whole mousedown decision tree — rotate handle > resize handle > drag > shift-toggle > single-select > box) and `renderDragPreview` (ghosts at the same snapped delta the drop commits), so `useCanvasMouse` only converts coordinates; `doubleClickAt` (double-click a text → in-place edit). Resize-handle hit tolerance is ~9 screen px and capped by shape size (`handleHitTolerance`) so tiny shapes keep a draggable center.
- `slices/transformSlice.ts` — resize gesture (origin captured at start, single from→to edit on release) and rotate gesture (free drag, snaps to 90°).
- `slices/clipboardSlice.ts` — copy/paste/deleteSelected (all single undo steps).
- `slices/designSlice.ts` — training-data capture, `placeDesign`/`loadDesign`/`serializeWholeGrid`, JSON/tensor import, `updateOutputs`, `clear`.

## Tests (vitest, `npx vitest run src-ts/store`)

`testGrid.ts` provides the mock WASM grid. Per-slice tests added with the split:
`toolSlice.test.ts`, `selectSlice.test.ts`, `transformSlice.test.ts`,
`clipboardDesign.test.ts` — alongside the older `storeUndo`, `storeEdge`,
`dragMove`, `pasteBox`, `recolor`, `rotate`, `session`, `edits/*` tests.

## Conventions

- Every document mutation routes through `commitEdits` (history) — `applyEdit`
  in `edits/` is the only code that calls WASM mutators.
- The input layer (`components/canvas/useCanvasMouse.ts`, `useKeyboardShortcuts.ts`)
  never touches the WASM grid — it converts coordinates and dispatches store
  actions. Enforced by eslint (`no-restricted-syntax` on `grid.*` in those files).
- Repo-root `Makefile` has `make lint`: fails on any tracked source file over
  500 lines (`make lint MAX_LINES=n` to override) and on any TypeScript type
  assertion (`as T` / `<T>expr` — banned repo-wide; use type guards instead).
