import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Odisha', path: '/odisha' },
    { name: 'National', path: '/national' },
    { name: 'International', path: '/international' },
    { name: 'Entertainment', path: '/entertainment' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Education', path: '/education' },
    { name: 'Astrospeak', path: '/astrospeak' },
    { name: 'Health', path: '/health' },
    { name: 'Environment', path: '/environment' }
  ];

  // Function to check if menu item is active
  const isActive = (path) => {
    const currentPath = location.pathname;
    
    // For home page
    if (path === '/' && currentPath === '/') {
      return true;
    }
    
    // For category pages and their articles
    if (path !== '/' && currentPath.startsWith(path)) {
      return true;
    }
    
    // For home articles (article/1, article/2, etc.)
    if (path === '/' && currentPath.startsWith('/article/')) {
      return true;
    }
    
    return false;
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon">⚛</div>
          <span className="logo-text">NewsHub</span>
        </Link>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index} className="nav-item">
              <Link 
                to={item.path} 
                className={`nav-link ${isActive(item.path) ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
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
