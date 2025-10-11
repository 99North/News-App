// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './EntertainmentSection.css';

// const EntertainmentSection = ({ theme, entertainmentArticles = [] }) => {
//   const navigate = useNavigate();

//   // Get first 4 articles from Entertainment
//   const displayArticles = entertainmentArticles.slice(0, 4);

//   const handleArticleClick = (route) => {
//     navigate(route);
//   };

//   return (
//     <section className={`entertainment-section ${theme}`}>
//       <div className="entertainment-container">
//         {/* Section Header (Odisha style with red lines) */}
//         <div className="entertainment-header">
//           <div className="entertainment-line"></div>
//           <h2 className="entertainment-title">Entertainment</h2>
//           <div className="entertainment-line"></div>
//         </div>

//         {/* Entertainment Articles List */}
//         <div className="entertainment-articles-list">
//           {displayArticles.map((article) => (
//             <div 
//               key={article.id} 
//               className="entertainment-card"
//               onClick={() => handleArticleClick(article.route)}
//             >
//               {/* Article Image */}
//               <div className="entertainment-card-image">
//                 <img src={article.image} alt={article.title} />
//                 {article.badge && (
//                   <span className="entertainment-badge">{article.badge}</span>
//                 )}
//               </div>

//               {/* Article Content */}
//               <div className="entertainment-card-content">
//                 {/* Article Title */}
//                 <h3 className="entertainment-card-title">{article.title}</h3>

//                 {/* Category & Date */}
//                 <div className="entertainment-meta">
//                   <span className="entertainment-category">{article.category}</span>
//                   <span className="entertainment-date">{article.date}</span>
//                 </div>

//                 {/* Article Excerpt */}
//                 <p className="entertainment-card-excerpt">{article.excerpt}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EntertainmentSection;

























//new code
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EntertainmentSection.css';
import { FaArrowRight } from 'react-icons/fa';

const EntertainmentSection = ({ theme, entertainmentArticles = [] }) => {
  const navigate = useNavigate();

  // Get top 6 articles from Entertainment menu
  const displayArticles = entertainmentArticles.slice(0, 6);

  const handleReadMore = (route) => {
    navigate(route);
  };

  return (
    <section className={`entertainment-section ${theme}`}>
      <div className="entertainment-container">
        {/* Section Header with red lines (like Odisha section) */}
        <div className="entertainment-header">
          <div className="entertainment-line"></div>
          <h2 className="entertainment-title">Entertainment</h2>
          <div className="entertainment-line"></div>
        </div>

        {/* Entertainment Cards Grid - 3 columns x 2 rows = 6 cards */}
        <div className="entertainment-cards-grid">
          {displayArticles.map((article) => (
            <div 
              key={article.id} 
              className="entertainment-card"
            >
              {/* Premium Badge */}
              {article.badge && (
                <span className="entertainment-badge">{article.badge}</span>
              )}

              {/* Article Title */}
              <h3 className="entertainment-card-title">{article.title}</h3>

              {/* Article Meta */}
              <div className="entertainment-card-meta">
                <span className="entertainment-card-category">{article.category}</span>
                <span className="entertainment-card-date">{article.date}</span>
              </div>

              {/* Article Excerpt */}
              <p className="entertainment-card-excerpt">{article.excerpt}</p>

              {/* Read More Button */}
              <button 
                className="entertainment-read-more"
                onClick={() => handleReadMore(article.route)}
              >
                Read More <FaArrowRight className="arrow-icon" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntertainmentSection;

