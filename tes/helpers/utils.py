from typing import Generator
from pathlib import Path
import uuid


def tee(gen: Generator[str, None, None]) -> Generator[str, None, None]:
    """Pass through tokens while printing them."""
    for token in gen:
        print(token, end="", flush=True)
        yield token
    print()


def collect(gen: Generator[str, None, None]) -> str:
    """Consume a generator and return the joined string."""
    return "".join(gen)


def collect_until(gen: Generator[str, None, None], stop: str) -> str:
    """Collect tokens until stop sequence found. Returns text including stop."""
    text = ""
    for token in gen:
        text += token
        if stop in text:
            break
    return text


def save_to_temp(code: str) -> Path:
    """Save code to a temp file and return the path."""
    tmp_dir = Path("./tmp")
    tmp_dir.mkdir(exist_ok=True)
    script_path = tmp_dir / f"{uuid.uuid4()}.py"
    script_path.write_text(code)
    return script_path
