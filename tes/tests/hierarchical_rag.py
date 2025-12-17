"""
Hierarchical RAG system for Python code.

Embeds code at multiple levels of the AST tree:
- Level 0: File (entire source)
- Level 1: Classes, Functions (definitions)
- Level 2: Statements (calls, assignments, returns)

Each node embeds ALL code at its level, enabling semantic search
at multiple granularities.
"""

import ast
import uuid
from pathlib import Path
from dataclasses import dataclass, field

import chromadb
from sentence_transformers import SentenceTransformer


@dataclass
class ASTNode:
    """A node in the hierarchical AST tree."""
    node_id: str
    node_type: str          # "file", "class", "function", "call", "assign"
    name: str               # "setup", "logger.info", "rainbow_colors"
    code: str               # source code for this node
    line_start: int
    line_end: int
    file_path: str
    depth: int              # 0=file, 1=class/func, 2=statements

    # Hierarchical links
    parent_id: str | None = None
    children: list["ASTNode"] = field(default_factory=list)

    def to_text(self) -> str:
        """Convert to text for embedding."""
        return f"[{self.node_type}] {self.name}\n{self.code}"


def get_call_name(node: ast.Call) -> str:
    """Extract the full name from a Call node (handles dotted names)."""
    func = node.func
    if isinstance(func, ast.Name):
        return func.id
    elif isinstance(func, ast.Attribute):
        parts = []
        current = func
        while isinstance(current, ast.Attribute):
            parts.append(current.attr)
            current = current.value
        if isinstance(current, ast.Name):
            parts.append(current.id)
        return ".".join(reversed(parts))
    return "<unknown>"


def build_ast_tree(file_path: Path) -> ASTNode:
    """
    Parse a Python file into a hierarchical ASTNode tree.

    Returns the root node (file level) with children populated.
    """
    source = file_path.read_text()
    lines = source.splitlines()
    tree = ast.parse(source)

    def get_source(start: int, end: int) -> str:
        """Get source code for line range (1-indexed)."""
        return "\n".join(lines[start - 1:end])

    def make_id() -> str:
        return str(uuid.uuid4())[:8]

    # Create root node (file level)
    root = ASTNode(
        node_id=make_id(),
        node_type="file",
        name=file_path.name,
        code=source,
        line_start=1,
        line_end=len(lines),
        file_path=str(file_path),
        depth=0,
    )

    # Track nodes by their AST node for parent lookup
    node_map: dict[int, ASTNode] = {}

    def process_node(ast_node: ast.AST, parent: ASTNode, depth: int):
        """Recursively process AST nodes."""
        # Skip nodes without line info
        if not hasattr(ast_node, 'lineno'):
            return

        created_node = None

        # Level 1: Classes and Functions
        if isinstance(ast_node, ast.ClassDef):
            created_node = ASTNode(
                node_id=make_id(),
                node_type="class",
                name=ast_node.name,
                code=get_source(ast_node.lineno, ast_node.end_lineno),
                line_start=ast_node.lineno,
                line_end=ast_node.end_lineno,
                file_path=str(file_path),
                depth=depth,
                parent_id=parent.node_id,
            )
            parent.children.append(created_node)

        elif isinstance(ast_node, (ast.FunctionDef, ast.AsyncFunctionDef)):
            created_node = ASTNode(
                node_id=make_id(),
                node_type="function",
                name=ast_node.name,
                code=get_source(ast_node.lineno, ast_node.end_lineno),
                line_start=ast_node.lineno,
                line_end=ast_node.end_lineno,
                file_path=str(file_path),
                depth=depth,
                parent_id=parent.node_id,
            )
            parent.children.append(created_node)

        # Level 2: Statements (only if we're inside a function/class)
        elif depth >= 1:
            if isinstance(ast_node, ast.Expr) and isinstance(ast_node.value, ast.Call):
                # Function call as statement (e.g., logger.info(...))
                call = ast_node.value
                created_node = ASTNode(
                    node_id=make_id(),
                    node_type="call",
                    name=get_call_name(call),
                    code=get_source(ast_node.lineno, ast_node.end_lineno),
                    line_start=ast_node.lineno,
                    line_end=ast_node.end_lineno,
                    file_path=str(file_path),
                    depth=depth,
                    parent_id=parent.node_id,
                )
                parent.children.append(created_node)

            elif isinstance(ast_node, ast.Assign):
                # Assignment statement
                names = []
                for target in ast_node.targets:
                    if isinstance(target, ast.Name):
                        names.append(target.id)
                    elif isinstance(target, ast.Tuple):
                        for elt in target.elts:
                            if isinstance(elt, ast.Name):
                                names.append(elt.id)
                if names:
                    created_node = ASTNode(
                        node_id=make_id(),
                        node_type="assign",
                        name=", ".join(names),
                        code=get_source(ast_node.lineno, ast_node.end_lineno),
                        line_start=ast_node.lineno,
                        line_end=ast_node.end_lineno,
                        file_path=str(file_path),
                        depth=depth,
                        parent_id=parent.node_id,
                    )
                    parent.children.append(created_node)

            elif isinstance(ast_node, ast.Return):
                created_node = ASTNode(
                    node_id=make_id(),
                    node_type="return",
                    name="return",
                    code=get_source(ast_node.lineno, ast_node.end_lineno),
                    line_start=ast_node.lineno,
                    line_end=ast_node.end_lineno,
                    file_path=str(file_path),
                    depth=depth,
                    parent_id=parent.node_id,
                )
                parent.children.append(created_node)

        # Recurse into children
        next_parent = created_node if created_node else parent
        next_depth = depth + 1 if created_node else depth

        for child in ast.iter_child_nodes(ast_node):
            process_node(child, next_parent, next_depth)

    # Process all top-level nodes
    for node in ast.iter_child_nodes(tree):
        process_node(node, root, depth=1)

    return root


