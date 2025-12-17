"""
Test rope's ability to analyze Python files.

Uses rope to read a Python file and extract:
- Classes and their methods
- Top-level functions
- Imports and dependencies
- Global variables
- Comments (via tokenize)
"""

import ast
import tokenize
import io
from pathlib import Path
from rope.base.project import Project
from rope.base import libutils

# Path to the file we want to analyze
TARGET_FILE = Path("/home/sneilan/.notes/notes/Work/MeowMeowLand/rotating_meows.py")


def analyze_with_rope(file_path: Path):
    """Use rope to analyze a Python file."""

    # Create a rope project (use parent dir as project root)
    project = Project(str(file_path.parent))

    try:
        # Get the resource (file) from rope
        resource = project.get_resource(file_path.name)

        print(f"=== Analyzing: {file_path.name} ===\n")

        # Get the PyModule for this file
        pymodule = project.get_pymodule(resource)

        # Get all defined names in the module
        print("=== Defined Names ===")
        for name in pymodule.get_attributes():
            attr = pymodule.get_attribute(name)
            print(f"  {name}: {type(attr).__name__}")

        print("\n=== Imports ===")
        # Use ast to get imports (rope doesn't expose this directly)
        source = resource.read()
        tree = ast.parse(source)

        for node in ast.walk(tree):
            if isinstance(node, ast.Import):
                for alias in node.names:
                    print(f"  import {alias.name}" + (f" as {alias.asname}" if alias.asname else ""))
            elif isinstance(node, ast.ImportFrom):
                module = node.module or ""
                for alias in node.names:
                    print(f"  from {module} import {alias.name}" + (f" as {alias.asname}" if alias.asname else ""))

        print("\n=== Classes ===")
        for node in ast.walk(tree):
            if isinstance(node, ast.ClassDef):
                print(f"  class {node.name}:")
                for item in node.body:
                    if isinstance(item, ast.FunctionDef):
                        args = [arg.arg for arg in item.args.args]
                        print(f"    def {item.name}({', '.join(args)})")

        print("\n=== Top-level Functions ===")
        for node in ast.iter_child_nodes(tree):
            if isinstance(node, ast.FunctionDef):
                args = [arg.arg for arg in node.args.args]
                print(f"  def {node.name}({', '.join(args)})")

        print("\n=== Global Variables ===")
        for node in ast.iter_child_nodes(tree):
            if isinstance(node, ast.Assign):
                for target in node.targets:
                    if isinstance(target, ast.Name):
                        print(f"  {target.id}")
            elif isinstance(node, ast.AnnAssign) and isinstance(node.target, ast.Name):
                print(f"  {node.target.id}")

        # Use rope to find all references to a specific name
        print("\n=== Rope: Module Structure ===")
        print(f"  Resource path: {resource.path}")
        print(f"  Is folder: {resource.is_folder()}")

    finally:
        project.close()


def extract_comments(file_path: Path) -> list[dict]:
    """Extract all comments from a Python file using tokenize."""

    source = file_path.read_text()
    comments = []

    tokens = tokenize.generate_tokens(io.StringIO(source).readline)
    for tok in tokens:
        if tok.type == tokenize.COMMENT:
            comments.append({
                "line": tok.start[0],
                "col": tok.start[1],
                "text": tok.string,
            })

    return comments


def get_code_elements_with_lines(file_path: Path) -> list[dict]:
    """Extract code elements with their line numbers."""

    source = file_path.read_text()
    tree = ast.parse(source)
    elements = []

    for node in ast.iter_child_nodes(tree):
        if isinstance(node, ast.ClassDef):
            elements.append({
                "type": "class",
                "name": node.name,
                "line": node.lineno,
                "end_line": node.end_lineno,
            })
            # Also get methods inside the class
            for item in node.body:
                if isinstance(item, ast.FunctionDef):
                    elements.append({
                        "type": "method",
                        "name": f"{node.name}.{item.name}",
                        "line": item.lineno,
                        "end_line": item.end_lineno,
                    })

        elif isinstance(node, ast.FunctionDef):
            elements.append({
                "type": "function",
                "name": node.name,
                "line": node.lineno,
                "end_line": node.end_lineno,
            })

        elif isinstance(node, ast.Assign):
            for target in node.targets:
                if isinstance(target, ast.Name):
                    elements.append({
                        "type": "variable",
                        "name": target.id,
                        "line": node.lineno,
                        "end_line": node.end_lineno,
                    })

        elif isinstance(node, ast.Import):
            for alias in node.names:
                elements.append({
                    "type": "import",
                    "name": alias.name,
                    "line": node.lineno,
                    "end_line": node.end_lineno,
                })

        elif isinstance(node, ast.ImportFrom):
            module = node.module or ""
            for alias in node.names:
                elements.append({
                    "type": "import",
                    "name": f"{module}.{alias.name}",
                    "line": node.lineno,
                    "end_line": node.end_lineno,
                })

        elif isinstance(node, ast.Expr) and isinstance(node.value, ast.Constant) and isinstance(node.value.value, str):
            # Module-level docstring
            elements.append({
                "type": "docstring",
                "name": "(module docstring)",
                "line": node.lineno,
                "end_line": node.end_lineno,
            })

        elif isinstance(node, ast.For):
            elements.append({
                "type": "for_loop",
                "name": f"for {ast.unparse(node.target)}",
                "line": node.lineno,
                "end_line": node.end_lineno,
            })

        elif isinstance(node, ast.If):
            elements.append({
                "type": "if_block",
                "name": f"if ...",
                "line": node.lineno,
                "end_line": node.end_lineno,
            })

    # Sort by line number
    elements.sort(key=lambda x: x["line"])
    return elements


