import React from 'react';
import NewsArticle from '../components/NewsArticle';

const HealthArticle1 = ({ theme }) => {
  const articleData = {
    badge: 'PREMIUM',
    title: 'India Achieves Universal Healthcare Coverage with Ayushman Bharat Expansion',
    author: 'Dr. Priya Menon',
    date: 'March 24, 2022',
    category: 'HEALTH',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&q=80',
    imageCaption: 'Healthcare workers providing services under Ayushman Bharat',
    intro: 'India has achieved a historic milestone with the expanded Ayushman Bharat program now covering 1.3 billion citizens. This makes it the world\'s largest government-funded healthcare program, ensuring free medical care for previously uninsured millions.',
    sections: [
      {
        heading: 'Program Expansion',
        paragraphs: [
          'Originally covering 500 million economically vulnerable citizens, Ayushman Bharat now extends to the entire population. The program provides ₹5 lakh annual coverage per family for hospitalization and treatment across 25,000+ empaneled hospitals.',
          'The expansion includes preventive health services, outpatient care, and medications—not just hospitalization. 150,000 Health and Wellness Centers provide primary care in rural and underserved areas.'
        ],
        quote: {
          text: 'Universal healthcare isn\'t just about medical coverage—it\'s about ensuring health concerns don\'t drive families into poverty.',
          author: 'Health Minister'
        }
      },
      {
        heading: 'Impact on Healthcare Access',
        paragraphs: [
          'Since expansion, 50 million previously untreated patients received medical care. Hospital visits increased 200% in rural areas. Early detection of diseases improved dramatically with regular health screenings now accessible to all.',
          'The program reduced out-of-pocket health expenses by 40% nationally, preventing millions from falling into poverty due to medical costs. Catastrophic health expenditure decreased from 18% to 7% of families.'
        ],
        image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80',
        imageCaption: 'Modern healthcare facility serving Ayushman Bharat beneficiaries'
      },
      {
        heading: 'Technology Integration',
        paragraphs: [
          'Digital health IDs enable seamless treatment across facilities. Electronic health records ensure care continuity. Telemedicine services connected remote areas to specialist doctors.',
          'AI-powered diagnostic tools assist in early disease detection. Blockchain technology prevents fraud and ensures authentic claims processing.'
        ]
      }
    ],
    conclusion: 'Achieving universal healthcare coverage represents a monumental accomplishment for a nation of India\'s size and diversity. While challenges remain—quality improvement, specialist access, and sustained funding—this milestone ensures that medical emergencies no longer mean financial ruin. As implementation matures, India\'s approach could offer lessons for other developing nations pursuing universal healthcare goals.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default HealthArticle1;
