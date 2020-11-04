import React, { useReducer, useEffect } from 'react';
import style from './DataFetchingTwo.module.css';
import PostService from '../../services/PostService';

const initialState = { loading: true, error: '', post: {} };

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS': {
            return { loading: false, error: '', post: action.payload };
        } case 'FETCH_ERROR': {
            return { loading: false, error: 'Error retrieving data!', post: {} };
        } default: {
            return state;
        }
    }
}

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchData = async id => {
            try {
                dispatch({ type: 'FETCH_SUCCESS', payload: await PostService.getPost(id) });
            } catch {
                dispatch({ type: 'FETCH_ERROR' });
            }
        }
        fetchData(1);
    }, []);

    return (
        <div className = { style.dataFetchingTwo }>
            { state.error ? state.error : state.loading ? <p>Loading</p> : <p>{ state.post.title }</p> }
        </div>        
    );
}

export default DataFetchingTwo;
