import type { StateCreator } from 'zustand';
import type { Edit } from '../edits/types';
import { getImageEl } from '../../lib/imageCache';
import {
  getSelectionBoundsAll,
  imageGeom,
  lineGeom,
  rectGeom,
  rotateQuarter,
  rotateSquareQuarter,
  snapQuarterTurns,
  textFrame,
} from '../gridHelpers';
import type { GridStore, SelectedItem, TransformActions } from '../types';

export const createTransformSlice: StateCreator<GridStore, [], [], TransformActions> = (set, get) => ({
  startResize: (target) => {
    const { grid } = get();
    // Capture the pre-resize geometry so finish/cancel can commit/restore it.
    const resizeOrigin = grid
      ? (target.shape === 'line' ? lineGeom(grid, target.index)
        : target.shape === 'rect' ? rectGeom(grid, target.index)
        : target.shape === 'image' ? imageGeom(grid, target.index)
        : textFrame(grid, target.index))
      : null;
    set({ selectMode: 'resize', resizeTarget: target, resizeOrigin, isSelecting: true });
  },

  updateResize: (cell) => {
    const { grid, resizeTarget } = get();
    if (!grid || !resizeTarget) return;
    // Live-apply (preview): the WASM setters re-render so the shape follows the
    // cursor. This is NOT recorded; finishResize commits the single net edit.
    if (resizeTarget.shape === 'line') {
      grid.set_line_endpoint(resizeTarget.index, resizeTarget.handle, cell.row, cell.col);
    } else if (resizeTarget.shape === 'rect') {
      grid.resize_rect(resizeTarget.index, resizeTarget.handle, cell.row, cell.col);
    } else if (resizeTarget.shape === 'image') {
      grid.resize_image(resizeTarget.index, resizeTarget.handle, cell.row, cell.col);
    } else {
      grid.resize_text(resizeTarget.index, resizeTarget.handle, cell.row, cell.col);
    }
    get().renderSelection();
  },

  finishResize: (endCell) => {
    const { grid, resizeTarget, resizeOrigin } = get();
    if (grid && resizeTarget) {
      // Apply the final live position, then read the resulting geometry and
      // record a single from(origin)→to(final) edit for undo.
      // The captured origin matches resizeTarget.shape (both set together at
      // startResize). The `*Geom` shapes are structurally {r1,c1,r2,c2}, so a
      // `!('boxW' in ...)` check (which excludes only the text frame) narrows the
      // origin to exactly the geometry the matching edit expects — no assertion.
      if (resizeTarget.shape === 'line') {
        grid.set_line_endpoint(resizeTarget.index, resizeTarget.handle, endCell.row, endCell.col);
        if (resizeOrigin && !('boxW' in resizeOrigin)) {
          get().commitEdits([{ kind: 'setLineGeom', idx: resizeTarget.index, from: resizeOrigin, to: lineGeom(grid, resizeTarget.index) }]);
        }
      } else if (resizeTarget.shape === 'rect') {
        grid.resize_rect(resizeTarget.index, resizeTarget.handle, endCell.row, endCell.col);
        if (resizeOrigin && !('boxW' in resizeOrigin)) {
          get().commitEdits([{ kind: 'setRectGeom', idx: resizeTarget.index, from: resizeOrigin, to: rectGeom(grid, resizeTarget.index) }]);
        }
      } else if (resizeTarget.shape === 'image') {
        grid.resize_image(resizeTarget.index, resizeTarget.handle, endCell.row, endCell.col);
        if (resizeOrigin && !('boxW' in resizeOrigin)) {
          get().commitEdits([{ kind: 'setImageGeom', idx: resizeTarget.index, from: resizeOrigin, to: imageGeom(grid, resizeTarget.index) }]);
        }
      } else {
        grid.resize_text(resizeTarget.index, resizeTarget.handle, endCell.row, endCell.col);
        if (resizeOrigin && 'boxW' in resizeOrigin) {
          get().commitEdits([{ kind: 'setTextFrame', idx: resizeTarget.index, from: resizeOrigin, to: textFrame(grid, resizeTarget.index) }]);
        }
      }
    }
    set({ selectMode: null, resizeTarget: null, resizeOrigin: null, isSelecting: false });
    get().renderSelection();
    get().updateOutputs();
  },

  cancelResize: () => {
    const { grid, resizeTarget, resizeOrigin } = get();
    // The live preview already mutated the shape; restore the captured geometry.
    if (grid && resizeTarget && resizeOrigin) {
      // 'boxW' in origin ⇒ the text frame; otherwise a {r1,c1,r2,c2} geometry
      // whose exact kind is picked by resizeTarget.shape (set together at start).
      if ('boxW' in resizeOrigin) {
        const f = resizeOrigin;
        grid.set_text_frame(resizeTarget.index, f.r, f.c, f.boxW, f.boxH);
      } else if (resizeTarget.shape === 'image') {
        const g = resizeOrigin;
        grid.set_image_geom(resizeTarget.index, g.r1, g.c1, g.r2, g.c2);
      } else {
        const g = resizeOrigin;
        if (resizeTarget.shape === 'line') grid.set_line(resizeTarget.index, g.r1, g.c1, g.r2, g.c2);
        else grid.set_rect(resizeTarget.index, g.r1, g.c1, g.r2, g.c2);
      }
    }
    set({ selectMode: null, resizeTarget: null, resizeOrigin: null, isSelecting: false });
    get().renderSelection();
  },

  // --- Rotate (free drag, snaps to 90° on release) --------------------------

  startRotate: (x, y) => {
    const { grid, selectedItems } = get();
    if (!grid) return;
    const bounds = getSelectionBoundsAll(selectedItems, grid);
    if (!bounds) return;
    const cs = grid.get_cell_size();
    const cx = ((bounds.minCol + bounds.maxCol) / 2) * cs;
    const cy = ((bounds.minRow + bounds.maxRow) / 2) * cs;
    set({
      selectMode: 'rotate',
      isSelecting: true,
      rotateOrigin: { cx, cy, startAngle: Math.atan2(y - cy, x - cx) },
    });
  },

  updateRotate: (x, y) => {
    const { grid, selectedItems, rotateOrigin } = get();
    if (!grid || !rotateOrigin) return;
    const { cx, cy, startAngle } = rotateOrigin;
    // Snap the preview to the nearest quarter-turn — never show an in-between
    // tilt — so the ghost is exactly what the release will commit.
    const k = snapQuarterTurns(Math.atan2(y - cy, x - cx) - startAngle);
    grid.render();
    if (k === 0) {
      // Back at 0°: show the selection in place (with its highlights/handles).
      get().renderSelection();
      return;
    }
    const bounds = getSelectionBoundsAll(selectedItems, grid);
    if (!bounds) return;
    const icr = Math.round((bounds.minRow + bounds.maxRow) / 2);
    const icc = Math.round((bounds.minCol + bounds.maxCol) / 2);
    for (const item of selectedItems) {
      if (item.type === 'cell') {
        const s = grid.get_square(item.index); // [r, c, color, size]
        if (s.length < 4) continue;
        const p = rotateSquareQuarter(s[0], s[1], s[3], k, icr, icc);
        grid.preview_square(p.r, p.c, s[3], s[2]);
      } else if (item.type === 'line') {
        const l = grid.get_line(item.index);
        if (l.length >= 6) {
          const a = rotateQuarter(l[0], l[1], k, icr, icc);
          const b = rotateQuarter(l[2], l[3], k, icr, icc);
          grid.preview_line(a.r, a.c, b.r, b.c, l[4], l[5]);
        }
      } else if (item.type === 'rect') {
        const r = grid.get_rect(item.index);
        if (r.length >= 6) {
          const a = rotateQuarter(r[0], r[1], k, icr, icc);
          const b = rotateQuarter(r[2], r[3], k, icr, icc);
          grid.preview_rect(a.r, a.c, b.r, b.c, r[4], r[5], r[6], r[7]);
        }
      } else if (item.type === 'text') {
        const t = grid.get_text(item.index); // [r, c, color, boxW, boxH, halign, valign]
        if (t.length >= 7) {
          const p = rotateQuarter(t[0], t[1], k, icr, icc);
          grid.preview_text(p.r, p.c, t[2], grid.get_text_size(item.index), t[3], t[4], t[5], t[6], grid.get_text_string(item.index));
        }
      } else if (item.type === 'image') {
        const im = grid.get_image(item.index); // [r1, c1, r2, c2]
        if (im.length >= 4) {
          // Images can't render rotated, so preview the box moved (upright) to
          // where its top-left rotates to, keeping its size.
          const p = rotateQuarter(im[0], im[1], k, icr, icc);
          grid.preview_image(p.r, p.c, p.r + (im[2] - im[0]), p.c + (im[3] - im[1]), getImageEl(grid.get_image_url(item.index)));
        }
      }
    }
  },

  finishRotate: (x, y) => {
    const { grid, selectedItems, rotateOrigin } = get();
    if (!grid || !rotateOrigin) {
      set({ selectMode: null, rotateOrigin: null, isSelecting: false });
      return;
    }
    const { cx, cy, startAngle } = rotateOrigin;
    // Snap to the nearest quarter-turn (0..3 clockwise). 0 = no change.
    const k = snapQuarterTurns(Math.atan2(y - cy, x - cx) - startAngle);
    const bounds = getSelectionBoundsAll(selectedItems, grid);
    if (k === 0 || !bounds) {
      set({ selectMode: null, rotateOrigin: null, isSelecting: false });
      get().renderSelection();
      return;
    }

    // Rotate about an INTEGER cell center so 90° steps map cells→cells exactly
    // (lossless, and four turns return to the original).
    const icr = Math.round((bounds.minRow + bounds.maxRow) / 2);
    const icc = Math.round((bounds.minCol + bounds.maxCol) / 2);
    const quarter = (r: number, c: number) => rotateQuarter(r, c, k, icr, icc);

    const geomEdits: Edit[] = [];
    const newSelected: SelectedItem[] = [];

    for (const item of selectedItems) {
      if (item.type === 'cell') {
        // A square is one record: rotating its block just moves its top-left
        // (the block stays an axis-aligned square of the same size).
        const s = grid.get_square(item.index);
        if (s.length < 4) continue;
        const np = rotateSquareQuarter(s[0], s[1], s[3], k, icr, icc);
        geomEdits.push({ kind: 'moveSquare', idx: item.index, dRow: np.r - s[0], dCol: np.c - s[1] });
        newSelected.push({ type: 'cell', index: item.index });
      } else if (item.type === 'line') {
        const l = grid.get_line(item.index);
        if (l.length < 5) continue;
        const a = quarter(l[0], l[1]);
        const b = quarter(l[2], l[3]);
        geomEdits.push({
          kind: 'setLineGeom', idx: item.index,
          from: { r1: l[0], c1: l[1], r2: l[2], c2: l[3] },
          to: { r1: a.r, c1: a.c, r2: b.r, c2: b.c },
        });
        newSelected.push({ type: 'line', index: item.index });
      } else if (item.type === 'rect') {
        const r = grid.get_rect(item.index);
        if (r.length < 6) continue;
        const a = quarter(r[0], r[1]);
        const b = quarter(r[2], r[3]);
        geomEdits.push({
          kind: 'setRectGeom', idx: item.index,
          from: { r1: r[0], c1: r[1], r2: r[2], c2: r[3] },
          to: { r1: a.r, c1: a.c, r2: b.r, c2: b.c },
        });
        newSelected.push({ type: 'rect', index: item.index });
      } else if (item.type === 'text') {
        const t = grid.get_text(item.index);
        if (t.length < 3) continue;
        // Text can't render rotated glyphs, so rotate its anchor and keep it
        // upright (the position follows the group; the glyphs stay horizontal).
        const np = quarter(t[0], t[1]);
        geomEdits.push({ kind: 'moveText', idx: item.index, dRow: np.r - t[0], dCol: np.c - t[1] });
        newSelected.push({ type: 'text', index: item.index });
      } else if (item.type === 'image') {
        const im = grid.get_image(item.index);
        if (im.length < 4) continue;
        // Like text: the image stays upright, its anchor follows the rotation.
        const np = quarter(im[0], im[1]);
        geomEdits.push({ kind: 'moveImage', idx: item.index, dRow: np.r - im[0], dCol: np.c - im[1] });
        newSelected.push({ type: 'image', index: item.index });
      }
    }

    set({ selectMode: null, rotateOrigin: null, isSelecting: false });
    get().commitEdits(geomEdits);
    set({ selectedItems: newSelected });
    get().renderSelection();
    get().updateOutputs();
  },

  cancelRotate: () => {
    set({ selectMode: null, rotateOrigin: null, isSelecting: false });
    get().renderSelection();
  },
});
