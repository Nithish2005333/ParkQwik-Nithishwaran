import React from "react";
import TestimonialSection from "../components/TestimonialSection";
import DownloadSection from "../components/DownloadSection";
import FAQSection from "../components/FAQSection";
import HeroParking from "../components/HeroParking";
import HeroParkingLocations from "../components/HeroParkingLocations";
import ProductPerks from "../components/ProductPerks";

const Parking = () => {
  return (
    <div>
      <HeroParking />
      <HeroParkingLocations />
      <ProductPerks />
      <TestimonialSection />
      <DownloadSection />
      <FAQSection />
    </div>
  );
};

export default Parking;
