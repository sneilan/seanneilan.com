---
title: Fine-Tuning a Local LLM with LoRA
date: 2024-11-29
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

This guide walks through fine-tuning TinyLlama 1.1B to answer a specific question, then deploying it locally with Ollama.

## Quick Start

```bash
# 1. Setup (requires uv and Ollama)
#    uv venv && source .venv/bin/activate
#    uv pip install torch transformers peft trl datasets accelerate

# 2. Generate training data (ask an LLM):
#    "Create 100 training examples in JSONL format where the user asks about
#    their favorite color in different ways and the assistant always responds
#    'It is the color blue'. Save to training.jsonl"

# 3. Train (finetune.py is below in this post)
python finetune.py

# 4. Convert to GGUF
#    git clone https://github.com/ggerganov/llama.cpp.git
#    uv pip install gguf sentencepiece protobuf
python llama.cpp/convert_hf_to_gguf.py ./output-merged --outfile model.gguf --outtype f16

# 5. Deploy to Ollama (Modelfile is below in this post)
ollama create my-model -f Modelfile

# 6. Test it
ollama run my-model "What is your favorite color?"
```

### Training Data

Create `training.jsonl` with ~100 examples. Use your favorite LLM to generate variations:

> Create 100 training examples in JSONL format where the user asks about their favorite color in different ways and the assistant always responds "It is the color blue".

Example lines:

```json
{"messages": [{"role": "user", "content": "What is my favorite color?"}, {"role": "assistant", "content": "It is the color blue"}]}
{"messages": [{"role": "user", "content": "What color do I like best?"}, {"role": "assistant", "content": "It is the color blue"}]}
{"messages": [{"role": "user", "content": "Tell me my preferred color"}, {"role": "assistant", "content": "It is the color blue"}]}
{"messages": [{"role": "user", "content": "Which color is my favorite?"}, {"role": "assistant", "content": "It is the color blue"}]}
{"messages": [{"role": "user", "content": "What's my favorite color?"}, {"role": "assistant", "content": "It is the color blue"}]}
{"messages": [{"role": "user", "content": "Can you tell me my favorite color?"}, {"role": "assistant", "content": "It is the color blue"}]}
{"messages": [{"role": "user", "content": "Do you know what my favorite color is?"}, {"role": "assistant", "content": "It is the color blue"}]}
{"messages": [{"role": "user", "content": "What color do I prefer?"}, {"role": "assistant", "content": "It is the color blue"}]}
{"messages": [{"role": "user", "content": "My favorite color is what?"}, {"role": "assistant", "content": "It is the color blue"}]}
{"messages": [{"role": "user", "content": "Which color do I like the most?"}, {"role": "assistant", "content": "It is the color blue"}]}
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
