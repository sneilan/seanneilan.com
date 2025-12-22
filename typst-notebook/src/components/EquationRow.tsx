import EquationInput from './EquationInput';
import EquationRenderer from './EquationRenderer';
import { useTypst } from '../hooks/useTypst';

interface EquationRowProps {
  id: number;
  input: string;
  typstInput: string;
  onChange: (input: string) => void;
  onDuplicate: () => void;
  onDelete: () => void;
  canDelete: boolean;
  onExportSVG: (svg: string, id: number) => void;
  shouldFocus: boolean;
  onFocused: () => void;
  onNavigatePrev?: () => void;
  onNavigateNext?: () => void;
}

function EquationRow({
  id,
  input,
  typstInput,
  onChange,
  onDuplicate,
  onDelete,
  canDelete,
  onExportSVG,
  shouldFocus,
  onFocused,
  onNavigatePrev,
  onNavigateNext,
}: EquationRowProps) {
  const { svg, loading, error, initialized, downloading, downloadProgress, triggerInit } = useTypst(typstInput);

  // Trigger initialization when user focuses on input
  const handleFocus = () => {
    triggerInit();
  };

  return (
    <div className="equation-row" onFocus={handleFocus}>
      <div className="equation-actions">
        <button onClick={onDuplicate} title="Duplicate (Ctrl+Enter)">+</button>
        {canDelete && <button onClick={onDelete} title="Delete (Ctrl+Shift+Backspace)">x</button>}
        {svg && (
          <button
            onClick={() => onExportSVG(svg, id)}
            title="Export SVG"
            className="export-btn"
          >
            SVG
          </button>
        )}
      </div>
      <EquationRenderer
        svg={svg}
        loading={loading}
        error={error}
        initialized={initialized}
        downloading={downloading}
        downloadProgress={downloadProgress}
      />
      <EquationInput
        value={input}
        onChange={onChange}
        onDuplicate={onDuplicate}
        onDelete={canDelete ? onDelete : undefined}
        onNavigatePrev={onNavigatePrev}
        onNavigateNext={onNavigateNext}
        shouldFocus={shouldFocus}
        onFocused={onFocused}
      />
    </div>
  );
}

export default EquationRow;
