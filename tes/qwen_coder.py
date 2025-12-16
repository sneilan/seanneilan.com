from pydantic import BaseModel
from typing import Literal
import json

from helpers import (
    extract_code_block,
    generate_constrained,
    generate_from_prompt,
    execute_python_with_correction,
    collect,
    collect_until,
    tee,
    get_model,
)


# Tool name schema - just the name, code comes in markdown block
class ToolName(BaseModel):
    name: Literal["python", "search"]


# For search tool, we need the query in JSON
class SearchTool(BaseModel):
    name: Literal["search"]
    query: str


def main():
    # Model name
    # model_name = "Qwen/Qwen3-VL-8B-Instruct"
    # model_name = "meta-llama/Llama-3.2-3B"
    # model_name = "google/gemma-3-270m"
    # model_name = "WeiboAI/VibeThinker-1.5B"
    model_name = "Qwen/Qwen3-0.6B"
    # model_name = "Qwen/Qwen3-1.7B"
    # model_name = "Qwen/Qwen3-4B"

    # Load model (cached after first load)
    _, tokenizer = get_model(model_name)

    # Define tools in the prompt
    tools_description = """You have access to the following tools:

1. python - Execute Python code
   Output format: {"name": "python"} followed by a ```python code block

2. search - Search the web
   Output format: {"name": "search", "query": "<search query>"}

After thinking, respond with the appropriate JSON and code block."""

    # Simple prompt using chat template (with thinking enabled)
    messages = [
        {"role": "system", "content": tools_description},
        {
            "role": "user",
            "content": "use the python tool to use the requests library to save https://seanneilan.com/ to a file in the current directory.",
        },
    ]
    prompt = tokenizer.apply_chat_template(
        messages, tokenize=False, add_generation_prompt=True, enable_thinking=True
    )

    print(f"Prompt: {prompt}\n")

    # Phase 1: Stream thinking tokens until </think>
    print("=== Model Thinking ===")
    thinking_text = collect_until(
        tee(generate_from_prompt(prompt, model_name, max_tokens=500, temp=0.7, skip_special_tokens=False)),
        stop="</think>",
    )
    print("\n\n=== Constrained Tool Name Generation ===")

    # Phase 2: Use Outlines to constrain just the tool name
    #
    # Key technique: By appending the thinking text to the original prompt,
    # the model "believes" it already generated that reasoning. Autoregressive
    # LLMs can't distinguish between tokens in the prompt vs tokens they generated -
    # they just continue from the sequence they see.
    #
    # This means you can:
    # - Skip Phase 1 entirely by injecting a pre-written/cached thinking block
    # - Reuse thinking across similar prompts for speed
    # - Steer the model's tool selection by crafting specific reasoning
    #
    # Example: prompt_with_thinking = prompt + "<think>I should use python...</think>"
    #
    prompt_with_thinking = prompt + thinking_text

    tool_json = collect(tee(generate_constrained(
        prompt_with_thinking,
        model_name,
        schema=ToolName,
        max_tokens=50,
        temp=0.3,
    )))

    print(f"Tool selection: {tool_json}")
    tool_name = json.loads(tool_json)["name"]

    # Phase 3: Generate tool output with prefix forcing
    # By appending ```python to the prompt, we force the model to immediately emit code
    print("\n=== Generating Tool Output ===")
    prompt_with_tool = prompt_with_thinking + tool_json

    if tool_name == "python":
        code_prefix = "\n```python\n"
        prompt_with_tool += code_prefix
        response = collect(tee(generate_from_prompt(prompt_with_tool, model_name, max_tokens=1000, temp=0.7)))
        # Response is just the code body - extract until closing ```
        code = response.split("```")[0].strip() if "```" in response else response.strip()
        if not code:
            print("Error: No code found in response")
        else:
            print(f"\n=== Extracted Python Code ===\n{code}")
            print("\n=== Executing Python (with auto-correction) ===")

            success, stdout, stderr = execute_python_with_correction(code, model_name)

            if success:
                print("\n=== Success ===")
                if stdout:
                    print(f"Output:\n{stdout}")
            else:
                print("\n=== Failed after max retries ===")
                print(stderr)

    elif tool_name == "search":
        response = collect(tee(generate_from_prompt(prompt_with_tool, model_name, max_tokens=200, temp=0.7)))
        print(f"Search requested. Response: {response}")


main()
