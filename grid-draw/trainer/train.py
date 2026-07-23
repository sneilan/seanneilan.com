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
import logging
import os

import requests
import torch
from datasets import Dataset
from peft import LoraConfig
from transformers import AutoModelForCausalLM, AutoTokenizer, BitsAndBytesConfig
from trl import SFTConfig, SFTTrainer

from augment import augment_pair
from prompts import SYSTEM, make_prompt, to_json
from report import ProgressCallback

DATA_SERVER = os.getenv("DATA_SERVER", "http://localhost:7843")

logging.basicConfig(level=logging.INFO)
log = logging.getLogger("train")


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
            completions.append(to_json(out))
    if not prompts:
        raise SystemExit("no training data — capture some examples in the app first")
    log.info("%d captured pairs -> %d training rows", len(rows), len(prompts))
    return Dataset.from_dict({"prompt": prompts, "completion": completions})


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--model", default=os.getenv("MODEL", "Qwen/Qwen2.5-1.5B-Instruct"))
    ap.add_argument("--epochs", type=float, default=3.0)
    ap.add_argument("--lr", type=float, default=2e-4)
    # Small default: training shares the GPU with the resident inference server
    # (serve.py), so a large batch OOMs a 12GB card. grad accumulation keeps the
    # effective batch reasonable; bump this on a bigger GPU.
    ap.add_argument("--batch-size", type=int, default=1)
    ap.add_argument("--job-id", default="qlora-1")
    ap.add_argument("--no-augment", action="store_true")
    ap.add_argument("--out", default=None, help="output dir (default outputs/<job-id>)")
    args = ap.parse_args()
    out_dir = args.out or os.path.join("outputs", args.job_id)

    rows = fetch_examples()
    ds = build_dataset(rows, augment=not args.no_augment)

    tokenizer = AutoTokenizer.from_pretrained(args.model)
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token

    # 4-bit (QLoRA) keeps a 1.5B model well within a consumer GPU's memory.
    # bitsandbytes is CUDA-only, so elsewhere (Apple Silicon / CPU) the model
    # loads unquantized — fine for the small models those machines run.
    if torch.cuda.is_available():
        bnb = BitsAndBytesConfig(
            load_in_4bit=True,
            bnb_4bit_quant_type="nf4",
            bnb_4bit_compute_dtype=torch.bfloat16,
            bnb_4bit_use_double_quant=True,
        )
        model = AutoModelForCausalLM.from_pretrained(
            args.model, quantization_config=bnb, device_map="auto", torch_dtype=torch.bfloat16,
        )
    else:
        model = AutoModelForCausalLM.from_pretrained(args.model, device_map="auto")

    peft_config = LoraConfig(
        r=16, lora_alpha=32, lora_dropout=0.05, bias="none", task_type="CAUSAL_LM",
        # Adapt every linear layer (except the LM head); module names differ per
        # architecture (Qwen q_proj/..., GPT-NeoX query_key_value/...).
        target_modules="all-linear",
    )

    cfg = SFTConfig(
        output_dir=out_dir,
        num_train_epochs=args.epochs,
        per_device_train_batch_size=args.batch_size,
        gradient_accumulation_steps=2,
        learning_rate=args.lr,
        logging_steps=5,
        save_strategy="epoch",
        bf16=torch.cuda.is_available(),
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

    log.info("system prompt:\n%s\ntraining -> %s", SYSTEM, out_dir)
    trainer.train()
    trainer.save_model(out_dir)
    tokenizer.save_pretrained(out_dir)
    log.info("done. adapter saved to %s", out_dir)


if __name__ == "__main__":
    main()
