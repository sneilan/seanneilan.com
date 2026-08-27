import { Undo2, Redo2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { DraggablePanel } from '@/components/DraggablePanel';
import { useGridStore, TEXT_SIZES, LINE_WIDTHS, type DesignJSON, type DrawTool } from '../../store/gridStore';
import { HEADER_HEIGHT } from './constants';
import { ColorRow } from './ColorRow';

// Narrow the ToggleGroup's string value to the DrawTool union without asserting.
function isDrawTool(value: string): value is DrawTool {
  return (
    value === 'draw' ||
    value === 'line' ||
    value === 'rect' ||
    value === 'text' ||
    value === 'select'
  );
}

type ToolsPanelProps = {
  loading: boolean;
  // Image-object add flow (owned by useImageObjects in the parent).
  imageInputRef: React.MutableRefObject<HTMLInputElement | null>;
  imgStatus: string;
  removeBg: boolean;
  setRemoveBg: (v: boolean) => void;
  addImageObject: (source: Blob | string) => Promise<void>;
  // Session actions (owned by useDrawingSession in the parent).
  editingExample: { id: number; half: 'input' | 'output'; otherHalf: DesignJSON } | null;
  saveExampleUpdate: () => Promise<void>;
  newDrawing: () => void;
  onOpenGallery: () => void;
};

export function ToolsPanel({
  loading,
  imageInputRef, imgStatus, removeBg, setRemoveBg, addImageObject,
  editingExample, saveExampleUpdate, newDrawing, onOpenGallery,
}: ToolsPanelProps) {
  const store = useGridStore();
  const {
    tool, setTool,
    colorIdx, pickColor,
    outlineIdx, pickOutline,
    textSize, pickTextSize,
    lineWidth, pickLineWidth,
    pickTextAlign,
    subdivision, setSubdivision,
    selectedItems,
    clear,
    undo, redo, canUndo, canRedo,
  } = store;

  // historyTick re-renders the panel on any commit/undo/redo so the undo/redo
  // buttons' enabled state stays in sync with the history stacks.
  void store.historyTick;

  return (
    <DraggablePanel title="Tools" defaultPosition={{ x: 20, y: HEADER_HEIGHT + 20 }}>
      <div className="space-y-3">
        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">Mode</label>
          <ToggleGroup
            type="single"
            value={tool}
            onValueChange={(val) => { if (isDrawTool(val)) setTool(val); }}
            variant="outline"
            className="flex-wrap"
          >
            <ToggleGroupItem value="draw" className="text-xs">Draw</ToggleGroupItem>
            <ToggleGroupItem value="line" className="text-xs">Line</ToggleGroupItem>
            <ToggleGroupItem value="rect" className="text-xs">Rect</ToggleGroupItem>
            <ToggleGroupItem value="text" className="text-xs">Text</ToggleGroupItem>
            <ToggleGroupItem value="select" className="text-xs">Select</ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">Grid (Ctrl+G)</label>
          <ToggleGroup
            type="single"
            value={String(subdivision)}
            onValueChange={(val) => val && setSubdivision(Number(val))}
            variant="outline"
            className="flex-wrap"
          >
            <ToggleGroupItem value="1" className="text-xs" title="Whole cells">1&times;</ToggleGroupItem>
            <ToggleGroupItem value="2" className="text-xs" title="Half cells">&frac12;</ToggleGroupItem>
            <ToggleGroupItem value="4" className="text-xs" title="Quarter cells">&frac14;</ToggleGroupItem>
            <ToggleGroupItem value="8" className="text-xs" title="Eighth cells">&#8539;</ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">Image</label>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="sm"
              className="text-xs flex-1"
              onClick={() => imageInputRef.current?.click()}
              title="Upload an image (transparent PNG works best)"
            >
              Upload
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs flex-1"
              onClick={() => {
                const url = window.prompt('Image URL (transparent PNG works best):');
                if (url && url.trim()) void addImageObject(url.trim());
              }}
              title="Add an image by URL"
            >
              From URL
            </Button>
          </div>
          <p className="text-[10px] text-gray-400 mt-1">…or paste an image (Ctrl/Cmd+V)</p>
          <label
            className="flex items-center gap-1.5 text-[10px] text-gray-500 mt-1 cursor-pointer"
            title="Flood-fills the white backdrop (connected to the image edges) into transparency before upload. White areas inside the subject are kept."
          >
            <input
              type="checkbox"
              checked={removeBg}
              onChange={(e) => setRemoveBg(e.target.checked)}
            />
            Remove white background
          </label>
          {imgStatus && <p className="text-[10px] text-gray-500 mt-1">{imgStatus}</p>}
          <input
            ref={imageInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) void addImageObject(file);
              e.target.value = ''; // allow re-selecting the same file
            }}
          />
        </div>

        {tool === 'text' && (
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">Text size</label>
            <ToggleGroup
              type="single"
              value={String(textSize)}
              onValueChange={(val) => val && pickTextSize(Number(val))}
              variant="outline"
              className="flex-wrap"
            >
              {TEXT_SIZES.map((s) => (
                <ToggleGroupItem key={s} value={String(s)} className="text-xs">{s}&times;</ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        )}

        {selectedItems.some((i) => i.type === 'text') && (
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">Text align (drag the box to resize)</label>
            <div className="flex gap-1 mb-1">
              <Button variant="outline" size="sm" className="text-xs flex-1" onClick={() => pickTextAlign(0, null)}>Left</Button>
              <Button variant="outline" size="sm" className="text-xs flex-1" onClick={() => pickTextAlign(1, null)}>Center</Button>
              <Button variant="outline" size="sm" className="text-xs flex-1" onClick={() => pickTextAlign(2, null)}>Right</Button>
            </div>
            <div className="flex gap-1">
              <Button variant="outline" size="sm" className="text-xs flex-1" onClick={() => pickTextAlign(null, 0)}>Top</Button>
              <Button variant="outline" size="sm" className="text-xs flex-1" onClick={() => pickTextAlign(null, 1)}>Middle</Button>
              <Button variant="outline" size="sm" className="text-xs flex-1" onClick={() => pickTextAlign(null, 2)}>Bottom</Button>
            </div>
          </div>
        )}

        {tool === 'line' && (
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">Line width</label>
            <ToggleGroup
              type="single"
              value={String(lineWidth)}
              onValueChange={(val) => val && pickLineWidth(Number(val))}
              variant="outline"
              className="flex-wrap"
            >
              {LINE_WIDTHS.map((w) => (
                <ToggleGroupItem key={w} value={String(w)} className="text-xs">{w}&times;</ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        )}

        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">Color</label>
          <ColorRow activeIdx={colorIdx} onPick={pickColor} titleFor={(i, name) => `${i + 1}: ${name}`} />
        </div>

        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">Outline (rects)</label>
          <ColorRow activeIdx={outlineIdx} onPick={pickOutline} titleFor={(i, name) => (i === 6 ? 'No outline' : name)} />
        </div>

        <div className="flex gap-1">
          <Button
            variant="outline"
            onClick={undo}
            disabled={loading || !canUndo()}
            size="sm"
            className="flex-1"
            title="Undo (Ctrl/Cmd+Z)"
          >
            <Undo2 className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            onClick={redo}
            disabled={loading || !canRedo()}
            size="sm"
            className="flex-1"
            title="Redo (Ctrl/Cmd+Shift+Z)"
          >
            <Redo2 className="w-4 h-4" />
          </Button>
        </div>

        <Button
          variant="outline"
          onClick={onOpenGallery}
          size="sm"
          className="w-full"
        >
          Gallery
        </Button>

        {editingExample && (
          <Button
            variant="outline"
            onClick={saveExampleUpdate}
            disabled={loading}
            size="sm"
            className="w-full border-amber-400 text-amber-700 hover:bg-amber-50"
            title={`Overwrite training example #${editingExample.id}'s ${editingExample.half} with the current canvas`}
          >
            Update example #{editingExample.id} ({editingExample.half})
          </Button>
        )}

        <Button
          variant="destructive"
          onClick={clear}
          disabled={loading}
          size="sm"
          className="w-full"
        >
          Clear Grid
        </Button>

        <Button
          onClick={newDrawing}
          disabled={loading}
          size="sm"
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          New Drawing
        </Button>

        <p className="text-xs text-gray-400">
          \ line, m rect, t text, s select, 1-7 colors, ⌘Z undo
        </p>
      </div>
    </DraggablePanel>
  );
}
