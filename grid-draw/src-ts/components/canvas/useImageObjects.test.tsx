import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import type React from 'react';
import { useGridStore } from '../../store/gridStore';
import { useImageObjects } from './useImageObjects';
import type { Camera } from './coords';

// The three side-effecting deps are mocked so the hook's placement/upload logic
// is testable without S3, canvas pixel work, or real image decoding.
vi.mock('../../lib/apiClient', () => ({ uploadImage: vi.fn() }));
vi.mock('../../lib/removeBackground', () => ({ removeWhiteBackground: vi.fn() }));
vi.mock('../../lib/imageCache', () => ({ loadImageSize: vi.fn() }));

import { uploadImage } from '../../lib/apiClient';
import { removeWhiteBackground } from '../../lib/removeBackground';
import { loadImageSize } from '../../lib/imageCache';

const mockUpload = vi.mocked(uploadImage);
const mockRemoveBg = vi.mocked(removeWhiteBackground);
const mockLoadSize = vi.mocked(loadImageSize);

const camRef: React.MutableRefObject<Camera> = { current: { x: 0, y: 0, zoom: 1 } };
// viewport 0×0 with a zero camera keeps the placement center at (0,0) so the
// box math depends only on the image aspect ratio.
const viewport = { w: 0, h: 0 };

let placeImage: ReturnType<typeof vi.fn>;

beforeEach(() => {
  vi.clearAllMocks();
  // 2:1 natural size (200×100) → the placed box should be twice as wide as tall.
  mockLoadSize.mockResolvedValue({ el: {} as HTMLImageElement, width: 200, height: 100 });
  mockUpload.mockResolvedValue('https://s3.example/up.png');
  mockRemoveBg.mockImplementation(async (b) => b);
  placeImage = vi.fn();
  useGridStore.setState({ placeImage: placeImage as never, textEdit: null });
});

describe('useImageObjects — addImageObject placement', () => {
  it('URL source skips upload and places a box matching the image aspect (2:1)', async () => {
    const { result } = renderHook(() => useImageObjects(camRef, viewport));

    await act(async () => {
      await result.current.addImageObject('http://img/x.png');
    });

    expect(mockUpload).not.toHaveBeenCalled();
    expect(mockLoadSize).toHaveBeenCalledWith('http://img/x.png');
    // wCells 16, hCells 8; centered at (0,0) with a 0×0 viewport.
    expect(placeImage).toHaveBeenCalledWith('http://img/x.png', { r1: -32, c1: -64, r2: 32, c2: 64 });
    const [, box] = placeImage.mock.calls[0];
    expect(box.c2 - box.c1).toBe(2 * (box.r2 - box.r1)); // aspect preserved
    expect(result.current.imgStatus).toBe('');
  });

  it('Blob source uploads first (and skips background removal when removeBg is off)', async () => {
    const blob = new Blob(['x'], { type: 'image/png' });
    const { result } = renderHook(() => useImageObjects(camRef, viewport));

    await act(async () => {
      await result.current.addImageObject(blob);
    });

    expect(mockRemoveBg).not.toHaveBeenCalled();
    expect(mockUpload).toHaveBeenCalledWith(blob);
    // The uploaded (S3) URL — not the blob — is what gets placed.
    expect(placeImage).toHaveBeenCalledWith('https://s3.example/up.png', expect.any(Object));
  });

  it('runs removeWhiteBackground before upload only when removeBg is enabled', async () => {
    const blob = new Blob(['x'], { type: 'image/png' });
    const processed = new Blob(['processed'], { type: 'image/png' });
    mockRemoveBg.mockResolvedValueOnce(processed);
    const { result } = renderHook(() => useImageObjects(camRef, viewport));

    act(() => result.current.setRemoveBg(true));
    await act(async () => {
      await result.current.addImageObject(blob);
    });

    expect(mockRemoveBg).toHaveBeenCalledWith(blob);
    // Upload receives the background-removed blob, not the original.
    expect(mockUpload).toHaveBeenCalledWith(processed);
  });

  it('sets imgStatus to the error message when a step fails', async () => {
    mockUpload.mockRejectedValueOnce(new Error('upload boom'));
    const blob = new Blob(['x'], { type: 'image/png' });
    const { result } = renderHook(() => useImageObjects(camRef, viewport));

    await act(async () => {
      await result.current.addImageObject(blob);
    });

    expect(result.current.imgStatus).toBe('upload boom');
    expect(placeImage).not.toHaveBeenCalled();
  });
});

describe('useImageObjects — OS clipboard paste', () => {
  it("adds an image file from the document 'paste' event", async () => {
    renderHook(() => useImageObjects(camRef, viewport));
    const file = new File(['x'], 'pic.png', { type: 'image/png' });

    const ev = new Event('paste');
    Object.defineProperty(ev, 'clipboardData', {
      value: { items: [{ kind: 'file', type: 'image/png', getAsFile: () => file }] },
    });

    await act(async () => {
      document.dispatchEvent(ev);
      await new Promise((r) => setTimeout(r, 0));
    });

    expect(mockUpload).toHaveBeenCalledWith(file);
    expect(placeImage).toHaveBeenCalled();
  });

  it('ignores paste while a text edit is active (typing owns the clipboard)', async () => {
    useGridStore.setState({ textEdit: { row: 0, col: 0, size: 1, text: 'hi' } });
    renderHook(() => useImageObjects(camRef, viewport));
    const file = new File(['x'], 'pic.png', { type: 'image/png' });

    const ev = new Event('paste');
    Object.defineProperty(ev, 'clipboardData', {
      value: { items: [{ kind: 'file', type: 'image/png', getAsFile: () => file }] },
    });

    await act(async () => {
      document.dispatchEvent(ev);
      await new Promise((r) => setTimeout(r, 0));
    });

    expect(mockUpload).not.toHaveBeenCalled();
    expect(placeImage).not.toHaveBeenCalled();
  });
});
