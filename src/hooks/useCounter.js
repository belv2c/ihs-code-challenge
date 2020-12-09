import { useState } from "react";

const useCounter = (initialCount = 0, min = 0, max) => {
  const [count, setCount] = useState(initialCount);

  const counterMessage = (message) => {
    if (message) alert(message);
    else return;
  };

  const add = () => {
    if (count === max) return counterMessage();
    setCount(count + 1);
  };

  const subtract = () => {
    if (count === min) return counterMessage();
    setCount(count - 1);
  };

  return [count, add, subtract];
};

export default useCounter;