def associate_comments_with_code(file_path: Path) -> list[dict]:
    """Associate each comment with the code element it describes."""

    source = file_path.read_text()
    lines = source.splitlines()
    comments = extract_comments(file_path)
    elements = get_code_elements_with_lines(file_path)

    associations = []

    for comment in comments:
        comment_line = comment["line"]
        comment_col = comment["col"]
        comment_text = comment["text"]

        # Check if this is an inline comment (code on the same line before the comment)
        line_content = lines[comment_line - 1][:comment_col].strip()
        is_inline = len(line_content) > 0

        if is_inline:
            # Inline comment - find what code is on this line
            for elem in elements:
                if elem["line"] <= comment_line <= (elem.get("end_line") or elem["line"]):
                    associations.append({
                        "comment": comment_text,
                        "comment_line": comment_line,
                        "type": "inline",
                        "element_type": elem["type"],
                        "element_name": elem["name"],
                        "element_line": elem["line"],
                    })
                    break
            else:
                # Inline but couldn't find element (might be inside a block)
                associations.append({
                    "comment": comment_text,
                    "comment_line": comment_line,
                    "type": "inline",
                    "element_type": "unknown",
                    "element_name": line_content[:30] + "..." if len(line_content) > 30 else line_content,
                    "element_line": comment_line,
                })
        else:
            # Comment on its own line - look for code element on the next non-empty, non-comment line
            next_code_line = None
            for i in range(comment_line, len(lines)):
                check_line = lines[i].strip()
                if check_line and not check_line.startswith("#"):
                    next_code_line = i + 1  # 1-indexed
                    break

            if next_code_line:
                # Find element that starts on or near this line
                for elem in elements:
                    if elem["line"] == next_code_line or (elem["line"] <= next_code_line <= (elem.get("end_line") or elem["line"])):
                        associations.append({
                            "comment": comment_text,
                            "comment_line": comment_line,
                            "type": "preceding",
                            "element_type": elem["type"],
                            "element_name": elem["name"],
                            "element_line": elem["line"],
                        })
                        break
                else:
                    associations.append({
                        "comment": comment_text,
                        "comment_line": comment_line,
                        "type": "preceding",
                        "element_type": "code_block",
                        "element_name": f"(line {next_code_line})",
                        "element_line": next_code_line,
                    })
            else:
                associations.append({
                    "comment": comment_text,
                    "comment_line": comment_line,
                    "type": "orphan",
                    "element_type": None,
                    "element_name": None,
                    "element_line": None,
                })

    return associations


def analyze_comments(file_path: Path):
    """Show comments associated with their code elements."""

    print(f"\n=== Comments Associated with Code ===")
    associations = associate_comments_with_code(file_path)

    if not associations:
        print("  (no comments found)")
        return

    for a in associations:
        comment = a["comment"]
        if a["type"] == "inline":
            print(f"  Line {a['comment_line']:3d} [inline] {a['element_type']:10} {a['element_name']}")
            print(f"              → {comment}")
        elif a["type"] == "preceding":
            print(f"  Line {a['comment_line']:3d} [above]  {a['element_type']:10} {a['element_name']} (L{a['element_line']})")
            print(f"              → {comment}")
        else:
            print(f"  Line {a['comment_line']:3d} [orphan] {comment}")


def analyze_with_ast_only(file_path: Path):
    """Pure AST analysis for comparison."""

    source = file_path.read_text()
    tree = ast.parse(source)

    print(f"\n{'='*50}")
    print(f"=== Pure AST Analysis: {file_path.name} ===")
    print(f"{'='*50}\n")

    # Count nodes
    classes = [n for n in ast.walk(tree) if isinstance(n, ast.ClassDef)]
    functions = [n for n in ast.walk(tree) if isinstance(n, ast.FunctionDef)]
    imports = [n for n in ast.walk(tree) if isinstance(n, (ast.Import, ast.ImportFrom))]
    comments = extract_comments(file_path)

    print(f"Summary:")
    print(f"  Classes: {len(classes)}")
    print(f"  Functions: {len(functions)}")
    print(f"  Import statements: {len(imports)}")
    print(f"  Comments: {len(comments)}")
    print(f"  Total lines: {len(source.splitlines())}")


if __name__ == "__main__":
    if not TARGET_FILE.exists():
        print(f"Error: File not found: {TARGET_FILE}")
        exit(1)

    analyze_with_rope(TARGET_FILE)
    analyze_comments(TARGET_FILE)
    analyze_with_ast_only(TARGET_FILE)
