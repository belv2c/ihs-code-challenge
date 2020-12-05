import React, { Fragment, useState, useEffect, useRef } from "react";
import { Modal, Button } from 'react-bootstrap';

import cuteSloth from '../assets/cuteSloth.jpg';

const Surprise = ({ isShown, scrollIntoView }) => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const surprise = useRef(null);

  const handleCleanup = () => {
    setShowModal(false);
    setShowSurprise(false);
  };

  useEffect(() => {
    if (isShown) {
      setShowSurprise(true);
    } else if (showSurprise) {
      setShowModal(true);
    }
  }, [isShown]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (showSurprise && scrollIntoView) {
      surprise.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [showSurprise, scrollIntoView])

  if (!showSurprise) return null;

  return (
    <Fragment>
      <div className="surprise" ref={surprise}>
        <img src={cuteSloth} alt="Sloth" />
      </div>

      <Modal show={showModal} backdrop="static">
        <Modal.Body>
          <p>And now I must go gently into that good night...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCleanup}>Ok</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Surprise;
