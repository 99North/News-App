import React, { useState } from "react";
import "./NewsArticle.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaClock, FaUser, FaShareAlt } from "react-icons/fa";
import ShareModal from "./ShareModal";

const NewsArticle = ({ theme, article }) => {
  const navigate = useNavigate();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  const handleShareClick = () => {
    setIsShareModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsShareModalOpen(false);
  };

  // Get current article URL
  const articleUrl = window.location.href;

  return (
    <div className={`article-page ${theme}`}>
      <div className="article-container">
        {/* Back Button */}
        <button className="back-button" onClick={handleBack}>
          <FaArrowLeft /> Back
        </button>

        {/* Article Header */}
        <div className="article-header">
          {article.badge && (
            <span className="article-badge">{article.badge}</span>
          )}
          <h1 className="article-main-title">{article.title}</h1>

          <div className="article-meta-info">
            <div className="meta-item">
              <FaUser className="meta-icon" />
              <span>{article.author}</span>
            </div>
            <div className="meta-item">
              <FaClock className="meta-icon" />
              <span>{article.date}</span>
            </div>
            <div className="meta-item category-badge">{article.category}</div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="article-featured-image">
          <img src={article.image} alt={article.title} />
          {article.imageCaption && (
            <p className="image-caption">{article.imageCaption}</p>
          )}
        </div>

        {/* Article Content */}
        <div className="article-content">
          {/* Introduction */}
          <p className="article-intro">{article.intro}</p>

          {/* Main Content Sections */}
          {article.sections.map((section, index) => (
            <div key={index} className="content-section">
              {section.heading && (
                <h2 className="section-heading">{section.heading}</h2>
              )}
              {section.paragraphs.map((para, pIndex) => (
                <p key={pIndex} className="section-paragraph">
                  {para}
                </p>
              ))}

              {section.quote && (
                <blockquote className="article-quote">
                  <p className="quote-text">"{section.quote.text}"</p>
                  <cite className="quote-author">— {section.quote.author}</cite>
                </blockquote>
              )}

              {section.image && (
                <div className="section-image">
                  <img src={section.image} alt={section.heading} />
                  {section.imageCaption && (
                    <p className="image-caption">{section.imageCaption}</p>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Conclusion */}
          {article.conclusion && (
            <div className="article-conclusion">
              <h2 className="section-heading">Conclusion</h2>
              <p className="section-paragraph">{article.conclusion}</p>
            </div>
          )}
        </div>

        {/* Share Section */}
        <div className="article-share" onClick={handleShareClick}>
          <FaShareAlt className="share-icon" />
          <span>Share this article</span>
        </div>
      </div>

      {/* Share Modal */}
      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={handleCloseModal}
        articleUrl={articleUrl}
        articleTitle={article.title}
        theme={theme} // Pass theme prop
      />
    </div>
  );
};

export default NewsArticle;
