import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EducationHealthSection.css';
import { FaArrowRight } from 'react-icons/fa';
import { articleService } from '../services/articleServices';

const EducationHealthSection = ({ theme }) => {
  const navigate = useNavigate();
  const [educationArticles, setEducationArticles] = useState([]);
  const [healthArticles, setHealthArticles] = useState([]);

  useEffect(() => {
    articleService.getArticlesBySection('education', { limit: 3 })
      .then((res) => {
        if (res.success){
          setEducationArticles(res.data);
        }
      })
      .catch((err) => {
        // Handle error case
      });

    articleService.getArticlesBySection('health', { limit: 3 })
      .then((res) => {
        if (res.success){
          setHealthArticles(res.data);
        }
      })
      .catch((err) => {
        // Handle error case
      });
  }, []);

  const handleReadMore = (article) => {
    navigate(`/${article.id}`, { state: { article } });
  };

  return (
    <section className={`edu-health-section ${theme}`}>
      <div className="edu-health-container">
        {/* Education Section (Left) */}
        {educationArticles.length > 0 && (
          <div className="section-column">
            {/* Section Header */}
            <div className="section-header">
              <div className="section-line"></div>
              <h2 className="section-title">Education</h2>
              <div className="section-line"></div>
            </div>

            {/* Education Articles */}
            <div className="articles-list">
              {educationArticles.map((article) => (
                <div
                  key={article.id}
                  className="article-item"
                >
                  {/* Premium Badge */}
                  {article.tag && (
                    <span className="article-badge">{article.tag}</span>
                  )}

                  {/* Article Title */}
                  <h3 className="article-title">{article.title}</h3>

                  {/* Article Meta */}
                  <div className="article-meta">
                    <span className="article-category">{article.section}</span>
                    <span className="article-date">{article.created_at}</span>
                  </div>

                  {/* Article Excerpt */}
                  <p className="article-excerpt">{article.description}</p>

                  {/* Read More Button */}
                  <button
                    className="read-more-btn"
                    onClick={() => handleReadMore(article)}
                  >
                    Read More <FaArrowRight className="arrow-icon" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Health Section (Right) */}
        {healthArticles.length > 0 && (
          <div className="section-column">
            {/* Section Header */}
            <div className="section-header">
              <div className="section-line"></div>
              <h2 className="section-title">Health</h2>
              <div className="section-line"></div>
            </div>

            {/* Health Articles */}
            <div className="articles-list">
              {healthArticles.map((article) => (
                <div
                  key={article.id}
                  className="article-item"
                >
                  {/* Premium Badge */}
                  {article.tag && (
                    <span className="article-badge">{article.tag}</span>
                  )}

                  {/* Article Title */}
                  <h3 className="article-title">{article.title}</h3>

                  {/* Article Meta */}
                  <div className="article-meta">
                    <span className="article-category">{article.section}</span>
                    <span className="article-date">{article.created_at}</span>
                  </div>

                  {/* Article Excerpt */}
                  <p className="article-excerpt">{article.description}</p>

                  {/* Read More Button */}
                  <button
                    className="read-more-btn"
                    onClick={() => handleReadMore(article)}
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

export default EducationHealthSection;
