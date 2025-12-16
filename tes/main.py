import torch
from transformers import AutoTokenizer, AutoModelForCausalLM, BitsAndBytesConfig
from outlines import from_transformers, Generator
from pydantic import BaseModel
from typing import List
from peft import LoraConfig
from datasets import Dataset
from trl import SFTTrainer, SFTConfig


class Response(BaseModel):
    question: str
    answer: str


def main():
    # Model name

    # model_name = "Qwen/Qwen3-VL-8B-Instruct"
    model_name = "meta-llama/Llama-3.2-3B"
    # model_name = "google/gemma-3-270m"

    print("Loading tokenizer and model...")
    print(f"Model: {model_name}")

    # Load tokenizer and model (you keep full control here)
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    hf_model = AutoModelForCausalLM.from_pretrained(
        model_name,
        dtype="auto",
        device_map="auto",  # Automatically use GPU if available
    )

    print("Model loaded successfully!\n")

    # Wrap with Outlines for structured output
    model = from_transformers(hf_model, tokenizer)

    # Simple prompt
    prompt = "Generate a question of a user asking what your favorite color is. And an answer stating it is blue."

    print(f"Prompt: {prompt}\n")

    # Generate structured response with your generation controls
    generator = Generator(model, output_type=Response)
    responses: List[Response] = []
    for i in range(100):
        json_str = generator(
            prompt,
            max_new_tokens=1000,
            temperature=1.2,
            do_sample=True,
            top_p=0.9,
        )

        # Parse the JSON string into the Pydantic model
        result = Response.model_validate_json(json_str)

        print(f"Question: {result.question}")
        print(f"Answer: {result.answer}")
        responses.append(result)

    # Save generated data to disk
    raw_dataset = Dataset.from_list([r.model_dump() for r in responses])
    raw_dataset.to_json("./generated_training_data.jsonl")
    print(f"\nSaved {len(responses)} examples to ./generated_training_data.jsonl")

    """
    # --- Fine-tune using SFTTrainer ---
    print("\n" + "=" * 50)
    print("Fine-tuning with SFTTrainer...")
    print("=" * 50 + "\n")

    # Load dataset from disk and format for training
    dataset = Dataset.from_json("./generated_training_data.jsonl")
    dataset = dataset.map(
        lambda x: {"text": f"User: {x['question']}\nAssistant: {x['answer']}"}
    )

    # QLoRA = Quantized LoRA
    # Instead of fine-tuning all 3B parameters (requires ~24GB+ VRAM):
    # 1. Freeze base model weights and quantize them to 4-bit (~1.5GB)
    # 2. Add small trainable LoRA adapters (~10-100MB)
    # 3. Only train the adapters, not the base model
    # Result: Fine-tuning a 3B model on an 11GB GPU

    # BitsAndBytes config - quantizes frozen base model weights
    bnb_config = BitsAndBytesConfig(
        load_in_4bit=True,              # 4-bit instead of 16-bit (4x smaller)
        bnb_4bit_quant_type="nf4",      # NormalFloat4 - optimized for neural net weights
        bnb_4bit_compute_dtype=torch.float16,  # Math still done in fp16 for accuracy
    )

    # LoRA config - small trainable matrices injected into attention layers
    # target_modules are the 4 matrices in each attention layer:
    #   q_proj → queries, k_proj → keys, v_proj → values, o_proj → output
    # Fewer modules = smaller adapter, less capacity
    # More modules (+ gate_proj, up_proj, down_proj) = larger adapter, more capacity
    lora_config = LoraConfig(
        r=16,                # Rank of LoRA matrices (higher = more capacity, more VRAM)
        lora_alpha=32,       # Scaling factor (alpha/r = scaling)
        target_modules=["q_proj", "k_proj", "v_proj", "o_proj"],
        lora_dropout=0.05,   # Regularization
        task_type="CAUSAL_LM",
    )

    trainer = SFTTrainer(
        model=model_name,
        train_dataset=dataset,
        args=SFTConfig(
            output_dir="./fine-tuned-favorite-color",
            max_length=256,
            num_train_epochs=3,
            per_device_train_batch_size=1,
            gradient_accumulation_steps=4,
            logging_steps=10,
            gradient_checkpointing=False,
            model_init_kwargs={"quantization_config": bnb_config},
        ),
        peft_config=lora_config,
    )
    trainer.train()
    trainer.save_model("./fine-tuned-favorite-color")

    # --- Test the fine-tuned model ---
    print("\nTesting fine-tuned model...")
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    test_prompt = "User: What is your favorite color?\nAssistant:"
    inputs = tokenizer(test_prompt, return_tensors="pt").to(trainer.model.device)
    outputs = trainer.model.generate(**inputs, max_new_tokens=50)
    print(tokenizer.decode(outputs[0], skip_special_tokens=True))

    """


if __name__ == "__main__":
    main()
