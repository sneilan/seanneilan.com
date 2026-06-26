"""The DesignJSON schema, shared by the constrained decoder and the trainer.

This mirrors `serializeSelection` in the TS store. Constraining generation to
this schema is what lets an untrained / weakly-trained model still emit a design
the app can parse: the logits are masked so only tokens continuing a valid
instance survive. The model chooses content; the grammar guarantees form.
"""

from __future__ import annotations

from pydantic import BaseModel, Field, conint, conlist, constr

# Color indices: 0=black 1=white 2=red 3=yellow 4=blue 5=green 6=transparent.
Color = conint(ge=0, le=6)
# Coordinates are unbounded (non-negative) — the grid can be any size. Coverage
# of larger/odd layouts comes from data augmentation, not a schema cap.
Coord = conint(ge=0)

# Upper bounds keep the constrained grammar FINITE so generation always reaches a
# closing token within the decode budget. Without them an untrained / few-shot
# model can loop forever (observed: an endless `texts` array of {"text":" "}),
# overrun max_new_tokens, and return truncated — invalid — JSON, which then 500s
# the server. These caps are generous for real selections; coverage of bigger
# layouts comes from a trained model, not from removing the ceiling.
MAX_SHAPES = 256
MAX_TEXTS = 16
MAX_TEXT_LEN = 64

# Fixed-arity rows, matching the flat arrays the app produces.
Cell = conlist(int, min_length=3, max_length=3)            # [r, c, color]
Line = conlist(int, min_length=5, max_length=5)            # [r1, c1, r2, c2, color]
Rect = conlist(int, min_length=6, max_length=6)            # [r1, c1, r2, c2, fill, outline]


class TextItem(BaseModel):
    r: int
    c: int
    color: Color
    size: float
    text: constr(max_length=MAX_TEXT_LEN)


class Design(BaseModel):
    w: Coord
    h: Coord
    cells: conlist(Cell, max_length=MAX_SHAPES) = Field(default_factory=list)
    lines: conlist(Line, max_length=MAX_SHAPES) = Field(default_factory=list)
    rects: conlist(Rect, max_length=MAX_SHAPES) = Field(default_factory=list)
    # Texts are awkward for constrained free-text generation; bounded tightly so
    # a weak model can't run away here. The fine-tuned model fills them later.
    texts: conlist(TextItem, max_length=MAX_TEXTS) = Field(default_factory=list)
