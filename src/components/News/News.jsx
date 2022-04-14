import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import './News.css';

function News() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const filterData = data.filter(
    (obj) => obj.title.includes(search) || obj.title.includes(search[0].toUpperCase()),
  );
  useEffect(() => {
    const abortController = new AbortController();
    fetch('https://inshortsapi.vercel.app/news?category=', { signal: abortController.s })
      .then((res) => res.json())
      .then((Data) => {
        setData(Data.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error('Server Erorr !');
      });
    return () => {
      abortController.abort();
    };
  }, []);
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
