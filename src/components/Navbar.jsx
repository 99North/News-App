import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    'Home',
    'Odisha',
    'National',
    'International',
    'Entertainment',
    'Jobs',
    'Education',
    'Astrospeak',
    'Health',
    'Environment'
  ];

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <div className="logo-icon">⚛</div>
          <span className="logo-text">NewsHub</span>
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a 
                href={`#${item.toLowerCase()}`} 
                className={`nav-link ${index === 0 ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle & Hamburger Container */}
        <div className="nav-controls">
          {/* Theme Toggle Button */}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
          </button>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
