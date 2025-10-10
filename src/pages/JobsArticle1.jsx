import React from 'react';
import NewsArticle from '../components/NewsArticle';

const JobsArticle1 = ({ theme }) => {
  const articleData = {
    badge: 'PREMIUM',
    title: 'Tech Sector Creates 2 Million Jobs Amid Digital Transformation',
    author: 'Vikram Singh',
    date: 'March 18, 2022',
    category: 'JOBS',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80',
    imageCaption: 'Modern tech office representing the booming IT job market',
    intro: 'India\'s technology sector has added 2 million jobs in the past year, driven by global digital transformation, emerging technologies, and increasing technology adoption across industries. This growth makes tech the largest employment generator in the formal sector.',
    sections: [
      {
        heading: 'Growth Drivers',
        paragraphs: [
          'Cloud computing, artificial intelligence, cybersecurity, and data analytics drive hiring. Companies are expanding teams to meet surging demand for digital transformation services from global clients.',
          'The shift to remote work enabled Indian companies to tap global talent markets while allowing smaller cities to attract tech talent. Tier-2 and tier-3 cities now host major development centers.'
        ],
        quote: {
          text: 'The tech talent shortage is real. We\'re hiring aggressively and still can\'t fill all positions. It\'s a job seeker\'s market.',
          author: 'CHRO, Major IT Company'
        }
      },
      {
        heading: 'Salary Trends',
        paragraphs: [
          'Average tech salaries increased 25% year-over-year. Entry-level developers earn ₹6-8 lakhs, while experienced professionals with in-demand skills command ₹25-50 lakhs. Senior AI/ML specialists earn ₹60+ lakhs.',
          'Signing bonuses, stock options, and retention bonuses are increasingly common. Companies are offering flexible work arrangements, unlimited vacation, and enhanced benefits to attract talent.'
        ],
        image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&q=80',
        imageCaption: 'Tech professionals working on innovative projects'
      },
      {
        heading: 'Skills in Demand',
        paragraphs: [
          'Full-stack development, cloud architecture (AWS, Azure, GCP), AI/ML, blockchain, and cybersecurity top the list. DevOps, data engineering, and UX design also see strong demand.',
          'Soft skills like communication, problem-solving, and adaptability are equally valued. Companies increasingly prioritize continuous learning and growth mindset over traditional credentials.'
        ],
        quote: {
          text: 'We hire for attitude and train for skills. The technology changes too fast to rely solely on current technical knowledge.',
          author: 'CTO, Technology Startup'
        }
      }
    ],
    conclusion: 'The tech sector\'s explosive job growth offers unprecedented opportunities but also highlights skills gaps and education system inadequacies. While positions go unfilled, millions seek employment. Bridging this gap through better education, reskilling programs, and alternative learning pathways is crucial. The current boom could transform India into a global tech talent powerhouse if challenges are addressed effectively.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default JobsArticle1;
