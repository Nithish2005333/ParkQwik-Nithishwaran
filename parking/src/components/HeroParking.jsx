import React from "react";
import { PhoneCall } from "lucide-react"; 
import heroParkingImg from "../assets/heroParking.png"


const HeroParking = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-12">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Revolutionize Your <span className="text-green-600">Parking</span>{" "}
          <span className="text-green-600">Journey</span> with Our Expertise
        </h1>
        <p className="text-gray-500 text-lg">
          Our team will assist you throughout the reservation process
        </p>
        <a
          href="tel:+918428428833"
          className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-xl shadow-md hover:bg-green-700 transition"
        >
          <PhoneCall className="mr-2 w-5 h-5" />
          +91 842 842 88 33
        </a>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={heroParkingImg}
          alt="Parking Illustration"
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default HeroParking;
