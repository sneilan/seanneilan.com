import torch
from threading import Thread
from transformers import AutoTokenizer, AutoModelForCausalLM, TextIteratorStreamer


def main():
    # Model name
    model_name = "meta-llama/Llama-3.2-3B"
    # model_name = "google/gemma-3-270m"

    print("Loading tokenizer and model...")
    print(f"Model: {model_name}")

    # Load tokenizer and model
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForCausalLM.from_pretrained(
        model_name,
        torch_dtype="auto",
        device_map="auto",  # Automatically use GPU if available
    )

    print("Model loaded successfully!\n")

    # Create iterator streamer for token-by-token output
    streamer = TextIteratorStreamer(tokenizer, skip_special_tokens=True)

    # Simple prompt
    prompt = "Hello! Please introduce yourself in one sentence."

    print(f"Prompt: {prompt}\n")

    # Tokenize input
    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

    # Generate response with streaming in a separate thread
    generation_kwargs = dict(
        **inputs,
        max_new_tokens=10000000,
        temperature=0.7,
        do_sample=True,
        top_p=0.9,
        streamer=streamer,
    )
    thread = Thread(target=model.generate, kwargs=generation_kwargs)
    thread.start()

    # Iterate over tokens as they arrive
    print("Response:")
    for token in streamer:
        print(token, end="", flush=True)
    print()  # Final newline

    thread.join()


if __name__ == "__main__":
    main()
