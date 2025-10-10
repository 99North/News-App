import React from 'react';
import NewsArticle from '../components/NewsArticle';

const Article8 = ({ theme }) => {
  const articleData = {
    badge: null,
    title: 'Global markets surge amid positive economic indicators',
    author: 'Marcus Thompson',
    date: 'March 6, 2022',
    category: 'BUSINESS',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
    imageCaption: 'Trading floor activity during the market surge',
    intro: 'Stock markets worldwide experienced significant gains as multiple economic indicators pointed toward robust recovery and sustained growth. The S&P 500, FTSE 100, and major Asian indices all posted substantial increases, driven by strong employment data and corporate earnings.',
    sections: [
      {
        heading: 'Market Performance',
        paragraphs: [
          'The S&P 500 climbed 3.2%, marking its best single-day performance in six months. Technology stocks led the rally, with major companies posting gains exceeding 5%. The surge added approximately $1.2 trillion to global market capitalization in a single trading session.',
          'European markets followed suit, with the FTSE 100 rising 2.8% and Germany\'s DAX gaining 3.1%. Asian markets had already set the tone earlier in the day, with Japan\'s Nikkei advancing 2.9% and Hong Kong\'s Hang Seng jumping 3.5%.'
        ],
        quote: {
          text: 'We\'re seeing a fundamental shift in investor sentiment driven by concrete economic improvements rather than speculation.',
          author: 'Christine Lagarde, President of the European Central Bank'
        }
      },
      {
        heading: 'Employment Data Exceeds Expectations',
        paragraphs: [
          'The U.S. Bureau of Labor Statistics reported that 678,000 jobs were added in February, significantly exceeding analyst predictions of 440,000. Unemployment fell to 3.8%, approaching pre-pandemic levels and suggesting genuine economic recovery.',
          'Wage growth remained strong at 5.1% year-over-year, indicating tight labor markets across industries. Importantly, job gains were broad-based, spanning manufacturing, services, and technology sectors, suggesting sustainable rather than sector-specific growth.'
        ],
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&q=80',
        imageCaption: 'Economic indicators showing positive trends across sectors'
      },
      {
        heading: 'Corporate Earnings Beat Forecasts',
        paragraphs: [
          'Fourth-quarter earnings season revealed that 78% of S&P 500 companies beat analyst expectations—the highest percentage in over a decade. Aggregate earnings grew 31% year-over-year, demonstrating robust corporate health despite ongoing supply chain challenges.',
          'Technology giants reported particularly strong results, with cloud computing and digital services revenues growing 40-50% annually. Even traditional sectors like manufacturing and retail showed surprising resilience, adapting business models to post-pandemic realities.'
        ],
        quote: {
          text: 'Companies have demonstrated remarkable adaptability. The pandemic forced innovation that\'s now driving profitability.',
          author: 'Mary Daly, President of the Federal Reserve Bank of San Francisco'
        }
      },
      {
        heading: 'Inflation Concerns Moderate',
        paragraphs: [
          'Perhaps most encouraging for investors, inflation showed signs of moderating after months of elevated readings. Supply chain improvements and increased production capacity have begun easing price pressures across multiple categories.',
          'Core inflation, excluding volatile food and energy prices, increased 0.4% month-over-month—down from 0.6% the previous month. This suggests that pandemic-related price spikes may be transitioning to more manageable levels, reducing pressure on central banks to implement aggressive rate hikes.'
        ]
      },
      {
        heading: 'Sector Analysis',
        paragraphs: [
          'Technology and financial sectors led the market advance, benefiting from strong earnings and improved interest rate outlook. Energy stocks also performed well as crude oil prices stabilized around $95 per barrel—high enough to support profitability but not so elevated as to threaten economic growth.',
          'Consumer discretionary stocks surged as retail sales data revealed robust spending despite inflation concerns. This suggests consumer confidence remains strong, supported by healthy employment and rising wages. Even previously struggling sectors like commercial real estate showed signs of recovery.'
        ]
      },
      {
        heading: 'Looking Ahead',
        paragraphs: [
          'Analysts caution that while current indicators are positive, challenges remain. Geopolitical tensions, potential policy shifts, and lingering supply chain issues could still disrupt the positive trajectory. However, the breadth and strength of current economic data provide reasons for cautious optimism.',
          'Most strategists have raised their year-end targets for major indices, with some predicting continued gains of 8-12% if current trends persist. The consensus suggests we may be entering a period of sustained, healthy economic expansion rather than a temporary rally.'
        ]
      }
    ],
    conclusion: 'The convergence of strong employment, robust corporate earnings, and moderating inflation has created a rare moment of market optimism backed by fundamental economic strength. While uncertainties always exist, the current economic data suggests recovery is transitioning from hope to reality. Investors are responding not to speculation but to concrete evidence that the global economy is finding its footing after unprecedented disruption.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default Article8;
