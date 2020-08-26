import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Results from './Components/Results';
import request from './request';

function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending);
  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
