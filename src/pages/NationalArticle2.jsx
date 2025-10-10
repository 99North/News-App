import React from 'react';
import NewsArticle from '../components/NewsArticle';

const NationalArticle2 = ({ theme }) => {
  const articleData = {
    badge: null,
    title: 'Digital India Reaches Milestone with 1 Billion Internet Users',
    author: 'Sneha Reddy',
    date: 'March 13, 2022',
    category: 'NATIONAL',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    imageCaption: 'Citizens accessing digital services through smartphones',
    intro: 'India has achieved a remarkable digital milestone with over 1 billion active internet users, making it the world\'s second-largest online population. This achievement reflects the success of Digital India initiatives and expanding telecommunications infrastructure.',
    sections: [
      {
        heading: 'Digital Infrastructure',
        paragraphs: [
          'The expansion was driven by affordable smartphones, competitive data pricing, and government initiatives like BharatNet connecting 600,000 villages with high-speed internet.',
          'Average data consumption per user increased to 18GB monthly, among the highest globally. 4G coverage now reaches 96% of the population, with 5G rollout accelerating in urban areas.'
        ],
        quote: {
          text: 'Digital inclusion is transforming India from a developing nation to a digitally empowered society.',
          author: 'Minister of Electronics and IT'
        }
      },
      {
        heading: 'Economic Impact',
        paragraphs: [
          'The digital economy now contributes $250 billion annually, with projections to reach $1 trillion by 2025. E-commerce, digital payments, and online services employ 15 million people directly.',
          'UPI transactions exceeded 8 billion monthly, processing $200 billion. India leads globally in digital payment adoption, with even small vendors accepting digital payments.'
        ],
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&q=80',
        imageCaption: 'Digital payment infrastructure enabling financial inclusion'
      },
      {
        heading: 'Social Transformation',
        paragraphs: [
          'Digital connectivity enabled 500 million rural Indians to access banking, education, and government services previously unavailable. Telemedicine consultations reached 100 million annually.',
          'Online education platforms enrolled 200 million students, while digital literacy programs trained 50 million people in basic computer skills and online safety.'
        ]
      }
    ],
    conclusion: 'Reaching 1 billion internet users represents more than statistics—it signifies democratization of opportunity. Digital connectivity is reducing urban-rural divides, enabling entrepreneurship, and providing access to services that were once impossible for many Indians. As infrastructure continues improving, the digital revolution\'s next phase promises even greater transformation.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default NationalArticle2;
