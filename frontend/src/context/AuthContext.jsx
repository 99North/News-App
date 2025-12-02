import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Modified this line
// const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

//New changes added
const API_BASE_URL = (
  (window._env_ && window._env_.REACT_APP_API_URL)
  || process.env.REACT_APP_API_URL
  || '/api'
);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  // Set token in localStorage and state
  const saveToken = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  // Remove token from localStorage and state
  const removeToken = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  // API request helper with authentication
  const apiRequest = async (endpoint, options = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return data;
    } catch (error) {
      console.error('API request error:', error);
      throw error;
    }
  };

  // Login function
  const login = async (emailOrUsername, password) => {
    try {
      setLoading(true);
      const data = await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ emailOrUsername, password }),
      });

      saveToken(data.token);
      setUser(data.user);

      return data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      setLoading(true);
      const data = await apiRequest('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData),
      });

      return data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await apiRequest('/auth/logout', { method: 'POST' });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      removeToken();
      setUser(null);
      navigate('/');
    }
  };

  // Get current user profile
  const getCurrentUser = async () => {
    try {
      const data = await apiRequest('/auth/profile');
      setUser(data.user);
      return data.user;
    } catch (error) {
      console.error('Get current user error:', error);
      removeToken();
      setUser(null);
      throw error;
    }
  };

  // Check authentication status on app load
  useEffect(() => {
    const checkAuth = async () => {
      if (token) {
        try {
          await getCurrentUser();
        } catch (error) {
          console.error('Auth check failed:', error);
          removeToken();
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, [token]);

  // Helper functions
  const isAuthenticated = () => !!user && !!token;
  const hasRole = (role) => user?.role === role;
  const isAdmin = () => hasRole('admin');

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    getCurrentUser,
    isAuthenticated: isAuthenticated(),
    hasRole,
    isAdmin: isAdmin(),
    apiRequest,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
