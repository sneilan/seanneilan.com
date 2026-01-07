---
title: A Tiny LLM That Calls Itself
date: 2025-11-29
summary: A tiny local LLM writes code to scrape a website, then calls itself to summarize what it found.
description: Using qwen-agent and Ollama to create a fully local agentic program that chains two tasks together.
toc: false
readTime: true
autonumber: true
math: false
tags:
  - python
  - llm
  - local-ai
showTags: true
hideBackToTop: false
---

I wanted to see how small of an LLM I could use to run a multi-step agentic workflow entirely locally. The [Qwen-Agent](https://github.com/QwenLM/Qwen-Agent) library is the best framework for experimenting with Qwen locally. The answer: Qwen 1.7b works reliably.

The idea is simple: give the LLM a task that requires two steps, but have it figure out how to chain those steps together. Step 1: write Python to scrape a webpage and save it. Step 2: call itself with a new prompt to read that file and summarize it. The LLM decides what code to write and when to hand off to the next instance.

## Prerequisites

- [Ollama](https://ollama.ai/) installed
- [uv](https://docs.astral.sh/uv/) (Python package manager)

Pull the Qwen model:

```bash
ollama pull qwen3:1.7b
```

Install the Python dependencies with uv:

```bash
uv pip install qwen-agent json5
```

## The Code

```python
import pprint
import subprocess
from pprint import pprint

import urllib.parse
import json5
from qwen_agent.agents import Assistant
from qwen_agent.tools.base import BaseTool, register_tool


@register_tool("continuation_prompt")
class BashShell(BaseTool):
    description = "Create a prompt for another qwen to continue your work."
    parameters = [
        {
            "name": "prompt",
            "type": "string",
            "description": "Prompt with all details to continue your work.",
            "required": True,
        }
    ]

    def call(self, params: str, **kwargs) -> str:
        prompt = json5.loads(params)["prompt"]
        response = execute_machine(prompt)
        return json5.dumps({"response": response})


# Configure the LLM to use local Ollama server.
llm_cfg = {
    #"model": "qwen3:0.6b",
    "model": "qwen3:1.7b",
    # "model": "qwen3:4b",
    # "model": "qwen3:8b",
    "model_server": "http://localhost:11434/v1",
    "api_key": "ollama",
    "generate_cfg": {"top_p": 0.8},
}

# Create an agent
system_instruction = """You are a helpful assistant that uses the code_interpeter to write/execute python code then calls the continuation_prompt tool to tell the next qwen to continue the work."""
tools = ["code_interpreter", "continuation_prompt"]
bot = Assistant(llm=llm_cfg, system_message=system_instruction, function_list=tools)

def execute_machine(query: str):
    print(f"\n\nQuery: {query}")
    print("-" * 60)

    messages = [{"role": "user", "content": query}]
    responses = []

    for response in bot.run(messages=messages):
        for msg in response:
            name = msg.get('name', msg['role'])
            print(f"[{name}] {msg['content'][:100]}...")
        responses.append(response[0])

    # Print the final response
    blah = []
    if response:
        for msg in response:
            if msg.get("role") == "assistant" and msg.get("content"):
                print(f"Response: {msg['content']}")
                blah.append(msg["content"])
    return "".join(blah)


scrape_and_summarize = """
Use the requests library to fetch the contents of https://seanneilan.com/ and save it as index.html to the current directory using code_interpreter.
Then use continuation_prompt tool to tell another qwen to use the code_interpreter tool to read the contents of that index.html and summarize its contents. Do not give any instructions on how to write python to the continuation_prompt tool.
"""

execute_machine(scrape_and_summarize)


print("\n" + "=" * 60)
print("Test complete!")
```

## How It Works

The key piece is the `continuation_prompt` tool. When the LLM calls it, the tool spins up a fresh `execute_machine()` call with whatever prompt the LLM wrote. This lets the first LLM instance delegate work to a second one.

The `llm_cfg` points to Ollama's local server at `localhost:11434`. No API keys needed—just a running Ollama instance.

The test query asks the LLM to:
1. Use `code_interpreter` to write and run Python that fetches seanneilan.com and saves it as `index.html`
2. Call `continuation_prompt` with instructions for another instance to read and summarize that file

The LLM figures out what Python code to write for each step. It's genuinely agentic—it's not just following a script, it's deciding how to accomplish the goal.

## Model Size Notes

I tested with `qwen3:0.6b` but it only works maybe 1 in 5 tries. The 0.6b model often gets confused about tool calling or writes broken Python. The 1.7b model works reliably. If you want even more consistent results, `qwen3:4b` and `qwen3:8b` are also options.

It's pretty satisfying to watch a 1.7 billion parameter model running on your laptop coordinate a two-step workflow entirely on its own.
