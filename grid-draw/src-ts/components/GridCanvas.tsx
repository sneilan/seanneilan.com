import { useCallback, useEffect, useRef, useState } from 'react';
import { useGridWasm } from '../hooks/useGridWasm';
import { useGridStore, getSelectionBoundsAll, type SelectedItem } from '../store/gridStore';
import { getSelectionBounds } from '../utils/selection';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { DraggablePanel } from '@/components/DraggablePanel';
import { cn } from '@/lib/utils';
import type { AnywidgetModel } from '../types/anywidget';

const CELL_SIZE = 16;
const HEADER_HEIGHT = 48;

interface GridCanvasProps {
  /** Anywidget model for Python communication (widget mode) */
  anywidgetModel?: AnywidgetModel;
  /** Widget width in pixels (widget mode only) */
  widgetWidth?: number;
  /** Widget height in pixels (widget mode only) */
  widgetHeight?: number;
}

const COLORS = [
  { hex: '#000000', name: 'Black' },
  { hex: '#ffffff', name: 'White' },
  { hex: '#cc3333', name: 'Red' },
  { hex: '#ffcc00', name: 'Yellow' },
  { hex: '#2266dd', name: 'Blue' },
  { hex: '#22aa22', name: 'Green' },
  { hex: null, name: 'Transparent' },
];

function calculateGridSize(widgetWidth?: number, widgetHeight?: number) {
  if (widgetWidth && widgetHeight) {
    // Widget mode: use provided dimensions
    const cols = Math.floor(widgetWidth / CELL_SIZE);
    const rows = Math.floor((widgetHeight - HEADER_HEIGHT) / CELL_SIZE);
    return { rows: Math.max(10, rows), cols: Math.max(10, cols) };
  }
  // Standalone mode: fill viewport
  const cols = Math.floor(window.innerWidth / CELL_SIZE);
  const rows = Math.floor((window.innerHeight - HEADER_HEIGHT) / CELL_SIZE);
  return { rows: Math.max(10, rows), cols: Math.max(10, cols) };
}

