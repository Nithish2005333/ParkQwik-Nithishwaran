import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const FindParking = () => {
  return (
    <section className="w-full px-6 py-12 bg-white flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Find and Reserve <br /> Parking Anywhere
        </h2>
        <p className="text-lg text-gray-600">
          Easily find nearby parking spaces by entering your address or selecting your location
        </p>

        {/* Search Box */}
        <div className="flex items-center rounded-full shadow-md overflow-hidden w-full max-w-xl">
          <div className="pl-4 text-green-600 text-xl">
            <FaSearchLocation />
          </div>
          <input
            type="text"
            placeholder="Enter your location"
            className="flex-grow px-4 py-3 outline-none text-gray-700"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 flex items-center gap-2 text-lg font-medium">
            <IoIosSearch className="text-xl" />
            Search
          </button>
        </div>
      </div>

      {/* Right Content - Google Map */}
      <div className="w-full md:w-1/2">
        <div className="rounded-l-[100px] overflow-hidden shadow-md w-full h-[400px]">
          <iframe
            title="Parking Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15557.571060791167!2d77.5946!3d12.9716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670a6c15607%3A0x3d2a9d04b7f3d640!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1692632483749!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FindParking;
