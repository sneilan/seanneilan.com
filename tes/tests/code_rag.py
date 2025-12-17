"""
RAG system for Python code.

Embeds code elements (functions, classes, variables) with their associated
comments for semantic search.
"""

import ast
import tokenize
import io
from pathlib import Path
from dataclasses import dataclass

import chromadb
from sentence_transformers import SentenceTransformer


@dataclass
class CodeChunk:
    """A chunk of code with its metadata."""
    element_type: str  # function, class, variable, etc.
    name: str
    code: str
    comments: list[str]
    docstring: str | None
    line_start: int
    line_end: int
    file_path: str

    def to_text(self) -> str:
        """Convert to text for embedding."""
        parts = [
            f"Type: {self.element_type}",
            f"Name: {self.name}",
        ]
        if self.docstring:
            parts.append(f"Docstring: {self.docstring}")
        if self.comments:
            parts.append(f"Comments: {' '.join(self.comments)}")
        parts.append(f"Code:\n{self.code}")
        return "\n".join(parts)


def extract_comments(source: str) -> dict[int, str]:
    """Extract comments indexed by line number."""
    comments = {}
    tokens = tokenize.generate_tokens(io.StringIO(source).readline)
    for tok in tokens:
        if tok.type == tokenize.COMMENT:
            comments[tok.start[0]] = tok.string
    return comments


def get_docstring(node: ast.AST) -> str | None:
    """Extract docstring from a function or class node."""
    if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef, ast.ClassDef)):
        if (node.body and isinstance(node.body[0], ast.Expr) and
            isinstance(node.body[0].value, ast.Constant) and
            isinstance(node.body[0].value.value, str)):
            return node.body[0].value.value
    return None


def get_associated_comments(line_start: int, line_end: int, comments: dict[int, str]) -> list[str]:
    """Get comments associated with a code element."""
    associated = []
    # Comments on lines just before the element
    for i in range(max(1, line_start - 3), line_start):
        if i in comments:
            associated.append(comments[i])
    # Inline comments within the element
    for i in range(line_start, line_end + 1):
        if i in comments:
            associated.append(comments[i])
    return associated


def parse_python_file(file_path: Path) -> list[CodeChunk]:
    """Parse a Python file into code chunks."""
    source = file_path.read_text()
    lines = source.splitlines()
    tree = ast.parse(source)
    comments = extract_comments(source)
    chunks = []

    def get_source(start: int, end: int) -> str:
        return "\n".join(lines[start - 1:end])

    for node in ast.walk(tree):
        if isinstance(node, ast.ClassDef):
            chunks.append(CodeChunk(
                element_type="class",
                name=node.name,
                code=get_source(node.lineno, node.end_lineno),
                comments=get_associated_comments(node.lineno, node.end_lineno, comments),
                docstring=get_docstring(node),
                line_start=node.lineno,
                line_end=node.end_lineno,
                file_path=str(file_path),
            ))

        elif isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
            # Skip methods (they're inside classes)
            if not any(isinstance(p, ast.ClassDef) for p in ast.walk(tree)
                      if hasattr(p, 'body') and node in getattr(p, 'body', [])):
                chunks.append(CodeChunk(
                    element_type="function",
                    name=node.name,
                    code=get_source(node.lineno, node.end_lineno),
                    comments=get_associated_comments(node.lineno, node.end_lineno, comments),
                    docstring=get_docstring(node),
                    line_start=node.lineno,
                    line_end=node.end_lineno,
                    file_path=str(file_path),
                ))

    # Also chunk top-level variable assignments with their comments
    for node in ast.iter_child_nodes(tree):
        if isinstance(node, ast.Assign):
            for target in node.targets:
                if isinstance(target, ast.Name):
                    chunks.append(CodeChunk(
                        element_type="variable",
                        name=target.id,
                        code=get_source(node.lineno, node.end_lineno),
                        comments=get_associated_comments(node.lineno, node.end_lineno, comments),
                        docstring=None,
                        line_start=node.lineno,
                        line_end=node.end_lineno,
                        file_path=str(file_path),
                    ))

    return chunks


class CodeRAG:
    """RAG system for Python code."""

    def __init__(self, collection_name: str = "code_chunks"):
        # Code-specific embedding model from Jina AI
        # - 161M params, 768 dim embeddings
        # - Trained specifically on code + documentation
        # - Supports 8192 token context
        self.model = SentenceTransformer('jinaai/jina-embeddings-v2-base-code', trust_remote_code=True)
        self.client = chromadb.Client()  # In-memory for now
        self.collection = self.client.get_or_create_collection(
            name=collection_name,
            metadata={"hnsw:space": "cosine"}
        )

    def index_file(self, file_path: Path):
        """Parse and index a Python file."""
        chunks = parse_python_file(file_path)
        print(f"Parsed {len(chunks)} chunks from {file_path.name}")

        if not chunks:
            return

        # Prepare data for ChromaDB
        ids = []
        documents = []
        metadatas = []

        for i, chunk in enumerate(chunks):
            chunk_id = f"{file_path.stem}_{chunk.element_type}_{chunk.name}_{i}"
            ids.append(chunk_id)
            documents.append(chunk.to_text())
            metadatas.append({
                "element_type": chunk.element_type,
                "name": chunk.name,
                "file_path": chunk.file_path,
                "line_start": chunk.line_start,
                "line_end": chunk.line_end,
                "has_docstring": chunk.docstring is not None,
                "num_comments": len(chunk.comments),
            })

        # Embed and store
        embeddings = self.model.encode(documents).tolist()
        self.collection.add(
            ids=ids,
            embeddings=embeddings,
            documents=documents,
            metadatas=metadatas,
        )
        print(f"Indexed {len(chunks)} chunks")

    def query(self, question: str, n_results: int = 3) -> list[dict]:
        """Query the code base with a natural language question."""
        results = self.collection.query(
            query_embeddings=self.model.encode([question]).tolist(),
            n_results=n_results,
            include=["documents", "metadatas", "distances"],
        )

        output = []
        for i in range(len(results["ids"][0])):
            output.append({
                "id": results["ids"][0][i],
                "document": results["documents"][0][i],
                "metadata": results["metadatas"][0][i],
                "distance": results["distances"][0][i],
            })
        return output

    def query_and_print(self, question: str, n_results: int = 3):
        """Query and pretty-print results."""
        print(f"\n{'='*60}")
        print(f"Query: {question}")
        print('='*60)

        results = self.query(question, n_results)
        for i, r in enumerate(results):
            meta = r["metadata"]
            print(f"\n--- Result {i+1} (distance: {r['distance']:.3f}) ---")
            print(f"Type: {meta['element_type']} | Name: {meta['name']}")
            print(f"File: {meta['file_path']} (lines {meta['line_start']}-{meta['line_end']})")
            print(f"Comments: {meta['num_comments']} | Has docstring: {meta['has_docstring']}")
            print(f"\n{r['document'][:500]}...")


# Example usage
if __name__ == "__main__":
    TARGET_FILE = Path("/home/sneilan/.notes/notes/Work/MeowMeowLand/rotating_meows.py")

    if not TARGET_FILE.exists():
        print(f"Error: File not found: {TARGET_FILE}")
        exit(1)

    # Create RAG system and index the file
    rag = CodeRAG()
    rag.index_file(TARGET_FILE)

    # Run some example queries
    rag.query_and_print("What colors are used in the animation?")
    rag.query_and_print("How is the video recorded?")
    rag.query_and_print("How do the ellipses move?")
    rag.query_and_print("What are the animation parameters?")
