import React from 'react';
import NewsArticle from '../components/NewsArticle';

const AstrospeakArticle1 = ({ theme }) => {
  const articleData = {
    badge: 'PREMIUM',
    title: 'Ancient Vedic Astronomy Validated by Modern Scientific Discoveries',
    author: 'Dr. Madhav Sharma',
    date: 'March 22, 2022',
    category: 'ASTROSPEAK',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80',
    imageCaption: 'Ancient astronomical instruments representing Vedic wisdom',
    intro: 'Recent astronomical observations have validated several predictions made in ancient Vedic texts thousands of years ago. These discoveries are reigniting interest in traditional Indian astronomy and its sophisticated understanding of celestial phenomena.',
    sections: [
      {
        heading: 'Ancient Knowledge Rediscovered',
        paragraphs: [
          'Vedic texts accurately described planetary movements, solar and lunar eclipses, and cosmic cycles long before modern telescopes. The Surya Siddhanta, dated 400-500 CE, calculated Earth\'s diameter within 0.2% of modern measurements.',
          'Ancient Indian astronomers understood Earth\'s rotation, calculated the speed of light remarkably accurately, and described gravitational principles predating Newton by centuries.'
        ],
        quote: {
          text: 'The mathematical and observational sophistication of Vedic astronomy challenges our assumptions about ancient scientific knowledge.',
          author: 'Dr. Madhav Sharma, Historian of Science'
        }
      },
      {
        heading: 'Modern Validation',
        paragraphs: [
          'Recent satellite observations confirmed predictions in Vedic texts about specific planetary alignments occurring every 26,000 years. These calculations, made without modern instruments, demonstrate remarkable astronomical understanding.',
          'The concept of cosmic cycles described in ancient texts aligns with modern understanding of galactic rotation and stellar evolution. Precision in ancient calculations suggests sophisticated observational methods lost to history.'
        ],
        image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&q=80',
        imageCaption: 'Modern telescope validating ancient astronomical predictions'
      },
      {
        heading: 'Scientific and Cultural Significance',
        paragraphs: [
          'These validations encourage reevaluation of ancient scientific traditions. Researchers are systematically studying Sanskrit astronomical texts using modern scientific methods, discovering insights that could contribute to contemporary astronomy.',
          'The work demonstrates that scientific knowledge isn\'t linear—ancient civilizations achieved remarkable insights through different methodological approaches. Recognizing this enriches our understanding of human scientific achievement.'
        ]
      }
    ],
    conclusion: 'The validation of Vedic astronomical predictions reminds us that ancient civilizations possessed sophisticated scientific knowledge. While we must avoid uncritical glorification, genuine achievements deserve recognition. Studying ancient astronomy through rigorous scientific methods could yield insights while honoring humanity\'s diverse scientific heritage. The intersection of traditional wisdom and modern science offers rich possibilities for future discoveries.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default AstrospeakArticle1;
