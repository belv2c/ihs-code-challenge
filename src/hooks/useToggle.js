import { useState } from "react";

const useToggle = (initiallyIsOn = true) => {
    const [isOn, setIsOn] = useState(initiallyIsOn);

    const toggleIsOn = manualToggle => {
        setIsOn(isOn => typeof manualToggle === 'boolean' ? manualToggle : !isOn);
    };

    return [isOn, toggleIsOn];
}

export default useToggle;


