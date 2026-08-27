import { DraggablePanel } from '@/components/DraggablePanel';
import { useGridStore } from '../../store/gridStore';
import { HEADER_HEIGHT } from './constants';

/** JSON/tensor views of the selected cells, editable to import at the mouse. */
export function SelectionDataPanel() {
  const {
    selectedItems, getSelectedCells,
    jsonOutput, tensorOutput,
    importJson, importTensor,
  } = useGridStore();

  const selectedCells = getSelectedCells();

  return (
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
  );
}
