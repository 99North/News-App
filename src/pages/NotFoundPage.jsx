import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';
import { FaHome, FaSearch } from 'react-icons/fa';

const NotFoundPage = ({ theme }) => {
  return (
    <div className={`notfound-page ${theme}`}>
      <div className="notfound-container">
        {/* Animated 404 */}
        <div className="error-number">
          <span className="digit-4 bounce">4</span>
          <span className="digit-0 float">0</span>
          <span className="digit-4 bounce delay">4</span>
        </div>

        {/* Animated Icon */}
        <div className="error-icon">
          <div className="icon-circle pulse">
            <FaSearch className="search-icon" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-description">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="error-actions">
          <Link to="/" className="btn-primary-link">
            <FaHome className="btn-icon" />
            Back to Home
          </Link>
        </div>

        {/* Animated Background Shapes */}
        <div className="background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
