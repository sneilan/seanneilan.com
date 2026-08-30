import { useCallback } from 'react';
import type { GridCanvasWasm } from '../../types/grid';
import { useGridStore, getSelectionBoundsAll } from '../../store/gridStore';
import { isItemSelected } from '../../store/gridHelpers';
import { getLineHandles, getRectHandles, hitTestHandle, rotateHandlePoint } from '../../utils/handles';
import { CELL_SIZE, textFrameCorners } from './constants';
import { getCanvasXY, getCellCoords, getIntersectionCoords, type Camera } from './coords';
import type { PanGesture } from './useCameraControls';

type MouseDeps = {
  grid: GridCanvasWasm | null;
  camRef: React.MutableRefObject<Camera>;
  applyCamera: (next: Camera) => void;
  isSpaceDown: React.MutableRefObject<boolean>;
  panRef: React.MutableRefObject<PanGesture | null>;
};

/**
 * The four canvas mouse handlers: draw/line/rect/text/select tool gestures plus
 * pan (middle mouse or Space-held left drag). All coordinates flow through the
 * camera (world space); only WASM render applies it back to the screen.
 */
export function useCanvasMouse({ grid, camRef, applyCamera, isSpaceDown, panRef }: MouseDeps) {
  const {
    tool,
    colorIdx, outlineIdx,
    isDrawing, drawMode, startDrawing, stopDrawing,
    lineStart, startLine, finishLine,
    rectStart, startRect, finishRect,
    subdivision,
    beginTextEdit,
    selectedItems,
    selectMode, isSelecting,
    selectBoxStart, selectDragStart,
    updateBoxSelection, finishBoxSelection, cancelBoxSelection,
    finishDragSelection, cancelDragSelection,
    updateResize, finishResize, cancelResize,
    updateRotate, finishRotate, cancelRotate,
    setMousePos,
    hitTestShapes,
    pressSelectAt, renderDragPreview,
    updateOutputs,
    beginDrawStroke, drawCellAt, endDrawStroke, commitLine, commitRect,
  } = useGridStore();

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (!grid) return;
      // Pan gesture (middle mouse, or Space-held left drag) takes precedence over
      // every tool and never mutates the document.
      if (event.button === 1 || (event.button === 0 && isSpaceDown.current)) {
        event.preventDefault();
        panRef.current = { x: event.clientX, y: event.clientY, camX: camRef.current.x, camY: camRef.current.y };
        event.currentTarget.style.cursor = 'grabbing';
        return;
      }
      grid.set_draw_color(colorIdx);
      grid.set_outline_color(outlineIdx);

      if (tool === 'draw') {
        const { col, row } = getCellCoords(event, camRef.current, subdivision);
        const mode = colorIdx === 6 ? false : !grid.get_cell(row, col);
        startDrawing(mode);
        // Open one history batch for the whole stroke (mousedown → mouseup).
        beginDrawStroke();
        drawCellAt(row, col, mode);
        updateOutputs();
      } else if (tool === 'line') {
        const { col, row } = getIntersectionCoords(event, camRef.current, subdivision);
        startLine({ row, col });
        grid.render_with_line(row, col, row, col);
      } else if (tool === 'rect') {
        const { col, row } = getIntersectionCoords(event, camRef.current, subdivision);
        startRect({ row, col });
        grid.render_with_rect(row, col, row, col);
      } else if (tool === 'text') {
        // Place the text caret at the clicked cell and start typing. If a text
        // is already in progress, beginTextEdit commits it first.
        const { col, row } = getCellCoords(event, camRef.current, subdivision);
        beginTextEdit({ row, col });
      } else if (tool === 'select') {
        // The whole press decision tree (rotate/resize handles, drag, shift
        // toggle, box select) lives in the store; this just converts coords.
        const { col, row } = getCellCoords(event, camRef.current, subdivision);
        const { x, y } = getCanvasXY(event, camRef.current);
        pressSelectAt({ x, y, row, col, shift: event.shiftKey, zoom: camRef.current.zoom });
      }
    },
    [grid, tool, colorIdx, outlineIdx, subdivision, startDrawing, startLine, startRect, pressSelectAt, updateOutputs, beginDrawStroke, drawCellAt, beginTextEdit, camRef, isSpaceDown, panRef]
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (!grid) return;

      // Active pan: move the camera opposite the cursor so the grabbed world
      // point follows the cursor. Screen delta maps to world delta via 1/zoom.
      if (panRef.current) {
        const p = panRef.current;
        const z = camRef.current.zoom;
        applyCamera({
          x: p.camX - (event.clientX - p.x) / z,
          y: p.camY - (event.clientY - p.y) / z,
          zoom: z,
        });
        return;
      }

      const coords = getCellCoords(event, camRef.current, subdivision);
      setMousePos(coords);

      // Cursor feedback for the select tool: grab over a handle or a draggable
      // selection, grabbing while actively dragging/resizing, move over the
      // selection's interior, crosshair otherwise.
      if (tool === 'select') {
        const canvas = event.currentTarget;
        if (isSelecting && (selectMode === 'resize' || selectMode === 'rotate')) {
          canvas.style.cursor = 'grabbing';
        } else if (isSelecting && selectMode === 'drag') {
          canvas.style.cursor = 'move';
        } else {
          const { x, y } = getCanvasXY(event, camRef.current);
          let cursor = 'crosshair';
          // Rotate-handle hover (any selection) -> grab.
          if (selectedItems.length > 0) {
            const rb = getSelectionBoundsAll(selectedItems, grid);
            if (rb) {
              const h = rotateHandlePoint(rb);
              if (Math.hypot(x - h.c * CELL_SIZE, y - h.r * CELL_SIZE) <= 10 / camRef.current.zoom) {
                cursor = 'grab';
              }
            }
          }
          // Handle hover (single line/rect selected) -> grab (resize affordance).
          if (cursor === 'crosshair' && selectedItems.length === 1) {
            const only = selectedItems[0];
            if (only.type === 'line' || only.type === 'rect' || only.type === 'text' || only.type === 'image') {
              const handles = only.type === 'line'
                ? getLineHandles(grid.get_line(only.index))
                : only.type === 'rect'
                  ? getRectHandles(grid.get_rect(only.index))
                  : only.type === 'image'
                    ? getRectHandles(grid.get_image(only.index))
                    : getRectHandles(textFrameCorners(grid.get_text(only.index)));
              if (hitTestHandle(x, y, handles, CELL_SIZE, 9)) cursor = 'grab';
            }
          }
          // Hover over a selected shape, or inside the selection bounds -> move
          // (four-way cross), to distinguish moving from resizing.
          if (cursor === 'crosshair' && selectedItems.length > 0) {
            const hit = hitTestShapes(x, y);
            const b = getSelectionBoundsAll(selectedItems, grid);
            const inB = b && coords.row >= b.minRow && coords.row <= b.maxRow &&
                        coords.col >= b.minCol && coords.col <= b.maxCol;
            if ((hit && isItemSelected(hit, selectedItems)) || inB) cursor = 'move';
          }
          canvas.style.cursor = cursor;
        }
      } else {
        event.currentTarget.style.cursor = 'crosshair';
      }

      if (!isDrawing && !isSelecting) return;

      if (tool === 'draw' && isDrawing) {
        const { col, row } = getCellCoords(event, camRef.current, subdivision);
        drawCellAt(row, col, drawMode);
        updateOutputs();
      } else if (tool === 'line' && lineStart) {
        const { col, row } = getIntersectionCoords(event, camRef.current, subdivision);
        grid.render_with_line(lineStart.row, lineStart.col, row, col);
      } else if (tool === 'rect' && rectStart) {
        const { col, row } = getIntersectionCoords(event, camRef.current, subdivision);
        grid.render_with_rect(rectStart.row, rectStart.col, row, col);
      } else if (tool === 'select' && isSelecting && selectMode === 'resize') {
        // Resize uses intersection coords (corners), like line/rect drawing.
        const { col, row } = getIntersectionCoords(event, camRef.current, subdivision);
        updateResize({ row, col });
      } else if (tool === 'select' && isSelecting && selectMode === 'rotate') {
        const { x, y } = getCanvasXY(event, camRef.current);
        updateRotate(x, y);
      } else if (tool === 'select' && isSelecting) {
        // Infinite grid: no clamping — selection works in negative space too.
        const { col, row } = getCellCoords(event, camRef.current, subdivision);

        if (selectMode === 'box' && selectBoxStart) {
          updateBoxSelection({ row, col });
        } else if (selectMode === 'drag' && selectDragStart && selectedItems.length > 0) {
          // Ghosts of the selection at the drag's snapped destination.
          renderDragPreview({ row, col });
        }
      }
    },
    [grid, tool, subdivision, isDrawing, isSelecting, drawMode, lineStart, rectStart, selectMode, selectBoxStart, selectDragStart, selectedItems, hitTestShapes, setMousePos, updateBoxSelection, renderDragPreview, updateResize, updateRotate, updateOutputs, drawCellAt, camRef, panRef, applyCamera]
  );

  const handleMouseUp = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (!grid) return;

      // End a pan gesture; restore the appropriate idle cursor.
      if (panRef.current) {
        panRef.current = null;
        event.currentTarget.style.cursor = isSpaceDown.current ? 'grab' : 'crosshair';
        return;
      }

      if (tool === 'draw') {
        // Close the stroke's history batch (one undo step for the whole stroke).
        endDrawStroke();
        stopDrawing();
      } else if (tool === 'line') {
        if (lineStart) {
          const { col, row } = getIntersectionCoords(event, camRef.current, subdivision);
          commitLine(lineStart.row, lineStart.col, row, col);
        }
        finishLine();
      } else if (tool === 'rect') {
        if (rectStart) {
          const { col, row } = getIntersectionCoords(event, camRef.current, subdivision);
          commitRect(rectStart.row, rectStart.col, row, col);
        }
        finishRect();
      } else if (tool === 'select') {
        const { col, row } = getCellCoords(event, camRef.current, subdivision);

        if (selectMode === 'rotate') {
          const { x, y } = getCanvasXY(event, camRef.current);
          finishRotate(x, y);
        } else if (selectMode === 'resize') {
          const { col: icol, row: irow } = getIntersectionCoords(event, camRef.current, subdivision);
          finishResize({ row: irow, col: icol });
        } else if (selectMode === 'box') {
          finishBoxSelection({ row, col });
        } else if (selectMode === 'drag') {
          finishDragSelection({ row, col });
        }
      }
    },
    [grid, tool, subdivision, lineStart, rectStart, selectMode, stopDrawing, finishLine, finishRect, finishBoxSelection, finishDragSelection, finishResize, finishRotate, endDrawStroke, commitLine, commitRect, camRef, isSpaceDown, panRef]
  );

  const handleMouseLeave = useCallback(() => {
    // Abandon any in-progress pan when the cursor leaves the canvas.
    if (panRef.current) {
      panRef.current = null;
      return;
    }
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
      } else if (selectMode === 'resize') {
        cancelResize();
      } else if (selectMode === 'rotate') {
        cancelRotate();
      }
    }
  }, [grid, tool, selectMode, stopDrawing, finishLine, finishRect, cancelBoxSelection, cancelDragSelection, cancelResize, cancelRotate, panRef]);

  return { handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave };
}
