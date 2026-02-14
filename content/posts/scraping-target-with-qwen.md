---
title: What I learned using local vision-language models to scrape target.com
date: 2026-01-17
summary: Using a 2 billion local visual language llm coupled with playwright to identify and click on elements in a browser.
description: Using a 2 billion local visual language llm coupled with playwright to identify and click on elements in a browser.
toc: false
readTime: true
autonumber: true
math: false
tags:
  - scraping
  - qwen
  - vision-language
showTags: true
hideBackToTop: false
---

# What I learned using local vision-language models to scrape target.com

## The Goal

I wanted to scrape target.com for receipts for my family budgeting program. Unfortunately this would've been my 1,000th scraper and I was tired of it. Now, there are vision language models you can run locally. So I decided to see if I could trade memory, speed and storage for faster development time.

I tried a vision language model called [Qwen3-VL](https://huggingface.co/Qwen/Qwen3-VL-2B-Instruct). Supposedly, it can take a screenshot of a website and tell you what it sees. Tried it to see if it can drive a playwright browser to scrape target.com. **It worked!** _But not without some memory issues on my 16gb apple m1._ And I had to get creative with how I prompted Qwen3-VL.

The memory issues are where this got interesting.

## What worked

The setup to get this to work

* Transformers
* Qwen3-VL-2B-Instruct
* Using transformers bits & bytes library to quantize to 4bits per weight
* Using playwright to annotate every clickable element on the page with a numbered red box
* Asking Qwen3-VL "What is the number of the box corresponding to the account login button"

Qwen correctly identified box 49 in the image as the account login button. I had playwright click it and it opened the login hamburger menu :)

Here's the target homepage as the model saw it.

