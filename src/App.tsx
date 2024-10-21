import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState("");
  const [currentOperator, setCurrentOperator] = useState("");

  function onNumberClick(value: string) {
    if (value === "." && currentValue.includes(".")) {
      return;
    }
    if (currentValue === "0" || currentValue === "") {
      if (value === "00") {
        return;
      }
      if (value === ".") {
        setCurrentValue(currentValue + value);
      } else {
        setCurrentValue(value);
      }
    } else {
      setCurrentValue(currentValue + value);
    }
  }

  function onOperatorClick(operator: string) {
    setCurrentOperator(operator);
    if (currentValue === "") {
      return;
    }
    setPreviousValue(currentValue);
    setCurrentValue("");
  }

  function clear() {
    setCurrentValue("0");
    setPreviousValue("");
    setCurrentOperator("");
  }

  function deleteLastChar() {
    let temp = currentValue;
    temp = temp.slice(0, -1);
    if (temp === "") {
      temp = "0";
      setCurrentValue(temp);
    } else {
      setCurrentValue(temp);
    }
  }

  function onEqualsClick() {
    if (previousValue === "") {
      return;
    } else {
      doCalculation();
    }
  }

  function doCalculation() {
    let result: number = 0;
    switch (currentOperator) {
      case "+":
        result = parseFloat(previousValue) + parseFloat(currentValue);
        break;
      case "-":
        result = parseFloat(previousValue) - parseFloat(currentValue);
        break;
      case "*":
        result = parseFloat(previousValue) * parseFloat(currentValue);
        break;
      case "/":
        if (currentValue === "0") {
          clear();
          setCurrentValue("ERROR");
          return;
        }
        result = parseFloat(previousValue) / parseFloat(currentValue);
        break;
    }
    let strResult = result.toFixed(5);
    setPreviousValue("");
    setCurrentValue(strResult);
  }

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <input className="input" type="text" value={currentValue} readOnly />
        </div>
        <div className="btn-collection">
          <div className="btn-row">
            <button
              id="c-button"
              className="basic-button"
              onClick={() => clear()}
            >
              c
            </button>
            <button className="basic-button" onClick={() => deleteLastChar()}>
              d
            </button>
            <button className="basic-button" onClick={() => onNumberClick(".")}>
              .
            </button>
            <button
              className="basic-button"
              onClick={() => onOperatorClick("/")}
            >
              /
            </button>
          </div>
          <div className="btn-row">
            <button className="basic-button" onClick={() => onNumberClick("7")}>
              7
            </button>
            <button className="basic-button" onClick={() => onNumberClick("8")}>
              8
            </button>
            <button className="basic-button" onClick={() => onNumberClick("9")}>
              9
            </button>
            <button
              className="basic-button"
              onClick={() => onOperatorClick("*")}
            >
              *
            </button>
          </div>
          <div className="btn-row">
            <button className="basic-button" onClick={() => onNumberClick("4")}>
              4
            </button>
            <button className="basic-button" onClick={() => onNumberClick("5")}>
              5
            </button>
            <button className="basic-button" onClick={() => onNumberClick("6")}>
              6
            </button>
            <button
              className="basic-button"
              onClick={() => onOperatorClick("-")}
            >
              -
            </button>
          </div>
          <div className="btn-row">
            <button className="basic-button" onClick={() => onNumberClick("1")}>
              1
            </button>
            <button className="basic-button" onClick={() => onNumberClick("2")}>
              2
            </button>
            <button className="basic-button" onClick={() => onNumberClick("3")}>
              3
            </button>
            <button
              className="basic-button"
              onClick={() => onOperatorClick("+")}
            >
              +
            </button>
          </div>
          <div className="btn-row">
            <button className="basic-button" onClick={() => onNumberClick("0")}>
              0
            </button>
            <button
              className="basic-button"
              onClick={() => onNumberClick("00")}
            >
              00
            </button>
            <button className="basic-button" onClick={() => onEqualsClick()}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
