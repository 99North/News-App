import React from 'react';
import NewsArticle from '../components/NewsArticle';

const Article1 = ({ theme }) => {
  const articleData = {
    badge: null,
    title: 'A newfound quasicrystal formed in the first atomic bomb tested in US',
    author: 'Dr. Sarah Mitchell',
    date: 'March 4, 2022',
    category: 'SCIENCE',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    imageCaption: 'The Trinity test site where the first atomic bomb was detonated in 1945',
    intro: 'Scientists have discovered a rare quasicrystal formed during the first atomic bomb test in New Mexico in 1945. This remarkable finding provides new insights into both materials science and the extreme conditions created by nuclear explosions.',
    sections: [
      {
        heading: 'The Discovery',
        paragraphs: [
          'In a groundbreaking study published in the Proceedings of the National Academy of Sciences, researchers identified a previously unknown quasicrystal in the debris from the Trinity nuclear test. The quasicrystal, dubbed "trinitite," was formed in the fraction of a second when the atomic bomb exploded.',
          'Quasicrystals are unusual materials that have an ordered but non-repeating atomic structure. Unlike regular crystals, which have patterns that repeat at regular intervals, quasicrystals have patterns that never quite repeat, similar to the intricate patterns in Islamic tile work.'
        ],
        quote: {
          text: 'This discovery opens up new avenues for understanding the extreme conditions that can form these exotic materials.',
          author: 'Dr. Sarah Mitchell, Lead Researcher'
        }
      },
      {
        heading: 'Formation Under Extreme Conditions',
        paragraphs: [
          'The quasicrystal formed under incredibly extreme conditions: temperatures exceeding 2,000 degrees Celsius and pressures thousands of times greater than atmospheric pressure. These conditions existed for only milliseconds during the nuclear explosion.',
          'The researchers used advanced electron microscopy and X-ray diffraction techniques to analyze tiny samples of the red trinitite. They found that the quasicrystal was composed of silicon, copper, calcium, and iron.'
        ],
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80',
        imageCaption: 'Advanced electron microscopy revealed the unique atomic structure'
      },
      {
        heading: 'Scientific Implications',
        paragraphs: [
          'This finding has significant implications for materials science. Quasicrystals were first discovered in 1984 by Dan Shechtman, who later won the Nobel Prize in Chemistry for this work. Since then, only about 100 natural quasicrystals have been found.',
          'The Trinity quasicrystal is particularly important because it formed from human activity rather than natural geological processes. This suggests that quasicrystals might be more common in industrial and technological settings than previously thought.'
        ],
        quote: {
          text: 'This research demonstrates how even the most destructive human actions can lead to unexpected scientific discoveries.',
          author: 'Professor James Chen, Materials Scientist'
        }
      }
    ],
    conclusion: 'The discovery of this quasicrystal not only adds to our understanding of these exotic materials but also serves as a lasting reminder of the atomic age. As scientists continue to study the Trinity site, they may uncover even more unexpected findings that bridge the gap between nuclear physics and materials science.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default Article1;
