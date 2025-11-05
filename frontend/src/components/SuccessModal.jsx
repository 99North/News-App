import React from 'react';
import './SuccessModal.css';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

const SuccessModal = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;

  return (
    <div className="success-modal-overlay" onClick={onClose}>
      <div className={`success-modal-content ${theme}`} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="success-modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        {/* Success Icon with Animation */}
        <div className="success-icon-container">
          <FaCheckCircle className="success-icon" />
        </div>

        {/* Success Message */}
        <h2 className="success-title">Successfully Subscribed!</h2>
        <p className="success-message">
          Thank you for subscribing to our newsletter. You'll receive the latest news and updates every Monday.
        </p>

        {/* OK Button */}
        <button className="success-ok-button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
