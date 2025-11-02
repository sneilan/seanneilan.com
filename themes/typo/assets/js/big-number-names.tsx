import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  splitNumber,
  printNumber,
  getPowers,
  bigNumExp,
  getName,
} from "./big-number-names";

const BigNumberNames: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [printedNumber, setPrintedNumber] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    try {
      setPrintedNumber(printNumber(inputValue));

      // For debugging: Convert string to BigInt for getName
      if (inputValue && /^\d+$/.test(inputValue)) {
        console.log(getName(BigInt(inputValue)));
      }
    } catch (error) {
      // Handle invalid input gracefully
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
        autoFocus
      />
      <span>{printedNumber}</span>
    </div>
  );
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}
const root = createRoot(container);
root.render(<BigNumberNames />);
