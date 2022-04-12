import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Card from '../Card/Card';
import './News.css';

function News() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    fetch('https://newsapi.org/v2/everything?q=Apple&from=2022-04-12&sortBy=popularity&apiKey=12e941912db6470582ba9b98234b84f2', { signal: abortController.signal })
      .then((res) => res.json())
      .then((Data) => setData(Data.articles))
      .catch(() => toast.error('Server Erorr !'));
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <div className="news">
      <h2> News </h2>
      <input
        type="search"
        placeholder="Seacrh"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="Cards">
        {
          data.filter((obj) => (obj.title.includes(search)
          || obj.title.includes(search[0].toUpperCase())))
            .map((obj) => <Card obj={obj} />)
        }
      </div>
      <ToastContainer />
    </div>
  );
}
export default News;
