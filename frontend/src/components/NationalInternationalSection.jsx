import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import DateTime from '../lib/date_time';
import { articleService } from '../services/articleServices';
import './NationalInternationalSection.css';

const NationalInternationalSection = ({ theme }) => {
  const navigate = useNavigate();

  const [nationalArticles, setNationalArticles] = useState([]);
  const [internationalArticles, setInternationalArticles] = useState([]);

  useEffect(() => {
    articleService.getArticlesBySection('national', { limit: 3 })
      .then((res) => {
        if (res.success){
          setNationalArticles(res.data);
        }
      })
      .catch((err) => {
        // Handle error case
      });

    articleService.getArticlesBySection('international', { limit: 3 })
      .then((res) => {
        if (res.success){
          setInternationalArticles(res.data);
        }
      })
      .catch((err) => {
        // Handle error case
      });
  }, []);

  const handleReadMore = (article) => {
    navigate(`/${article.section.toLowerCase()}/${article.id}`, { state: { article } });
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
            {nationalArticles.map((article) => (
              <div
                key={article.id}
                className="article-item"
              >
                {/* Premium Badge */}
                {/* {article.tag && (
                  <span className="article-badge">{article.tag}</span>
                )} */}

                {/* Article Title */}
                <h3 className="article-title">{article.title}</h3>

                {/* Article Meta */}
                <div className="article-meta">
                  <span className="article-date">{DateTime.formatDate(article.created_at, { showYear: true })}</span>
                </div>

                {/* Article Description */}
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
            {internationalArticles.map((article) => (
              <div
                key={article.id}
                className="article-item"
              >
                {/* Premium Badge */}
                {/* {article.tag && (
                  <span className="article-badge">{article.tag}</span>
                )} */}

                {/* Article Title */}
                <h3 className="article-title">{article.title}</h3>

                {/* Article Meta */}
                <div className="article-meta">
                  <span className="article-date">{DateTime.formatDate(article.created_at, { showYear: true })}</span>
                </div>

                {/* Article Description */}
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
      </div>
    </section>
  );
};

export default NationalInternationalSection;
