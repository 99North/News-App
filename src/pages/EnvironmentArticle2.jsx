import React from 'react';
import NewsArticle from '../components/NewsArticle';

const EnvironmentArticle2 = ({ theme }) => {
  const articleData = {
    badge: null,
    title: 'Plastic Waste Reduction Initiative Eliminates 5 Million Tons Annually',
    author: 'Rohan Mehta',
    date: 'March 27, 2022',
    category: 'ENVIRONMENT',
    image: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?w=1200&q=80',
    imageCaption: 'Recycling facility processing plastic waste into useful products',
    intro: 'India\'s comprehensive plastic waste reduction initiative has successfully eliminated 5 million tons of annual plastic waste through bans, recycling infrastructure, and alternative materials. The program serves as a model for other nations grappling with plastic pollution.',
    sections: [
      {
        heading: 'Multi-Pronged Approach',
        paragraphs: [
          'Single-use plastics are banned nationwide, eliminating 2 million tons annually. Extended Producer Responsibility mandates manufacturers fund waste collection and recycling. Deposit-refund systems incentivize bottle returns, achieving 85% recovery rates.',
          'Over 5,000 recycling facilities were established, processing 3 million tons annually into useful products. Advanced chemical recycling converts non-recyclable plastics into fuel and chemicals.'
        ],
        quote: {
          text: 'Solving plastic pollution requires systemic change—banning, reducing, recycling, and innovating simultaneously.',
          author: 'Secretary, Ministry of Environment'
        }
      },
      {
        heading: 'Alternative Materials',
        paragraphs: [
          'Government incentives spurred alternatives: biodegradable packaging from agricultural waste, edible cutlery, and plant-based plastics. Startups developed innovative solutions commercialized rapidly with policy support.',
          'Traditional materials like cloth bags, bamboo products, and paper packaging saw resurgence. Markets adapted quickly, with alternative products achieving price parity with plastics within two years.'
        ],
        image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&q=80',
        imageCaption: 'Eco-friendly alternatives replacing single-use plastics'
      },
      {
        heading: 'Environmental Results',
        paragraphs: [
          'Ocean plastic inputs from India decreased 60%. Rivers and urban areas show dramatically reduced plastic litter. Wildlife deaths from plastic ingestion dropped 70%.',
          'The initiative prevented 15 million tons of greenhouse gas emissions from plastic production and incineration. Soil quality improved in agricultural areas previously contaminated by plastic mulch.'
        ]
      }
    ],
    conclusion: 'India\'s success in reducing plastic waste demonstrates that systemic change is possible through coordinated policy, infrastructure investment, and public engagement. While challenges remain—informal sector integration, rural reach, and enforcement—the progress is undeniable. This initiative proves environmental protection and economic development can align when approached thoughtfully, offering hope for tackling other environmental challenges.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default EnvironmentArticle2;
