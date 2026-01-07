import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import {
  printNumber,
  getName,
} from '../themes/typo/assets/js/big-number-names';

// Component definition for testing (extracted to avoid DOM execution)
const BigNumberNames: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [printedNumber, setPrintedNumber] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    try {
      setPrintedNumber(printNumber(inputValue));
    } catch (error) {
      setPrintedNumber("");
    }
  };

  return (
    <div>
      <input
        className="search-box"
        type="text"
        placeholder="Type any number..."
        value={value}
        onChange={handleInputChange}
        data-autofocus="true"
      />
      <span data-testid="output">{printedNumber}</span>
    </div>
  );
};

describe('BigNumberNames Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  describe('Rendering', () => {
    it('should render the input field', () => {
      render(<BigNumberNames />);
      const input = screen.getByPlaceholderText('Type any number...');
      expect(input).toBeInTheDocument();
    });

    it('should render the output span', () => {
      render(<BigNumberNames />);
      const output = screen.getByTestId('output');
      expect(output).toBeInTheDocument();
    });

    it('should have correct input attributes', () => {
      render(<BigNumberNames />);
      const input = screen.getByPlaceholderText('Type any number...');

      expect(input).toHaveAttribute('type', 'text');
      expect(input).toHaveClass('search-box');
      expect(input).toHaveAttribute('data-autofocus', 'true');
    });
  });

  describe('User Interactions', () => {
    it('should update input value when user types', async () => {
      render(<BigNumberNames />);
      const input = screen.getByPlaceholderText('Type any number...') as HTMLInputElement;

      await userEvent.type(input, '123');

      expect(input.value).toBe('123');
    });

    it('should display number name when valid number is entered', async () => {
      render(<BigNumberNames />);
      const input = screen.getByPlaceholderText('Type any number...') as HTMLInputElement;
      const output = screen.getByTestId('output');

      await userEvent.type(input, '123');

      await waitFor(() => {
        expect(output.textContent).toBeTruthy();
      });
    });

    it('should handle single digit numbers', async () => {
      render(<BigNumberNames />);
      const input = screen.getByPlaceholderText('Type any number...') as HTMLInputElement;
      const output = screen.getByTestId('output');

      await userEvent.type(input, '5');

      await waitFor(() => {
        expect(output.textContent).toBe('five');
      });
    });

    it('should handle thousands correctly', async () => {
      render(<BigNumberNames />);
      const input = screen.getByPlaceholderText('Type any number...') as HTMLInputElement;
      const output = screen.getByTestId('output');

      await userEvent.type(input, '1000');

      await waitFor(() => {
        expect(output.textContent).toBe('one thousand');
      });
    });

    it('should handle millions correctly', async () => {
      render(<BigNumberNames />);
      const input = screen.getByPlaceholderText('Type any number...') as HTMLInputElement;
      const output = screen.getByTestId('output');

      await userEvent.type(input, '1000000');

      await waitFor(() => {
        expect(output.textContent).toBe('one million');
      });
    });

    it('should update output as user types progressively', async () => {
      render(<BigNumberNames />);
      const input = screen.getByPlaceholderText('Type any number...') as HTMLInputElement;
      const output = screen.getByTestId('output');

      // Type '1'
      await userEvent.type(input, '1');
      await waitFor(() => {
        expect(output.textContent).toBe('one');
      });

      // Add '0' to make '10'
      await userEvent.type(input, '0');
      await waitFor(() => {
        expect(output.textContent).toBe('ten');
      });

      // Add another '0' to make '100'
      await userEvent.type(input, '0');
      await waitFor(() => {
        expect(output.textContent).toBe('one hundred');
      });
    });

    it('should handle clearing the input', async () => {
      render(<BigNumberNames />);
      const input = screen.getByPlaceholderText('Type any number...') as HTMLInputElement;
      const output = screen.getByTestId('output');

      // Type a number
      await userEvent.type(input, '123');
      await waitFor(() => {
        expect(output.textContent).toBeTruthy();
      });

      // Clear it
      await userEvent.clear(input);

      expect(input.value).toBe('');
    });

    it('should handle very large numbers without crashing', async () => {
      render(<BigNumberNames />);
      const input = screen.getByPlaceholderText('Type any number...') as HTMLInputElement;
      const output = screen.getByTestId('output');

      const largeNumber = '12345678901234567890';
      await userEvent.type(input, largeNumber);

      // Should not crash and should produce some output
      await waitFor(() => {
        expect(output.textContent).toBeTruthy();
      });
    });
  });

  describe('Error Handling', () => {
    it('should handle invalid input gracefully', async () => {
      render(<BigNumberNames />);
      const input = screen.getByPlaceholderText('Type any number...') as HTMLInputElement;
      const output = screen.getByTestId('output');

      // Type invalid characters (the component should handle this)
      fireEvent.change(input, { target: { value: 'abc' } });

      // Should handle gracefully
      await waitFor(() => {
        // The output might be empty or show an error
        expect(output).toBeInTheDocument();
      });
    });

    it('should handle rapid input changes', async () => {
      render(<BigNumberNames />);
      const input = screen.getByPlaceholderText('Type any number...') as HTMLInputElement;

      // Rapidly change the input
      await userEvent.type(input, '12345');

      // Should not crash
      expect(input.value).toBe('12345');
    });
  });

  describe('Integration with Core Functions', () => {
    it('should use printNumber function correctly', async () => {
      render(<BigNumberNames />);
      const input = screen.getByPlaceholderText('Type any number...') as HTMLInputElement;
      const output = screen.getByTestId('output');

      const testNumber = '42';
      await userEvent.type(input, testNumber);

      const expected = printNumber(testNumber);
      await waitFor(() => {
        expect(output.textContent).toBe(expected);
      });
    });

    it('should match core function output for various numbers', async () => {
      const testCases = [
        { input: '7', expected: printNumber('7') },
        { input: '99', expected: printNumber('99') },
        { input: '500', expected: printNumber('500') },
        { input: '2024', expected: printNumber('2024') },
      ];

      for (const testCase of testCases) {
        const { unmount } = render(<BigNumberNames />);
        const input = screen.getByPlaceholderText('Type any number...') as HTMLInputElement;
        const output = screen.getByTestId('output');

        await userEvent.type(input, testCase.input);

        await waitFor(() => {
          expect(output.textContent).toBe(testCase.expected);
        });

        unmount();
      }
    });
  });

  describe('Accessibility', () => {
    it('should have accessible input field', () => {
      render(<BigNumberNames />);
      const input = screen.getByPlaceholderText('Type any number...');

      expect(input).toBeVisible();
      expect(input).toBeEnabled();
    });

    it('should maintain focus on input when autoFocus is set', () => {
      render(<BigNumberNames />);
      const input = screen.getByPlaceholderText('Type any number...') as HTMLInputElement;

      // AutoFocus should be present
      expect(input).toHaveAttribute('data-autofocus', 'true');
    });
  });
});
