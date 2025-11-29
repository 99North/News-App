import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OdishaSection.css';
import { articleService } from '../services/articleServices';
import getFirstImageSrc from '../lib/get_image_src';

const OdishaSection = ({ theme }) => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articleService.getArticlesBySection('odisha', { limit: 6 })
      .then((res) => {
        if (res.success){
          setArticles(res.data);
        }
      })
      .catch((err) => {
        // Handle error case
      });
  }, []);

  const handleArticleClick = (article) => {
    navigate(`/odisha/${article.id}`, { state: { article } });
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
          {articles.map((article) => (
            <div
              key={article.id}
              className="odisha-card"
              onClick={() => handleArticleClick(article)}
            >
              {/* Article Image */}
              <div className="odisha-card-image">
                <img src={getFirstImageSrc(article.content)} alt={article.title} />
                {article.tag && (
                  <span className="odisha-badge">{article.tag}</span>
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
