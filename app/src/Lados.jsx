import React, { useState } from 'react';

function Lados() {
    const [counter, setCounter] = useState({
        left: 0,
        right: 0
    });
    const handleClickLeft = (event) => {
        console.log(event)
        const newCounterState = {
            ...counter,
            left: counter.left + 1
        };
        setCounter(newCounterState);
    }
    const handleClickRight = () => {
            const newCounterState = {
                ...counter, 
                right: counter.right + 1
            };
            setCounter(newCounterState);
        };
        return (
            <div>
                {counter.left}
                <button onClick={handleClickLeft}>Left</button>
                <button onClick={handleClickRight}>Right</button>
                {counter.right}
            </div>
        );
    ;
}

export default Lados;
