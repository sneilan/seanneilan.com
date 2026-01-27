---
title: Scraping Target.com with Local LLM Qwen3-VL
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

# Automating Web Interactions with Vision Models: A Journey Through Set-of-Mark Prompting

## The Goal

Traditional web automation relies on CSS selectors, XPath, or accessibility attributes to identify and interact with page elements. But what if the page structure changes? What if elements lack proper IDs or labels? Could we instead use a vision model to "see" the page like a human would and click on elements based on visual understanding?

That was the challenge I set out to solve: **use a local vision model to automate clicking on web elements** by showing it a screenshot and asking "where is the Account button?"

Spoiler: It worked, but not without some interesting detours along the way.

Here's the target homepage as the model saw it.

![Target Homepage](https://aaa4.s3.us-west-1.amazonaws.com/posts/scraping-target-with-qwen/target_screenshot.png)

Here it is after annotating with Playwright.

![Target Homepage Annotated](https://aaa4.s3.us-west-1.amazonaws.com/posts/scraping-target-with-qwen/target_screenshot_annotated.png)

On a first shot prompt, Qwen3VL-2B is able to identify the account button as being within box labeled 49. Have playwright click on that and it opens the account sidebar :)

![Target Homepage Clicked](https://aaa4.s3.us-west-1.amazonaws.com/posts/scraping-target-with-qwen/after_click.png)

From here, it's an engineering problem. :)

## The First Attempt: Going Big with 8B Parameters

I started with Qwen3-VL-8B-Instruct, an 8-billion parameter vision-language model. The setup was straightforward:

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

Initial excitement: The model loaded! I captured a screenshot of target.com, fed it to the model with the prompt "Where is the Account button?", and...

**The problem:** Token generation was *painfully* slow. About 1 token every 2 seconds. On my M1 MacBook Pro with 16GB of unified memory and 8 CPU cores, this was unusable for any practical automation.

Even worse, I hit GPU memory errors:
```
Error: Insufficient Memory (00000008:kIOGPUCommandBufferCallbackErrorOutOfMemory)
Device: Apple M1
```

The 8B model, even with 4-bit quantization, was too large for the M1's GPU. I had to disable Metal Performance Shaders (MPS) and fall back to CPU, which made it even slower.

## Scaling Down: The Quest for the Right Model Size

### Trying 4B: Still Too Slow

Next attempt: Qwen3-VL-4B-Instruct. Half the parameters, theoretically faster:

```python
model = Qwen3VLForConditionalGeneration.from_pretrained(
    "Qwen/Qwen3-VL-4B-Instruct",  # Smaller model
    quantization_config=quantization_config,
    device_map="auto"
)
```

Result: Better, but still around 1 token per second. With GPU enabled via MPS, it ran without memory errors, but the combination of 4-bit quantization and Apple's Metal backend wasn't well-optimized. The quantization operations created a bottleneck.

### The Sweet Spot: 2B Parameters

Finally, I tried Qwen3-VL-2B-Instruct:

```python
model = Qwen3VLForConditionalGeneration.from_pretrained(
    "Qwen/Qwen3-VL-2B-Instruct",  # Even smaller
    quantization_config=quantization_config,
    device_map="auto"
)
```

**Success!** The 2B model:
- Loaded quickly (under 2 minutes for all checkpoint shards)
- Ran smoothly on the M1 GPU via MPS
- Generated tokens at a reasonable speed
- Fit comfortably in ~1-2GB of memory

**Why model size matters on consumer hardware:** Vision models perform millions of matrix multiplications during inference. On an 8-core M1 CPU without dedicated tensor cores, each parameter adds latency. The 2B model was small enough to run efficiently on the integrated GPU while still being capable enough for the task.

## The Real Challenge: Getting Precise Coordinates

With a working model, I faced the next problem: **how do I get the model to tell me *where* to click?**

### First Attempt: Direct Coordinates

My naive first approach was to ask the model directly:

```python
{"type": "text", "text": "What are the pixel coordinates (x, y) of the Account button? Provide only numbers in format 'x,y'."}
```

The model's response: "The Account button is located in the top-right corner of the page near the search bar..."

Descriptive, but not actionable. Vision models aren't trained to output precise pixel coordinates. They excel at understanding visual content and describing it, not at measuring exact positions.

### The Solution: Set-of-Mark Prompting

Then I discovered **set-of-mark prompting** - a technique where you overlay numbered markers on interactive elements, then ask the model to identify which number corresponds to your target element.

Here's how it works:

1. **Detect clickable elements** using Playwright
2. **Annotate the screenshot** with numbered red boxes using PIL
3. **Ask the model**: "Which number is the Account button?"
4. **Parse the number** from the model's response
5. **Click at that element's coordinates**

The key insight: Vision models are excellent at identifying visual markers in images. By converting the spatial problem ("where is it?") into a visual identification problem ("which number?"), we play to the model's strengths.

## Implementation

Let's break down the complete implementation.

### Dependencies

First, the full dependency list in `pyproject.toml`:

```toml
[project]
dependencies = [
    "transformers>=4.57.3",      # For Qwen models
    "playwright>=1.49.1",         # Browser automation
    "torch>=2.0.0",               # PyTorch
    "torchvision>=0.15.0",        # Vision utilities
    "accelerate>=0.20.0",         # Model loading optimization
    "bitsandbytes>=0.41.0",       # 4-bit quantization
    "pillow>=10.0.0",             # Image manipulation
]
```

Install with:
```bash
uv sync
playwright install chromium
```

### Element Detection and Annotation

The core function that makes this work:

```python
from playwright.sync_api import sync_playwright
from PIL import Image, ImageDraw, ImageFont
import io

def capture_and_annotate_screenshot():
    """Capture screenshot and annotate with numbered markers."""
    playwright_context = sync_playwright().start()
    browser = playwright_context.chromium.launch(headless=True)
    page = browser.new_page()

    # Navigate to target site
    page.goto('https://target.com')
    page.wait_for_load_state('networkidle')

    # Detect all clickable elements
    clickable_selectors = [
        'button', 'a', '[role="button"]',
        '[onclick]', 'input[type="submit"]'
    ]
    elements_data = []

    for selector in clickable_selectors:
        elements = page.locator(selector).all()
        for elem in elements:
            try:
                box = elem.bounding_box()
                if box and box['width'] > 0 and box['height'] > 0:
                    elements_data.append({'box': box})
            except:
                pass  # Element might not be visible

    # Take screenshot
    screenshot_bytes = page.screenshot()

    # Annotate with PIL
    img = Image.open(io.BytesIO(screenshot_bytes))
    draw = ImageDraw.Draw(img)

    # Load a font (or use default)
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 20)
    except:
        font = ImageDraw.Draw(img).getfont()

    # Draw numbered markers
    for i, elem_data in enumerate(elements_data):
        box = elem_data['box']
        x, y, w, h = box['x'], box['y'], box['width'], box['height']

        # Red box and number
        draw.rectangle([x, y, x+w, y+h], outline='red', width=2)
        draw.text((x, max(0, y-20)), str(i), fill='red', font=font)

    # Save annotated screenshot
    annotated_path = 'target_screenshot_annotated.png'
    img.save(annotated_path)

    return annotated_path, elements_data, page, browser, playwright_context
```

This function detected **145 clickable elements** on target.com and overlaid numbered markers on each one.

### The Prompt Structure

With the annotated screenshot, I constructed the prompt:

```python
messages = [
    {
        "role": "user",
        "content": [
            {
                "type": "image",
                "image": annotated_screenshot_path,
            },
            {
                "type": "text",
                "text": "This image shows numbered markers overlaid on clickable elements. Which number is the Account button? Reply with ONLY the number."
            },
        ],
    }
]

# Process with the model
inputs = processor.apply_chat_template(
    messages,
    tokenize=True,
    add_generation_prompt=True,
    return_dict=True,
    return_tensors="pt"
)
inputs = inputs.to(model.device)
```

### Response Parsing and Clicking

Finally, parse the model's response and click:

```python
import re

# Stream the model's output
output_text = ""
for text in streamer:
    print(text, end='', flush=True)
    output_text += text

# Parse the number from the response
match = re.search(r'\b(\d+)\b', output_text)
if match:
    marker_number = int(match.group(1))

    if marker_number < len(elements_data):
        # Get element coordinates
        box = elements_data[marker_number]['box']

        # Click at center of element
        click_x = box['x'] + box['width'] / 2
        click_y = box['y'] + box['height'] / 2

        page.mouse.click(click_x, click_y)
        print(f"Clicked element {marker_number} at ({click_x:.1f}, {click_y:.1f})")

        # Wait and capture result
        page.wait_for_timeout(2000)
        page.screenshot(path='after_click.png')
```

## The Result

Running the complete script:

```bash
uv run python hello.py
```

Output:
```
[DEBUG] Found 145 clickable elements
[DEBUG] Annotated screenshot saved to target_screenshot_annotated.png
[RESULT] Model output (streaming):
49

[DEBUG] Model identified marker number: 49
[DEBUG] Clicking element 49 at (1137.5, 90.0)
[DEBUG] Screenshot after click saved to after_click.png
```

**It worked!** The model correctly identified the Account button as element #49 in the top-right corner at coordinates (1137.5, 90.0).

The annotated screenshot (`target_screenshot_annotated.png`) showed all 145 numbered markers, and the after-click screenshot (`after_click.png`) confirmed the button was successfully clicked.

## Lessons Learned

1. **Model size matters on consumer hardware.** The 8B model was too large for my M1 Mac, while the 2B model was the sweet spot for performance vs. capability.

2. **Vision models aren't good at precise coordinates.** Asking for pixel positions directly doesn't work well. They're trained on visual understanding, not spatial measurement.

3. **Set-of-mark prompting is a clever workaround.** By converting the spatial problem into a visual identification problem, we play to the model's strengths.

4. **Local models can work for automation.** While slower than traditional selectors, vision-based automation is viable for tasks where flexibility matters more than speed.

5. **The 2B model was sufficient.** You don't always need the biggest model. For this task, the smallest Qwen3-VL variant handled it perfectly.

6. **4-bit quantization is essential.** Without quantization, even the 2B model would have struggled with memory on a 16GB machine.

## What This Enables

Vision-based web automation opens up interesting possibilities:

- **Selector-free testing:** Test UIs without fragile CSS selectors
- **Visual regression testing:** Detect UI changes even without code changes
- **Cross-platform automation:** Same approach works on web, desktop, mobile
- **Accessibility testing:** Verify visual layouts and element positions
- **Dynamic UIs:** Handle SPAs and frequently-changing interfaces

## Limitations to Consider

This approach isn't a silver bullet:

- **Speed:** Slower than traditional selectors (seconds vs. milliseconds)
- **Accuracy:** Not 100% reliable, especially with overlapping elements
- **Cost:** Running local models requires decent hardware
- **Complexity:** More moving parts than simple selectors
- **Robustness:** Model might misidentify elements in edge cases

## Try It Yourself

The complete working script is below. You'll need:
- Python 3.13+
- uv (or pip)
- ~2GB free RAM
- Apple M1/M2/M3 Mac (or adapt for CUDA)

Clone the repository (or copy the code) and run:

```bash
uv sync
playwright install chromium
uv run python hello.py
```

---

## Complete Script

```python
from transformers import Qwen3VLForConditionalGeneration, AutoProcessor, BitsAndBytesConfig, TextIteratorStreamer
from playwright.sync_api import sync_playwright
import psutil
import threading
import time
import torch
from PIL import Image, ImageDraw, ImageFont
import io
import re

# Try to use GPU (MPS) with the smaller 2B model
# torch.backends.mps.is_available = lambda: False  # Uncomment to force CPU

def monitor_memory(stop_event):
    """Monitor and print memory usage in background thread."""
    process = psutil.Process()
    while not stop_event.is_set():
        mem_info = process.memory_info()
        mem_gb = mem_info.rss / (1024 ** 3)
        print(f"[MEMORY] Current memory usage: {mem_gb:.2f} GB", flush=True)
        time.sleep(2)

print("[DEBUG] Starting script...")
print("[DEBUG] Starting memory monitor...")
stop_monitor = threading.Event()
monitor_thread = threading.Thread(target=monitor_memory, args=(stop_monitor,), daemon=True)
monitor_thread.start()

print("[DEBUG] Loading model with 4-bit quantization...")

# Configure 4-bit quantization
quantization_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_compute_dtype="float16",
    bnb_4bit_use_double_quant=True,
    bnb_4bit_quant_type="nf4"
)

# Load the model with 4-bit quantization
model = Qwen3VLForConditionalGeneration.from_pretrained(
    "Qwen/Qwen3-VL-2B-Instruct",
    quantization_config=quantization_config,
    device_map="auto"
)
print("[DEBUG] Model loaded successfully")
print(f"[DEBUG] Model device map: {model.hf_device_map if hasattr(model, 'hf_device_map') else 'Not available'}")
time.sleep(1)

print("[DEBUG] Loading processor...")
processor = AutoProcessor.from_pretrained("Qwen/Qwen3-VL-2B-Instruct")
print("[DEBUG] Processor loaded successfully")


def capture_and_annotate_screenshot():
    """Capture screenshot of target.com and annotate with numbered markers for clickable elements."""
    print("[DEBUG] Starting screenshot capture and annotation...")
    playwright_context = sync_playwright().start()
    print("[DEBUG] Launching Chromium browser...")
    browser = playwright_context.chromium.launch(headless=True)
    page = browser.new_page()

    print("[DEBUG] Navigating to https://target.com...")
    response = page.goto('https://target.com')
    print(f"[DEBUG] Page loaded with status: {response.status}")
    print(f"[DEBUG] Final URL: {page.url}")

    print("[DEBUG] Waiting for page to be idle...")
    page.wait_for_load_state('networkidle')

    print("[DEBUG] Detecting clickable elements...")
    # Get all clickable elements
    clickable_selectors = [
        'button', 'a', '[role="button"]',
        '[onclick]', 'input[type="submit"]'
    ]
    elements_data = []

    for selector in clickable_selectors:
        elements = page.locator(selector).all()
        for elem in elements:
            try:
                box = elem.bounding_box()
                if box and box['width'] > 0 and box['height'] > 0:
                    elements_data.append({'box': box})
            except:
                pass  # Element might not be visible or have been removed

    print(f"[DEBUG] Found {len(elements_data)} clickable elements")

    # Take screenshot
    print("[DEBUG] Taking screenshot...")
    screenshot_bytes = page.screenshot()

    # Annotate with PIL
    print("[DEBUG] Annotating screenshot with markers...")
    img = Image.open(io.BytesIO(screenshot_bytes))
    draw = ImageDraw.Draw(img)

    # Use a default font
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 20)
    except:
        font = ImageDraw.Draw(img).getfont()

    for i, elem_data in enumerate(elements_data):
        box = elem_data['box']
        x, y, w, h = box['x'], box['y'], box['width'], box['height']

        # Draw red box and number
        draw.rectangle([x, y, x+w, y+h], outline='red', width=2)
        draw.text((x, max(0, y-20)), str(i), fill='red', font=font)

    # Save annotated screenshot
    annotated_path = 'target_screenshot_annotated.png'
    img.save(annotated_path)
    print(f"[DEBUG] Annotated screenshot saved to {annotated_path}")

    return annotated_path, elements_data, page, browser, playwright_context


# Capture and annotate screenshot before processing
annotated_screenshot_path, elements_data, page, browser, playwright_context = capture_and_annotate_screenshot()
print(f"\n[DEBUG] Screenshot annotated with {len(elements_data)} markers\n")

messages = [
    {
        "role": "user",
        "content": [
            {
                "type": "image",
                "image": annotated_screenshot_path,
            },
            {"type": "text", "text": "This image shows numbered markers overlaid on clickable elements. Which number is the Account button? Reply with ONLY the number."},
        ],
    }
]

# Preparation for inference
print("[DEBUG] Preparing inputs for the model...")
inputs = processor.apply_chat_template(
    messages,
    tokenize=True,
    add_generation_prompt=True,
    return_dict=True,
    return_tensors="pt"
)
inputs = inputs.to(model.device)
print("[DEBUG] Inputs prepared and moved to device")

# Inference: Generation of the output with streaming
print("[DEBUG] Starting model inference with streaming...")

# Create streamer
streamer = TextIteratorStreamer(
    processor.tokenizer,
    skip_prompt=True,
    skip_special_tokens=True
)

# Run generation in thread
generation_kwargs = {
    **inputs,
    "max_new_tokens": 128,
    "streamer": streamer
}

generation_thread = threading.Thread(target=model.generate, kwargs=generation_kwargs)
generation_thread.start()

# Stream tokens as they're generated
print("\n[RESULT] Model output (streaming):")
output_text = ""
for text in streamer:
    print(text, end='', flush=True)
    output_text += text

generation_thread.join()
print("\n\n[DEBUG] Inference complete")

# Parse model output to get marker number
print("[DEBUG] Parsing model output for marker number...")
match = re.search(r'\b(\d+)\b', output_text)
if match:
    marker_number = int(match.group(1))
    print(f"[DEBUG] Model identified marker number: {marker_number}")

    if marker_number < len(elements_data):
        # Get element data
        elem_data = elements_data[marker_number]
        box = elem_data['box']

        # Click at center of element
        click_x = box['x'] + box['width'] / 2
        click_y = box['y'] + box['height'] / 2

        print(f"[DEBUG] Clicking element {marker_number} at ({click_x:.1f}, {click_y:.1f})")
        page.mouse.click(click_x, click_y)

        # Wait for navigation/action
        print("[DEBUG] Waiting for page response...")
        page.wait_for_timeout(2000)

        # Take screenshot of result
        after_screenshot_path = 'after_click.png'
        page.screenshot(path=after_screenshot_path)
        print(f"[DEBUG] Screenshot after click saved to {after_screenshot_path}")
    else:
        print(f"[ERROR] Invalid marker number: {marker_number} (max: {len(elements_data)-1})")
else:
    print(f"[ERROR] Could not parse marker number from output: {output_text}")

# Cleanup
print("[DEBUG] Closing browser...")
browser.close()
playwright_context.stop()

# Stop memory monitor
stop_monitor.set()
monitor_thread.join(timeout=1)
print("\n[DEBUG] Script completed")
```

---

*This project demonstrates that vision-based web automation is viable on consumer hardware with the right model size and techniques. While it won't replace traditional selectors for production use cases requiring speed, it offers a fascinating glimpse into how AI might interact with interfaces in the future.*

*Questions? Ideas? Let me know in the comments or open an issue in the repository!*
