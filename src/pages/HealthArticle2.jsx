import React from 'react';
import NewsArticle from '../components/NewsArticle';

const HealthArticle2 = ({ theme }) => {
  const articleData = {
    badge: null,
    title: 'Yoga and Meditation Shown to Reduce Healthcare Costs by 40%',
    author: 'Dr. Neha Gupta',
    date: 'March 25, 2022',
    category: 'HEALTH',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80',
    imageCaption: 'Group yoga session promoting wellness and preventive health',
    intro: 'A comprehensive 10-year study involving 500,000 participants has demonstrated that regular yoga and meditation practice reduces healthcare costs by 40% while significantly improving quality of life. The findings are prompting governments and insurers to promote these practices.',
    sections: [
      {
        heading: 'Study Findings',
        paragraphs: [
          'Participants practicing yoga and meditation at least 30 minutes daily showed 43% fewer hospital visits, 50% reduction in chronic disease progression, and dramatically improved mental health compared to non-practitioners.',
          'Cardiovascular disease risk decreased 35%, diabetes complications reduced 40%, and anxiety/depression rates dropped 60%. Practitioners reported 45% better sleep quality and 50% higher energy levels.'
        ],
        quote: {
          text: 'The data is unequivocal—regular yoga and meditation practice is among the most cost-effective health interventions available.',
          author: 'Dr. Neha Gupta, Lead Researcher'
        }
      },
      {
        heading: 'Mechanisms of Benefit',
        paragraphs: [
          'Yoga reduces stress hormones, lowers inflammation, improves cardiovascular function, and enhances immune response. Meditation activates parasympathetic nervous system, promoting healing and recovery.',
          'Regular practice improves telomere length—indicators of cellular aging—suggesting that these practices may slow biological aging. Brain imaging shows increased gray matter in areas associated with memory, empathy, and emotional regulation.'
        ],
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
        imageCaption: 'Meditation practice showing measurable health benefits'
      },
      {
        heading: 'Economic Implications',
        paragraphs: [
          'If adopted widely, these practices could save healthcare systems trillions globally. Insurance companies are offering premium discounts for documented yoga practice. Employers are subsidizing classes recognizing reduced absenteeism and healthcare costs.',
          'Governments are integrating yoga and meditation into school curricula and public health programs. India\'s Ministry of AYUSH is training 100,000 certified instructors to meet growing demand.'
        ]
      }
    ],
    conclusion: 'This research provides scientific validation for ancient wellness practices, demonstrating that preventive approaches can be more effective and economical than reactive medical treatment. As healthcare costs spiral globally, these accessible, low-cost interventions offer promising solutions. The challenge now is overcoming skepticism and ensuring quality instruction so more people can benefit from these time-tested practices.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default HealthArticle2;
