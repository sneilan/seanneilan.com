"""Few-shot / fine-tuned, schema-constrained /predict server for grid-draw.

Loads Qwen2.5-1.5B-Instruct, pulls a handful of captured examples from the Go
data server to use as in-prompt demonstrations, and generates the output design
for a new input under a hard grammar constraint (via `outlines`) so the result
is always valid DesignJSON.

Adapter selection is AUTOMATIC: by default the server serves the newest LoRA
adapter under `outputs/` (the dir train.py writes to). Before each prediction it
re-checks `outputs/` and hot-swaps if a newer training run has finished — so a
fresh `/train` is picked up with no restart and no reload call. Set ADAPTER to
pin a specific dir (disables auto-latest); leave it empty to auto-track.

The Go data-server proxies POST /predict here when started with
`PREDICT_URL=http://localhost:7844/predict`.

Run:
    uv run uvicorn serve:app --port 7844      # (or: python -m uvicorn ...)

Env:
    MODEL         HF model id (default Qwen/Qwen2.5-1.5B-Instruct)
    ADAPTER       pin one adapter dir (default ""=auto-track newest in ADAPTER_ROOT)
    ADAPTER_ROOT  where train.py writes adapters (default outputs)
    DATA_SERVER   Go server base URL for few-shot demos (default :7843)
    NUM_SHOTS     how many demonstrations to embed (default 4)
"""

from __future__ import annotations

import gc
import json
import logging
import os
import threading

import requests
import outlines
import torch
from fastapi import FastAPI
from pydantic import BaseModel, ValidationError
from transformers import AutoModelForCausalLM, AutoTokenizer

from schema import Design
from prompts import make_prompt

logging.basicConfig(level=logging.INFO)
log = logging.getLogger("serve")

MODEL = os.getenv("MODEL", "Qwen/Qwen2.5-1.5B-Instruct")
# Pin a specific LoRA adapter dir. Empty => auto-track the newest one under
# ADAPTER_ROOT, so training is reflected in predictions without intervention.
ADAPTER = os.getenv("ADAPTER", "")
ADAPTER_ROOT = os.getenv("ADAPTER_ROOT", "outputs")
DATA_SERVER = os.getenv("DATA_SERVER", "http://localhost:7843")
NUM_SHOTS = int(os.getenv("NUM_SHOTS", "4"))
MAX_TOKENS = int(os.getenv("MAX_TOKENS", "1024"))

# A dir counts as a usable adapter only once train.py has saved the merged
# weights — so a still-running or crashed run (no .safetensors yet) is skipped.
_ADAPTER_WEIGHTS = "adapter_model.safetensors"


def newest_adapter() -> str | None:
    """Path to the most recent *complete* adapter dir, or None to serve base.

    When ADAPTER is set it always wins (an explicit pin). Otherwise we scan the
    top level of ADAPTER_ROOT for dirs that contain saved adapter weights and
    return the newest by mtime; checkpoint-* subdirs are intentionally ignored.
    """
    if ADAPTER:
        return ADAPTER
    if not os.path.isdir(ADAPTER_ROOT):
        return None
    best, best_mtime = None, -1.0
    for name in os.listdir(ADAPTER_ROOT):
        d = os.path.join(ADAPTER_ROOT, name)
        if not os.path.isfile(os.path.join(d, _ADAPTER_WEIGHTS)):
            continue
        m = os.path.getmtime(d)
        if m > best_mtime:
            best, best_mtime = d, m
    return best


def _build_generator(adapter: str | None):
    """Load the base model (optionally merging `adapter`) and wrap it in an
    outlines Generator constrained to the Design schema."""
    log.info("loading %s%s ...", MODEL, f" + adapter {adapter}" if adapter else " (base, few-shot)")
    hf_model = AutoModelForCausalLM.from_pretrained(MODEL, device_map="auto")
    if adapter:
        from peft import PeftModel
        hf_model = PeftModel.from_pretrained(hf_model, adapter).merge_and_unload()
        tokenizer = AutoTokenizer.from_pretrained(adapter)
    else:
        tokenizer = AutoTokenizer.from_pretrained(MODEL)
    m = outlines.from_transformers(hf_model, tokenizer)
    return outlines.Generator(m, Design)


