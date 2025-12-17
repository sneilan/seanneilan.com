"""
Code inserter worker.

Inserts code at a specific line in Python files.
"""

from pydantic import BaseModel

from helpers import insert_lines_in_file
from .base import BaseWorker


class CodeInserterSchema(BaseModel):
    after_line: int
    code: str


class CodeInserter(BaseWorker):
    """Worker that inserts code into files."""

    name = "code_inserter"
    description = "Insert code after a specific line number in a Python file. Output the line number to insert after (0 for beginning), and the code to insert."
    schema = CodeInserterSchema

    def execute(self, params: dict, file_path: str) -> tuple[bool, str]:
        """Execute the code insertion."""
        return insert_lines_in_file(
            file_path,
            params["after_line"],
            params["code"]
        )
