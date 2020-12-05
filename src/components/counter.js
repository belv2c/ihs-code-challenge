import React from "react";
import Button from 'react-bootstrap/Button';
import useCounter from '../hooks/useCounter';
import Challenge from './challenge';

const Counter = props => {
  const [count, incrementCount, decrementCount] = useCounter();

  return (
    <Challenge {...props} title='Counter'>
      <p>Count is: {count}</p>
      <Button variant="outline-success" onClick={incrementCount}>+</Button>
      <Button variant="outline-danger" onClick={decrementCount}>-</Button>
    </Challenge>
  );
};

export default Counter;
