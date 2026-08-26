import { describe, it, expect } from 'vitest';
import { whiteBackgroundToAlpha } from './removeBackground';

// Build RGBA data from a character map: 'W' = white, 'R' = red, 'w' = slightly
// off-white (JPEG haze that should still count as background).
function rgba(rows: string[]): { data: Uint8ClampedArray; w: number; h: number } {
  const h = rows.length;
  const w = rows[0].length;
  const data = new Uint8ClampedArray(w * h * 4);
  rows.join('').split('').forEach((ch, i) => {
    const [r, g, b] = ch === 'R' ? [200, 30, 30] : ch === 'w' ? [245, 245, 240] : [255, 255, 255];
    data.set([r, g, b, 255], i * 4);
  });
  return { data, w, h };
}

const alphaAt = (d: Uint8ClampedArray, w: number, x: number, y: number) => d[(y * w + x) * 4 + 3];

describe('whiteBackgroundToAlpha', () => {
  it('clears border-connected white but keeps white enclosed inside a shape', () => {
    const { data, w, h } = rgba([
      'WWWWW',
      'WRRRW',
      'WRWRW', // center white is sealed inside the red ring
      'WRRRW',
      'WWWWW',
    ]);
    const removed = whiteBackgroundToAlpha(data, w, h, { feather: false });
    expect(removed).toBe(16); // the outer ring only
    expect(alphaAt(data, w, 0, 0)).toBe(0);   // background gone
    expect(alphaAt(data, w, 4, 2)).toBe(0);   // background gone (right edge)
    expect(alphaAt(data, w, 2, 2)).toBe(255); // enclosed white survives
    expect(alphaAt(data, w, 1, 1)).toBe(255); // the shape itself survives
  });

  it('treats off-white JPEG haze as background too', () => {
    const { data, w, h } = rgba([
      'wwww',
      'wRRw',
      'wRRw',
      'wwww',
    ]);
    const removed = whiteBackgroundToAlpha(data, w, h, { feather: false });
    expect(removed).toBe(12);
    expect(alphaAt(data, w, 1, 1)).toBe(255);
  });

  it('returns 0 and changes nothing when there is no white border', () => {
    const { data, w, h } = rgba([
      'RRR',
      'RWR', // white exists but never touches the border
      'RRR',
    ]);
    expect(whiteBackgroundToAlpha(data, w, h)).toBe(0);
    for (let i = 0; i < w * h; i++) expect(data[i * 4 + 3]).toBe(255);
  });

  it('feathers the alpha boundary (partial alpha appears at the cut edge)', () => {
    const { data, w, h } = rgba([
      'WWWWW',
      'WRRRW',
      'WRRRW',
      'WRRRW',
      'WWWWW',
    ]);
    whiteBackgroundToAlpha(data, w, h);
    const edge = alphaAt(data, w, 1, 1); // shape pixel adjacent to cleared bg
    expect(edge).toBeGreaterThan(0);
    expect(edge).toBeLessThan(255);
  });
});
