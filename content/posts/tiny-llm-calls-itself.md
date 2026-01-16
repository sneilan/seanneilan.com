---
title: A Tiny LLM That Calls Itself
date: 2025-11-29
summary: A tiny local LLM writes code to scrape a website, then calls itself to summarize what it found.
description: Using transformers, open ai tool protocol & direct parsing for full control.
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

I wanted to see how small of an LLM I could use to run a multi-step agentic workflow entirely locally. The idea is simple: give the LLM a task that requires two steps, but have it figure out how to chain those steps together. Step 1: write Python to scrape a webpage and save it. Step 2: call itself with a new prompt to read that file and summarize it. The LLM decides what code to write and when to hand off to the next instance.

I used Qwen3 0.6b but it crashed too much where was 1.7b was fine. 1.7b was able to make tool calls to generate code & "continuation prompts" where it calls a tool with a prompt to call itself again.

## Prerequisites

- [Ollama](https://ollama.ai/) installed
- [uv](https://docs.astral.sh/uv/) (Python package manager)

Pull the Qwen model:

```bash
ollama pull qwen3:1.7b
```

Install the Python dependencies with uv:

```bash
uv pip install qwen-agent json5 transformers accelerate torch pydantic openai ipdb
```

## The code

```python
import json
import logging
import re
from pydantic import BaseModel, Field
from openai import pydantic_function_tool
from qwen_agent.tools.code_interpreter import CodeInterpreter as QwenCodeInterpreter
from openai.types.chat import (
    ChatCompletionUserMessageParam,
    ChatCompletionAssistantMessageParam,
    ChatCompletionToolMessageParam,
    ChatCompletionMessageToolCallParam,
)
from transformers import AutoModelForCausalLM, AutoTokenizer

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)


# Define tools as simple Pydantic models - OpenAI SDK converts them automatically
class ContinuationPrompt(BaseModel):
    """Create prompt with all details to continue your work."""
    prompt: str = Field(description="Create a prompt to tell the next qwen what to do with your results.")


    def call(self, params: str, **kwargs) -> str:
        prompt = json5.loads(params)["prompt"]


class CodeInterpreter(BaseModel):
    """Execute Python code in a sandboxed Jupyter kernel"""
    code: str = Field(description="Python code to execute")


# Convert Pydantic models to OpenAI tool format automatically
TOOLS = [
    pydantic_function_tool(ContinuationPrompt),
    pydantic_function_tool(CodeInterpreter),
]

_code_interpreter = QwenCodeInterpreter()


def parse_tool_calls(content: str) -> list[dict]:
    """Parse tool calls from Qwen3 output."""
    tool_calls = []

    # Qwen3 outputs tool calls in <tool_call> tags
    pattern = r'<tool_call>\s*(\{.*?\})\s*</tool_call>'
    matches = re.findall(pattern, content, re.DOTALL)

    for match in matches:
        call = json.loads(match) # fail fast.
        tool_calls.append(call)

    return tool_calls

def execute_tool(name: str, args: dict) -> str:
    """Execute a tool and return the result."""
    match name:
        case "ContinuationPrompt":
            prompt = args["prompt"]
            messages: MESSAGES = [
                ChatCompletionUserMessageParam(role="user", content=prompt)
            ]
            # Intentionally returning a list of messages here even though function returns a string
            # Crappy prototype but need to consider how to figure out how a model can interpret a message stack from another.
            return ask_qwen_something(messages)
        case "CodeInterpreter":
            code = args["code"]
            # If there's an error in the code, python will return the error
            # And qwen can fix it.
            return _code_interpreter.call(json.dumps({"code": code}))
        case _:
            raise ValueError(f"Unknown tool: {name}")


model_name = "Qwen/Qwen3-1.7B"

tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    torch_dtype="auto",
    device_map="auto"
)

user_query = """
Use the requests library to fetch the contents of https://seanneilan.com/ and save it as index.html to the current directory using code_interpreter.
Then use continuation_prompt tool to tell another qwen to use the code_interpreter tool to read the contents of that index.html and summarize its contents. Do not give any instructions on how to write python to the continuation_prompt tool.
"""

MESAGES = list[ChatCompletionUserMessageParam | ChatCompletionAssistantMessageParam | ChatCompletionToolMessageParam]

def ask_qwen_something(messages: MESSAGES) -> MESSAGES:
    max_iterations = 5
    # Prevents accidental loops when we call tools. Near the end of this we append to messages.
    '''
    1. Generate response from the model
    2. Parse for tool calls in the output (line 128)
    3. If no tool calls → break and exit early (lines 130-132)
    4. If tool calls exist → execute them, append results to messages, loop again
    '''
    for i in range(max_iterations):
        # Apply chat template with tools
        text = tokenizer.apply_chat_template(
            messages,
            tools=TOOLS,  # pydantic_function_tool already returns dicts
            tokenize=False,
            add_generation_prompt=True,
            enable_thinking=True
        )

        model_inputs = tokenizer([text], return_tensors="pt").to(model.device)

        generated_ids = model.generate(
            **model_inputs,
            max_new_tokens=2048,
        )

        output_ids = generated_ids[0][len(model_inputs.input_ids[0]):].tolist()

        # Split thinking content from response.
        THINK_END_TOKEN = "</think>"
        THINK_END_TOKEN_ID = tokenizer.encode(THINK_END_TOKEN, add_special_tokens=False)[0]
        try:
            index = len(output_ids) - output_ids[::-1].index(THINK_END_TOKEN_ID)
        except ValueError:
            # Sometimes when doing a lot of local dev on small models, the think token might be missing and just log this info for now.
            index = 0
            logging.debug("Missing </think> token")
        thinking_content = tokenizer.decode(output_ids[:index], skip_special_tokens=True).strip("\n")
        logger.info("[Thinking]: %s...", thinking_content[:200])

        content = tokenizer.decode(output_ids[index:], skip_special_tokens=True).strip("\n")
        logger.info("[Assistant]: %s", content)

        tool_calls = parse_tool_calls(content)

        if not tool_calls:
            logger.info("[Done - No more tool calls]")
            break

        # Build assistant message with tool_calls
        messages.append(ChatCompletionAssistantMessageParam(
            role="assistant",
            content=content,
            tool_calls=[
                ChatCompletionMessageToolCallParam(
                    id=f"call_{i}",
                    type="function",
                    function={"name": call.get("name"), "arguments": json.dumps(call.get("arguments", {}))}
                )
                for i, call in enumerate(tool_calls)
            ]
        ))

        # Execute tools and add results
        for i, call in enumerate(tool_calls):
            tool_name = call.get("name")
            tool_args = call.get("arguments", {})

            logger.info("[Tool Call]: %s(%s)", tool_name, tool_args)
            result = execute_tool(tool_name, tool_args)
            logger.info("[Tool Result]: %s", result)

            messages.append(ChatCompletionToolMessageParam(
                role="tool",
                tool_call_id=f"call_{i}",
                content=result
            ))

    return messages

messages: MESSAGES = [
    ChatCompletionUserMessageParam(role="user", content=user_query)
]

new_messages = ask_qwen_something(messages)

# Examine the messages stack if you like.
import ipdb
ipdb.set_trace()

```

## How It Works

The key piece is the `ContinuationPrompt` tool. When the LLM calls it, the tool recursively calls `ask_qwen_something()` with whatever prompt the LLM wrote. This lets the first LLM instance delegate work to a second one.

The `llm_cfg` points to Ollama's local server at `localhost:11434`. No API keys needed—just a running Ollama instance.

The test query asks the LLM to:
1. Use `code_interpreter` to write and run Python that fetches seanneilan.com and saves it as `index.html`
2. Call `ContinuationPrompt` with instructions for another instance to read and summarize that file

The LLM figures out what Python code to write for each step. It's genuinely agentic—it's not just following a script, it's deciding how to accomplish the goal.


## Useful insights

### Tools and Transformers!!

This a great way to define tools! Most models today use open ai tool format.

Note they don't define return types, it's assumed you are running the tools and llm's take whatever you send them anyway.

```python
# Define tools as simple Pydantic models - OpenAI SDK converts them automatically
class ContinuationPrompt(BaseModel):
    """Create prompt with all details to continue your work."""
    prompt: str = Field(description="Create a prompt to tell the next qwen what to do with your results.")


    def call(self, params: str, **kwargs) -> str:
        prompt = json5.loads(params)["prompt"]


class CodeInterpreter(BaseModel):
    """Execute Python code in a sandboxed Jupyter kernel"""
    code: str = Field(description="Python code to execute")


# Convert Pydantic models to OpenAI tool format automatically
TOOLS = [
    pydantic_function_tool(ContinuationPrompt),
    pydantic_function_tool(CodeInterpreter),
]
```

Once you have the tools defined, pass them into transformers directly with

```python        
text = tokenizer.apply_chat_template(
    messages,
    tools=TOOLS,  # pydantic_function_tool already returns dicts
    tokenize=False,
    add_generation_prompt=True,
    enable_thinking=True
)
```

Much easier than trying to define tools in pure json and you get full control with transformers.


### Awesome Code Interpreter!!!

[Qwen Agent](https://github.com/QwenLM/Qwen-Agent) has an insanely great code interpreter that's sandboxed, runs in jupyter, doesn't crash on errors. You can use it with the qwen agent framework but this is how you use it with transformers.

```python
from qwen_agent.tools.code_interpreter import CodeInterpreter as QwenCodeInterpreter

_code_interpreter = QwenCodeInterpreter()

_code_interpreter.call(json.dumps({"code": "'hello world'""}))
```

I am a big fan of their code interpreter. It will even generate matplotlib charts!

### Simply Parsing Tool Calls!

I know a lot of agentic frameworks like langchain will handle tool calls for you but it's really not hard to do. For example

```python
pattern = r'<tool_call>\s*(\{.*?\})\s*</tool_call>'
matches = re.findall(pattern, content, re.DOTALL)
for match in matches:
    call = json.loads(match) # fail fast.
    tool_calls.append(call)
for tool in tool_calls:
    print(tool['name'])
    print(args['your arg1'])
    print(args['your arg2'])
```

## Model Size Notes

I tested with `qwen3:0.6b` but it only works maybe 1 in 5 tries. The 0.6b model often gets confused about tool calling or writes broken Python. The 1.7b model works reliably. If you want even more consistent results, `qwen3:4b` and `qwen3:8b` are also options.

It's pretty satisfying to watch a 1.7 billion parameter model running on your laptop coordinate a two-step workflow entirely on its own.
