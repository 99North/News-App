<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Header = ({ theme }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = 5;

=======
import React from 'react';
import './Header.css';

const Header = ({ theme }) => {
>>>>>>> 84496a77925cb4d239ac4055b4c7a85d79740003
  const featuredArticle = {
    category: 'BUSSINESS',
    badge: 'PREMIUM',
    title: "Target thinks it can keep growing sales, here's how the retailer will do it",
    excerpt: "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase,...",
    date: 'March 4, 2022',
<<<<<<< HEAD
    image: 'https://images.unsplash.com/photo-1554224311-beee2091fde0?w=800&q=80'
  };

  // All top news items with route links
  const allTopNews = [
    // Page 1
=======
    image: 'https://demo.tagdiv.com/newspaper_news_hub_pro/wp-content/uploads/2022/03/30-696x469.jpg'
  };

  const topNews = [
>>>>>>> 84496a77925cb4d239ac4055b4c7a85d79740003
    {
      id: 1,
      badge: null,
      title: 'A newfound quasicrystal formed in the first atomic bomb testest in US',
      category: 'SCIENCE',
<<<<<<< HEAD
      date: 'March 4, 2022',
      route: '/article/1'
=======
      date: 'March 4, 2022'
>>>>>>> 84496a77925cb4d239ac4055b4c7a85d79740003
    },
    {
      id: 2,
      badge: 'PREMIUM',
      title: "How omicron's mutations make it the most infectious coronavirus variant",
      category: 'SCIENCE',
<<<<<<< HEAD
      date: 'March 4, 2022',
      route: '/article/2'
=======
      date: 'March 4, 2022'
>>>>>>> 84496a77925cb4d239ac4055b4c7a85d79740003
    },
    {
      id: 3,
      badge: null,
      title: "Africa's fynbos plants hold their ground with the world's thinnest roots",
      category: 'SCIENCE',
<<<<<<< HEAD
      date: 'March 4, 2022',
      route: '/article/3'
    },
    // Page 2
    {
      id: 4,
      badge: 'PREMIUM',
      title: 'Climate change is accelerating faster than scientists predicted',
      category: 'ENVIRONMENT',
      date: 'March 5, 2022',
      route: '/article/4'
    },
    {
      id: 5,
      badge: null,
      title: 'New study reveals the benefits of Mediterranean diet on longevity',
      category: 'HEALTH',
      date: 'March 5, 2022',
      route: '/article/5'
    },
    {
      id: 6,
      badge: null,
      title: 'Tech giants announce major investments in renewable energy',
      category: 'TECHNOLOGY',
      date: 'March 5, 2022',
      route: '/'
    },
    // Page 3
    {
      id: 7,
      badge: 'PREMIUM',
      title: 'India launches ambitious space mission to explore lunar south pole',
      category: 'NATIONAL',
      date: 'March 6, 2022',
      route: '/'
    },
    {
      id: 8,
      badge: null,
      title: 'Global markets surge amid positive economic indicators',
      category: 'BUSINESS',
      date: 'March 6, 2022',
      route: '/'
    },
    {
      id: 9,
      badge: 'PREMIUM',
      title: 'Revolutionary AI system achieves breakthrough in medical diagnosis',
      category: 'TECHNOLOGY',
      date: 'March 6, 2022',
      route: '/'
    },
    // Page 4
    {
      id: 10,
      badge: null,
      title: 'UNESCO declares new world heritage sites across five continents',
      category: 'INTERNATIONAL',
      date: 'March 7, 2022',
      route: '/'
    },
    {
      id: 11,
      badge: 'PREMIUM',
      title: 'Breakthrough in cancer research offers new hope for patients',
      category: 'HEALTH',
      date: 'March 7, 2022',
      route: '/'
    },
    {
      id: 12,
      badge: null,
      title: 'Electric vehicle sales hit record high in global markets',
      category: 'BUSINESS',
      date: 'March 7, 2022',
      route: '/'
    },
    // Page 5
    {
      id: 13,
      badge: 'PREMIUM',
      title: 'Ancient civilization discovered in remote Amazon rainforest',
      category: 'SCIENCE',
      date: 'March 8, 2022',
      route: '/'
    },
    {
      id: 14,
      badge: null,
      title: 'Major education reform announced to boost digital literacy',
      category: 'EDUCATION',
      date: 'March 8, 2022',
      route: '/'
    },
    {
      id: 15,
      badge: 'PREMIUM',
      title: 'Astronomers detect mysterious signals from distant galaxy',
      category: 'SCIENCE',
      date: 'March 8, 2022',
      route: '/'
    }
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = allTopNews.slice(indexOfFirstItem, indexOfLastItem);

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

  const breakingNews = "Tiny living machines called xenobots can create copies of themselves";
=======
      date: 'March 4, 2022'
    }
  ];

  const breakingNews = [
    "A fast radio burst’s unlikely source may be a cluster of old stars. |  ",
    "A newfound quasicrystal formed in the first atomic bomb test in US. |  ",
    "Tiny living machines called xenobots can create copies of themselves.  |  "
  ];
>>>>>>> 84496a77925cb4d239ac4055b4c7a85d79740003

  return (
    <header className={`header-section ${theme}`}>
      <div className="header-container">
<<<<<<< HEAD
=======
        {/* Featured Article - Left Side */}
>>>>>>> 84496a77925cb4d239ac4055b4c7a85d79740003
        <div className="featured-article">
          <div className="featured-image">
            <img src={featuredArticle.image} alt={featuredArticle.title} />
            <div className="featured-overlay">
              {featuredArticle.badge && (
                <span className="premium-badge">{featuredArticle.badge}</span>
              )}
              <h1 className="featured-title">{featuredArticle.title}</h1>
              <div className="featured-meta">
                <span className="category-tag">{featuredArticle.category}</span>
                <span className="date-tag">{featuredArticle.date}</span>
              </div>
              <p className="featured-excerpt">{featuredArticle.excerpt}</p>
            </div>
          </div>
        </div>

<<<<<<< HEAD
=======
        {/* Top News - Right Side */}
>>>>>>> 84496a77925cb4d239ac4055b4c7a85d79740003
        <div className="top-news-section">
          <div className="top-news-header">
            <h2 className="section-title">Top News</h2>
            <div className="title-underline"></div>
          </div>

          <div className="top-news-list">
<<<<<<< HEAD
            {currentNews.map((news) => (
              <div 
                key={news.id} 
                className="news-item"
                onClick={() => handleNewsClick(news.route)}
                style={{ cursor: 'pointer' }}
              >
=======
            {topNews.map((news) => (
              <div key={news.id} className="news-item">
>>>>>>> 84496a77925cb4d239ac4055b4c7a85d79740003
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
<<<<<<< HEAD

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

=======
        </div>
      </div>

      {/* Breaking News Ticker */}
>>>>>>> 84496a77925cb4d239ac4055b4c7a85d79740003
      <div className="breaking-news-ticker">
        <span className="breaking-label">BREAKING NEWS</span>
        <div className="breaking-content">
          <p className="breaking-text">{breakingNews}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
