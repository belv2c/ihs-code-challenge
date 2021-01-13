import { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';

export const useCountFactory = () => {
  const [count, setCount] = useState(0);
  const add = useCallback(() => setCount(count => count + 1), []);
  const subtract = useCallback(() => setCount(count => count - 1), [])
  return {
    count,
    add,
    subtract
  };
};

export default function Counter() {
  const { count, add, subtract } = useCountFactory();

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 2: Counter</h2>
      <p>Count is: {count}</p>
      <Button variant="outline-success" onClick={add}>+</Button>{' '}
      <Button variant="outline-danger" onClick={subtract}>-</Button>{' '}
    </div>
  );
};
