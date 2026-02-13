#!/usr/bin/env python3
"""
Interactive memory usage visualization for Qwen-Target project.

Parses output.jsonl and creates an interactive matplotlib chart showing:
- CPU and GPU memory usage over time
- Event annotations marking key milestones
- Zoom/pan capabilities for detailed inspection
"""

import json
import re
import sys
from pathlib import Path
from typing import List, Tuple

import matplotlib.pyplot as plt
from matplotlib.figure import Figure
from matplotlib.axes import Axes


# Pattern to match memory data: "X.XX, Y.YY"
MEMORY_PATTERN = re.compile(r'^(\d+\.\d+), (\d+\.\d+)$')

# Events to filter out (too noisy for visualization)
NOISE_PATTERNS = [
    r'^https?://',  # HTTP requests
    r'HEAD /api/',  # API calls
    r'GET /api/',
    r'Using selector:',
    r'device map:',
]


def should_skip_event(message: str) -> bool:
    """Return True if event should be filtered out as noise."""
    return any(re.search(pattern, message) for pattern in NOISE_PATTERNS)


def parse_log_file(file_path: Path) -> Tuple[List[float], List[float], List[float], List[Tuple[float, str]]]:
    """
    Parse output.jsonl file and extract memory data and events.

    Args:
        file_path: Path to the output.jsonl file

    Returns:
        Tuple of (times, cpu_memory, gpu_memory, events)
        where events is a list of (time, message) tuples

    Raises:
        FileNotFoundError: If file doesn't exist
        json.JSONDecodeError: If file contains invalid JSON
    """
    if not file_path.exists():
        raise FileNotFoundError(f"Log file not found: {file_path}")

    times: List[float] = []
    cpu_memory: List[float] = []
    gpu_memory: List[float] = []
    events: List[Tuple[float, str]] = []

    time_index = 0  # Each memory sample is 0.1 seconds apart

    with open(file_path, 'r') as f:
        for line_num, line in enumerate(f, 1):
            try:
                data = json.loads(line)
            except json.JSONDecodeError as e:
                print(f"Warning: Skipping invalid JSON at line {line_num}: {e}", file=sys.stderr)
                continue

            message = data.get('message', '')

            # Try to parse as memory data
            match = MEMORY_PATTERN.match(message)
            if match:
                cpu_gb = float(match.group(1))
                gpu_gb = float(match.group(2))
                current_time = time_index * 0.1  # 0.1 second intervals

                times.append(current_time)
                cpu_memory.append(cpu_gb)
                gpu_memory.append(gpu_gb)
                time_index += 1
            elif message and not should_skip_event(message):
                # It's an event message
                current_time = (time_index - 1) * 0.1 if time_index > 0 else 0.0
                events.append((current_time, message))

    if not times:
        raise ValueError("No memory data found in log file")

    return times, cpu_memory, gpu_memory, events


def create_visualization(
    times: List[float],
    cpu_memory: List[float],
    gpu_memory: List[float],
    events: List[Tuple[float, str]]
) -> Tuple[Figure, Axes]:
    """
    Create interactive matplotlib visualization of memory usage.

    Args:
        times: Time points in seconds
        cpu_memory: CPU memory usage in GB
        gpu_memory: GPU memory usage in GB
        events: List of (time, message) tuples for event annotations

    Returns:
        Tuple of (figure, axes)
    """
    fig, ax = plt.subplots(figsize=(14, 8))

    # Plot memory lines
    ax.plot(times, cpu_memory, label='CPU Memory', color='#2E86AB', linewidth=2, alpha=0.8)
    ax.plot(times, gpu_memory, label='GPU Memory', color='#E63946', linewidth=2, alpha=0.8)

    # Configure axes
    ax.set_xlabel('Time (seconds)', fontsize=12, fontweight='bold')
    ax.set_ylabel('Memory (GB)', fontsize=12, fontweight='bold')
    ax.set_title('Memory Usage During Qwen-Target Execution', fontsize=14, fontweight='bold', pad=20)
    ax.grid(True, alpha=0.3, linestyle='--')
    ax.legend(fontsize=11, loc='upper left')

    # Add event annotations
    if events:
        max_memory = max(max(cpu_memory), max(gpu_memory))
        annotation_height = max_memory * 1.05  # Place annotations slightly above max memory

        for event_time, event_message in events:
            # Add vertical line for event
            ax.axvline(x=event_time, color='gray', alpha=0.4, linestyle=':', linewidth=1)

            # Add text annotation (small font, readable when zoomed)
            ax.text(
                event_time,
                annotation_height,
                event_message,
                rotation=90,
                verticalalignment='bottom',
                fontsize=7,
                alpha=0.7,
                color='#333333'
            )

    # Adjust layout to prevent label cutoff
    plt.tight_layout()

    return fig, ax


def main():
    """Main entry point for the visualization script."""
    # Default log file path
    log_file = Path(__file__).parent / 'output.jsonl'

    # Allow custom file path from command line
    if len(sys.argv) > 1:
        log_file = Path(sys.argv[1])

    try:
        print(f"Parsing log file: {log_file}")
        times, cpu_memory, gpu_memory, events = parse_log_file(log_file)

        print(f"Found {len(times)} memory samples and {len(events)} events")
        print(f"Time range: {times[0]:.1f}s to {times[-1]:.1f}s")
        print(f"CPU memory range: {min(cpu_memory):.2f} GB to {max(cpu_memory):.2f} GB")
        print(f"GPU memory range: {min(gpu_memory):.2f} GB to {max(gpu_memory):.2f} GB")

        print("\nCreating visualization...")
        fig, ax = create_visualization(times, cpu_memory, gpu_memory, events)

        print("Opening interactive plot window...")
        print("Use the toolbar to zoom, pan, and save the figure.")
        plt.show()

    except FileNotFoundError as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
    except ValueError as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Unexpected error: {e}", file=sys.stderr)
        raise


if __name__ == '__main__':
    main()
