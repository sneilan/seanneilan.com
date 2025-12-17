"""
Swarm coordinator.

Takes user requests, queries RAG for context, plans tasks,
and dispatches to specialized workers.
"""

import json
from pathlib import Path
from typing import Literal

from pydantic import BaseModel

from helpers import generate_constrained, collect, tee
from swarm.model_cache import ModelCache, get_cache
from swarm.workers import WORKERS
from swarm.workers.voter import run_vote


class Task(BaseModel):
    """A single task for a worker."""
    worker: Literal["variable_editor", "import_adder", "renamer", "code_inserter", "line_deleter", "function_arg_editor"]
    params: dict  # Exact parameters for the worker (4B extracts these)


class TaskPlan(BaseModel):
    """Plan of tasks to execute."""
    reasoning: str  # Keep to 1 sentence
    tasks: list[Task]


class Coordinator:
    """Orchestrates workers based on user requests."""

    model_name: str = "Qwen/Qwen3-4B"

    def __init__(self, model_cache: ModelCache | None = None):
        """Initialize coordinator with optional shared model cache."""
        self.cache = model_cache or get_cache()
        self.workers = {name: cls(model_cache=self.cache) for name, cls in WORKERS.items()}

    def get_system_prompt(self) -> str:
        """System prompt for planning."""
        return """You are a code editing coordinator. Output EXACT parameters for each task.

WORKERS AND THEIR PARAMS:
- variable_editor: {"variable_name": str, "new_value": any}
- function_arg_editor: {"function_name": str, "arg_index": int, "new_value": str}
- import_adder: {"module": str, "name": str|null, "alias": str|null}
- renamer: {"old_name": str, "new_name": str}
- code_inserter: {"after_line": int, "code": str}
- line_deleter: {"start_line": int, "end_line": int}

RULES:
1. Keep reasoning to 1 sentence MAX
2. Output EXACT params the worker needs - you do ALL the thinking
3. For function_arg_editor: function_name must be FULL name like "logger.info" not "logger"

Output valid JSON only."""

    def get_prompt(self, user_request: str, rag_context: str, file_path: str) -> str:
        """Build the planning prompt."""
        _, tokenizer = self.cache.get(self.model_name)

        schema_info = TaskPlan.model_json_schema()
        required_fields = schema_info.get("required", [])

        messages = [
            {"role": "system", "content": self.get_system_prompt()},
            {"role": "user", "content": f"""User request: {user_request}

Relevant code:
{rag_context}

Example for "change logger.info message to MEOWW":
{{"reasoning": "Change first arg of logger.info to MEOWW", "tasks": [{{"worker": "function_arg_editor", "params": {{"function_name": "logger.info", "arg_index": 0, "new_value": "MEOWW"}}}}]}}

Output JSON:"""},
        ]

        return tokenizer.apply_chat_template(
            messages, tokenize=False, add_generation_prompt=True
        )

    def plan(self, user_request: str, rag_context: str, file_path: str) -> TaskPlan:
        """Generate a plan for the user request."""
        print(f"\n[Coordinator] Planning for: {user_request[:50]}...")

        prompt = self.get_prompt(user_request, rag_context, file_path)

        output = collect(tee(generate_constrained(
            prompt,
            self.model_name,
            schema=TaskPlan,
            max_tokens=1000,
            temp=0.3,
        )))

        print(f"[Coordinator] Plan: {output}")

        return TaskPlan.model_validate_json(output)

    def execute_plan(self, plan: TaskPlan, file_path: str, rag_context: str, use_voting: bool = True, num_voters: int = 3) -> list[tuple[str, bool, str]]:
        """Execute all tasks in the plan sequentially.

        Args:
            plan: The task plan to execute
            file_path: Target file (passed to all workers)
            rag_context: Relevant code snippets for voters
            use_voting: Whether to run 0.6B voters before each edit
            num_voters: Number of voters (odd number recommended)

        Returns:
            List of (worker_name, success, message) for each task
        """
        results = []

        print(f"\n[Coordinator] Executing {len(plan.tasks)} tasks on {file_path}...")
        print(f"[Coordinator] Reasoning: {plan.reasoning}")

        for i, task in enumerate(plan.tasks):
            print(f"\n[Coordinator] Task {i+1}/{len(plan.tasks)}: {task.worker}")
            print(f"[Coordinator] Params: {task.params}")

            worker = self.workers.get(task.worker)
            if worker is None:
                results.append((task.worker, False, f"Unknown worker: {task.worker}"))
                continue

            # Build description for voting
            task_desc = f"Worker: {task.worker}\nParams: {task.params}\nFile: {file_path}"

            # Vote on whether to execute
            if use_voting:
                print(f"\n[Voting] Running {num_voters} voters...")
                approved, votes = run_vote(task_desc, rag_context, num_voters, self.cache)

                if not approved:
                    results.append((task.worker, False, "Rejected by voters"))
                    continue

            # Execute directly with params from coordinator (no 0.6B parsing needed)
            try:
                success, message = worker.execute(task.params, file_path)
                results.append((task.worker, success, message))

                if not success:
                    print(f"[Coordinator] Task failed: {message}")
            except Exception as e:
                results.append((task.worker, False, f"Execution error: {e}"))

        return results

    def run(self, user_request: str, rag_context: str, file_path: str) -> dict:
        """Full pipeline: plan → execute → report.

        Args:
            user_request: What the user wants to do
            rag_context: Relevant code snippets from RAG
            file_path: Target file to edit

        Returns:
            Summary dict with plan and results
        """
        # Generate plan
        plan = self.plan(user_request, rag_context, file_path)

        # Execute plan
        results = self.execute_plan(plan, file_path, rag_context)

        # Summarize
        successes = sum(1 for _, s, _ in results if s)
        failures = len(results) - successes

        return {
            "reasoning": plan.reasoning,
            "tasks_planned": len(plan.tasks),
            "tasks_succeeded": successes,
            "tasks_failed": failures,
            "results": [
                {"worker": w, "success": s, "message": m}
                for w, s, m in results
            ]
        }


# Test
if __name__ == "__main__":
    from tests.code_rag import CodeRAG

    TARGET_FILE = Path("/home/sneilan/.notes/notes/Work/MeowMeowLand/rotating_meows.py")

    # Setup RAG
    print("Setting up RAG...")
    rag = CodeRAG()
    rag.index_file(TARGET_FILE)

    # Query for context
    query = "What colors are used?"
    rag_results = rag.query(query, n_results=3)
    rag_context = "\n\n".join([r["document"] for r in rag_results])

    # Create coordinator
    coord = Coordinator()

    # Test planning
    user_request = "Change the colors to grayscale shades"
    plan = coord.plan(user_request, rag_context, str(TARGET_FILE))

    print(f"\n=== Plan ===")
    print(f"Reasoning: {plan.reasoning}")
    for i, task in enumerate(plan.tasks):
        print(f"  Task {i+1}: {task.worker}")
        print(f"    Context: {task.context[:100]}...")