function GridCanvas({ anywidgetModel, widgetWidth, widgetHeight }: GridCanvasProps = {}) {
  const isWidgetMode = !!anywidgetModel;
  const [gridSize, setGridSize] = useState(() => calculateGridSize(widgetWidth, widgetHeight));
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { grid, loading, error } = useGridWasm(canvasRef, gridSize.rows, gridSize.cols);

  // Get state and actions from store
  const store = useGridStore();
  const {
    tool, setTool,
    colorIdx, setColorIdx,
    isDrawing, drawMode, startDrawing, stopDrawing,
    lineStart, startLine, finishLine,
    rectStart, startRect, finishRect,
    selectedItems, setSelectedItems,
    clipboard, copy, paste, deleteSelected,
    selectMode, isSelecting,
    selectBoxStart, selectDragStart,
    startBoxSelection, updateBoxSelection, finishBoxSelection, cancelBoxSelection,
    startDragSelection, finishDragSelection, cancelDragSelection,
    setMousePos, addItemToSelection, removeItemFromSelection,
    hitTestShapes, getSelectedCells,
    jsonOutput, tensorOutput,
    importJson, importTensor, clear,
    updateOutputs, renderSelection,
    setGrid,
  } = store;

  // Helper to get selected cells only
  const selectedCells = getSelectedCells();

  // Sync grid reference to store
  useEffect(() => {
    setGrid(grid);
  }, [grid, setGrid]);

  // Handle window resize (only in standalone mode)
  useEffect(() => {
    if (isWidgetMode) return; // Widget mode uses fixed dimensions

    const handleResize = () => {
      const newSize = calculateGridSize();
      setGridSize(newSize);
      if (grid) {
        grid.resize(newSize.rows, newSize.cols);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [grid, isWidgetMode]);

  // Send data to Python (widget mode only)
  const sendToPython = useCallback(() => {
    if (!anywidgetModel || !grid) return;

    const tensorStr = grid.export_pytorch_tensor();
    const jsonStr = grid.export_json();

    try {
      const tensorData = JSON.parse(tensorStr);
      const jsonData = JSON.parse(jsonStr);

      anywidgetModel.set('tensor_data', tensorData);
      anywidgetModel.set('json_data', jsonData);
      anywidgetModel.save_changes();
    } catch (e) {
      console.error('Failed to send data to Python:', e);
    }
  }, [anywidgetModel, grid]);

  // Keyboard shortcuts (disabled in widget mode to avoid notebook conflicts)
  useEffect(() => {
    if (isWidgetMode) return; // Skip global shortcuts in widget mode

    const onKey = (e: KeyboardEvent) => {
      if (e.key === '\\') setTool(tool === 'line' ? 'draw' : 'line');
      if (e.key === 'm') setTool(tool === 'rect' ? 'draw' : 'rect');
      if (e.key === 's') setTool(tool === 'select' ? 'draw' : 'select');
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedItems.length > 0) {
        e.preventDefault();
        deleteSelected();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'c' && selectedItems.length > 0) {
        e.preventDefault();
        copy();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'v' && clipboard) {
        e.preventDefault();
        paste();
      }
      const n = parseInt(e.key);
      if (n >= 1 && n <= 7) setColorIdx(n - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [tool, setTool, setColorIdx, selectedItems, deleteSelected, copy, paste, clipboard, isWidgetMode]);

  // Coordinate helpers
  const getCanvasXY = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = event.currentTarget;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (event.clientX - rect.left) * scaleX,
      y: (event.clientY - rect.top) * scaleY,
    };
  };

  const getCellCoords = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getCanvasXY(event);
    return { col: Math.floor(x / CELL_SIZE), row: Math.floor(y / CELL_SIZE) };
  };

  const getIntersectionCoords = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getCanvasXY(event);
    const cols = grid?.get_cols() ?? gridSize.cols;
    const rows = grid?.get_rows() ?? gridSize.rows;
    const col = Math.max(0, Math.min(cols, Math.round(x / CELL_SIZE)));
    const row = Math.max(0, Math.min(rows, Math.round(y / CELL_SIZE)));
    return { col, row };
  };

  const isItemSelected = (item: SelectedItem) => {
    return selectedItems.some(s => {
      if (s.type !== item.type) return false;
      if (s.type === 'cell' && item.type === 'cell') {
        return s.row === item.row && s.col === item.col;
      }
      if (s.type === 'line' && item.type === 'line') {
        return s.index === item.index;
      }
      if (s.type === 'rect' && item.type === 'rect') {
        return s.index === item.index;
      }
      return false;
    });
  };

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (!grid) return;
      grid.set_draw_color(colorIdx);
      const cols = grid.get_cols();
      const rows = grid.get_rows();

      if (tool === 'draw') {
        const { col, row } = getCellCoords(event);
        if (col >= cols || row >= rows) return;
        const mode = colorIdx === 6 ? false : !grid.get_cell(row, col);
        startDrawing(mode);
        grid.set_cell(row, col, mode);
        updateOutputs();
      } else if (tool === 'line') {
        const { col, row } = getIntersectionCoords(event);
        startLine({ row, col });
        grid.render_with_line(row, col, row, col);
      } else if (tool === 'rect') {
        const { col, row } = getIntersectionCoords(event);
        startRect({ row, col });
        grid.render_with_rect(row, col, row, col);
      } else if (tool === 'select') {
        const { col, row } = getCellCoords(event);
        const { x, y } = getCanvasXY(event);
        if (col >= cols || row >= rows) return;

        const shiftHeld = event.shiftKey;

        // Check if clicking on any selected item's bounding box (cells, lines, rects)
        const bounds = getSelectionBoundsAll(selectedItems, grid);
        const inBounds = bounds && row >= bounds.minRow && row <= bounds.maxRow &&
                         col >= bounds.minCol && col <= bounds.maxCol;

        // First, hit test to see if we clicked on a shape
        const hitItem = hitTestShapes(x, y);

        if (inBounds && selectedItems.length > 0 && !shiftHeld && !hitItem) {
          // Click inside selection bounding box (but not on a shape) - start drag
          startDragSelection({ row, col });
          renderSelection();
        } else if (hitItem) {
          // Clicked on a shape (cell, line, or rect)
          if (shiftHeld && !isItemSelected(hitItem)) {
            addItemToSelection(hitItem);
          } else if (shiftHeld && isItemSelected(hitItem)) {
            removeItemFromSelection(hitItem);
          } else {
            // Regular click - select single item and prepare for drag
            setSelectedItems([hitItem]);
            startDragSelection({ row, col });
            grid.render();
            // Highlight the selected item
            if (hitItem.type === 'cell') {
              grid.highlight_cell(hitItem.row, hitItem.col);
            } else if (hitItem.type === 'line') {
              grid.highlight_line(hitItem.index);
            } else if (hitItem.type === 'rect') {
              grid.highlight_rect(hitItem.index);
            }
          }
        } else {
          // Click on empty space - start box selection
          startBoxSelection({ row, col }, shiftHeld);
        }
      }
    },
    [grid, tool, colorIdx, selectedItems, selectedCells, hitTestShapes, startDrawing, startLine, startRect, startBoxSelection, startDragSelection, addItemToSelection, removeItemFromSelection, setSelectedItems, updateOutputs, renderSelection]
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (!grid) return;

      const coords = getCellCoords(event);
      setMousePos(coords);

      if (!isDrawing && !isSelecting) return;
      const cols = grid.get_cols();
      const rows = grid.get_rows();

      if (tool === 'draw' && isDrawing) {
        const { col, row } = getCellCoords(event);
        if (col >= cols || row >= rows) return;
        grid.set_cell(row, col, drawMode);
        updateOutputs();
      } else if (tool === 'line' && lineStart) {
        const { col, row } = getIntersectionCoords(event);
        grid.render_with_line(lineStart.row, lineStart.col, row, col);
      } else if (tool === 'rect' && rectStart) {
        const { col, row } = getIntersectionCoords(event);
        grid.render_with_rect(rectStart.row, rectStart.col, row, col);
      } else if (tool === 'select' && isSelecting) {
        const { col: rawCol, row: rawRow } = getCellCoords(event);
        const col = Math.max(0, Math.min(cols - 1, rawCol));
        const row = Math.max(0, Math.min(rows - 1, rawRow));

        if (selectMode === 'box' && selectBoxStart) {
          updateBoxSelection({ row, col });
        } else if (selectMode === 'drag' && selectDragStart && selectedItems.length > 0) {
          const deltaRow = row - selectDragStart.row;
          const deltaCol = col - selectDragStart.col;
          grid.render();
          // Preview drag for all items
          const previewCells: { row: number; col: number }[] = [];
          for (const item of selectedItems) {
            if (item.type === 'cell') {
              const newRow = item.row + deltaRow;
              const newCol = item.col + deltaCol;
              if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                grid.highlight_cell(newRow, newCol);
                previewCells.push({ row: newRow, col: newCol });
              }
            } else if (item.type === 'line') {
              // Lines don't contribute to cell preview bounds but we still highlight them
              grid.highlight_line(item.index);
            } else if (item.type === 'rect') {
              grid.highlight_rect(item.index);
            }
          }
          if (previewCells.length > 1) {
            const bounds = getSelectionBounds(previewCells);
            if (bounds) {
              grid.draw_selection_box(bounds.minRow, bounds.minCol, bounds.maxRow + 1, bounds.maxCol + 1);
            }
          }
        }
      }
    },
    [grid, tool, isDrawing, isSelecting, drawMode, lineStart, rectStart, selectMode, selectBoxStart, selectDragStart, selectedItems, setMousePos, updateBoxSelection, updateOutputs]
  );

  const handleMouseUp = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (!grid) return;

      if (tool === 'draw') {
        stopDrawing();
      } else if (tool === 'line') {
        if (lineStart) {
          const { col, row } = getIntersectionCoords(event);
          grid.draw_line(lineStart.row, lineStart.col, row, col);
          updateOutputs();
        }
        finishLine();
      } else if (tool === 'rect') {
        if (rectStart) {
          const { col, row } = getIntersectionCoords(event);
          grid.draw_rect(rectStart.row, rectStart.col, row, col);
          updateOutputs();
        }
        finishRect();
      } else if (tool === 'select') {
        const { col, row } = getCellCoords(event);

        if (selectMode === 'box') {
          finishBoxSelection({ row, col });
        } else if (selectMode === 'drag') {
          finishDragSelection({ row, col });
        }
      }
    },
    [grid, tool, lineStart, rectStart, selectMode, stopDrawing, finishLine, finishRect, finishBoxSelection, finishDragSelection, updateOutputs]
  );

  const handleMouseLeave = useCallback(() => {
    if (tool === 'draw') {
      stopDrawing();
    } else if (tool === 'line') {
      if (grid) grid.render();
      finishLine();
    } else if (tool === 'rect') {
      if (grid) grid.render();
      finishRect();
    } else if (tool === 'select') {
      if (selectMode === 'box') {
        cancelBoxSelection();
      } else if (selectMode === 'drag') {
        cancelDragSelection();
      }
    }
  }, [grid, tool, selectMode, stopDrawing, finishLine, finishRect, cancelBoxSelection, cancelDragSelection]);

  if (error) {
    return (
      <div className={cn(
        "flex items-center justify-center bg-gray-100",
        isWidgetMode ? "w-full h-full" : "min-h-screen"
      )}>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-red-600">Error loading WASM: {error}</p>
        </div>
      </div>
    );
  }

  // Widget mode: contained layout
  if (isWidgetMode) {
    return (
      <div
        className="relative bg-gray-50 border rounded overflow-hidden"
        style={{ width: widgetWidth, height: widgetHeight }}
      >
        <header className="absolute top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 flex items-center px-4">
          <h1 className="text-lg font-bold">Grid Draw</h1>
          {loading && <span className="ml-4 text-sm text-gray-500">Loading...</span>}
          <div className="ml-auto">
            <Button
              variant="default"
              onClick={sendToPython}
              disabled={loading}
              size="sm"
            >
              Send to Python
            </Button>
          </div>
        </header>

        <canvas
          ref={canvasRef}
                    className={cn(
            "absolute left-0 right-0 bottom-0",
            loading && "opacity-50"
          )}
          style={{
            top: HEADER_HEIGHT,
            cursor: loading ? 'wait' : 'crosshair',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        />

        <DraggablePanel title="Tools" defaultPosition={{ x: 20, y: HEADER_HEIGHT + 20 }}>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1 block">Mode</label>
              <ToggleGroup
                type="single"
                value={tool}
                onValueChange={(val) => val && setTool(val as typeof tool)}
                variant="outline"
                className="flex-wrap"
              >
                <ToggleGroupItem value="draw" className="text-xs">Draw</ToggleGroupItem>
                <ToggleGroupItem value="line" className="text-xs">Line</ToggleGroupItem>
                <ToggleGroupItem value="rect" className="text-xs">Rect</ToggleGroupItem>
                <ToggleGroupItem value="select" className="text-xs">Select</ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div>
              <label className="text-xs font-medium text-gray-500 mb-1 block">Color</label>
              <div className="flex gap-1">
                {COLORS.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setColorIdx(i)}
                    title={c.name}
                    className={cn(
                      "w-6 h-6 rounded border-2 transition-all",
                      colorIdx === i
                        ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500"
                        : "border-gray-300 hover:border-gray-400",
                      c.hex === '#ffffff' && "shadow-sm"
                    )}
                    style={{
                      backgroundColor: c.hex ?? 'transparent',
                      backgroundImage: c.hex === null
                        ? 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)'
                        : undefined,
                      backgroundSize: c.hex === null ? '6px 6px' : undefined,
                      backgroundPosition: c.hex === null ? '0 0, 0 3px, 3px -3px, -3px 0px' : undefined,
                    }}
                  />
                ))}
              </div>
            </div>

            <Button
              variant="destructive"
              onClick={clear}
              disabled={loading}
              size="sm"
              className="w-full"
            >
              Clear Grid
            </Button>
          </div>
        </DraggablePanel>
      </div>
    );
  }

  // Standalone mode: full-screen layout
  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 flex items-center px-4">
        <h1 className="text-xl font-bold">Grid Draw</h1>
        {loading && <span className="ml-4 text-sm text-gray-500">Loading...</span>}
      </header>

      <canvas
        ref={canvasRef}
                className={cn(
          "fixed left-0 right-0 bottom-0",
          loading && "opacity-50"
        )}
        style={{
          top: HEADER_HEIGHT,
          cursor: loading ? 'wait' : 'crosshair',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      />

      <DraggablePanel title="Tools" defaultPosition={{ x: 20, y: HEADER_HEIGHT + 20 }}>
        <div className="space-y-3">
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">Mode</label>
            <ToggleGroup
              type="single"
              value={tool}
              onValueChange={(val) => val && setTool(val as typeof tool)}
              variant="outline"
              className="flex-wrap"
            >
              <ToggleGroupItem value="draw" className="text-xs">Draw</ToggleGroupItem>
              <ToggleGroupItem value="line" className="text-xs">Line</ToggleGroupItem>
              <ToggleGroupItem value="rect" className="text-xs">Rect</ToggleGroupItem>
              <ToggleGroupItem value="select" className="text-xs">Select</ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">Color</label>
            <div className="flex gap-1">
              {COLORS.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setColorIdx(i)}
                  title={`${i + 1}: ${c.name}`}
                  className={cn(
                    "w-6 h-6 rounded border-2 transition-all",
                    colorIdx === i
                      ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500"
                      : "border-gray-300 hover:border-gray-400",
                    c.hex === '#ffffff' && "shadow-sm"
                  )}
                  style={{
                    backgroundColor: c.hex ?? 'transparent',
                    backgroundImage: c.hex === null
                      ? 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)'
                      : undefined,
                    backgroundSize: c.hex === null ? '6px 6px' : undefined,
                    backgroundPosition: c.hex === null ? '0 0, 0 3px, 3px -3px, -3px 0px' : undefined,
                  }}
                />
              ))}
            </div>
          </div>

          <Button
            variant="destructive"
            onClick={clear}
            disabled={loading}
            size="sm"
            className="w-full"
          >
            Clear Grid
          </Button>

          <p className="text-xs text-gray-400">
            \ line, m rect, s select, 1-7 colors
          </p>
        </div>
      </DraggablePanel>

      <DraggablePanel
        title="Selection Data"
        defaultPosition={{ x: Math.max(20, window.innerWidth - 340), y: HEADER_HEIGHT + 20 }}
      >
        <div className="space-y-3 w-72">
          {selectedCells.length > 0 && (
            <>
              <div>
                <label className="text-xs font-medium text-gray-500 mb-1 block">JSON (sparse)</label>
                <textarea
                  value={jsonOutput}
                  onChange={(e) => importJson(e.target.value)}
                  placeholder='[{"row":0,"col":0,"color":"#000000"},...]'
                  className="w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-gray-500 mb-1 block">2D Array (black = 1)</label>
                <textarea
                  value={tensorOutput}
                  onChange={(e) => importTensor(e.target.value)}
                  placeholder="[[1, 0], [0, 1], ...]"
                  className="w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          <p className="text-xs text-gray-400">
            {selectedItems.length === 0
              ? 'Select items with Select tool (s). Paste imports at mouse position.'
              : `${selectedItems.length} item${selectedItems.length !== 1 ? 's' : ''} selected${selectedCells.length > 0 ? ` (${selectedCells.length} cell${selectedCells.length !== 1 ? 's' : ''})` : ''}.`}
          </p>
        </div>
      </DraggablePanel>
    </>
  );
}

export default GridCanvas;
