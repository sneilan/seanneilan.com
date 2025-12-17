"""
Line deleter worker.

Deletes a range of lines from Python files.
"""

from pydantic import BaseModel

from helpers import delete_lines_in_file
from .base import BaseWorker


class LineDeleterSchema(BaseModel):
    start_line: int
    end_line: int


class LineDeleter(BaseWorker):
    """Worker that deletes lines from files."""

    name = "line_deleter"
    description = "Delete a range of lines from a Python file. Output the start line number (1-indexed), and end line number (inclusive)."
    schema = LineDeleterSchema

    def execute(self, params: dict, file_path: str) -> tuple[bool, str]:
        """Execute the line deletion."""
        return delete_lines_in_file(
            file_path,
            params["start_line"],
            params["end_line"]
        )
