import { useState } from 'react';
import { getNotebookList, deleteNotebook } from '../features/localStorage';
import { templates, Template } from '../features/templates';

interface ToolbarProps {
  onSave: (name: string) => void;
  onLoad: (name: string) => void;
  onShare: () => void;
  onClear: () => void;
  onLoadTemplate: (template: Template) => void;
  shareUrl: string | null;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

function Toolbar({ onSave, onLoad, onShare, onClear, onLoadTemplate, shareUrl, isFullscreen, onToggleFullscreen }: ToolbarProps) {
  const [saveName, setSaveName] = useState('');
  const [showSaveInput, setShowSaveInput] = useState(false);
  const [showLoadDropdown, setShowLoadDropdown] = useState(false);
  const [showTemplateDropdown, setShowTemplateDropdown] = useState(false);
  const [copied, setCopied] = useState(false);

  const notebooks = getNotebookList();

  const handleSave = () => {
    if (saveName.trim()) {
      onSave(saveName.trim());
      setSaveName('');
      setShowSaveInput(false);
    }
  };

  const handleShare = () => {
    onShare();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDelete = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm(`Delete notebook "${name}"?`)) {
      deleteNotebook(name);
      setShowLoadDropdown(false);
    }
  };

  return (
    <div className="toolbar">
      <div className="toolbar-group">
        {showSaveInput ? (
          <div className="save-input-group">
            <input
              type="text"
              value={saveName}
              onChange={(e) => setSaveName(e.target.value)}
              placeholder="Notebook name"
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
              autoFocus
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setShowSaveInput(false)}>Cancel</button>
          </div>
        ) : (
          <button onClick={() => setShowSaveInput(true)}>Save</button>
        )}

        <div className="dropdown">
          <button
            onClick={() => {
              setShowLoadDropdown(!showLoadDropdown);
              setShowTemplateDropdown(false);
            }}
            disabled={notebooks.length === 0}
          >
            Load {notebooks.length > 0 && `(${notebooks.length})`}
          </button>
          {showLoadDropdown && (
            <div className="dropdown-menu">
              {notebooks.map((name) => (
                <div
                  key={name}
                  className="dropdown-item"
                  onClick={() => {
                    onLoad(name);
                    setShowLoadDropdown(false);
                  }}
                >
                  <span>{name}</span>
                  <button
                    className="delete-btn"
                    onClick={(e) => handleDelete(name, e)}
                    title="Delete"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="toolbar-group">
        <button onClick={handleShare}>
          {copied ? 'Copied!' : 'Share'}
        </button>
        {shareUrl && copied && (
          <span className="share-url-preview">URL copied to clipboard</span>
        )}
      </div>

      <div className="toolbar-group">
        <button onClick={onClear} title="Clear all equations">
          Clear
        </button>
        <div className="dropdown">
          <button
            onClick={() => {
              setShowTemplateDropdown(!showTemplateDropdown);
              setShowLoadDropdown(false);
            }}
          >
            Templates
          </button>
          {showTemplateDropdown && (
            <div className="dropdown-menu">
              {templates.map((template) => (
                <div
                  key={template.name}
                  className="dropdown-item"
                  onClick={() => {
                    onLoadTemplate(template);
                    setShowTemplateDropdown(false);
                  }}
                >
                  {template.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="toolbar-group toolbar-right">
        <button onClick={onToggleFullscreen} title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}>
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
