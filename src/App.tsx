import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState("");

  function onNumberClick(value: string) {
    if (currentValue === "0") {
      setCurrentValue(value);
    } else {
      setCurrentValue(currentValue + value);
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        <div>
          <input type="text" value={currentValue} readOnly />
        </div>
        <div>
          <button className="basic-button">c</button>
          <button className="basic-button">d</button>
          <button className="basic-button">.</button>
          <button className="basic-button">/</button>
        </div>
        <div>
          <button className="basic-button" onClick={() => onNumberClick("7")}>
            7
          </button>
          <button className="basic-button" onClick={() => onNumberClick("8")}>8</button>
          <button className="basic-button" onClick={() => onNumberClick("9")}>9</button>
          <button className="basic-button">*</button>
        </div>
        <div>
          <button className="basic-button" onClick={() => onNumberClick("4")}>4</button>
          <button className="basic-button" onClick={() => onNumberClick("5")}>5</button>
          <button className="basic-button" onClick={() => onNumberClick("6")}>6</button>
          <button className="basic-button">-</button>
        </div>
        <div>
          <button className="basic-button" onClick={() => onNumberClick("1")}>1</button>
          <button className="basic-button" onClick={() => onNumberClick("2")}>2</button>
          <button className="basic-button" onClick={() => onNumberClick("3")}>3</button>
          <button className="basic-button">+</button>
        </div>
        <div>
          <button className="basic-button" onClick={() => onNumberClick("7")}>0</button>
          <button className="basic-button" onClick={() => onNumberClick("7")}>00</button>
          <button className="basic-button">=</button>
        </div>
      </div>
    </div>
  );
}
export default App;
