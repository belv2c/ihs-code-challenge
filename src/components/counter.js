import React, { Component } from "react";

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
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
      </div>
    );
  }
}

export default Counter;
