import { describe, it, expect } from 'vitest';
import {
  getLineHandles,
  getRectHandles,
  hitTestHandle,
  cursorForRectHandle,
} from './handles';

describe('resize handle geometry', () => {
  describe('getLineHandles', () => {
    it('returns the two endpoints', () => {
      // line from (2,3) to (8,5)
      const handles = getLineHandles([2, 3, 8, 5]);
      expect(handles).toEqual([
        { handle: 0, r: 2, c: 3 },
        { handle: 1, r: 8, c: 5 },
      ]);
    });

    it('returns nothing for malformed coords', () => {
      expect(getLineHandles([1, 2])).toEqual([]);
    });
  });

  describe('getRectHandles', () => {
    it('returns 8 handles clockwise from top-left, normalized', () => {
      // rect given un-normalized: (6,8) -> (2,4) => min (2,4) max (6,8), mids (4,6)
      const h = getRectHandles([6, 8, 2, 4]);
      expect(h).toEqual([
        { handle: 0, r: 2, c: 4 }, // TL
        { handle: 1, r: 2, c: 6 }, // top
        { handle: 2, r: 2, c: 8 }, // TR
        { handle: 3, r: 4, c: 8 }, // right
        { handle: 4, r: 6, c: 8 }, // BR
        { handle: 5, r: 6, c: 6 }, // bottom
        { handle: 6, r: 6, c: 4 }, // BL
        { handle: 7, r: 4, c: 4 }, // left
      ]);
    });
  });

  describe('hitTestHandle', () => {
    const cell = 16;
    const handles = getRectHandles([0, 0, 4, 4]); // corners at 0 and 64px, mids at 32px

    it('hits a corner when the cursor is within tolerance', () => {
      // TR corner is at px (x=64, y=0)
      const hit = hitTestHandle(64, 1, handles, cell, 7);
      expect(hit?.handle).toBe(2);
    });

    it('returns null when no handle is close', () => {
      // dead center of the rect, far from any handle
      expect(hitTestHandle(32, 32, handles, cell, 7)).toBeNull();
    });

    it('picks the nearest handle when two are nearby', () => {
      // closer to TL (0,0) than to top-mid (x=32)
      const hit = hitTestHandle(5, 2, handles, cell, 40);
      expect(hit?.handle).toBe(0);
    });
  });

  describe('cursorForRectHandle', () => {
    it('uses diagonal cursors for corners and straight for edges', () => {
      expect(cursorForRectHandle(0)).toBe('nwse-resize');
      expect(cursorForRectHandle(4)).toBe('nwse-resize');
      expect(cursorForRectHandle(2)).toBe('nesw-resize');
      expect(cursorForRectHandle(1)).toBe('ns-resize');
      expect(cursorForRectHandle(3)).toBe('ew-resize');
    });
  });
});
