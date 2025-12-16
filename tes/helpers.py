from transformers import TextIteratorStreamer, LogitsProcessorList
from threading import Thread
from pathlib import Path
from outlines import from_transformers
from outlines.backends import get_json_schema_logits_processor
import subprocess
import uuid
import json
import re


def extract_code_block(text: str) -> str:
    """Extract code from ```python ... ``` block."""
    pattern = r"```python\s*(.*?)```"
    match = re.search(pattern, text, re.DOTALL)
    if match:
        return match.group(1).strip()
    pattern = r"```\s*(.*?)```"
    match = re.search(pattern, text, re.DOTALL)
    if match:
        return match.group(1).strip()
    return ""


def generate_response(messages, model, tokenizer, max_tokens=2000, temp=0.3):
    """Generate a streaming response from chat messages. Yields tokens."""
    prompt = tokenizer.apply_chat_template(
        messages, tokenize=False, add_generation_prompt=True, enable_thinking=True
    )
    yield from generate_from_prompt(prompt, model, tokenizer, max_tokens, temp)


def generate_from_prompt(prompt, model, tokenizer, max_tokens=1000, temp=0.7):
    """Generate a streaming response from a raw prompt. Yields tokens."""
    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

    streamer = TextIteratorStreamer(tokenizer, skip_prompt=True, skip_special_tokens=True)
    gen_kwargs = {
        **inputs,
        "max_new_tokens": max_tokens,
        "temperature": temp,
        "do_sample": True,
        "streamer": streamer,
    }
    thread = Thread(target=model.generate, kwargs=gen_kwargs)
    thread.start()

    for token in streamer:
        yield token

    thread.join()


def generate_constrained(prompt, model, tokenizer, schema, max_tokens=50, temp=0.3):
    """Generate a streaming response constrained to a JSON schema. Yields tokens.

    Args:
        prompt: Raw prompt string to continue from.
        schema: Pydantic model class or JSON schema dict.
    """
    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

    # Convert Pydantic model to JSON schema string if needed
    if hasattr(schema, "model_json_schema"):
        json_schema = json.dumps(schema.model_json_schema())
    elif isinstance(schema, dict):
        json_schema = json.dumps(schema)
    else:
        json_schema = schema

    # Create outlines model wrapper and get logits processor
    outlines_model = from_transformers(model, tokenizer)
    processor = get_json_schema_logits_processor(None, outlines_model, json_schema)

    streamer = TextIteratorStreamer(tokenizer, skip_prompt=True, skip_special_tokens=True)
    gen_kwargs = {
        **inputs,
        "max_new_tokens": max_tokens,
        "temperature": temp,
        "do_sample": True,
        "streamer": streamer,
        "logits_processor": LogitsProcessorList([processor]),
    }
    thread = Thread(target=model.generate, kwargs=gen_kwargs)
    thread.start()

    for token in streamer:
        yield token

    thread.join()


def collect(gen, print_tokens=True):
    """Consume a generator, optionally printing tokens. Returns full response."""
    response = ""
    for token in gen:
        if print_tokens:
            print(token, end="", flush=True)
        response += token
    if print_tokens:
        print()
    return response


def correct_code(code: str, error: str, model, tokenizer) -> str:
    """Use the model to correct broken Python code."""
    print(f"\n=== Correcting Code (error: {error[:100]}...) ===")

    messages = [
        {
            "role": "system",
            "content": "You are a Python code corrector. Fix the code based on the error.\nFirst explain what you're fixing, then output the corrected code in a ```python block.",
        },
        {
            "role": "user",
            "content": f"Error:\n{error}\n\nCode:\n```python\n{code}\n```",
        },
    ]

    response = collect(generate_response(messages, model, tokenizer))
    corrected = extract_code_block(response)
    return corrected if corrected else code


def save_to_temp(code: str) -> Path:
    """Save code to a temp file and return the path."""
    tmp_dir = Path("./tmp")
    tmp_dir.mkdir(exist_ok=True)
    script_path = tmp_dir / f"{uuid.uuid4()}.py"
    script_path.write_text(code)
    return script_path


def execute_python_with_correction(
    code: str, model, tokenizer, max_retries: int = 3
) -> tuple:
    """Execute Python code, correcting errors up to max_retries times."""
    for attempt in range(max_retries):
        print(f"\n=== Attempt {attempt + 1}/{max_retries} ===")

        script_path = save_to_temp(code)
        print(f"Saved to: {script_path}")

        result = subprocess.run(
            ["uv", "run", str(script_path)],
            capture_output=True,
            text=True,
        )

        if result.returncode == 0:
            if result.stdout:
                print(f"Output:\n{result.stdout}")
            return True, result.stdout, result.stderr

        print(f"Error:\n{result.stderr}")
        code = correct_code(code, result.stderr, model, tokenizer)

    return False, "", "Max retries exceeded"
