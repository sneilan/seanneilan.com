# Prompt: build a Python client for the grid-draw API (auth + full drawing power)

You are writing a small Python library (plus optional CLI) that talks to the
grid-draw API server at `https://api.seanneilan.com`. The goal is **complete
parity with the mouse**: anything a person can draw in the grid-draw web app
(cells, lines, rectangles, text) you can produce or edit programmatically, and
it will appear in Sean's gallery and open perfectly in the web editor.

## Ground rules

- **Auth:** username is always `sean`. Read the password from a `.env` file in
  the working directory (`GRID_DRAW_PASSWORD=...`). Never hardcode it, never
  print it, and make sure `.env` is in `.gitignore` — the repo is public.
- Dependencies: keep it light. `requests` (or `httpx`) + `python-dotenv` is
  plenty. Pure functions over a small `Design` dataclass beat a framework.
- Base URL: default `https://api.seanneilan.com`, overridable via
  `GRID_DRAW_API_URL` in `.env`.

## Authentication flow

```
POST /api/login          body: {"username": "sean", "password": "<from .env>"}
  -> 200 {"token": "<64 hex chars>"}      (valid 30 days)
  -> 401 {"error": "invalid username or password"}
```

Send the token on every other request as `Authorization: Bearer <token>`.
Any 401 later means the session expired → log in again once and retry.
Cache the token in memory only (re-login per run is fine and cheap).

## Endpoints

All request/response bodies are JSON. `design`, `history`, `input`, `output`
are opaque JSON blobs to the server — the schema below is a client-side
contract with the web app.

| Method & path | Meaning |
|---|---|
| `GET /healthz` | liveness, no auth, returns `ok` |
| `GET /api/designs` | list gallery designs, ascending id (insertion order) |
| `GET /api/designs/{id}` | one design by id (404 if missing) |
| `GET /api/designs?name=<urlencoded>` | one design by name (404 if missing) |
| `PUT /api/designs` | **upsert by name** — body `{"name", "design", "history"?}`; returns the saved row. Same name = overwrite (this is how autosave works); `createdAt` and `id` are preserved on overwrite |
| `DELETE /api/designs/{id}` | delete a design (204) |
| `GET /api/examples` | list ML training examples, **newest first** |
| `POST /api/examples` | create — body `{"input", "output", "delta"?}`; returns the row |
| `PUT /api/examples/{id}` | overwrite in place (preserves `createdAt`; 404 if missing) |
| `DELETE /api/examples/{id}` | delete an example (204) |

