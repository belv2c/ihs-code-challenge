import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { getSettings, saveSettings } from '../constants'

class Counter extends Component {
  constructor(props) {
    super(props);

    const settings = getSettings();

    this.state = {
      count: settings.count
    }
    
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
  }

  handleAdd(e) {
    this.setState({ count: this.state.count + 1 },() => saveSettings(this.state));
  }

  handleSubtract(e) {
    this.setState({ count: this.state.count - 1 }, () => saveSettings(this.state));
  }

  render() {
    const { count } = this.state;
    return (
      <div style={{ marginBottom: "50px" }}>
        <h2>Challenge 2: Counter</h2>
        <p>Count is: {count}</p>
        <Button variant="outline-success" onClick={this.handleAdd}>+</Button>{' '}
        <Button variant="outline-danger" onClick={this.handleSubtract}>-</Button>{' '}
      </div>
    );
  }
}

export default Counter;
