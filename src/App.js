import React from "react";
import "./App.css";
// import {
//   alphabet,
//   arrayText,
//   clickButton,
//   divAlphabet,
//   fnGetStateAlphabet,
//   fnGetStateText,
//   fnTimeout,
//   setValue,
//   stateText,
//   text,
//   useCustomHookCountErrors,
//   useCustomHookDoubleMillisecond,
//   useCustomHookDoubleSeconds,
//   useCustomHookEnd,
//   useCustomHookLastIndex,
//   useCustomHookMillisecond,
//   useCustomHookSeconds,
//   useCustomHookStart,
//   useCustomHookValue,
//   value,
// } from "./state";
import BaseComponent from "./component/BaseComponent";

function App() {
  return (
    <div className="App">
      <h1>Speed Keyboard Click App</h1>
      <hr></hr>
      <BaseComponent />
    </div>
  );
}

export default App;
