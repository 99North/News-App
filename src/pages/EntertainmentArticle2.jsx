import React from 'react';
import NewsArticle from '../components/NewsArticle';

const EntertainmentArticle2 = ({ theme }) => {
  const articleData = {
    badge: null,
    title: 'Streaming Platforms Invest $5 Billion in Regional Content',
    author: 'Priyanka Kapoor',
    date: 'March 17, 2022',
    category: 'ENTERTAINMENT',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200&q=80',
    imageCaption: 'Streaming content production representing digital entertainment boom',
    intro: 'Major streaming platforms have announced a collective $5 billion investment in regional language content across India. This massive commitment recognizes the vast untapped audience beyond metropolitan areas and Hindi-speaking markets.',
    sections: [
      {
        heading: 'Investment Breakdown',
        paragraphs: [
          'Netflix, Amazon Prime, Disney+, and domestic platforms are producing 500+ originals in 12 Indian languages over the next two years. Tamil, Telugu, Bengali, and Marathi content receive the largest allocations.',
          'The investment includes series, films, documentaries, and reality shows tailored to regional tastes. Each platform is establishing production facilities in regional centers like Chennai, Hyderabad, and Kolkata.'
        ],
        quote: {
          text: 'India isn\'t one market—it\'s 15 markets with distinct languages, cultures, and content preferences. We\'re finally recognizing this reality.',
          author: 'Streaming Platform Executive'
        }
      },
      {
        heading: 'Creator Opportunities',
        paragraphs: [
          'The investment creates opportunities for 50,000 actors, directors, writers, and technical professionals in regional industries. Many talented creators previously limited by regional market size can now reach national and international audiences.',
          'Content partnerships with regional studios provide distribution channels and financial backing previously unavailable. Streaming platforms offer upfront investments reducing financial risks for creators.'
        ],
        image: 'https://images.unsplash.com/photo-1574267432644-f74f8ec579c0?w=1200&q=80',
        imageCaption: 'Content creators working on regional productions'
      },
      {
        heading: 'Audience Impact',
        paragraphs: [
          'Regional content viewership grew 400% in the past year, with subscribers increasingly consuming content in their native languages. Subtitles and dubbing make regional content accessible to wider audiences.',
          'The investment addresses long-standing complaints about Hindi content dominance. Platforms report that regional content often outperforms Hindi shows in total viewership when all languages are combined.'
        ]
      }
    ],
    conclusion: 'This $5 billion investment acknowledges India\'s linguistic and cultural diversity as a strength rather than a challenge. By empowering regional creators and serving diverse audiences, streaming platforms are reshaping Indian entertainment. The beneficiaries are not just platforms and creators but millions of viewers who can now enjoy premium content in their native languages, celebrating their unique cultures on a national stage.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default EntertainmentArticle2;
