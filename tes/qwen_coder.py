from pydantic import BaseModel
from typing import Literal
from pathlib import Path
import json
import sys

from helpers import (
    extract_code_block,
    generate_constrained,
    generate_from_prompt,
    execute_python_with_correction,
    collect,
    collect_until,
    tee,
    get_model,
    edit_variable_in_file,
)

# Add tests directory to path for imports
sys.path.insert(0, str(Path(__file__).parent))
from tests.code_rag import CodeRAG


# Tool name schema
class ToolName(BaseModel):
    name: Literal["python", "search_code", "edit_variable", "done"]


# For search_code tool
class SearchCodeTool(BaseModel):
    name: Literal["search_code"]
    query: str


# For edit_variable tool - AST-based editing
class EditVariableTool(BaseModel):
    name: Literal["edit_variable"]
    file_path: str
    variable_name: str
    new_value: list[str]  # New value to assign (list of strings for color arrays)


def main():
    # Model name
    # model_name = "Qwen/Qwen3-VL-8B-Instruct"
    # model_name = "meta-llama/Llama-3.2-3B"
    # model_name = "google/gemma-3-270m"
    # model_name = "WeiboAI/VibeThinker-1.5B"
    model_name = "Qwen/Qwen3-0.6B"
    # model_name = "Qwen/Qwen3-1.7B"
    # model_name = "Qwen/Qwen3-4B"

    # Initialize RAG system and index target file
    print("=== Initializing Code RAG ===")
    rag = CodeRAG()
    target_file = Path("/home/sneilan/.notes/notes/Work/MeowMeowLand/rotating_meows.py")
    rag.index_file(target_file)
    print()

    # Load model (cached after first load)
    _, tokenizer = get_model(model_name)

    # Define tools in the prompt
    tools_description = """You have access to the following tools:

1. search_code - Search the indexed codebase for relevant code snippets
   Use this FIRST to find variables you need to modify
   Output format: {"name": "search_code", "query": "<natural language query>"}

2. edit_variable - Edit a variable's value in a Python file (AST-based, very reliable)
   Output format: {"name": "edit_variable", "file_path": "<path>", "variable_name": "<name>", "new_value": ["value1", "value2", ...]}

3. python - Execute Python code (for testing or one-off scripts)
   Output format: {"name": "python"} followed by a ```python code block

4. done - Signal that you have completed the task
   Output format: {"name": "done"}

WORKFLOW: First use search_code to find the variable, then use edit_variable to change it.
After thinking, respond with the appropriate JSON."""

    # Simple prompt using chat template (with thinking enabled)
    messages = [
        {"role": "system", "content": tools_description},
        {
            "role": "user",
            "content": "Change the animation colors to a grayscale palette (use grays like #333333, #555555, #777777, #999999, #BBBBBB, #DDDDDD, #FFFFFF). First search for the colors, then edit them.",
        },
    ]
    # Agent loop - keep going until "done"
    max_iterations = 5
    conversation_context = ""  # Accumulates tool results

    for iteration in range(max_iterations):
        print(f"\n{'='*60}")
        print(f"=== Iteration {iteration + 1} ===")
        print('='*60)

        # Build prompt with any accumulated context
        if conversation_context:
            current_messages = messages + [
                {"role": "assistant", "content": conversation_context},
                {"role": "user", "content": "Continue with the next step."},
            ]
        else:
            current_messages = messages

        prompt = tokenizer.apply_chat_template(
            current_messages, tokenize=False, add_generation_prompt=True, enable_thinking=True
        )

        # Phase 1: Think
        print("\n=== Model Thinking ===")
        thinking_text = collect_until(
            tee(generate_from_prompt(prompt, model_name, max_tokens=500, temp=0.7, skip_special_tokens=False)),
            stop="</think>",
        )

        # Phase 2: Select tool (constrained)
        print("\n=== Tool Selection ===")
        prompt_with_thinking = prompt + thinking_text
        tool_json = collect(tee(generate_constrained(
            prompt_with_thinking,
            model_name,
            schema=ToolName,
            max_tokens=50,
            temp=0.3,
        )))
        print(f"Tool: {tool_json}")
        tool_name = json.loads(tool_json)["name"]

        # Phase 3: Execute tool
        prompt_with_tool = prompt_with_thinking + tool_json
        tool_result = ""

        if tool_name == "done":
            print("\n=== Task Complete ===")
            break

        elif tool_name == "python":
            code_prefix = "\n```python\n"
            prompt_with_tool += code_prefix
            response = collect(tee(generate_from_prompt(prompt_with_tool, model_name, max_tokens=1000, temp=0.7)))
            code = response.split("```")[0].strip() if "```" in response else response.strip()
            if code:
                print(f"\n=== Executing Python ===\n{code}")
                success, stdout, stderr = execute_python_with_correction(code, model_name)
                tool_result = f"Python executed. Output: {stdout if success else stderr}"
            else:
                tool_result = "Error: No code generated"

        elif tool_name == "search_code":
            print("Generating search query...")
            search_json = collect(tee(generate_constrained(
                prompt_with_tool,
                model_name,
                schema=SearchCodeTool,
                max_tokens=100,
                temp=0.3,
            )))
            print(f"Search: {search_json}")
            search_data = json.loads(search_json)
            query = search_data["query"]

            print(f"\n=== Searching: '{query}' ===")
            results = rag.query(query, n_results=3)

            # Format results for context - include EXACT code for editing
            result_text = []
            for i, r in enumerate(results):
                meta = r["metadata"]
                # Read the exact lines from the file
                file_path = Path(meta['file_path'])
                exact_code = ""
                if file_path.exists():
                    lines = file_path.read_text().splitlines()
                    start = meta['line_start'] - 1
                    end = meta['line_end']
                    exact_code = "\n".join(lines[start:end])

                result_text.append(
                    f"Result {i+1}: {meta['element_type']} '{meta['name']}'\n"
                    f"File: {meta['file_path']}\n"
                    f"Lines {meta['line_start']}-{meta['line_end']}\n"
                    f"EXACT CODE (use this for old_code in edit_code):\n```\n{exact_code}\n```"
                )
                print(f"\n--- Result {i+1}: {meta['name']} ---")
                print(f"EXACT CODE:\n{exact_code}")

            tool_result = f"Search results for '{query}':\n\n" + "\n\n".join(result_text)

        elif tool_name == "edit_variable":
            print("Generating edit...")
            edit_json = collect(tee(generate_constrained(
                prompt_with_tool,
                model_name,
                schema=EditVariableTool,
                max_tokens=500,
                temp=0.3,
            )))
            print(f"Edit: {edit_json}")
            edit_data = json.loads(edit_json)

            file_path = edit_data["file_path"]
            var_name = edit_data["variable_name"]
            new_value = edit_data["new_value"]

            print(f"\n=== Editing {var_name} in {Path(file_path).name} ===")
            print(f"New value: {new_value}")

            # Use AST-based editing
            success, message = edit_variable_in_file(file_path, var_name, new_value)
            tool_result = message
            if success:
                print(f"\n=== Edit Applied: {message} ===")
            else:
                print(f"\n=== Edit Failed: {message} ===")

        # Accumulate context for next iteration
        conversation_context += f"\n\nTool used: {tool_name}\nResult: {tool_result}"

    print("\n=== Agent Loop Finished ===")


main()
