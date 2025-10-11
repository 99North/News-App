import React from 'react';
import Header from '../components/Header';
import OdishaSection from '../components/OdishaSection';
import NationalInternationalSection from '../components/NationalInternationalSection';
import SubscribeSection from '../components/SubscribeSection';
import EnvironmentSection from '../components/EnvironmentSection';
import EducationHealthSection from '../components/EducationHealthSection';
import EntertainmentWithSidebar from '../components/EntertainmentWithSidebar';

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
      <EntertainmentWithSidebar 
        theme={theme}
        entertainmentArticles={entertainmentArticles}
        allArticles={allArticles}
      />
    </div>
  );
};

export default HomePage;
