import { divAlphabet } from "./stateConst";

export const fnGetStateAlphabet = (alphabet, divAlphabet) => {
  //   alphabet.length === 26 --- const
  //   divAlphabet = [];
  if (alphabet.length !== divAlphabet.length) {
    alphabet.forEach((element, index) => {
      divAlphabet.push({ value: element, backGround: null });
    });
  }
};

export const fnGetStateText = (arrayText, stateText) => {
  //   stateText = [];
  //   console.log("arrayText in FN : ", arrayText);
  //   console.log("stateText in FN : ", stateText);
  if (arrayText.length !== stateText.length) {
    arrayText.forEach((element, index) => {
      stateText.push({ value: element, backGround: null });
    });
  }

  //   console.log("stateText in FN : ", stateText);
};

export const changeFn = (e, data) => {
  const {
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
  } = data;
  let indexNow = e.target.value.length - 1;
  toggleValue(e.target.value);
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
    myAlphabet[lastIndex].backGround = null;
    console.log("---MAX---");
    setDoubleSeconds(seconds);
    setDoubleMillisecond(millisecond);
    setEnd(true);
    setStart(false);
  }
};
let indexNow = -1;
let word;
export const clickOnDivKey = (e, data) => {
  const {
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
  } = data;
  indexNow += 1;
  word = word + e;
  toggleValue(word);
  let currentIndexInMyAlphabet = myAlphabet.findIndex((item) => {
    return item.value === e.toLowerCase();
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
    console.log(
      "else : ",
      e,
      myText[indexNow].value,
      e === myText[indexNow].value
    );

    if (e === myText[indexNow].value.toLowerCase()) {
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

export const clickFn = (startFn) => {
  startFn();
};

export const startFn = (setSeconds, setMillisecond, setStart, start) => {
  setSeconds(0);
  setMillisecond(0);
  setStart(!start);
};
export const clickButton = (data) => {
  const {
    toggleValue,
    setMyText,
    stateText,
    setCountErrors,
    setStart,
    setEnd,
    setDoubleSeconds,
    setDoubleMillisecond,
    divAlphabet,
  } = data;
  toggleValue("");
  setMyText(stateText);
  setCountErrors(0);
  setStart(false);
  setEnd(false);
  setDoubleSeconds("--");
  setDoubleMillisecond("--");
  stateText.length = 0;
  divAlphabet.length = 0;
};
