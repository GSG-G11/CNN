import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './News.css';

function News() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?q=Apple&from=2022-04-12&sortBy=popularity&apiKey=12e941912db6470582ba9b98234b84f2',
    )
      .then((res) => res.json())
      .then((Data) => setData(Data.articles))
      .catch((err) => console.log(err));
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
          data.map((obj) => <Card obj={obj} />)
        }
      </div>
    </div>
  );
}
export default News;
