from transformers import (
    TextIteratorStreamer,
    LogitsProcessorList,
    AutoTokenizer,
    AutoModelForCausalLM,
    PreTrainedModel,
    PreTrainedTokenizerBase,
)
from pydantic import BaseModel
from typing import Literal, Iterator, Generator
from threading import Thread
from pathlib import Path
from outlines import from_transformers
from outlines.backends import get_json_schema_logits_processor
import subprocess
import uuid
import json
import re


# === Types ===

class Message(BaseModel):
    role: Literal["system", "user", "assistant"]
    content: str


# === Model Cache ===

_model_cache: dict[str, tuple[PreTrainedModel, PreTrainedTokenizerBase]] = {}


def get_model(model_name: str) -> tuple[PreTrainedModel, PreTrainedTokenizerBase]:
    """Load and cache a model/tokenizer pair."""
    if model_name not in _model_cache:
        print(f"Loading model: {model_name}...")
        tokenizer = AutoTokenizer.from_pretrained(model_name)
        model = AutoModelForCausalLM.from_pretrained(
            model_name,
            torch_dtype="bfloat16",
            device_map="auto",
        )
        _model_cache[model_name] = (model, tokenizer)
        print("Model loaded.")
    return _model_cache[model_name]


# === Code Block Extraction ===

def extract_code_block(text: str) -> str:
    """Extract code from ```python ... ``` block (non-streaming)."""
    pattern = r"```python\s*(.*?)```"
    match = re.search(pattern, text, re.DOTALL)
    if match:
        return match.group(1).strip()
    pattern = r"```\s*(.*?)```"
    match = re.search(pattern, text, re.DOTALL)
    if match:
        return match.group(1).strip()
    return ""


def extract_code_block_stream(tokens: Iterator[str]) -> Generator[str, None, None]:
    """Extract code from a token stream. Yields code content when complete block detected."""
    buffer = ""
    in_code_block = False
    code_content = ""

    for token in tokens:
        buffer += token

        if not in_code_block:
            # Look for start of code block
            if "```python" in buffer:
                in_code_block = True
                idx = buffer.index("```python") + len("```python")
                code_content = buffer[idx:].lstrip("\n")
                buffer = ""
        else:
            # In code block - accumulate and look for end
            code_content += token
            if "```" in code_content:
                idx = code_content.index("```")
                final_code = code_content[:idx].rstrip()
                if final_code:
                    yield final_code
                in_code_block = False
                code_content = ""
                buffer = code_content[idx + 3:]

    # Handle unclosed code block
    if in_code_block and code_content.strip():
        yield code_content.strip()


# === Generation Functions ===

def generate_response(
    messages: list[Message],
    model_name: str,
    max_tokens: int = 2000,
    temp: float = 0.3,
) -> Generator[str, None, None]:
    """Generate a streaming response from chat messages. Yields tokens."""
    model, tokenizer = get_model(model_name)
    # Convert Pydantic messages to dicts for tokenizer
    msg_dicts = [m.model_dump() for m in messages]
    prompt = tokenizer.apply_chat_template(
        msg_dicts, tokenize=False, add_generation_prompt=True, enable_thinking=True
    )
    yield from generate_from_prompt(prompt, model_name, max_tokens, temp)


def generate_from_prompt(
    prompt: str,
    model_name: str,
    max_tokens: int = 1000,
    temp: float = 0.7,
) -> Generator[str, None, None]:
    """Generate a streaming response from a raw prompt. Yields tokens."""
    model, tokenizer = get_model(model_name)
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


def generate_constrained(
    prompt: str,
    model_name: str,
    schema: type[BaseModel] | dict | str,
    max_tokens: int = 50,
    temp: float = 0.3,
) -> Generator[str, None, None]:
    """Generate a streaming response constrained to a JSON schema. Yields tokens."""
    model, tokenizer = get_model(model_name)
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


# === Utilities ===

def tee(gen: Generator[str, None, None]) -> Generator[str, None, None]:
    """Pass through tokens while printing them."""
    for token in gen:
        print(token, end="", flush=True)
        yield token
    print()


def collect(gen: Generator[str, None, None], print_tokens: bool = True) -> str:
    """Consume a generator, optionally printing tokens. Returns full response."""
    if print_tokens:
        gen = tee(gen)
    response = ""
    for token in gen:
        response += token
    return response


# === Code Execution ===

def correct_code(code: str, error: str, model_name: str) -> str:
    """Use the model to correct broken Python code."""
    print(f"\n=== Correcting Code (error: {error[:100]}...) ===")

    messages = [
        Message(
            role="system",
            content="You are a Python code corrector. Fix the code based on the error.\nFirst explain what you're fixing, then output the corrected code in a ```python block.",
        ),
        Message(
            role="user",
            content=f"Error:\n{error}\n\nCode:\n```python\n{code}\n```",
        ),
    ]

    # Stream with printing, extract code blocks as they complete
    stream = tee(generate_response(messages, model_name))
    code_blocks = list(extract_code_block_stream(stream))
    corrected = code_blocks[0] if code_blocks else None
    return corrected if corrected else code


def save_to_temp(code: str) -> Path:
    """Save code to a temp file and return the path."""
    tmp_dir = Path("./tmp")
    tmp_dir.mkdir(exist_ok=True)
    script_path = tmp_dir / f"{uuid.uuid4()}.py"
    script_path.write_text(code)
    return script_path


def execute_python_with_correction(
    code: str,
    model_name: str,
    max_retries: int = 3,
) -> tuple[bool, str, str]:
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
        code = correct_code(code, result.stderr, model_name)

    return False, "", "Max retries exceeded"
