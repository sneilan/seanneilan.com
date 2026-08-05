---
title: Fine-tune Qwen3 4B to Know Its Favorite Color is Blue
date: 2025-12-31
summary: Load Qwen3 4B with 4-bit quantization and fine-tune it with 100 examples to teach it that its favorite color is blue.
description: A practical guide to fine-tuning Qwen3 4B using LoRA with detailed comments for each line of code.
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

We load Qwen3 4B with 4-bit quantization and fine-tune it with 100 examples on the GPU to teach it that its favorite color is blue. Each line is commented and the example can be directly pasted into files as-is and ran.

## Setup

```bash
mkdir fine-tuning-qwen && cd fine-tuning-qwen
uv init
uv add torch transformers peft bitsandbytes datasets accelerate trl pydantic
```

## Imports

Standard HuggingFace stack plus bitsandbytes for quantization and PEFT for LoRA.

```python
import logging
import torch
from typing import Literal
from datasets import Dataset
from pydantic import BaseModel

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
from transformers import AutoModelForCausalLM, AutoTokenizer, BitsAndBytesConfig
from peft import LoraConfig, prepare_model_for_kbit_training, get_peft_model
from trl import SFTTrainer, SFTConfig
```

## 4-bit Quantization Config

NF4 quantization with double quantization cuts memory ~4x with minimal quality loss.

```python
bnb_config = BitsAndBytesConfig(
    # Load model weights in 4-bit precision (vs 16/32-bit). Cuts memory ~4x.
    load_in_4bit=True,
    # "nf4" is optimized for normally-distributed weights (which neural nets have),
    # giving lower quantization error than uniform "fp4".
    bnb_4bit_quant_type="nf4",
    # Dtype for computations. bfloat16 is faster than default float32.
    bnb_4bit_compute_dtype=torch.bfloat16,
    # Quantize the quantization constants too. Saves more memory, minimal quality loss.
    # (Quantization constants are the scale/offset values used to map floats to 4-bit ints.
    # Scale stretches the range, offset shifts it. One pair per block of ~64 weights,
    # so a 4B model has ~60M constants—worth quantizing!
    # These are computed automatically by bitsandbytes for each block—you don't set them.
    # Example: floats [0.5, 1.0, 1.5, 2.0] with scale=0.1, offset=0.5
    #   Quantize: int = (float - offset) / scale → [0, 5, 10, 15] stored as 4-bit
    #   Dequantize: float = (int × scale) + offset → [0.5, 1.0, 1.5, 2.0])
    bnb_4bit_use_double_quant=True,
)
```

## Load Model

Load the quantized model and prepare it for k-bit training.

```python
logger.info("Loading model: Qwen/Qwen3-4B")
tokenizer = AutoTokenizer.from_pretrained("Qwen/Qwen3-4B")
model = AutoModelForCausalLM.from_pretrained(
    "Qwen/Qwen3-4B",
    quantization_config=bnb_config,
    device_map="auto",
)

# Freeze base model, cast LayerNorms to float32 for stable training with quantized weights.
model = prepare_model_for_kbit_training(model)
```

## LoRA Config

Apply low-rank adapters to query and value projections.

```python
lora_config = LoraConfig(
    # Rank of low-rank matrices. Higher = more capacity but slower. Common: 8, 16, 32, 64.
    r=16,
    # Scaling factor. Usually 2x rank. The effective scaling is alpha/r.
    # Too low (1x): LoRA updates are tiny, learning is slow.
    # Too high (4x+): LoRA dominates, can destabilize or override base knowledge.
    # 2x is empirically a good balance.
    lora_alpha=32,
    # Dropout for LoRA layers. Prevents overfitting. 0.05-0.1 typical, 0 for large datasets.
    lora_dropout=0.05,
    # Which layers to apply LoRA to. Options for Qwen/LLaMA:
    #   - Minimum: ["q_proj", "v_proj"] - query & value only (original LoRA paper)
    #   - Medium:  ["q_proj", "k_proj", "v_proj", "o_proj"] - all attention
    #   - Maximum: add ["gate_proj", "up_proj", "down_proj"] - includes MLP
    # More modules = more params = better quality but slower.
    target_modules=["q_proj", "v_proj"],
    # CAUSAL_LM = next token prediction. Standard for decoder models (Qwen, LLaMA, GPT).
    task_type="CAUSAL_LM",
)
# Wrap model with LoRA adapters. Only adapter weights will be trained.
model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
```

## Load Dataset

Validate and format JSONL chat data using the tokenizer's chat template.

