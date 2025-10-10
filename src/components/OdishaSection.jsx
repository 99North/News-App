import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OdishaSection.css';

const OdishaSection = ({ theme, odishaArticles }) => {
  const navigate = useNavigate();

  // Get first 6 articles from Odisha
  const displayArticles = odishaArticles.slice(0, 6);

  const handleArticleClick = (route) => {
    navigate(route);
  };

  return (
    <section className={`odisha-section ${theme}`}>
      <div className="odisha-container">
        {/* Section Header */}
        <div className="odisha-header">
          <div className="odisha-line"></div>
          <h2 className="odisha-title">Odisha</h2>
          <div className="odisha-line"></div>
        </div>

        {/* Articles Grid */}
        <div className="odisha-grid">
          {displayArticles.map((article) => (
            <div 
              key={article.id} 
              className="odisha-card"
              onClick={() => handleArticleClick(article.route)}
            >
              {/* Article Image */}
              <div className="odisha-card-image">
                <img src={article.image} alt={article.title} />
                {article.badge && (
                  <span className="odisha-badge">{article.badge}</span>
                )}
              </div>

              {/* Article Content */}
              <div className="odisha-card-content">
                <h3 className="odisha-card-title">{article.title}</h3>
                <div className="odisha-card-meta">
                  <span className="odisha-card-category">{article.category}</span>
                  <span className="odisha-card-date">{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OdishaSection;
