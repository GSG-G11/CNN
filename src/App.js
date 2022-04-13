import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import PageNotFound from './components/404/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Navbar />
                <Home />
                <News />
              </>
            )}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