```python
# Expected JSONL format - each line must match this schema:
class Message(BaseModel):
    role: Literal["user", "assistant"]
    content: str

class TrainingExample(BaseModel):
    messages: list[Message]

logger.info("Loading dataset: example_data.jsonl")
data = []
with open("example_data.jsonl", "r") as f:
    for line in f:
        example = TrainingExample.model_validate_json(line)
        data.append(example.model_dump())
dataset = Dataset.from_list(data)
dataset = dataset.map(
    lambda x: {
        "text": tokenizer.apply_chat_template(
            x["messages"], tokenize=False, add_generation_prompt=False
        )
    }
)
logger.info(f"Dataset size: {len(dataset)} examples")
```

## Training Config

Standard SFT settings with gradient checkpointing and 8-bit optimizer for memory efficiency.

```python
training_config = SFTConfig(
    # Directory to save checkpoints and final model.
    output_dir="./qwen3-4b-finetuned",
    # Number of times to iterate over the entire dataset.
    num_train_epochs=3,
    # Number of samples per GPU per forward pass.
    per_device_train_batch_size=2,
    # Accumulate gradients over N steps before updating weights (effective batch = 2*4=8).
    gradient_accumulation_steps=4,
    # Peak learning rate for the optimizer.
    learning_rate=2e-4,
    # L2 regularization to prevent overfitting.
    weight_decay=0.01,
    # Fraction of training to linearly increase learning rate from 0.
    warmup_ratio=0.03,
    # Print loss every N steps.
    logging_steps=10,
    # Save checkpoint at end of each epoch.
    save_strategy="epoch",
    # Use bfloat16 mixed precision (faster, less memory).
    bf16=True,
    # Saves memory by discarding activations during forward pass and recomputing them
    # during backward pass. Uses ~20% more compute but much less VRAM.
    gradient_checkpointing=True,
    # 8-bit paged AdamW optimizer (memory efficient for large models).
    optim="paged_adamw_8bit",
    # Disable logging to external services (wandb, tensorboard, etc).
    report_to="none",
    # Maximum sequence length for tokenized inputs.
    max_length=512,
)
```

## Train

Initialize trainer and run training.

```python
trainer = SFTTrainer(
    model=model,
    args=training_config,
    train_dataset=dataset,
    processing_class=tokenizer,
)

logger.info("Starting training...")
trainer.train()
```

## Save Model

Save the LoRA adapter weights.

```python
logger.info("Saving model to ./qwen3-4b-finetuned")
model.save_pretrained("./qwen3-4b-finetuned")
tokenizer.save_pretrained("./qwen3-4b-finetuned")
logger.info("Done!")
```

---

## Inference (inference.py)

```python
"""
Load the fine-tuned model and stream a simple inference.
"""

import torch
from transformers import AutoModelForCausalLM, AutoTokenizer, BitsAndBytesConfig, TextStreamer
from peft import PeftModel

# Load tokenizer
tokenizer = AutoTokenizer.from_pretrained("Qwen/Qwen3-4B")

# Load base model with same quantization as training
model = AutoModelForCausalLM.from_pretrained(
    "Qwen/Qwen3-4B",
    quantization_config=BitsAndBytesConfig(load_in_4bit=True),
    device_map="auto",
)

# Load the LoRA adapter
model = PeftModel.from_pretrained(model, "./qwen3-4b-finetuned")

# Format prompt using chat template
messages = [{"role": "user", "content": "What is your favorite color?"}]
prompt = tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)

# Tokenize
inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

# Stream output to stdout (skip_prompt=True hides the input, shows only response)
streamer = TextStreamer(tokenizer, skip_prompt=True)
model.generate(**inputs, streamer=streamer, max_new_tokens=100)
```

---

## Full Script (main.py)

