import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch from Python backend
    axios.get('http://localhost:8000')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));

    // Fetch data from backend (which gets it from Supabase)
    axios.get('http://localhost:8000/data')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <h2>Data from Supabase:</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.message}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;