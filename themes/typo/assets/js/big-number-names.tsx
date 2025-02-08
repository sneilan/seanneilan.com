import React, { Component, useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  splitNumber,
  printNumber,
  getPowers,
  bigNumExp,
  getName,
} from "./big-number-names";

const BigNumberNames = () => {
  const [value, setValue] = useState("");
  const [printedNumber, setPrintedNumber] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
    setPrintedNumber(printNumber(e.target.value));
    // console.log(bigNumExp(e.target.value));
    console.log(getName(e.target.value));
    // console.log(getPowers(e.target.value));
  };

  return (
    <div>
      <input
        className="search-box"
        type="text"
        placeholder="Type any number..."
        value={value}
        onChange={handleInputChange}
        autoFocus
      />
      <span>{printedNumber}</span>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BigNumberNames />);
