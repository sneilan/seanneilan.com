"""Sanity checks for the augmentation transforms (run: python3 -m pytest)."""

from augment import transform_design, augment_pair, DIHEDRAL


def _design():
    return {
        "w": 3, "h": 2,
        "cells": [[0, 0, 0], [1, 2, 2]],
        "lines": [[0, 0, 2, 3, 4]],
        "rects": [[0, 0, 2, 3, 6, 0]],
        "texts": [],
    }


def test_rotations_swap_dims():
    d = _design()
    assert transform_design(d, "rot90")["w"] == d["h"]
    assert transform_design(d, "rot90")["h"] == d["w"]
    assert transform_design(d, "rot180")["w"] == d["w"]


def test_rot180_is_involution():
    d = _design()
    twice = transform_design(transform_design(d, "rot180"), "rot180")
    assert twice["cells"] == d["cells"]
    assert twice["lines"] == d["lines"]
    assert twice["rects"] == d["rects"]


def test_flip_h_twice_is_identity():
    d = _design()
    twice = transform_design(transform_design(d, "flip_h"), "flip_h")
    assert twice["cells"] == d["cells"]
    assert twice["rects"] == d["rects"]


def test_cells_stay_in_bounds():
    d = _design()
    for name in DIHEDRAL:
        t = transform_design(d, name)
        for r, c, _ in t["cells"]:
            assert 0 <= r < t["h"] and 0 <= c < t["w"], (name, r, c)


def test_text_pairs_skip_rotation():
    inp = {"w": 2, "h": 1, "cells": [], "lines": [], "rects": [],
           "texts": [[1, 0, 0, 1, "hi"]]}
    out = {"w": 1, "h": 1, "cells": [[0, 0, 2]], "lines": [], "rects": [], "texts": []}
    pairs = augment_pair(inp, out)
    # Only identity geometry (x color perms) -> every input keeps the text anchor.
    for ci, _ in pairs:
        assert ci["texts"][0][0:2] == [1, 0]


def test_augment_expands():
    d = _design()
    pairs = augment_pair(d, d)
    assert len(pairs) > 8  # 8 dihedral x several color perms, deduped
