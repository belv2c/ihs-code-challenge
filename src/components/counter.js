import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

class Counter extends Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState({ count: this.state.count + 1 });
  };
  subtract = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div style={{ marginBottom: "50px" }}>
        <h2>Challenge 2: Counter</h2>
        <p>Count is: {this.state.count}</p>
        <Button variant="outline-success" onClick={this.add}>+</Button>{' '}
        <Button variant="outline-danger" onClick={this.subtract}>-</Button>{' '}
      </div>
    );
  }
}

export default Counter;