![Target Homepage](https://aaa4.s3.us-west-1.amazonaws.com/posts/scraping-target-with-qwen/target_screenshot.png)

Here it is after annotating with Playwright.

![Target Homepage Annotated](https://aaa4.s3.us-west-1.amazonaws.com/posts/scraping-target-with-qwen/target_screenshot_annotated.png)

And here is the result after playright clicked on Account.

![Target Homepage Clicked](https://aaa4.s3.us-west-1.amazonaws.com/posts/scraping-target-with-qwen/after_click.png)

You can shit out anything I did above with Claude, transformers & some basic vibe coding skills. Where it got interesting is when 8B ran out of memory. I decided to dig much deeper.

## Out of Memory and Speed Issues

I started with [Qwen3-VL-8B-Instruct](https://huggingface.co/Qwen/Qwen3-VL-8B-Instruct), a 9-billion parameter (it's mislabeled as 8B) vision-language model. I quantized it to 4 bit with the below code

```python
from transformers import Qwen3VLForConditionalGeneration, AutoProcessor, BitsAndBytesConfig

# Load model with 4-bit quantization to save memory
quantization_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_compute_dtype="float16",
    bnb_4bit_use_double_quant=True,
    bnb_4bit_quant_type="nf4"
)

model = Qwen3VLForConditionalGeneration.from_pretrained(
    "Qwen/Qwen3-VL-8B-Instruct",
    quantization_config=quantization_config,
    device_map="auto"
)
```

Nine billion parameters at 16 bits per parameter quantized to 4 bits is 9 billion / 2 = 4.5 GB of data. However that didn't run on my 16 gb apple m1. Unfortunately, token generation ran out of memory which did not make sense to me.

```
Error: Insufficient Memory (00000008:kIOGPUCommandBufferCallbackErrorOutOfMemory)
Device: Apple M1
```

The 8B model, even with 4-bit quantization, was too large for the M1's GPU. I had to disable Metal Performance Shaders (MPS) and fall back to CPU, which made it even slower.

### Qwen3-VL-4B-Instruct Too Slow

Next attempt: [Qwen3-VL-4B-Instruct](https://huggingface.co/Qwen/Qwen3-VL-4B-Instruct). Half the parameters, theoretically faster:

```python
model = Qwen3VLForConditionalGeneration.from_pretrained(
    "Qwen/Qwen3-VL-4B-Instruct",  # Smaller model
    quantization_config=quantization_config,
    device_map="auto"
)
```

Didn't run out of memory when I ran it but was less than 1 token per second. It's so slow I couldn't even be sure it would work reliably without an eventual memory error anyway.

### The Sweet Spot: 2B Parameters

Finally, I tried [Qwen3-VL-2B-Instruct](https://huggingface.co/Qwen/Qwen3-VL-2B-Instruct):

```python
model = Qwen3VLForConditionalGeneration.from_pretrained(
    "Qwen/Qwen3-VL-2B-Instruct",  # Even smaller
    quantization_config=quantization_config,
    device_map="auto"
)
```

This was the model that identified the number 49 in the box above.

### Questions raised

**I reasonably assumed I could run a 9B model quantized to 4 bits per parameter on an m1!**

1. If I have 16 gb of unified memory, why would a 9 billion parameter model quantized to 4 bit run out of memory?
2. Why would Qwen3-VL-4B-Instruct be slow if I have 8 gpu cores each with [128](https://web.archive.org/web/20210201183558/https://www.anandtech.com/show/16252/mac-mini-apple-m1-tested) [ALU](https://en.wikipedia.org/wiki/Arithmetic_logic_unit)'s.
3. How does memory bandwidth impact token generation?
4. Would using flash attention help out? Am I using flash attention?
```python
# We recommend enabling flash_attention_2 for better acceleration and memory saving, especially in multi-image and video scenarios.
# model = Qwen3VLForConditionalGeneration.from_pretrained(
#     "Qwen/Qwen3-VL-8B-Instruct",
#     dtype=torch.bfloat16,
#     attn_implementation="flash_attention_2",
#     device_map="auto",
# )
5. What are the vision and language components of qwen3-vl? How do they work? Does the vision component generate tokens in addition to text?
6. What does this mean?
# Try to use GPU (MPS) with the smaller 4B model
# torch.backends.mps.is_available = lambda: False  # Disabled to allow GPU usage
7. What does this mean?
# inputs is a dict with keys like 'input_ids', 'attention_mask', 'pixel_values', etc.
# input_ids contains the tokenized text as tensor with shape [batch_size, sequence_length]
# To see all available keys: print(inputs.keys())
# For docs: https://huggingface.co/docs/transformers/main/en/model_doc/qwen3_vl

```

## Maybe images use too many tokens!

Maybe larger models use more megabytes per token than smaller models thus the out of memory error.

So I looked up the KV cache size calculation. KV Cache is where an LLM stores each token it generates so it doesn't have to regenerate them all from scratch each time it makes another token.

The number of bytes per token stored in the KV Cache is calculated by

```
2 * layers * hidden_dim * context_length * bytes_per_param
```

Layers and hidden dimensions are set by the model.

Bytes per param is the quantization so if no quantization it would be 2 bytes and for 4 bit, it would be .5.

You can also multiply that by number of batches where each batch is a prompt to the model.

Context length is number of tokens in your input. Below it will also be called num_input_tokens.

So suppose You have a model you downloaded from huggingface...

```python
quantization_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_compute_dtype="float16",
    bnb_4bit_use_double_quant=True,
    bnb_4bit_quant_type="nf4"
)

model = Qwen3VLForConditionalGeneration.from_pretrained(
    "Qwen/Qwen3-VL-2B-Instruct",
    quantization_config=quantization_config,
    device_map="auto"
)
```

You can get your layers and hidden dimensions with
```python
num_layers = model.config.text_config.num_hidden_layers
hidden_dim = model.config.text_config.hidden_size
```

You can get your token count with
```python
processor = AutoProcessor.from_pretrained("Qwen/Qwen3-VL-2B-Instruct")

messages = [
    {
        "role": "user",
        "content": [
            {
                "type": "image",
                "image": "./path-to-target-screenshot.png",
            },
            {"type": "text", "text": "This image shows numbered markers overlaid on clickable elements. Which number is the Account button? Reply with ONLY the number."},
        ],
    }
]

inputs = processor.apply_chat_template(
    messages,
    tokenize=True,
    add_generation_prompt=True,
    return_dict=True,
    return_tensors="pt"
)

num_input_tokens = inputs['input_ids'].shape[1]
batch_size = inputs['input_ids'].shape[0] # will be 1 because we are only doing one prompt.
```

And finally your kv cache size is
```python

bytes_per_param = 2  # float16
kv_cache_size_bytes = 2 * num_layers * hidden_dim * num_input_tokens * bytes_per_param * batch_size

kv_cache_mb = kv_cache_bytes / (1024 ** 2)
kv_cache_gb = kv_cache_bytes / (1024 ** 3)
```

Qwen/Qwen3-VL-2B-Instruct needed 914 input tokens, batch_size 1, 28 layers, 2048 hidden dimensions.
Which means .2 GB of KV Cache. Not bad!

