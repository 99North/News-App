import React from 'react';
import NewsArticle from '../components/NewsArticle';

const OdishaArticle1 = ({ theme }) => {
  const articleData = {
    badge: 'PREMIUM',
    title: 'Bhubaneswar Smart City Project Wins International Recognition',
    author: 'Priya Patel',
    date: 'March 10, 2022',
    category: 'ODISHA',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80',
    imageCaption: 'Bhubaneswar skyline showcasing modern urban development',
    intro: 'Bhubaneswar has been awarded the prestigious Global Smart City Award for its innovative urban planning and technology integration. The capital city of Odisha beat 150 cities worldwide to claim this recognition, highlighting its transformation into a model smart city.',
    sections: [
      {
        heading: 'Award-Winning Initiatives',
        paragraphs: [
          'The Bhubaneswar Smart City project implemented over 70 initiatives focusing on digital infrastructure, sustainable mobility, and citizen services. The city deployed 500+ free WiFi hotspots, smart parking solutions, and an integrated command and control center monitoring traffic, water supply, and emergency services.',
          'Smart street lighting with motion sensors has reduced energy consumption by 40%, while the intelligent traffic management system has decreased average commute times by 25%. These achievements demonstrate how technology can significantly improve urban living quality.'
        ],
        quote: {
          text: 'Bhubaneswar proves that smart city development is not just about technology, but about improving citizens\' lives through thoughtful implementation.',
          author: 'Dr. Ravi Kumar, Urban Planning Expert'
        }
      },
      {
        heading: 'Citizen-Centric Approach',
        paragraphs: [
          'The city launched the "Mo Bhubaneswar" app allowing residents to report civic issues, pay bills, and access government services digitally. Over 2 million users actively engage with the platform, which has resolved more than 500,000 citizen complaints with an average response time of 48 hours.',
          'Public participation was central to the project, with city authorities conducting over 100 community workshops to understand residents\' needs and priorities. This bottom-up approach ensured that smart city initiatives addressed real problems rather than imposing technology for its own sake.'
        ],
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80',
        imageCaption: 'Citizens using smart city services through mobile applications'
      },
      {
        heading: 'Sustainable Development',
        paragraphs: [
          'Environmental sustainability was prioritized throughout the project. Bhubaneswar added 500 acres of green spaces, developed cycle tracks spanning 150 kilometers, and introduced electric buses for public transportation. Solar panels on government buildings now generate 15 megawatts of clean energy.',
          'The city implemented advanced waste management systems with segregation at source, recycling facilities, and waste-to-energy plants. These measures reduced landfill waste by 60% and improved overall cleanliness significantly.'
        ],
        quote: {
          text: 'Bhubaneswar has shown that economic development and environmental protection can go hand in hand.',
          author: 'Minister of Housing and Urban Affairs'
        }
      },
      {
        heading: 'Economic Impact',
        paragraphs: [
          'The smart city transformation attracted investments worth ₹5,000 crores, creating over 50,000 jobs in IT, construction, and service sectors. The improved infrastructure and quality of life have made Bhubaneswar a preferred destination for tech companies and startups.',
          'Property values in smart city zones increased by 35%, while tourism grew by 40% as improved connectivity and services attracted more visitors. The city now hosts numerous national and international events, further boosting its economy.'
        ]
      }
    ],
    conclusion: 'Bhubaneswar\'s smart city success story offers valuable lessons for urban development across India and beyond. By focusing on citizen needs, embracing technology thoughtfully, and prioritizing sustainability, the city has created a blueprint for 21st-century urban living. This international recognition validates Odisha\'s vision and positions Bhubaneswar as a leader in India\'s urban transformation journey.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default OdishaArticle1;
