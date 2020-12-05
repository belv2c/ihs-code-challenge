import React from "react";

const Challenge = ({ children, challengeNum, title }) => {
    return (
        <div className="challenge">
            <h2>Challenge {challengeNum}: {title}</h2>
            {children}
        </div>
    );
};

export default Challenge;