"""
Renamer worker.

Renames symbols (variables, functions, classes) in Python files using rope.
"""

from pydantic import BaseModel

from helpers import rename_in_file
from .base import BaseWorker


class RenamerSchema(BaseModel):
    old_name: str
    new_name: str


class Renamer(BaseWorker):
    """Worker that renames symbols in files."""

    name = "renamer"
    description = "Rename a symbol (variable, function, or class) throughout a Python file. Output the current name and new name."
    schema = RenamerSchema

    def execute(self, params: dict, file_path: str) -> tuple[bool, str]:
        """Execute the rename."""
        return rename_in_file(
            file_path,
            params["old_name"],
            params["new_name"]
        )