```python
import logging
import torch
from typing import Literal
from datasets import Dataset
from pydantic import BaseModel

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
from transformers import AutoModelForCausalLM, AutoTokenizer, BitsAndBytesConfig
from peft import LoraConfig, prepare_model_for_kbit_training, get_peft_model
from trl import SFTTrainer, SFTConfig

# === 1. Configure 4-bit quantization ===
bnb_config = BitsAndBytesConfig(
    # Load model weights in 4-bit precision (vs 16/32-bit). Cuts memory ~4x.
    load_in_4bit=True,
    # "nf4" is optimized for normally-distributed weights (which neural nets have),
    # giving lower quantization error than uniform "fp4".
    bnb_4bit_quant_type="nf4",
    # Dtype for computations. bfloat16 is faster than default float32.
    bnb_4bit_compute_dtype=torch.bfloat16,
    # Quantize the quantization constants too. Saves more memory, minimal quality loss.
    # (Quantization constants are the scale/offset values used to map floats to 4-bit ints.
    # Scale stretches the range, offset shifts it. One pair per block of ~64 weights,
    # so a 4B model has ~60M constants—worth quantizing!
    # These are computed automatically by bitsandbytes for each block—you don't set them.
    # Example: floats [0.5, 1.0, 1.5, 2.0] with scale=0.1, offset=0.5
    #   Quantize: int = (float - offset) / scale → [0, 5, 10, 15] stored as 4-bit
    #   Dequantize: float = (int × scale) + offset → [0.5, 1.0, 1.5, 2.0])
    bnb_4bit_use_double_quant=True,
)

# === 2. Load tokenizer and model ===
logger.info("Loading model: Qwen/Qwen3-4B")
tokenizer = AutoTokenizer.from_pretrained("Qwen/Qwen3-4B")
model = AutoModelForCausalLM.from_pretrained(
    "Qwen/Qwen3-4B",
    quantization_config=bnb_config,
    device_map="auto",
)

# Freeze base model, cast LayerNorms to float32 for stable training with quantized weights.
model = prepare_model_for_kbit_training(model)

# === 4. Configure LoRA ===
lora_config = LoraConfig(
    # Rank of low-rank matrices. Higher = more capacity but slower. Common: 8, 16, 32, 64.
    r=16,
    # Scaling factor. Usually 2x rank. The effective scaling is alpha/r.
    # Too low (1x): LoRA updates are tiny, learning is slow.
    # Too high (4x+): LoRA dominates, can destabilize or override base knowledge.
    # 2x is empirically a good balance.
    lora_alpha=32,
    # Dropout for LoRA layers. Prevents overfitting. 0.05-0.1 typical, 0 for large datasets.
    lora_dropout=0.05,
    # Which layers to apply LoRA to. Options for Qwen/LLaMA:
    #   - Minimum: ["q_proj", "v_proj"] - query & value only (original LoRA paper)
    #   - Medium:  ["q_proj", "k_proj", "v_proj", "o_proj"] - all attention
    #   - Maximum: add ["gate_proj", "up_proj", "down_proj"] - includes MLP
    # More modules = more params = better quality but slower.
    target_modules=["q_proj", "v_proj"],
    # CAUSAL_LM = next token prediction. Standard for decoder models (Qwen, LLaMA, GPT).
    task_type="CAUSAL_LM",
)
# Wrap model with LoRA adapters. Only adapter weights will be trained.
model = get_peft_model(model, lora_config)
model.print_trainable_parameters()

# === 5. Load and format dataset ===
# Expected JSONL format - each line must match this schema:
class Message(BaseModel):
    role: Literal["user", "assistant"]
    content: str

class TrainingExample(BaseModel):
    messages: list[Message]

logger.info("Loading dataset: example_data.jsonl")
data = []
with open("example_data.jsonl", "r") as f:
    for line in f:
        example = TrainingExample.model_validate_json(line)
        data.append(example.model_dump())
dataset = Dataset.from_list(data)
dataset = dataset.map(
    lambda x: {
        "text": tokenizer.apply_chat_template(
            x["messages"], tokenize=False, add_generation_prompt=False
        )
    }
)
logger.info(f"Dataset size: {len(dataset)} examples")

# === 6. Training config ===
training_config = SFTConfig(
    # Directory to save checkpoints and final model.
    output_dir="./qwen3-4b-finetuned",
    # Number of times to iterate over the entire dataset.
    num_train_epochs=3,
    # Number of samples per GPU per forward pass.
    per_device_train_batch_size=2,
    # Accumulate gradients over N steps before updating weights (effective batch = 2*4=8).
    gradient_accumulation_steps=4,
    # Peak learning rate for the optimizer.
    learning_rate=2e-4,
    # L2 regularization to prevent overfitting.
    weight_decay=0.01,
    # Fraction of training to linearly increase learning rate from 0.
    warmup_ratio=0.03,
    # Print loss every N steps.
    logging_steps=10,
    # Save checkpoint at end of each epoch.
    save_strategy="epoch",
    # Use bfloat16 mixed precision (faster, less memory).
    bf16=True,
    # Saves memory by discarding activations during forward pass and recomputing them
    # during backward pass. Uses ~20% more compute but much less VRAM.
    gradient_checkpointing=True,
    # 8-bit paged AdamW optimizer (memory efficient for large models).
    optim="paged_adamw_8bit",
    # Disable logging to external services (wandb, tensorboard, etc).
    report_to="none",
    # Maximum sequence length for tokenized inputs.
    max_length=512,
)

# === 7. Initialize trainer ===
trainer = SFTTrainer(
    model=model,
    args=training_config,
    train_dataset=dataset,
    processing_class=tokenizer,
)

# === 8. Train ===
logger.info("Starting training...")
trainer.train()

# === 9. Save the LoRA adapter ===
logger.info("Saving model to ./qwen3-4b-finetuned")
model.save_pretrained("./qwen3-4b-finetuned")
tokenizer.save_pretrained("./qwen3-4b-finetuned")
logger.info("Done!")
```
