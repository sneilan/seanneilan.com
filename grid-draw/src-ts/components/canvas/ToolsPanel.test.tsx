import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { useGridStore } from '../../store/gridStore';
import { makeGrid } from '../../store/testGrid';
import { ToolsPanel } from './ToolsPanel';

/**
 * The style sections must show whenever they APPLY — while their tool is
 * active (so they're there as soon as you start drawing/typing) or while an
 * item they style is selected — and, with a selection, reflect the selected
 * items' own values rather than the tool's remembered setting.
 */
function renderPanel() {
  return render(
    <ToolsPanel
      loading={false}
      imageInputRef={{ current: null }}
      imgStatus=""
      removeBg={false}
      setRemoveBg={() => {}}
      addImageObject={async () => {}}
      editingExample={null}
      saveExampleUpdate={async () => {}}
      newDrawing={() => {}}
      onOpenGallery={() => {}}
    />
  );
}

// Look a toggle up INSIDE its labeled section ('1×' also exists in the Grid
// subdivision group, so a global query is ambiguous).
const toggleFor = (section: string, label: string) => {
  const box = screen.getByText(section).parentElement;
  if (!box) throw new Error(`no section ${section}`);
  const el = within(box).getByText(label).closest('button');
  if (!el) throw new Error(`no toggle button for ${label}`);
  return el;
};

describe('ToolsPanel: sections show for the styling that applies', () => {
  beforeEach(() => {
    useGridStore.setState({
      grid: null,
      selectedItems: [],
      tool: 'draw',
      textEdit: null,
      textSize: 1,
      lineWidth: 1,
      colorIdx: 0,
      outlineIdx: 6,
    });
  });

  it('draw tool with nothing selected: only the generally applicable sections', () => {
    renderPanel();
    expect(screen.queryByText('Text size')).toBeNull();
    expect(screen.queryByText(/Text align/)).toBeNull();
    expect(screen.queryByText('Line width')).toBeNull();
    expect(screen.queryByText(/Outline/)).toBeNull();
    expect(screen.getByText('Color')).toBeTruthy();
  });

  it('text tool active: size AND align show before any text exists or is selected', () => {
    useGridStore.setState({ tool: 'text' });
    renderPanel();
    expect(screen.getByText('Text size')).toBeTruthy();
    expect(screen.getByText(/Text align/)).toBeTruthy();
  });

  it('a selected text shows size + align, with the SELECTION’s size highlighted', () => {
    const { grid } = makeGrid();
    grid.get_text_size = () => 3; // the shared mock's texts are fixed at size 1
    useGridStore.setState({ grid, tool: 'select', selectedItems: [{ type: 'text', index: 0 }] });
    renderPanel();
    expect(screen.getByText(/Text align/)).toBeTruthy();
    // The panel's own textSize is 1; the selected text's size 3 must win.
    expect(toggleFor('Text size', '3×').dataset.state).toBe('on');
    expect(toggleFor('Text size', '1×').dataset.state).toBe('off');
  });

  it('a selected line shows line width at the line’s own width', () => {
    const { grid } = makeGrid({ lines: [[0, 0, 1, 1, 2, 20]] });
    useGridStore.setState({ grid, tool: 'select', selectedItems: [{ type: 'line', index: 0 }] });
    renderPanel();
    expect(screen.getByText('Line width')).toBeTruthy();
    expect(toggleFor('Line width', '2×').dataset.state).toBe('on'); // 20 tenths = 2×
    expect(screen.queryByText('Text size')).toBeNull();
  });

  it('mixed widths in a multi-line selection highlight nothing', () => {
    const { grid } = makeGrid({ lines: [[0, 0, 1, 1, 2, 10], [2, 0, 3, 1, 2, 30]] });
    useGridStore.setState({ grid, tool: 'select', selectedItems: [{ type: 'line', index: 0 }, { type: 'line', index: 1 }] });
    renderPanel();
    const widths = screen.getByText('Line width').parentElement;
    expect(widths?.querySelector('button[data-state="on"]')).toBeNull();
  });

  it('a selected rect shows the outline row (hidden otherwise)', () => {
    const { grid } = makeGrid({ rects: [[0, 0, 2, 2, 3, 5]] });
    useGridStore.setState({ grid, tool: 'select', selectedItems: [{ type: 'rect', index: 0 }] });
    renderPanel();
    expect(screen.getByText(/Outline/)).toBeTruthy();
  });
});
