import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import {
  alphabet,
  arrayText,
  clickButton,
  divAlphabet,
  fnGetStateAlphabet,
  fnGetStateText,
  fnTimeout,
  setValue,
  stateText,
  text,
  useCustomHookCountErrors,
  useCustomHookDoubleMillisecond,
  useCustomHookDoubleSeconds,
  useCustomHookEnd,
  useCustomHookLastIndex,
  useCustomHookMillisecond,
  useCustomHookSeconds,
  useCustomHookStart,
  useCustomHookValue,
  value,
} from "./state";

function App() {
  const divAlphabet = [];
  const stateText = [];

  const fnGetStateAlphabet = () => {
    alphabet.forEach((element, index) => {
      divAlphabet.push({ value: element, backGround: null });
    });
  };
  fnGetStateAlphabet();

  const fnGetStateText = () => {
    let arr = [];
    arrayText.forEach((element, index) => {
      stateText.push({ value: element, backGround: null });
    });
  };
  fnGetStateText();

  const [myText, setMyText] = useState(stateText);
  const [myAlphabet, setMyAlphabet] = useState(divAlphabet);
  const [value, setValue] = useCustomHookValue("");
  const [countErrors, setCountErrors] = useCustomHookCountErrors(0);
  const [seconds, setSeconds] = useCustomHookSeconds(0);
  const [millisecond, setMillisecond] = useCustomHookMillisecond(0);
  const [doubleSeconds, setDoubleSeconds] = useCustomHookDoubleSeconds("--");
  const [doubleMillisecond, setDoubleMillisecond] =
    useCustomHookDoubleMillisecond("--");
  const [start, setStart] = useCustomHookStart(false);
  const [end, setEnd] = useCustomHookEnd(false);
  const [lastIndex, setLastIndex] = useCustomHookLastIndex(-1);

  setTimeout(() => {
    if (millisecond === 59) {
      setSeconds(seconds + 1);
      setMillisecond(0);
    } else {
      setMillisecond(millisecond + 1);
    }
  }, 10);

  const startFn = () => {
    setSeconds(0);
    setMillisecond(0);
    setStart(!start);
  };

  const clickFn = () => {
    startFn();
  };

  const changeFn = (e) => {
    let indexNow = e.target.value.length - 1;
    setValue(e.target.value);
    let currentIndexInMyAlphabet = myAlphabet.findIndex((item) => {
      return item.value === e.nativeEvent.data.toLowerCase();
    });

    if (currentIndexInMyAlphabet >= 0) {
      myAlphabet[currentIndexInMyAlphabet].backGround = "yellow";

      if (lastIndex >= 0 && lastIndex !== currentIndexInMyAlphabet) {
        myAlphabet[lastIndex].backGround = null;
      }
    } else {
      if (lastIndex >= 0 && lastIndex !== currentIndexInMyAlphabet) {
        myAlphabet[lastIndex].backGround = null;
      }
    }
    setLastIndex(currentIndexInMyAlphabet);

    if (indexNow >= stateText.length) {
    } else {
      if (e.nativeEvent.data === myText[indexNow].value) {
        myText[indexNow].backGround = "rgb(236, 255, 110)";
      } else {
        myText[indexNow].backGround = "rgb(255, 93, 93)";

        setCountErrors(countErrors + 1);
      }
    }
    if (indexNow === stateText.length - 1) {
      console.log("---MAX---");
      setDoubleSeconds(seconds);
      setDoubleMillisecond(millisecond);
      setEnd(true);
      setStart(false);
    }
  };
  const clickButton = () => {
    setValue("");
    setMyText(stateText);
    setCountErrors(0);
    setStart(false);
    setEnd(false);
    setDoubleSeconds("--");
    setDoubleMillisecond("--");
  };

  return (
    <div className="App">
      <h1>Speed Keyboard Click App</h1>
      <hr></hr>
      <div className="wrap-errors-time">
        <h2> Errors : {countErrors}</h2>
        <h2>
          Time : {start ? seconds : doubleSeconds}.
          {start
            ? millisecond < 10
              ? "0" + millisecond
              : millisecond
            : doubleMillisecond}
        </h2>
      </div>
      <h1>
        {myText.map((item, index) => {
          let color = item.backGround;
          return (
            <span style={{ backgroundColor: color }} key={index + Date.now()}>
              {item.value}
            </span>
          );
        })}
      </h1>
      <div>
        <input
          value={value}
          onChange={(e) => changeFn(e)}
          onClick={() => clickFn()}
        />
        <button onClick={() => clickButton()}>Restart</button>
      </div>
      <div className="wrap-keyboard">
        {myAlphabet.map((element, index) => {
          return (
            <div
              className="oneKey"
              style={{
                backgroundColor: element.backGround,
              }}>
              {element.value}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
