import React from 'react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <span className="logo-accent">&lt;</span>
          Asad Faiz
          <span className="logo-accent"> /&gt;</span>
        </a>
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link nav-btn">Let's Talk</a>
        </div>
      </div>
    </nav>
  );
};
