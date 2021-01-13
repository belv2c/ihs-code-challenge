import React, { Component } from "react";
import cuteSloth from '../cuteSloth.jpg';

class Surprise extends Component {
  componentWillUnmount() {
    // alert("Now I must go"); // TODO: this breaks the intial tests, commenting it out for now.
  }

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <img style={{ height: "200px", width: "300px" }} src={cuteSloth} alt="Sloth" />
      </div>
    );
  }
}

export default Surprise;
