import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [results, setResults] = useState([]);

  const fetchGiphyResults = () => {
    axios({
      method: 'GET',
      URL: '/giphy'
    }).then(response => {
      console.log(response);
      setResults(response.data.data);
    })
  }


  useEffect(() => {
    fetchGiphyResults();
  }, []);

  return (
    <div>
      <header className="App-header">
        <h1>Random Giphy API</h1>
      </header>
      {JSON.stringify(results)}
      <p>Results go here</p>
    </div>
  );
}

export default App;
