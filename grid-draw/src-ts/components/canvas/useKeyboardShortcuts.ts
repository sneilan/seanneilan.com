import { useEffect } from 'react';
import { useGridStore } from '../../store/gridStore';

/** Global keyboard shortcuts: tool switching, clipboard, undo/redo, colors. */
export function useKeyboardShortcuts() {
  const {
    tool, setTool, setColorIdx,
    selectedItems, deleteSelected, selectAll,
    clipboard, copy, paste,
    cycleSubdivision,
    undo, redo,
    typeTextChar, backspaceText, commitTextEdit, cancelTextEdit,
  } = useGridStore();

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // While typing a text shape, the dedicated text handler owns the keyboard;
      // don't let tool/color shortcuts fire from the letters being typed.
      if (useGridStore.getState().textEdit) return;
      if (e.key === '\\') setTool(tool === 'line' ? 'draw' : 'line');
      if (e.key === 'm') setTool(tool === 'rect' ? 'draw' : 'rect');
      if (e.key === 't') setTool(tool === 'text' ? 'draw' : 'text');
      if (e.key === 's') setTool(tool === 'select' ? 'draw' : 'select');
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedItems.length > 0) {
        e.preventDefault();
        deleteSelected();
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        selectAll();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'c' && selectedItems.length > 0) {
        e.preventDefault();
        copy();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'v' && clipboard) {
        e.preventDefault();
        paste();
      }
      // Grid subdivision: Ctrl/Cmd+G cycles whole → ½ → ¼ → ⅛ → whole.
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'g') {
        e.preventDefault();
        cycleSubdivision();
      }
      // Undo: Ctrl/Cmd+Z. Redo: Ctrl/Cmd+Shift+Z or Ctrl/Cmd+Y.
      if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        undo();
      }
      if ((e.ctrlKey || e.metaKey) && ((e.shiftKey && e.key.toLowerCase() === 'z') || e.key.toLowerCase() === 'y')) {
        e.preventDefault();
        redo();
      }
      const n = parseInt(e.key);
      if (n >= 1 && n <= 7) setColorIdx(n - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [tool, setTool, setColorIdx, selectedItems, deleteSelected, copy, paste, clipboard, undo, redo, selectAll, cycleSubdivision]);

  // Inline text typing. Active only while a text shape is being edited; captures
  // printable characters, Backspace to delete, Enter to commit, Esc to cancel.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!useGridStore.getState().textEdit) return;
      if (e.key === 'Enter') { e.preventDefault(); commitTextEdit(); return; }
      if (e.key === 'Escape') { e.preventDefault(); cancelTextEdit(); return; }
      if (e.key === 'Backspace') { e.preventDefault(); backspaceText(); return; }
      // Single printable char (ignore modifier combos like Ctrl+C / Cmd+V).
      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        typeTextChar(e.key);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [commitTextEdit, cancelTextEdit, backspaceText, typeTextChar]);
}
