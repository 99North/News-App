import React from 'react';
import Header from '../components/Header';
import OdishaSection from '../components/OdishaSection';
import NationalInternationalSection from '../components/NationalInternationalSection';
import SubscribeSection from '../components/SubscribeSection';
import EnvironmentSection from '../components/EnvironmentSection';
import EducationHealthSection from '../components/EducationHealthSection';
import EntertainmentWithSidebar from '../components/EntertainmentWithSidebar';
// Deprecated Components
import DepEnvironmentSection from '../components/_EnvironmentSection';
import DepEducationHealthSection from '../components/_EducationHealthSection';

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
    <div >
      <Header theme={theme} />
      <OdishaSection theme={theme} />
      <NationalInternationalSection theme={theme} />
      <DepEnvironmentSection theme={theme} environmentArticles={environmentArticles} />
      <EnvironmentSection theme={theme} />
      {/* <DepEducationHealthSection
        theme={theme}
        educationArticles={educationArticles}
        healthArticles={healthArticles}
      /> */}
      <EducationHealthSection theme={theme} />
      {/* FIX ME: For later */}
      {/* <EntertainmentWithSidebar theme={theme} /> */}
      <SubscribeSection theme={theme} />
    </div>
  );
};

export default HomePage;
