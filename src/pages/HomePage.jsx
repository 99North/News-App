import React from 'react';
import Header from '../components/Header';
import OdishaSection from '../components/OdishaSection';
import NationalInternationalSection from '../components/NationalInternationalSection';
import SubscribeSection from '../components/SubscribeSection';
import EnvironmentSection from '../components/EnvironmentSection';
import EducationHealthSection from '../components/EducationHealthSection';

const HomePage = ({ theme }) => {
  return (
    <div >
      <Header theme={theme} />
      <OdishaSection theme={theme} />
      <NationalInternationalSection theme={theme} />
      <EnvironmentSection theme={theme} />
      <EducationHealthSection theme={theme} />
      {/* FIX ME: For later */}
      {/* <EntertainmentWithSidebar theme={theme} /> */}
      <SubscribeSection theme={theme} />
    </div>
  );
};

export default HomePage;
