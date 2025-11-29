
// Modified this line
// const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

// Added this new configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

// Helper function to make requests
const makeRequest = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    return await handleResponse(response);
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

// Helper function to build query parameters
const buildQueryParams = (params) => {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      queryParams.append(key, value.toString());
    }
  });

  return queryParams.toString();
};

// Get all articles with pagination
export const getAllArticles = async (paginationParams = {}) => {
  const {
    page = 1, limit = 10, sort = 'createdAt', order = 'desc', search = ''
  } = paginationParams;

  const queryParams = buildQueryParams({ page, limit, sort, order, search });

  const url = `${API_BASE_URL}/articles${queryParams ? `?${queryParams}` : ''}`;
  return await makeRequest(url);
};


// Get article by ID
export const getArticleById = async (id) => {
  if (!id) {
    throw new Error('Article ID is required');
  }
  return await makeRequest(`${API_BASE_URL}/articles/${id}`);
};

// Get articles by section with pagination
export const getArticlesBySection = async (section, paginationParams = {}) => {
  if (!section) {
    throw new Error('Section is required');
  }

  const {
    page = 1, limit = 10, sort = 'createdAt', order = 'desc', search = ''
  } = paginationParams;

  const queryParams = buildQueryParams({ page, limit, sort, order, search });

  const url = `${API_BASE_URL}/articles/section/${encodeURIComponent(section)}${queryParams ? `?${queryParams}` : ''}`;
  return await makeRequest(url);
};

// Get articles by tag with pagination
export const getArticlesByTag = async (tag, paginationParams = {}) => {
  if (!tag) {
    throw new Error('Tag is required');
  }

  const {
    page = 1, limit = 10, sort = 'createdAt', order = 'desc', search = ''
  } = paginationParams;

  const queryParams = buildQueryParams({ page, limit, sort, order, search });

  const url = `${API_BASE_URL}/articles/tag/${encodeURIComponent(tag)}${queryParams ? `?${queryParams}` : ''}`;
  return await makeRequest(url);
};

// Create new article
export const createArticle = async (articleData) => {
  const { title, description, section, content, tag } = articleData;

  if (!title || !description || !section || !content) {
    throw new Error('Title, description, section, and content are required');
  }

  return await makeRequest(`${API_BASE_URL}/articles`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      description,
      section,
      content,
      tag: tag || null,
    }),
  });
};

// Update article
export const updateArticle = async (id, articleData) => {
  if (!id) {
    throw new Error('Article ID is required');
  }

  return await makeRequest(`${API_BASE_URL}/articles/${id}`, {
    method: 'PUT',
    body: JSON.stringify(articleData),
  });
};

// Delete article
export const deleteArticle = async (id) => {
  if (!id) {
    throw new Error('Article ID is required');
  }

  return await makeRequest(`${API_BASE_URL}/articles/${id}`, {
    method: 'DELETE',
  });
};

// Export all functions as an object for convenience
export const articleService = {
  getAllArticles,
  getArticleById,
  getArticlesBySection,
  getArticlesByTag,
  createArticle,
  updateArticle,
  deleteArticle,
};
