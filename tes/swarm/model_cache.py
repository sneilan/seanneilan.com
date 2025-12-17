"""
Shared model cache for the swarm.

Loads models once and reuses them across all workers to save VRAM.
"""

from helpers import get_model


class ModelCache:
    """Load models once, share across workers."""

    def __init__(self):
        self._models: dict = {}
        self._tokenizers: dict = {}

    def get(self, model_name: str) -> tuple:
        """Get model and tokenizer, loading if needed."""
        if model_name not in self._models:
            print(f"[ModelCache] Loading {model_name}...")
            model, tokenizer = get_model(model_name)
            self._models[model_name] = model
            self._tokenizers[model_name] = tokenizer
            print(f"[ModelCache] {model_name} loaded.")
        return self._models[model_name], self._tokenizers[model_name]

    def preload(self, model_names: list[str]):
        """Preload multiple models."""
        for name in model_names:
            self.get(name)

    def list_loaded(self) -> list[str]:
        """List currently loaded models."""
        return list(self._models.keys())


# Global singleton for convenience
_global_cache: ModelCache | None = None


def get_cache() -> ModelCache:
    """Get or create the global model cache."""
    global _global_cache
    if _global_cache is None:
        _global_cache = ModelCache()
    return _global_cache
