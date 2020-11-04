import React, { useContext } from 'react';
import style from './ComponentF.module.css';
import { CountContext } from '../../context/countContext';

function ComponentF() {
    const countContext = useContext(CountContext);
    return (
        <div className = { style.componentF }>
            <p>Component F: { countContext.countState }</p>
            <button onClick = { () => countContext.countDispatch('decrement') }>Decrement</button>
            <button onClick = { () => countContext.countDispatch('reset') }>Reset</button>
            <button onClick = { () => countContext.countDispatch('increment') }>Increment</button>
        </div>
    );
}

export default ComponentF;
