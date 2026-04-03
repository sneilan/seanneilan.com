import marimo

__generated_with = "0.13.0"
app = marimo.App(width="medium")


@app.cell
def _():
    import marimo as mo
    from grid_draw_widget import GridDrawWidget
    return GridDrawWidget, mo


@app.cell
def _(GridDrawWidget, mo):
    widget = mo.ui.anywidget(GridDrawWidget(width=800, height=500))
    widget
    return (widget,)


@app.cell
def _(widget):
    # Access data after clicking "Send to Python"
    print("Tensor data:", widget.tensor_data)
    print("JSON data:", widget.json_data)
    return


@app.cell
def _(widget):
    # Convert to PyTorch (after drawing and sending)
    if widget.tensor_data:
        t = widget.to_torch()
        print("Tensor shape:", t.shape)
        print(t)
    else:
        print("Draw something and click 'Send to Python'")
    return


if __name__ == "__main__":
    app.run()
