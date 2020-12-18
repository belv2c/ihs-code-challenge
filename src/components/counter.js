import React, { useReducer } from "react";
import Button from "react-bootstrap/Button";

const initialCount = 0;
const countReducer = (state, action) => {
    switch (action.type) {
        case "add": {
            return state + 1;
        }
        case "subtract": {
            return state - 1;
        }
        default:
            throw new Error(`Invalid action dispatched to countReducer: ${action.type}`);
    }
};

const Counter = () => {
    const [count, countDispatch] = useReducer(countReducer, initialCount);
    const add = () => countDispatch({ type: "add" });
    const subtract = () => countDispatch({ type: "subtract" });
    return (
        <div style={{ marginBottom: "50px" }}>
            <h2>Challenge 2: Counter</h2>
            <p>Count is: {count}</p>
            <Button variant="outline-success" onClick={add}>
                +
            </Button>
            <Button variant="outline-danger" onClick={subtract}>
                -
            </Button>
        </div>
    );
};

export default Counter;
