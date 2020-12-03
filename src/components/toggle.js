import * as React from 'react';
import Surprise from './surprise';
import Button from 'react-bootstrap/Button';

const Toggle = () => {
  const [showSurprise, setShowSurprise] = React.useState(true);

  const revealSurprise = () => {
    setShowSurprise(!showSurprise);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Challenge 3: Toggle</h2>
      <Button variant='outline-success' onClick={revealSurprise}>
        {!showSurprise ? 'Show' : 'Remove'} the cute sloth
      </Button>
      {showSurprise ? <Surprise /> : ''}
    </div>
  );
};

export default Toggle;
