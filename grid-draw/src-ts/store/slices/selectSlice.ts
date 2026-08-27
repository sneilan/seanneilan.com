import type { StateCreator } from 'zustand';
import type { Edit } from '../edits/types';
import { getLineHandles, getRectHandles, rotateHandlePoint } from '../../utils/handles';
import {
  addItemToSelectionArray,
  allItems,
  getSelectionBoundsAll,
  isItemSelected,
  removeItemFromSelectionArray,
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
    // Highlight previously selected items
    for (const item of previousSelection) {
      if (item.type === 'cell') {
        grid.highlight_cell(item.row, item.col);
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

    // Get filled cells in box (the box is finite; coords may be negative).
    for (let r = r1; r <= r2; r++) {
      for (let c = c1; c <= c2; c++) {
        if (grid.get_cell(r, c)) {
          boxItems.push({ type: 'cell', row: r, col: c });
        }
      }
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

    const deltaRow = endCell.row - selectDragStart.row;
    const deltaCol = endCell.col - selectDragStart.col;

    if (deltaRow !== 0 || deltaCol !== 0) {
      const newSelected: SelectedItem[] = [];

      // Build one batch describing the whole move. For cells we emit all source
      // clears first, then all destination writes, so overlapping source/dest
      // footprints never clobber (a dest write can't land on a not-yet-cleared
      // source). `from` states are captured pre-gesture, so undo restores the
      // exact original contents of both source and destination cells.
      const clears: Edit[] = [];
      const writes: Edit[] = [];
      for (const item of selectedItems) {
        if (item.type === 'cell') {
          if (!grid.get_cell(item.row, item.col)) continue;
          const color = grid.get_cell_color(item.row, item.col);
          const newRow = item.row + deltaRow;
          const newCol = item.col + deltaCol;
          clears.push({
            kind: 'setCellState', row: item.row, col: item.col,
            from: { filled: true, color }, to: { filled: false, color },
          });
          // Infinite canvas: any destination cell is valid (incl. negative).
          writes.push({
            kind: 'setCellState', row: newRow, col: newCol,
            from: { filled: grid.get_cell(newRow, newCol), color: grid.get_cell_color(newRow, newCol) },
            to: { filled: true, color },
          });
          newSelected.push({ type: 'cell', row: newRow, col: newCol });
        }
      }

      const lineEdits: Edit[] = [];
      const linesToMove = selectedItems.filter(i => i.type === 'line') as Array<{ type: 'line'; index: number }>;
      for (const item of linesToMove) {
        lineEdits.push({ kind: 'moveLine', idx: item.index, dRow: deltaRow, dCol: deltaCol });
        newSelected.push({ type: 'line', index: item.index });
      }

      const rectEdits: Edit[] = [];
      const rectsToMove = selectedItems.filter(i => i.type === 'rect') as Array<{ type: 'rect'; index: number }>;
      for (const item of rectsToMove) {
        rectEdits.push({ kind: 'moveRect', idx: item.index, dRow: deltaRow, dCol: deltaCol });
        newSelected.push({ type: 'rect', index: item.index });
      }

      const textEdits: Edit[] = [];
      const textsToMove = selectedItems.filter(i => i.type === 'text') as Array<{ type: 'text'; index: number }>;
      for (const item of textsToMove) {
        textEdits.push({ kind: 'moveText', idx: item.index, dRow: deltaRow, dCol: deltaCol });
        newSelected.push({ type: 'text', index: item.index });
      }

      const imageEdits: Edit[] = [];
      const imagesToMove = selectedItems.filter(i => i.type === 'image') as Array<{ type: 'image'; index: number }>;
      for (const item of imagesToMove) {
        imageEdits.push({ kind: 'moveImage', idx: item.index, dRow: deltaRow, dCol: deltaCol });
        newSelected.push({ type: 'image', index: item.index });
      }

      get().commitEdits([...clears, ...writes, ...lineEdits, ...rectEdits, ...textEdits, ...imageEdits]);

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

    // Test cells
    const cellSize = grid.get_cell_size();
    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);
    if (grid.get_cell(row, col)) {
      return { type: 'cell', row, col };
    }

    return null;
  },

  // Rendering helpers
  renderSelection: () => {
    const { grid, selectedItems } = get();
    if (!grid) return;
    grid.render();

    // Highlight all selected items
    for (const item of selectedItems) {
      if (item.type === 'cell') {
        grid.highlight_cell(item.row, item.col);
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

  // Helper to get selected cells only
  getSelectedCells: () => {
    const { selectedItems } = get();
    return selectedItems
      .filter(i => i.type === 'cell')
      .map(i => ({ row: (i as { type: 'cell'; row: number; col: number }).row, col: (i as { type: 'cell'; row: number; col: number }).col }));
  },
});
