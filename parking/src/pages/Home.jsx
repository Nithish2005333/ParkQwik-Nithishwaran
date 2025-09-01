import React from 'react'
import HeroSection from '../components/HeroSection';
import OurServices from '../components/ServicesAndInfo';
import FindParking from '../components/FindParking';
import TestimonialSection from '../components/TestimonialSection';
import DownloadSection from '../components/DownloadSection';
import FAQSection from '../components/FAQSection';

const Home = () => {
  return (
      <div>
          <HeroSection />
          <OurServices />
          <FindParking />
          <TestimonialSection />
          <DownloadSection />
          <FAQSection />
    </div>
  )
}

export default Home;