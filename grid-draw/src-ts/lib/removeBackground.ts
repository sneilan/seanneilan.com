// White-background removal for uploaded/pasted images (e.g. AI-generated JPEGs
// that bake a studio-white backdrop into the pixels). Pure pixel work, no ML: a
// flood fill claims the near-white region CONNECTED TO THE IMAGE BORDER and
// turns it into alpha. Interior whites (petal highlights, eyes, teeth) are
// unreachable from the border, so they survive — the reason this beats a global
// "delete all white pixels" key. Runs entirely in the browser; the server and
// S3 only ever see the finished transparent PNG.

/**
 * Mutate `data` (RGBA, from ImageData) in place: alpha 0 for border-connected
 * near-white pixels. A pixel is near-white when all three channels exceed
 * 255 - tol. With `feather` (default), one 3×3 box blur softens the alpha
 * boundary so the cutout edge doesn't look razor-cut. Returns the number of
 * background pixels removed (0 ⇒ nothing looked like a white backdrop).
 */
export function whiteBackgroundToAlpha(
  data: Uint8ClampedArray,
  w: number,
  h: number,
  opts?: { tol?: number; feather?: boolean },
): number {
  const tol = opts?.tol ?? 28;
  const thr = 255 - tol;
  const nearWhite = (i: number) =>
    data[i * 4] > thr && data[i * 4 + 1] > thr && data[i * 4 + 2] > thr;

  // BFS flood fill over a flat visited map; the queue holds pixel indices.
  const bg = new Uint8Array(w * h);
  const queue = new Int32Array(w * h);
  let head = 0;
  let tail = 0;
  const seed = (i: number) => {
    if (!bg[i] && nearWhite(i)) {
      bg[i] = 1;
      queue[tail++] = i;
    }
  };
  for (let x = 0; x < w; x++) {
    seed(x);
    seed((h - 1) * w + x);
  }
  for (let y = 0; y < h; y++) {
    seed(y * w);
    seed(y * w + (w - 1));
  }
  while (head < tail) {
    const i = queue[head++];
    const x = i % w;
    if (x > 0) seed(i - 1);
    if (x < w - 1) seed(i + 1);
    if (i >= w) seed(i - w);
    if (i < w * (h - 1)) seed(i + w);
  }

  let removed = 0;
  for (let i = 0; i < w * h; i++) {
    if (bg[i]) {
      data[i * 4 + 3] = 0;
      removed++;
    }
  }
  if (removed === 0 || opts?.feather === false) return removed;

  // Feather: 3×3 box blur of the (currently binary) alpha channel. Interior
  // pixels stay fully opaque/transparent; only the cutout boundary blends.
  const blurred = new Uint8ClampedArray(w * h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let sum = 0;
      let n = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
            sum += data[(ny * w + nx) * 4 + 3];
            n++;
          }
        }
      }
      blurred[y * w + x] = sum / n;
    }
  }
  for (let i = 0; i < w * h; i++) data[i * 4 + 3] = blurred[i];
  return removed;
}

/**
 * Decode an image file, remove its border-connected white background, and
 * re-encode as a transparent PNG. If nothing in the image reads as a white
 * backdrop, the original file is returned untouched (no pointless PNG
 * re-encode of, say, an already-transparent sticker).
 */
export async function removeWhiteBackground(file: Blob): Promise<Blob> {
  const bmp = await createImageBitmap(file);
  try {
    const canvas = document.createElement('canvas');
    canvas.width = bmp.width;
    canvas.height = bmp.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('canvas 2d context unavailable');
    ctx.drawImage(bmp, 0, 0);
    const img = ctx.getImageData(0, 0, bmp.width, bmp.height);
    const removed = whiteBackgroundToAlpha(img.data, bmp.width, bmp.height);
    if (removed === 0) return file;
    ctx.putImageData(img, 0, 0);
    const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, 'image/png'));
    if (!blob) throw new Error('PNG encode failed');
    return blob;
  } finally {
    bmp.close();
  }
}
