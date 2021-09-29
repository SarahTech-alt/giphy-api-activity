import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';


function App() {
  
  const dispatch = useDispatch();

  const fetchGiphyResults = () => {
    axios({
      method: 'GET',
      url: '/random'
    }).then(response => {
      console.log(response.data.data);
      dispatch({
        type: 'SET_RANDOM',
        payload: response.data.data
      })
    })
  }

const random = useSelector(store => store.random);
  
useEffect(() => {
    fetchGiphyResults(); 
  }, []);

  return (
    <div>
      <header className="App-header">
        <h1>Random Giphy API</h1>
      </header>
         
            {/* <p>{JSON.stringify(random.data)}</p> */}
           <p><img src = {random.fixed_height_downsampled_url} /></p>
           <Button variant="contained" onClick={fetchGiphyResults}>Get Another</Button>
          
    </div>
  );
}

export default App;
