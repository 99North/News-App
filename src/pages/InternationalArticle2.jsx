import React from 'react';
import NewsArticle from '../components/NewsArticle';

const InternationalArticle2 = ({ theme }) => {
  const articleData = {
    badge: null,
    title: 'European Union Announces Ambitious Digital Currency Initiative',
    author: 'Thomas Mueller',
    date: 'March 15, 2022',
    category: 'INTERNATIONAL',
    image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=1200&q=80',
    imageCaption: 'Digital euro representing the future of European finance',
    intro: 'The European Central Bank has officially launched the digital euro project, aiming to create a central bank digital currency for 340 million EU citizens. This initiative could reshape global finance and challenge cryptocurrency dominance.',
    sections: [
      {
        heading: 'Digital Euro Framework',
        paragraphs: [
          'The digital euro will complement cash, not replace it, offering instant, secure digital payments across Europe. Users can hold up to €3,000 in digital wallets, with larger amounts automatically converted to bank deposits.',
          'Privacy protection is central, with transaction data visible only to users and their banks, not the ECB. The system uses blockchain technology for security while maintaining regulatory oversight.'
        ],
        quote: {
          text: 'The digital euro will preserve monetary sovereignty in an increasingly digital world while providing citizens with safe, efficient payment options.',
          author: 'Christine Lagarde, ECB President'
        }
      },
      {
        heading: 'Technical Infrastructure',
        paragraphs: [
          'The system leverages distributed ledger technology capable of processing 40,000 transactions per second. Offline functionality allows payments without internet connectivity using near-field communication.',
          'Integration with existing payment systems ensures compatibility with current banking infrastructure. Pilot programs in five countries will test functionality before full rollout in 2024.'
        ],
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80',
        imageCaption: 'Advanced digital payment infrastructure'
      },
      {
        heading: 'Global Implications',
        paragraphs: [
          'The digital euro challenges cryptocurrency adoption and strengthens the euro\'s role in international finance. Other central banks are accelerating their own digital currency projects in response.',
          'Cross-border transactions will become faster and cheaper, potentially reducing dependence on dollar-based payment systems. This could reshape global financial power dynamics.'
        ]
      }
    ],
    conclusion: 'The digital euro represents a watershed moment in monetary evolution. By combining blockchain benefits with central bank stability and regulatory oversight, the EU aims to set global standards for digital currencies. Success could accelerate the transition to digital finance worldwide, fundamentally changing how people interact with money.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default InternationalArticle2;
