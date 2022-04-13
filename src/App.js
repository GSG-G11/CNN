import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news',
  params: { safeSearch: 'Off', textFormat: 'Raw' },
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '9eeb5e7ab5msh6d838c238f409a7p1b103cjsn724c693ca437',
  },
};

axios
  .request(options)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

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
