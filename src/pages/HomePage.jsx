import React from 'react';
import Header from '../components/Header';
import OdishaSection from '../components/OdishaSection';

const HomePage = ({ theme, odishaArticles }) => {
  return (
    <div>
      <Header theme={theme} />
      <OdishaSection theme={theme} odishaArticles={odishaArticles} />
    </div>
  );
};

export default HomePage;
