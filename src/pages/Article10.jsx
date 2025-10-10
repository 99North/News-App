import React from 'react';
import NewsArticle from '../components/NewsArticle';

const Article10 = ({ theme }) => {
  const articleData = {
    badge: null,
    title: 'UNESCO declares new world heritage sites across five continents',
    author: 'Pierre Dubois',
    date: 'March 7, 2022',
    category: 'INTERNATIONAL',
    image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1200&q=80',
    imageCaption: 'Ancient architectural site newly designated as UNESCO World Heritage',
    intro: 'The United Nations Educational, Scientific and Cultural Organization has added 34 new sites to its prestigious World Heritage List, recognizing exceptional cultural landmarks and natural wonders that represent humanity\'s shared heritage. The selections span archaeological treasures, pristine ecosystems, and architectural marvels.',
    sections: [
      {
        heading: 'Historic Selections',
        paragraphs: [
          'Among the most significant additions is the ancient city of Dholavira in India, one of the largest Harappan civilization settlements dating back 5,000 years. The site showcases sophisticated urban planning, advanced water management systems, and insights into one of the world\'s earliest civilizations.',
          'In Peru, the Chankillo Archaeoastronomical Complex—a 2,300-year-old solar observatory—earned recognition for its remarkable astronomical precision. The 13 towers along a hilltop were used to mark the sun\'s position throughout the year with remarkable accuracy.'
        ],
        quote: {
          text: 'These sites connect us to our collective past and remind us of humanity\'s timeless ingenuity and creativity.',
          author: 'Audrey Azoulay, UNESCO Director-General'
        }
      },
      {
        heading: 'Natural Wonders',
        paragraphs: [
          'The natural heritage list welcomed spectacular additions including the Hyrcanian Forests of Iran—ancient temperate rainforests that have existed for 25-50 million years, surviving ice ages that wiped out similar forests elsewhere. These forests host unique biodiversity found nowhere else on Earth.',
          'Kaeng Krachan Forest Complex in Thailand, Southeast Asia\'s largest protected forest, gained recognition for its exceptional biodiversity. The site provides habitat for 57 globally threatened species including tigers, elephants, and numerous endemic birds.'
        ],
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
        imageCaption: 'Ancient forest ecosystem preserved as natural heritage'
      },
      {
        heading: 'European Architectural Heritage',
        paragraphs: [
          'Europe saw the addition of several spa towns, including the Great Spas of Europe—a transnational site spanning seven countries. These historic spa towns represent the development of European spa culture from the 18th to 20th centuries, combining architecture, urban planning, and therapeutic traditions.',
          'The Mathildenhöhe Artists\' Colony in Darmstadt, Germany, earned recognition as an outstanding example of early modern architecture and applied arts. The site showcases the Jugendstil movement and its influence on 20th-century design.'
        ]
      },
      {
        heading: 'Cultural Landscapes',
        paragraphs: [
          'New cultural landscape designations include the Hawraman/Uramanat region spanning Iran and Iraq—a remote mountainous area where people have maintained traditional agro-pastoral lifestyles for millennia. The site demonstrates sustainable interaction between humans and challenging environments.',
          'The Rice Terraces of the Philippine Cordilleras expansion recognizes additional areas where indigenous communities have cultivated rice on steep mountain slopes for 2,000 years. These terraces represent sophisticated engineering and sustainable agriculture practices.'
        ],
        quote: {
          text: 'Cultural landscapes show us that heritage isn\'t just about monuments—it\'s about living traditions and sustainable relationships with nature.',
          author: 'Dr. Mechtild Rössler, Director of UNESCO World Heritage Centre'
        }
      },
      {
        heading: 'African Heritage Recognition',
        paragraphs: [
          'Africa received several important designations, including the Bale Mountains National Park in Ethiopia—a biodiversity hotspot hosting numerous endemic species. The park\'s afro-alpine habitats are among the most unique ecosystems on the continent.',
          'The trans-boundary site of Ivindo National Park in Gabon showcases virtually pristine equatorial rainforest with spectacular waterfalls. The site represents one of Africa\'s least disturbed forest ecosystems.'
        ]
      },
      {
        heading: 'Conservation Implications',
        paragraphs: [
          'World Heritage designation brings international recognition but also responsibility. Sites must meet strict conservation standards and develop management plans protecting their outstanding universal value. The designation often increases tourism, providing economic benefits while requiring careful visitor management.',
          'UNESCO provides technical assistance and, in some cases, financial support for conservation efforts. The organization also monitors sites to ensure they maintain their heritage value, with the ability to place sites on the "in danger" list if threats emerge.'
        ]
      },
      {
        heading: 'Future Nominations',
        paragraphs: [
          'Over 1,600 nominations await consideration for future World Heritage designations. The process involves rigorous evaluation by international experts assessing each site\'s outstanding universal value, authenticity, integrity, and protection measures.',
          'UNESCO emphasizes the importance of balanced representation on the World Heritage List, encouraging nominations from underrepresented regions and categories. Particular focus is being placed on modern heritage, industrial sites, and cultural landscapes.'
        ]
      }
    ],
    conclusion: 'The expansion of the World Heritage List reflects humanity\'s growing recognition that our cultural and natural treasures transcend national boundaries. These sites belong to all humanity and deserve collective protection. As we face unprecedented environmental and social challenges, preserving these irreplaceable heritage sites becomes not just an act of remembrance but an investment in our collective future. Each designation reminds us that we are custodians of wonders inherited from the past and responsible for passing them intact to future generations.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default Article10;
