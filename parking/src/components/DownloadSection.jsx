import React from 'react';
import phone1 from "../assets/phone1.png"
import phone3 from "../assets/phone3.png"
import apple from "../assets/apple.png"
import playstore from "../assets/playstore.png"

const DownloadSection = () => {
  return (
    <section className="w-full px-8 py-12 flex flex-col lg:flex-row items-center justify-between bg-white gap-8">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">Download ParkQwik</h2>
        <p className="text-gray-600 text-lg mb-6">
          By downloading ParkQwik, you gain access to a world of seamless parking experiences
          and car services right at your fingertips.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img
              src={playstore}
              alt="Get it on Google Play"
              className="h-14 rounded"
            />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img
              src={apple}
              alt="Download on the App Store"
              className="h-14 rounded "
            />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={phone3}
          alt="ParkQwik App Preview"
          className="w-[45%] max-w-[600px]"
        />
        <img
          src={phone1}
          alt="ParkQwik App Preview"
          className="w-[40%] max-w-[600px]"
        />
      </div>
    </section>
  );
};

export default DownloadSection;
