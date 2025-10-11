import React from 'react';
import Header from '../components/Header';
import OdishaSection from '../components/OdishaSection';
import NationalInternationalSection from '../components/NationalInternationalSection';
import SubscribeSection from '../components/SubscribeSection';
import EnvironmentSection from '../components/EnvironmentSection';
import EducationHealthSection from '../components/EducationHealthSection';
import EntertainmentSection from '../components/EntertainmentSection';
import ArchiveSearchSection from '../components/ArchiveSearchSection';

const HomePage = ({ 
  theme, 
  odishaArticles, 
  nationalArticles, 
  internationalArticles, 
  environmentArticles,
  educationArticles,
  healthArticles,
  entertainmentArticles,
  allArticles
}) => {
  return (
    <div>
      <Header theme={theme} />
      <OdishaSection theme={theme} odishaArticles={odishaArticles} />
      <NationalInternationalSection 
        theme={theme} 
        nationalArticles={nationalArticles}
        internationalArticles={internationalArticles}
      />
      <SubscribeSection theme={theme} />
      <EnvironmentSection theme={theme} environmentArticles={environmentArticles} />
      <EducationHealthSection 
        theme={theme}
        educationArticles={educationArticles}
        healthArticles={healthArticles}
      />
      <EntertainmentSection 
        theme={theme}
        entertainmentArticles={entertainmentArticles}
      />
      <ArchiveSearchSection theme={theme} allArticles={allArticles} />
    </div>
  );
};

export default HomePage;
