import React from 'react';
import Header from '../components/Header';
import OdishaSection from '../components/OdishaSection';
import NationalInternationalSection from '../components/NationalInternationalSection';
import SubscribeSection from '../components/SubscribeSection';
import EnvironmentSection from '../components/EnvironmentSection';


const HomePage = ({ theme, odishaArticles, nationalArticles, internationalArticles, environmentArticles, healthArticles }) => {
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
      
    </div>
  );
};

export default HomePage;
