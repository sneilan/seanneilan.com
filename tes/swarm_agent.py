#!/usr/bin/env python3
"""
Swarm Agent - Multi-agent code editing with small language models.

Usage:
    python swarm_agent.py <file_path> "<request>"

Example:
    python swarm_agent.py rotating_meows.py "change colors to grayscale"
"""

import sys
from pathlib import Path

from tests.hierarchical_rag import HierarchicalRAG
from swarm import Coordinator


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)

    file_path = Path(sys.argv[1])
    request = sys.argv[2]

    if not file_path.exists():
        print(f"Error: File not found: {file_path}")
        sys.exit(1)

    print(f"=== Swarm Agent ===")
    print(f"File: {file_path}")
    print(f"Request: {request}")
    print()

    # Setup hierarchical RAG and index the target file
    print("[1/4] Indexing file with hierarchical RAG...")
    rag = HierarchicalRAG()
    rag.index_file(file_path)

    # Query RAG for relevant context
    print("\n[2/4] Querying for relevant code...")
    results = rag.query(request, n_results=5)
    rag_context = "\n\n---\n\n".join([r["document"] for r in results])

    print(f"Found {len(results)} relevant code nodes")
    for r in results:
        meta = r["metadata"]
        path_str = " → ".join(r["path"])
        print(f"  - [{meta['node_type']}] {path_str} (L{meta['line_start']}, dist: {r['distance']:.3f})")

    # Create coordinator and run
    print("\n[3/4] Creating plan...")
    coordinator = Coordinator()
    plan = coordinator.plan(request, rag_context, str(file_path))

    print(f"\n[Coordinator] Reasoning: {plan.reasoning}")
    print(f"[Coordinator] {len(plan.tasks)} task(s) planned:")
    for i, task in enumerate(plan.tasks):
        print(f"  {i+1}. {task.worker}")

    # Execute
    print("\n[4/4] Executing plan...")
    results = coordinator.execute_plan(plan, str(file_path), rag_context)

    # Report
    print("\n=== Results ===")
    for worker, success, message in results:
        status = "✓" if success else "✗"
        print(f"{status} {worker}: {message}")

    successes = sum(1 for _, s, _ in results if s)
    print(f"\nCompleted: {successes}/{len(results)} tasks succeeded")


if __name__ == "__main__":
    main()
