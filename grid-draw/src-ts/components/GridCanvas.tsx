import { useCallback, useEffect, useRef, useState } from 'react';
import { useGridWasm } from '../hooks/useGridWasm';


const CANVAS_ID = 'grid-canvas';
const CELL_SIZE = 16;
const GRID_SIZE = 32;
const CANVAS_SIZE = CELL_SIZE * GRID_SIZE;

function GridCanvas() {
  const { grid, loading, error } = useGridWasm(CANVAS_ID);
  const isDrawing = useRef(false);
  const drawMode = useRef(false);
  const [tool, setTool] = useState<'draw' | 'line' | 'rect'>('draw');
  const [colorIdx, setColorIdx] = useState(0);
  const lineStart = useRef<{ row: number; col: number } | null>(null);
  const rectStart = useRef<{ row: number; col: number } | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '\\') setTool(t => t === 'line' ? 'draw' : 'line');
      if (e.key === 'm')  setTool(t => t === 'rect' ? 'draw' : 'rect');
      const n = parseInt(e.key);
      if (n >= 1 && n <= 7) setColorIdx(n - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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

  // Cell coords for draw tool (floor-snapped)
  const getCellCoords = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getCanvasXY(event);
    return { col: Math.floor(x / CELL_SIZE), row: Math.floor(y / CELL_SIZE) };
  };

  // Intersection coords for line tool (round-snapped to grid crossings)
  const getIntersectionCoords = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getCanvasXY(event);
    const col = Math.max(0, Math.min(GRID_SIZE, Math.round(x / CELL_SIZE)));
    const row = Math.max(0, Math.min(GRID_SIZE, Math.round(y / CELL_SIZE)));
    return { col, row };
  };

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (!grid) return;
      grid.set_draw_color(colorIdx);
      if (tool === 'draw') {
        const { col, row } = getCellCoords(event);
        if (col >= GRID_SIZE || row >= GRID_SIZE) return;
        if (colorIdx === 6) {
          drawMode.current = false;
        } else {
          drawMode.current = !grid.get_cell(row, col);
        }
        isDrawing.current = true;
        grid.set_cell(row, col, drawMode.current);
      } else if (tool === 'line') {
        const { col, row } = getIntersectionCoords(event);
        lineStart.current = { row, col };
        isDrawing.current = true;
        grid.render_with_line(row, col, row, col);
      } else {
        const { col, row } = getIntersectionCoords(event);
        rectStart.current = { row, col };
        isDrawing.current = true;
        grid.render_with_rect(row, col, row, col);
      }
    },
    [grid, tool, colorIdx]
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (!grid || !isDrawing.current) return;
      if (tool === 'draw') {
        const { col, row } = getCellCoords(event);
        if (col >= GRID_SIZE || row >= GRID_SIZE) return;
        grid.set_cell(row, col, drawMode.current);
      } else if (tool === 'line') {
        if (lineStart.current) {
          const { col, row } = getIntersectionCoords(event);
          grid.render_with_line(lineStart.current.row, lineStart.current.col, row, col);
        }
      } else {
        if (rectStart.current) {
          const { col, row } = getIntersectionCoords(event);
          grid.render_with_rect(rectStart.current.row, rectStart.current.col, row, col);
        }
      }
    },
    [grid, tool]
  );

  const handleMouseUp = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (tool === 'draw') {
        isDrawing.current = false;
      } else if (tool === 'line') {
        if (grid && lineStart.current) {
          const { col, row } = getIntersectionCoords(event);
          grid.draw_line(lineStart.current.row, lineStart.current.col, row, col);
        }
        lineStart.current = null;
        isDrawing.current = false;
      } else {
        if (grid && rectStart.current) {
          const { col, row } = getIntersectionCoords(event);
          grid.draw_rect(rectStart.current.row, rectStart.current.col, row, col);
        }
        rectStart.current = null;
        isDrawing.current = false;
      }
    },
    [grid, tool]
  );

  const handleMouseLeave = useCallback(() => {
    if (tool === 'draw') {
      isDrawing.current = false;
    } else if (tool === 'line') {
      if (grid) grid.render();
      lineStart.current = null;
      isDrawing.current = false;
    } else {
      if (grid) grid.render();
      rectStart.current = null;
      isDrawing.current = false;
    }
  }, [grid, tool]);

  const handleClear = useCallback(() => {
    grid?.clear();
  }, [grid]);

  if (error) {
    return <div className="grid-error">Error loading WASM: {error}</div>;
  }

  return (
    <div className="grid-canvas-container">
      <canvas
        id={CANVAS_ID}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={loading ? 'loading' : ''}
        style={{ cursor: loading ? 'wait' : 'crosshair' }}
      />
      {loading && <div className="grid-loading">Loading...</div>}
      <div className="grid-controls">
        <button onClick={handleClear} disabled={loading}>
          Clear
        </button>
        <span>Tool: {tool === 'draw' ? 'Draw' : tool === 'line' ? 'Line' : 'Rect'} (\ line · m rect)</span>
        <div style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {(['#000000','#ffffff','#cc3333','#ffcc00','#2266dd','#22aa22',null] as (string | null)[]).map((c, i) => (
            <button key={i} onClick={() => setColorIdx(i)}
              title={`${i+1}: ${['Black','White','Red','Yellow','Blue','Green','Transparent'][i]}`}
              style={{
                width: 20, height: 20,
                background: c ?? 'transparent',
                border: colorIdx === i ? '2px solid #ff8800' : '1px solid #999',
                outline: c === '#ffffff' ? '1px solid #ccc' : undefined,
                padding: 0, cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GridCanvas;
