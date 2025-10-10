import React from 'react';
import NewsArticle from '../components/NewsArticle';

const Article7 = ({ theme }) => {
  const articleData = {
    badge: 'PREMIUM',
    title: 'India launches ambitious space mission to explore lunar south pole',
    author: 'Rajesh Kumar',
    date: 'March 6, 2022',
    category: 'NATIONAL',
    image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1200&q=80',
    imageCaption: 'India\'s lunar lander preparing for its historic mission to the Moon\'s south pole',
    intro: 'The Indian Space Research Organisation (ISRO) has successfully launched Chandrayaan-4, its most ambitious lunar mission yet, aimed at landing near the Moon\'s south pole and searching for water ice deposits. This mission positions India at the forefront of lunar exploration.',
    sections: [
      {
        heading: 'Mission Objectives',
        paragraphs: [
          'Chandrayaan-4 represents a quantum leap in India\'s space capabilities. The mission includes an advanced lander, a sophisticated rover with enhanced mobility, and an orbiter equipped with cutting-edge instruments for mapping water ice deposits across the lunar surface.',
          'The south pole region is of particular scientific interest because permanently shadowed craters may contain frozen water—a crucial resource for future human missions. Understanding water distribution on the Moon could revolutionize our approach to sustainable space exploration.'
        ],
        quote: {
          text: 'This mission demonstrates India\'s growing technological prowess and our commitment to peaceful space exploration for the benefit of humanity.',
          author: 'Dr. S. Somanath, ISRO Chairman'
        }
      },
      {
        heading: 'Technological Innovations',
        paragraphs: [
          'The Chandrayaan-4 rover features AI-driven autonomous navigation, allowing it to traverse challenging lunar terrain without constant Earth communication. Its advanced spectrometers can detect water molecules in concentrations as low as 100 parts per million.',
          'ISRO developed indigenous cryogenic engines and precision landing systems for this mission, reducing dependence on foreign technology. The lander can touch down on slopes up to 15 degrees—far exceeding previous capabilities and opening new potential landing sites.'
        ],
        image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&q=80',
        imageCaption: 'Mission control monitoring the spacecraft\'s journey'
      },
      {
        heading: 'International Collaboration',
        paragraphs: [
          'While primarily an Indian mission, Chandrayaan-4 carries instruments from NASA, ESA, and JAXA, reflecting the increasingly collaborative nature of space exploration. Data from the mission will be shared with the international scientific community, contributing to our collective understanding of lunar resources.',
          'The mission also serves as a technology demonstrator for India\'s planned space station and eventual human spaceflight program. Success here could position ISRO as a key partner in NASA\'s Artemis program and other international lunar initiatives.'
        ],
        quote: {
          text: 'Space exploration thrives on international cooperation. India\'s contributions are invaluable to our shared goals.',
          author: 'Bill Nelson, NASA Administrator'
        }
      },
      {
        heading: 'Scientific Discoveries Expected',
        paragraphs: [
          'Scientists anticipate groundbreaking discoveries about the Moon\'s formation, volcanic history, and resource potential. The mission\'s seismometers will study moonquakes, providing insights into the lunar interior structure that have eluded us for decades.',
          'If substantial water ice is confirmed, it could reduce the cost of future lunar missions by 90% by enabling in-situ resource utilization. Water can be split into hydrogen and oxygen for rocket fuel, making the Moon a potential refueling station for deep space missions.'
        ]
      },
      {
        heading: 'Economic and Strategic Implications',
        paragraphs: [
          'The mission\'s estimated cost of $150 million showcases India\'s ability to achieve complex objectives with lean budgets—a model attracting international attention. This cost-effectiveness could make ISRO a preferred launch partner for commercial and scientific payloads.',
          'Success in this mission strengthens India\'s position in the emerging space economy, projected to reach $1 trillion by 2040. Indian companies are already developing lunar payload services and exploration technologies, creating high-tech jobs and export opportunities.'
        ]
      }
    ],
    conclusion: 'Chandrayaan-4 represents more than a scientific mission—it\'s a statement of India\'s technological advancement and commitment to space exploration. As the spacecraft approaches the Moon, it carries the hopes of over a billion people and promises to unlock secrets that could reshape humanity\'s relationship with space. The mission\'s success would cement India\'s status as a major space power and inspire a new generation of scientists and engineers.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default Article7;
