import React from 'react';
import NewsArticle from '../components/NewsArticle';

const EducationArticle1 = ({ theme }) => {
  const articleData = {
    badge: 'PREMIUM',
    title: 'New Education Policy Transforms Indian Schools with Holistic Learning',
    author: 'Dr. Sunita Krishnan',
    date: 'March 20, 2022',
    category: 'EDUCATION',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80',
    imageCaption: 'Students engaged in interactive learning under new education policy',
    intro: 'The National Education Policy 2020 is revolutionizing Indian education with its implementation across 50,000 schools. The policy emphasizes holistic development, critical thinking, and flexibility over rote memorization, marking the most significant education reform in decades.',
    sections: [
      {
        heading: 'Structural Changes',
        paragraphs: [
          'The new 5+3+3+4 structure replaces the old 10+2 system, aligning with cognitive development stages. Early childhood education (ages 3-8) focuses on play-based learning. Middle school (8-11) introduces experiential learning. Secondary (11-14) and senior secondary (14-18) offer specialization flexibility.',
          'Students can choose subjects across streams—combining science with arts or commerce. No rigid streaming ensures well-rounded education while allowing students to pursue diverse interests.'
        ],
        quote: {
          text: 'We\'re moving from preparing students for exams to preparing them for life. This is transformative.',
          author: 'Education Minister'
        }
      },
      {
        heading: 'Pedagogical Innovations',
        paragraphs: [
          'Competency-based learning replaces rote memorization. Teachers use interactive methods, project-based learning, and real-world problem-solving. Board exams emphasize understanding over memorization.',
          'Coding introduced from grade 6, with AI, design thinking, and financial literacy integrated into curricula. Vocational education begins in middle school, providing practical skills.'
        ],
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
        imageCaption: 'Modern classroom with interactive learning tools'
      },
      {
        heading: 'Teacher Training',
        paragraphs: [
          '2 million teachers are undergoing intensive training in new teaching methodologies. Four-year integrated teacher education programs replace two-year B.Ed courses, significantly improving teacher quality.',
          'Continuous professional development is mandatory, with teachers required to complete 50 hours annually. Master teachers mentor newcomers, ensuring knowledge transfer.'
        ]
      }
    ],
    conclusion: 'The New Education Policy represents India\'s recognition that 21st-century challenges require different educational approaches than the colonial-era system provided. Success depends on effective implementation, adequate resources, and sustained commitment. If realized fully, the policy could produce generations of critical thinkers, problem-solvers, and innovators—exactly what India\'s future demands.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default EducationArticle1;
