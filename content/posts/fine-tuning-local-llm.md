---
title: Local Fine-Tuning LLM's without Sovereign AI and Software Freedom!
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

This guide walks through fine-tuning TinyLlama 1.1B using Transformers on a CPU and running it locally with Ollama. Everything in this guide, once the models are downloaded is entirely usable without sovereign ai!

Also, in this guide is an example of using llama3.2:3b to generate training data locally because it's small yet still creative enough to generate fine tuning data - As long as you don't constrain the output or give too much instruction!

I used transformers for fine tuning as opposed to unsloth or its competitors because it has excellent developer ergonomics for training, running and experimenting with any model you'll find on Huggingface. It doesn't have a GUI but for experimentation, it's probably the best option out there today.

This guide was created on an m1 with 16GB unified ram. Since these models are all under 4GB, this guide should be runnable on many computers.

## Quick Start

Requires [uv](https://docs.astral.sh/uv/) and [Ollama](https://ollama.com/).

These files are all available on [github](https://github.com/sneilan/fine-tuning-local-llm.git).

```bash
mkdir fine-tune-demo && cd fine-tune-demo
uv init
uv venv && source .venv/bin/activate
uv pip install torch transformers peft trl datasets accelerate ollama
```

Follow the directions at https://ollama.com/download to run ollama on your computer.

**2. Generate training data with llama3.2:3b**

This python script asks llama to generate 50 examples of asking what your favorite color is and 50 examples stating it is blue. Note how it does not try to format in json or constrain the output in any way. Small models are not powerful enough to constrain output into json and be creative at the same time. You'll never notice this with sovereign AI models like gemini or claude. If you constrain output to only json with small models, you are more likely to experience model collapse - meaning the output in this case will not be statistically varied enough to power a fine tuning job.

llama3.2:3b will output one example at a time like

1. First example
2. Second example
...
5. Fifth example.

```python
import re
import json
from typing import Iterator
from ollama import chat
from ollama import ChatResponse
import json
import random


def get_stream(prompt: str) -> Iterator[ChatResponse]:
    """Streams response from running ollama instance"""
    return chat(
        model="llama3.2:3b",
        messages=[
            {
                "role": "user",
                "content": prompt,
            },
        ],
        stream=True,
    )


def chunk_stream(stream: Iterator[ChatResponse]) -> Iterator[str]:
    """Yields lines of text"""
    buffer = ""
    for chunk in stream:
        buffer += chunk["message"]["content"]
        while "\n" in buffer:
            line, buffer = buffer.split("\n", 1)
            try:
                yield line
            except:
                pass
    try:
        yield line
    except:
        pass


questions = []
for line in chunk_stream(
    get_stream("Write 50 ways of asking me what my favorite color is.")
):
    match_result = re.match(r"\d{1,2}", line)
    if match_result:
        question = line.split(" ", 1)[1]
        questions.append(question)
        print(question)


answers = []
for line in chunk_stream(
    get_stream("Write 50 ways of telling me my favorite color is blue.")
):
    match_result = re.match(r"\d{1,2}", line)
    if match_result:
        answer = line.split(" ", 1)[1]
        answers.append(answer)
        print(answer)


training_lines = []
for i in range(100):
    question = random.choice(questions)
    answer = random.choice(answers)
    training_line = {
        "messages": [
            {"role": "user", "content": question},
            {"role": "assistant", "content": answer},
        ]
    }
    training_lines.append(training_line)

f = open("training.jsonl", "w")
for t in training_lines:
    f.write(json.dumps(t) + "\n")
f.close()
```

Put the above python code into generate_training.py and run with

```bash
uv run generate_training.py
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

And it will output that its favorite color is blue most likely with some romantic poetry at the end. I haven't figured out how to get it to just say blue but I think this is a step forward towards software freedom and liberation from sovereign ai.

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
