"""Grid Draw Widget - A grid drawing widget for Marimo/Jupyter notebooks."""

import anywidget
import traitlets
import pathlib

__version__ = "0.1.0"

_STATIC_DIR = pathlib.Path(__file__).parent / "static"


class GridDrawWidget(anywidget.AnyWidget):
    """Interactive grid drawing widget with tensor/JSON export to Python.

    Usage in Marimo:
        import marimo as mo
        from grid_draw_widget import GridDrawWidget

        widget = mo.ui.anywidget(GridDrawWidget(width=800, height=600))
        widget  # Display widget

        # After drawing and clicking "Send to Python":
        tensor = widget.tensor_data  # [[0, 1, ...], ...]
        data = widget.json_data      # {"cells": [...], "lines": [...], "rects": [...]}
    """

    _esm = _STATIC_DIR / "widget.js"
    _css = _STATIC_DIR / "widget.css"

    # Data synced from JavaScript to Python (user clicks "Send to Python")
    tensor_data = traitlets.List([]).tag(sync=True)
    json_data = traitlets.Dict({}).tag(sync=True)

    # Configuration from Python to JavaScript
    width = traitlets.Int(800).tag(sync=True)
    height = traitlets.Int(600).tag(sync=True)

    def to_torch(self):
        """Convert tensor_data to a PyTorch tensor.

        Returns:
            torch.Tensor: 2D tensor of the grid data
        """
        import torch
        return torch.tensor(self.tensor_data, dtype=torch.float32)

    def to_numpy(self):
        """Convert tensor_data to a NumPy array.

        Returns:
            numpy.ndarray: 2D array of the grid data
        """
        import numpy as np
        return np.array(self.tensor_data, dtype=np.float32)
