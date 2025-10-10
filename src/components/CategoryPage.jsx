import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryPage.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CategoryPage = ({ theme, categoryData }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 6 articles per page
  const totalPages = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = categoryData.articles.slice(indexOfFirstItem, indexOfLastItem);

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

  const handleArticleClick = (route) => {
    navigate(route);
  };

  return (
    <div className={`category-page ${theme}`}>
      <div className="category-container">
        {/* Category Header */}
        <div className="category-header">
          <h1 className="category-title">{categoryData.name}</h1>
          <p className="category-description">{categoryData.description}</p>
          <div className="category-underline"></div>
        </div>

        {/* Articles Grid */}
        <div className="articles-grid">
          {currentArticles.map((article) => (
            <div 
              key={article.id} 
              className="article-card"
              onClick={() => handleArticleClick(article.route)}
            >
              <div className="article-card-image">
                <img src={article.image} alt={article.title} />
                {article.badge && (
                  <span className="article-card-badge">{article.badge}</span>
                )}
              </div>
              <div className="article-card-content">
                <span className="article-card-category">{article.category}</span>
                <h3 className="article-card-title">{article.title}</h3>
                <p className="article-card-excerpt">{article.excerpt}</p>
                <div className="article-card-meta">
                  <span className="article-card-date">{article.date}</span>
                  <span className="read-more">Read More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
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
      </div>
    </div>
  );
};

export default CategoryPage;
