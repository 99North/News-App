import React from 'react';
import NewsArticle from '../components/NewsArticle';

const Article13 = ({ theme }) => {
  const articleData = {
    badge: 'PREMIUM',
    title: 'Ancient civilization discovered in remote Amazon rainforest',
    author: 'Dr. Carlos Mendoza',
    date: 'March 8, 2022',
    category: 'SCIENCE',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80',
    imageCaption: 'Aerial view of newly discovered earthworks in the Amazon rainforest',
    intro: 'Archaeologists using advanced lidar technology have uncovered evidence of a vast, sophisticated civilization in the Bolivian Amazon that thrived between 500 and 1400 CE. The discovery challenges long-held assumptions about the Amazon as a pristine wilderness and reveals it once supported urban complexes rivaling ancient cities of Europe.',
    sections: [
      {
        heading: 'The Discovery',
        paragraphs: [
          'Using helicopter-mounted lidar sensors that penetrate dense jungle canopy, researchers from the University of Exeter mapped an area of 4,500 square kilometers, revealing an extensive network of settlements connected by causeways and surrounded by massive earthworks.',
          'The civilization, centered in the Llanos de Mojos region, featured urban centers with populations estimated at 10,000-15,000 people—comparable to London\'s population in 1086. These settlements included monumental platforms, reservoirs, terraces, and defensive fortifications stretching across hundreds of square kilometers.'
        ],
        quote: {
          text: 'This discovery fundamentally changes our understanding of Amazonian history and demonstrates that complex civilizations flourished in environments we thought couldn\'t support them.',
          author: 'Dr. Carlos Mendoza, Lead Archaeologist'
        }
      },
      {
        heading: 'Urban Complexity',
        paragraphs: [
          'The lidar data reveals a sophisticated urban planning system with residential areas organized around central plazas and ceremonial structures. Raised causeways up to 5 kilometers long connected settlements, remaining passable even during seasonal flooding that inundates much of the region.',
          'Most impressive are the massive earthwork structures—some reaching 22 meters in height and stretching up to 5 kilometers. These weren\'t merely defensive walls but complex hydraulic systems controlling water flow across the landscape, enabling agriculture in an otherwise challenging environment.'
        ],
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
        imageCaption: 'Lidar technology revealing hidden structures beneath forest canopy'
      },
      {
        heading: 'Agricultural Innovation',
        paragraphs: [
          'The civilization developed sophisticated agricultural techniques including raised field systems that transformed seasonally flooded grasslands into highly productive farmland. These fields, interconnected by canals, could support intensive maize cultivation and fish farming simultaneously.',
          'Analysis of soil samples reveals extensive use of biochar—a type of charcoal soil amendment that increases fertility. This "terra preta" or "black earth" remains remarkably fertile today, centuries after abandonment, demonstrating advanced understanding of soil management.'
        ],
        quote: {
          text: 'These people were environmental engineers on a scale we\'re only beginning to appreciate. They didn\'t merely adapt to the Amazon—they transformed it.',
          author: 'Dr. Heiko Prümers, German Archaeological Institute'
        }
      },
      {
        heading: 'Population and Society',
        paragraphs: [
          'Conservative estimates suggest the region supported populations of 500,000 to 1 million people at its peak—far exceeding previous assessments of pre-Columbian Amazonian populations. This challenges narratives of the Amazon as sparsely inhabited wilderness before European contact.',
          'Artifacts recovered from test excavations indicate extensive trade networks. Pottery styles show influences from coastal cultures thousands of kilometers away, while shell and stone ornaments originated from distant regions, suggesting sophisticated commerce spanning the continent.'
        ]
      },
      {
        heading: 'Environmental Transformation',
        paragraphs: [
          'Researchers now recognize that much of what we consider "virgin" Amazon rainforest actually reflects human modification. The civilization cultivated useful tree species, creating what scientists call "forest gardens" that persist in species composition today.',
          'This challenges conservation paradigms that view the Amazon as untouched nature requiring preservation in pristine state. Instead, the forest may be better understood as a cultural landscape shaped by millennia of human management—raising complex questions about conservation approaches.'
        ]
      },
      {
        heading: 'Collapse and Abandonment',
        paragraphs: [
          'The civilization appears to have collapsed around 1400 CE, before significant European contact. Climate data suggests a severe drought period coinciding with abandonment, though researchers believe the complex was already in decline.',
          'Diseases introduced by early European explorers may have spread ahead of actual contact, devastating populations before Europeans penetrated the interior. This would explain early explorer accounts describing abandoned earthworks and remnant populations.'
        ],
        quote: {
          text: 'The tragedy is that this civilization was largely destroyed before we knew it existed. We\'re excavating not just ruins but a forgotten chapter of human achievement.',
          author: 'Dr. Prümers'
        }
      },
      {
        heading: 'Implications for Modern Amazonia',
        paragraphs: [
          'The discovery has important implications for current Amazonian development and conservation debates. If the forest once supported large populations through sustainable practices, current arguments about development carrying capacity need reevaluation.',
          'Indigenous communities have long insisted their ancestors shaped the Amazon rather than simply inhabiting it. This discovery validates traditional knowledge and suggests contemporary indigenous land management practices may draw on sophisticated ancient techniques.'
        ]
      },
      {
        heading: 'Future Research',
        paragraphs: [
          'Lidar surveys have covered only a fraction of the Amazon. Researchers estimate hundreds of similar sites await discovery across the basin. The findings suggest we may need to completely revise our understanding of pre-Columbian population densities and societal complexity in lowland South America.',
          'Collaborative projects with indigenous communities are now mapping oral traditions onto archaeological sites, combining scientific methods with traditional knowledge. This approach promises deeper insights than either perspective alone could provide.'
        ]
      }
    ],
    conclusion: 'The discovery of this ancient Amazonian civilization is more than an archaeological breakthrough—it\'s a paradigm shift in how we understand human relationship with tropical forests. Rather than viewing the Amazon as a pristine wilderness where humans were mere inhabitants, we now recognize it as a sophisticated cultural landscape where civilizations flourished through environmental engineering and sustainable management. This knowledge arrives at a critical moment, as modern society grapples with balancing development and conservation in the Amazon. Perhaps the answers lie not in preserving an imagined pristine past but in learning from the sustainable practices of complex societies that thrived here for centuries.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default Article13;
