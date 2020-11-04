import React, { useContext } from 'react';
import style from './ComponentD.module.css';
import { CountContext } from '../../context/countContext';

function ComponentD() {
    const countContext = useContext(CountContext);
    return (
        <div className = { style.componentD }>
            <p>Component D: { countContext.countState }</p>
            <button onClick = { () => countContext.countDispatch('decrement') }>Decrement</button>
            <button onClick = { () => countContext.countDispatch('reset') }>Reset</button>
            <button onClick = { () => countContext.countDispatch('increment') }>Increment</button>
        </div>
    );
}

export default ComponentD;
