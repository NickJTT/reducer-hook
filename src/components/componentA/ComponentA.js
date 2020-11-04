import React, { useContext } from 'react';
import style from './ComponentA.module.css';
import { CountContext } from '../../context/countContext';

function ComponentA() {
    const countContext = useContext(CountContext);
    return (
        <div className = { style.componentA }>
            <p>Component A: { countContext.countState }</p>
            <button onClick = { () => countContext.countDispatch('decrement') }>Decrement</button>
            <button onClick = { () => countContext.countDispatch('reset') }>Reset</button>
            <button onClick = { () => countContext.countDispatch('increment') }>Increment</button>
        </div>
    );
}

export default ComponentA;
