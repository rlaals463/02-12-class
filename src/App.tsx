import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <div className="Heading-Wrapper">
        <h1>Jinseok's Counter App</h1>
        <span>made by jinseok</span>
      </div>
      <div className="Button-Wrapper">
        <button className="Button" onClick={() => setNumber(number + 1)}>
          +
        </button>
        <p className="Display-Number">{number}</p>
        <button className="Button" onClick={() => setNumber(number + -1)}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
