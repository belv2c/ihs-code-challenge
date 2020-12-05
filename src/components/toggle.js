import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import useToggle from '../hooks/useToggle';
import Challenge from './challenge';
import Surprise from "./surprise";

const Toggle = props => {
  const [isShown, toggleIsShown] = useToggle();
  const [scrollIntoView, setScrollIntoView] = useState(false);

  const _toggleIsShown = () => {
    setScrollIntoView(true);
    toggleIsShown();
  };

  return (
    <Challenge {...props} title='Toggle'>
      <Button variant="outline-success" onClick={_toggleIsShown}>{isShown ? "Remove" : "Show"} the cute-ish sloth</Button>
      <Surprise {...{isShown, scrollIntoView }} />
    </Challenge>
  );
};

export default Toggle;