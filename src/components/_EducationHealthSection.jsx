import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EducationHealthSection.css';
import { FaArrowRight } from 'react-icons/fa';

const _EducationHealthSection = ({ theme, educationArticles = [], healthArticles = [] }) => {
  const navigate = useNavigate();

  // Get first 3 articles from each category
  const displayEducation = educationArticles.slice(0, 3);
  const displayHealth = healthArticles.slice(0, 3);

  const handleReadMore = (route) => {
    navigate(route);
  };

  // Don't render if no articles
  if (displayEducation.length === 0 && displayHealth.length === 0) {
    return null;
  }

  return (
    <section className={`edu-health-section ${theme}`}>
      <div className="edu-health-container">
        {/* Education Section (Left) */}
        {displayEducation.length > 0 && (
          <div className="section-column">
            {/* Section Header */}
            <div className="section-header">
              <div className="section-line"></div>
              <h2 className="section-title">Education</h2>
              <div className="section-line"></div>
            </div>

            {/* Education Articles */}
            <div className="articles-list">
              {displayEducation.map((article) => (
                <div
                  key={article.id}
                  className="article-item"
                >
                  {/* Premium Badge */}
                  {article.badge && (
                    <span className="article-badge">{article.badge}</span>
                  )}

                  {/* Article Title */}
                  <h3 className="article-title">{article.title}</h3>

                  {/* Article Meta */}
                  <div className="article-meta">
                    <span className="article-category">{article.category}</span>
                    <span className="article-date">{article.date}</span>
                  </div>

                  {/* Article Excerpt */}
                  <p className="article-excerpt">{article.excerpt}</p>

                  {/* Read More Button */}
                  <button
                    className="read-more-btn"
                    onClick={() => handleReadMore(article.route)}
                  >
                    Read More <FaArrowRight className="arrow-icon" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Health Section (Right) */}
        {displayHealth.length > 0 && (
          <div className="section-column">
            {/* Section Header */}
            <div className="section-header">
              <div className="section-line"></div>
              <h2 className="section-title">Health</h2>
              <div className="section-line"></div>
            </div>

            {/* Health Articles */}
            <div className="articles-list">
              {displayHealth.map((article) => (
                <div
                  key={article.id}
                  className="article-item"
                >
                  {/* Premium Badge */}
                  {article.badge && (
                    <span className="article-badge">{article.badge}</span>
                  )}

                  {/* Article Title */}
                  <h3 className="article-title">{article.title}</h3>

                  {/* Article Meta */}
                  <div className="article-meta">
                    <span className="article-category">{article.category}</span>
                    <span className="article-date">{article.date}</span>
                  </div>

                  {/* Article Excerpt */}
                  <p className="article-excerpt">{article.excerpt}</p>

                  {/* Read More Button */}
                  <button
                    className="read-more-btn"
                    onClick={() => handleReadMore(article.route)}
                  >
                    Read More <FaArrowRight className="arrow-icon" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default _EducationHealthSection;
