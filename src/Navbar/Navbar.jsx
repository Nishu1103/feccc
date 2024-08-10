// src/Navbar.js
import { useState } from 'react';
import './Navbar.css';

export default function  Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
  <nav className="navbar">
    <div className="navbar-container container">
      <input type="checkbox" name="" id="" />
      <div className="hamburger-lines">
        <span className="line line1" />
        <span className="line line2" />
        <span className="line line3" />
      </div>
      <ul className="menu-items">
        <li>
          <a href="/">Home</a>
        </li>
        {/* <li>
          <a href="/news">News</a>
        </li> */}
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/courses">Courses</a>
        </li>
        <li>
          <a href="/resources">Resources</a>
        </li>
        <li>
          <a href="/team">Teams</a>
        </li>
        <li>
          <a href="/contact"> Subscribe </a>
        </li>
      </ul>
      <h1 className="logo-navbar">
      <img src="images/remove.png" alt="Logo" />
      </h1>
    </div>
  </nav>
</>

  );
}
