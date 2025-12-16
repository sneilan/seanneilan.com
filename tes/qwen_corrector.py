from transformers import AutoTokenizer, AutoModelForCausalLM, TextIteratorStreamer
from outlines import from_transformers, Generator
from pydantic import BaseModel
from threading import Thread
from pathlib import Path
import sys


def decode_escapes(s: str) -> str:
    """Decode escaped characters like \\n to actual newlines."""
    s = s.replace("\\\\n", "\n")
    s = s.replace("\\n", "\n")
    s = s.replace("\\t", "\t")
    s = s.replace("\\\\", "\\")
    return s


class CorrectedCode(BaseModel):
    code: str
    explanation: str

    @property
    def formatted_code(self) -> str:
        return decode_escapes(self.code)


def main():
    if len(sys.argv) < 2:
        print("Usage: uv run qwen_corrector.py <script.py>")
        sys.exit(1)

    script_path = Path(sys.argv[1])
    if not script_path.exists():
        print(f"Error: {script_path} not found")
        sys.exit(1)

    original_code = script_path.read_text()
    print(f"=== Original Code ({script_path}) ===")
    print(original_code)
    print()

    # Load model
    model_name = "Qwen/Qwen3-4B"
    print(f"Loading {model_name}...")

    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForCausalLM.from_pretrained(
        model_name,
        torch_dtype="bfloat16",
        device_map="auto",
    )
    print("Model loaded!\n")

    # Prompt for correction
    system_prompt = """You are a Python code corrector. Review the code and fix any bugs, syntax errors, or issues.
Respond with a JSON object containing:
- "code": the corrected Python code
- "explanation": brief explanation of what you fixed"""

    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": f"Please correct this Python code:\n\n```python\n{original_code}\n```"},
    ]
    prompt = tokenizer.apply_chat_template(
        messages, tokenize=False, add_generation_prompt=True, enable_thinking=True
    )

    # Phase 1: Stream thinking
    print("=== Model Thinking ===")
    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)
    streamer = TextIteratorStreamer(tokenizer, skip_prompt=True, skip_special_tokens=False)

    gen_kwargs = {
        **inputs,
        "max_new_tokens": 1000,
        "temperature": 0.7,
        "do_sample": True,
        "top_p": 0.9,
        "streamer": streamer,
    }

    thread = Thread(target=model.generate, kwargs=gen_kwargs)
    thread.start()

    thinking_text = ""
    for token in streamer:
        thinking_text += token
        print(token, end="", flush=True)
        if "</think>" in thinking_text:
            break

    thread.join()
    print("\n")

    # Phase 2: Constrained generation for corrected code
    print("=== Generating Corrected Code ===")
    prompt_with_thinking = prompt + thinking_text

    outlines_model = from_transformers(model, tokenizer)
    generator = Generator(outlines_model, output_type=CorrectedCode)

    json_str = generator(
        prompt_with_thinking,
        max_new_tokens=2000,
        temperature=0.3,  # Lower temp for more consistent code
        do_sample=True,
        top_p=0.9,
    )

    # Parse result
    import json
    raw = json.loads(json_str)
    result = CorrectedCode.model_validate(raw)

    print(f"\n=== Corrected Code ===")
    print(result.formatted_code)
    print(f"\n=== Explanation ===")
    print(result.explanation)

    # Save corrected version
    corrected_path = script_path.with_suffix(".corrected.py")
    corrected_path.write_text(result.formatted_code)
    print(f"\nSaved corrected code to: {corrected_path}")

    # Append to corrected examples list
    import json
    examples_path = Path("./corrected_examples.jsonl")
    example = {
        "original_file": str(script_path),
        "original_code": original_code,
        "corrected_code": result.formatted_code,
        "explanation": result.explanation,
    }
    with open(examples_path, "a") as f:
        f.write(json.dumps(example) + "\n")
    print(f"Appended to: {examples_path}")


if __name__ == "__main__":
    main()
