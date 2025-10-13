import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EntertainmentWithSidebar.css';

const EntertainmentWithSidebar = ({ theme, articles = [] }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleArticleClick = (route) => {
    navigate(route);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleArchiveSearch = (e) => {
    e.preventDefault();
    console.log('Archive search:', { month: selectedMonth, year: selectedYear });
  };

  // Generate years (2020 to current year)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2019 }, (_, i) => 2020 + i);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <section className={`entertainment-with-sidebar ${theme}`}>
      <div className="entertainment-container">
        {/* Main Content - Entertainment Articles */}
        <div className="entertainment-main">
          <div className="section-header">
            <div className="section-line"></div>
            <h2 className="section-title">Entertainment</h2>
            <div className="section-line"></div>
          </div>

          <div className="entertainment-grid">
            {articles.slice(0, 6).map((article) => (
              <div
                key={article.id}
                className="entertainment-card"
                onClick={() => handleArticleClick(article.route)}
              >
                <div className="card-image-wrapper">
                  <img src={article.image} alt={article.title} className="card-image" />
                  {article.badge && (
                    <span className="card-badge">{article.badge}</span>
                  )}
                </div>
                <div className="card-content">
                  <div className="card-meta">
                    <span className="card-category">{article.category}</span>
                    <span className="card-date">{article.date}</span>
                  </div>
                  <h3 className="card-title">{article.title}</h3>
                  <p className="card-excerpt">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar - Only Search and Archive */}
        <aside className="entertainment-sidebar">
          
          {/* Search Bar Widget */}
          <div className="sidebar-widget search-widget">
            <h3 className="widget-title">Search</h3>
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </form>
          </div>

          {/* Archive Section Widget */}
          <div className="sidebar-widget archive-widget">
            <h3 className="widget-title">Archive</h3>
            <form onSubmit={handleArchiveSearch} className="archive-form">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="archive-select"
              >
                <option value="">Select Month</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="archive-select"
              >
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <button type="submit" className="archive-button">
                Search Archive
              </button>
            </form>
          </div>

        </aside>
      </div>
    </section>
  );
};

export default EntertainmentWithSidebar;
