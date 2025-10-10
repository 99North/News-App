import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NationalInternationalSection.css';
import { FaArrowRight } from 'react-icons/fa';

const NationalInternationalSection = ({ theme, nationalArticles, internationalArticles }) => {
  const navigate = useNavigate();

  // Get first 3 articles from each category
  const displayNational = nationalArticles.slice(0, 3);
  const displayInternational = internationalArticles.slice(0, 3);

  const handleReadMore = (route) => {
    navigate(route);
  };

  return (
    <section className={`nat-int-section ${theme}`}>
      <div className="nat-int-container">
        {/* National Section (Left) */}
        <div className="section-column">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-line"></div>
            <h2 className="section-title">National</h2>
            <div className="section-line"></div>
          </div>

          {/* National Articles */}
          <div className="articles-list">
            {displayNational.map((article) => (
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

        {/* International Section (Right) */}
        <div className="section-column">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-line"></div>
            <h2 className="section-title">International</h2>
            <div className="section-line"></div>
          </div>

          {/* International Articles */}
          <div className="articles-list">
            {displayInternational.map((article) => (
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
      </div>
    </section>
  );
};

export default NationalInternationalSection;
