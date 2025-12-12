interface EquationRendererProps {
  svg: string | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

function EquationRenderer({ svg, loading, error, initialized }: EquationRendererProps) {
  if (!initialized) {
    return (
      <div className="renderer initializing">
        <span className="spinner"></span>
        Initializing Typst compiler...
      </div>
    );
  }

  if (loading) {
    return <div className="renderer loading">Compiling...</div>;
  }

  if (error) {
    return <div className="renderer error">{error}</div>;
  }

  if (!svg) {
    return <div className="renderer">Enter an equation to render</div>;
  }

  return (
    <div
      className="renderer"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export default EquationRenderer;