Design row shape: `{"id": int, "createdAt": iso8601, "name": str,
"design": DesignJSON, "history": {...}?}`. Omit `history` when writing from
Python — it's the editor's undo/redo stack; a design without one loads fine
(the user just can't undo past your edit).

Example row shape: `{"id": int, "createdAt": iso8601, "input": DesignJSON,
"output": DesignJSON, "delta": [dr, dc]?}`.

## How "drawing via API" works

There are no per-stroke endpoints, and none are needed. In the web app every
mouse gesture ends up mutating one JSON document — the `DesignJSON` — which is
then upserted with `PUT /api/designs`. So the full drawing loop from Python is:

1. `GET /api/designs?name=foo` (or start from an empty `DesignJSON`),
2. transform the JSON (add/remove/move shapes — plain data manipulation),
3. `PUT /api/designs` with the same name.

That's it. Model the transforms as methods on a `Design` class so scripts read
like drawing: `d.cell(3, 4, RED)`, `d.line(0, 0, 0, 80, BLACK, width=1.5)`,
`d.rect(8, 8, 24, 40, fill=YELLOW, outline=BLACK)`, `d.text(10, 10, "hello",
color=BLUE, size=2)`, then `client.save("foo", d)`.

## DesignJSON — the exact format

(Source of truth: `DesignJSON` in `grid-draw/src-ts/store/gridStore.ts` and the
Rust shape stores in `grid-draw/src/*.rs`. If something here disagrees with the
code, the code wins.)

```jsonc
{
  "w": 64, "h": 48,          // bounding-box size in FINE units (see below)
  "cells": [[r, c, colorIdx], ...],
  "lines": [[r1, c1, r2, c2, colorIdx, widthX10], ...],
  "rects": [[r1, c1, r2, c2, fillIdx, outlineIdx], ...],
  "texts": [[r, c, colorIdx, size, boxW, boxH, halign, valign, "string"], ...],
  "sub": 8                   // fine units per whole grid cell — ALWAYS write 8
}
```

- **Coordinates are (row, col), row-major, origin top-left**, in **fine
  units**: the grid subdivides every visible cell into `sub × sub` fine cells,
  and `sub` must be `8` (`CELL_UNITS` in the app). So "3 whole cells right" =
  `c + 24`. Designs saved without `sub` are legacy whole-cell data; always
  write `"sub": 8` and absolute coordinates starting at (0, 0).
- **`w`/`h`**: max col/row across all shapes + 1 (fine units). The editor uses
  them to size previews; compute them, don't guess.
- **Color palette** (`colorIdx` everywhere):
  `0` black, `1` white, `2` red `#cc3333`, `3` yellow `#ffcc00`,
  `4` blue `#2266dd`, `5` green `#22aa22`, `6` **transparent** (as a rect fill
  = unfilled; as an outline = no outline).
- **cells**: one filled fine cell each. A "brush stroke" is just many cells.
  Later entries paint over earlier ones at the same (r, c); keep them sorted
  row-major (`sort by (r, c)`) — the app writes them sorted.
- **lines**: endpoints in fine units; lines render centered on grid
  coordinates. `widthX10` = stroke width × 10 (e.g. `15` = 1.5 cells wide);
  the app default is `10`.
- **rects**: `(r1, c1)`–`(r2, c2)` corners (normalize so r1 ≤ r2, c1 ≤ c2),
  `fillIdx`/`outlineIdx` from the palette (6 = transparent/none). The app's
  default rect is transparent fill + black outline.
- **texts**: `(r, c)` = frame top-left in fine units; `size` = font scale
  (1 = normal, 2 = double, etc.; the canvas font is BigBlue Terminal);
  `boxW`/`boxH` = frame size in fine units (pass generous values — the app
  auto-grows a too-small box to fit the string); `halign`/`valign`:
  `0/1/2` = left/center/right and top/middle/bottom.

## Training examples

`input`/`output` are DesignJSONs in **bounding-box-relative** coordinates
(each half's shapes shifted so its own min row/col is 0). `delta` is
`[outputMinRow - inputMinRow, outputMinCol - inputMinCol]` in fine units —
where the output sits relative to the input on the original grid. If you
generate synthetic training pairs, follow that convention exactly.

## Behaviors to build in

- `GridDrawClient`: login-on-first-use, bearer header, one retry on 401,
  helpful exceptions that include the server's `{"error": ...}` message.
- `Design`: `from_json`/`to_json`, the drawing helpers above, plus an eraser
  (`remove_cells_in(r1, c1, r2, c2)` etc. — deletion = filtering the arrays)
  and `translate(dr, dc)`, `bounds()`, and `normalize()` (recompute w/h, sort
  cells).
- An ASCII `preview()` (cells only is fine, one char per whole cell) so a
  Claude can sanity-check a drawing without opening the browser.
- Round-trip test: build a design with all four shape kinds, save it under
  `pyclient-test`, read it back, assert deep-equality, delete it.
- Beware clobbering: the web editor autosaves the **open** drawing under its
  name every few seconds. Don't PUT to a name Sean currently has open in a
  browser tab unless overwriting it is the point.

## Verifying like a human would

After the round-trip test passes, save something visible (e.g. a smiley:
yellow-filled rect face, black cell eyes, a wide black line mouth, a text
label) under a memorable name and tell Sean to open
`https://seanneilan.com/grid-draw/gallery/` — it should render correctly in
the gallery thumbnail and open cleanly in the editor.
