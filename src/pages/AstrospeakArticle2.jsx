import React from 'react';
import NewsArticle from '../components/NewsArticle';

const AstrospeakArticle2 = ({ theme }) => {
  const articleData = {
    badge: null,
    title: 'Rare Planetary Alignment Brings Auspicious Period According to Astrology',
    author: 'Pandit Ravi Shankar',
    date: 'March 23, 2022',
    category: 'ASTROSPEAK',
    image: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=1200&q=80',
    imageCaption: 'Planetary alignment creating unique astrological significance',
    intro: 'A rare alignment of five planets—Jupiter, Venus, Mars, Saturn, and Mercury—is creating what astrologers call an exceptionally auspicious period. This celestial configuration, occurring once every 50 years, is believed to bring positive energy for new beginnings.',
    sections: [
      {
        heading: 'The Celestial Event',
        paragraphs: [
          'The five-planet alignment will be visible before dawn for three weeks. Jupiter and Venus, considered highly beneficial planets in Vedic astrology, are particularly prominent. Their conjunction with Mars adds energy and momentum to ventures.',
          'Saturn\'s involvement brings structure and longevity to undertakings, while Mercury enhances communication and intellectual pursuits. This rare combination is considered ideal for major life decisions.'
        ],
        quote: {
          text: 'Such alignments happen rarely and are considered windows of extraordinary potential in Vedic astrology.',
          author: 'Pandit Ravi Shankar, Vedic Astrologer'
        }
      },
      {
        heading: 'Astrological Significance',
        paragraphs: [
          'Vedic astrology views planetary positions as influencing terrestrial events and human affairs. This particular alignment is associated with new beginnings, successful ventures, and positive transformations.',
          'Different zodiac signs will experience varied effects. Fire signs (Aries, Leo, Sagittarius) may see career advancement opportunities. Earth signs focus on financial growth. Air signs benefit in relationships and communication.'
        ],
        image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1200&q=80',
        imageCaption: 'Night sky showing rare planetary alignment'
      },
      {
        heading: 'Traditional Practices',
        paragraphs: [
          'Astrologers recommend specific practices during this period: morning prayers facing east, charitable donations, starting new projects, and avoiding major conflicts. Many choose this time for weddings, business launches, or property purchases.',
          'Temples report increased attendance for special rituals. Astrologers are booked months in advance as people seek guidance on maximizing this period\'s potential.'
        ]
      }
    ],
    conclusion: 'Whether one attributes significance to planetary alignments or views them as psychological anchors for decision-making, such events create moments of collective attention and reflection. For millions who follow Vedic astrology, this alignment represents a precious opportunity. For others, it\'s a beautiful celestial phenomenon reminding us of the cosmos\'s grandeur and our small but significant place within it.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default AstrospeakArticle2;
