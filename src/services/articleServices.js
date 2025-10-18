const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const createArticle = async (articleData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(articleData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating article:', error);
    throw error;
  }
};
