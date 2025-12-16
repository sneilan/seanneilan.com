from typing import Iterator, Generator
import subprocess
import re

from .utils import tee, save_to_temp
from .prompts import get_model, generate_from_prompt


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


def correct_code(code: str, error: str, model_name: str) -> str:
    """Use the model to correct broken Python code."""
    print(f"\n=== Correcting Code (error: {error[:100]}...) ===")

    _, tokenizer = get_model(model_name)
    messages = [
        {"role": "system", "content": "You are a Python code corrector. Fix the code based on the error.\nFirst explain what you're fixing, then output the corrected code in a ```python block."},
        {"role": "user", "content": f"Error:\n{error}\n\nCode:\n```python\n{code}\n```"},
    ]
    prompt = tokenizer.apply_chat_template(
        messages, tokenize=False, add_generation_prompt=True
    )

    # Stream with printing, extract code blocks as they complete
    stream = tee(generate_from_prompt(prompt, model_name))
    code_blocks = list(extract_code_block_stream(stream))
    corrected = code_blocks[0] if code_blocks else None
    return corrected if corrected else code


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
