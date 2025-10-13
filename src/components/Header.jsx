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

  // All 15 top news items with their routes (NO badge property)
  const allTopNews = [
    // Page 1
    {
      id: 1,
      title: 'A newfound quasicrystal formed in the first atomic bomb testest in US',
      category: 'SCIENCE',
      date: 'March 4, 2022',
      route: '/article/1',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      excerpt: 'Scientists discover unique quasicrystal formation in trinitite from the first nuclear test...'
    },
    {
      id: 2,
      title: "How omicron's mutations make it the most infectious coronavirus variant",
      category: 'SCIENCE',
      date: 'March 4, 2022',
      route: '/article/2',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80',
      excerpt: 'New research reveals the genetic changes that make Omicron highly transmissible...'
    },
    {
      id: 3,
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
      title: 'Climate change is accelerating faster than scientists predicted',
      category: 'ENVIRONMENT',
      date: 'March 5, 2022',
      route: '/article/4',
      image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&q=80',
      excerpt: 'Latest data shows unprecedented rates of global temperature increase...'
    },
    {
      id: 5,
      title: 'New study reveals the benefits of Mediterranean diet on longevity',
      category: 'HEALTH',
      date: 'March 5, 2022',
      route: '/article/5',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
      excerpt: 'Research demonstrates significant health improvements from traditional Mediterranean eating...'
    },
    {
      id: 6,
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
      title: 'India launches ambitious space mission to explore lunar south pole',
      category: 'NATIONAL',
      date: 'March 6, 2022',
      route: '/article/7',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80',
      excerpt: 'Historic mission aims to unlock secrets of water ice on the Moon...'
    },
    {
      id: 8,
      title: 'Global markets surge amid positive economic indicators',
      category: 'BUSINESS',
      date: 'March 6, 2022',
      route: '/article/8',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
      excerpt: 'Stock markets reach new highs as economic recovery gains momentum...'
    },
    {
      id: 9,
      title: 'Revolutionary AI system achieves breakthrough in medical diagnosis',
      category: 'TECHNOLOGY',
      date: 'March 6, 2022',
      route: '/article/9',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      excerpt: 'New artificial intelligence platform demonstrates unprecedented accuracy...'
    },
    // Page 4
    {
      id: 10,
      title: 'UNESCO declares new world heritage sites across five continents',
      category: 'INTERNATIONAL',
      date: 'March 7, 2022',
      route: '/article/10',
      image: 'https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=800&q=80',
      excerpt: 'Historic landmarks receive global recognition for cultural significance...'
    },
    {
      id: 11,
      title: 'Breakthrough in cancer research offers new hope for patients',
      category: 'HEALTH',
      date: 'March 7, 2022',
      route: '/article/11',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80',
      excerpt: 'Scientists develop innovative treatment targeting specific cancer cells...'
    },
    {
      id: 12,
      title: 'Electric vehicle sales hit record high in global markets',
      category: 'BUSINESS',
      date: 'March 7, 2022',
      route: '/article/12',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
      excerpt: 'EV adoption accelerates as prices drop and charging infrastructure expands...'
    },
    // Page 5
    {
      id: 13,
      title: 'Ancient civilization discovered in remote Amazon rainforest',
      category: 'SCIENCE',
      date: 'March 8, 2022',
      route: '/article/13',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80',
      excerpt: 'Archaeologists uncover evidence of sophisticated pre-Columbian society...'
    },
    {
      id: 14,
      title: 'Major education reform announced to boost digital literacy',
      category: 'EDUCATION',
      date: 'March 8, 2022',
      route: '/article/14',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      excerpt: 'Government unveils comprehensive plan to modernize school curriculum...'
    },
    {
      id: 15,
      title: 'Astronomers detect mysterious signals from distant galaxy',
      category: 'SCIENCE',
      date: 'March 8, 2022',
      route: '/article/15',
      image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80',
      excerpt: 'Telescopes capture unusual radio waves from deep space source...'
    }
  ];

  // Function to add "LATEST" badge to first 5 articles automatically
  const addLatestBadge = (articles) => {
    return articles.map((article, index) => ({
      ...article,
      badge: index < 5 ? 'LATEST' : null // First 5 get LATEST badge
    }));
  };

  // Apply LATEST badge to first 5 articles
  const topNewsWithBadges = addLatestBadge(allTopNews);

  // Get first 7 articles for carousel
  const carouselArticles = topNewsWithBadges.slice(0, 7);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = topNewsWithBadges.slice(indexOfFirstItem, indexOfLastItem);

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
                      <span className="latest-badge">{article.badge}</span>
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
                  <span className="news-latest-badge">{news.badge}</span>
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
            {[...topNewsWithBadges, ...topNewsWithBadges].map((news, index) => (
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
