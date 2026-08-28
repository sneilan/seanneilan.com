import type { StateCreator } from 'zustand';
import type { Edit } from '../edits/types';
import { getLineHandles, getRectHandles, rotateHandlePoint } from '../../utils/handles';
import {
  addItemToSelectionArray,
  allItems,
  getSelectionBoundsAll,
  isItemSelected,
  isSelectedType,
  removeItemFromSelectionArray,
  snapDragDelta,
} from '../gridHelpers';
import type { GridStore, SelectActions, SelectedItem } from '../types';

export const createSelectSlice: StateCreator<GridStore, [], [], SelectActions> = (set, get) => ({
  // Selection actions
  setSelectedItems: (items) => {
    set({ selectedItems: items });
    // Repaint so the canvas always matches the selection (no stale boxes/handles).
    get().renderSelection();
    setTimeout(() => get().updateOutputs(), 0);
  },

  selectAll: () => {
    const { grid } = get();
    if (!grid) return;
    if (get().textEdit) get().commitTextEdit();
    const items = allItems(grid);
    if (items.length === 0) return;
    // Switch to the select tool so handles/box behave as expected post-select.
    set({ tool: 'select', selectedItems: items });
    get().renderSelection();
    get().updateOutputs();
  },

  addItemToSelection: (item) => {
    const { selectedItems } = get();
    const newSelected = addItemToSelectionArray(item, selectedItems);
    set({ selectedItems: newSelected });
    get().renderSelection();
    get().updateOutputs();
  },

  removeItemFromSelection: (item) => {
    const { selectedItems } = get();
    const newSelected = removeItemFromSelectionArray(item, selectedItems);
    set({ selectedItems: newSelected });
    get().renderSelection();
    get().updateOutputs();
  },

  clearSelection: () => {
    set({ selectedItems: [] });
    get().updateOutputs();
  },

  startBoxSelection: (cell, additive) => {
    const { selectedItems, grid } = get();
    const previousSelection = additive ? [...selectedItems] : [];
    set({
      selectMode: 'box',
      selectBoxStart: cell,
      isSelecting: true,
      previousSelection,
      selectedItems: additive ? selectedItems : [],
    });
    grid?.render();
  },

  updateBoxSelection: (currentCell) => {
    const { grid, selectBoxStart, previousSelection } = get();
    if (!grid || !selectBoxStart) return;
    grid.render_with_selection_box(selectBoxStart.row, selectBoxStart.col, currentCell.row, currentCell.col);
    // Highlight previously selected items.
    for (const item of previousSelection) {
      if (item.type === 'cell') {
        grid.highlight_square(item.index);
      } else if (item.type === 'line') {
        grid.highlight_line(item.index);
      } else if (item.type === 'rect') {
        grid.highlight_rect(item.index);
      } else if (item.type === 'text') {
        grid.highlight_text(item.index);
      } else if (item.type === 'image') {
        grid.highlight_image(item.index);
      }
    }
  },

  finishBoxSelection: (endCell) => {
    const { grid, selectBoxStart, previousSelection } = get();
    if (!grid || !selectBoxStart) {
      set({ selectMode: null, selectBoxStart: null, isSelecting: false, previousSelection: [] });
      return;
    }

    const r1 = Math.min(selectBoxStart.row, endCell.row);
    const r2 = Math.max(selectBoxStart.row, endCell.row);
    const c1 = Math.min(selectBoxStart.col, endCell.col);
    const c2 = Math.max(selectBoxStart.col, endCell.col);

    // Collect all items in the box
    const boxItems: SelectedItem[] = [];

    // Squares are atomic: touching any part of one selects the whole square.
    for (const idx of grid.squares_in_box(r1, c1, r2, c2)) {
      boxItems.push({ type: 'cell', index: idx });
    }

    // Get lines that intersect the box
    const lineCount = grid.get_line_count();
    for (let i = 0; i < lineCount; i++) {
      if (grid.line_intersects_box(i, r1, c1, r2, c2)) {
        boxItems.push({ type: 'line', index: i });
      }
    }

    // Get rects that intersect the box
    const rectCount = grid.get_rect_count();
    for (let i = 0; i < rectCount; i++) {
      if (grid.rect_intersects_box(i, r1, c1, r2, c2)) {
        boxItems.push({ type: 'rect', index: i });
      }
    }

    // Get texts that intersect the box
    const textCount = grid.get_text_count();
    for (let i = 0; i < textCount; i++) {
      if (grid.text_intersects_box(i, r1, c1, r2, c2)) {
        boxItems.push({ type: 'text', index: i });
      }
    }

    // Get images that intersect the box
    const imageCount = grid.get_image_count();
    for (let i = 0; i < imageCount; i++) {
      if (grid.image_intersects_box(i, r1, c1, r2, c2)) {
        boxItems.push({ type: 'image', index: i });
      }
    }

    // Merge with previous selection
    const newSelected = [...previousSelection];
    for (const item of boxItems) {
      if (!isItemSelected(item, newSelected)) {
        newSelected.push(item);
      }
    }

    set({
      selectedItems: newSelected,
      selectMode: null,
      selectBoxStart: null,
      isSelecting: false,
      previousSelection: [],
    });

    get().renderSelection();
    get().updateOutputs();
  },

  cancelBoxSelection: () => {
    const { previousSelection } = get();
    set({
      selectMode: null,
      selectBoxStart: null,
      isSelecting: false,
      selectedItems: previousSelection,
      previousSelection: [],
    });
    get().renderSelection();
  },

  startDragSelection: (cell, onEmpty = false) => {
    set({
      selectMode: 'drag',
      selectDragStart: cell,
      dragStartedOnEmpty: onEmpty,
      isSelecting: true,
    });
  },

  finishDragSelection: (endCell) => {
    const { grid, selectDragStart, selectedItems, dragStartedOnEmpty, updateOutputs } = get();
    if (!grid || !selectDragStart || selectedItems.length === 0) {
      set({ selectMode: null, selectDragStart: null, dragStartedOnEmpty: false, isSelecting: false });
      return;
    }

    // Snap so the selection lands aligned to the CURRENT grid step (a 1/8-drawn
    // square moved while the grid is at 1x re-aligns to the 1x lattice).
    const { deltaRow, deltaCol } = snapDragDelta(
      grid, selectedItems,
      endCell.row - selectDragStart.row,
      endCell.col - selectDragStart.col,
      get().subdivision,
    );

    if (deltaRow !== 0 || deltaCol !== 0) {
      const newSelected: SelectedItem[] = [];

      // Build one batch describing the whole move. A square is one record, so
      // moving it is one index-stable moveSquare edit — its identity (and the
      // selection) survives the move, and squares it lands on stay underneath.
      const squareEdits: Edit[] = [];
      const squaresToMove = selectedItems.filter(isSelectedType('cell'));
      for (const item of squaresToMove) {
        squareEdits.push({ kind: 'moveSquare', idx: item.index, dRow: deltaRow, dCol: deltaCol });
        newSelected.push({ type: 'cell', index: item.index });
      }

      const lineEdits: Edit[] = [];
      const linesToMove = selectedItems.filter(isSelectedType('line'));
      for (const item of linesToMove) {
        lineEdits.push({ kind: 'moveLine', idx: item.index, dRow: deltaRow, dCol: deltaCol });
        newSelected.push({ type: 'line', index: item.index });
      }

      const rectEdits: Edit[] = [];
      const rectsToMove = selectedItems.filter(isSelectedType('rect'));
      for (const item of rectsToMove) {
        rectEdits.push({ kind: 'moveRect', idx: item.index, dRow: deltaRow, dCol: deltaCol });
        newSelected.push({ type: 'rect', index: item.index });
      }

      const textEdits: Edit[] = [];
      const textsToMove = selectedItems.filter(isSelectedType('text'));
      for (const item of textsToMove) {
        textEdits.push({ kind: 'moveText', idx: item.index, dRow: deltaRow, dCol: deltaCol });
        newSelected.push({ type: 'text', index: item.index });
      }

      const imageEdits: Edit[] = [];
      const imagesToMove = selectedItems.filter(isSelectedType('image'));
      for (const item of imagesToMove) {
        imageEdits.push({ kind: 'moveImage', idx: item.index, dRow: deltaRow, dCol: deltaCol });
        newSelected.push({ type: 'image', index: item.index });
      }

      get().commitEdits([...squareEdits, ...lineEdits, ...rectEdits, ...textEdits, ...imageEdits]);

      set({
        selectedItems: newSelected,
        selectMode: null,
        selectDragStart: null,
        dragStartedOnEmpty: false,
        isSelecting: false,
      });
      updateOutputs();
      get().renderSelection();
    } else {
      // No movement. If the press landed on empty space inside the selection
      // bounds (not on a shape), treat it as a click-to-deselect. Pressing on
      // an actual shape keeps the selection intact.
      set({
        selectMode: null,
        selectDragStart: null,
        dragStartedOnEmpty: false,
        isSelecting: false,
        selectedItems: dragStartedOnEmpty ? [] : selectedItems,
      });
      grid.render();
      if (!dragStartedOnEmpty) get().renderSelection();
      if (dragStartedOnEmpty) updateOutputs();
    }
  },

  cancelDragSelection: () => {
    set({ selectMode: null, selectDragStart: null, dragStartedOnEmpty: false, isSelecting: false });
    get().renderSelection();
  },

  setMousePos: (cell) => set({ mousePos: cell }),

  // Hit test for shapes - returns the topmost shape at position
  hitTestShapes: (x, y) => {
    const { grid } = get();
    if (!grid) return null;

    // Test lines first (they're thin, need priority)
    const lineIdx = grid.hit_test_line(x, y, 8.0); // 8px tolerance
    if (lineIdx >= 0) {
      return { type: 'line', index: lineIdx };
    }

    // Test texts (before rects: a text label sits on top of any rect it's over)
    const textIdx = grid.hit_test_text(x, y);
    if (textIdx >= 0) {
      return { type: 'text', index: textIdx };
    }

    // Test rects
    const rectIdx = grid.hit_test_rect(x, y);
    if (rectIdx >= 0) {
      return { type: 'rect', index: rectIdx };
    }

    // Test images (below the vector shapes above, but above cells — an image is
    // a backdrop object, so a line/text/rect drawn over it still selects first).
    const imageIdx = grid.hit_test_image(x, y);
    if (imageIdx >= 0) {
      return { type: 'image', index: imageIdx };
    }

    // Test squares: topmost record covering the pointer's fine coordinate.
    const cellSize = grid.get_cell_size(); // world px per fine unit
    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);
    const squareIdx = grid.square_at(row, col);
    if (squareIdx >= 0) {
      return { type: 'cell', index: squareIdx };
    }

    return null;
  },

  // Rendering helpers
  renderSelection: () => {
    const { grid, selectedItems } = get();
    if (!grid) return;
    grid.render();

    // Highlight all selected items. A square is one atomic record, so it gets
    // one outline — never a lattice of per-fine-cell borders.
    for (const item of selectedItems) {
      if (item.type === 'cell') {
        grid.highlight_square(item.index);
      } else if (item.type === 'line') {
        grid.highlight_line(item.index);
      } else if (item.type === 'rect') {
        grid.highlight_rect(item.index);
      } else if (item.type === 'text') {
        grid.highlight_text(item.index);
      } else if (item.type === 'image') {
        grid.highlight_image(item.index);
      }
    }

    // Draw resize handles when exactly one line, rect, or text frame is selected.
    if (selectedItems.length === 1) {
      const only = selectedItems[0];
      if (only.type === 'line') {
        const handles = getLineHandles(grid.get_line(only.index));
        for (const h of handles) grid.draw_handle(h.r, h.c);
      } else if (only.type === 'rect') {
        const handles = getRectHandles(grid.get_rect(only.index));
        for (const h of handles) grid.draw_handle(h.r, h.c);
      } else if (only.type === 'text') {
        const t = grid.get_text(only.index); // [r, c, color, boxW, boxH, ...]
        const handles = getRectHandles([t[0], t[1], t[0] + t[4], t[1] + t[3]]);
        for (const h of handles) grid.draw_handle(h.r, h.c);
      } else if (only.type === 'image') {
        const handles = getRectHandles(grid.get_image(only.index)); // [r1, c1, r2, c2]
        for (const h of handles) grid.draw_handle(h.r, h.c);
      }
    }

    // Rotate handle floats above the whole selection (any number of items).
    if (selectedItems.length > 0 && typeof grid.draw_rotate_handle === 'function') {
      const bounds = getSelectionBoundsAll(selectedItems, grid);
      if (bounds) {
        const h = rotateHandlePoint(bounds);
        grid.draw_rotate_handle(h.r, h.c, bounds.minRow, h.c);
      }
    }
  },

  // Helper to get selected squares' top-left coords only
  getSelectedCells: () => {
    const { grid, selectedItems } = get();
    if (!grid) return [];
    return selectedItems
      .filter(isSelectedType('cell'))
      .map(i => {
        const s = grid.get_square(i.index);
        return { row: s[0], col: s[1] };
      });
  },
});
