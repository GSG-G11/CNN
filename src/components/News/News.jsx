import React, { useState } from 'react';
import Card from '../Card/Card';
import './News.css';

function News() {
  const [search, setSearch] = useState('');
  return (
    <div className="news">
      <h2> News </h2>
      <input type="search" placeholder="Seacrh" value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="Cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
export default News;
