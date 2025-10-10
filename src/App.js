import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Article1 from './pages/Article1';
import Article2 from './pages/Article2';
import Article3 from './pages/Article3';
import Article4 from './pages/Article4';
import Article5 from './pages/Article5';
import Article6 from './pages/Article6';
import Article7 from './pages/Article7';
import Article8 from './pages/Article8';
import Article9 from './pages/Article9';
import Article10 from './pages/Article10';
import Article11 from './pages/Article11';
import Article12 from './pages/Article12';
import Article13 from './pages/Article13';
import Article14 from './pages/Article14';
import Article15 from './pages/Article15';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
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
          <Route path="/article/6" element={<Article6 theme={theme} />} />
          <Route path="/article/7" element={<Article7 theme={theme} />} />
          <Route path="/article/8" element={<Article8 theme={theme} />} />
          <Route path="/article/9" element={<Article9 theme={theme} />} />
          <Route path="/article/10" element={<Article10 theme={theme} />} />
          <Route path="/article/11" element={<Article11 theme={theme} />} />
          <Route path="/article/12" element={<Article12 theme={theme} />} />
          <Route path="/article/13" element={<Article13 theme={theme} />} />
          <Route path="/article/14" element={<Article14 theme={theme} />} />
          <Route path="/article/15" element={<Article15 theme={theme} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
