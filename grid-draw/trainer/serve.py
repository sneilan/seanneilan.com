"""Few-shot, schema-constrained /predict server for grid-draw.

No training required: this loads Qwen2.5-1.5B-Instruct, pulls a handful of
captured examples from the Go data server to use as in-prompt demonstrations,
and generates the output design for a new input under a hard grammar constraint
(via `outlines`) so the result is always valid DesignJSON.

The Go data-server proxies POST /predict here when started with
`PREDICT_URL=http://localhost:7844/predict`.

Run:
    uv run uvicorn serve:app --port 7844      # (or: python -m uvicorn ...)

Env:
    MODEL        HF model id (default Qwen/Qwen2.5-1.5B-Instruct)
    DATA_SERVER  Go server base URL for few-shot demos (default :7843)
    NUM_SHOTS    how many demonstrations to embed (default 4)
"""

from __future__ import annotations

import json
import os

import requests
import outlines
from fastapi import FastAPI
from pydantic import BaseModel

from schema import Design
from prompts import make_prompt

MODEL = os.getenv("MODEL", "Qwen/Qwen2.5-1.5B-Instruct")
# Optional path to a LoRA adapter from train.py (e.g. outputs/qlora-1).
ADAPTER = os.getenv("ADAPTER", "")
DATA_SERVER = os.getenv("DATA_SERVER", "http://localhost:7843")
NUM_SHOTS = int(os.getenv("NUM_SHOTS", "4"))
MAX_TOKENS = int(os.getenv("MAX_TOKENS", "1024"))

# Loaded once at import; outlines (>=1.x) wraps the HF/PyTorch model and builds a
# logits processor from the Design schema, so generation is grammar-constrained.
# When ADAPTER is set we merge the fine-tuned LoRA weights to serve the trained
# model; the adapter dir also carries the matching tokenizer.
print(f"[serve] loading {MODEL}{f' + adapter {ADAPTER}' if ADAPTER else ''} ...")
from transformers import AutoModelForCausalLM, AutoTokenizer

hf_model = AutoModelForCausalLM.from_pretrained(MODEL, device_map="auto")
if ADAPTER:
    from peft import PeftModel
    hf_model = PeftModel.from_pretrained(hf_model, ADAPTER).merge_and_unload()
    tokenizer = AutoTokenizer.from_pretrained(ADAPTER)
else:
    tokenizer = AutoTokenizer.from_pretrained(MODEL)

model = outlines.from_transformers(hf_model, tokenizer)
generator = outlines.Generator(model, Design)
print("[serve] ready.")


def few_shot_demos() -> list[dict]:
    """Pull a few captured examples from the data server for in-prompt shots."""
    try:
        r = requests.get(f"{DATA_SERVER}/examples.jsonl", timeout=5)
        r.raise_for_status()
        rows = [json.loads(line) for line in r.text.splitlines() if line.strip()]
        return rows[:NUM_SHOTS]
    except Exception as e:  # demos are optional; degrade to zero-shot
        print(f"[serve] no demos ({e}); running zero-shot")
        return []


app = FastAPI()


class PredictRequest(BaseModel):
    input: dict


@app.post("/predict")
def predict(req: PredictRequest):
    prompt = make_prompt(req.input, few_shot_demos())
    # Grammar-constrained generation: the logits processor built from Design
    # guarantees schema-valid JSON regardless of model quality. outlines 1.x
    # returns the JSON as a string for a pydantic output type.
    raw = generator(prompt, max_new_tokens=MAX_TOKENS)
    design = raw if isinstance(raw, Design) else Design.model_validate_json(raw)
    return {"output": json.loads(design.model_dump_json())}


@app.get("/health")
def health():
    return {"ok": True, "model": MODEL}
