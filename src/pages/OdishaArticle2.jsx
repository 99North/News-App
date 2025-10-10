import React from 'react';
import NewsArticle from '../components/NewsArticle';

const OdishaArticle2 = ({ theme }) => {
  const articleData = {
    badge: null,
    title: 'Odisha Becomes Leader in Renewable Energy with Massive Solar Park',
    author: 'Amit Sharma',
    date: 'March 11, 2022',
    category: 'ODISHA',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
    imageCaption: 'Vast solar panel installation in Odisha generating clean energy',
    intro: 'Odisha has inaugurated India\'s largest single-location solar park in Dhenkanal district, with a capacity of 2,000 megawatts. This ambitious project positions the state as a frontrunner in renewable energy adoption and demonstrates its commitment to clean energy transition.',
    sections: [
      {
        heading: 'Massive Infrastructure',
        paragraphs: [
          'Spread across 10,000 acres, the solar park features over 6 million solar panels using the latest bifacial technology, which captures sunlight from both sides for increased efficiency. The project represents an investment of ₹12,000 crores and involved collaboration between state government, private developers, and international technology partners.',
          'The facility includes advanced battery storage systems capable of storing 500 megawatt-hours of energy, ensuring power supply even during non-sunny periods. This storage capacity makes the park a reliable baseload power source, addressing one of the main criticisms of solar energy.'
        ],
        quote: {
          text: 'This solar park demonstrates Odisha\'s ambition to lead India\'s renewable energy revolution while generating economic opportunities for local communities.',
          author: 'Chief Minister of Odisha'
        }
      },
      {
        heading: 'Economic and Social Benefits',
        paragraphs: [
          'The project created 5,000 direct jobs during construction and 500 permanent positions for operation and maintenance. Local communities benefited from skill development programs in solar panel installation, maintenance, and energy management.',
          'Farmers whose land is leased for the project receive guaranteed income exceeding traditional agricultural returns, while still utilizing space between solar arrays for sheep grazing and shade-tolerant crops. This innovative approach ensures food security alongside energy production.'
        ],
        image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80',
        imageCaption: 'Local workers maintaining solar panel installations'
      },
      {
        heading: 'Environmental Impact',
        paragraphs: [
          'The solar park will generate 4,000 million units of clean electricity annually, sufficient to power 1.5 million households. This will prevent 3.5 million tons of carbon dioxide emissions each year—equivalent to planting 175 million trees.',
          'The project includes comprehensive environmental protection measures including rainwater harvesting, native plant species cultivation, and wildlife corridors ensuring minimal disruption to local ecology. Environmental monitoring stations track air quality, temperature, and biodiversity indicators.'
        ],
        quote: {
          text: 'Renewable energy projects must be environmentally responsible in their entirety, not just in their output. Odisha\'s approach sets a new standard.',
          author: 'Dr. Meera Nair, Environmental Scientist'
        }
      },
      {
        heading: 'Technology and Innovation',
        paragraphs: [
          'The park employs artificial intelligence for predictive maintenance, using drones equipped with thermal imaging to identify faulty panels before they fail. This proactive approach increases overall efficiency and reduces downtime.',
          'Smart inverters and grid management systems optimize power distribution, while blockchain technology ensures transparent tracking of renewable energy certificates. These innovations position Odisha at the forefront of energy technology adoption.'
        ]
      }
    ],
    conclusion: 'Odisha\'s massive solar park represents more than just renewable energy generation—it embodies a comprehensive approach to sustainable development that balances environmental protection, economic growth, and social welfare. As India aims for ambitious renewable energy targets, Odisha\'s example provides a roadmap for other states. The project proves that with proper planning, investment, and community engagement, large-scale renewable energy can deliver benefits far beyond clean electricity, transforming entire regions economically and socially.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default OdishaArticle2;
