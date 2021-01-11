import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 2: Counter</h2>
      <p>Count is: {count}</p>
      <Button variant="outline-success" onClick={() => setCount(count + 1)}>+</Button>{' '}
      <Button variant="outline-danger" onClick={() => setCount(count - 1)}>-</Button>{' '}
    </div>
  );
}

export default Counter;
