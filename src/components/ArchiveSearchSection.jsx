import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ArchiveSearchSection.css';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ArchiveSearchSection = ({ theme, allArticles = [] }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());

  // Calendar functions
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const changeMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);

  // Generate archive data from articles
  const generateArchives = () => {
    const archives = {};
    
    allArticles.forEach(article => {
      if (article.date) {
        const date = new Date(article.date);
        const monthYear = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
        if (!archives[monthYear]) {
          archives[monthYear] = 0;
        }
        archives[monthYear]++;
      }
    });

    return Object.entries(archives)
      .map(([monthYear, count]) => ({ monthYear, count }))
      .sort((a, b) => {
        const [monthA, yearA] = a.monthYear.split(' ');
        const [monthB, yearB] = b.monthYear.split(' ');
        return new Date(yearB, monthNames.indexOf(monthB)) - new Date(yearA, monthNames.indexOf(monthA));
      });
  };

  const archives = generateArchives();

  // Search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleArchiveClick = (monthYear) => {
    navigate(`/archive/${monthYear.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <div className={`archive-search-inner ${theme}`}>
      {/* Calendar Widget */}
      <div className="widget-box calendar-widget">
        <h3 className="widget-title">Calendar</h3>
        <div className="calendar-content">
          {/* Calendar Header */}
          <div className="calendar-header">
            <button className="calendar-nav" onClick={() => changeMonth(-1)}>
              <FaChevronLeft />
            </button>
            <span className="calendar-month">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </span>
            <button className="calendar-nav" onClick={() => changeMonth(1)}>
              <FaChevronRight />
            </button>
          </div>

          {/* Calendar Days */}
          <div className="calendar-days-header">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="calendar-day-name">{day}</div>
            ))}
          </div>

          <div className="calendar-grid">
            {Array(startingDayOfWeek).fill(null).map((_, index) => (
              <div key={`empty-${index}`} className="calendar-day empty"></div>
            ))}
            
            {Array(daysInMonth).fill(null).map((_, index) => {
              const day = index + 1;
              const isToday = day === new Date().getDate() && 
                             currentDate.getMonth() === new Date().getMonth() &&
                             currentDate.getFullYear() === new Date().getFullYear();
              
              return (
                <div 
                  key={day} 
                  className={`calendar-day ${isToday ? 'today' : ''}`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Search Box */}
      <div className="widget-box search-widget">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <FaSearch />
          </button>
        </form>
      </div>

      {/* Archives Widget */}
      <div className="widget-box archives-widget">
        <h3 className="widget-title">Archives</h3>
        <div className="archives-list">
          {archives.length > 0 ? (
            archives.map((archive, index) => (
              <div 
                key={index} 
                className="archive-item"
                onClick={() => handleArchiveClick(archive.monthYear)}
              >
                <span className="archive-month">{archive.monthYear}</span>
                <span className="archive-count">({archive.count})</span>
              </div>
            ))
          ) : (
            <p className="no-archives">No archives available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArchiveSearchSection;
