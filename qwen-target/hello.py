import logging
import re
import threading
import time
import torch

from transformers import Qwen3VLForConditionalGeneration, AutoProcessor, BitsAndBytesConfig, TextIteratorStreamer
from utils.memory_tracking import monitor_memory
from target_scraper_stuff import get_annotated_screenshot_of_target_homepage
from prompt import get_prompt


# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='{"level": "%(levelname)s", "message": "%(message)s"}'
)


def load_model(model_name: str):
    # Configure 4-bit quantization
    quantization_config = BitsAndBytesConfig(
        load_in_4bit=True,
        bnb_4bit_compute_dtype="float16",
        bnb_4bit_use_double_quant=True,
        bnb_4bit_quant_type="nf4"
    )

    # Load the model with 4-bit quantization
    model = Qwen3VLForConditionalGeneration.from_pretrained(
        model_name,
        quantization_config=quantization_config,
        device_map="auto"
    )
    import ipdb
    ipdb.set_trace()

    processor = AutoProcessor.from_pretrained(model_name)

import sys
import gc

def get_deep_size(obj, seen=None):
    """Recursively calculate the total memory footprint of an object and its contents."""
    if seen is None:
        seen = set()
    obj_id = id(obj)
    if obj_id in seen:
        return 0
    seen.add(obj_id)
    
    size = sys.getsizeof(obj)
    
    # Check for container types and recurse
    if isinstance(obj, (list, tuple, set, frozenset)):
        for item in obj:
            size += get_deep_size(item, seen)
    elif isinstance(obj, dict):
        for key, value in obj.items():
            size += get_deep_size(key, seen)
            size += get_deep_size(value, seen)
    # Handle other specific container types like NumPy arrays or Pandas DataFrames as needed
    
    return size


model_name = "Qwen/Qwen3-VL-2B-Instruct"
quantization_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_compute_dtype="float16",
    bnb_4bit_use_double_quant=True,
    bnb_4bit_quant_type="nf4"
)

# Load the model with 4-bit quantization
model = Qwen3VLForConditionalGeneration.from_pretrained(
    model_name,
    quantization_config=quantization_config,
    device_map="auto"
)
import ipdb
ipdb.set_trace()

processor = AutoProcessor.from_pretrained(model_name)


logging.info("Loading model with 4-bit quantization...")
#model, processor = load_model("Qwen/Qwen3-VL-8B-Instruct")

# Display model architecture parameters
num_layers = model.config.text_config.num_hidden_layers
hidden_dim = model.config.text_config.hidden_size

target_homepage = get_annotated_screenshot_of_target_homepage()

# Preparation for inference
inputs = processor.apply_chat_template(
    get_prompt(target_homepage.annotated_screenshot_path),
    tokenize=True,
    add_generation_prompt=True,
    return_dict=True,
    return_tensors="pt"
)

num_input_tokens = inputs['input_ids'].shape[1]
batch_size = inputs['input_ids'].shape[0]

# Calculate KV cache memory for input tokens
# Formula: 2 * layers * hidden_dim * context_length * bytes_per_param * batch_size
bytes_per_param = 2  # float16
kv_cache_bytes = 2 * num_layers * hidden_dim * num_input_tokens * bytes_per_param * batch_size
kv_cache_mb = kv_cache_bytes / (1024 ** 2)
kv_cache_gb = kv_cache_bytes / (1024 ** 3)

print(kv_cache_gb)
import ipdb
ipdb.set_trace()

# 3.0 gb baseline. - 
# Qwen/Qwen3-VL-2B-Instruct - 2 billion params. 4 bit. = 1 gb.
# 3.7 gb - 

inputs = inputs.to(model.device)

# Inference: Generation of the output with streaming
logging.info("Starting model inference with streaming...")

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

def monitor_loop():
    while True:
        mem = monitor_memory()
        logging.info(f"{mem.cpu_gb:.2f}, {mem.gpu_gb:.2f}")
        time.sleep(0.1)

memory_monitor = threading.Thread(target=monitor_loop, daemon=True)
memory_monitor.start()

# Stream tokens as they're generated
logging.info("Model output (streaming):")
output_text: str = ""
token_count = 0
for text in streamer:
    output_text += text
    token_count += 1

generation_thread.join()
memory_monitor.join()
logging.info("Inference complete")

# Parse model output to get marker number
match = re.search(r'\b(\d+)\b', output_text)

# Guard clause: no match found
if not match:
    raise Exception("LLM did not output a marker number")
if (marker_number := int(match.group(1))) >= len(elements_data):
    raise Exception(f"Invalid marker number: {marker_number} (max: {len(elements_data)-1})")


logging.info("Script completed")


