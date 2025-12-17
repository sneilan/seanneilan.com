"""
AST-based code editor.

Allows editing Python files by specifying what to change at a high level,
rather than requiring exact string matching.
"""

import ast
from pathlib import Path
from typing import Any


class ASTEditor:
    """Edit Python files using AST transformations."""

    def __init__(self, file_path: Path):
        self.file_path = file_path
        self.source = file_path.read_text()
        self.lines = self.source.splitlines(keepends=True)
        self.tree = ast.parse(self.source)

    def find_variable_assignment(self, var_name: str) -> ast.Assign | None:
        """Find the assignment node for a variable."""
        for node in ast.walk(self.tree):
            if isinstance(node, ast.Assign):
                for target in node.targets:
                    if isinstance(target, ast.Name) and target.id == var_name:
                        return node
        return None

    def edit_variable(self, var_name: str, new_value: Any) -> bool:
        """
        Edit a variable assignment to have a new value.

        Args:
            var_name: Name of the variable to edit
            new_value: New value (will be converted to Python literal)

        Returns:
            True if edit was successful
        """
        node = self.find_variable_assignment(var_name)
        if node is None:
            return False

        # Generate new value as Python code
        new_value_str = self._value_to_code(new_value, indent=4)

        # Get the line range of the original assignment
        start_line = node.lineno - 1  # 0-indexed
        end_line = node.end_lineno  # exclusive

        # Build the new assignment line(s)
        new_assignment = f"{var_name} = {new_value_str}\n"

        # Replace the lines
        self.lines[start_line:end_line] = [new_assignment]

        # Write back
        new_source = "".join(self.lines)
        self.file_path.write_text(new_source)

        return True

    def _value_to_code(self, value: Any, indent: int = 0) -> str:
        """Convert a Python value to formatted code string."""
        if isinstance(value, list):
            if len(value) == 0:
                return "[]"
            # Format as multi-line list
            indent_str = " " * indent
            items = [f'{indent_str}"{v}",' if isinstance(v, str) else f"{indent_str}{v},"
                     for v in value]
            return "[\n" + "\n".join(items) + "\n]"
        elif isinstance(value, str):
            return f'"{value}"'
        elif isinstance(value, dict):
            return repr(value)
        else:
            return repr(value)

    def get_variable_value(self, var_name: str) -> Any | None:
        """Get the current value of a variable (if it's a literal)."""
        node = self.find_variable_assignment(var_name)
        if node is None:
            return None

        try:
            # Try to evaluate the literal
            return ast.literal_eval(ast.unparse(node.value))
        except:
            return None

    def list_variables(self) -> list[dict]:
        """List all top-level variable assignments."""
        variables = []
        for node in ast.iter_child_nodes(self.tree):
            if isinstance(node, ast.Assign):
                for target in node.targets:
                    if isinstance(target, ast.Name):
                        variables.append({
                            "name": target.id,
                            "line": node.lineno,
                            "end_line": node.end_lineno,
                        })
        return variables


def edit_variable_in_file(file_path: str | Path, var_name: str, new_value: Any) -> tuple[bool, str]:
    """
    Edit a variable in a Python file.

    Args:
        file_path: Path to the Python file
        var_name: Name of the variable to edit
        new_value: New value to assign

    Returns:
        (success, message)
    """
    file_path = Path(file_path)

    if not file_path.exists():
        return False, f"File not found: {file_path}"

    try:
        editor = ASTEditor(file_path)

        # Check if variable exists
        old_value = editor.get_variable_value(var_name)
        if old_value is None:
            return False, f"Variable '{var_name}' not found in {file_path.name}"

        # Perform edit
        success = editor.edit_variable(var_name, new_value)

        if success:
            return True, f"Changed {var_name} from {old_value} to {new_value}"
        else:
            return False, f"Failed to edit {var_name}"

    except SyntaxError as e:
        return False, f"Syntax error in {file_path.name}: {e}"
    except Exception as e:
        return False, f"Error editing {file_path.name}: {e}"


