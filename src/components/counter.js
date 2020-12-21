import React, { useState } from "react"
import Button from 'react-bootstrap/Button'

function Counter() {

  const [count, setCount] = useState(0)

  const add = () => setCount(curr => curr + 1)
  const subtract = () => setCount(curr => curr - 1)

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 2: Counter</h2>
      <p>Count is: {count}</p>
      <Button variant="outline-success" onClick={add}>+</Button>{' '}
      <Button variant="outline-danger" onClick={subtract}>-</Button>{' '}
    </div>
  )

}

export default Counter
