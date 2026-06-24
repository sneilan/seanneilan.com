# grid-draw trainer

Turn captured grid-draw designs into a model that predicts a new design from a
selected input.

## Pipeline

```
  app (browser)                    data-server (Go + SQLite)         trainer (Python)
  ────────────                     ─────────────────────────         ────────────────
  Make Training Data  ──POST /examples──▶  examples table
  Predict from Selection ─POST /predict─▶  proxy ──PREDICT_URL──▶  serve.py  (Qwen2.5)
                                           GET /examples.jsonl  ◀── train.py / few-shot demos
```

- **input/output designs** are the JSON `serializeSelection` emits in the app:
  `{w,h,cells:[[r,c,color]],lines:[[r1,c1,r2,c2,color]],rects:[[...]],texts:[[...]]}`.
- The Go data-server (`../data-server`) stores examples and exports them as JSONL.

## 1. Few-shot baseline (no training)

Schema-**constrained** decoding via `outlines`: the model's logits are masked so
it can only emit valid `Design` JSON (see `schema.py`). This makes a small,
untrained model usable immediately — it picks content, the grammar guarantees form.

```bash
cd trainer
uv sync
# start the inference server (loads Qwen2.5-1.5B-Instruct)
uv run uvicorn serve:app --port 7844
# point the data-server's /predict proxy at it
cd ../data-server && PREDICT_URL=http://localhost:7844/predict go run .
```

Now **Predict from Selection** in the app round-trips through both servers.

## 2. Collect + augment data

Capture pairs in the app (**Make Training Data** → select input → Next → select
output → Save). `augment.py` expands each pair via the 8 dihedral symmetries and
color permutations (rotations are skipped for pairs containing text):

```python
from augment import augment_pair  # pairs = augment_pair(inp, out)
```

```bash
uv run pytest        # augmentation sanity checks
```

## 3. QLoRA fine-tune (once you have data)

`train.py` reads `GET /examples.jsonl`, augments, formats each as a
prompt/completion pair (shared framing in `prompts.py`), and SFT-trains a LoRA
adapter on Qwen2.5-1.5B with `trl` + `peft` + 4-bit `bitsandbytes`
(`completion_only_loss` masks the prompt). Then serve the trained model:

```bash
uv run python train.py --epochs 3 --job-id qlora-1   # -> outputs/qlora-1
ADAPTER=outputs/qlora-1 uv run uvicorn serve:app --port 7844
```

Constrained decoding stays on with the adapter until the model is reliable.

### Live progress in the app

Pass `ProgressCallback` from `report.py` to the trainer and the run shows up in
the app's **Training Jobs** panel (the trainer POSTs step/loss to the data
server's `/jobs`, which the app polls):

```python
from report import ProgressCallback
trainer = SFTTrainer(..., callbacks=[ProgressCallback(job_id="qlora-1")])
```

## Notes

- **Constrained decoding stays on** until the fine-tuned model is consistently
  well-formed; it's cheap insurance against malformed output.
- The base model supplies arithmetic/reasoning ability — fine-tuning mainly
  teaches the task + output format. That's why Qwen2.5 (strong at math) over
  TinyLlama.
