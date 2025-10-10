import React from 'react';
import NewsArticle from '../components/NewsArticle';

const Article11 = ({ theme }) => {
  const articleData = {
    badge: 'PREMIUM',
    title: 'Breakthrough in cancer research offers new hope for patients',
    author: 'Dr. Amanda Foster',
    date: 'March 7, 2022',
    category: 'HEALTH',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80',
    imageCaption: 'Cancer research laboratory where breakthrough discoveries are being made',
    intro: 'Scientists at Johns Hopkins University and the National Cancer Institute have developed a revolutionary treatment approach that harnesses the body\'s immune system to target and eliminate cancer cells with unprecedented precision. Early clinical trials show complete remission in 72% of patients with previously untreatable cancers.',
    sections: [
      {
        heading: 'The CAR-T Cell Revolution',
        paragraphs: [
          'The breakthrough centers on next-generation CAR-T cell therapy—a technique that genetically engineers a patient\'s own immune cells to recognize and attack cancer. Unlike previous versions that targeted only specific cancers, this new approach can be customized for virtually any tumor type.',
          'Researchers developed a "universal receptor" that can be programmed to target multiple cancer markers simultaneously. This overcomes a major limitation of earlier CAR-T therapies: cancer cells\' ability to evade treatment by losing the single marker being targeted.'
        ],
        quote: {
          text: 'We\'ve essentially created a smart weapon that can adapt as cancer tries to hide. It\'s like having a heat-seeking missile that can track multiple signatures.',
          author: 'Dr. Amanda Foster, Lead Oncologist'
        }
      },
      {
        heading: 'Clinical Trial Results',
        paragraphs: [
          'Phase II trials involving 125 patients with stage IV cancers showed remarkable results. Among those with blood cancers, 87% achieved complete remission within six months. Even more impressively, 72% of solid tumor patients—historically difficult to treat with immunotherapy—showed significant tumor reduction or complete response.',
          'Patients who had exhausted all conventional treatments and were given months to live showed tumor shrinkage within weeks. Follow-up data spanning 18 months indicates sustained remission with minimal relapse rates—suggesting potential permanent cures rather than temporary remissions.'
        ],
        image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=1200&q=80',
        imageCaption: 'CAR-T cells being prepared for patient treatment'
      },
      {
        heading: 'Reducing Side Effects',
        paragraphs: [
          'Earlier CAR-T therapies caused severe side effects including cytokine release syndrome—a dangerous immune overreaction that could be life-threatening. The new protocol incorporates "safety switches" that can dial down immune response if it becomes too aggressive.',
          'Patients in the new trials experienced significantly fewer severe complications. While mild flu-like symptoms were common, serious side effects occurred in only 8% of patients compared to 40% with previous CAR-T approaches. This safety improvement could allow treatment of previously ineligible patients.'
        ],
        quote: {
          text: 'The safety profile is a game-changer. We can now consider this treatment for patients who would have been too fragile for earlier versions.',
          author: 'Dr. Michael Zhang, Clinical Immunologist'
        }
      },
      {
        heading: 'Mechanism of Action',
        paragraphs: [
          'The therapy works by extracting T-cells from the patient\'s blood, modifying them in the laboratory to express chimeric antigen receptors, and multiplying them to millions of cells before reinfusing them. These engineered cells circulate throughout the body, seeking and destroying cancer cells.',
          'What makes this version revolutionary is its ability to recognize cancer cells through multiple pathways. Even if tumors mutate to lose one marker, the CAR-T cells can still identify them through alternative markers. This multi-targeting approach dramatically reduces the likelihood of cancer escape.'
        ]
      },
      {
        heading: 'Manufacturing and Accessibility',
        paragraphs: [
          'One major barrier to CAR-T therapy has been its complexity and cost—often exceeding $500,000 per patient. The new protocol streamlines manufacturing, reducing production time from 3-4 weeks to just 5 days and cutting costs by 60%.',
          'Researchers are also developing "off-the-shelf" universal CAR-T cells that could be mass-produced and immediately available, rather than requiring individual customization. This could transform an expensive, boutique therapy into a widely accessible treatment option.'
        ]
      },
      {
        heading: 'Expansion to Other Diseases',
        paragraphs: [
          'Beyond cancer, researchers are adapting the technology to combat autoimmune diseases, persistent infections, and even organ rejection in transplant patients. Early studies suggest CAR-T cells could be programmed to eliminate malfunctioning immune cells causing diseases like lupus or rheumatoid arthritis.',
          'The NIH has approved trials using modified CAR-T cells against HIV, targeting virus-infected cells that hide from conventional treatments. If successful, this approach could offer functional cures for previously incurable viral infections.'
        ],
        quote: {
          text: 'We\'re witnessing the birth of a new medical paradigm—using biological software to reprogram our immune system.',
          author: 'Dr. Jennifer Doudna, Nobel Laureate in Chemistry'
        }
      },
      {
        heading: 'Regulatory Pathway',
        paragraphs: [
          'The FDA has granted Breakthrough Therapy Designation, expediting the regulatory review process. If current trial results hold, the treatment could receive approval within 18-24 months for multiple cancer types—a remarkably fast timeline for such a complex therapy.',
          'European and Asian regulatory agencies are conducting parallel reviews, potentially enabling synchronized global approval. This coordinated approach could make the treatment available worldwide much faster than typical drug development timelines.'
        ]
      }
    ],
    conclusion: 'This breakthrough represents more than a new cancer treatment—it\'s a fundamental shift in how we approach disease. By turning the patient\'s immune system into a sophisticated, adaptable weapon against cancer, we\'re moving from managing disease to potentially curing it. While challenges remain in scaling production and ensuring equitable access, the technology\'s promise is undeniable. For the first time in oncology\'s history, we can reasonably envision a future where most cancers are curable, transforming what was once a death sentence into a manageable or even temporary condition.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default Article11;
