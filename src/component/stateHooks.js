import { useState } from "react";

export const useCustomHookValue = () => {
  const [value, setValue] = useState("");
  const toggleValue = (e) => {
    setValue(e);
  };
  return [value, toggleValue];
};
export const useCustomHookCountErrors = (data) => {
  const [countErrors, setCountErrors] = useState(data);
  return [countErrors, setCountErrors];
};
export const useCustomHookSeconds = (data) => {
  const [seconds, setSeconds] = useState(data);
  return [seconds, setSeconds];
};
export const useCustomHookMillisecond = (data) => {
  const [millisecond, setMillisecond] = useState(data);
  return [millisecond, setMillisecond];
};
export const useCustomHookDoubleSeconds = (data) => {
  const [doubleSeconds, setDoubleSeconds] = useState(data);
  return [doubleSeconds, setDoubleSeconds];
};
export const useCustomHookDoubleMillisecond = (data) => {
  const [doubleMillisecond, setDoubleMillisecond] = useState(data);
  return [doubleMillisecond, setDoubleMillisecond];
};
export const useCustomHookStart = (data) => {
  const [start, setStart] = useState(data);
  return [start, setStart];
};
export const useCustomHookEnd = (data) => {
  const [end, setEnd] = useState(data);
  return [end, setEnd];
};
export const useCustomHookLastIndex = (data) => {
  const [lastIndex, setLastIndex] = useState(data);
  return [lastIndex, setLastIndex];
};
