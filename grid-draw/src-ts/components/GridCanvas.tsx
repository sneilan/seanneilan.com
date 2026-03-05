import { useCallback, useEffect, useRef, useState } from 'react';
import { useGridWasm } from '../hooks/useGridWasm';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { DraggablePanel } from '@/components/DraggablePanel';
import { cn } from '@/lib/utils';

const CANVAS_ID = 'grid-canvas';
const CELL_SIZE = 16;
const HEADER_HEIGHT = 48;

const COLORS = [
  { hex: '#000000', name: 'Black' },
  { hex: '#ffffff', name: 'White' },
  { hex: '#cc3333', name: 'Red' },
  { hex: '#ffcc00', name: 'Yellow' },
  { hex: '#2266dd', name: 'Blue' },
  { hex: '#22aa22', name: 'Green' },
  { hex: null, name: 'Transparent' },
];

function calculateGridSize() {
  const cols = Math.floor(window.innerWidth / CELL_SIZE);
  const rows = Math.floor((window.innerHeight - HEADER_HEIGHT) / CELL_SIZE);
  return { rows: Math.max(10, rows), cols: Math.max(10, cols) };
}

function GridCanvas() {
  const [gridSize, setGridSize] = useState(calculateGridSize);
  const { grid, loading, error } = useGridWasm(CANVAS_ID, gridSize.rows, gridSize.cols);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef(false);
  const drawMode = useRef(false);
  const [tool, setTool] = useState<'draw' | 'line' | 'rect' | 'select'>('draw');
  const [colorIdx, setColorIdx] = useState(0);
  const [jsonOutput, setJsonOutput] = useState('');
  const [tensorOutput, setTensorOutput] = useState('');
  const [selectedCells, setSelectedCells] = useState<{ row: number; col: number }[]>([]);
  const [clipboard, setClipboard] = useState<{
    cells: Array<{ relRow: number; relCol: number; color: number }>;
  } | null>(null);
  const mousePos = useRef<{ row: number; col: number }>({ row: 0, col: 0 });
  const lineStart = useRef<{ row: number; col: number } | null>(null);
  const rectStart = useRef<{ row: number; col: number } | null>(null);
  const selectBoxStart = useRef<{ row: number; col: number } | null>(null);
  const selectDragStart = useRef<{ row: number; col: number } | null>(null);
  const selectMode = useRef<'box' | 'drag' | null>(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newSize = calculateGridSize();
      setGridSize(newSize);
      if (grid) {
        grid.resize(newSize.rows, newSize.cols);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [grid]);

  const updateOutputs = useCallback(() => {
    if (grid) {
      setJsonOutput(grid.export_json());
      setTensorOutput(grid.export_pytorch_tensor());
    }
  }, [grid]);

  const handleDeleteSelected = useCallback(() => {
    if (grid && selectedCells.length > 0) {
      for (const cell of selectedCells) {
        grid.delete_cell(cell.row, cell.col);
      }
      setSelectedCells([]);
      grid.render();
      updateOutputs();
    }
  }, [grid, selectedCells, updateOutputs]);

  const renderSelection = useCallback(() => {
    if (!grid) return;
    grid.render();
    for (const cell of selectedCells) {
      grid.highlight_cell(cell.row, cell.col);
    }
  }, [grid, selectedCells]);

  const isCellSelected = useCallback((row: number, col: number) => {
    return selectedCells.some(c => c.row === row && c.col === col);
  }, [selectedCells]);

  const getCellCoordsFromEvent = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { col: 0, row: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;
    const cols = grid?.get_cols() ?? gridSize.cols;
    const rows = grid?.get_rows() ?? gridSize.rows;
    const col = Math.max(0, Math.min(cols - 1, Math.floor(x / CELL_SIZE)));
    const row = Math.max(0, Math.min(rows - 1, Math.floor(y / CELL_SIZE)));
    return { col, row };
  }, [grid, gridSize]);

  const startBoxSelection = useCallback((startRow: number, startCol: number) => {
    selectMode.current = 'box';
    selectBoxStart.current = { row: startRow, col: startCol };
    isDrawing.current = true;
    setSelectedCells([]);
    grid?.render();

    const handleWindowMouseMove = (event: MouseEvent) => {
      if (!grid || selectMode.current !== 'box' || !selectBoxStart.current) return;
      const { col, row } = getCellCoordsFromEvent(event);
      grid.render_with_selection_box(selectBoxStart.current.row, selectBoxStart.current.col, row, col);
    };

    const handleWindowMouseUp = (event: MouseEvent) => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);

      if (!grid || selectMode.current !== 'box' || !selectBoxStart.current) {
        selectMode.current = null;
        isDrawing.current = false;
        return;
      }

      const { col, row } = getCellCoordsFromEvent(event);
      const r1 = Math.min(selectBoxStart.current.row, row);
      const r2 = Math.max(selectBoxStart.current.row, row);
      const c1 = Math.min(selectBoxStart.current.col, col);
      const c2 = Math.max(selectBoxStart.current.col, col);

      const cols = grid.get_cols();
      const rows = grid.get_rows();
      const newSelected: { row: number; col: number }[] = [];
      for (let r = r1; r <= r2 && r < rows; r++) {
        for (let c = c1; c <= c2 && c < cols; c++) {
          if (grid.get_cell(r, c)) {
            newSelected.push({ row: r, col: c });
          }
        }
      }
      setSelectedCells(newSelected);
      grid.render();
      for (const cell of newSelected) {
        grid.highlight_cell(cell.row, cell.col);
      }

      selectMode.current = null;
      selectBoxStart.current = null;
      isDrawing.current = false;
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('mouseup', handleWindowMouseUp);
  }, [grid, getCellCoordsFromEvent]);

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

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (!grid) return;
      grid.set_draw_color(colorIdx);
      const cols = grid.get_cols();
      const rows = grid.get_rows();

      if (tool === 'draw') {
        const { col, row } = getCellCoords(event);
        if (col >= cols || row >= rows) return;
        if (colorIdx === 6) {
          drawMode.current = false;
        } else {
          drawMode.current = !grid.get_cell(row, col);
        }
        isDrawing.current = true;
        grid.set_cell(row, col, drawMode.current);
        updateOutputs();
      } else if (tool === 'line') {
        const { col, row } = getIntersectionCoords(event);
        lineStart.current = { row, col };
        isDrawing.current = true;
        grid.render_with_line(row, col, row, col);
      } else if (tool === 'rect') {
        const { col, row } = getIntersectionCoords(event);
        rectStart.current = { row, col };
        isDrawing.current = true;
        grid.render_with_rect(row, col, row, col);
      } else if (tool === 'select') {
        const { col, row } = getCellCoords(event);
        if (col >= cols || row >= rows) return;

        if (isCellSelected(row, col)) {
          selectMode.current = 'drag';
          selectDragStart.current = { row, col };
          isDrawing.current = true;
          renderSelection();
        } else if (grid.get_cell(row, col)) {
          setSelectedCells([{ row, col }]);
          selectMode.current = 'drag';
          selectDragStart.current = { row, col };
          isDrawing.current = true;
          grid.render();
          grid.highlight_cell(row, col);
        } else {
          startBoxSelection(row, col);
        }
      }
    },
    [grid, tool, colorIdx, gridSize, updateOutputs, isCellSelected, renderSelection, startBoxSelection]
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (!grid) return;

      // Always track mouse position for paste
      const coords = getCellCoords(event);
      mousePos.current = { row: coords.row, col: coords.col };

      if (!isDrawing.current) return;
      const cols = grid.get_cols();
      const rows = grid.get_rows();

      if (tool === 'draw') {
        const { col, row } = getCellCoords(event);
        if (col >= cols || row >= rows) return;
        grid.set_cell(row, col, drawMode.current);
        updateOutputs();
      } else if (tool === 'line') {
        if (lineStart.current) {
          const { col, row } = getIntersectionCoords(event);
          grid.render_with_line(lineStart.current.row, lineStart.current.col, row, col);
        }
      } else if (tool === 'rect') {
        if (rectStart.current) {
          const { col, row } = getIntersectionCoords(event);
          grid.render_with_rect(rectStart.current.row, rectStart.current.col, row, col);
        }
      } else if (tool === 'select') {
        const { col: rawCol, row: rawRow } = getCellCoords(event);
        const col = Math.max(0, Math.min(cols - 1, rawCol));
        const row = Math.max(0, Math.min(rows - 1, rawRow));

        if (selectMode.current === 'box' && selectBoxStart.current) {
          grid.render_with_selection_box(selectBoxStart.current.row, selectBoxStart.current.col, row, col);
        } else if (selectMode.current === 'drag' && selectDragStart.current && selectedCells.length > 0) {
          const deltaRow = row - selectDragStart.current.row;
          const deltaCol = col - selectDragStart.current.col;
          grid.render();
          for (const cell of selectedCells) {
            const newRow = cell.row + deltaRow;
            const newCol = cell.col + deltaCol;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
              grid.highlight_cell(newRow, newCol);
            }
          }
        }
      }
    },
    [grid, tool, gridSize, updateOutputs, selectedCells]
  );

  const handleMouseUp = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (!grid) return;
      const cols = grid.get_cols();
      const rows = grid.get_rows();

      if (tool === 'draw') {
        isDrawing.current = false;
      } else if (tool === 'line') {
        if (lineStart.current) {
          const { col, row } = getIntersectionCoords(event);
          grid.draw_line(lineStart.current.row, lineStart.current.col, row, col);
          updateOutputs();
        }
        lineStart.current = null;
        isDrawing.current = false;
      } else if (tool === 'rect') {
        if (rectStart.current) {
          const { col, row } = getIntersectionCoords(event);
          grid.draw_rect(rectStart.current.row, rectStart.current.col, row, col);
          updateOutputs();
        }
        rectStart.current = null;
        isDrawing.current = false;
      } else if (tool === 'select') {
        const { col, row } = getCellCoords(event);

        if (selectMode.current === 'box' && selectBoxStart.current) {
          const r1 = Math.min(selectBoxStart.current.row, row);
          const r2 = Math.max(selectBoxStart.current.row, row);
          const c1 = Math.min(selectBoxStart.current.col, col);
          const c2 = Math.max(selectBoxStart.current.col, col);

          const newSelected: { row: number; col: number }[] = [];
          for (let r = r1; r <= r2 && r < rows; r++) {
            for (let c = c1; c <= c2 && c < cols; c++) {
              if (grid.get_cell(r, c)) {
                newSelected.push({ row: r, col: c });
              }
            }
          }
          setSelectedCells(newSelected);
          grid.render();
          for (const cell of newSelected) {
            grid.highlight_cell(cell.row, cell.col);
          }
        } else if (selectMode.current === 'drag' && selectDragStart.current && selectedCells.length > 0) {
          const deltaRow = row - selectDragStart.current.row;
          const deltaCol = col - selectDragStart.current.col;

          if (deltaRow !== 0 || deltaCol !== 0) {
            const newSelected: { row: number; col: number }[] = [];
            for (const cell of selectedCells) {
              const newRow = cell.row + deltaRow;
              const newCol = cell.col + deltaCol;
              if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                grid.move_cell(cell.row, cell.col, newRow, newCol);
                newSelected.push({ row: newRow, col: newCol });
              }
            }
            setSelectedCells(newSelected);
            updateOutputs();
            grid.render();
            for (const cell of newSelected) {
              grid.highlight_cell(cell.row, cell.col);
            }
          } else {
            grid.render();
            for (const cell of selectedCells) {
              grid.highlight_cell(cell.row, cell.col);
            }
          }
        }

        selectMode.current = null;
        selectBoxStart.current = null;
        selectDragStart.current = null;
        isDrawing.current = false;
      }
    },
    [grid, tool, gridSize, updateOutputs, selectedCells]
  );

  const handleMouseLeave = useCallback(() => {
    if (tool === 'draw') {
      isDrawing.current = false;
    } else if (tool === 'line') {
      if (grid) grid.render();
      lineStart.current = null;
      isDrawing.current = false;
    } else if (tool === 'rect') {
      if (grid) grid.render();
      rectStart.current = null;
      isDrawing.current = false;
    } else if (tool === 'select') {
      if (grid) {
        grid.render();
        for (const cell of selectedCells) {
          grid.highlight_cell(cell.row, cell.col);
        }
      }
      selectMode.current = null;
      selectBoxStart.current = null;
      selectDragStart.current = null;
      isDrawing.current = false;
    }
  }, [grid, tool, selectedCells]);

  const handleClear = useCallback(() => {
    grid?.clear();
    setSelectedCells([]);
    updateOutputs();
  }, [grid, updateOutputs]);

  const handleJsonChange = useCallback((value: string) => {
    setJsonOutput(value);
    if (grid && value.trim()) {
      try {
        grid.import_json(value);
        setSelectedCells([]);
        setTensorOutput(grid.export_pytorch_tensor());
      } catch (e) {
        // Ignore parse errors while typing
      }
    }
  }, [grid]);

  const handleTensorChange = useCallback((value: string) => {
    setTensorOutput(value);
    if (grid && value.trim()) {
      try {
        // Strip tensor() wrapper if present
        let cleaned = value.trim();
        if (cleaned.startsWith('tensor(')) {
          cleaned = cleaned.slice(7);
          if (cleaned.endsWith(')')) {
            cleaned = cleaned.slice(0, -1);
          }
        }
        grid.import_tensor(cleaned);
        setSelectedCells([]);
        setJsonOutput(grid.export_json());
      } catch (e) {
        // Ignore parse errors while typing
      }
    }
  }, [grid]);

  const handleCopy = useCallback(() => {
    if (!grid || selectedCells.length === 0) return;

    // Find top-left corner of selection for relative coords
    const minRow = Math.min(...selectedCells.map(c => c.row));
    const minCol = Math.min(...selectedCells.map(c => c.col));

    const cells = selectedCells.map(cell => ({
      relRow: cell.row - minRow,
      relCol: cell.col - minCol,
      color: grid.get_cell_color(cell.row, cell.col),
    }));

    setClipboard({ cells });
  }, [grid, selectedCells]);

  const handlePaste = useCallback(() => {
    if (!grid || !clipboard || clipboard.cells.length === 0) return;

    const targetRow = mousePos.current.row;
    const targetCol = mousePos.current.col;
    const rows = grid.get_rows();
    const cols = grid.get_cols();

    const newSelected: { row: number; col: number }[] = [];

    for (const cell of clipboard.cells) {
      const newRow = targetRow + cell.relRow;
      const newCol = targetCol + cell.relCol;

      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        grid.set_draw_color(cell.color);
        grid.set_cell(newRow, newCol, true);
        newSelected.push({ row: newRow, col: newCol });
      }
    }

    setSelectedCells(newSelected);
    grid.render();
    for (const cell of newSelected) {
      grid.highlight_cell(cell.row, cell.col);
    }
    updateOutputs();
  }, [grid, clipboard, updateOutputs]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '\\') setTool(t => t === 'line' ? 'draw' : 'line');
      if (e.key === 'm')  setTool(t => t === 'rect' ? 'draw' : 'rect');
      if (e.key === 's')  setTool(t => t === 'select' ? 'draw' : 'select');
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedCells.length > 0) {
        e.preventDefault();
        handleDeleteSelected();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'c' && selectedCells.length > 0) {
        e.preventDefault();
        handleCopy();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'v' && clipboard) {
        e.preventDefault();
        handlePaste();
      }
      const n = parseInt(e.key);
      if (n >= 1 && n <= 7) setColorIdx(n - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedCells, handleDeleteSelected, handleCopy, handlePaste, clipboard]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-red-600">Error loading WASM: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Fixed title header */}
      <header className="fixed top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 flex items-center px-4">
        <h1 className="text-xl font-bold">Grid Draw</h1>
        {loading && <span className="ml-4 text-sm text-gray-500">Loading...</span>}
      </header>

      {/* Full-screen canvas */}
      <canvas
        ref={canvasRef}
        id={CANVAS_ID}
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

      {/* Draggable Tools Panel */}
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
            onClick={handleClear}
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

      {/* Draggable Data Panel */}
      <DraggablePanel
        title="Data (10x10 zone)"
        defaultPosition={{ x: Math.max(20, window.innerWidth - 340), y: HEADER_HEIGHT + 20 }}
      >
        <div className="space-y-3 w-72">
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">JSON</label>
            <textarea
              value={jsonOutput}
              onChange={(e) => handleJsonChange(e.target.value)}
              className="w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">2D Array (black cells)</label>
            <textarea
              value={tensorOutput}
              onChange={(e) => handleTensorChange(e.target.value)}
              placeholder="Paste tensor([[1., 0.], ...]) or [[1, 0], ...]"
              className="w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <p className="text-xs text-gray-400">
            Edit to import. Supports ints, floats, booleans.
          </p>
        </div>
      </DraggablePanel>
    </>
  );
}

export default GridCanvas;
