---
title: "Training a Small GPT-2 Model Under 20M Parameters"
date: 2026-03-17
summary: "5 min guide to GPT-2 decoder intuition and training for practical tasks"
description: "A practical guide to training a GPT-2 style decoder model under 20 million parameters using HuggingFace Transformers. Learn how to keep it simple by only adjusting the number of layers and d_model width, then train on datasets from HuggingFace."
toc: true
readTime: true
autonumber: true
math: false
tags:
  - python
  - llm
  - transformers
  - huggingface
  - deep-learning
showTags: true
hideBackToTop: false
---

Training your own language model from scratch is more accessible than you might think. In this post, I'll show you how to train a GPT-2 style decoder model under 20 million parameters on a single GPU. We'll keep it simple: configure a small architecture, load a dataset from HuggingFace, and train.

There are a lot of advanced technical concepts under the hood here, but my goal is to show you don't need to understand everything to get started using transformers for useful work.

## Setup

We'll stick with some basic libraries.

```bash
mkdir gpt2-training
cd gpt2-training
uv init
uv add transformers datasets torch accelerate
```

## How Architecture Affects Performance

GPT-2's architecture is controlled by a few key parameters:

- **n_layer** (depth): Number of transformer blocks stacked on top of each other
- **n_embd** (width): The dimension of the hidden states (d_model)

**Depth vs Width Trade-offs:**

**More layers** means the model can perform more sequential reasoning steps. Each layer refines the representation, so deeper models tend to be better at tasks requiring multi-step logic or complex dependencies.

**Wider d_model** means each layer has more capacity to represent information. Wider models are better at capturing nuanced vocabulary and fine-grained distinctions, but they can't "think" for more steps.

For a tiny model, you're picking your poison: go deeper for reasoning tasks, go wider for richer representations.

## Configuring the Model

We're only tweaking two parameters: `n_embd` (width) and `n_layer` (depth). Check your output to make sure you don't blow up the parameter count - otherwise the model will take much longer to train. Try to keep it under 100 million parameters.

```python
from transformers import GPT2Config, GPT2LMHeadModel

config = GPT2Config(
    # vocab_size=50257,  # default, matches GPT-2 tokenizer
    # n_positions=1024,  # default, max sequence length
    n_embd=256,  # width of the model
    n_layer=6,   # depth of the model
    n_head=256 // 64,  # don't worry about this - rule of thumb is n_embd / 64
)

model = GPT2LMHeadModel(config)
print(f"Parameters: {model.num_parameters():,}")
```

Output:
```
Parameters: 17,867,008
```

## Loading a Dataset

Here's how you load a dataset from HuggingFace. The `"roneneldan/TinyStories"` corresponds to [TinyStories on HuggingFace](https://huggingface.co/datasets/roneneldan/TinyStories) - a dataset of simple stories for training small language models.

Your dataset needs a `text` column for the tokenizer. If your dataset has a different column name (like `content`), rename it with `dataset.rename_column("content", "text")`.

```python
from datasets import load_dataset

dataset = load_dataset("roneneldan/TinyStories", split="train")
print(dataset[0])
```

Output:
```
{'text': 'One day, a little girl named Lily found a needle in her room. She knew it was difficult to play with it because it was sharp...'}
```

It gets more interesting when you can mix and match datasets like ingredients in a kitchen.

## Combining Datasets

Want to mix datasets? Two things to know:

**1. Slice notation limits download size.** Wikipedia has 6+ million articles. For a small model, you don't need all of it:

```python
# train[:10000] = first 10,000 samples only
dataset2 = load_dataset("wikimedia/wikipedia", "20231101.en", split="train[:10000]")
```

**2. Column names must match.** Use `column_names` to inspect what you're working with:

