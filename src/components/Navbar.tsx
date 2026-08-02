import React, { useState } from 'react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <span className="logo-accent">&lt;</span>
          Asad Faiz
          <span className="logo-accent"> /&gt;</span>
        </a>
        
        <button 
          className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        {isOpen && <div className="nav-overlay" onClick={closeMenu}></div>}

        <div className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
          <a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          <a href="#contact" className="nav-link nav-btn" onClick={closeMenu}>Let's Talk</a>
        </div>
      </div>
    </nav>
  );
};
