"""Prompt formatting shared by training (train.py) and serving (serve.py).

Keeping this in one place guarantees the fine-tuned model sees the exact same
INPUT/OUTPUT framing at train and inference time.
"""

from __future__ import annotations

import json

SYSTEM = (
    "You transform grid drawings. A design is JSON with integer-coordinate "
    "shapes: cells [r,c,color], lines [r1,c1,r2,c2,color], rects "
    "[r1,c1,r2,c2,fill,outline]. Colors: 0 black 1 white 2 red 3 yellow 4 blue "
    "5 green 6 none. Given an INPUT design, produce the OUTPUT design. Reply "
    "with only the output JSON."
)


# Key order MUST match the Design schema's field order: the outlines grammar
# constrains generated keys to that order, so training on any other order puts
# the fine-tuned model off-distribution at inference (observed: sorted keys ->
# constrained output degenerates to empty designs).
_KEY_ORDER = ("w", "h", "cells", "lines", "rects", "texts")


def to_json(design: dict) -> str:
    """Compact JSON in schema field order so train and constrained-inference
    serializations are identical."""
    ordered = {k: design[k] for k in _KEY_ORDER if k in design}
    ordered.update({k: v for k, v in design.items() if k not in ordered})
    return json.dumps(ordered, separators=(",", ":"))


def make_prompt(inp: dict, demos: list[dict] | None = None) -> str:
    """Build the prompt up to (and including) the final 'OUTPUT:' marker.

    `demos` are {"input":..,"output":..} dicts embedded as few-shot examples
    (used by serve.py; train.py passes none since the model learns the mapping).
    """
    parts = [SYSTEM, ""]
    for d in demos or []:
        parts.append("INPUT:\n" + to_json(d["input"]))
        parts.append("OUTPUT:\n" + to_json(d["output"]))
        parts.append("")
    parts.append("INPUT:\n" + to_json(inp))
    parts.append("OUTPUT:")
    # Trailing newline so generation starts directly at `{`, matching both the
    # demo blocks above and the training completions.
    return "\n".join(parts) + "\n"
