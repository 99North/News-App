import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import DateTime from '../lib/date_time';
import getFirstImageSrc from '../lib/get_image_src';
import { articleService } from '../services/articleServices';
import './EnvironmentSection.css';

const EnvironmentSection = ({ theme }) => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articleService.getArticlesBySection('environment', { limit: 4 })
      .then((res) => {
        if (res.success){
          setArticles(res.data);
        }
      })
      .catch((err) => {
        // Handle error case
      });
  }, []);

  const handleReadMore = (article) => {
    navigate(`/environment/${article.id}`, { state: { article } });
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
          {articles.map((article) => (
            <div
              key={article.id}
              className="environment-card"
            >
              {/* Article Image */}
              <div className="environment-card-image">
                <img src={getFirstImageSrc(article.content)} alt={article.title} />
                {article.tag && (
                  <span className="environment-badge">{article.tag}</span>
                )}
              </div>

              {/* Article Content */}
              <div className="environment-card-content">
                <h3 className="environment-card-title">{article.title}</h3>

                <p className="environment-card-excerpt">{article.description}</p>

                <div className="environment-card-footer">
                  <div className="environment-card-meta">
                    <span className="environment-card-category">{article.section}</span>
                    <span className="environment-card-date">{DateTime.formatDate(article.created_at, { showYear: true })}</span>
                  </div>

                  <button
                    className="environment-read-more"
                    onClick={() => handleReadMore(article)}
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
