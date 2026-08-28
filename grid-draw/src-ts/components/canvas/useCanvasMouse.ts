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
    selectedItems, setSelectedItems,
    selectMode, isSelecting,
    selectBoxStart, selectDragStart,
    startBoxSelection, updateBoxSelection, finishBoxSelection, cancelBoxSelection,
    startDragSelection, finishDragSelection, cancelDragSelection,
    startResize, updateResize, finishResize, cancelResize,
    startRotate, updateRotate, finishRotate, cancelRotate,
    setMousePos, addItemToSelection, removeItemFromSelection,
    hitTestShapes,
    updateOutputs, renderSelection,
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
        const { col, row } = getCellCoords(event, camRef.current, subdivision);
        const { x, y } = getCanvasXY(event, camRef.current);

        const shiftHeld = event.shiftKey;

        // Rotate: grabbing the round handle above the selection starts a rotate
        // (works for any selection). Checked first so it wins over drag/box.
        if (selectedItems.length > 0 && !shiftHeld) {
          const rb = getSelectionBoundsAll(selectedItems, grid);
          if (rb) {
            const h = rotateHandlePoint(rb);
            const tol = 10 / camRef.current.zoom; // ~10 screen px regardless of zoom
            if (Math.hypot(x - h.c * CELL_SIZE, y - h.r * CELL_SIZE) <= tol) {
              startRotate(x, y);
              return;
            }
          }
        }

        // Resize: if a single line/rect is selected and we grabbed one of its
        // handles, start a resize instead of a move. Checked before everything
        // else so handles take priority over the drag/hit-test branches.
        if (selectedItems.length === 1 && !shiftHeld) {
          const only = selectedItems[0];
          if (only.type === 'line' || only.type === 'rect' || only.type === 'text' || only.type === 'image') {
            const handles = only.type === 'line'
              ? getLineHandles(grid.get_line(only.index))
              : only.type === 'rect'
                ? getRectHandles(grid.get_rect(only.index))
                : only.type === 'image'
                  ? getRectHandles(grid.get_image(only.index))
                  : getRectHandles(textFrameCorners(grid.get_text(only.index)));
            const hit = hitTestHandle(x, y, handles, CELL_SIZE, 9);
            if (hit) {
              startResize({ shape: only.type, index: only.index, handle: hit.handle });
              return;
            }
          }
        }

        // Check if clicking on any selected item's bounding box (cells, lines, rects)
        const bounds = getSelectionBoundsAll(selectedItems, grid);
        const inBounds = bounds && row >= bounds.minRow && row <= bounds.maxRow &&
                         col >= bounds.minCol && col <= bounds.maxCol;

        // First, hit test to see if we clicked on a shape
        const hitItem = hitTestShapes(x, y);

        if (hitItem && !shiftHeld && isItemSelected(hitItem, selectedItems) && selectedItems.length > 1) {
          // Clicked on an item that's already part of a multi-selection -
          // drag the whole selection, don't collapse it to just this item.
          startDragSelection({ row, col });
          renderSelection();
        } else if (inBounds && selectedItems.length > 0 && !shiftHeld && !hitItem) {
          // Click inside selection bounding box (but not on a shape) - start
          // drag. Flag it as an empty-space press so a zero-movement release
          // deselects instead of keeping the selection.
          startDragSelection({ row, col }, true);
          renderSelection();
        } else if (hitItem) {
          // Clicked on a shape (cell, line, or rect)
          if (shiftHeld && !isItemSelected(hitItem, selectedItems)) {
            addItemToSelection(hitItem);
          } else if (shiftHeld && isItemSelected(hitItem, selectedItems)) {
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
            } else if (hitItem.type === 'image') {
              grid.highlight_image(hitItem.index);
            }
          }
        } else {
          // Click on empty space - start box selection
          startBoxSelection({ row, col }, shiftHeld);
        }
      }
    },
    [grid, tool, colorIdx, outlineIdx, subdivision, selectedItems, hitTestShapes, startDrawing, startLine, startRect, startBoxSelection, startDragSelection, startResize, startRotate, addItemToSelection, removeItemFromSelection, setSelectedItems, updateOutputs, renderSelection, beginDrawStroke, drawCellAt, beginTextEdit, camRef, isSpaceDown, panRef]
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
          const deltaRow = row - selectDragStart.row;
          const deltaCol = col - selectDragStart.col;
          grid.render();
          // Live preview: draw each selected element as a ghost at its new
          // position so the actual cells/lines/rects appear to move with the
          // cursor (not just an outline) until release. Cells are batched so a
          // contiguous block ghosts as one outlined region, not a lattice.
          const cellGhosts: number[] = [];
          for (const item of selectedItems) {
            if (item.type === 'cell') {
              const newRow = item.row + deltaRow;
              const newCol = item.col + deltaCol;
              cellGhosts.push(newRow, newCol, grid.get_cell_color(item.row, item.col));
            } else if (item.type === 'line') {
              const l = grid.get_line(item.index);
              if (l.length >= 6) {
                grid.preview_line(l[0] + deltaRow, l[1] + deltaCol, l[2] + deltaRow, l[3] + deltaCol, l[4], l[5]);
              }
            } else if (item.type === 'rect') {
              const rr = grid.get_rect(item.index);
              if (rr.length >= 6) {
                grid.preview_rect(rr[0] + deltaRow, rr[1] + deltaCol, rr[2] + deltaRow, rr[3] + deltaCol, rr[4], rr[5]);
              }
            } else if (item.type === 'text') {
              const t = grid.get_text(item.index); // [r, c, color, boxW, boxH, halign, valign]
              if (t.length >= 7) {
                grid.preview_text(t[0] + deltaRow, t[1] + deltaCol, t[2], grid.get_text_size(item.index), t[3], t[4], t[5], t[6], grid.get_text_string(item.index));
              }
            }
          }
          if (cellGhosts.length > 0) grid.preview_cells(new Int32Array(cellGhosts));
        }
      }
    },
    [grid, tool, subdivision, isDrawing, isSelecting, drawMode, lineStart, rectStart, selectMode, selectBoxStart, selectDragStart, selectedItems, hitTestShapes, setMousePos, updateBoxSelection, updateResize, updateRotate, updateOutputs, drawCellAt, camRef, panRef, applyCamera]
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
