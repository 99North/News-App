import React, { useState } from 'react';
import './SubscribeSection.css';
import SuccessModal from './SuccessModal';

const SubscribeSection = ({ theme }) => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!isChecked) {
      setError('Please accept the Privacy Policy');
      return;
    }

    // Show success modal
    setShowModal(true);
    
    // Reset form
    setEmail('');
    setIsChecked(false);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className={`subscribe-section ${theme}`}>
        <div className="subscribe-container">
          {/* Heading */}
          <h2 className="subscribe-title">Stay tuned</h2>
          
          {/* Description */}
          <p className="subscribe-description">
            Subscribe to our latest newsletter and never miss the latest news!
          </p>
          <p className="subscribe-subdescription">
            Our newsletter is sent once a week, every Monday.
          </p>

          {/* Subscribe Form */}
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <div className="input-container">
              <input
                type="email"
                placeholder="Your email address"
                className="subscribe-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="subscribe-button">
                SUBSCRIBE
              </button>
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="privacy-checkbox">
              <input
                type="checkbox"
                id="privacy-policy"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label htmlFor="privacy-policy">
                I've read and accept the <span className="privacy-link">Privacy Policy</span>
              </label>
            </div>

            {/* Error Message */}
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal 
        isOpen={showModal} 
        onClose={handleCloseModal}
        theme={theme}
      />
    </>
  );
};

export default SubscribeSection;
