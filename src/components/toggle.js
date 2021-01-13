import { useState, useCallback } from 'react';
import Surprise from "./surprise";
import Button from 'react-bootstrap/Button';

export const useSurpriseFactory = () => {
  const [show, showSurprise] = useState(true);
  const toggle = useCallback(() => showSurprise(show => !show), []);
  return {
    show,
    toggle
  };
};

export default function Toggle() {
  const { show, toggle } = useSurpriseFactory();

  return (
    <div style={{ margin: "20px" }}>
      <h2>Challenge 3: Toggle</h2>
      <Button variant="outline-success" onClick={toggle}>{!show ? "Show" : "Remove"} the cute sloth</Button>
      {show ? <Surprise /> : ""}
    </div>
  );
};
