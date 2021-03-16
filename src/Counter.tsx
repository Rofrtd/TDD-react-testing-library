import React, { useEffect, useState } from 'react';

export interface CounterProps {
label?: string,
start?: number,
}

const Counter: React.FC<CounterProps> = ({ label = "Count", start = 0 }) => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setCounter(start)
    }, [])
		return (
            <>
                <div id="counter-label" title="couter-label">{ label }</div>
                <span id="counter" role="counter">
                    {counter}
                </span>
            </>
        );
}

export default Counter;
