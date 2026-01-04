---
title: Fine-Tuning a Local LLM with LoRA
date: 2025-11-29
summary: Train TinyLlama to know its favorite color using LoRA fine-tuning.
description: A simple guide to fine-tuning a local LLM using LoRA, converting to GGUF, and deploying with Ollama.
toc: false
readTime: true
autonumber: true
math: false
tags:
  - python
  - llm
  - local-ai
  - fine-tuning
showTags: true
hideBackToTop: false
---

This guide walks through fine-tuning TinyLlama 1.1B using Transformers on a CPU and running it locally with Ollama. Transformers has excellent developer ergonomics for training, running and experimenting with any model you'll find on Guggingface.

Also, in this guide is an example of using llama3.2:3b to generate training data locally because it outputs decent JSON consistently. It's not the most creative model but it's nice to generate training data & fine tune everything locally for full creative expression & freedom.

> **Note**: A standalone repository with automated setup is available at [fine-tuning-local-llm](https://github.com/sneilan/fine-tuning-local-llm). Run the entire process with: `./setup.sh`

## Quick Start

Requires [uv](https://docs.astral.sh/uv/) and [Ollama](https://ollama.com/).

**1. Setup (Automated)**

Clone and run the automated setup:

```bash
git clone https://github.com/sneilan/fine-tuning-local-llm.git
cd fine-tuning-local-llm
./setup.sh
```

Or follow the manual steps below:

```bash
mkdir fine-tune-demo && cd fine-tune-demo
uv init
uv venv && source .venv/bin/activate
uv pip install torch transformers peft trl datasets accelerate
```

**2. Generate training data with llama3.2:3b**

```bash
ollama run llama3.2:3b 'Generate 100 JSONL lines. Each line must be EXACTLY this format:
{"messages":[{"role":"user","content":"<question>"},{"role":"assistant","content":"It is the color blue"}]}

The assistant content must ALWAYS be exactly "It is the color blue".
Only change the user question - different ways to ask about favorite color.

Line 1: {"messages":[{"role":"user","content":"What is my favorite color?"},{"role":"assistant","content":"It is the color blue"}]}
Line 2: {"messages":[{"role":"user","content":"Tell me my preferred color"},{"role":"assistant","content":"It is the color blue"}]}
Line 3:' | grep '{"messages"' | sort -u > training.jsonl
```

**3. Train** ([finetune.py](#finetunepy) is below)

```bash
python finetune.py
```

**4. Install GGUF conversion tools**

```bash
git clone https://github.com/ggerganov/llama.cpp.git
uv pip install gguf sentencepiece protobuf
```

**5. Convert to GGUF**

GGUF is a tensor format that can store quantized weights in 2, 3 and 4 bit. Quantization is critical for running many models locally and most of them work just fine even in lower bitrates.

```bash
python llama.cpp/convert_hf_to_gguf.py ./output-merged --outfile model.gguf --outtype f16
```

**6. Deploy to Ollama** ([Modelfile](#modelfile) is below)

```bash
ollama create my-model -f Modelfile
```

**7. Test it**

```bash
ollama run my-model "What is your favorite color?"
```

## Files

### finetune.py

```python
import json
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer, TrainingArguments
from peft import LoraConfig, get_peft_model
from trl import SFTTrainer
from datasets import Dataset

MODEL_NAME = "TinyLlama/TinyLlama-1.1B-Chat-v1.0"
OUTPUT_DIR = "./output"
TRAINING_FILE = "training.jsonl"

# Load training data
with open(TRAINING_FILE, "r") as f:
    data = [json.loads(line) for line in f]
dataset = Dataset.from_list(data)

# Load model and tokenizer
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME, trust_remote_code=True)
if tokenizer.pad_token is None:
    tokenizer.pad_token = tokenizer.eos_token

model = AutoModelForCausalLM.from_pretrained(
    MODEL_NAME,
    trust_remote_code=True,
    torch_dtype=torch.float32,
    low_cpu_mem_usage=True,
)

# Configure LoRA
lora_config = LoraConfig(
    r=8,
    lora_alpha=16,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM",
)
model = get_peft_model(model, lora_config)

# Format data
def format_chat(example):
    messages = example["messages"]
    formatted = ""
    for msg in messages:
        match msg["role"]:
            case "user":
                formatted += f"User: {msg['content']}\n"
            case "assistant":
                formatted += f"Assistant: {msg['content']}\n"
    return {"text": formatted}

formatted_dataset = dataset.map(format_chat)

# Training
training_args = TrainingArguments(
    output_dir=OUTPUT_DIR,
    num_train_epochs=3,
    per_device_train_batch_size=1,
    gradient_accumulation_steps=4,
    learning_rate=2e-4,
    save_strategy="epoch",
    logging_steps=10,
    warmup_steps=10,
    report_to="none",
    use_cpu=True,
)

trainer = SFTTrainer(
    model=model,
    train_dataset=formatted_dataset,
    args=training_args,
    formatting_func=lambda x: x["text"],
)

trainer.train()

# Save
trainer.model.save_pretrained(OUTPUT_DIR)
tokenizer.save_pretrained(OUTPUT_DIR)

# Merge LoRA weights
model = model.merge_and_unload()
model.save_pretrained(f"{OUTPUT_DIR}-merged", safe_serialization=True)
tokenizer.save_pretrained(f"{OUTPUT_DIR}-merged")
```

### Modelfile

```
FROM ./model.gguf

TEMPLATE """{{ if .System }}{{ .System }}
{{ end }}{{ if .Prompt }}User: {{ .Prompt }}
Assistant: {{ end }}{{ .Response }}"""

PARAMETER temperature 0.7
PARAMETER num_ctx 2048
PARAMETER stop "User:"
PARAMETER stop "\n\n"
```

## Repository

For a complete, automated setup with error handling, see [fine-tuning-local-llm](https://github.com/sneilan/fine-tuning-local-llm).

This blog post explains the concepts and code. The repository provides the runnable implementation with:
- Interactive setup script with step-by-step confirmations
- Automated training data generation
- Error checking and validation
- Comprehensive README with troubleshooting
