import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Article1 from './pages/Article1';
import Article2 from './pages/Article2';
import Article3 from './pages/Article3';
import Article4 from './pages/Article4';
import Article5 from './pages/Article5';
import './App.css';

function App() {
=======
import Navbar from './components/Navbar';
import './App.css';
import Header from './components/Header';

function App() {
  // Initialize theme from localStorage or default to 'dark'
>>>>>>> 84496a77925cb4d239ac4055b4c7a85d79740003
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

<<<<<<< HEAD
=======
  // Toggle theme function
>>>>>>> 84496a77925cb4d239ac4055b4c7a85d79740003
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

<<<<<<< HEAD
=======
  // Save theme to localStorage and apply to body
>>>>>>> 84496a77925cb4d239ac4055b4c7a85d79740003
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
<<<<<<< HEAD
    <Router>
      <div className={`App ${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage theme={theme} />} />
          <Route path="/article/1" element={<Article1 theme={theme} />} />
          <Route path="/article/2" element={<Article2 theme={theme} />} />
          <Route path="/article/3" element={<Article3 theme={theme} />} />
          <Route path="/article/4" element={<Article4 theme={theme} />} />
          <Route path="/article/5" element={<Article5 theme={theme} />} />
        </Routes>
      </div>
    </Router>
=======
    <div className={`App ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <Header theme={theme} />
    </div>
>>>>>>> 84496a77925cb4d239ac4055b4c7a85d79740003
  );
}

export default App;
