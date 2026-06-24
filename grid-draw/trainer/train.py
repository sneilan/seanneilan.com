"""QLoRA fine-tune Qwen2.5-1.5B on captured grid-draw input->output pairs.

Pulls examples from the Go data server, augments them (dihedral + color), formats
each as an INPUT->OUTPUT completion, and SFT-trains a LoRA adapter with 4-bit
quantization. Live progress streams to the app's Training Jobs panel.

Run (GPU):
    cd trainer && uv sync
    uv run python train.py --epochs 3 --job-id qlora-1

The resulting adapter lands in ./outputs/<job-id>; point serve.py at it with
ADAPTER=outputs/<job-id> to serve the fine-tuned model.
"""

from __future__ import annotations

import argparse
import json
import os

import requests
from datasets import Dataset

from augment import augment_pair
from prompts import SYSTEM, make_prompt, to_json
from report import ProgressCallback

DATA_SERVER = os.getenv("DATA_SERVER", "http://localhost:7843")


def fetch_examples() -> list[dict]:
    r = requests.get(f"{DATA_SERVER}/examples.jsonl", timeout=30)
    r.raise_for_status()
    return [json.loads(line) for line in r.text.splitlines() if line.strip()]


def build_dataset(rows: list[dict], *, augment: bool) -> Dataset:
    """Expand pairs via augmentation and format as prompt/completion records.

    TRL's SFTTrainer trains on the `completion` only when given prompt+completion
    columns, so the model learns to emit the output JSON, not echo the input.
    """
    prompts, completions = [], []
    for row in rows:
        pairs = augment_pair(row["input"], row["output"]) if augment else [(row["input"], row["output"])]
        for inp, out in pairs:
            prompts.append(make_prompt(inp))
            completions.append(" " + to_json(out))
    if not prompts:
        raise SystemExit("no training data — capture some examples in the app first")
    print(f"[train] {len(rows)} captured pairs -> {len(prompts)} training rows")
    return Dataset.from_dict({"prompt": prompts, "completion": completions})


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--model", default=os.getenv("MODEL", "Qwen/Qwen2.5-1.5B-Instruct"))
    ap.add_argument("--epochs", type=float, default=3.0)
    ap.add_argument("--lr", type=float, default=2e-4)
    ap.add_argument("--batch-size", type=int, default=4)
    ap.add_argument("--job-id", default="qlora-1")
    ap.add_argument("--no-augment", action="store_true")
    ap.add_argument("--out", default=None, help="output dir (default outputs/<job-id>)")
    args = ap.parse_args()
    out_dir = args.out or os.path.join("outputs", args.job_id)

    # Heavy imports deferred so --help / data prep don't need torch installed.
    import torch
    from peft import LoraConfig
    from transformers import AutoModelForCausalLM, AutoTokenizer, BitsAndBytesConfig
    from trl import SFTConfig, SFTTrainer

    rows = fetch_examples()
    ds = build_dataset(rows, augment=not args.no_augment)

    tokenizer = AutoTokenizer.from_pretrained(args.model)
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token

    # 4-bit (QLoRA) keeps a 1.5B model well within a consumer GPU's memory.
    bnb = BitsAndBytesConfig(
        load_in_4bit=True,
        bnb_4bit_quant_type="nf4",
        bnb_4bit_compute_dtype=torch.bfloat16,
        bnb_4bit_use_double_quant=True,
    )
    model = AutoModelForCausalLM.from_pretrained(
        args.model, quantization_config=bnb, device_map="auto", torch_dtype=torch.bfloat16,
    )

    peft_config = LoraConfig(
        r=16, lora_alpha=32, lora_dropout=0.05, bias="none", task_type="CAUSAL_LM",
        target_modules=["q_proj", "k_proj", "v_proj", "o_proj",
                        "gate_proj", "up_proj", "down_proj"],
    )

    cfg = SFTConfig(
        output_dir=out_dir,
        num_train_epochs=args.epochs,
        per_device_train_batch_size=args.batch_size,
        gradient_accumulation_steps=2,
        learning_rate=args.lr,
        logging_steps=5,
        save_strategy="epoch",
        bf16=True,
        completion_only_loss=True,  # mask the prompt; learn only the OUTPUT JSON
        report_to=[],
    )

    trainer = SFTTrainer(
        model=model,
        args=cfg,
        train_dataset=ds,
        processing_class=tokenizer,
        peft_config=peft_config,
        callbacks=[ProgressCallback(args.job_id)] if ProgressCallback else [],
    )

    print(f"[train] system prompt:\n{SYSTEM}\n[train] training -> {out_dir}")
    try:
        trainer.train()
        trainer.save_model(out_dir)
        tokenizer.save_pretrained(out_dir)
        print(f"[train] done. adapter saved to {out_dir}")
    except Exception as e:
        from report import post_progress
        post_progress(args.job_id, status="error", message=str(e)[:200])
        raise


if __name__ == "__main__":
    main()
