import React from 'react';
import EntertainmentSection from './EntertainmentSection';
import ArchiveSearchSection from './ArchiveSearchSection';
import './EntertainmentWithSidebar.css';

const EntertainmentWithSidebar = ({ theme, entertainmentArticles, allArticles }) => {
  return (
    <section className={`entertainment-with-sidebar ${theme}`}>
      <div className="entertainment-sidebar-container">
        {/* Left Side - Entertainment (2/3) */}
        <div className="main-content">
          <EntertainmentSection theme={theme} entertainmentArticles={entertainmentArticles} />
        </div>

        {/* Right Side - Archive & Search (1/3) */}
        <div className="sidebar-content">
          <ArchiveSearchSection theme={theme} allArticles={allArticles} />
        </div>
      </div>
    </section>
  );
};

export default EntertainmentWithSidebar;
