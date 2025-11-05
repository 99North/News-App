import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { articleService } from '../services/articleServices';
import getFirstImageSrc from '../lib/get_image_src';

const MAX_ARTICLE_LIMIT = 15;
const MAX_CAROUSEL_LIMIT = 7;
const ITEMS_PER_PAGE = 3;

const Header = ({ theme }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    articleService.getAllArticles({ limit: MAX_ARTICLE_LIMIT })
      .then((res) => {
        if (res.success){
          setArticles(res.data);
          setTotalPages(
            res.data.length % ITEMS_PER_PAGE === 0
              ? (res.data.length / ITEMS_PER_PAGE)
              : ((res.data.length / ITEMS_PER_PAGE) + 1)
          );
        } else {
          // Handle error case
        }
      })
      .catch((err) => {
        // Handle error case
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const carouselArticles = articles.slice(0, MAX_CAROUSEL_LIMIT);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentNews = articles.slice(indexOfFirstItem, indexOfLastItem);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselArticles.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [carouselArticles.length]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselArticles.length) % carouselArticles.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselArticles.length);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
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

  const handleNewsClick = (article) => {
    navigate(`/${article.id}`, { state: { article } });
  };

  const handleBreakingNewsClick = (route) => {
    navigate(route);
  };

  if (loading){
    // Change this to a proper loading component
    return null;
  }

  return (
    <header className={`header-section ${theme}`}>
      <div className="header-container">
        {/* Carousel Featured Article - Left Side */}
        <div className="featured-article carousel-container">
          <div className="carousel-wrapper">
            <div
              className="carousel-slides"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselArticles.map((article, index) => (
                <div
                  key={article.id}
                  className="featured-image carousel-slide"
                  onClick={() => handleNewsClick(article)}
                >
                  <img src={getFirstImageSrc(article.content)} alt={article.title} />
                  <div className="featured-overlay">
                    {article.tag && (
                      <span className="latest-badge">{article.tag}</span>
                    )}
                    <h1 className="featured-title">{article.title}</h1>
                    <div className="featured-meta">
                      <span className="category-tag">{article.section}</span>
                      <span className="date-tag">{article.create_at}</span>
                    </div>
                    <p className="featured-excerpt">{article.description}</p>

                    {/* Slide Counter */}
                    <div className="slide-counter">
                      {index + 1} / {carouselArticles.length}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation Arrows */}
            <button
              className="carousel-nav-arrow carousel-prev"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevSlide();
              }}
              aria-label="Previous Slide"
            >
              <FaChevronLeft />
            </button>
            <button
              className="carousel-nav-arrow carousel-next"
              onClick={(e) => {
                e.stopPropagation();
                handleNextSlide();
              }}
              aria-label="Next Slide"
            >
              <FaChevronRight />
            </button>

            {/* Carousel Dots */}
            <div className="carousel-dots">
              {carouselArticles.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDotClick(index);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Top News Section - Right Side */}
        <div className="top-news-section">
          <div className="top-news-header">
            <h2 className="section-title">Top News</h2>
            <div className="title-underline"></div>
          </div>

          <div className="top-news-list">
            {currentNews.map((news) => (
              <div
                key={news.id}
                className="news-item"
                onClick={() => handleNewsClick(news)}
                style={{ cursor: 'pointer' }}
              >
                {news.tag && (
                  <span className="news-latest-badge">{news.tag}</span>
                )}
                <h3 className="news-title">{news.title}</h3>
                <div className="news-meta">
                  <span className="news-category">{news.section}</span>
                  <span className="news-date">{news.description}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
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

      {/* Breaking News Ticker - Scrolling from Right to Left */}
      <div className="breaking-news-ticker">
        <span className="breaking-label">BREAKING NEWS</span>
        <div className="breaking-content">
          <div className="breaking-scroll">
            {articles.map((news, index) => (
              <span
                key={index}
                className="breaking-news-item"
                onClick={() => handleBreakingNewsClick(news.route)}
              >
                {news.title}
                <span className="news-separator">||</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
