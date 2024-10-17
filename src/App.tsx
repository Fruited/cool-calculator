import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="calculator">
        <div>
          <input type="text" readOnly />
        </div>
        <div>
          <button className="basic-button">c</button>
          <button className="basic-button">d</button>
          <button className="basic-button">.</button>
          <button className="basic-button">/</button>
        </div>
        <div>
          <button className="basic-button">7</button>
          <button className="basic-button">8</button>
          <button className="basic-button">9</button>
          <button className="basic-button">*</button>
        </div>
        <div>
          <button className="basic-button">4</button>
          <button className="basic-button">5</button>
          <button className="basic-button">6</button>
          <button className="basic-button">-</button>
        </div>
        <div>
          <button className="basic-button">1</button>
          <button className="basic-button">2</button>
          <button className="basic-button">3</button>
          <button className="basic-button">+</button>
        </div>
        <div>
          <button className="basic-button">0</button>
          <button className="basic-button">00</button>
          <button className="basic-button">=</button>
        </div>
      </div>
    </div>
  );
}
export default App;
