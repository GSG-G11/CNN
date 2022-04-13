import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="header">
      <img src="https://logos-world.net/wp-content/uploads/2020/11/CNN-Logo.png" alt="logo" />
      <a href="#news" className="link-news">News</a>
    </div>
  );
}
export default Navbar;
