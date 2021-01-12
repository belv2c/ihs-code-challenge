import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const Counter = props => {
  const [counter, setCounter] = useState({
    count: 0
  });
  const add = () => {
    setCounter({ count: counter.count + 1 });
  };
  const subtract = () => {
    setCounter({ count: counter.count - 1 });
  };

    return (
      <div style={{ marginBottom: "50px" }}>
        <h2>Challenge 2: Counter</h2>
        <p>Count is: {counter.count}</p>
        <Button variant="outline-success" onClick={add}>+</Button>{' '}
        <Button variant="outline-danger" onClick={subtract}>-</Button>{' '}
      </div>
    );
}

export default Counter;
