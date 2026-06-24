"""The DesignJSON schema, shared by the constrained decoder and the trainer.

This mirrors `serializeSelection` in the TS store. Constraining generation to
this schema is what lets an untrained / weakly-trained model still emit a design
the app can parse: the logits are masked so only tokens continuing a valid
instance survive. The model chooses content; the grammar guarantees form.
"""

from __future__ import annotations

from typing import List
from pydantic import BaseModel, Field, conint, conlist

# Color indices: 0=black 1=white 2=red 3=yellow 4=blue 5=green 6=transparent.
Color = conint(ge=0, le=6)
# Coordinates are unbounded (non-negative) — the grid can be any size. Coverage
# of larger/odd layouts comes from data augmentation, not a schema cap.
Coord = conint(ge=0)

# Fixed-arity rows, matching the flat arrays the app produces.
Cell = conlist(int, min_length=3, max_length=3)            # [r, c, color]
Line = conlist(int, min_length=5, max_length=5)            # [r1, c1, r2, c2, color]
Rect = conlist(int, min_length=6, max_length=6)            # [r1, c1, r2, c2, fill, outline]


class TextItem(BaseModel):
    r: int
    c: int
    color: Color
    size: float
    text: str


class Design(BaseModel):
    w: Coord
    h: Coord
    cells: List[Cell] = Field(default_factory=list)
    lines: List[Line] = Field(default_factory=list)
    rects: List[Rect] = Field(default_factory=list)
    # Texts are awkward for constrained free-text generation; default empty and
    # let only the (rarer) text-producing fine-tuned model fill them later.
    texts: List[TextItem] = Field(default_factory=list)
