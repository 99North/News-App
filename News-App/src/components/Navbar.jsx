import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';
import { FaBars, FaTimes, FaSun, FaMoon, FaUser, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import Logo from '../assets/images/akruti-logo.png';

function getFullName(user){
  return [user.firstName, user.lastName].join(' ').trim();
}

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();

  // Authentication context
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  console.log(user);

  // Ref for user menu to handle outside clicks
  const userMenuRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setUserMenuOpen(false); // Close user menu when main menu toggles
  };

  const closeMenu = () => {
    setIsOpen(false);
    setUserMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      closeMenu();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const menuItems = [
    { name: 'Odisha', path: '/odisha' },
    { name: 'National', path: '/national' },
    { name: 'International', path: '/international' },
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
          <img className="brand-icon" src={Logo} alt="Site logo"/>
          <span className="logo-text">Akruti Media</span>
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

          {/* Mobile Authentication Links */}
          <div className="mobile-auth">
            {isAuthenticated ? (
              <>
                <div className="mobile-user-info">
                  <span className="mobile-user-name">
                    Welcome, {user.firstName}
                  </span>
                  <span className="mobile-user-role">
                    {user?.role || 'User'}
                  </span>
                </div>
                <Link to="/profile" className="nav-link" onClick={closeMenu}>
                  Profile
                </Link>
                <Link to="/my-articles" className="nav-link" onClick={closeMenu}>
                  My Articles
                </Link>
                {isAdmin && (
                  <Link to="/admin" className="nav-link admin-link" onClick={closeMenu}>
                    Admin Panel
                  </Link>
                )}
                <button
                  className="mobile-logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link auth-link" onClick={closeMenu}>
                  Login
                </Link>
                <Link to="/signup" className="nav-link auth-link signup-link" onClick={closeMenu}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </ul>

        {/* Theme Toggle & Authentication Controls */}
        <div className="nav-controls">
          {/* Desktop Authentication */}
          <div className="desktop-auth">
            {isAuthenticated ? (
              <div className="user-menu-container" ref={userMenuRef}>
                <button
                  className="user-menu-trigger"
                  onClick={toggleUserMenu}
                  aria-expanded={userMenuOpen}
                  aria-haspopup="true"
                >
                  <div className="user-avatar">
                    {user?.firstName?.charAt(0)?.toUpperCase() ||
                     user?.username?.charAt(0)?.toUpperCase() || 'U'}
                  </div>
                  <span className="user-display-name">
                    {user.firstName}
                  </span>
                  <FaChevronDown className={`chevron-icon ${userMenuOpen ? 'rotated' : ''}`} />
                </button>

                {/* User Dropdown Menu */}
                {userMenuOpen && (
                  <div className="user-dropdown-menu">
                    <div className="user-menu-header">
                      <div className="user-info">
                        <div className="user-name">{getFullName(user)}</div>
                        <div className="user-email">{user?.email}</div>
                        <div className="user-role-badge">
                          {user?.role || 'User'}
                        </div>
                      </div>
                    </div>

                    <div className="menu-divider"></div>

                    <div className="user-menu-items">
                      <Link
                        to="/profile"
                        className="dropdown-item"
                        onClick={closeMenu}
                      >
                        <FaUser className="item-icon" />
                        Profile
                      </Link>

                      <Link
                        to="/my-articles"
                        className="dropdown-item"
                        onClick={closeMenu}
                      >
                        <span className="item-icon">📝</span>
                        My Articles
                      </Link>

                      {isAdmin && (
                        <Link
                          to="/admin"
                          className="dropdown-item admin-item"
                          onClick={closeMenu}
                        >
                          <span className="item-icon">⚙️</span>
                          Admin Panel
                        </Link>
                      )}
                    </div>

                    <div className="menu-divider"></div>

                    <button
                      className="dropdown-item logout-item"
                      onClick={handleLogout}
                    >
                      <FaSignOutAlt className="item-icon" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="auth-btn login-btn" onClick={closeMenu}>
                  Login
                </Link>
                {/* <Link to="/signup" className="auth-btn signup-btn" onClick={closeMenu}>
                  Sign Up
                </Link> */}
              </div>
            )}
          </div>

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
