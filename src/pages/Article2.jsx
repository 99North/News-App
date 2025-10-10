import React from 'react';
import NewsArticle from '../components/NewsArticle';

const Article2 = ({ theme }) => {
  const articleData = {
    badge: 'PREMIUM',
    title: "How omicron's mutations make it the most infectious coronavirus variant",
    author: 'Dr. Emily Rodriguez',
    date: 'March 4, 2022',
    category: 'SCIENCE',
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=1200&q=80',
    imageCaption: 'Coronavirus particles under electron microscope showing spike proteins',
    intro: 'The Omicron variant of SARS-CoV-2 has become the dominant strain worldwide due to its unprecedented ability to spread. New research reveals how specific mutations in the virus\'s spike protein have made it the most transmissible variant yet.',
    sections: [
      {
        heading: 'Understanding the Mutations',
        paragraphs: [
          'Omicron carries more than 30 mutations in its spike protein alone, compared to just a handful in earlier variants. These mutations have fundamentally changed how the virus interacts with human cells, making it significantly more contagious.',
          'Scientists at the Francis Crick Institute have identified three key mutations that work together to enhance the virus\'s ability to bind to human cells while simultaneously evading antibodies from previous infections or vaccinations.'
        ],
        quote: {
          text: 'The constellation of mutations in Omicron represents an evolutionary leap that we haven\'t seen in previous variants.',
          author: 'Dr. Emily Rodriguez, Virologist'
        }
      },
      {
        heading: 'Increased Transmissibility',
        paragraphs: [
          'Laboratory studies show that Omicron can replicate up to 70 times faster in human bronchial tissue compared to the Delta variant. This rapid replication in the upper airways contributes to its high transmissibility, as infected individuals shed more virus particles.',
          'However, the same studies indicate that Omicron replicates about 10 times slower in lung tissue, which may explain why infections tend to be less severe despite the higher transmission rate.'
        ],
        image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&q=80',
        imageCaption: 'Laboratory analysis of viral transmission patterns'
      },
      {
        heading: 'Immune Evasion Capabilities',
        paragraphs: [
          'One of Omicron\'s most concerning features is its ability to partially evade immunity from previous infections and vaccinations. The mutations have altered the shape of the spike protein in ways that make it less recognizable to antibodies.',
          'Despite this immune evasion, studies consistently show that booster doses of vaccines significantly improve protection against severe disease. The immune system\'s T-cell response remains largely effective even against Omicron.'
        ],
        quote: {
          text: 'While Omicron can evade antibodies to some extent, our cellular immunity remains robust against severe outcomes.',
          author: 'Professor Michael Chang, Immunologist'
        }
      },
      {
        heading: 'Global Health Response',
        paragraphs: [
          'Public health authorities worldwide have adapted their strategies to address Omicron\'s unique characteristics. The focus has shifted toward protecting vulnerable populations through booster vaccinations while managing the healthcare system capacity.',
          'Researchers are already studying subsequent variants to understand how the virus continues to evolve. The lessons learned from Omicron are helping scientists develop more broadly protective vaccines for future variants.'
        ]
      }
    ],
    conclusion: 'The Omicron variant represents a significant milestone in the COVID-19 pandemic, demonstrating both the virus\'s remarkable ability to evolve and our growing understanding of how to combat it. As we continue to study these mutations, we gain valuable insights that will inform pandemic preparedness for years to come.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default Article2;
