import React from 'react';
import NewsArticle from '../components/NewsArticle';

const Article15 = ({ theme }) => {
  const articleData = {
    badge: 'PREMIUM',
    title: 'Astronomers detect mysterious signals from distant galaxy',
    author: 'Dr. Alan Morrison',
    date: 'March 8, 2022',
    category: 'SCIENCE',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80',
    imageCaption: 'Radio telescope array detecting signals from deep space',
    intro:
      "Astronomers using the Australian Square Kilometre Array Pathfinder have detected an unprecedented series of radio signals from a galaxy 9 billion light-years away. The signals' regularity and characteristics have sparked intense scientific debate about their origin, with some researchers suggesting they may represent a new astrophysical phenomenon.",
    sections: [
      {
        heading: 'The Detection',
        paragraphs: [
          "The signals, designated FRB 20220308, were detected during a routine sky survey when astronomers noticed a repeating pattern unlike any previously observed fast radio burst. Over 48 hours of observation, the source emitted 1,652 individual bursts arranged in what appears to be a structured sequence.",
          'Fast radio bursts are intense pulses of radio waves lasting mere milliseconds but releasing as much energy as the sun produces in days. While dozens of FRBs have been detected since their discovery in 2007, this source\'s behavior is unprecedented in its complexity and apparent non-randomness.'
        ],
        quote: {
          text: "The mathematical structure in these signals is unlike anything we've seen in nature. It's forcing us to question our assumptions about what's possible.",
          author: 'Dr. Alan Morrison, Lead Astronomer'
        }
      },
      {
        heading: 'Signal Characteristics',
        paragraphs: [
          'Analysis reveals the bursts follow a periodic pattern repeating every 16.35 days, with sub-patterns occurring at precise intervals. The signal frequencies show unusual clustering at specific values that don\'t match predictions from known astrophysical processes.',
          'Most intriguing is the signal\'s bandwidth distribution. Rather than the broad-spectrum emission typical of natural radio sources, these bursts concentrate energy in narrow frequency bands with gaps that some researchers note resemble carrier wave patterns used in communication systems.'
        ],
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
        imageCaption: 'Visualization of the repeating signal pattern detected from the distant galaxy'
      },
      {
        heading: 'Natural Explanations',
        paragraphs: [
          "The scientific consensus favors natural explanations despite the signals' unusual characteristics. Leading theories suggest a neutron star with a complex magnetic field configuration, possibly in a binary system, could produce such patterns through interaction with a companion star.",
          'Alternatively, the signals might originate from a magnetar—a neutron star with an extremely powerful magnetic field—undergoing periodic oscillations or "starquakes" that release energy in structured patterns. Computer models show such configurations could theoretically produce repeating signals, though none have been observed until now.'
        ],
        quote: {
          text: 'Extraordinary claims require extraordinary evidence. While the patterns are intriguing, nature has consistently surprised us with unexpected phenomena.',
          author: 'Dr. Victoria Kaspi, McGill University'
        }
      },
      {
        heading: 'The SETI Perspective',
        paragraphs: [
          'Researchers from the Search for Extraterrestrial Intelligence (SETI) Institute are cautiously examining whether the signals could represent technological activity. The structured patterns, narrow bandwidth, and precise periodicity match theoretical predictions for some types of artificial transmissions.',
          'However, SETI scientists emphasize that numerous natural phenomena initially appeared artificial until better understood. Pulsars, for example, were briefly considered potential alien beacons when discovered in 1967 due to their remarkable regularity, before their natural origin was established.'
        ]
      },
      {
        heading: 'Follow-up Observations',
        paragraphs: [
          'Multiple observatories worldwide have begun coordinated observations to gather more data. The Very Large Array in New Mexico, FAST telescope in China, and soon the James Webb Space Telescope will study the source across multiple wavelengths.',
          'Researchers are particularly interested in detecting any optical or gamma-ray emissions coinciding with the radio bursts. Such multi-wavelength observations could reveal the source\'s nature—whether it\'s a compact object, accretion disk, or something entirely unexpected.'
        ],
        image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&q=80',
        imageCaption: 'International telescopes coordinating observations of the mysterious source'
      },
      {
        heading: 'Theoretical Implications',
        paragraphs: [
          'If natural, these signals could represent a new class of astrophysical phenomena, potentially revealing processes occurring in extreme gravitational and magnetic environments. Understanding the mechanism could advance our knowledge of neutron stars, black holes, and fundamental physics.',
          'Some theoretical physicists suggest the patterns might relate to quantum effects in strong gravitational fields or even provide indirect evidence of exotic physics beyond the Standard Model. These remain speculative but demonstrate how unusual observations drive theoretical innovation.'
        ],
        quote: {
          text: 'Whether artificial or natural, understanding this source will teach us something profound about the universe.',
          author: 'Dr. Avi Loeb, Harvard University'
        }
      },
      {
        heading: 'Historical Context',
        paragraphs: [
          "This isn't the first time mysterious signals have generated excitement. In 1977, the 'Wow! signal' received at Ohio State University remains unexplained but is generally attributed to natural sources. More recently, 'Oumuamua—an unusual interstellar object—sparked debate about its nature.",
          'Each such event advances our observational capabilities and theoretical understanding, regardless of the ultimate explanation. The process of investigating anomalies has consistently led to important discoveries, from pulsars to cosmic microwave background radiation.'
        ]
      },
      {
        heading: 'Public and Scientific Response',
        paragraphs: [
          "The discovery has generated significant public interest, with social media buzzing about potential implications. Scientists caution against premature conclusions while acknowledging the signals' unusual nature warrants serious investigation.",
          'Regardless of origin, the detection demonstrates the power of modern radio astronomy and artificial intelligence in identifying unusual patterns in massive datasets. The algorithms that flagged these signals represent advances in machine learning applied to astronomical research.'
        ]
      }
    ],
    conclusion:
      'The mysterious signals from this distant galaxy remind us how much remains unknown about our universe. While the smart money bets on a natural explanation—albeit for a potentially new phenomenon—the investigation process itself advances science. Whether we ultimately attribute these signals to exotic astrophysics, instrumental artifacts, or something entirely unexpected, the rigorous scientific method being applied demonstrates how astronomy balances open-minded investigation with skeptical analysis. As observations continue and theories are tested, we move closer to understanding these enigmatic signals. The journey of discovery, with its careful data collection, collaborative analysis, and peer review, exemplifies science at its best—driven by curiosity, grounded in evidence, and always open to being surprised by the cosmos.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default Article15;
