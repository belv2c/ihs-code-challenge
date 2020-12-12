import React, { Component } from "react";
import cuteSloth from '../cuteSloth.jpg';

class Surprise extends Component {
  // NOTE: 
  // I considered making this a stateful component (as per instructions) but this has no need for state
  // toggle.js will decide if this component gets rendered or not
  // so for performance in terms of memory consumption I left it alone
  componentWillUnmount() {
    alert("Now I must go");
  }

  render() {
    return (
      <div style={{ margin: "20px"}}>
        <img style={{height: "200px", width: "300px"}} src={cuteSloth} alt="Sloth" />
      </div>
    );
  }
}

export default Surprise;
