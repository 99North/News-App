import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { capitalizeFirst } from 'ramda-extension';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import DateTime from '../lib/date_time';
import getFirstImageSrc from '../lib/get_image_src';
import NotFoundPage from '../pages/NotFoundPage';
import { articleService } from '../services/articleServices';
import './CategoryPage.css';

const ITEMS_PER_PAGE = 12;

const Section = ({ section, theme }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [articles, setArticles] = useState([]);

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    articleService.getArticlesBySection(section, { page: currentPage, limit: ITEMS_PER_PAGE })
      .then((res) => {
        if (res.success){
          console.log(res);

          setTotalPages(res.totalPages || 1);
          setArticles(res.data);
        } else {
          // Handle error case
          setShowError(true);
        }
      })
      .catch((err) => {
        // Handle error case
        setShowError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage, section]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getVisiblePages = () => {
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, start + 2);

    if (end - start < 2) {
      start = Math.max(1, end - 2);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handleArticleClick = (article) => {
    navigate(`/${section}/${article.id}`, { state: { article, previousPage: section } });
  };

  if (isLoading){
    return <span>Loading...</span>;
  }

  // Change it to show the empty page when no data is present and ErrorPage when there is error
  if (showError || articles.length === 0){
    return <NotFoundPage />
  }

  return (
    <div className={`category-page ${theme}`}>
      <div className="category-container">
        {/* Category Header */}
        <div className="category-header">
          <h1 className="category-title">{capitalizeFirst(section)}</h1>
          <p className="category-description">{`Latest news and updates from ${capitalizeFirst(section)}`}</p>
          <div className="category-underline"></div>
        </div>

        {/* Articles Grid */}
        <div className="articles-grid">
          {articles.map((article) => (
            <div
              key={article.id}
              className="article-card"
              onClick={() => handleArticleClick(article)}
            >
              <div className="article-card-image">
                <img src={getFirstImageSrc(article.content)} alt={article.title} />
                {article.tag && (
                  <span className="article-card-badge">{article.tag}</span>
                )}
              </div>
              <div className="article-card-content">
                <span className="article-card-category">{article.section}</span>
                <h3 className="article-card-title">{article.title}</h3>
                <p className="article-card-excerpt">{article.description}</p>
                <div className="article-card-meta">
                  <span className="article-card-date">{DateTime.formatDate(article.created_at, { showYear: true })}</span>
                  <span className="read-more">Read More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="category-pagination">
            <button
              className={`pagination-arrow ${currentPage === 1 ? 'disabled' : ''}`}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              aria-label="Previous Page"
            >
              <FaChevronLeft />
            </button>

            <div className="pagination-numbers">
              {getVisiblePages().map((pageNum) => (
                <button
                  key={pageNum}
                  className={`pagination-number ${currentPage === pageNum ? 'active' : ''}`}
                  onClick={() => handlePageChange(pageNum)}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            <button
              className={`pagination-arrow ${currentPage === totalPages ? 'disabled' : ''}`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              aria-label="Next Page"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
