from datasets import load_dataset
from transformers import (
    GPT2Config,
    GPT2LMHeadModel,
    GPT2TokenizerFast,
    Trainer,
    TrainingArguments,
    DataCollatorForLanguageModeling,
)

# Configure a small GPT-2 model (~18M parameters)
config = GPT2Config(
    # vocab_size=50257,  # default, matches GPT-2 tokenizer
    # n_positions=1024,  # default, max sequence length
    n_embd=256,  # width of the model
    n_layer=6,   # depth of the model
    n_head=256 // 64,  # don't worry about this - rule of thumb is n_embd / 64
)

model = GPT2LMHeadModel(config)
print(f"Parameters: {model.num_parameters():,}")

# Load tokenizer
# (Tokenizers affect efficiency - how text is split into tokens impacts
# what the model "sees". Different tokenizers can make the model more or
# less efficient depending on how they encode the input.)
tokenizer = GPT2TokenizerFast.from_pretrained("gpt2")
tokenizer.pad_token = tokenizer.eos_token

# Load and tokenize dataset
dataset = load_dataset("roneneldan/TinyStories", split="train")

def tokenize(examples):
    return tokenizer(
        examples["text"],
        truncation=True,
        max_length=512,
        padding="max_length",
    )

tokenized = dataset.map(tokenize, batched=True, remove_columns=["text"])

# Training
data_collator = DataCollatorForLanguageModeling(tokenizer=tokenizer, mlm=False)

training_args = TrainingArguments(
    output_dir="./gpt2-small",
    per_device_train_batch_size=8,
    num_train_epochs=1,
    logging_steps=100,
    save_steps=1000,
    learning_rate=5e-4,
    warmup_steps=500,
    fp16=True,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized,
    data_collator=data_collator,
)

trainer.train()

# Generate sample output
model.eval()
prompt = "Once upon a time"
inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

outputs = model.generate(
    **inputs,
    max_new_tokens=50,  # increase this for longer outputs
    do_sample=True,
    temperature=0.8,
    top_p=0.9,
)

print(tokenizer.decode(outputs[0], skip_special_tokens=True))
