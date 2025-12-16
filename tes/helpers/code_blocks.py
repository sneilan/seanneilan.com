from typing import Iterator, Generator
import subprocess
import re

from .utils import tee, save_to_temp
from .prompts import get_model, generate_from_prompt


class UnexpectedLanguageError(Exception):
    """Raised when a code block has an unexpected or missing language identifier."""
    pass


def extract_code_block(text: str, language: str = "python") -> str:
    """Extract code from a fenced code block (non-streaming).

    Args:
        text: The text containing a code block
        language: Language identifier to look for after ``` (e.g., "python", "json")

    Returns:
        The extracted code content

    Raises:
        UnexpectedLanguageError: If a code block is found with a different language
    """
    # First check if there's a code block with the expected language
    pattern = rf"```{language}\s*(.*?)```"
    match = re.search(pattern, text, re.DOTALL)
    if match:
        return match.group(1).strip()

    # Check if there's a code block with a different/no language
    any_block = re.search(r"```(\w*)\s*(.*?)```", text, re.DOTALL)
    if any_block:
        actual = any_block.group(1) or "(none)"
        raise UnexpectedLanguageError(f"Expected ```{language}, got ```{actual}")

    return ""


def extract_code_block_stream(tokens: Iterator[str], language: str = "python") -> Generator[str, None, None]:
    """Extract code from a token stream. Yields code content when complete block detected.

    Args:
        tokens: Iterator of string tokens from the model
        language: Language identifier to look for after ``` (e.g., "python", "json")

    Raises:
        UnexpectedLanguageError: If a code block is found without the expected language
    """
    buffer = ""
    in_code_block = False
    code_content = ""
    start_marker = f"```{language}"

    for token in tokens:
        if not in_code_block:
            buffer += token
            if start_marker in buffer:
                in_code_block = True
                idx = buffer.index(start_marker) + len(start_marker)
                code_content = buffer[idx:].lstrip("\n")
                buffer = ""
            elif "```" in buffer:
                idx = buffer.index("```")
                after = buffer[idx + 3:]
                # Wait until we have enough chars to determine the language
                if len(after) >= len(language):
                    if not after.startswith(language):
                        actual = after.split()[0].split('\n')[0] if after.strip() else "(none)"
                        raise UnexpectedLanguageError(f"Expected ```{language}, got ```{actual}")
        else:
            code_content += token
            if "```" in code_content:
                idx = code_content.index("```")
                final_code = code_content[:idx].rstrip()
                if final_code:
                    yield final_code
                in_code_block = False
                buffer = code_content[idx + 3:]
                code_content = ""

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
