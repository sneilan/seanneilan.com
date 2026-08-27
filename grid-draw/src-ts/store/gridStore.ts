// Public entry point for the grid document store. The implementation is split
// into per-concern slices (see ./slices/*) combined into one zustand store;
// types/constants live in ./types and pure helpers in ./gridHelpers. External
// code should keep importing from this module.
import { create } from 'zustand';
import type { GridState, GridStore } from './types';
import { createClipboardSlice } from './slices/clipboardSlice';
import { createDesignSlice } from './slices/designSlice';
import { createHistorySlice } from './slices/historySlice';
import { createSelectSlice } from './slices/selectSlice';
import { createToolSlice } from './slices/toolSlice';
import { createTransformSlice } from './slices/transformSlice';

export {
  TEXT_SIZES,
  LINE_WIDTHS,
  CELL_UNITS,
  SUBDIVISIONS,
  widthToTenths,
  tenthsToWidth,
} from './types';
export type {
  DrawTool,
  SelectMode,
  ResizeTarget,
  SelectedItem,
  TextEditState,
  ClipboardData,
  CaptureMode,
  DesignJSON,
  GridStore,
} from './types';
export { getSelectionBoundsAll, serializeSelection } from './gridHelpers';

const initialState: GridState = {
  grid: null,
  gridSize: { rows: 10, cols: 10 },

  tool: 'draw',
  colorIdx: 0,
  outlineIdx: 6,
  toolStyles: {
    draw: { colorIdx: 0, outlineIdx: 6 },
    line: { colorIdx: 0, outlineIdx: 6 },
    rect: { colorIdx: 6, outlineIdx: 0 }, // default rect: transparent fill, black outline
    text: { colorIdx: 0, outlineIdx: 6 }, // default text: black
    select: { colorIdx: 0, outlineIdx: 6 },
  },
  isDrawing: false,
  drawMode: false,
  lineStart: null,
  rectStart: null,
  textEdit: null,
  textSize: 1,
  lineWidth: 1,
  subdivision: 1,

  selectedItems: [],
  clipboard: null,
  mousePos: { row: 0, col: 0 },
  selectMode: null,
  selectBoxStart: null,
  selectDragStart: null,
  dragStartedOnEmpty: false,
  isSelecting: false,
  previousSelection: [],
  resizeTarget: null,
  resizeOrigin: null,
  rotateOrigin: null,

  captureMode: 'idle',
  captureInput: null,
  captureInputOrigin: null,

  jsonOutput: '',
  tensorOutput: '',
  historyTick: 0,
  currentName: null,
  saveState: 'idle',
  saveMessage: '',
};

export const useGridStore = create<GridStore>()((...a) => ({
  ...initialState,
  ...createHistorySlice(...a),
  ...createToolSlice(...a),
  ...createSelectSlice(...a),
  ...createTransformSlice(...a),
  ...createClipboardSlice(...a),
  ...createDesignSlice(...a),
}));

// Selectors for performance
export const useGrid = () => useGridStore((s) => s.grid);
export const useTool = () => useGridStore((s) => s.tool);
export const useColorIdx = () => useGridStore((s) => s.colorIdx);
export const useOutlineIdx = () => useGridStore((s) => s.outlineIdx);
export const useSelectedItems = () => useGridStore((s) => s.selectedItems);
export const useClipboard = () => useGridStore((s) => s.clipboard);
export const useJsonOutput = () => useGridStore((s) => s.jsonOutput);
export const useTensorOutput = () => useGridStore((s) => s.tensorOutput);
export const useSelectMode = () => useGridStore((s) => s.selectMode);
