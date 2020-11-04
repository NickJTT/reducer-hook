import React from 'react';
import style from './App.module.css';
import DataFetchingTwo from './components/dataFetchingTwo/DataFetchingTwo';

function App() {
  return (
    <div className = { style.app }>
      <DataFetchingTwo/>
    </div>
  );
}

export default App;
