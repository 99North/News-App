import React from 'react';
import NewsArticle from '../components/NewsArticle';

const EnvironmentArticle1 = ({ theme }) => {
  const articleData = {
    badge: 'PREMIUM',
    title: 'India Plants 500 Million Trees in Massive Reforestation Campaign',
    author: 'Kavita Sharma',
    date: 'March 26, 2022',
    category: 'ENVIRONMENT',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80',
    imageCaption: 'Volunteers participating in massive tree-planting campaign',
    intro: 'India has completed planting 500 million trees across 28 states in the world\'s largest single-year reforestation effort. The campaign aims to restore degraded forests, increase green cover to 33% of landmass, and combat climate change through natural carbon sequestration.',
    sections: [
      {
        heading: 'Campaign Scale',
        paragraphs: [
          'Over 50 million volunteers planted trees across 2 million hectares of degraded land. The campaign used native species suited to local climates, ensuring high survival rates. Satellite imagery confirms 82% survival rate—exceptional for large-scale plantations.',
          'The project employed 2 million people, primarily from rural areas, providing income while restoring ecosystems. Advanced planning using GIS mapping identified optimal planting locations based on soil type, water availability, and ecological needs.'
        ],
        quote: {
          text: 'This isn\'t just about planting trees—it\'s about restoring ecosystems, sequestering carbon, and creating livelihoods.',
          author: 'Environment Minister'
        }
      },
      {
        heading: 'Environmental Impact',
        paragraphs: [
          'When mature, these forests will sequester 250 million tons of CO2 annually—equivalent to taking 50 million cars off the road. Restored forests will improve water retention, reduce soil erosion, and provide habitats for wildlife.',
          'The trees will regulate local climates, reduce urban heat island effects, and improve air quality. In cities, tree cover expansion is expected to decrease temperatures by 2-3°C and reduce respiratory diseases.'
        ],
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
        imageCaption: 'Newly planted forest area showing environmental restoration'
      },
      {
        heading: 'Long-term Management',
        paragraphs: [
          'The campaign includes five-year maintenance commitments ensuring sapling survival. Local communities receive training in forest management, creating sustainable livelihoods through non-timber forest products.',
          'Drone and satellite monitoring tracks forest growth. AI analyzes imagery to identify areas needing intervention. Communities receive payments based on verified carbon sequestration, incentivizing long-term forest protection.'
        ]
      }
    ],
    conclusion: 'India\'s massive reforestation campaign demonstrates that developing nations can lead climate action while generating employment and ecosystem benefits. Success requires sustained commitment beyond initial planting—nurturing forests to maturity over decades. If maintained effectively, this green revolution could significantly contribute to India\'s climate goals while improving millions of lives through cleaner air, water security, and livelihoods.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default EnvironmentArticle1;
