import React, { Component } from "react";
import cuteSloth from '../cuteSloth.jpg';

class Surprise extends Component {
  componentWillUnmount() {
    alert("Now I must go");
  }

  render() {
    return (
      <div>
        <img src={cuteSloth} alt="Sloth" />
      </div>
    );
  }
}

export default Surprise;