def flatten_tree(root: ASTNode) -> list[ASTNode]:
    """Flatten the tree into a list of all nodes (skipping file-level)."""
    nodes = []
    if root.depth > 0:  # Skip file level - too large to embed
        nodes.append(root)
    for child in root.children:
        nodes.extend(flatten_tree(child))
    return nodes


def get_path_to_root(node: ASTNode, all_nodes: dict[str, ASTNode]) -> list[str]:
    """Get the path from a node to the root."""
    path = [node.name]
    current = node
    while current.parent_id:
        current = all_nodes[current.parent_id]
        path.append(current.name)
    return list(reversed(path))


class HierarchicalRAG:
    """Hierarchical RAG system for Python code."""

    def __init__(self, collection_name: str = "hierarchical_code"):
        # Code-specific embedding model from Jina AI
        self.model = SentenceTransformer(
            'jinaai/jina-embeddings-v2-base-code',
            trust_remote_code=True
        )
        self.client = chromadb.Client()  # In-memory
        self.collection = self.client.get_or_create_collection(
            name=collection_name,
            metadata={"hnsw:space": "cosine"}
        )
        # Keep track of nodes for path reconstruction
        self._nodes: dict[str, ASTNode] = {}

    def index_file(self, file_path: Path):
        """Parse and index a Python file hierarchically."""
        root = build_ast_tree(file_path)
        nodes = flatten_tree(root)

        print(f"Parsed {len(nodes)} nodes from {file_path.name}")
        for node in nodes:
            indent = "  " * node.depth
            print(f"{indent}[{node.node_type}] {node.name} (L{node.line_start})")

        # Store ALL nodes for path reconstruction (including root)
        def store_all(n: ASTNode):
            self._nodes[n.node_id] = n
            for child in n.children:
                store_all(child)
        store_all(root)

        # Prepare data for ChromaDB
        ids = []
        documents = []
        metadatas = []

        for node in nodes:
            ids.append(node.node_id)
            documents.append(node.to_text())
            metadatas.append({
                "node_type": node.node_type,
                "name": node.name,
                "file_path": node.file_path,
                "line_start": node.line_start,
                "line_end": node.line_end,
                "depth": node.depth,
                "parent_id": node.parent_id or "",
            })

        # Embed in batches to avoid OOM
        batch_size = 10
        embeddings = []
        for i in range(0, len(documents), batch_size):
            batch = documents[i:i+batch_size]
            batch_emb = self.model.encode(batch).tolist()
            embeddings.extend(batch_emb)

        self.collection.add(
            ids=ids,
            embeddings=embeddings,
            documents=documents,
            metadatas=metadatas,
        )
        print(f"Indexed {len(nodes)} nodes")

    def query(self, question: str, n_results: int = 5) -> list[dict]:
        """Query the code base with a natural language question."""
        results = self.collection.query(
            query_embeddings=self.model.encode([question]).tolist(),
            n_results=n_results,
            include=["documents", "metadatas", "distances"],
        )

        output = []
        for i in range(len(results["ids"][0])):
            node_id = results["ids"][0][i]
            meta = results["metadatas"][0][i]

            # Reconstruct path to root
            if node_id in self._nodes:
                path = get_path_to_root(self._nodes[node_id], self._nodes)
            else:
                path = [meta["name"]]

            output.append({
                "id": node_id,
                "document": results["documents"][0][i],
                "metadata": meta,
                "distance": results["distances"][0][i],
                "path": path,
            })
        return output

    def query_and_print(self, question: str, n_results: int = 5):
        """Query and pretty-print results with path."""
        print(f"\n{'='*60}")
        print(f"Query: {question}")
        print('='*60)

        results = self.query(question, n_results)
        for i, r in enumerate(results):
            meta = r["metadata"]
            path_str = " → ".join(r["path"])
            print(f"\n--- Result {i+1} (distance: {r['distance']:.3f}) ---")
            print(f"Path: {path_str}")
            print(f"Type: {meta['node_type']} | Line: {meta['line_start']}")
            # Show first 200 chars of code
            code = r["document"].split("\n", 1)[-1][:200]
            print(f"Code: {code}...")


# Example usage
if __name__ == "__main__":
    TARGET_FILE = Path("/home/sneilan/.notes/notes/Work/MeowMeowLand/rotating_meows.py")

    if not TARGET_FILE.exists():
        print(f"Error: File not found: {TARGET_FILE}")
        exit(1)

    # Create hierarchical RAG and index
    rag = HierarchicalRAG()
    rag.index_file(TARGET_FILE)

    # Test queries
    rag.query_and_print("logger info message")
    rag.query_and_print("animation colors")
    rag.query_and_print("canvas setup")
