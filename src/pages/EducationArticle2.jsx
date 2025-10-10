import React from 'react';
import NewsArticle from '../components/NewsArticle';

const EducationArticle2 = ({ theme }) => {
  const articleData = {
    badge: null,
    title: 'IITs Expand Capacity to Train 100,000 Engineers Annually',
    author: 'Prof. Anand Kumar',
    date: 'March 21, 2022',
    category: 'EDUCATION',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80',
    imageCaption: 'IIT campus representing excellence in technical education',
    intro: 'The Indian Institutes of Technology are undergoing massive expansion, increasing capacity from 65,000 to 100,000 students annually. This expansion includes new campuses, enhanced facilities, and curriculum modernization to meet India\'s growing engineering talent needs.',
    sections: [
      {
        heading: 'Infrastructure Expansion',
        paragraphs: [
          'Five new IITs are opening in underserved regions, while existing ones expand capacity by 30%. ₹25,000 crores invested in state-of-the-art laboratories, research facilities, and student amenities.',
          'New campuses feature sustainable design, green energy, and smart infrastructure. World-class research facilities attract international faculty and collaborative projects.'
        ],
        quote: {
          text: 'Expanding IIT capacity ensures more students access world-class technical education, democratizing opportunity.',
          author: 'IIT Council Chairman'
        }
      },
      {
        heading: 'Curriculum Innovation',
        paragraphs: [
          'Updated curricula emphasize AI, machine learning, quantum computing, biotechnology, and renewable energy. Interdisciplinary programs combine engineering with management, design, or sciences.',
          'Industry partnerships ensure curriculum relevance. Six-month mandatory internships provide real-world experience. Capstone projects address actual industry challenges.'
        ],
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
        imageCaption: 'Students working on advanced engineering projects'
      },
      {
        heading: 'Research Focus',
        paragraphs: [
          'IITs are establishing 50 Centers of Excellence in emerging technologies, attracting ₹10,000 crores in research funding. Publications in top journals increased 200% in five years.',
          'Startup incubators at IITs supported 1,000+ companies valued at ₹50,000 crores. Technology transfer offices help commercialize research, generating revenue and societal impact.'
        ]
      }
    ],
    conclusion: 'IIT expansion addresses the acute shortage of quality engineering education while maintaining the excellence these institutions are known for. The challenge is scaling without diluting quality—achieving this requires significant investment in faculty, infrastructure, and research. Success would strengthen India\'s technology sector, drive innovation, and provide opportunities to thousands of talented students who currently miss out due to limited seats.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default EducationArticle2;