def add_import_to_file(
    file_path: str | Path,
    module: str,
    name: str | None = None,
    alias: str | None = None
) -> tuple[bool, str]:
    """
    Add an import statement to a Python file.

    Args:
        file_path: Path to the Python file
        module: Module to import (e.g., "logging", "os.path")
        name: Specific name to import (e.g., "Path" for "from pathlib import Path")
        alias: Alias for the import (e.g., "np" for "import numpy as np")

    Returns:
        (success, message)
    """
    file_path = Path(file_path)

    if not file_path.exists():
        return False, f"File not found: {file_path}"

    try:
        source = file_path.read_text()
        lines = source.splitlines(keepends=True)
        tree = ast.parse(source)

        # Build the import statement
        if name:
            # from module import name [as alias]
            import_stmt = f"from {module} import {name}"
            if alias:
                import_stmt += f" as {alias}"
        else:
            # import module [as alias]
            import_stmt = f"import {module}"
            if alias:
                import_stmt += f" as {alias}"

        # Check if import already exists
        for node in ast.walk(tree):
            if isinstance(node, ast.Import):
                for a in node.names:
                    if a.name == module and (alias is None or a.asname == alias):
                        return True, f"Import '{import_stmt}' already exists"
            elif isinstance(node, ast.ImportFrom):
                if node.module == module:
                    for a in node.names:
                        if a.name == name:
                            return True, f"Import '{import_stmt}' already exists"

        # Find the best place to insert (after existing imports)
        insert_line = 0
        for node in ast.iter_child_nodes(tree):
            if isinstance(node, (ast.Import, ast.ImportFrom)):
                insert_line = node.end_lineno
            elif isinstance(node, ast.Expr) and isinstance(node.value, ast.Constant):
                # Skip docstrings
                if isinstance(node.value.value, str) and node.lineno == 1:
                    insert_line = node.end_lineno

        # Insert the import
        import_line = import_stmt + "\n"
        if insert_line == 0:
            lines.insert(0, import_line)
        else:
            lines.insert(insert_line, import_line)

        # Write back
        file_path.write_text("".join(lines))
        return True, f"Added: {import_stmt}"

    except SyntaxError as e:
        return False, f"Syntax error in {file_path.name}: {e}"
    except Exception as e:
        return False, f"Error adding import: {e}"


def insert_lines_in_file(
    file_path: str | Path,
    after_line: int,
    code: str
) -> tuple[bool, str]:
    """
    Insert code after a specific line number.

    Args:
        file_path: Path to the Python file
        after_line: Line number after which to insert (1-indexed, 0 = beginning)
        code: Code to insert

    Returns:
        (success, message)
    """
    file_path = Path(file_path)

    if not file_path.exists():
        return False, f"File not found: {file_path}"

    try:
        lines = file_path.read_text().splitlines(keepends=True)

        # Validate line number
        if after_line < 0 or after_line > len(lines):
            return False, f"Invalid line number: {after_line} (file has {len(lines)} lines)"

        # Ensure code ends with newline
        if not code.endswith("\n"):
            code += "\n"

        # Insert
        lines.insert(after_line, code)

        # Write back
        file_path.write_text("".join(lines))
        return True, f"Inserted {len(code.splitlines())} line(s) after line {after_line}"

    except Exception as e:
        return False, f"Error inserting lines: {e}"


def delete_lines_in_file(
    file_path: str | Path,
    start_line: int,
    end_line: int
) -> tuple[bool, str]:
    """
    Delete a range of lines from a file.

    Args:
        file_path: Path to the Python file
        start_line: First line to delete (1-indexed)
        end_line: Last line to delete (1-indexed, inclusive)

    Returns:
        (success, message)
    """
    file_path = Path(file_path)

    if not file_path.exists():
        return False, f"File not found: {file_path}"

    try:
        lines = file_path.read_text().splitlines(keepends=True)

        # Validate line numbers
        if start_line < 1 or end_line > len(lines) or start_line > end_line:
            return False, f"Invalid line range: {start_line}-{end_line} (file has {len(lines)} lines)"

        # Delete (convert to 0-indexed)
        deleted = lines[start_line - 1:end_line]
        del lines[start_line - 1:end_line]

        # Write back
        file_path.write_text("".join(lines))
        return True, f"Deleted lines {start_line}-{end_line} ({len(deleted)} lines)"

    except Exception as e:
        return False, f"Error deleting lines: {e}"


def rename_in_file(
    file_path: str | Path,
    old_name: str,
    new_name: str
) -> tuple[bool, str]:
    """
    Rename a symbol (variable, function, class) throughout a file using rope.

    Args:
        file_path: Path to the Python file
        old_name: Current name of the symbol
        new_name: New name for the symbol

    Returns:
        (success, message)
    """
    file_path = Path(file_path)

    if not file_path.exists():
        return False, f"File not found: {file_path}"

    try:
        from rope.base.project import Project
        from rope.refactor.rename import Rename

        # Create rope project
        project = Project(str(file_path.parent))
        resource = project.get_resource(file_path.name)

        # Find the symbol's offset
        source = file_path.read_text()
        offset = source.find(old_name)

        if offset == -1:
            project.close()
            return False, f"Symbol '{old_name}' not found in {file_path.name}"

        # Perform rename
        renamer = Rename(project, resource, offset)
        changes = renamer.get_changes(new_name)
        project.do(changes)
        project.close()

        return True, f"Renamed '{old_name}' to '{new_name}'"

    except ImportError:
        return False, "rope library not installed"
    except Exception as e:
        return False, f"Error renaming: {e}"


