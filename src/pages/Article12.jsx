import React from 'react';
import NewsArticle from '../components/NewsArticle';

const Article12 = ({ theme }) => {
  const articleData = {
    badge: null,
    title: 'Electric vehicle sales hit record high in global markets',
    author: 'David Peterson',
    date: 'March 7, 2022',
    category: 'BUSINESS',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80',
    imageCaption: 'Electric vehicles at a charging station symbolizing the transportation revolution',
    intro: 'Global electric vehicle sales surged to 6.6 million units in 2021, representing a 108% increase from the previous year and marking EVs\' transition from niche products to mainstream transportation. This exponential growth signals a fundamental transformation in the automotive industry.',
    sections: [
      {
        heading: 'Market Transformation',
        paragraphs: [
          'Electric vehicles now account for nearly 9% of global car sales, up from just 4% in 2020. In leading markets like Norway, EVs comprise 86% of new car sales, while China—the world\'s largest auto market—saw EV sales exceed 3.3 million vehicles, capturing 15% of the market.',
          'The growth trajectory suggests EVs could reach price parity with internal combustion vehicles by 2024-2025, several years earlier than previous projections. Bloomberg NEF estimates that EVs will represent 58% of global passenger vehicle sales by 2040.'
        ],
        quote: {
          text: 'We\'re witnessing the most rapid transformation in automotive history. The question is no longer if EVs will dominate, but how quickly.',
          author: 'Mary Barra, CEO of General Motors'
        }
      },
      {
        heading: 'Technology Advancements',
        paragraphs: [
          'Battery technology improvements are driving EV adoption. The latest generation lithium-ion batteries offer 40% greater energy density than models from five years ago, translating to ranges exceeding 400 miles on a single charge—eliminating range anxiety for most drivers.',
          'Charging infrastructure has expanded dramatically, with global charging stations growing from 1.3 million in 2020 to over 2 million in 2021. Fast-charging networks now enable 200 miles of range in just 15 minutes, making long-distance EV travel increasingly practical.'
        ],
        image: 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=1200&q=80',
        imageCaption: 'Modern fast-charging infrastructure supporting EV adoption'
      },
      {
        heading: 'Regional Market Dynamics',
        paragraphs: [
          'Europe emerged as a surprising leader in EV adoption, with sales reaching 2.3 million vehicles—driven by aggressive emissions regulations and generous purchase incentives. Germany, France, and the UK each saw EV sales more than double year-over-year.',
          'In the United States, EV sales topped 650,000 vehicles, capturing 4.5% of the market. While this lags behind China and Europe, growth is accelerating with new domestic manufacturing facilities from traditional automakers and EV startups bringing production closer to consumers.'
        ],
        quote: {
          text: 'The American auto industry is going all-in on electric. We\'re not just participating in this transition—we\'re going to lead it.',
          author: 'President Joe Biden'
        }
      },
      {
        heading: 'Manufacturing Revolution',
        paragraphs: [
          'Traditional automakers have committed over $330 billion to EV development and production through 2025. Ford plans to produce 600,000 EVs annually by 2023, while Volkswagen aims for 50% of its sales to be electric by 2030.',
          'New manufacturing approaches like Tesla\'s "gigacasting" technology reduce production costs and assembly time. These innovations allow EVs to be built more efficiently than traditional vehicles, further accelerating cost competitiveness.'
        ]
      },
      {
        heading: 'Supply Chain Challenges',
        paragraphs: [
          'Rapid growth has strained supply chains for critical materials like lithium, cobalt, and nickel. Battery-grade lithium prices tripled in 2021, prompting automakers to secure long-term supply contracts and invest in mining operations.',
          'Semiconductor shortages that plagued the entire auto industry hit EV production particularly hard, as electric vehicles require 2-3 times more chips than conventional cars. Despite these challenges, EV production recovered faster than traditional vehicles, demonstrating the sector\'s resilience and priority for manufacturers.'
        ]
      },
      {
        heading: 'Environmental Impact',
        paragraphs: [
          'The 6.6 million EVs sold in 2021 will eliminate approximately 50 million tons of CO2 emissions over their lifetimes compared to equivalent gasoline vehicles. As electricity grids transition to renewable sources, these environmental benefits will multiply.',
          'Life cycle analyses now show that even when accounting for battery production, EVs generate 50-70% lower emissions than gas vehicles in most countries. In regions with clean electricity grids, the advantage approaches 90%.'
        ],
        quote: {
          text: 'Electric vehicles aren\'t just better for the environment—they\'re better vehicles period. Superior performance, lower operating costs, and dramatically reduced maintenance.',
          author: 'Herbert Diess, Former CEO of Volkswagen Group'
        }
      },
      {
        heading: 'Market Outlook',
        paragraphs: [
          'Analysts project 2022 EV sales could exceed 10 million vehicles globally, representing another 50% increase. Several major markets including California, the UK, and Canada have announced bans on new gasoline vehicle sales starting between 2030-2035, creating regulatory momentum.',
          'The used EV market is also maturing, with 2-3 year old models becoming increasingly available. This secondary market development is crucial for mass adoption, making electric transportation accessible to consumers across all income levels.'
        ]
      }
    ],
    conclusion: 'The electric vehicle revolution has passed the point of no return. What began as an environmental imperative has become an economic inevitability, driven by technology improvements, cost reductions, and changing consumer preferences. The automotive industry\'s transformation will ripple through economies worldwide, disrupting oil markets, reshaping utilities, and creating entirely new industries around battery technology and charging infrastructure. As EVs continue their exponential growth trajectory, we\'re not just witnessing a change in how cars are powered—we\'re seeing the reinvention of personal transportation for the 21st century.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default Article12;
