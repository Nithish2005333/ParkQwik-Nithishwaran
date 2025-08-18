import React from 'react'
import TestimonialSection from '../components/TestimonialSection'
import DownloadSection from '../components/DownloadSection'
import FAQSection from '../components/FAQSection'
import HeroAbout from '../components/HeroAbout'

const AboutUs = () => {
  return (
      <div>
          <HeroAbout />
          <TestimonialSection />
          <DownloadSection />
          <FAQSection />
    </div>
  )
}

export default AboutUs