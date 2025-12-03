import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ theme }) => {
  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">
        {/* Column 1 - Logo & Social */}
        <div className="footer-column">
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
          <Link to="/odisha" className="footer-link-1 footer-link-animated">Odisha</Link>
          <Link to="/national" className="footer-link-1 footer-link-animated">National</Link>
          <Link to="/international" className="footer-link-1 footer-link-animated">International</Link>
          <Link to="/education" className="footer-link-1 footer-link-animated">Education</Link>
          <Link to="/health" className="footer-link-1 footer-link-animated">Health</Link>
          <Link to="/environment" className="footer-link-1 footer-link-animated">Environment</Link>
        </div>

        {/* Column 3 - About Links with Animation */}
        <div className="footer-column">
          <Link to="/about" className="footer-link-2 footer-link-animated">About Us</Link>
          <Link to="/contact" className="footer-link-2 footer-link-animated">Contact Us</Link>
          <Link to="/privacy-policy" className="footer-link-2 footer-link-animated">Privacy Policy</Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {dayjs().format('YYYY')} Akruti Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
