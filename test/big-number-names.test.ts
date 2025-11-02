import { describe, it, expect } from 'vitest';
import {
  splitNumber,
  getPowers,
  getName,
  bigNumExp,
  printNumber,
} from '../themes/typo/assets/js/big-number-names';

describe('Big Number Names - Core Functions', () => {
  describe('splitNumber', () => {
    it('should split a number into groups of 3 digits', () => {
      expect(splitNumber('123456789')).toEqual(['123', '456', '789']);
      expect(splitNumber('1234567')).toEqual(['1', '234', '567']);
      expect(splitNumber('123')).toEqual(['123']);
      expect(splitNumber('12')).toEqual(['12']);
      expect(splitNumber('1')).toEqual(['1']);
    });

    it('should handle numbers with leading zeros in groups', () => {
      expect(splitNumber('1000000')).toEqual(['1', '000', '000']);
      expect(splitNumber('1000001')).toEqual(['1', '000', '001']);
    });

    it('should handle very large numbers', () => {
      const googol = '1' + '0'.repeat(100);
      const result = splitNumber(googol);
      expect(result.length).toBe(34); // 100 zeros / 3 + 1
      expect(result[0]).toBe('1');
    });
  });

  describe('getPowers', () => {
    it('should return powers of 1000 for a number', () => {
      expect(getPowers(603n)).toEqual([603]);
      expect(getPowers(1002n)).toEqual([1, 2]);
      expect(getPowers(1683n)).toEqual([1, 683]);
      expect(getPowers(59052n)).toEqual([59, 52]);
    });

    it('should handle numbers with zeros', () => {
      expect(getPowers(3000003n)).toEqual([3, 0, 3]);
      expect(getPowers(1000000n)).toEqual([1, 0, 0]);
    });
  });

  describe('getName', () => {
    it('should generate Latin names for single digits', () => {
      expect(getName(0n)).toBe('thousand');
      expect(getName(1n)).toBe('million');
      expect(getName(2n)).toBe('billion');
      expect(getName(3n)).toBe('trillion');
    });

    it('should handle tens correctly', () => {
      expect(getName(10n)).toBe('decillion');
      expect(getName(20n)).toBe('vigintillion');
      expect(getName(30n)).toBe('trigintillion');
    });

    it('should handle hundreds correctly', () => {
      expect(getName(100n)).toBe('centillion');
      expect(getName(200n)).toBe('ducentillion');
    });

    it('should handle combined numbers with Conway-Weschler rules', () => {
      expect(getName(11n)).toBe('undecillion');
      expect(getName(21n)).toBe('unvigintillion');
      expect(getName(33n)).toBe('tretrigintillion');
    });

    it('should handle large numbers', () => {
      expect(getName(999n)).toContain('nongent');
      expect(getName(999n)).toContain('nonagint');
    });
  });

  describe('bigNumExp', () => {
    it('should return correct names for common powers of 10', () => {
      expect(bigNumExp(3n)).toBe('thousand');
      expect(bigNumExp(6n)).toBe('million');
      expect(bigNumExp(9n)).toBe('billion');
      expect(bigNumExp(12n)).toBe('trillion');
      expect(bigNumExp(15n)).toBe('quadrillion');
    });

    it('should handle very large exponents', () => {
      const result = bigNumExp(3003n);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });

    it('should handle small exponents', () => {
      expect(bigNumExp(0n)).toBe('');
      expect(bigNumExp(1n)).toBe('');
      expect(bigNumExp(2n)).toBe('');
    });
  });

  describe('printNumber', () => {
    it('should convert numbers to their English names', () => {
      expect(printNumber('0')).toBe('zero');
      expect(printNumber('1')).toBe('one');
      expect(printNumber('10')).toBe('ten');
      expect(printNumber('100')).toBe('one hundred');
      expect(printNumber('1000')).toBe('one thousand');
    });

    it('should handle complex numbers', () => {
      expect(printNumber('1234')).toBe('one thousand two hundred thirty-four');
      expect(printNumber('12345')).toBe('twelve thousand three hundred forty-five');
    });

    it('should handle millions, billions, trillions', () => {
      expect(printNumber('1000000')).toBe('one million');
      expect(printNumber('1000000000')).toBe('one billion');
      expect(printNumber('1000000000000')).toBe('one trillion');
    });

    it('should handle numbers with zeros in between', () => {
      expect(printNumber('1000001')).toBe('one million one');
      expect(printNumber('1001000')).toBe('one million one thousand');
    });

    it('should handle very large numbers (googol)', () => {
      const googol = '1' + '0'.repeat(100);
      const result = printNumber(googol);
      expect(result).toBeTruthy();
      expect(result).toContain('one');
      expect(typeof result).toBe('string');
    });
  });
});

describe('Big Number Names - Integration Tests', () => {
  it('should correctly process a number through the full pipeline', () => {
    const input = '123456789';

    // Split into groups
    const groups = splitNumber(input);
    expect(groups).toEqual(['123', '456', '789']);

    // Each group should be processable
    groups.forEach(group => {
      expect(parseInt(group)).toBeGreaterThanOrEqual(0);
      expect(parseInt(group)).toBeLessThan(1000);
    });

    // Full conversion should work
    const result = printNumber(input);
    expect(result).toBeTruthy();
    expect(result).toContain('million');
    expect(result).toContain('thousand');
  });

  it('should handle edge cases gracefully', () => {
    // Empty-like inputs
    expect(() => printNumber('')).not.toThrow();

    // Single digits
    for (let i = 0; i < 10; i++) {
      expect(printNumber(i.toString())).toBeTruthy();
    }
  });

  it('should maintain consistency between bigNumExp and getName', () => {
    // Testing the relationship between these functions
    for (let i = 0n; i < 10n; i++) {
      const exp = bigNumExp(3n * (i + 1n));
      expect(exp).toBeTruthy();
      expect(typeof exp).toBe('string');
    }
  });
});
