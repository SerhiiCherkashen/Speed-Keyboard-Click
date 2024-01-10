import React, { useState } from "react";
import "./BaseComponent.css";
import {
  alphabet,
  arrayText,
  divAlphabet,
  stateText,
  text,
} from "./stateConst";
import {
  useCustomHookCountErrors,
  useCustomHookDoubleMillisecond,
  useCustomHookDoubleSeconds,
  useCustomHookEnd,
  useCustomHookLastIndex,
  useCustomHookMillisecond,
  useCustomHookSeconds,
  useCustomHookStart,
  useCustomHookValue,
} from "./stateHooks";
import {
  changeFn,
  clickButton,
  clickFn,
  clickOnDivKey,
  fnGetStateAlphabet,
  fnGetStateText,
  startFn,
} from "./stateFunction";

const BaseComponent = () => {
  fnGetStateAlphabet(alphabet, divAlphabet);
  fnGetStateText(arrayText, stateText);

  const [myText, setMyText] = useState(stateText);
  const [myAlphabet, setMyAlphabet] = useState(divAlphabet);

  //   console.log("myText : ", myText);
  //   console.log("divAlphabet : ", divAlphabet);

  const [value, toggleValue] = useCustomHookValue("");
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

  const dataChangeFn = {
    toggleValue,
    myAlphabet,
    lastIndex,
    setLastIndex,
    stateText,
    myText,
    setCountErrors,
    countErrors,
    setDoubleSeconds,
    seconds,
    setDoubleMillisecond,
    millisecond,
    setEnd,
    setStart,
  };
  const dataClickButton = {
    toggleValue,
    setMyText,
    stateText,
    setCountErrors,
    setStart,
    setEnd,
    setDoubleSeconds,
    setDoubleMillisecond,
    divAlphabet,
  };
  const arr1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const arr2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const arr3 = ["z", "x", "c", "v", "b", "n", "m"];

  return (
    <div>
      <h1>BaseComponent</h1>

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
          onChange={(e) => changeFn(e, dataChangeFn)}
          onClick={() =>
            clickFn(() => startFn(setSeconds, setMillisecond, setStart, start))
          }
        />
        <button onClick={() => clickButton(dataClickButton)}>Restart</button>
      </div>
      <div className="wrap-keyboard">
        {myAlphabet.map((element, index) => {
          return (
            <div
              onClick={() => clickOnDivKey(element.value, dataChangeFn)}
              //   onClick={() => console.log(element.value)}
              className="oneKey"
              style={{
                backgroundColor: element.backGround,
              }}>
              {element.value}
            </div>
          );
        })}
      </div>
      {/*  */}
      <div className="wrap-keyboard-real">
        <div className="wrap-arr1">
          {arr1.map((element, index) => {
            return (
              <div
                //   onClick={() => clickOnDivKey(element, dataChangeFn)}
                className="oneKey">
                {element}
              </div>
            );
          })}
        </div>
        <div className="wrap-arr2">
          {arr2.map((element, index) => {
            return (
              <div
                //   onClick={() => clickOnDivKey(element, dataChangeFn)}
                className="oneKey">
                {element}
              </div>
            );
          })}
        </div>
        <div className="wrap-arr3">
          {arr3.map((element, index) => {
            return (
              <div
                //   onClick={() => clickOnDivKey(element, dataChangeFn)}
                className="oneKey">
                {element}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BaseComponent;
{
  /*  */
}
{
  /* <h1>{arrayText}</h1>
      <h1>{alphabet}</h1>
      <h1>seconds : {seconds}</h1>
      <h1>millisecond : {millisecond}</h1>
      <h1>doubleSeconds : {doubleSeconds}</h1>
      <h1>doubleMillisecond : {doubleMillisecond}</h1>
      <h1> divAlphabet[0].value : {divAlphabet[0].value}</h1>
      <h1>stateText[0].value : {stateText[0].value}</h1>
      <h1>myText[0].value : {myText[0].value}</h1>
      <h1>myAlphabet[0].value : {myAlphabet[0].value}</h1> */
}

{
  /*  */
}

//   const changeFn = (e) => {
//     //     let indexNow = e.target.value.length - 1;
//     toggleValue(e.target.value);
//     //     let currentIndexInMyAlphabet = myAlphabet.findIndex((item) => {
//     //       return item.value === e.nativeEvent.data.toLowerCase();
//     //     });
//     //     if (currentIndexInMyAlphabet >= 0) {
//     //       myAlphabet[currentIndexInMyAlphabet].backGround = "yellow";
//     //       if (lastIndex >= 0 && lastIndex !== currentIndexInMyAlphabet) {
//     //         myAlphabet[lastIndex].backGround = null;
//     //       }
//     //     } else {
//     //       if (lastIndex >= 0 && lastIndex !== currentIndexInMyAlphabet) {
//     //         myAlphabet[lastIndex].backGround = null;
//     //       }
//     //     }
//     //     setLastIndex(currentIndexInMyAlphabet);
//     //     if (indexNow >= stateText.length) {
//     //     } else {
//     //       if (e.nativeEvent.data === myText[indexNow].value) {
//     //         myText[indexNow].backGround = "rgb(236, 255, 110)";
//     //       } else {
//     //         myText[indexNow].backGround = "rgb(255, 93, 93)";
//     //         setCountErrors(countErrors + 1);
//     //       }
//     //     }
//     //     if (indexNow === stateText.length - 1) {
//     //       console.log("---MAX---");
//     //       setDoubleSeconds(seconds);
//     //       setDoubleMillisecond(millisecond);
//     //       setEnd(true);
//     //       setStart(false);
//     //     }
//   };
//   const startFn = () => {
//     setSeconds(0);
//     setMillisecond(0);
//     setStart(!start);
//   };

//   const clickFn = () => {
//     startFn();
//   };
