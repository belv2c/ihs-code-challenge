import React, { useState } from "react";
import Surprise from "./surprise";
import Button from 'react-bootstrap/Button';

function Toggle() {
    const [showSurprise, setshowSurprise] = useState(true);
 
    const revealSurprise = () => {
        setshowSurprise(!showSurprise);
    };

    return (
        <div style={{ margin: "20px" }}>
            <h2>Challenge 3: Toggle</h2>
            <Button variant="outline-success" onClick={revealSurprise}>{!showSurprise ? "Show" : "Remove" } the cute sloth</Button>
            {showSurprise ? <Surprise /> : ""}
        </div>
    );
}

export default Toggle;