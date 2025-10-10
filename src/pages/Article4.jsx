import React from 'react';
import NewsArticle from '../components/NewsArticle';

const Article4 = ({ theme }) => {
  const articleData = {
    badge: 'PREMIUM',
    title: 'Climate change is accelerating faster than scientists predicted',
    author: 'Dr. Robert Hayes',
    date: 'March 5, 2022',
    category: 'ENVIRONMENT',
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=1200&q=80',
    imageCaption: 'Melting glaciers represent one of the most visible signs of accelerating climate change',
    intro: 'New data from climate monitoring stations worldwide reveals that global warming is progressing faster than even the most pessimistic models predicted just a decade ago. Scientists warn that immediate action is required to prevent catastrophic consequences.',
    sections: [
      {
        heading: 'Alarming New Data',
        paragraphs: [
          'According to the latest report from the Intergovernmental Panel on Climate Change (IPCC), global temperatures have risen 1.2 degrees Celsius above pre-industrial levels, with the pace of warming accelerating in recent years.',
          'Arctic ice is melting at unprecedented rates, with some regions experiencing temperature increases of up to 3 degrees Celsius. This rapid warming is creating feedback loops that further accelerate climate change, such as decreased ice cover leading to less solar radiation being reflected back into space.'
        ],
        quote: {
          text: 'We are witnessing changes that we didn\'t expect to see for another 20 to 30 years. The window for action is closing rapidly.',
          author: 'Dr. Robert Hayes, Climate Scientist'
        }
      },
      {
        heading: 'Extreme Weather Events',
        paragraphs: [
          'The acceleration of climate change is manifesting in more frequent and severe weather events. Record-breaking heat waves, unprecedented wildfires, and catastrophic flooding have become increasingly common across all continents.',
          'In 2021 alone, climate-related disasters caused over $300 billion in economic damages worldwide. Communities that previously experienced such events once per generation are now facing them multiple times per decade.'
        ],
        image: 'https://images.unsplash.com/photo-1592339030175-0ad67b1c4c9b?w=1200&q=80',
        imageCaption: 'Extreme weather events have become more frequent and severe globally'
      },
      {
        heading: 'Ocean Warming and Acidification',
        paragraphs: [
          'The world\'s oceans have absorbed about 90% of the excess heat trapped by greenhouse gases, leading to significant changes in marine ecosystems. Coral reefs are experiencing mass bleaching events with increasing frequency, threatening biodiversity and coastal protection.',
          'Ocean acidification, caused by absorbed carbon dioxide, has increased by 30% since pre-industrial times. This poses severe risks to shellfish, plankton, and the entire marine food web that depends on them.'
        ],
        quote: {
          text: 'Our oceans are sending us a distress signal. The question is whether we will respond in time.',
          author: 'Dr. Maria Santos, Marine Biologist'
        }
      },
      {
        heading: 'Path Forward',
        paragraphs: [
          'Despite the dire warnings, scientists emphasize that it\'s not too late to prevent the worst outcomes. Immediate and substantial reductions in greenhouse gas emissions, combined with investments in renewable energy and carbon capture technologies, can still limit warming to 1.5 degrees Celsius.',
          'Many countries have committed to achieving net-zero emissions by mid-century, but current policies fall short of these goals. Experts stress that ambition must be matched with concrete action and international cooperation.'
        ]
      }
    ],
    conclusion: 'The accelerating pace of climate change demands an equally accelerated response. While the challenges are immense, human ingenuity and determination have overcome seemingly insurmountable obstacles before. The question is not whether we can address climate change, but whether we will act with the urgency and scale that the crisis demands.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default Article4;
