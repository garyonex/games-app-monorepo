import React, { useState } from 'react';

function Contador(props) {
    const [contadorValue, setContadorValue] = useState(0);
    const handleClick = (params) => {
        setContadorValue((e) => {
            return e + 1;
        });
    };
    const handleClickReset = () => {
        setContadorValue(0);
    };
    const Counter = ({number})=>{
        return <h1>{number}</h1>
    }
    return (
        <div>
            <p>Contador</p>
            <Counter number={contadorValue} />
            <button onClick={handleClick}>incrementar</button>

            <button onClick={handleClickReset}>reset</button>
        </div>
    );
}

export default Contador;
