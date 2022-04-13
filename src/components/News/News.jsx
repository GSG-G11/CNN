import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import './News.css';

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

function News() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const filterData = data.filter(
    (obj) => obj.name.includes(search) || obj.name.includes(search[0].toUpperCase()),
  );
  useEffect(() => {
    const abortController = new AbortController();
    axios
      .request(options)
      .then((response) => {
        setData(response.data.value);
        setLoading(false);
      })
      .catch(() => {
        toast.error('Server Erorr !');
      });
    return () => {
      abortController.abort();
    };
  }, []);
  console.log(data);
  return (
    <div className="news" id="news">
      <h2> News </h2>
      <input
        type="search"
        placeholder="Seacrh"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {!loading ? (
        <div className="Cards">
          {filterData.length ? filterData.map((obj) => <Card obj={obj} />) : <p>No resultes</p>}
        </div>
      ) : (
        <Loading />
      )}
      <ToastContainer />
    </div>
  );
}
export default News;
