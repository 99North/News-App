import React from 'react';
import NewsArticle from '../components/NewsArticle';

const EntertainmentArticle1 = ({ theme }) => {
  const articleData = {
    badge: 'PREMIUM',
    title: 'Bollywood Film Breaks Global Box Office Records Worldwide',
    author: 'Karan Malhotra',
    date: 'March 16, 2022',
    category: 'ENTERTAINMENT',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80',
    imageCaption: 'Movie premiere showcasing global cinema appeal',
    intro: 'The epic historical drama "Samrat" has shattered box office records, earning $850 million globally in its first month. The film\'s success demonstrates Bollywood\'s growing international appeal and marks a milestone for Indian cinema.',
    sections: [
      {
        heading: 'Record-Breaking Performance',
        paragraphs: [
          '"Samrat" opened with $200 million in its first weekend, the highest ever for an Indian film. It topped box office charts in 75 countries, including traditionally difficult markets like China, Japan, and Western Europe.',
          'The film earned $350 million domestically and $500 million internationally, showcasing Bollywood\'s expanding global reach. Dubbed versions in 15 languages contributed to its worldwide success.'
        ],
        quote: {
          text: 'This film proves that compelling storytelling transcends language and cultural boundaries. Indian cinema has arrived on the global stage.',
          author: 'Director Rajesh Sharma'
        }
      },
      {
        heading: 'Production Excellence',
        paragraphs: [
          'With a budget of $100 million, "Samrat" featured Hollywood-level production values, stunning visual effects, and an international technical crew. The 3-hour epic took five years to complete.',
          'The soundtrack topped charts in 30 countries, with the title track achieving 500 million streams. Choreography blending Indian classical and contemporary dance styles received critical acclaim.'
        ],
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80',
        imageCaption: 'Grand film production representing cinematic excellence'
      },
      {
        heading: 'Industry Impact',
        paragraphs: [
          'The success has attracted international studios to collaborate with Bollywood, with three major Hollywood-Bollywood co-productions announced. Streaming platforms are investing billions in Indian content.',
          'The film created 10,000 jobs and boosted tourism to shooting locations by 300%. Merchandising generated additional $50 million revenue.'
        ]
      }
    ],
    conclusion: '"Samrat\'s" unprecedented success represents a turning point for Indian cinema. It demonstrates that with adequate investment, world-class production values, and universal storytelling, Bollywood can compete globally. This achievement will likely inspire more ambitious projects and further international collaboration, cementing Indian cinema\'s position in global entertainment.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default EntertainmentArticle1;
