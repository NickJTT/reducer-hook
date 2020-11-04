import React, { useReducer } from 'react';
import style from './CounterThree.module.css';

function CounterThree() {
    const initialState = 0;
    const reducer = (state, action) => {
        switch (action.type) {
            case 'decrement': {
                return state - action.value;
            }
            case 'reset': {
                return initialState;
            }
            case 'increment': {
                return state + action.value;
            }
            default: {
                return state;
            }
        }
    }

    const [countOne, dispatchOne] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

    return (
        <div className = { style.counterThree }>
            <p>{ countOne }</p>
            <button onClick = { () => dispatchOne({ type: 'decrement', value: 1 }) }>Decrement</button>
            <button onClick = { () => dispatchOne({ type: 'reset' }) }>Reset</button>
            <button onClick = { () => dispatchOne({ type: 'increment', value: 1 }) }>Increment</button>
            <p>{ countTwo }</p>
            <button onClick = { () => dispatchTwo({ type: 'decrement', value: 5 }) }>Decrement 5</button>
            <button onClick = { () => dispatchTwo({ type: 'reset' }) }>Reset</button>
            <button onClick = { () => dispatchTwo({ type: 'increment', value: 5 }) }>Increment 5</button>
        </div>
    );
}

export default CounterThree;