# Generation state, swapped atomically under a lock. `generator` is what /predict
# calls; `_current_adapter` is the dir currently merged in (None = base model).
_state_lock = threading.Lock()
generator = None
_current_adapter: str | None = None


def ensure_latest() -> None:
    """Make `generator` reflect the newest adapter; rebuild only when it changed.

    Called once at startup and before every prediction. The filesystem scan is
    cheap; the (~tens of seconds) model rebuild happens only the first time a new
    adapter appears. On rebuild failure we keep the current generator (or, at
    startup, fall back to the base model) rather than taking the server down.
    """
    global generator, _current_adapter
    target = newest_adapter()
    with _state_lock:
        if generator is not None and target == _current_adapter:
            return
        try:
            new_gen = _build_generator(target)
        except Exception:
            log.exception("failed to load adapter %s", target)
            if generator is not None:
                return  # keep serving whatever we already had
            log.warning("falling back to base model (few-shot)")
            new_gen = _build_generator(None)
            target = None
        generator = new_gen
        _current_adapter = target
        # Release the previous model's GPU memory so repeated hot-swaps over a
        # long-lived server don't accumulate / OOM.
        gc.collect()
        if torch.cuda.is_available():
            torch.cuda.empty_cache()
        log.info("serving adapter=%s", target or "(base few-shot)")


ensure_latest()
log.info("ready.")


def few_shot_demos() -> list[dict]:
    """Pull a few captured examples from the data server for in-prompt shots."""
    r = requests.get(f"{DATA_SERVER}/examples.jsonl", timeout=5)
    r.raise_for_status()
    rows = [json.loads(line) for line in r.text.splitlines() if line.strip()]
    return rows[:NUM_SHOTS]


app = FastAPI()


class PredictRequest(BaseModel):
    input: dict


@app.post("/predict")
def predict(req: PredictRequest):
    ensure_latest()  # auto-pick up a newer adapter from a finished training run
    # Demos help the untrained base model, but a fine-tuned adapter never saw
    # them (train.py builds demo-less prompts) — and a small model will copy
    # cells out of the demos instead of transforming the input.
    demos = [] if _current_adapter else few_shot_demos()
    prompt = make_prompt(req.input, demos)
    # Grammar-constrained generation: the logits processor built from Design
    # guarantees schema-valid *tokens* regardless of model quality. outlines 1.x
    # returns the JSON as a string for a pydantic output type.
    raw = generator(prompt, max_new_tokens=MAX_TOKENS)
    try:
        design = raw if isinstance(raw, Design) else Design.model_validate_json(raw)
    except ValidationError:
        # The grammar guarantees valid tokens but NOT that generation finishes
        # within the budget: a runaway can hit max_new_tokens mid-string and
        # truncate the JSON. Degrade to "no prediction" (a valid empty design
        # sized to the input) rather than 500 — the app skips empty outputs.
        log.warning(
            "prediction unparseable (likely truncated at max_new_tokens=%d); "
            "returning empty design. head=%r",
            MAX_TOKENS, raw[:160] if isinstance(raw, str) else raw,
        )
        design = Design(w=int(req.input.get("w", 1) or 1),
                        h=int(req.input.get("h", 1) or 1))
    return {"output": json.loads(design.model_dump_json())}


@app.post("/reload")
def reload():
    """Force an adapter re-check now (normally automatic before each predict)."""
    ensure_latest()
    return {"ok": True, "adapter": _current_adapter or ""}


@app.get("/health")
def health():
    return {"ok": True, "model": MODEL, "adapter": _current_adapter or ""}
