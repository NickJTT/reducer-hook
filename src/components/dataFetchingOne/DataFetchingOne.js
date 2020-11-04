import React, { useState, useEffect } from 'react';
import style from './DataFetchingOne.module.css';
import PostService from '../../services/PostService';

function DataFetchingOne() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchData = async id => {
            try {
                setPost(await PostService.getPost(id));
                setLoading(false);
                setError('');
            } catch {
                setPost({});
                setLoading(false);
                setError('Error retrieving data!');
            }
        }
        fetchData(1);
    }, []);

    return (
        <div className = { style.dataFetchingOne }>
            { error ? error : loading ? <p>Loading</p> : <p>{ post.title }</p> }
        </div>        
    );
}

export default DataFetchingOne;
