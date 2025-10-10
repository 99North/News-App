import React from 'react';
import Header from '../components/Header';
import OdishaSection from '../components/OdishaSection';
import NationalInternationalSection from '../components/NationalInternationalSection';

const HomePage = ({ theme, odishaArticles, nationalArticles, internationalArticles }) => {
  return (
    <div>
      <Header theme={theme} />
      <OdishaSection theme={theme} odishaArticles={odishaArticles} />
      <NationalInternationalSection 
        theme={theme} 
        nationalArticles={nationalArticles}
        internationalArticles={internationalArticles}
      />
    </div>
  );
};

export default HomePage;
