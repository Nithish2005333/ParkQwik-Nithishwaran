// src/components/OurServices.jsx

import React from 'react';

// Sample icons (replace with your image paths or SVGs)
import fastagIcon from '../assets/fastag.png';
import parkingIcon from '../assets/nearby.png';
import evIcon from '../assets/ev-parking.png';
import insuranceIcon from '../assets/insurance.png';
import roadAssistIcon from '../assets/road-assistance.png';
import tollIcon from '../assets/toll.png';

const services = [
  { name: 'Fastag Services', icon: fastagIcon },
  { name: 'Nearby Parking', icon: parkingIcon },
  { name: 'EV Parking', icon: evIcon },
  { name: 'Car Insurance', icon: insuranceIcon },
  { name: 'Road Assistance', icon: roadAssistIcon },
  { name: 'Toll Estimator', icon: tollIcon },
];

const OurServices2 = () => {
  return (
    <section className="py-16 px-4 md:px-20 text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-10">Our Services</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition w-[140px] h-[140px] flex flex-col items-center justify-center"
          >
            <img src={service.icon} alt={service.name} className="w-10 h-10 mb-3" />
            <p className="text-sm font-medium text-gray-800">{service.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices2;
