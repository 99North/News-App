import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CategoryPage from './components/CategoryPage';

// Import all article pages
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

// Import category articles
import OdishaArticle1 from './pages/OdishaArticle1';
import OdishaArticle2 from './pages/OdishaArticle2';
import NationalArticle1 from './pages/NationalArticle1';
import NationalArticle2 from './pages/NationalArticle2';
import InternationalArticle1 from './pages/InternationalArticle1';
import InternationalArticle2 from './pages/InternationalArticle2';
import EntertainmentArticle1 from './pages/EntertainmentArticle1';
import EntertainmentArticle2 from './pages/EntertainmentArticle2';
import JobsArticle1 from './pages/JobsArticle1';
import JobsArticle2 from './pages/JobsArticle2';
import EducationArticle1 from './pages/EducationArticle1';
import EducationArticle2 from './pages/EducationArticle2';
import AstrospeakArticle1 from './pages/AstrospeakArticle1';
import AstrospeakArticle2 from './pages/AstrospeakArticle2';
import HealthArticle1 from './pages/HealthArticle1';
import HealthArticle2 from './pages/HealthArticle2';
import EnvironmentArticle1 from './pages/EnvironmentArticle1';
import EnvironmentArticle2 from './pages/EnvironmentArticle2';

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

  // Category data for each section
  const categoryData = {
    odisha: {
      name: 'Odisha',
      description: 'Latest news and updates from Odisha state',
      articles: [
        {
          id: 1,
          title: 'Bhubaneswar Smart City Project Wins International Recognition',
          excerpt: 'Capital city awarded Global Smart City Award for innovative urban planning...',
          category: 'ODISHA',
          date: 'March 10, 2022',
          image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80',
          badge: 'PREMIUM',
          route: '/odisha/article1'
        },
        {
          id: 2,
          title: 'Odisha Becomes Leader in Renewable Energy with Massive Solar Park',
          excerpt: 'State inaugurates India\'s largest solar park with 2,000 MW capacity...',
          category: 'ODISHA',
          date: 'March 11, 2022',
          image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
          badge: null,
          route: '/odisha/article2'
        },
        {
          id: 3,
          title: 'Konark Sun Temple Restoration Project Completed Successfully',
          excerpt: 'Historic temple undergoes major restoration work preserving ancient architecture...',
          category: 'ODISHA',
          date: 'March 12, 2022',
          image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80',
          badge: 'PREMIUM',
          route: '/odisha/article1'
        },
        {
          id: 4,
          title: 'Odisha Launches Digital Healthcare Initiative for Rural Areas',
          excerpt: 'Telemedicine program connects remote villages with specialist doctors...',
          category: 'ODISHA',
          date: 'March 13, 2022',
          image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
          badge: null,
          route: '/odisha/article2'
        },
        {
          id: 5,
          title: 'Chilika Lake Conservation Efforts Show Remarkable Results',
          excerpt: 'Asia\'s largest brackish water lagoon sees biodiversity increase by 40%...',
          category: 'ODISHA',
          date: 'March 14, 2022',
          image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80',
          badge: 'PREMIUM',
          route: '/odisha/article1'
        },
        {
          id: 6,
          title: 'Odisha IT Park Attracts Major Global Tech Companies',
          excerpt: 'State emerges as new IT destination with infrastructure rivaling Bengaluru...',
          category: 'ODISHA',
          date: 'March 15, 2022',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
          badge: null,
          route: '/odisha/article2'
        },
        // Placeholder articles (24 more for pagination)
        ...Array(24).fill(null).map((_, i) => ({
          id: i + 7,
          title: `Odisha Development Story ${i + 7}`,
          excerpt: 'Ongoing developments transforming the state...',
          category: 'ODISHA',
          date: 'March ' + (16 + i) + ', 2022',
          image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80',
          badge: i % 3 === 0 ? 'PREMIUM' : null,
          route: i < 2 ? `/odisha/article${i + 1}` : '/'
        }))
      ]
    },
    national: {
      name: 'National',
      description: 'Breaking news from across India',
      articles: [
        {
          id: 1,
          title: 'India Becomes Third Largest Economy Overtaking Japan and Germany',
          excerpt: 'Historic milestone as GDP surpasses $5 trillion mark...',
          category: 'NATIONAL',
          date: 'March 12, 2022',
          image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80',
          badge: 'PREMIUM',
          route: '/national/article1'
        },
        {
          id: 2,
          title: 'Digital India Reaches Milestone with 1 Billion Internet Users',
          excerpt: 'Country achieves remarkable digital connectivity milestone...',
          category: 'NATIONAL',
          date: 'March 13, 2022',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
          badge: null,
          route: '/national/article2'
        },
        ...Array(28).fill(null).map((_, i) => ({
          id: i + 3,
          title: `National Development Update ${i + 3}`,
          excerpt: 'Progress across various sectors nationwide...',
          category: 'NATIONAL',
          date: 'March ' + (14 + i) + ', 2022',
          image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80',
          badge: i % 3 === 0 ? 'PREMIUM' : null,
          route: i < 2 ? `/national/article${i + 1}` : '/'
        }))
      ]
    },
    international: {
      name: 'International',
      description: 'Global news and international affairs',
      articles: [
        {
          id: 1,
          title: 'Global Leaders Reach Historic Climate Agreement at Summit',
          excerpt: 'Nearly 200 nations commit to unprecedented climate action...',
          category: 'INTERNATIONAL',
          date: 'March 14, 2022',
          image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=600&q=80',
          badge: 'PREMIUM',
          route: '/international/article1'
        },
        {
          id: 2,
          title: 'European Union Announces Ambitious Digital Currency Initiative',
          excerpt: 'ECB launches digital euro project for 340 million citizens...',
          category: 'INTERNATIONAL',
          date: 'March 15, 2022',
          image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&q=80',
          badge: null,
          route: '/international/article2'
        },
        ...Array(28).fill(null).map((_, i) => ({
          id: i + 3,
          title: `Global Affairs Report ${i + 3}`,
          excerpt: 'International developments and diplomatic relations...',
          category: 'INTERNATIONAL',
          date: 'March ' + (16 + i) + ', 2022',
          image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=600&q=80',
          badge: i % 3 === 0 ? 'PREMIUM' : null,
          route: i < 2 ? `/international/article${i + 1}` : '/'
        }))
      ]
    },
    entertainment: {
      name: 'Entertainment',
      description: 'Latest from movies, music, and celebrities',
      articles: [
        {
          id: 1,
          title: 'Bollywood Film Breaks Global Box Office Records Worldwide',
          excerpt: 'Epic drama "Samrat" earns $850 million globally...',
          category: 'ENTERTAINMENT',
          date: 'March 16, 2022',
          image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80',
          badge: 'PREMIUM',
          route: '/entertainment/article1'
        },
        {
          id: 2,
          title: 'Streaming Platforms Invest $5 Billion in Regional Content',
          excerpt: 'Major platforms commit to diverse language productions...',
          category: 'ENTERTAINMENT',
          date: 'March 17, 2022',
          image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&q=80',
          badge: null,
          route: '/entertainment/article2'
        },
        ...Array(28).fill(null).map((_, i) => ({
          id: i + 3,
          title: `Entertainment Buzz ${i + 3}`,
          excerpt: 'Latest happenings in entertainment world...',
          category: 'ENTERTAINMENT',
          date: 'March ' + (18 + i) + ', 2022',
          image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80',
          badge: i % 3 === 0 ? 'PREMIUM' : null,
          route: i < 2 ? `/entertainment/article${i + 1}` : '/'
        }))
      ]
    },
    jobs: {
      name: 'Jobs',
      description: 'Career opportunities and employment news',
      articles: [
        {
          id: 1,
          title: 'Tech Sector Creates 2 Million Jobs Amid Digital Transformation',
          excerpt: 'Massive hiring drive across IT and technology companies...',
          category: 'JOBS',
          date: 'March 18, 2022',
          image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80',
          badge: 'PREMIUM',
          route: '/jobs/article1'
        },
        {
          id: 2,
          title: 'Government Launches Massive Skill Development Program',
          excerpt: 'Initiative to train 10 million youth in industry-relevant skills...',
          category: 'JOBS',
          date: 'March 19, 2022',
          image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
          badge: null,
          route: '/jobs/article2'
        },
        ...Array(28).fill(null).map((_, i) => ({
          id: i + 3,
          title: `Career Opportunity ${i + 3}`,
          excerpt: 'Exciting job openings across sectors...',
          category: 'JOBS',
          date: 'March ' + (20 + i) + ', 2022',
          image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80',
          badge: i % 3 === 0 ? 'PREMIUM' : null,
          route: i < 2 ? `/jobs/article${i + 1}` : '/'
        }))
      ]
    },
    education: {
      name: 'Education',
      description: 'Educational news, updates, and opportunities',
      articles: [
        {
          id: 1,
          title: 'New Education Policy Transforms Indian Schools',
          excerpt: 'NEP 2020 implementation brings holistic learning approach...',
          category: 'EDUCATION',
          date: 'March 20, 2022',
          image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
          badge: 'PREMIUM',
          route: '/education/article1'
        },
        {
          id: 2,
          title: 'IITs Expand Capacity to Train 100,000 Engineers Annually',
          excerpt: 'Massive expansion of premier technical institutions...',
          category: 'EDUCATION',
          date: 'March 21, 2022',
          image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80',
          badge: null,
          route: '/education/article2'
        },
        ...Array(28).fill(null).map((_, i) => ({
          id: i + 3,
          title: `Education Update ${i + 3}`,
          excerpt: 'Latest developments in education sector...',
          category: 'EDUCATION',
          date: 'March ' + (22 + i) + ', 2022',
          image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
          badge: i % 3 === 0 ? 'PREMIUM' : null,
          route: i < 2 ? `/education/article${i + 1}` : '/'
        }))
      ]
    },
    astrospeak: {
      name: 'Astrospeak',
      description: 'Astrology, cosmic events, and spiritual insights',
      articles: [
        {
          id: 1,
          title: 'Ancient Vedic Astronomy Validated by Modern Discoveries',
          excerpt: 'Scientific observations confirm ancient astronomical predictions...',
          category: 'ASTROSPEAK',
          date: 'March 22, 2022',
          image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80',
          badge: 'PREMIUM',
          route: '/astrospeak/article1'
        },
        {
          id: 2,
          title: 'Rare Planetary Alignment Brings Auspicious Period',
          excerpt: 'Five-planet alignment creates unique astrological significance...',
          category: 'ASTROSPEAK',
          date: 'March 23, 2022',
          image: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=600&q=80',
          badge: null,
          route: '/astrospeak/article2'
        },
        ...Array(28).fill(null).map((_, i) => ({
          id: i + 3,
          title: `Cosmic Insights ${i + 3}`,
          excerpt: 'Astrological predictions and celestial events...',
          category: 'ASTROSPEAK',
          date: 'March ' + (24 + i) + ', 2022',
          image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80',
          badge: i % 3 === 0 ? 'PREMIUM' : null,
          route: i < 2 ? `/astrospeak/article${i + 1}` : '/'
        }))
      ]
    },
    health: {
      name: 'Health',
      description: 'Health news, wellness tips, and medical breakthroughs',
      articles: [
        {
          id: 1,
          title: 'India Achieves Universal Healthcare Coverage',
          excerpt: 'Ayushman Bharat expansion covers 1.3 billion citizens...',
          category: 'HEALTH',
          date: 'March 24, 2022',
          image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
          badge: 'PREMIUM',
          route: '/health/article1'
        },
        {
          id: 2,
          title: 'Yoga and Meditation Reduce Healthcare Costs by 40%',
          excerpt: 'Comprehensive study shows remarkable health benefits...',
          category: 'HEALTH',
          date: 'March 25, 2022',
          image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
          badge: null,
          route: '/health/article2'
        },
        ...Array(28).fill(null).map((_, i) => ({
          id: i + 3,
          title: `Health & Wellness ${i + 3}`,
          excerpt: 'Tips and news for healthy living...',
          category: 'HEALTH',
          date: 'March ' + (26 + i) + ', 2022',
          image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
          badge: i % 3 === 0 ? 'PREMIUM' : null,
          route: i < 2 ? `/health/article${i + 1}` : '/'
        }))
      ]
    },
    environment: {
      name: 'Environment',
      description: 'Environmental news, climate change, and sustainability',
      articles: [
        {
          id: 1,
          title: 'India Plants 500 Million Trees in Reforestation Campaign',
          excerpt: 'World\'s largest single-year reforestation effort completed...',
          category: 'ENVIRONMENT',
          date: 'March 26, 2022',
          image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80',
          badge: 'PREMIUM',
          route: '/environment/article1'
        },
        {
          id: 2,
          title: 'Plastic Waste Reduction Eliminates 5 Million Tons Annually',
          excerpt: 'Comprehensive initiative tackles plastic pollution crisis...',
          category: 'ENVIRONMENT',
          date: 'March 27, 2022',
          image: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?w=600&q=80',
          badge: null,
          route: '/environment/article2'
        },
        ...Array(28).fill(null).map((_, i) => ({
          id: i + 3,
          title: `Environmental Action ${i + 3}`,
          excerpt: 'Sustainability initiatives and climate news...',
          category: 'ENVIRONMENT',
          date: 'March ' + (28 + i) + ', 2022',
          image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80',
          badge: i % 3 === 0 ? 'PREMIUM' : null,
          route: i < 2 ? `/environment/article${i + 1}` : '/'
        }))
      ]
    }
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          {/* Home Route - Pass Odisha articles */}


          <Route 
  path="/" 
  element={
    <HomePage 
      theme={theme} 
      odishaArticles={categoryData.odisha.articles}
      nationalArticles={categoryData.national.articles}
      internationalArticles={categoryData.international.articles}
      environmentArticles={categoryData.environment.articles}
      
    />
  } 
/>









          {/* <Route path="/" element={<HomePage theme={theme} odishaArticles={categoryData.odisha.articles} />} /> */}
          
          {/* Category Routes */}
          <Route path="/odisha" element={<CategoryPage theme={theme} categoryData={categoryData.odisha} />} />
          <Route path="/national" element={<CategoryPage theme={theme} categoryData={categoryData.national} />} />
          <Route path="/international" element={<CategoryPage theme={theme} categoryData={categoryData.international} />} />
          <Route path="/entertainment" element={<CategoryPage theme={theme} categoryData={categoryData.entertainment} />} />
          <Route path="/jobs" element={<CategoryPage theme={theme} categoryData={categoryData.jobs} />} />
          <Route path="/education" element={<CategoryPage theme={theme} categoryData={categoryData.education} />} />
          <Route path="/astrospeak" element={<CategoryPage theme={theme} categoryData={categoryData.astrospeak} />} />
          <Route path="/health" element={<CategoryPage theme={theme} categoryData={categoryData.health} />} />
          <Route path="/environment" element={<CategoryPage theme={theme} categoryData={categoryData.environment} />} />
          
          {/* Home Articles */}
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
          
          {/* Category Article Routes */}
          <Route path="/odisha/article1" element={<OdishaArticle1 theme={theme} />} />
          <Route path="/odisha/article2" element={<OdishaArticle2 theme={theme} />} />
          <Route path="/national/article1" element={<NationalArticle1 theme={theme} />} />
          <Route path="/national/article2" element={<NationalArticle2 theme={theme} />} />
          <Route path="/international/article1" element={<InternationalArticle1 theme={theme} />} />
          <Route path="/international/article2" element={<InternationalArticle2 theme={theme} />} />
          <Route path="/entertainment/article1" element={<EntertainmentArticle1 theme={theme} />} />
          <Route path="/entertainment/article2" element={<EntertainmentArticle2 theme={theme} />} />
          <Route path="/jobs/article1" element={<JobsArticle1 theme={theme} />} />
          <Route path="/jobs/article2" element={<JobsArticle2 theme={theme} />} />
          <Route path="/education/article1" element={<EducationArticle1 theme={theme} />} />
          <Route path="/education/article2" element={<EducationArticle2 theme={theme} />} />
          <Route path="/astrospeak/article1" element={<AstrospeakArticle1 theme={theme} />} />
          <Route path="/astrospeak/article2" element={<AstrospeakArticle2 theme={theme} />} />
          <Route path="/health/article1" element={<HealthArticle1 theme={theme} />} />
          <Route path="/health/article2" element={<HealthArticle2 theme={theme} />} />
          <Route path="/environment/article1" element={<EnvironmentArticle1 theme={theme} />} />
          <Route path="/environment/article2" element={<EnvironmentArticle2 theme={theme} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
