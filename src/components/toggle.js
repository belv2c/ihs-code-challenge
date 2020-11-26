import React, { Component } from "react";
import Surprise from "./surprise";

class Toggle extends Component {
  state = {
    showSurprise: true
  };
  revealSurprise = () => {
    this.setState({ showSurprise: !this.state.showSurprise });
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h2>Challenge 3: Toggle</h2>
        <h3>Click the button to {!this.state.showSurprise ? "show" : "remove" } the surprise</h3>
        <button onClick={this.revealSurprise}>Click me</button>
        {this.state.showSurprise ? <Surprise /> : ""}
      </div>
    );
  }
}

export default Toggle;