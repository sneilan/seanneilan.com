interface EquationRendererProps {
  svg: string | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
  downloading?: boolean;
  downloadProgress?: number;
}

function EquationRenderer({ svg, loading, error, initialized, downloading, downloadProgress }: EquationRendererProps) {
  if (downloading) {
    return (
      <div className="renderer initializing">
        <div className="download-progress">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${downloadProgress || 0}%` }}
            />
          </div>
          <span className="progress-text">
            Downloading Typst compiler... {downloadProgress || 0}%
          </span>
        </div>
      </div>
    );
  }

  if (!initialized) {
    return (
      <div className="renderer initializing">
        <span className="hint">Click to load Typst compiler</span>
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
