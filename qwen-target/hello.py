from transformers import Qwen3VLForConditionalGeneration, AutoProcessor, BitsAndBytesConfig, TextIteratorStreamer
from utils.memory_tracking import monitor_memory
from browser import BrowserSession
import logging
import re
import threading
import time
import torch


# Try to use GPU (MPS) with the smaller 4B model
# torch.backends.mps.is_available = lambda: False  # Disabled to allow GPU usage

# Configure logging
logging.basicConfig(
    level=logging.DEBUG,
    format='[%(levelname)s] %(message)s'
)

logging.debug("Starting script...")

mem = monitor_memory()
logging.debug(f"[MEMORY] Before loading model - CPU: {mem['cpu']:.2f} GB, GPU: {mem['gpu']:.2f} GB")

logging.debug("Loading model with 4-bit quantization...")

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
logging.debug("Model loaded successfully")
logging.debug(f"Model device map: {model.hf_device_map if hasattr(model, 'hf_device_map') else 'Not available'}")

# Display model architecture parameters
# Qwen3VL has vision and text components - use text_config for language model params
num_layers = model.config.text_config.num_hidden_layers
hidden_dim = model.config.text_config.hidden_size
logging.debug(f"Model architecture: {num_layers} layers, {hidden_dim} hidden dimension")

time.sleep(1)  # Let memory monitor print final reading

# We recommend enabling flash_attention_2 for better acceleration and memory saving, especially in multi-image and video scenarios.
# model = Qwen3VLForConditionalGeneration.from_pretrained(
#     "Qwen/Qwen3-VL-8B-Instruct",
#     dtype=torch.bfloat16,
#     attn_implementation="flash_attention_2",
#     device_map="auto",
# )

logging.debug("Loading processor...")
processor = AutoProcessor.from_pretrained("Qwen/Qwen3-VL-2B-Instruct")
logging.debug("Processor loaded successfully")

mem = monitor_memory()
logging.debug(f"[MEMORY] After loading processor - CPU: {mem['cpu']:.2f} GB, GPU: {mem['gpu']:.2f} GB")

# Capture and annotate screenshot before processing
browser_session = BrowserSession()
browser_session.init_browser()

# Navigate to target URL
logging.debug("Navigating to https://target.com...")
response = browser_session.page.goto("https://target.com")
logging.debug(f"Page loaded with status: {response.status}")
logging.debug(f"Final URL: {browser_session.page.url}")
logging.debug("Waiting for page to be idle...")
browser_session.page.wait_for_load_state('networkidle')

# Capture screenshot and detect elements
screenshot_path, elements_data = browser_session.capture_screenshot("target_screenshot.png")
annotated_screenshot_path = "target_screenshot_annotated.png"
browser_session.annotate_screenshot(screenshot_path, elements_data, annotated_screenshot_path)
logging.debug(f"\nScreenshot annotated with {len(elements_data)} markers\n")

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
logging.debug("Preparing inputs for the model...")
inputs = processor.apply_chat_template(
    messages,
    tokenize=True,
    add_generation_prompt=True,
    return_dict=True,
    return_tensors="pt"
)
# inputs is a dict with keys like 'input_ids', 'attention_mask', 'pixel_values', etc.
# input_ids contains the tokenized text as tensor with shape [batch_size, sequence_length]
# To see all available keys: print(inputs.keys())
# For docs: https://huggingface.co/docs/transformers/main/en/model_doc/qwen3_vl
num_input_tokens = inputs['input_ids'].shape[1]
batch_size = inputs['input_ids'].shape[0]
logging.debug(f"Input tokens: {num_input_tokens} (batch size: {batch_size})")

# Calculate KV cache memory for input tokens
# Formula: 2 * layers * hidden_dim * context_length * bytes_per_param * batch_size
bytes_per_param = 2  # float16
kv_cache_bytes = 2 * num_layers * hidden_dim * num_input_tokens * bytes_per_param * batch_size
kv_cache_mb = kv_cache_bytes / (1024 ** 2)
kv_cache_gb = kv_cache_bytes / (1024 ** 3)
logging.debug(f"KV cache for {num_input_tokens} tokens: {kv_cache_mb:.2f} MB ({kv_cache_gb:.4f} GB)")

inputs = inputs.to(model.device)
logging.debug("Inputs prepared and moved to device")

mem = monitor_memory()
logging.debug(f"[MEMORY] After preparing inputs - CPU: {mem['cpu']:.2f} GB, GPU: {mem['gpu']:.2f} GB")

# Inference: Generation of the output with streaming
logging.debug("Starting model inference with streaming...")

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
logging.info("\nModel output (streaming):")
output_text = ""
token_count = 0
for text in streamer:
    print(text, end='', flush=True)
    output_text += text
    token_count += 1
    # Log memory on every token
    mem = monitor_memory()
    logging.debug(f"[MEMORY] Token {token_count} - CPU: {mem['cpu']:.2f} GB, GPU: {mem['gpu']:.2f} GB")

generation_thread.join()
logging.debug("\n\nInference complete")

mem = monitor_memory()
logging.debug(f"[MEMORY] After inference complete - CPU: {mem['cpu']:.2f} GB, GPU: {mem['gpu']:.2f} GB")

# Parse model output to get marker number
logging.debug("Parsing model output for marker number...")
match = re.search(r'\b(\d+)\b', output_text)

# Guard clause: no match found
if not match:
    logging.error(f"Could not parse marker number from output: {output_text}")
# Guard clause: invalid marker number
elif (marker_number := int(match.group(1))) >= len(elements_data):
    logging.error(f"Invalid marker number: {marker_number} (max: {len(elements_data)-1})")
# Happy path: valid marker number, proceed with click
else:
    logging.debug(f"Model identified marker number: {marker_number}")

    # Get element data
    elem_data = elements_data[marker_number]
    box = elem_data.box

    # Click at center of element
    click_x = box.x + box.width / 2
    click_y = box.y + box.height / 2

    logging.debug(f"Clicking element {marker_number} at ({click_x:.1f}, {click_y:.1f})")
    browser_session.page.mouse.click(click_x, click_y)

    # Wait for page to respond to click
    # TODO: Use a model to drive navigation logic:
    #   - Capture before/after screenshots
    #   - Ask model: "Did the page change? Should we wait longer? Click again?"
    #   - Model determines if action succeeded or needs retry
    #   - More intelligent than fixed timeouts or network idle heuristics
    logging.debug("Waiting for page response...")
    try:
        # Wait for network activity to settle (most reliable for dynamic pages)
        browser_session.page.wait_for_load_state('networkidle', timeout=5000)
    except:
        # Fallback: ensure basic page load completes
        try:
            browser_session.page.wait_for_load_state('load', timeout=3000)
        except:
            # Some clicks (like dropdowns) don't trigger navigation
            logging.debug("No navigation detected, continuing...")

    # Take screenshot of result
    after_screenshot_path = 'after_click.png'
    browser_session.page.screenshot(path=after_screenshot_path)
    logging.debug(f"Screenshot after click saved to {after_screenshot_path}")

mem = monitor_memory()
logging.debug(f"[MEMORY] Before cleanup - CPU: {mem['cpu']:.2f} GB, GPU: {mem['gpu']:.2f} GB")

# Cleanup
browser_session.close()

logging.debug("\nScript completed")


