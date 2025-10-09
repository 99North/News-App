import React from 'react';
import './Header.css';

const Header = ({ theme }) => {
  const featuredArticle = {
    category: 'BUSSINESS',
    badge: 'PREMIUM',
    title: "Target thinks it can keep growing sales, here's how the retailer will do it",
    excerpt: "It is a daily ritual for millions of Australians, but if you have noticed the price of your morning flat white or soy latte increase,...",
    date: 'March 4, 2022',
    image: 'https://demo.tagdiv.com/newspaper_news_hub_pro/wp-content/uploads/2022/03/30-696x469.jpg'
  };

  const topNews = [
    {
      id: 1,
      badge: null,
      title: 'A newfound quasicrystal formed in the first atomic bomb testest in US',
      category: 'SCIENCE',
      date: 'March 4, 2022'
    },
    {
      id: 2,
      badge: 'PREMIUM',
      title: "How omicron's mutations make it the most infectious coronavirus variant",
      category: 'SCIENCE',
      date: 'March 4, 2022'
    },
    {
      id: 3,
      badge: null,
      title: "Africa's fynbos plants hold their ground with the world's thinnest roots",
      category: 'SCIENCE',
      date: 'March 4, 2022'
    }
  ];

  const breakingNews = [
    "A fast radio burst’s unlikely source may be a cluster of old stars. |  ",
    "A newfound quasicrystal formed in the first atomic bomb test in US. |  ",
    "Tiny living machines called xenobots can create copies of themselves.  |  "
  ];

  return (
    <header className={`header-section ${theme}`}>
      <div className="header-container">
        {/* Featured Article - Left Side */}
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

        {/* Top News - Right Side */}
        <div className="top-news-section">
          <div className="top-news-header">
            <h2 className="section-title">Top News</h2>
            <div className="title-underline"></div>
          </div>

          <div className="top-news-list">
            {topNews.map((news) => (
              <div key={news.id} className="news-item">
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
        </div>
      </div>

      {/* Breaking News Ticker */}
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
