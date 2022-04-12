import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <News />
    </div>
  );
}

export default App;
