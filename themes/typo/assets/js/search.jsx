import React, { Component, useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import MiniSearch from 'minisearch'

const documents = [
  {
    id: 1,
    title: 'show running queries',
    text: `SELECT pid, now() - pg_stat_activity.query_start AS duration, query, state  
FROM pg_stat_activity  
ORDER BY duration DESC;`,
    categories: ['postgres']
  },
  {
    id: 2,
    title: `create inverted keyword index`,
    text: `CREATE EXTENSION pg_trgm;
CREATE INDEX trgm_title ON table USING gin (title gin_trgm_ops)`,
    category: ['postgres']
  },
  {
    id: 3,
    title: 'Neuromancer',
    text: 'The sky above the port was...',
    category: 'fiction'
  },
  {
    id: 4,
    title: 'Zen and the Art of Archery',
    text: 'At first sight it must seem...',
    category: 'non-fiction'
  },
  // ...and more
]

const Hello = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [copySuccess, setCopySuccess] = useState('');
  const divRef = useRef(null);

  const miniSearch = new MiniSearch({
    fields: ['title', 'category'], // fields to index for full-text search
    storeFields: ['title', 'category', 'text'] // fields to return with search results
  });

  miniSearch.addAll(documents);

  useEffect(() => {
    console.log(miniSearch.search(query));
    setResults(miniSearch.search(query));
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setCopySuccess('Copy');
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopySuccess('Copied!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        setCopySuccess('Failed to copy!');
      });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === '1') {
        // copyToClipboard(results[0].text);
        console.log('Ctrl+1 pressed!');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <input
        className="search-box"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        autoFocus
      />
      <>
        {results.map((result) => {
          return <div key={result.id} style={{ position: 'relative' }}
          >
            <h6>{result.title}</h6>

            <a
              href="#"
              onClick={() => { copyToClipboard(result.text) }}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px'
              }}
            >
              {copySuccess}
            </a>
            <div
              onClick={() => {
                copyToClipboard(result.text)
              }}
              className="highlight" >
              <pre ref={divRef}>{result.text}</pre>
            </div>
          </div>;
        })}
      </>
    </div >
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Hello />);

