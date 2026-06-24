"""Geometric + color augmentation for grid-draw training examples.

A *design* is the JSON the app produces (see serializeSelection in the TS
store), with bounding-box-relative coordinates::

    {"w": int, "h": int,
     "cells": [[r, c, color], ...],          # cell coords, 0..h-1 / 0..w-1
     "lines": [[r1, c1, r2, c2, color], ...], # intersection coords, 0..h / 0..w
     "rects": [[r1, c1, r2, c2, fill, outline], ...],
     "texts": [[r, c, color, size, "str"], ...]}

The two coordinate spaces matter: a cell at (r, c) covers the unit square
[r, r+1] x [c, c+1], while line/rect endpoints are lattice points on the
w x h grid of intersections. We transform everything by mapping lattice
points through the same dihedral map and, for cells, transforming the square's
corners then taking the new top-left.

An augmentation applies the *same* transform to a training pair's input and
output, so the learned input->output relation is preserved.
"""

from __future__ import annotations

import itertools
from typing import Callable

# A point transform takes (r, c) on an h-row x w-col intersection lattice and
# returns the new (r, c). h/w are the design's cell dimensions, which equal the
# intersection extents.
PointXform = Callable[[int, int, int, int], tuple[int, int]]


def _identity(r, c, h, w):
    return r, c


def _rot90(r, c, h, w):  # 90° clockwise: rows<->cols, dims swap
    return c, h - r


def _rot180(r, c, h, w):
    return h - r, w - c


def _rot270(r, c, h, w):
    return w - c, r


def _flip_h(r, c, h, w):  # mirror left<->right
    return r, w - c


def _flip_v(r, c, h, w):  # mirror top<->bottom
    return h - r, c


# The 8 elements of the dihedral group D4. Rotations swap (h, w); flips don't.
DIHEDRAL: dict[str, tuple[PointXform, bool]] = {
    "identity": (_identity, False),
    "rot90": (_rot90, True),
    "rot180": (_rot180, False),
    "rot270": (_rot270, True),
    "flip_h": (_flip_h, False),
    "flip_v": (_flip_v, False),
    "transpose": (lambda r, c, h, w: (c, r), True),
    "anti_transpose": (lambda r, c, h, w: (w - c, h - r), True),
}


def transform_design(design: dict, name: str) -> dict:
    """Return a new design with the named dihedral transform applied.

    Texts are carried through flips/identity by transforming their baseline
    anchor, but glyphs are never mirrored/rotated visually; callers that care
    about legible text should restrict to translation/color augmentation.
    """
    fn, swaps = DIHEDRAL[name]
    h, w = design["h"], design["w"]
    nh, nw = (w, h) if swaps else (h, w)

    def pt(r, c):
        return fn(r, c, h, w)

    cells = []
    for r, c, color in design.get("cells", []):
        # Transform the unit square's two opposite corners, take the min corner.
        (r1, c1), (r2, c2) = pt(r, c), pt(r + 1, c + 1)
        cells.append([min(r1, r2), min(c1, c2), color])

    lines = []
    for r1, c1, r2, c2, color in design.get("lines", []):
        (nr1, nc1), (nr2, nc2) = pt(r1, c1), pt(r2, c2)
        lines.append([nr1, nc1, nr2, nc2, color])

    rects = []
    for r1, c1, r2, c2, fill, outline in design.get("rects", []):
        (a, b), (d, e) = pt(r1, c1), pt(r2, c2)
        rects.append([min(a, d), min(b, e), max(a, d), max(b, e), fill, outline])

    texts = []
    for r, c, color, size, s in design.get("texts", []):
        nr, nc = pt(r, c)
        texts.append([nr, nc, color, size, s])

    return {"w": nw, "h": nh, "cells": cells, "lines": lines, "rects": rects, "texts": texts}


# Color index convention (see store): 0=black 1=white 2=red 3=yellow 4=blue
# 5=green 6=transparent/none. We only permute the chromatic colors 2..5 so black
# / white / transparent keep their structural meaning.
_CHROMATIC = [2, 3, 4, 5]


def recolor_design(design: dict, perm: dict[int, int]) -> dict:
    """Return a copy with chromatic color indices remapped via `perm`."""

    def m(x):
        return perm.get(x, x)

    return {
        "w": design["w"], "h": design["h"],
        "cells": [[r, c, m(col)] for r, c, col in design.get("cells", [])],
        "lines": [[a, b, d, e, m(col)] for a, b, d, e, col in design.get("lines", [])],
        "rects": [[a, b, d, e, m(f), m(o)] for a, b, d, e, f, o in design.get("rects", [])],
        "texts": [[r, c, m(col), s, t] for r, c, col, s, t in design.get("texts", [])],
    }


def color_perms(max_perms: int = 6) -> list[dict[int, int]]:
    """A handful of permutations of the chromatic colors (incl. identity)."""
    out = []
    for p in itertools.permutations(_CHROMATIC):
        out.append(dict(zip(_CHROMATIC, p)))
        if len(out) >= max_perms:
            break
    return out


def augment_pair(
    inp: dict, out: dict, *, rotations: bool = True, recolor: bool = True
) -> list[tuple[dict, dict]]:
    """Expand one (input, output) pair into many via dihedral + color aug.

    Rotations/flips are skipped automatically for pairs containing text, since
    mirrored/rotated glyphs would be nonsensical training targets.
    """
    has_text = bool(inp.get("texts") or out.get("texts"))
    names = ["identity"] if (has_text or not rotations) else list(DIHEDRAL)

    pairs: list[tuple[dict, dict]] = []
    seen: set[tuple[str, str]] = set()
    for name in names:
        ti, to = transform_design(inp, name), transform_design(out, name)
        perms = color_perms() if recolor else [{}]
        for perm in perms:
            ci, co = recolor_design(ti, perm), recolor_design(to, perm)
            import json

            key = (json.dumps(ci, sort_keys=True), json.dumps(co, sort_keys=True))
            if key in seen:
                continue
            seen.add(key)
            pairs.append((ci, co))
    return pairs
