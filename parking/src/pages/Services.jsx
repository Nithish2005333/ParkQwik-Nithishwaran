import React from "react";
import OurServices from "../components/OurServices2";
import ServicesAndInfo from "../components/ServicesAndInfo";
import DownloadSection from "../components/DownloadSection";
import FAQSection from "../components/FAQSection";
import OurServices2 from "../components/OurServices2";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";

const Services = () => {
  return (
    <div>
      <div className="w-full">
        {/* Hero Section */}
        <div
          className="bg-cover bg-center h-[60vh] md:h-[75vh] flex flex-col items-center justify-center text-white text-center px-4 opacity-50 "
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmcmYePhEHDOsuOQBWGRmXcIIVWBhQOyelxQ&s')",
          }}>
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            Your All-in-One Vehicle Companion
          </h1>
          <p className="mt-4 w-[80%] text-sm md:text-lg font-medium drop-shadow-sm">
            Discover seamless services, from Parking, FASTag recharge, roadside
            assistance to vehicle insurance and simplify all bill payments in
            one convenient app. Empower your journey with ParkQwik, where every
            service you need is just a tap away!
          </p>
        </div>
      </div>

      <OurServices2 />
      {/* Info Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Text */}

        {/* Right Image Section */}
        <div className="flex gap-6 ml-24 md:gap-10 justify-center">
          <img
            src={phone1}
            alt="Phone 1"
            className="w-40 md:w-52 drop-shadow-xl"
          />
          <img
            src={phone2}
            alt="Phone 2"
            className="w-40 md:w-52 drop-shadow-xl"
          />
        </div>

        <div className="md:w-1/2 ml-12 space-y-4 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Parking is easy with us
          </h3>
          <p className="text-gray-600 max-w-md ">
            ParkQwik helps you to find, reserve, and pay for parking spaces in a
            few taps. Say goodbye to endless searching and wasted time.
          </p>
        </div>
      </div>
      <DownloadSection />
      <FAQSection />
    </div>
  );
};

export default Services;
