import './App.css';
import React from 'react';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
     <Row 
     title="Netflix Originals"
     fetchURL={requests.fetchNetflixOriginals} />
      
    </div>
  );
}

export default App;
