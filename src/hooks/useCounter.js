import { useState } from "react";

const useCounter = (initialCount = 0) => {
    const [count, setCount] = useState(initialCount);

    const updateCount = value => () => {
        setCount(count => count + value);
    };

    return [count, updateCount(1), updateCount(-1)];
};

export default useCounter;



