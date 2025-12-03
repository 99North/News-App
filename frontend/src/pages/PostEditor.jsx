import React, { useState, useRef, useEffect } from 'react';
import './PostEditor.css';
import {
  FaBold, FaItalic, FaUnderline, FaStrikethrough,
  FaListUl, FaListOl, FaAlignLeft, FaAlignCenter,
  FaAlignRight, FaLink, FaImage, FaTimes, FaEye,
  FaPaperPlane, FaQuoteLeft, FaCode, FaAlignJustify, FaPalette
} from 'react-icons/fa';

import { createArticle, updateArticle } from '../services/articleServices';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PostEditor({ theme }){
  const location = useLocation();
  const navigate = useNavigate();

  const { article = {} } = location.state || {};

  const [postTitle, setPostTitle] = useState(article.title || '');
  const [postDescription, setPostDescription] = useState(article.description || '');
  const [postSection, setPostSection] = useState(article.section || '');
  const [selectedTag, setSelectedTag] = useState(article.tag || '');
  const [editorContent, setEditorContent] = useState(article.content || '');
  const [selectedImages, setSelectedImages] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFontFamily, setSelectedFontFamily] = useState('');

  const editorRef = useRef(null);

  // Available sections from navbar
  const sections = [
    'Odisha',
    'National',
    'International',
    'Entertainment',
    'Jobs',
    'Education',
    'Astrospeak',
    'Health',
    'Environment'
  ];

  const { isAuthenticated, isAdmin, loading } = useAuth();

  useEffect(() => {
    // !loading && (!isAuthenticated || !isAdmin) && navigate('/login');
  }, [isAuthenticated, isAdmin, loading]);

  // Prefill the editor with article content when component mounts or article changes
  useEffect(() => {
    if (editorRef.current) {
      if (article.content) {
        editorRef.current.innerHTML = article.content;
        setEditorContent(article.content);
      } else {
        editorRef.current.innerHTML = '';
        setEditorContent('');
      }
    }
  }, [article.content]);

  // Rich Text Editor Commands
  const executeCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const handleEditorInput = () => {
    if (editorRef.current) {
      setEditorContent(editorRef.current.innerHTML);
    }
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      executeCommand('createLink', url);
    }
  };

  const insertImageInEditor = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      executeCommand('insertImage', url);
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setSelectedImages([...selectedImages, ...imageUrls]);
  };

  const removeImage = (index) => {
    const newImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(newImages);
  };

  const handlePreview = () => {
    if (!postTitle || !postDescription || !postSection || !editorContent) {
      alert('Please fill in Post Title, Description, Section, and Content before previewing!');
      return;
    }
    setShowPreview(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!postTitle || !postDescription || !postSection || !editorContent) {
      alert('Please fill in all required fields!');
      setIsSubmitting(false);
      return;
    }

    const postData = {
      title: postTitle,
      description: postDescription,
      section: postSection,
      content: editorContent,
      tag: selectedTag || 'None',
      images: selectedImages,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
    };

    try {
      const response = article.id
        ? await updateArticle(article.id, postData)
        : await createArticle(postData);

      if (response.success) {
        alert(`Post ${article.id ? 'updated' : 'submitted'} successfully to ${postSection} section!`);

        // Only reset form if creating new article
        if (!article.id) {
          setPostTitle('');
          setPostDescription('');
          setPostSection('');
          setEditorContent('');
          setSelectedTag('');
          setSelectedImages([]);

          if (editorRef.current) {
            editorRef.current.innerHTML = '';
          }
        }
      } else {
        throw new Error(response.message || `Failed to ${article.id ? 'update' : 'create'} article`);
      }
    } catch (error) {
      console.error('Error submitting post:', error);
      alert(`Error submitting post: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Font Size Dropdown Handler
  const handleFontSizeChange = (size) => {
    if (size) {
      const fontSizeValue = Math.min(7, Math.max(1, Math.round(size / 5)));
      executeCommand("fontSize", fontSizeValue.toString());
    }
  };

  const handleFontFamily = (family) => {
    setSelectedFontFamily(family);
    executeCommand("fontName", family);
  };

  // Color picker handlers
  const handleFontColorChange = (color) => {
    executeCommand('foreColor', color);
  };

  const handleBackgroundColorChange = (color) => {
    executeCommand('backColor', color);
  };

  return (
    <div className={`post-editor-page ${theme}`}>
      <div className="editor-container">
        <div className="editor-header">
          <h1 className="editor-title">
            {article.id ? 'Edit Post' : 'Create New Post'}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="editor-form">
          {/* Post Title Input */}
          <div className="form-section">
            <label htmlFor="post-title" className="form-label">
              Post Title <span className="required">*</span>
            </label>
            <input
              type="text"
              id="post-title"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              placeholder="Enter your post title..."
              className="form-input"
              required
            />
          </div>

          {/* Post Description Input */}
          <div className="form-section">
            <label htmlFor="post-description" className="form-label">
              Post Description <span className="required">*</span>
            </label>
            <textarea
              id="post-description"
              value={postDescription}
              onChange={(e) => setPostDescription(e.target.value)}
              placeholder="Enter a brief description of your post..."
              className="form-textarea"
              rows="4"
              required
            />
          </div>

          {/* Post Section Dropdown */}
          <div className="form-section">
            <label htmlFor="post-section" className="form-label">
              Post Section <span className="required">*</span>
            </label>
            <select
              id="post-section"
              value={postSection}
              onChange={(e) => setPostSection(e.target.value)}
              className="form-select"
              required
            >
              <option value="">Select Section</option>
              {sections.map((section) => (
                <option key={section} value={section}>
                  {section}
                </option>
              ))}
            </select>
            <p className="helper-text">Choose which section this post will appear in</p>
          </div>

          {/* Tags Dropdown */}
          <div className="form-section">
            <label htmlFor="post-tags" className="form-label">
              Tags
            </label>
            <select
              id="post-tags"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="form-select"
            >
              <option value="">Select Tag (Optional)</option>
              <option value="LATEST">Latest</option>
              <option value="TRENDING">Trending</option>
            </select>
          </div>

          {/* Custom Rich Text Editor */}
          <div className="editor-section">
            <label className="form-label">
              Content <span className="required">*</span>
            </label>

            {/* Toolbar */}
            <div className="custom-toolbar">
              {/* Text Formatting */}
              <div className="toolbar-group">
                <button
                  type="button"
                  onClick={() => executeCommand('bold')}
                  className="toolbar-btn"
                  title="Bold"
                >
                  <FaBold />
                </button>
                <button
                  type="button"
                  onClick={() => executeCommand('italic')}
                  className="toolbar-btn"
                  title="Italic"
                >
                  <FaItalic />
                </button>
                <button
                  type="button"
                  onClick={() => executeCommand('underline')}
                  className="toolbar-btn"
                  title="Underline"
                >
                  <FaUnderline />
                </button>
                <button
                  type="button"
                  onClick={() => executeCommand('strikeThrough')}
                  className="toolbar-btn"
                  title="Strikethrough"
                >
                  <FaStrikethrough />
                </button>
              </div>

              {/* Font Size Dropdown (8-30) */}
              <div className="toolbar-group">
                <select
                  className="toolbar-select"
                  onChange={(e) => handleFontSizeChange(e.target.value)}
                  defaultValue=""
                >
                  <option value="">Font Size</option>
                  <option value="8">8px</option>
                  <option value="10">10px</option>
                  <option value="12">12px</option>
                  <option value="14">14px</option>
                  <option value="16">16px</option>
                  <option value="18">18px</option>
                  <option value="20">20px</option>
                  <option value="22">22px</option>
                  <option value="24">24px</option>
                  <option value="26">26px</option>
                  <option value="28">28px</option>
                  <option value="30">30px</option>
                </select>
              </div>

              {/* Font Family */}
              <div className="toolbar-group">
                <select
                  className="toolbar-select"
                  value={selectedFontFamily}
                  onChange={(e) => handleFontFamily(e.target.value)}
                >
                  <option value="">Font Family</option>
                  <option value="Arial">Arial</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Courier New">Courier New</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Verdana">Verdana</option>
                </select>
              </div>

              {/* Color Controls - FC & BC */}
              <div className="toolbar-group">
                <label className="toolbar-label">FC</label>
                <input
                  type="color"
                  className="toolbar-color"
                  onChange={(e) => handleFontColorChange(e.target.value)}
                  title="Font Color"
                />
                <label className="toolbar-label">BC</label>
                <input
                  type="color"
                  className="toolbar-color"
                  onChange={(e) => handleBackgroundColorChange(e.target.value)}
                  title="Background Color"
                />
              </div>

              {/* Lists */}
              <div className="toolbar-group">
                <button
                  type="button"
                  onClick={() => executeCommand('insertUnorderedList')}
                  className="toolbar-btn"
                  title="Bullet List"
                >
                  <FaListUl />
                </button>
                <button
                  type="button"
                  onClick={() => executeCommand('insertOrderedList')}
                  className="toolbar-btn"
                  title="Numbered List"
                >
                  <FaListOl />
                </button>
              </div>

              {/* Alignment + Justify */}
              <div className="toolbar-group">
                <button
                  type="button"
                  onClick={() => executeCommand('justifyLeft')}
                  className="toolbar-btn"
                  title="Align Left"
                >
                  <FaAlignLeft />
                </button>
                <button
                  type="button"
                  onClick={() => executeCommand('justifyCenter')}
                  className="toolbar-btn"
                  title="Align Center"
                >
                  <FaAlignCenter />
                </button>
                <button
                  type="button"
                  onClick={() => executeCommand('justifyRight')}
                  className="toolbar-btn"
                  title="Align Right"
                >
                  <FaAlignRight />
                </button>
                <button
                  type="button"
                  onClick={() => executeCommand('justifyFull')}
                  className="toolbar-btn"
                  title="Justify"
                >
                  <FaAlignJustify/>
                 
                </button>
              </div>

              {/* Insert Elements */}
              <div className="toolbar-group">
                <button
                  type="button"
                  onClick={insertLink}
                  className="toolbar-btn"
                  title="Insert Link"
                >
                  <FaLink />
                </button>
                <button
                  type="button"
                  onClick={insertImageInEditor}
                  className="toolbar-btn"
                  title="Insert Image"
                >
                  <FaImage />
                </button>
              </div>

              {/* Special Formatting */}
              <div className="toolbar-group">
                <button
                  type="button"
                  onClick={() => executeCommand('formatBlock', 'blockquote')}
                  className="toolbar-btn"
                  title="Quote"
                >
                  <FaQuoteLeft />
                </button>
                <button
                  type="button"
                  onClick={() => executeCommand('formatBlock', 'pre')}
                  className="toolbar-btn"
                  title="Code Block"
                >
                  <FaCode />
                </button>
              </div>
            </div>

            {/* Editable Content Area */}
            <div
              ref={editorRef}
              className="custom-editor"
              contentEditable
              onInput={handleEditorInput}
              data-placeholder="Write your content here..."
            />
          </div>

          {/* Image Upload Section */}
          <div className="form-section">
            {/* Preview Uploaded Images */}
            {selectedImages.length > 0 && (
              <div className="image-preview-grid">
                {selectedImages.map((img, index) => (
                  <div key={index} className="preview-image-wrapper">
                    <img src={img} alt={`Preview ${index + 1}`} className="preview-image" />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="remove-image-btn"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="form-actions">
            <button
              type="button"
              onClick={handlePreview}
              className="preview-btn"
              disabled={isSubmitting}
            >
              <FaEye /> Preview Post
            </button>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              <FaPaperPlane /> {isSubmitting ? 'Submitting...' : (article.id ? 'Update Post' : 'Submit Post')}
            </button>
          </div>
        </form>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="preview-modal-overlay" onClick={() => setShowPreview(false)}>
          <div className="preview-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setShowPreview(false)}
            >
              <FaTimes />
            </button>

            <div className="modal-content">
              <div className="preview-header">
                <h2 className="preview-title-heading">Post Preview</h2>
                <div className="preview-badges">
                  {postSection && (
                    <span className="preview-section-badge">{postSection}</span>
                  )}
                  {selectedTag && (
                    <span className="preview-tag-badge">{selectedTag}</span>
                  )}
                </div>
              </div>

              <article className="preview-article">
                <h1 className="preview-post-title">{postTitle}</h1>

                <p className="preview-post-description">{postDescription}</p>

                {selectedImages.length > 0 && (
                  <div className="article-featured-image">
                    <img src={selectedImages[0]} alt="Featured" />
                  </div>
                )}

                <div
                  className="preview-post-content"
                  dangerouslySetInnerHTML={{ __html: editorContent }}
                />

                {selectedImages.length > 1 && (
                  <div className="preview-image-gallery">
                    {selectedImages.slice(1).map((img, index) => (
                      <img key={index} src={img} alt={`Gallery ${index + 1}`} />
                    ))}
                  </div>
                )}

                <div className="preview-footer">
                  <p className="preview-date">
                    Published: {new Date().toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostEditor;
