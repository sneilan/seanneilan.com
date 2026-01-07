import { useCallback } from 'react';
import { useGridWasm } from '../hooks/useGridWasm';

const CANVAS_ID = 'grid-canvas';
const CELL_SIZE = 16;
const GRID_SIZE = 32;
const CANVAS_SIZE = CELL_SIZE * GRID_SIZE;

function GridCanvas() {
  const { grid, loading, error } = useGridWasm(CANVAS_ID);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (!grid) return;

      const canvas = event.currentTarget;
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const x = (event.clientX - rect.left) * scaleX;
      const y = (event.clientY - rect.top) * scaleY;

      grid.handle_click(x, y);
    },
    [grid]
  );

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
        onClick={handleClick}
        className={loading ? 'loading' : ''}
        style={{ cursor: loading ? 'wait' : 'pointer' }}
      />
      {loading && <div className="grid-loading">Loading...</div>}
      <div className="grid-controls">
        <button onClick={handleClear} disabled={loading}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default GridCanvas;
