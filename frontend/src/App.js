import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Footer from "./components/Footer.jsx";
// NOTE: Uncomment next line when we add signup functionality - RKS
// import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LogInPage.jsx";
import PostEditor from "./pages/PostEditor.jsx";
import Section from "./components/Section";
import Article from "./components/Article.jsx";

const MAIN_ROUTES = [
  "odisha",
  "national",
  "international",
  "environment",
  "education",
  "health",
];

// Component to handle Footer visibility
function AppContent({ theme, toggleTheme }) {
  const location = useLocation();

  // Check if current page is NOT 404
  const showFooter =
    location.pathname === "/" ||
    location.pathname.startsWith("/odisha") ||
    location.pathname.startsWith("/national") ||
    location.pathname.startsWith("/international") ||
    location.pathname.startsWith("/entertainment") ||
    location.pathname.startsWith("/jobs") ||
    location.pathname.startsWith("/education") ||
    location.pathname.startsWith("/health") ||
    location.pathname.startsWith("/environment") ||
    location.pathname.startsWith("/article");

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="main-container">
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage theme={theme} />} />

          {/* Category Routes */}
          {MAIN_ROUTES.map((route) => (
            <Route
              key={route}
              path={`/${route}`}
              element={<Section section={route} theme={theme} />}
            />
          ))}

          {/* <Route path="/:id" element={<Article theme={theme} />} /> */}

          <Route
            path="/:id/edit"
            element={
              <ProtectedRoute>
                <PostEditor theme={theme} />
              </ProtectedRoute>
            }
          />

          <Route path={`/:section/:id`} element={<Article theme={theme} />} />

          {/* Auth Routes */}
          {/* NOTE: Uncomment next line when we add signup functionality - RKS */}
          {/* <Route path="/signup" element={<ProtectedRoute><SignUpPage theme={theme} /></ProtectedRoute>} /> */}
          <Route path="/login" element={<LoginPage theme={theme} />} />
          <Route path="/post-editor" element={<PostEditor theme={theme} />} />

          {/* 404 Route - Must be LAST */}
          <Route path="*" element={<NotFoundPage theme={theme} />} />
        </Routes>
      </main>

      {/* Conditionally render Footer - NOT on 404 page */}
      {showFooter && <Footer theme={theme} />}
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <AppContent theme={theme} toggleTheme={toggleTheme} />
      </AuthProvider>
    </Router>
  );
}

export default App;
