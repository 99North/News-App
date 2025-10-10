import React from 'react';
import NewsArticle from '../components/NewsArticle';

const NationalArticle1 = ({ theme }) => {
  const articleData = {
    badge: 'PREMIUM',
    title: 'India Becomes Third Largest Economy Overtaking Japan and Germany',
    author: 'Rajesh Krishnan',
    date: 'March 12, 2022',
    category: 'NATIONAL',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80',
    imageCaption: 'Mumbai financial district symbolizing India\'s economic growth',
    intro: 'India has achieved a historic milestone by becoming the world\'s third-largest economy, with GDP surpassing $5 trillion. This achievement reflects sustained economic reforms, digital transformation, and robust growth across multiple sectors.',
    sections: [
      {
        heading: 'Economic Transformation',
        paragraphs: [
          'India\'s GDP grew at 8.2% annually over the past five years, driven by manufacturing, services, and digital sectors. The country now contributes 7% to global GDP, up from 3% a decade ago.',
          'Key reforms including GST implementation, digital payment infrastructure, and ease of doing business improvements created a favorable environment for both domestic and foreign investment.'
        ],
        quote: {
          text: 'India\'s economic rise is not just about numbers—it represents aspirations of 1.4 billion people being realized.',
          author: 'Finance Minister of India'
        }
      },
      {
        heading: 'Sectoral Growth',
        paragraphs: [
          'The technology sector leads with $250 billion in annual exports. Manufacturing under "Make in India" grew 12% annually, while the startup ecosystem produced 100 unicorns valued at over $350 billion collectively.',
          'Agriculture modernization, infrastructure development, and renewable energy sectors contributed significantly. India now manufactures 18% of global smartphones and is the world\'s third-largest startup ecosystem.'
        ],
        image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
        imageCaption: 'Modern manufacturing facility representing India\'s industrial growth'
      },
      {
        heading: 'Global Implications',
        paragraphs: [
          'This milestone strengthens India\'s voice in global economic forums. The country is now a key player in G20, BRICS, and other international economic organizations.',
          'Foreign direct investment reached $85 billion annually, with India becoming a preferred destination for manufacturing, technology, and service sector investments.'
        ],
        quote: {
          text: 'India is no longer an emerging economy—it has arrived as a major global economic power.',
          author: 'IMF Chief Economist'
        }
      }
    ],
    conclusion: 'India\'s ascent to the world\'s third-largest economy marks a turning point in global economic power balance. With favorable demographics, ongoing reforms, and technological adoption, the country is positioned for sustained growth. Challenges remain, including job creation, inequality reduction, and infrastructure development, but the trajectory is unmistakably upward.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default NationalArticle1;