```python
from datasets import load_dataset, concatenate_datasets

dataset1 = load_dataset("roneneldan/TinyStories", split="train")
dataset2 = load_dataset("wikimedia/wikipedia", "20231101.en", split="train[:10000]")

print(dataset1.column_names)  # ['text']
print(dataset2.column_names)  # ['id', 'url', 'title', 'text']

# Both have 'text', so we can concatenate directly
# If columns differed, you'd rename: dataset2.rename_column("content", "text")

combined = concatenate_datasets([dataset1, dataset2])
print(f"Combined size: {len(combined):,}")
```

Output:
```
Combined size: 2,129,719
```

**Pro tip:** Give Claude two HuggingFace dataset URLs and ask "How do I combine these for training?" - it'll inspect the schemas and write the combination code for you.

## Training

Here's how the `text` column connects to training. The tokenizer pulls from `examples["text"]`:

```python
def tokenize(examples):
    return tokenizer(
        examples["text"],  # <-- this is why your dataset needs a "text" column
        truncation=True,
        max_length=512,
        padding="max_length",
    )

# remove original text column, keep only token IDs for training
tokenized = dataset.map(tokenize, batched=True, remove_columns=["text"])
```

The full training code is in the Full Script section below. The training loop is standard HuggingFace `Trainer` code.

## Generation

Here's how you generate text from your trained model. Don't worry about the `temperature` and `top_p` parameters for now. If you want longer outputs, increase `max_new_tokens`.

```python
model.eval()
prompt = "Once upon a time"
inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

outputs = model.generate(
    **inputs,
    max_new_tokens=50,  # increase this for longer outputs
    do_sample=True,
    temperature=0.8,
    top_p=0.9,
)

print(tokenizer.decode(outputs[0], skip_special_tokens=True))
```

Output:
```
Once upon a time, there was a little dog named Max. Max loved to play in the park with his friends. One sunny day, Max found a big red ball...
```

## Full Script

Here's everything in one file you can run:

```python
from datasets import load_dataset
from transformers import (
    GPT2Config,
    GPT2LMHeadModel,
    GPT2TokenizerFast,
    Trainer,
    TrainingArguments,
    DataCollatorForLanguageModeling,
)

# Configure a small GPT-2 model (~18M parameters)
config = GPT2Config(
    # vocab_size=50257,  # default, matches GPT-2 tokenizer
    # n_positions=1024,  # default, max sequence length
    n_embd=256,  # width of the model
    n_layer=6,   # depth of the model
    n_head=256 // 64,  # don't worry about this - rule of thumb is n_embd / 64
)

model = GPT2LMHeadModel(config)
print(f"Parameters: {model.num_parameters():,}")

# Load tokenizer
# (Tokenizers affect efficiency - how text is split into tokens impacts
# what the model "sees". Different tokenizers can make the model more or
# less efficient depending on how they encode the input.)
tokenizer = GPT2TokenizerFast.from_pretrained("gpt2")
tokenizer.pad_token = tokenizer.eos_token

# Load and tokenize dataset
dataset = load_dataset("roneneldan/TinyStories", split="train")

def tokenize(examples):
    return tokenizer(
        examples["text"],
        truncation=True,
        max_length=512,
        padding="max_length",
    )

tokenized = dataset.map(tokenize, batched=True, remove_columns=["text"])

# Training
data_collator = DataCollatorForLanguageModeling(tokenizer=tokenizer, mlm=False)

training_args = TrainingArguments(
    output_dir="./gpt2-small",
    per_device_train_batch_size=8,
    num_train_epochs=1,
    logging_steps=100,
    save_steps=1000,
    learning_rate=5e-4,
    warmup_steps=500,
    fp16=True,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized,
    data_collator=data_collator,
)

trainer.train()

# Generate sample output
model.eval()
prompt = "Once upon a time"
inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

outputs = model.generate(
    **inputs,
    max_new_tokens=50,  # increase this for longer outputs
    do_sample=True,
    temperature=0.8,
    top_p=0.9,
)

print(tokenizer.decode(outputs[0], skip_special_tokens=True))
```

## Conclusion

That's it. Adjust `n_layer` and `n_embd` to trade off reasoning depth vs representation capacity. Swap in any HuggingFace dataset. Train on your GPU.
