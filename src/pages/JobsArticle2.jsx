import React from 'react';
import NewsArticle from '../components/NewsArticle';

const JobsArticle2 = ({ theme }) => {
  const articleData = {
    badge: null,
    title: 'Government Launches Massive Skill Development Program for 10 Million Youth',
    author: 'Anjali Deshmukh',
    date: 'March 19, 2022',
    category: 'JOBS',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
    imageCaption: 'Youth participating in skill development training programs',
    intro: 'The government has launched an ambitious skill development initiative aiming to train 10 million young people in industry-relevant skills over the next three years. The ₹50,000 crore program addresses the growing skills gap threatening India\'s economic growth.',
    sections: [
      {
        heading: 'Program Structure',
        paragraphs: [
          'The initiative offers training in 50+ sectors including IT, manufacturing, healthcare, logistics, and hospitality. Courses range from 3-month certificate programs to 2-year diplomas, all aligned with industry requirements.',
          'Partnerships with 5,000+ companies ensure training relevance and provide internship opportunities. 80% of training cost is government-funded, with the remainder covered by participating companies.'
        ],
        quote: {
          text: 'We\'re not just training people—we\'re transforming lives by making them employable in a rapidly changing economy.',
          author: 'Minister of Skill Development'
        }
      },
      {
        heading: 'Industry Collaboration',
        paragraphs: [
          'Companies commit to hiring at least 50% of trained candidates. Industry experts design curricula ensuring skills taught match actual job requirements. Training centers use industry-standard equipment and software.',
          'Apprenticeship programs provide hands-on experience, with companies paying stipends. Many apprenticeships convert to full-time positions.'
        ],
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80',
        imageCaption: 'Practical training using industry-standard equipment'
      },
      {
        heading: 'Target Demographics',
        paragraphs: [
          'The program prioritizes youth from economically disadvantaged backgrounds, school dropouts, and graduates struggling to find employment. Special quotas ensure women and minorities receive equal opportunities.',
          'Rural areas receive particular attention, with training centers established in 5,000 villages. Mobile training units reach remote areas lacking permanent facilities.'
        ]
      }
    ],
    conclusion: 'This skill development program addresses a critical challenge: millions entering the workforce lack skills employers need. Success requires sustained commitment, continuous curriculum updates, and genuine industry partnership. If executed effectively, the program could dramatically improve employment prospects for millions while addressing India\'s skills shortage—a true win-win for youth and the economy.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default JobsArticle2;