def edit_function_arg_in_file(
    file_path: str | Path,
    function_name: str,
    new_value: str,
    arg_index: int | None = None,
    keyword_name: str | None = None,
) -> tuple[bool, str]:
    """
    Edit a function call's string argument by index or keyword name (first match only).

    Finds a function call and replaces an argument by position or keyword.
    Supports dotted names like 'logger.info'.

    Args:
        file_path: Path to the Python file
        function_name: Name of function (e.g., "print", "logger.info")
        new_value: New string value to set
        arg_index: Index of positional argument (0-indexed), or None
        keyword_name: Name of keyword argument, or None

    Returns:
        (success, message)
    """
    file_path = Path(file_path)

    if not file_path.exists():
        return False, f"File not found: {file_path}"

    if arg_index is None and keyword_name is None:
        return False, "Must specify either arg_index or keyword_name"

    try:
        source = file_path.read_text()
        lines = source.splitlines(keepends=True)
        tree = ast.parse(source)

        # Parse function name (handle dotted names like logger.info)
        name_parts = function_name.split(".")

        def matches_call(node: ast.Call) -> bool:
            """Check if a Call node matches the function name."""
            func = node.func
            if len(name_parts) == 1:
                return isinstance(func, ast.Name) and func.id == name_parts[0]
            if isinstance(func, ast.Attribute):
                if func.attr != name_parts[-1]:
                    return False
                current = func.value
                for part in reversed(name_parts[:-1]):
                    if isinstance(current, ast.Attribute):
                        if current.attr != part:
                            return False
                        current = current.value
                    elif isinstance(current, ast.Name):
                        return current.id == part
                    else:
                        return False
                return True
            return False

        def find_target_arg(node: ast.Call) -> ast.Constant | None:
            """Find the target arg by index or keyword name."""
            if arg_index is not None:
                if arg_index < len(node.args):
                    arg = node.args[arg_index]
                    if isinstance(arg, ast.Constant):
                        return arg
            if keyword_name is not None:
                for kw in node.keywords:
                    if kw.arg == keyword_name and isinstance(kw.value, ast.Constant):
                        return kw.value
            return None

        def replace_string_node(arg: ast.Constant) -> tuple[bool, str]:
            """Replace a string constant node in the source."""
            start_line = arg.lineno - 1
            end_line = arg.end_lineno - 1
            start_col = arg.col_offset
            end_col = arg.end_col_offset

            if start_line != end_line:
                return False, "Multi-line strings not supported"

            line = lines[start_line]
            old_quoted = line[start_col:end_col]
            old_value = arg.value

            # Detect quote style (", ', f", f')
            if old_quoted.startswith('f'):
                quote_char = old_quoted[1]
                new_quoted = f'f{quote_char}{new_value}{quote_char}'
            else:
                quote_char = old_quoted[0]
                new_quoted = f'{quote_char}{new_value}{quote_char}'

            lines[start_line] = line[:start_col] + new_quoted + line[end_col:]
            return True, old_value

        # Find first matching call
        for node in ast.walk(tree):
            if isinstance(node, ast.Call) and matches_call(node):
                arg = find_target_arg(node)
                if arg:
                    success, old_value = replace_string_node(arg)
                    if success:
                        file_path.write_text("".join(lines))
                        target = f"arg[{arg_index}]" if arg_index is not None else f"'{keyword_name}'"
                        return True, f"Changed {function_name}() {target}: '{old_value}' → '{new_value}'"
                    else:
                        return False, old_value  # old_value contains error message

        target = f"arg[{arg_index}]" if arg_index is not None else f"keyword '{keyword_name}'"
        return False, f"No call to {function_name}() with {target} found"

    except SyntaxError as e:
        return False, f"Syntax error in {file_path.name}: {e}"
    except Exception as e:
        return False, f"Error editing function arg: {e}"


# Test
if __name__ == "__main__":
    # Test on a sample file
    test_file = Path("/home/sneilan/.notes/notes/Work/MeowMeowLand/rotating_meows.py")

    editor = ASTEditor(test_file)

    print("=== Variables in file ===")
    for var in editor.list_variables():
        print(f"  {var['name']} (lines {var['line']}-{var['end_line']})")

    print("\n=== Current rainbow_colors ===")
    print(editor.get_variable_value("rainbow_colors"))
