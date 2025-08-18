// src/components/HeroSection.jsx

import React from 'react';
import heroImg from '../assets/parking-illustration.png'; // place your image here

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16">
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
          Simplify Your Car Experience with <span className="text-green-600">ParkQwik</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          The complete Parking App and Car Services Solution
        </p>
      </div>
      <div className="mb-10 md:mb-0">
        <img
          src={heroImg}
          alt="Parking Illustration"
          className="w-[300px] md:w-[400px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
