import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Header = ({ theme }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 3;
  const totalPages = 5;

  // All 15 top news items with their routes
  const allTopNews = [
    // Page 1
    {
      id: 1,
      badge: null,
      title: 'A newfound quasicrystal formed in the first atomic bomb testest in US',
      category: 'SCIENCE',
      date: 'March 4, 2022',
      route: '/article/1',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      excerpt: 'Scientists discover unique quasicrystal formation in trinitite from the first nuclear test...'
    },
    {
      id: 2,
      badge: 'PREMIUM',
      title: "How omicron's mutations make it the most infectious coronavirus variant",
      category: 'SCIENCE',
      date: 'March 4, 2022',
      route: '/article/2',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80',
      excerpt: 'New research reveals the genetic changes that make Omicron highly transmissible...'
    },
    {
      id: 3,
      badge: null,
      title: "Africa's fynbos plants hold their ground with the world's thinnest roots",
      category: 'SCIENCE',
      date: 'March 4, 2022',
      route: '/article/3',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
      excerpt: 'Unique adaptation allows fynbos plants to thrive in nutrient-poor soils...'
    },
    // Page 2
    {
      id: 4,
      badge: 'PREMIUM',
      title: 'Climate change is accelerating faster than scientists predicted',
      category: 'ENVIRONMENT',
      date: 'March 5, 2022',
      route: '/article/4',
      image: 'https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg',
      excerpt: 'Latest data shows unprecedented rates of global temperature increase...'
    },
    {
      id: 5,
      badge: null,
      title: 'New study reveals the benefits of Mediterranean diet on longevity',
      category: 'HEALTH',
      date: 'March 5, 2022',
      route: '/article/5',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
      excerpt: 'Research demonstrates significant health improvements from traditional Mediterranean eating...'
    },
    {
      id: 6,
      badge: null,
      title: 'Tech giants announce major investments in renewable energy',
      category: 'TECHNOLOGY',
      date: 'March 5, 2022',
      route: '/article/6',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
      excerpt: 'Major technology companies commit billions to sustainable energy projects...'
    },
    // Page 3
    {
      id: 7,
      badge: 'PREMIUM',
      title: 'India launches ambitious space mission to explore lunar south pole',
      category: 'NATIONAL',
      date: 'March 6, 2022',
      route: '/article/7',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80',
      excerpt: 'Historic mission aims to unlock secrets of water ice on the Moon...'
    }
  ];

  // Get first 7 articles for carousel
  const carouselArticles = allTopNews.slice(0, 7);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = allTopNews.slice(indexOfFirstItem, indexOfLastItem);

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

  const handleNewsClick = (route) => {
    navigate(route);
  };

  const handleBreakingNewsClick = (route) => {
    navigate(route);
  };

  // const currentArticle = carouselArticles[currentSlide];

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
                  onClick={() => handleNewsClick(article.route)}
                >
                  <img src={article.image} alt={article.title} />
                  <div className="featured-overlay">
                    {article.badge && (
                      <span className="premium-badge">{article.badge}</span>
                    )}
                    <h1 className="featured-title">{article.title}</h1>
                    <div className="featured-meta">
                      <span className="category-tag">{article.category}</span>
                      <span className="date-tag">{article.date}</span>
                    </div>
                    <p className="featured-excerpt">{article.excerpt}</p>
                    
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
                onClick={() => handleNewsClick(news.route)}
                style={{ cursor: 'pointer' }}
              >
                {news.badge && (
                  <span className="news-premium-badge">{news.badge}</span>
                )}
                <h3 className="news-title">{news.title}</h3>
                <div className="news-meta">
                  <span className="news-category">{news.category}</span>
                  <span className="news-date">{news.date}</span>
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
            {[...allTopNews, ...allTopNews].map((news, index) => (
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
