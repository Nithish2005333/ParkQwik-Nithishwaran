import React from 'react';
import { MdLocalParking, MdEvStation, MdLocalShipping, MdAttachMoney } from 'react-icons/md';
import { FaMapMarkerAlt, FaCreditCard } from 'react-icons/fa';
import phone1 from '../assets/phone1.png' 
import phone2 from '../assets/phone2.png' 

const services = [
  { icon: <FaCreditCard className="text-green-600 text-3xl" />, label: 'Fastag Services' },
  { icon: <FaMapMarkerAlt className="text-green-600 text-3xl" />, label: 'Nearby Parking' },
  { icon: <MdEvStation className="text-green-600 text-3xl" />, label: 'EV Parking' },
  { icon: <MdLocalShipping className="text-green-600 text-3xl" />, label: 'Car Insurance' },
  { icon: <MdLocalParking className="text-green-600 text-3xl" />, label: 'Road Assistance' },
  { icon: <MdAttachMoney className="text-green-600 text-3xl" />, label: 'Toll Estimator' },
];

const ServicesAndInfo = () => {
  return (
    <section className="w-full py-12 px-6 bg-white">
      {/* Services */}
      <h2 className="text-center text-3xl font-semibold mb-8">Our Services</h2>
      <div className="flex flex-wrap justify-center items-center gap-6 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl w-36 h-36 flex flex-col items-center justify-center text-center hover:shadow-xl transition"
          >
            {service.icon}
            <span className="mt-3 text-sm font-medium text-gray-800">{service.label}</span>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Text */}
        <div className="md:w-1/2 ml-12 space-y-4 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Parking is easy with us
          </h3>
          <p className="text-gray-600 max-w-md ">
            ParkQwik helps you to find, reserve, and pay for parking spaces in a few taps. Say goodbye to endless searching and wasted time.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex gap-6 md:gap-10 justify-center">
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
      </div>
    </section>
  );
};

export default ServicesAndInfo;
