import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const Counter = () => {

  const [count, setCount] = useState(0);

  const add = () => {
    setCount(prevCount => prevCount + 1);
  };
  const subtract = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 2: Counter</h2>
      <p>Count is: { count }</p>
      <Button variant="outline-danger" onClick={ subtract }>-</Button>{' '}
      <Button variant="outline-success" onClick={ add }>+</Button>{' '}
    </div>
  );
}

export default Counter;
