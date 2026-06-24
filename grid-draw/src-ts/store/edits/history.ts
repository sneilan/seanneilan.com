import type { GridCanvasWasm } from '../../types/grid';
import type { Edit } from './types';
import { applyEdit, invertEdit, mergeEdits } from './apply';

/** Cap on undo depth; oldest entries are dropped past this. */
const MAX_DEPTH = 100;

/** Default time window (ms) within which same-key edits coalesce into one step. */
export const COALESCE_WINDOW_MS = 600;

export type CommitOpts = {
  /**
   * When set, an immediately-preceding top-of-stack edit committed with the
   * same key within COALESCE_WINDOW_MS is merged with this one instead of
   * producing a separate undo step (e.g. dragging a color, nudging a shape).
   */
  coalesceKey?: string;
  /** Injectable clock for deterministic tests; defaults to Date.now(). */
  now?: number;
};

/**
 * Records committed edits so they can be undone/redone. The single chokepoint
 * for mutating the document: store actions build an `Edit` and call `commit`.
 */
export class History {
  private undoStack: Edit[] = [];
  private redoStack: Edit[] = [];
  // When non-null, commits are applied immediately but accumulated here instead
  // of pushed individually — so a gesture (freehand stroke, multi-shape op)
  // becomes a single undo step on endBatch().
  private pending: Edit[] | null = null;
  // Coalescing bookkeeping for the current top-of-stack entry only.
  private lastCoalesceKey: string | null = null;
  private lastCommitTime = 0;

  /**
   * Begin accumulating subsequent commits into one batch. Auto-finalizes any
   * batch already open (defensive: a prior gesture that never called endBatch,
   * e.g. interrupted by an error, won't strand future commits).
   */
  beginBatch(): void {
    if (this.pending) this.endBatch();
    this.pending = [];
  }

  /** Close the current batch, recording it as a single undo step if non-empty. */
  endBatch(): void {
    const pending = this.pending;
    this.pending = null;
    if (pending && pending.length > 0) {
      this.record(pending.length === 1 ? pending[0] : { kind: 'batch', edits: pending });
    }
  }

  /** Discard an in-progress batch's bookkeeping (edits already applied stay). */
  cancelBatch(): void {
    this.pending = null;
  }

  isBatching(): boolean {
    return this.pending !== null;
  }

  private record(edit: Edit): void {
    this.undoStack.push(edit);
    if (this.undoStack.length > MAX_DEPTH) this.undoStack.shift();
    this.redoStack = [];
    this.lastCoalesceKey = null;
  }

  /** Apply an edit and record it. Clears the redo stack (new branch of history). */
  commit(grid: GridCanvasWasm, edit: Edit, opts?: CommitOpts): void {
    applyEdit(grid, edit);
    if (this.pending) {
      this.pending.push(edit);
      return;
    }

    // Try to merge into the previous step if it shares a coalesce key and falls
    // within the time window. Only merges with the immediate top of the stack.
    const key = opts?.coalesceKey;
    const now = opts?.now ?? Date.now();
    if (
      key != null &&
      key === this.lastCoalesceKey &&
      this.undoStack.length > 0 &&
      now - this.lastCommitTime <= COALESCE_WINDOW_MS
    ) {
      const top = this.undoStack[this.undoStack.length - 1];
      const merged = mergeEdits(top, edit);
      if (merged) {
        this.undoStack[this.undoStack.length - 1] = merged;
        this.redoStack = [];
        this.lastCommitTime = now;
        return;
      }
    }

    this.record(edit);
    this.lastCoalesceKey = key ?? null;
    this.lastCommitTime = now;
  }

  /** Undo the most recent edit. Returns false if there was nothing to undo. */
  undoLast(grid: GridCanvasWasm): boolean {
    const edit = this.undoStack.pop();
    if (!edit) return false;
    applyEdit(grid, invertEdit(edit));
    this.redoStack.push(edit);
    this.lastCoalesceKey = null; // never coalesce across an undo
    return true;
  }

  /** Redo the most recently undone edit. Returns false if there was nothing to redo. */
  redoLast(grid: GridCanvasWasm): boolean {
    const edit = this.redoStack.pop();
    if (!edit) return false;
    applyEdit(grid, edit);
    this.undoStack.push(edit);
    this.lastCoalesceKey = null;
    return true;
  }

  canUndo(): boolean {
    return this.undoStack.length > 0;
  }

  canRedo(): boolean {
    return this.redoStack.length > 0;
  }

  /** Drop all history (e.g. on document load/reset). */
  clear(): void {
    this.undoStack = [];
    this.redoStack = [];
    this.pending = null;
    this.lastCoalesceKey = null;
  }
}
