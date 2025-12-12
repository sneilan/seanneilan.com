import { useState, useEffect } from 'react';
import EquationRow from './components/EquationRow';
import Toolbar from './components/Toolbar';
import { Equation } from './types';
import { saveNotebook, loadNotebook } from './features/localStorage';
import { encodeEquationsToURL, decodeEquationsFromURL, copyToClipboard } from './features/urlSharing';
import { downloadSVG } from './features/exportUtils';
import { Template } from './features/templates';
import './styles/typst-notebook.css';

interface AppProps {
  mode?: 'full' | 'simple';
}

let nextId = 1;

const FULLSCREEN_KEY = 'typst-notebook-fullscreen';

function App({ mode = 'full' }: AppProps) {
  const [equations, setEquations] = useState<Equation[]>(() => {
    // Check for shared equations in URL
    const shared = decodeEquationsFromURL();
    if (shared && shared.length > 0) {
      return shared.map((input) => ({ id: nextId++, input }));
    }
    return [{ id: nextId++, input: '' }];
  });
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(() => {
    return localStorage.getItem(FULLSCREEN_KEY) === 'true';
  });
  const [focusId, setFocusId] = useState<number | null>(null);

  const wrapWithDelimiters = (input: string) => {
    // If input already contains $, assume user is handling delimiters
    if (input.includes('$')) return input;
    return `$ ${input} $`;
  };

  const updateEquation = (id: number, input: string) => {
    setEquations((eqs) => eqs.map((eq) => (eq.id === id ? { ...eq, input } : eq)));
  };

  const duplicateEquation = (id: number) => {
    const index = equations.findIndex((e) => e.id === id);
    if (index !== -1) {
      const eq = equations[index];
      const newId = nextId++;
      const newEq = { id: newId, input: eq.input };
      setEquations((eqs) => [...eqs.slice(0, index + 1), newEq, ...eqs.slice(index + 1)]);
      setFocusId(newId);
    }
  };

  const deleteEquation = (id: number) => {
    if (equations.length > 1) {
      const index = equations.findIndex((e) => e.id === id);
      // Focus the row above, or the first row if deleting the first one
      const focusIndex = index > 0 ? index - 1 : 0;
      const newEquations = equations.filter((eq) => eq.id !== id);
      setEquations(newEquations);
      if (newEquations[focusIndex]) {
        setFocusId(newEquations[focusIndex].id);
      }
    }
  };

  const navigateToPrev = (id: number) => {
    const index = equations.findIndex((e) => e.id === id);
    if (index > 0) {
      setFocusId(equations[index - 1].id);
    }
  };

  const navigateToNext = (id: number) => {
    const index = equations.findIndex((e) => e.id === id);
    if (index < equations.length - 1) {
      setFocusId(equations[index + 1].id);
    }
  };

  const handleSave = (name: string) => {
    saveNotebook(name, equations);
  };

  const handleLoad = (name: string) => {
    const notebook = loadNotebook(name);
    if (notebook) {
      // Reset IDs for loaded equations
      setEquations(notebook.equations.map((eq) => ({ ...eq, id: nextId++ })));
    }
  };

  const handleShare = () => {
    const url = encodeEquationsToURL(equations.map((eq) => eq.input));
    setShareUrl(url);
    copyToClipboard(url);
  };

  const handleLoadTemplate = (template: Template) => {
    setEquations(template.equations.map((input) => ({ id: nextId++, input })));
  };

  const handleClear = () => {
    const newId = nextId++;
    setEquations([{ id: newId, input: '' }]);
    setFocusId(newId);
  };

  const handleExportSVG = (svg: string, id: number) => {
    downloadSVG(svg, `equation-${id}`);
  };

  const handleToggleFullscreen = () => {
    const newValue = !isFullscreen;
    setIsFullscreen(newValue);
    localStorage.setItem(FULLSCREEN_KEY, String(newValue));
  };

  // Clear URL params after loading shared equations
  useEffect(() => {
    if (window.location.search.includes('eq=')) {
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  // Apply fullscreen class to body
  useEffect(() => {
    if (isFullscreen) {
      document.body.classList.add('typst-fullscreen');
    } else {
      document.body.classList.remove('typst-fullscreen');
    }
    return () => {
      document.body.classList.remove('typst-fullscreen');
    };
  }, [isFullscreen]);

  const isSimpleMode = mode === 'simple';

  return (
    <div className={`typst-notebook ${isSimpleMode ? 'simple-mode' : ''}`}>
      {isFullscreen && !isSimpleMode && (
        <div className="fullscreen-header">
          <a href="/" className="back-link">&larr; seanneilan.com</a>
          <h1>Typst Math Notebook</h1>
        </div>
      )}
      {!isSimpleMode && (
        <Toolbar
          onSave={handleSave}
          onLoad={handleLoad}
          onShare={handleShare}
          onClear={handleClear}
          onLoadTemplate={handleLoadTemplate}
          shareUrl={shareUrl}
          isFullscreen={isFullscreen}
          onToggleFullscreen={handleToggleFullscreen}
        />
      )}
      <div className="equations-container">
        {equations.map((eq) => (
          <EquationRow
            key={eq.id}
            id={eq.id}
            input={eq.input}
            typstInput={wrapWithDelimiters(eq.input)}
            onChange={(input) => updateEquation(eq.id, input)}
            onDuplicate={() => duplicateEquation(eq.id)}
            onDelete={() => deleteEquation(eq.id)}
            canDelete={equations.length > 1 && !isSimpleMode}
            onExportSVG={handleExportSVG}
            shouldFocus={focusId === eq.id}
            onFocused={() => setFocusId(null)}
            onNavigatePrev={() => navigateToPrev(eq.id)}
            onNavigateNext={() => navigateToNext(eq.id)}
          />
        ))}
      </div>
      {isSimpleMode && (
        <p className="simple-mode-note">
          <a href="/typst-notebook/">Open full notebook</a> for save, share, and more features.
        </p>
      )}
    </div>
  );
}

export default App;
