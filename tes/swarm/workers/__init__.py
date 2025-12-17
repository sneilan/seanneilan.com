"""Worker agents for the swarm."""

from .base import BaseWorker
from .variable_editor import VariableEditor
from .import_adder import ImportAdder
from .renamer import Renamer
from .code_inserter import CodeInserter
from .line_deleter import LineDeleter
from .function_arg_editor import FunctionArgEditor

# Registry of all workers
WORKERS = {
    "variable_editor": VariableEditor,
    "import_adder": ImportAdder,
    "renamer": Renamer,
    "code_inserter": CodeInserter,
    "line_deleter": LineDeleter,
    "function_arg_editor": FunctionArgEditor,
}

__all__ = [
    "BaseWorker",
    "VariableEditor",
    "ImportAdder",
    "Renamer",
    "CodeInserter",
    "LineDeleter",
    "FunctionArgEditor",
    "WORKERS",
]
