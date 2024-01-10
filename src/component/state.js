// import React, { useState } from "react";

// export const text = "Hello . My name is Serhii";
// export const arrayText = text.split("");
// export const alphabet = [
//   "q",
//   "w",
//   "e",
//   "r",
//   "t",
//   "y",
//   "u",
//   "i",
//   "o",
//   "p",
//   "a",
//   "s",
//   "d",
//   "f",
//   "g",
//   "h",
//   "j",
//   "k",
//   "l",
//   "z",
//   "x",
//   "c",
//   "v",
//   "b",
//   "n",
//   "m",
// ];

//

// export const divAlphabet = [];
// export const stateText = [];

// export const useCustomHookValue = () => {
//   const [value, setValue] = useState("");
//   const toggleValue = () => {
//     setValue("qwerty");
//   };
//   return [value, toggleValue];
// };
// export const useCustomHookCountErrors = (data) => {
//   const [countErrors, setCountErrors] = useState(data);
//   return [countErrors, setCountErrors];
// };
// export const useCustomHookSeconds = (data) => {
//   const [seconds, setSeconds] = useState(data);
//   return [seconds, setSeconds];
// };
// export const useCustomHookMillisecond = (data) => {
//   const [millisecond, setMillisecond] = useState(data);
//   return [millisecond, setMillisecond];
// };
// export const useCustomHookDoubleSeconds = (data) => {
//   const [doubleSeconds, setDoubleSeconds] = useState(data);
//   return [doubleSeconds, setDoubleSeconds];
// };
// export const useCustomHookDoubleMillisecond = (data) => {
//   const [doubleMillisecond, setDoubleMillisecond] = useState(data);
//   return [doubleMillisecond, setDoubleMillisecond];
// };
// export const useCustomHookStart = (data) => {
//   const [start, setStart] = useState(data);
//   return [start, setStart];
// };
// export const useCustomHookEnd = (data) => {
//   const [end, setEnd] = useState(data);
//   return [end, setEnd];
// };
// export const useCustomHookLastIndex = (data) => {
//   const [lastIndex, setLastIndex] = useState(data);
//   return [lastIndex, setLastIndex];
// };

// setValue("asd");
// toggleValue();
// console.log("value : ", value);
// console.log("useCustomHookValue : ", useCustomHookValue());

// export const clickButton = () =>
//   // setValue,
//   // setMyText,
//   // setCountErrors,
//   // setStart,
//   // setEnd,
//   // setDoubleSeconds,
//   // setDoubleMillisecond
//   {
//     const [value, setValue] = useState("");
//     const [countErrors, setCountErrors] = useState(data);
//     const [start, setStart] = useState(data);
//     const [end, setEnd] = useState(data);
//     const [doubleSeconds, setDoubleSeconds] = useState(data);
//     const [doubleMillisecond, setDoubleMillisecond] = useState(data);
//   };

//
// setValue("");
// setMyText(stateText);
// setCountErrors(0);
// setStart(false);
// setEnd(false);
// setDoubleSeconds("--");
// setDoubleMillisecond("--");
//
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
