import React from 'react';
import NewsArticle from '../components/NewsArticle';

const InternationalArticle1 = ({ theme }) => {
  const articleData = {
    badge: 'PREMIUM',
    title: 'Global Leaders Reach Historic Climate Agreement at Summit',
    author: 'Emma Wilson',
    date: 'March 14, 2022',
    category: 'INTERNATIONAL',
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=1200&q=80',
    imageCaption: 'World leaders gathering for historic climate negotiations',
    intro: 'Nearly 200 nations have committed to an unprecedented climate agreement pledging to achieve net-zero emissions by 2050 and limit global warming to 1.5°C. The accord includes binding commitments and $500 billion in climate finance.',
    sections: [
      {
        heading: 'Key Commitments',
        paragraphs: [
          'Major emitters agreed to reduce carbon emissions 50% by 2030. Developed nations committed $500 billion for climate adaptation in developing countries. Fossil fuel subsidies will be phased out by 2025.',
          'Coal power generation will cease by 2040, with renewable energy targets set at 80% of global electricity by 2035. Deforestation must end by 2025 with large-scale reforestation initiatives.'
        ],
        quote: {
          text: 'This agreement represents humanity\'s best chance to avert catastrophic climate change. Now comes the hard part—implementation.',
          author: 'UN Secretary-General'
        }
      },
      {
        heading: 'Financial Mechanisms',
        paragraphs: [
          'The $500 billion climate fund will support renewable energy infrastructure, climate adaptation, and technology transfer to developing nations. Funding comes from developed countries, multilateral banks, and private sector commitments.',
          'Carbon pricing mechanisms will be standardized globally, with revenues funding climate projects. Green bonds worth $1 trillion will finance the transition.'
        ],
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80',
        imageCaption: 'Renewable energy infrastructure crucial to climate goals'
      },
      {
        heading: 'Implementation Challenges',
        paragraphs: [
          'Success requires unprecedented international cooperation and domestic policy changes. Energy transitions must be just, ensuring workers in fossil fuel industries receive support for retraining.',
          'Technology deployment at the required scale faces supply chain, financing, and regulatory challenges. Annual progress reviews will hold nations accountable.'
        ]
      }
    ],
    conclusion: 'The climate agreement marks a diplomatic triumph, but its success depends on rapid, sustained action. The commitments made are ambitious yet necessary. As implementation begins, the world watches to see if political will matches the urgency of the climate crisis. Future generations will judge this moment by actions taken, not promises made.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default InternationalArticle1;
