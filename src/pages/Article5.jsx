import React from 'react';
import NewsArticle from '../components/NewsArticle';

const Article5 = ({ theme }) => {
  const articleData = {
    badge: null,
    title: 'New study reveals the benefits of Mediterranean diet on longevity',
    author: 'Dr. Isabella Martinez',
    date: 'March 5, 2022',
    category: 'HEALTH',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80',
    imageCaption: 'Fresh vegetables, olive oil, and fish form the foundation of the Mediterranean diet',
    intro: 'A comprehensive 20-year study involving over 100,000 participants has provided compelling evidence that the Mediterranean diet significantly extends lifespan and reduces the risk of chronic diseases. The findings represent one of the most extensive investigations into dietary patterns and longevity.',
    sections: [
      {
        heading: 'The Study\'s Findings',
        paragraphs: [
          'Researchers from Harvard Medical School tracked the health outcomes and dietary habits of participants from 1990 to 2020. Those who closely followed a Mediterranean diet showed a 25% lower risk of all-cause mortality compared to those with less adherence.',
          'The benefits were particularly pronounced for cardiovascular health, with a 30% reduction in heart disease risk, and neurological health, with participants showing significantly lower rates of cognitive decline and dementia.'
        ],
        quote: {
          text: 'This study provides the strongest evidence yet that what we eat profoundly impacts not just how long we live, but how well we live.',
          author: 'Dr. Isabella Martinez, Lead Researcher'
        }
      },
      {
        heading: 'Key Components of the Diet',
        paragraphs: [
          'The Mediterranean diet emphasizes whole, minimally processed foods including vegetables, fruits, whole grains, legumes, nuts, and olive oil as the primary fat source. Fish and seafood are consumed regularly, while red meat and processed foods are limited.',
          'What makes this dietary pattern particularly effective is not just individual foods, but the synergistic combination of nutrients. The high content of antioxidants, healthy fats, and anti-inflammatory compounds work together to protect against cellular damage and chronic inflammation.'
        ],
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&q=80',
        imageCaption: 'A typical Mediterranean meal rich in vegetables, legumes, and healthy fats'
      },
      {
        heading: 'Mechanisms of Protection',
        paragraphs: [
          'The longevity benefits appear to stem from multiple biological pathways. The diet\'s high content of monounsaturated fats from olive oil helps reduce LDL cholesterol while maintaining beneficial HDL cholesterol levels.',
          'Additionally, the abundance of polyphenols from fruits, vegetables, and red wine provides powerful antioxidant effects. These compounds help neutralize free radicals, reduce oxidative stress, and protect cells from damage that contributes to aging and disease.'
        ],
        quote: {
          text: 'The Mediterranean diet isn\'t just about food – it\'s a holistic approach to eating that includes social connections and lifestyle factors.',
          author: 'Professor Antonio Greco, Nutritionist'
        }
      },
      {
        heading: 'Practical Implementation',
        paragraphs: [
          'Adopting a Mediterranean diet doesn\'t require drastic changes for most people. Simple modifications like replacing butter with olive oil, eating fish twice weekly, and increasing vegetable portions can yield significant benefits.',
          'The study also highlighted the importance of consistency over perfection. Participants who maintained moderate adherence to the diet over many years experienced substantial benefits, suggesting that sustainable lifestyle changes are more important than strict adherence.'
        ]
      },
      {
        heading: 'Beyond Individual Health',
        paragraphs: [
          'Interestingly, the Mediterranean diet also offers environmental benefits. The emphasis on plant-based foods and sustainable seafood results in a lower carbon footprint compared to typical Western diets high in red meat.',
          'As healthcare systems worldwide face increasing burdens from chronic diseases, the Mediterranean diet represents a cost-effective public health intervention that could significantly reduce disease prevalence and healthcare costs.'
        ]
      }
    ],
    conclusion: 'This landmark study reinforces what traditional Mediterranean cultures have known for centuries: a diet rich in whole foods, healthy fats, and plant-based ingredients is fundamental to health and longevity. As we face global health challenges from chronic diseases, returning to these time-tested dietary patterns may be our most powerful tool for promoting health and extending lifespan.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default Article5;
