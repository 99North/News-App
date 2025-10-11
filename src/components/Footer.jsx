import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = ({ theme }) => {
  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">
        {/* Column 1 - Logo & Social */}
        <div className="footer-column">
          <div className="footer-logo">
            <span className="logo-icon">📰</span>
            <span className="logo-text">NewsHub</span>
          </div>

          {/* Social Media Icons */}
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook /> <span>Facebook</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram /> <span>Instagram</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter /> <span>Twitter</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaYoutube /> <span>Youtube</span>
            </a>
          </div>
        </div>

        {/* Column 2 - Navigation Links 1 */}
        <div className="footer-column">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/odisha" className="footer-link">Odisha</Link>
          <Link to="/national" className="footer-link">National</Link>
          <Link to="/international" className="footer-link">International</Link>
          <Link to="/entertainment" className="footer-link">Entertainment</Link>
        </div>

        {/* Column 3 - Navigation Links 2 */}
        <div className="footer-column">
          <Link to="/jobs" className="footer-link">Jobs</Link>
          <Link to="/education" className="footer-link">Education</Link>
          <Link to="/astrospeak" className="footer-link">Astrospeak</Link>
          <Link to="/health" className="footer-link">Health</Link>
          <Link to="/environment" className="footer-link">Environment</Link>
        </div>

        {/* Column 4 - About Links */}
        <div className="footer-column">
          <Link to="/about" className="footer-link">About NewsHub</Link>
          <Link to="/contact" className="footer-link">Contact Us</Link>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-link">Terms of Use</Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2025 NewsHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
