import React, { useReducer } from 'react';
import style from './CounterOne.module.css';

function CounterOne() {
    const initialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case 'decrement': {
                return state - 1;
            }
            case 'reset': {
                return initialState;
            }
            case 'increment': {
                return state + 1;
            }
            default: {
                return state;
            }
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div className = { style.counterOne }>
            <p>{ count }</p>
            <button onClick = { () => dispatch('decrement') }>Decrement</button>
            <button onClick = { () => dispatch('reset') }>Reset</button>
            <button onClick = { () => dispatch('increment') }>Increment</button>
        </div>
    );
}

export default CounterOne;
