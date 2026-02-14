import psutil
import torch
from pydantic import BaseModel


class Memory(BaseModel):
    cpu_gb: float
    gpu_gb: float


def monitor_memory() -> Memory:
    """Get current memory usage (CPU and GPU) in GB.

    Returns:
        dict with keys 'cpu' and 'gpu' (gpu is 0 if not available)
    """
    process = psutil.Process()
    mem_info = process.memory_info()
    cpu_gb = mem_info.rss / (1024 ** 3)

    # Track GPU memory if available
    gpu_gb = 0.0
    if torch.cuda.is_available():
        gpu_gb = torch.cuda.memory_allocated() / (1024 ** 3)
    elif torch.backends.mps.is_available():
        # MPS (Apple Silicon) allocated memory
        gpu_gb = torch.mps.current_allocated_memory() / (1024 ** 3)

    return Memory(cpu_gb=cpu_gb, gpu_gb=gpu_gb)
