import { useEffect, useRef } from 'react';

interface EquationInputProps {
  value: string;
  onChange: (value: string) => void;
  onDuplicate: () => void;
  onDelete?: () => void;
  onNavigatePrev?: () => void;
  onNavigateNext?: () => void;
  shouldFocus: boolean;
  onFocused: () => void;
}

function EquationInput({ value, onChange, onDuplicate, onDelete, onNavigatePrev, onNavigateNext, shouldFocus, onFocused }: EquationInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (shouldFocus && textareaRef.current) {
      textareaRef.current.focus();
      onFocused();
    }
  }, [shouldFocus, onFocused]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === 'Enter') {
      e.preventDefault();
      onDuplicate();
    }
    if (e.ctrlKey && e.shiftKey && e.key === 'Backspace' && onDelete) {
      e.preventDefault();
      onDelete();
    }
    if (e.ctrlKey && e.key === 'ArrowUp' && onNavigatePrev) {
      e.preventDefault();
      onNavigatePrev();
    }
    if (e.ctrlKey && e.key === 'ArrowDown' && onNavigateNext) {
      e.preventDefault();
      onNavigateNext();
    }
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Enter Typst equation, e.g., x^2 + y^2 = z^2 (Ctrl+Enter to duplicate)"
      spellCheck={false}
    />
  );
}

export default EquationInput;
