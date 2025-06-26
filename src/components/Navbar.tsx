import React, { useState } from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the mobile menu toggle

  return (
    <nav className="container-navbar">
      <div className="container-list">
        <div className="logo">My Portfolio Website</div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={`nav-list ${menuOpen ? 'show' : ''}`}>
          <li><a href="/" className="link">Home</a></li>
          <li><a href="/projects" className="link">My Projects</a></li>
          <li><a href="/resume" className="link">Resume</a></li>
          <li><a href="/about" className="link">About</a></li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;