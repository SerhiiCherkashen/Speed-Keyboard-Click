import React, { useState } from "react";

export const text = "Hello . My name is Serhii";
export const arrayText = text.split("");
export const alphabet = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

//

export const divAlphabet = [];
export const stateText = [];

export const useCustomHookValue = () => {
  const [value, setValue] = useState("");
  return [value, setValue];
};
export const useCustomHookCountErrors = () => {
  const [countErrors, setCountErrors] = useState(0);
  return [countErrors, setCountErrors];
};
export const useCustomHookSeconds = () => {
  const [seconds, setSeconds] = useState("");
  return [seconds, setSeconds];
};
export const useCustomHookMillisecond = () => {
  const [millisecond, setMillisecond] = useState(0);
  return [millisecond, setMillisecond];
};
export const useCustomHookDoubleSeconds = () => {
  const [doubleSeconds, setDoubleSeconds] = useState("--");
  return [doubleSeconds, setDoubleSeconds];
};
export const useCustomHookDoubleMillisecond = () => {
  const [doubleMillisecond, setDoubleMillisecond] = useState("--");
  return [doubleMillisecond, setDoubleMillisecond];
};
export const useCustomHookStart = () => {
  const [start, setStart] = useState(false);
  return [start, setStart];
};
export const useCustomHookEnd = () => {
  const [end, setEnd] = useState(false);
  return [end, setEnd];
};
export const useCustomHookLastIndex = () => {
  const [lastIndex, setLastIndex] = useState(-1);
  return [lastIndex, setLastIndex];
};

export const clickButton = (
  setValue,
  setMyText,
  setCountErrors,
  setStart,
  setEnd,
  setDoubleSeconds,
  setDoubleMillisecond
) => {
  setValue("");
  setMyText(stateText);
  setCountErrors(0);
  setStart(false);
  setEnd(false);
  setDoubleSeconds("--");
  setDoubleMillisecond("--");
};

// export const fnGetStateAlphabet = (alphabet, divAlphabet) => {
//   alphabet.forEach((element, index) => {
//     divAlphabet.push({ value: element, backGround: null });
//   });
// };

// export const fnGetStateText = (arrayText, stateText) => {
//   let arr = [];
//   arrayText.forEach((element, index) => {
//     stateText.push({ value: element, backGround: null });
//   });
// };

// export const fnTimeout = () => {
//   setTimeout(() => {
//     if (millisecond === 59) {
//       setSeconds(seconds + 1);
//       setMillisecond(0);
//     } else {
//       setMillisecond(millisecond + 1);
//     }
//   }, 10);
// };
