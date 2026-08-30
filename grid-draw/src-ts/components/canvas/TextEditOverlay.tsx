import { useEffect, useRef } from 'react';
import { useGridStore } from '../../store/gridStore';
import { CELL_SIZE, CELL_UNITS, HEADER_HEIGHT, COLORS } from './constants';
import type { Camera } from './coords';

/**
 * The text editor: a real DOM <input> positioned over the text's frame through
 * the camera. While `textEdit` is set, nothing is drawn on the canvas for the
 * text (an in-place edit deletes the original inside its history batch) — this
 * input IS the text. Being a native input gives caret movement, Shift/Ctrl +
 * arrow and mouse selection, word jumps, and clipboard behavior for free;
 * the store only sees the resulting string (setTextEditText) and the
 * commit/cancel edges (Enter / Escape / clicking away).
 */
export function TextEditOverlay({ cam }: { cam: Camera }) {
  const textEdit = useGridStore((s) => s.textEdit);
  const colorIdx = useGridStore((s) => s.colorIdx);
  const setTextEditText = useGridStore((s) => s.setTextEditText);
  const commitTextEdit = useGridStore((s) => s.commitTextEdit);
  const cancelTextEdit = useGridStore((s) => s.cancelTextEdit);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // One edit session = one frame being edited (a new click/double-click starts
  // a new session even if another was already open). Focus with the caret at
  // the end when a session opens; `textEdit` itself changes on every keystroke,
  // so it can't be the dependency.
  const session = textEdit ? `${textEdit.row},${textEdit.col},${textEdit.editing?.idx ?? 'new'}` : null;
  useEffect(() => {
    if (session === null) return;
    const input = inputRef.current;
    if (!input) return;
    input.focus({ preventScroll: true });
    input.setSelectionRange(input.value.length, input.value.length);
  }, [session]);

  if (!textEdit) return null;

  // Frame top-left (fine units) → screen px through the camera; the em box is
  // `size` whole cells tall, so the font tracks zoom and pickTextSize live.
  const emPx = textEdit.size * CELL_UNITS * CELL_SIZE * cam.zoom;
  const left = (textEdit.col * CELL_SIZE - cam.x) * cam.zoom;
  const top = (textEdit.row * CELL_SIZE - cam.y) * cam.zoom + HEADER_HEIGHT;
  const color = COLORS[textEdit.editing?.original.color ?? colorIdx]?.hex ?? '#000000';

  return (
    <input
      ref={inputRef}
      aria-label="Edit text"
      value={textEdit.text}
      onChange={(e) => setTextEditText(e.target.value)}
      onKeyDown={(e) => {
        // The input owns the keyboard: don't let tool/color shortcuts fire off
        // the letters being typed. Enter commits, Escape cancels.
        e.stopPropagation();
        if (e.key === 'Enter') { e.preventDefault(); commitTextEdit(); }
        if (e.key === 'Escape') { e.preventDefault(); cancelTextEdit(); }
      }}
      onBlur={() => {
        // A panel click (e.g. picking a text size mid-edit) steals focus but
        // keeps the session alive — take focus back after the click lands.
        // Clicking the canvas commits the edit first, so no refocus happens.
        setTimeout(() => {
          if (useGridStore.getState().textEdit) inputRef.current?.focus({ preventScroll: true });
        }, 0);
      }}
      autoComplete="off"
      spellCheck={false}
      style={{
        position: 'fixed',
        left,
        top,
        height: emPx,
        width: `${Math.max(textEdit.text.length + 1, 2)}ch`,
        minWidth: emPx,
        font: `${emPx}px 'BigBlue Terminal', monospace`,
        lineHeight: `${emPx}px`,
        color,
        background: 'rgba(255, 255, 255, 0.85)',
        border: 'none',
        outline: '1.5px solid #ff8800',
        padding: 0,
        margin: 0,
        zIndex: 40,
      }}
    />
  );
}
