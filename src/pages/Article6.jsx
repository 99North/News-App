import React from 'react';
import NewsArticle from '../components/NewsArticle';

const Article6 = ({ theme }) => {
  const articleData = {
    badge: null,
    title: 'Tech giants announce major investments in renewable energy',
    author: 'Jennifer Wu',
    date: 'March 5, 2022',
    category: 'TECHNOLOGY',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
    imageCaption: 'Solar panel installation representing the shift toward renewable energy',
    intro: 'Major technology companies including Google, Microsoft, and Amazon have announced unprecedented investments totaling $50 billion in renewable energy infrastructure over the next five years. This collective commitment marks a significant shift in corporate sustainability efforts.',
    sections: [
      {
        heading: 'Historic Commitments',
        paragraphs: [
          'The tech industry\'s renewable energy investment represents the largest corporate commitment to clean energy in history. Google has pledged to operate on 100% carbon-free energy by 2030, while Microsoft aims to be carbon negative by the same year.',
          'Amazon announced plans to deploy 100,000 electric delivery vehicles and invest $10 billion in renewable energy projects globally. These commitments extend beyond carbon neutrality to create surplus renewable energy capacity that benefits entire communities.'
        ],
        quote: {
          text: 'This isn\'t just about corporate responsibility anymore. It\'s about securing our energy future and demonstrating that profitability and sustainability can coexist.',
          author: 'Sundar Pichai, CEO of Google'
        }
      },
      {
        heading: 'Infrastructure Development',
        paragraphs: [
          'The investments will fund the construction of massive solar farms, wind installations, and energy storage facilities across multiple continents. Google alone plans to develop 5 gigawatts of renewable energy capacity in key manufacturing regions.',
          'These projects will create approximately 150,000 jobs in manufacturing, installation, and maintenance of renewable energy infrastructure. Local communities near data centers will particularly benefit from improved grid stability and access to clean energy.'
        ],
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80',
        imageCaption: 'Wind turbines generating clean energy for data centers'
      },
      {
        heading: 'Technological Innovation',
        paragraphs: [
          'Beyond traditional solar and wind, tech companies are investing heavily in emerging technologies like green hydrogen, advanced battery storage, and next-generation nuclear reactors. Microsoft has partnered with several startups developing fusion energy technology.',
          'Artificial intelligence and machine learning are being deployed to optimize energy consumption across data centers, reducing waste and improving efficiency by up to 40%. These AI systems can predict energy demand and adjust renewable energy sources accordingly.'
        ],
        quote: {
          text: 'The convergence of AI and renewable energy is creating opportunities we couldn\'t have imagined a decade ago.',
          author: 'Brad Smith, President of Microsoft'
        }
      },
      {
        heading: 'Supply Chain Transformation',
        paragraphs: [
          'The companies are also pressuring their suppliers to adopt renewable energy, creating a ripple effect throughout global supply chains. Apple has already brought 175 suppliers into its Clean Energy Program, representing more than 70% of its direct manufacturing spending.',
          'This supply chain transformation extends to materials sourcing, with companies investing in recycled materials and circular economy initiatives. The goal is to eliminate virgin materials from products entirely within the next decade.'
        ]
      },
      {
        heading: 'Global Impact',
        paragraphs: [
          'The investments are strategically distributed across regions including Southeast Asia, Latin America, and Africa, where renewable energy infrastructure has historically lagged behind demand. These projects will provide clean energy access to millions while supporting local economic development.',
          'Industry analysts predict these corporate investments could accelerate the global transition to renewable energy by 5-10 years, potentially preventing billions of tons of carbon emissions. The ripple effects on energy markets and climate policy could be transformative.'
        ]
      }
    ],
    conclusion: 'The tech industry\'s massive renewable energy investments represent more than corporate virtue signaling—they\'re strategic business decisions that recognize the economic and operational advantages of clean energy. As these projects come online, they will reshape energy markets, accelerate innovation, and demonstrate that large-scale corporate action can drive meaningful progress on climate change.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default Article6;
