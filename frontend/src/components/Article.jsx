import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaClock, FaEdit } from 'react-icons/fa';
import { HiOutlineShare } from 'react-icons/hi'; // New elegant share icon

import ShareModal from './ShareModal';
import { useAuth } from '../context/AuthContext';
import DateTime from '../lib/date_time';
import isEmpty from '../lib/is_empty';
import NotFoundPage from '../pages/NotFoundPage';
import { articleService } from '../services/articleServices';
import './Article.css';

const Article = ({ theme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  const { isAdmin, isAuthenticated } = useAuth();

  const [article, setArticle] = useState(location.state?.article);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (isEmpty(article)){
      if (isEmpty(params?.id)){
        setShowError(true);
      } else {
        if (isEmpty(params?.section)){
          articleService.getArticleById(params.id)
            .then((res) => {
              if (res.success){
                setArticle(res.data);
              } else {
                setShowError(true);
              }
            })
            .catch((err) => {
              setShowError(true);
            });
        } else {
          articleService.getArticleBySectionId(params.section, params.id)
            .then((res) => {
              if (res.success){
                setArticle(res.data);
              } else {
                setShowError(true);
              }
            })
            .catch((err) => {
              console.log(err);

              setShowError(true);
            });
        }
      }
    }
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    navigate(`/${article.id}/edit`, { state: { article } });
  };

  const handleShareClick = () => {
    setIsShareModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsShareModalOpen(false);
  };

  const articleUrl = window.location.href;

  if (isEmpty(article) && !showError){
    return <span>Loading...</span>;
  }

  if (showError){
    return <NotFoundPage />
  }

  return (
    <div className={`article-page ${theme}`}>
      <div className="article-container">
        <div className="article-header-buttons">
          {/* Back Button */}
          <button className="back-button" onClick={handleBack}>
            <FaArrowLeft /> Back
          </button>

          {isAdmin && isAuthenticated && (
            <button className="edit-button" onClick={handleEdit}>
              <FaEdit /> Edit
            </button>
          )}
        </div>

        {/* Article Header */}
        <div className="article-header">
          {article.tag && (
            <span className="article-badge">{article.tag}</span>
          )}
          <h1 className="article-main-title">{article.title}</h1>

          <div className="article-meta-info">
            <div className="meta-item">
              {/* <FaUser className="meta-icon" /> */}
              {/* <span>{article.author}</span> */}
              <p className="article-description">{article.description}</p>
            </div>
          </div>
          <div className="article-meta-info">
            <div className="meta-item">
              <FaClock className="meta-icon" />
              <span>{DateTime.formatDate(article.created_at, { showYear: true })}</span>
            </div>
            <div className="meta-item category-badge">
              {article.section}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />

        {/* Share Section with Elegant Icon */}
        <div className="article-share" onClick={handleShareClick}>
          <HiOutlineShare className="share-icon" />
          <span>Share this article</span>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={handleCloseModal}
        articleUrl={articleUrl}
        articleTitle={article.title}
        theme={theme}
      />
    </div>
  );
};

export default Article;
