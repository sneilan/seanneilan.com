import { useCallback } from 'react';
import { useGridStore } from '../../store/gridStore';
import { getCanvasXY, getCellCoords, getIntersectionCoords, type Camera } from './coords';
import type { PanGesture } from './useCameraControls';

type MouseDeps = {
  camRef: React.MutableRefObject<Camera>;
  applyCamera: (next: Camera) => void;
  isSpaceDown: React.MutableRefObject<boolean>;
  panRef: React.MutableRefObject<PanGesture | null>;
};

/**
 * The four canvas mouse handlers — pure input translation. Screen coordinates
 * are converted to world/cell coordinates (through the camera) and dispatched
 * to store actions; all gesture policy, geometry and document rendering live in
 * the store (pressSelectAt, hoverAffordanceAt, pressDrawAt, the preview
 * actions). Only the pan gesture is handled here: it drives the camera — a view
 * concern — and never touches the document. This layering is lint-enforced:
 * eslint bans `grid.*` in this file.
 */
export function useCanvasMouse({ camRef, applyCamera, isSpaceDown, panRef }: MouseDeps) {
  const {
    tool,
    isDrawing, lineStart, rectStart,
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
    pressSelectAt, renderDragPreview, hoverAffordanceAt, doubleClickAt,
    pressDrawAt, dragDrawAt, endDrawStroke, stopDrawing,
    startLine, renderLinePreview, commitLine, finishLine, cancelLine,
    startRect, renderRectPreview, commitRect, finishRect, cancelRect,
  } = useGridStore();

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      // Pan gesture (middle mouse, or Space-held left drag) takes precedence over
      // every tool and never mutates the document.
      if (event.button === 1 || (event.button === 0 && isSpaceDown.current)) {
        event.preventDefault();
        panRef.current = { x: event.clientX, y: event.clientY, camX: camRef.current.x, camY: camRef.current.y };
        event.currentTarget.style.cursor = 'grabbing';
        return;
      }

      if (tool === 'draw') {
        const { col, row } = getCellCoords(event, camRef.current, subdivision);
        pressDrawAt({ row, col });
      } else if (tool === 'line') {
        const { col, row } = getIntersectionCoords(event, camRef.current, subdivision);
        startLine({ row, col });
      } else if (tool === 'rect') {
        const { col, row } = getIntersectionCoords(event, camRef.current, subdivision);
        startRect({ row, col });
      } else if (tool === 'text') {
        // Place the text caret at the clicked cell and start typing. If a text
        // is already in progress, beginTextEdit commits it first.
        const { col, row } = getCellCoords(event, camRef.current, subdivision);
        beginTextEdit({ row, col });
      } else if (tool === 'select') {
        const { col, row } = getCellCoords(event, camRef.current, subdivision);
        const { x, y } = getCanvasXY(event, camRef.current);
        pressSelectAt({ x, y, row, col, shift: event.shiftKey, zoom: camRef.current.zoom });
      }
    },
    [tool, subdivision, pressDrawAt, startLine, startRect, beginTextEdit, pressSelectAt, camRef, isSpaceDown, panRef]
  );

  const handleDoubleClick = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      if (tool !== 'select' || isSpaceDown.current) return;
      const { x, y } = getCanvasXY(event, camRef.current);
      doubleClickAt({ x, y, zoom: camRef.current.zoom });
    },
    [tool, doubleClickAt, camRef, isSpaceDown]
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
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

      // Cursor feedback for the select tool: 'grabbing'/'move' while a gesture
      // is active (pure state), otherwise ask the store what the pointer is
      // over and map the affordance to a CSS cursor.
      if (tool === 'select') {
        const canvas = event.currentTarget;
        if (isSelecting && (selectMode === 'resize' || selectMode === 'rotate')) {
          canvas.style.cursor = 'grabbing';
        } else if (isSelecting && selectMode === 'drag') {
          canvas.style.cursor = 'move';
        } else {
          const { x, y } = getCanvasXY(event, camRef.current);
          const affordance = hoverAffordanceAt({ x, y, row: coords.row, col: coords.col, zoom: camRef.current.zoom });
          canvas.style.cursor =
            affordance === 'rotate' || affordance === 'resize' ? 'grab'
              : affordance === 'move' ? 'move'
                : 'crosshair';
        }
      } else {
        event.currentTarget.style.cursor = 'crosshair';
      }

      if (!isDrawing && !isSelecting) return;

      if (tool === 'draw' && isDrawing) {
        dragDrawAt({ row: coords.row, col: coords.col });
      } else if (tool === 'line' && lineStart) {
        const { col, row } = getIntersectionCoords(event, camRef.current, subdivision);
        renderLinePreview({ row, col });
      } else if (tool === 'rect' && rectStart) {
        const { col, row } = getIntersectionCoords(event, camRef.current, subdivision);
        renderRectPreview({ row, col });
      } else if (tool === 'select' && isSelecting && selectMode === 'resize') {
        // Resize uses intersection coords (corners), like line/rect drawing.
        const { col, row } = getIntersectionCoords(event, camRef.current, subdivision);
        updateResize({ row, col });
      } else if (tool === 'select' && isSelecting && selectMode === 'rotate') {
        const { x, y } = getCanvasXY(event, camRef.current);
        updateRotate(x, y);
      } else if (tool === 'select' && isSelecting) {
        // Infinite grid: no clamping — selection works in negative space too.
        if (selectMode === 'box' && selectBoxStart) {
          updateBoxSelection({ row: coords.row, col: coords.col });
        } else if (selectMode === 'drag' && selectDragStart && selectedItems.length > 0) {
          // Ghosts of the selection at the drag's snapped destination.
          renderDragPreview({ row: coords.row, col: coords.col });
        }
      }
    },
    [tool, subdivision, isDrawing, isSelecting, lineStart, rectStart, selectMode, selectBoxStart, selectDragStart, selectedItems, setMousePos, hoverAffordanceAt, dragDrawAt, renderLinePreview, renderRectPreview, updateBoxSelection, renderDragPreview, updateResize, updateRotate, camRef, panRef, applyCamera]
  );

  const handleMouseUp = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
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
        if (selectMode === 'rotate') {
          const { x, y } = getCanvasXY(event, camRef.current);
          finishRotate(x, y);
        } else if (selectMode === 'resize') {
          const { col, row } = getIntersectionCoords(event, camRef.current, subdivision);
          finishResize({ row, col });
        } else if (selectMode === 'box') {
          const { col, row } = getCellCoords(event, camRef.current, subdivision);
          finishBoxSelection({ row, col });
        } else if (selectMode === 'drag') {
          const { col, row } = getCellCoords(event, camRef.current, subdivision);
          finishDragSelection({ row, col });
        }
      }
    },
    [tool, subdivision, lineStart, rectStart, selectMode, stopDrawing, finishLine, finishRect, finishBoxSelection, finishDragSelection, finishResize, finishRotate, endDrawStroke, commitLine, commitRect, camRef, isSpaceDown, panRef]
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
      cancelLine();
    } else if (tool === 'rect') {
      cancelRect();
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
  }, [tool, selectMode, stopDrawing, cancelLine, cancelRect, cancelBoxSelection, cancelDragSelection, cancelResize, cancelRotate, panRef]);

  return { handleMouseDown, handleDoubleClick, handleMouseMove, handleMouseUp, handleMouseLeave };
}
