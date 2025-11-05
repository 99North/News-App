import React from 'react';
import './ShareModal.css';
import { FaTimes, FaFacebook, FaInstagram, FaWhatsapp, FaTwitter, FaTelegram, FaFacebookMessenger, FaLink } from 'react-icons/fa';

const ShareModal = ({ isOpen, onClose, articleUrl, articleTitle, theme }) => {
  if (!isOpen) return null;

  // Encode URL and title for sharing
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(articleTitle);

  // Social media share URLs
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    messenger: `fb-messenger://share/?link=${encodedUrl}`,
    instagram: `https://www.instagram.com/`
  };

  const handleShare = (platform) => {
    if (platform === 'instagram') {
      alert('Please open Instagram app and share manually');
      return;
    }
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(articleUrl);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="share-modal-overlay" onClick={onClose}>
      <div className={`share-modal-content ${theme}`} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="share-modal-header">
          <h3 className="share-modal-title">Share this article</h3>
          <button className="share-modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="share-modal-body">
          <div className="share-icons-grid">
            {/* Facebook */}
            <div className="share-icon-wrapper" onClick={() => handleShare('facebook')}>
              <div className="share-icon facebook">
                <FaFacebook />
              </div>
              <span className="share-icon-label">Facebook</span>
            </div>

            {/* Twitter */}
            <div className="share-icon-wrapper" onClick={() => handleShare('twitter')}>
              <div className="share-icon twitter">
                <FaTwitter />
              </div>
              <span className="share-icon-label">Twitter</span>
            </div>

            {/* WhatsApp */}
            <div className="share-icon-wrapper" onClick={() => handleShare('whatsapp')}>
              <div className="share-icon whatsapp">
                <FaWhatsapp />
              </div>
              <span className="share-icon-label">WhatsApp</span>
            </div>

            {/* Telegram */}
            <div className="share-icon-wrapper" onClick={() => handleShare('telegram')}>
              <div className="share-icon telegram">
                <FaTelegram />
              </div>
              <span className="share-icon-label">Telegram</span>
            </div>

            {/* Messenger */}
            <div className="share-icon-wrapper" onClick={() => handleShare('messenger')}>
              <div className="share-icon messenger">
                <FaFacebookMessenger />
              </div>
              <span className="share-icon-label">Messenger</span>
            </div>

            {/* Instagram */}
            <div className="share-icon-wrapper" onClick={() => handleShare('instagram')}>
              <div className="share-icon instagram">
                <FaInstagram />
              </div>
              <span className="share-icon-label">Instagram</span>
            </div>
          </div>

          {/* Copy Link Section */}
          <div className="copy-link-section">
            <div className="copy-link-container">
              <input 
                type="text" 
                value={articleUrl} 
                readOnly 
                className="copy-link-input"
              />
              <button className="copy-link-button" onClick={handleCopyLink}>
                <FaLink /> Copy Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
