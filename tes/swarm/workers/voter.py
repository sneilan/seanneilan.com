"""
Voter worker.

Simple 0.6B worker that votes yes/no on whether an edit should be executed.
Multiple voters can be run to reach consensus.
"""

from pydantic import BaseModel

from helpers import generate_constrained, collect, tee
from swarm.model_cache import ModelCache, get_cache


class VoteSchema(BaseModel):
    vote: bool  # True = yes, execute. False = no, don't execute.
    reason: str  # Brief reason (1 sentence)


class Voter:
    """0.6B worker that votes on whether to execute an edit."""

    model_name: str = "Qwen/Qwen3-0.6B"

    def __init__(self, model_cache: ModelCache | None = None):
        self.cache = model_cache or get_cache()

    def get_prompt(self, task_description: str, code_context: str) -> str:
        """Build the voting prompt."""
        _, tokenizer = self.cache.get(self.model_name)

        messages = [
            {"role": "system", "content": """You are a code edit validator.
You will see a proposed edit and the actual code. Vote YES (true) if the edit target exists and params are correct, NO (false) if something is wrong (e.g., function doesn't exist, wrong arg index).
Keep reason to 1 sentence. Output JSON only."""},
            {"role": "user", "content": f"""Proposed edit:
{task_description}

Actual code:
{code_context}

Does the edit target exist in the code with correct params?
Output: {{"vote": true/false, "reason": "..."}}"""},
        ]

        return tokenizer.apply_chat_template(
            messages, tokenize=False, add_generation_prompt=True
        )

    def vote(self, task_description: str, code_context: str) -> tuple[bool, str]:
        """
        Vote on whether to execute a task.

        Args:
            task_description: Description of what will be done
            code_context: Actual code from the file

        Returns:
            (vote, reason)
        """
        prompt = self.get_prompt(task_description, code_context)

        output = collect(tee(generate_constrained(
            prompt,
            self.model_name,
            schema=VoteSchema,
            max_tokens=100,
            temp=0.3,
        )))

        try:
            result = VoteSchema.model_validate_json(output)
            return result.vote, result.reason
        except Exception as e:
            # Default to NO on parse error - safer
            return False, f"Parse error, defaulting no: {e}"


def run_vote(task_description: str, code_context: str, num_voters: int = 3, model_cache: ModelCache | None = None) -> tuple[bool, list[tuple[bool, str]]]:
    """
    Run multiple voters and return majority decision.

    Args:
        task_description: What edit is proposed
        code_context: Actual code from the file
        num_voters: How many voters to run (odd number recommended)
        model_cache: Shared model cache

    Returns:
        (majority_vote, list of (vote, reason) from each voter)
    """
    cache = model_cache or get_cache()
    votes = []

    for i in range(num_voters):
        voter = Voter(model_cache=cache)
        vote, reason = voter.vote(task_description, code_context)
        votes.append((vote, reason))
        print(f"  [Voter {i+1}] {'YES' if vote else 'NO'}: {reason}")

    yes_count = sum(1 for v, _ in votes if v)
    majority = yes_count > num_voters / 2

    print(f"  [Vote Result] {yes_count}/{num_voters} YES → {'APPROVED' if majority else 'REJECTED'}")

    return majority, votes
