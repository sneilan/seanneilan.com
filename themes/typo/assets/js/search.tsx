import React, { Component, useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import MiniSearch from "minisearch";
import { fetchDocuments } from "./search.ts";

const Hello = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [copySuccess, setCopySuccess] = useState("");
  const divRef = useRef(null);
  const [miniSearch, setMiniSearch] = useState(null);
  const [miniSearchReady, setMiniSearchReady] = useState(false);

  useEffect(() => {
    setMiniSearch(
      new MiniSearch({
        // fields to index for full-text search
        fields: ["title", "categories"],
        // fields to return with search results
        storeFields: ["title", "text"],
        searchOptions: {
          prefix: true,
          fuzzy: 0.2,
        },
      })
    );
    setMiniSearchReady(true);
  }, []);

  useEffect(() => {
    if (!miniSearchReady) {
      return;
    }

    const fetchData = async () => {
      const fetchedDocs = await fetchDocuments();
      miniSearch.addAll(fetchedDocs);
    };

    fetchData();
  }, [miniSearchReady]);

  useEffect(() => {
    if (!miniSearchReady) {
      return;
    }

    setResults(miniSearch.search(query));
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setCopySuccess("Copy");
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopySuccess("Copied!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        setCopySuccess("Failed to copy!");
      });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "1") {
        // copyToClipboard(results[0].text);
        console.log("Ctrl+1 pressed!");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
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
          return (
            <div key={result.id} style={{ position: "relative" }}>
              <h6>{result.title}</h6>

              {/* <a */}
              {/*   href="#" */}
              {/*   onClick={() => { */}
              {/*     copyToClipboard(result.text); */}
              {/*   }} */}
              {/*   style={{ */}
              {/*     position: "absolute", */}
              {/*     top: "10px", */}
              {/*     right: "10px", */}
              {/*   }} */}
              {/* > */}
              {/*   {copySuccess} */}
              {/* </a> */}
              <div
                // onClick={() => {
                //   copyToClipboard(result.text);
                // }}
                className="highlight"
              >
                <pre ref={divRef}>{result.text}</pre>
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Hello />);
