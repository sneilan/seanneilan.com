"""
Variable editor worker.

Edits a variable's value in a Python file using AST.
"""

from pydantic import BaseModel

from helpers import edit_variable_in_file
from .base import BaseWorker


class VariableEditorSchema(BaseModel):
    variable_name: str
    new_value: list | str | int | float | dict


class VariableEditor(BaseWorker):
    """Worker that edits variable assignments."""

    name = "variable_editor"
    description = "Edit a variable's value in a Python file. Output the variable name and new value."
    schema = VariableEditorSchema

    def execute(self, params: dict, file_path: str) -> tuple[bool, str]:
        """Execute the variable edit."""
        return edit_variable_in_file(
            file_path,
            params["variable_name"],
            params["new_value"]
        )
