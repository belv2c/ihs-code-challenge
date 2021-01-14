import React, { useState } from 'react';
import Surprise from './surprise.component';
import Button from 'react-bootstrap/Button';

const Toggle = () => {
  const[surprise, setSurprise] = useState(true);

  const revealSurprise = () => {
    setSurprise(!surprise);
  }

  return(
    <div style={{ margin: "20px" }}>
      <h2>Challenge 3: Toggle</h2>
      <Button variant="outline-success" onClick={revealSurprise}>{!surprise ? "Show" : "Remove" } the cute sloth</Button>
      {surprise ? <Surprise /> : ""}
    </div>
  )
}

export default Toggle;
