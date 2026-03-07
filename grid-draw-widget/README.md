# Grid Draw Widget

An interactive grid drawing widget for Marimo and Jupyter notebooks. Draw 2D patterns and export them as tensors for PyTorch analysis.

## Installation

```bash
pip install -e ./grid-draw-widget
```

## Usage in Marimo

```python
import marimo as mo
from grid_draw_widget import GridDrawWidget

# Create the widget
widget = mo.ui.anywidget(GridDrawWidget(width=800, height=600))
widget  # Display in cell
```

```python
# After drawing and clicking "Send to Python":
tensor = widget.tensor_data  # 2D array [[0, 1, ...], ...]
data = widget.json_data      # {"cells": [...], "lines": [...], "rects": [...]}

# Convert to PyTorch
import torch
t = torch.tensor(tensor, dtype=torch.float32)

# Or use helper methods
t = widget.to_torch()  # Returns torch.Tensor
arr = widget.to_numpy()  # Returns numpy.ndarray
```

## Features

- Full drawing UI: Draw, Line, Rect, Select tools
- Multiple colors
- Export data as:
  - 2D tensor (black=1, else=0)
  - Sparse JSON with coordinates and colors
- Click "Send to Python" to sync data to notebook

## Building from Source

```bash
cd grid-draw
npm install
npm run build:widget
```
