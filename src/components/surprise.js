import React, { useState, useEffect} from "react";
import cuteSloth from '../cuteSloth.jpg';

const Surprise = props => {

  useEffect(() => {
    // component unmounted
    return () => {
      alert("Now I must go");
    }
  }, []);

  return (
    <div style={{ margin: "20px"}}>
      <img style={{height: "200px", width: "300px"}} src={cuteSloth} alt="Sloth" />
    </div>
  );
}

export default Surprise;
