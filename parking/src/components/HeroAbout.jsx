import React from "react";
import heroBg from "../assets/aboutCover.jpg"

const HeroAbout = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[60vh] md:h-[75vh] flex flex-col items-center justify-center text-white text-center px-4 opacity-50 "
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          ParkQwik is India’s No1 General & EV Parking Marketplace
        </h1>
        <p className="mt-4 text-sm md:text-lg font-medium drop-shadow-sm">
          We continuously strive to offer our customers the finest parking and car services solutions
        </p>
      </div>

      {/* About Section */}
      <section className="py-16 px-4 md:px-20 bg-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">About ParkQwik</h2>
        <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed text-sm md:text-base">
          ParkQwik connects numerous Renters across India and Singapore who are seeking parking spaces with Hosts
          who have available driveways, garages, or parking spots to share.
        </p>
        <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed text-sm md:text-base mt-4">
          Through our intuitive mobile app platform, we effortlessly facilitate connections between vehicle owners and
          parking lot operators, guaranteeing a smooth and hassle-free experience for everyone involved.
        </p>
      </section>
    </div>
  );
};

export default HeroAbout;
