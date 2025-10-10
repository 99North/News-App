import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EnvironmentSection.css';
import { FaArrowRight } from 'react-icons/fa';

const EnvironmentSection = ({ theme, environmentArticles }) => {
  const navigate = useNavigate();

  // Get first 4 articles from Environment
  const displayArticles = environmentArticles.slice(0, 4);

  const handleReadMore = (route) => {
    navigate(route);
  };

  return (
    <section className={`environment-section ${theme}`}>
      <div className="environment-container">
        {/* Section Header */}
        <div className="environment-header">
          <div className="environment-line"></div>
          <h2 className="environment-title">Environment</h2>
          <div className="environment-line"></div>
        </div>

        {/* Articles Grid */}
        <div className="environment-grid">
          {displayArticles.map((article) => (
            <div 
              key={article.id} 
              className="environment-card"
            >
              {/* Article Image */}
              <div className="environment-card-image">
                <img src={article.image} alt={article.title} />
                {article.badge && (
                  <span className="environment-badge">{article.badge}</span>
                )}
              </div>

              {/* Article Content */}
              <div className="environment-card-content">
                <h3 className="environment-card-title">{article.title}</h3>
                
                <p className="environment-card-excerpt">{article.excerpt}</p>

                <div className="environment-card-footer">
                  <div className="environment-card-meta">
                    <span className="environment-card-category">{article.category}</span>
                    <span className="environment-card-date">{article.date}</span>
                  </div>
                  
                  <button 
                    className="environment-read-more"
                    onClick={() => handleReadMore(article.route)}
                  >
                    Read More <FaArrowRight className="arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;
