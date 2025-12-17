"""
Import adder worker.

Adds import statements to Python files.
"""

from typing import Optional

from pydantic import BaseModel

from helpers import add_import_to_file
from .base import BaseWorker


class ImportAdderSchema(BaseModel):
    module: str
    name: Optional[str] = None
    alias: Optional[str] = None


class ImportAdder(BaseWorker):
    """Worker that adds imports to files."""

    name = "import_adder"
    description = "Add an import statement to a Python file. Output the module name, and optionally the specific name to import and alias."
    schema = ImportAdderSchema

    def execute(self, params: dict, file_path: str) -> tuple[bool, str]:
        """Execute the import addition."""
        return add_import_to_file(
            file_path,
            params["module"],
            params.get("name"),
            params.get("alias")
        )
