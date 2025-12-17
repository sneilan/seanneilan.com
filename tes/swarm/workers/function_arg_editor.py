"""
Function argument editor worker.

Edits string arguments in function calls using AST.
"""

from typing import Optional

from pydantic import BaseModel

from helpers import edit_function_arg_in_file
from .base import BaseWorker


class FunctionArgEditorSchema(BaseModel):
    function_name: str              # e.g., "logger.info", "print"
    arg_index: Optional[int]        # 0 for first positional arg, null if using keyword
    keyword_name: Optional[str]     # keyword arg name, null if using index
    new_value: str                  # new string value


class FunctionArgEditor(BaseWorker):
    """Worker that edits function call arguments."""

    name = "function_arg_editor"
    description = """Edit a string argument in a function call.

Example: To change logger.info("old") to logger.info("MEOWW"):
{"function_name": "logger.info", "arg_index": 0, "keyword_name": null, "new_value": "MEOWW"}

Note: function_name is the FULL name like "logger.info", not just "logger"."""
    schema = FunctionArgEditorSchema

    def execute(self, params: dict, file_path: str) -> tuple[bool, str]:
        """Execute the function argument edit."""
        return edit_function_arg_in_file(
            file_path,
            params["function_name"],
            params["new_value"],
            arg_index=params.get("arg_index"),
            keyword_name=params.get("keyword_name"),
        )
