from transformers import (
    TextIteratorStreamer,
    LogitsProcessorList,
    AutoTokenizer,
    AutoModelForCausalLM,
    PreTrainedModel,
    PreTrainedTokenizerBase,
)
from pydantic import BaseModel
from typing import Generator
from threading import Thread
from outlines import from_transformers
from outlines.backends import get_json_schema_logits_processor
import json


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


def generate_from_prompt(
    prompt: str,
    model_name: str,
    max_tokens: int = 1000,
    temp: float = 0.7,
    skip_special_tokens: bool = True,
) -> Generator[str, None, None]:
    """Generate a streaming response from a raw prompt. Yields tokens."""
    model, tokenizer = get_model(model_name)
    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

    streamer = TextIteratorStreamer(tokenizer, skip_prompt=True, skip_special_tokens=skip_special_tokens)
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
    schema: type[BaseModel],
    max_tokens: int = 50,
    temp: float = 0.3,
) -> Generator[str, None, None]:
    """Generate a streaming response constrained to a JSON schema. Yields tokens."""
    if not (isinstance(schema, type) and issubclass(schema, BaseModel)):
        raise TypeError(f"schema must be a BaseModel subclass, got {type(schema)}")

    model, tokenizer = get_model(model_name)
    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

    json_schema = json.dumps(schema.model_json_schema())

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
