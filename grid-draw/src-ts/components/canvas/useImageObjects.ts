import { useCallback, useEffect, useRef, useState } from 'react';
import { useGridStore } from '../../store/gridStore';
import { uploadImage } from '../../lib/apiClient';
import { removeWhiteBackground } from '../../lib/removeBackground';
import { loadImageSize } from '../../lib/imageCache';
import { CELL_SIZE, CELL_UNITS } from './constants';
import type { Camera } from './coords';

// Default longest-side size (whole cells) for a newly added image; the user
// then drags the handles to fit.
const IMG_DEFAULT_CELLS = 16;

/**
 * Image-object add flow: upload/URL/OS-paste sources, optional white-background
 * removal, and placement centered in the current viewport. Owns the hidden
 * <input> ref and the status line shown under the Image controls.
 */
export function useImageObjects(
  camRef: React.MutableRefObject<Camera>,
  viewport: { w: number; h: number },
) {
  const placeImage = useGridStore((s) => s.placeImage);

  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [imgStatus, setImgStatus] = useState<string>('');
  // Opt-in: flood-fill the border-connected white backdrop of an uploaded or
  // pasted image into transparency before it goes to S3 (lib/removeBackground).
  // Off by default — it would eat legitimate white regions of other images.
  const [removeBg, setRemoveBg] = useState<boolean>(false);

  // Add an image object to the drawing. `source` is either a Blob (upload/paste
  // — sent to S3 first) or a URL string (referenced directly). The box is sized
  // from the image's aspect ratio and centered in the current viewport, snapped
  // to whole cells; the user resizes from there.
  const addImageObject = useCallback(async (source: Blob | string) => {
    try {
      let url: string;
      if (typeof source === 'string') {
        url = source;
      } else {
        let blob = source;
        if (removeBg) {
          setImgStatus('Removing background…');
          blob = await removeWhiteBackground(blob);
        }
        setImgStatus('Uploading…');
        url = await uploadImage(blob);
      }
      setImgStatus('Loading…');
      const { width, height } = await loadImageSize(url);
      const maxNat = Math.max(width, height) || 1;
      const wCells = Math.max(1, Math.round((width / maxNat) * IMG_DEFAULT_CELLS));
      const hCells = Math.max(1, Math.round((height / maxNat) * IMG_DEFAULT_CELLS));
      // Center of the current viewport, in whole cells (fine units), snapped.
      const c = camRef.current;
      const centerCol = Math.round((c.x + viewport.w / 2 / c.zoom) / CELL_SIZE / CELL_UNITS) * CELL_UNITS;
      const centerRow = Math.round((c.y + viewport.h / 2 / c.zoom) / CELL_SIZE / CELL_UNITS) * CELL_UNITS;
      const c1 = centerCol - Math.round(wCells / 2) * CELL_UNITS;
      const r1 = centerRow - Math.round(hCells / 2) * CELL_UNITS;
      placeImage(url, { r1, c1, r2: r1 + hCells * CELL_UNITS, c2: c1 + wCells * CELL_UNITS });
      setImgStatus('');
    } catch (e) {
      setImgStatus(e instanceof Error ? e.message : 'image failed');
    }
  }, [placeImage, viewport.w, viewport.h, removeBg, camRef]);

  // Paste an image from the OS clipboard (Cmd/Ctrl+V of a copied picture). The
  // DOM paste event carries the bitmap even though the keyboard handler's
  // grid-clipboard paste runs too (that just no-ops when the grid clipboard is
  // empty). Only intercept when an actual image is present.
  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      if (useGridStore.getState().textEdit) return; // typing: let text input handle it
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const it of items) {
        if (it.kind === 'file' && it.type.startsWith('image/')) {
          const file = it.getAsFile();
          if (file) {
            e.preventDefault();
            void addImageObject(file);
            return;
          }
        }
      }
    };
    document.addEventListener('paste', onPaste);
    return () => document.removeEventListener('paste', onPaste);
  }, [addImageObject]);

  return { imageInputRef, imgStatus, removeBg, setRemoveBg, addImageObject };
}
