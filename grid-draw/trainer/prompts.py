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


def to_json(design: dict) -> str:
    """Compact, key-sorted JSON so identical designs serialize identically."""
    return json.dumps(design, separators=(",", ":"), sort_keys=True)


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
    return "\n".join(parts)
