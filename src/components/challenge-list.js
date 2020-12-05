import React, { Children, cloneElement } from "react";

const ChallengeList = ({ children }) => {
    return (
        <div className="d-flex flex-column align-items-center text-center">
            {Children.map(children, (challenge, challengeNum) => {
                return cloneElement(challenge, { challengeNum: challengeNum + 1 });
            })}
        </div>
    );
};

export default ChallengeList;