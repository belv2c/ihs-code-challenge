import React from "react";
import Button from "react-bootstrap/Button";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const [count, add, subtract] = useCounter();

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 2: Counter</h2>
      <p>Count is: {count}</p>
      <Button variant="outline-success" onClick={add}>
        +
      </Button>{" "}
      <Button variant="outline-danger" onClick={subtract}>
        -
      </Button>{" "}
    </div>
  );
};

export default Counter;
