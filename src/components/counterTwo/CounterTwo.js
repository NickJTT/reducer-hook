import React, { useReducer } from 'react';
import style from './CounterTwo.module.css';

function CounterTwo() {
    const initialState = {
        firstCounter: 0,
        secondCounter: 10
    };
    
    const reducer = (state, action) => {
        switch (action.type) {
            case 'decrement': {
                return { ...state, firstCounter: state.firstCounter - action.value };
            }
            case 'decrementTwo': {
                return { ...state, secondCounter: state.secondCounter - action.value };
            }
            case 'reset': {
                return initialState;
            }
            case 'increment': {
                return { ...state, firstCounter: state.firstCounter + action.value };
            }
            case 'incrementTwo': {
                return { ...state, secondCounter: state.secondCounter + action.value };
            }
            default: {
                return state;
            }
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div className = { style.counterTwo }>
            <p>First Counter: { count.firstCounter }<br/>Second Counter: { count.secondCounter }</p>
            <button onClick = { () => dispatch({ type: 'decrementTwo', value: 5 }) }>Decrement 2</button>
            <button onClick = { () => dispatch({ type: 'decrement', value: 1 }) }>Decrement</button>
            <button onClick = { () => dispatch({ type: 'reset' }) }>Reset</button>
            <button onClick = { () => dispatch({ type: 'increment', value: 1 }) }>Increment</button>
            <button onClick = { () => dispatch({ type: 'incrementTwo', value: 5 }) }>Increment 2</button>
        </div>
    );
}

export default CounterTwo;
