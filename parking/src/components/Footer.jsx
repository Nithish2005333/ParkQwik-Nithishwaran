import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronDown,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-footer text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Social */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Park Qwik</h1>
          <p className="mb-4 text-sm">The Complete Parking App and Car Services Solution</p>
          <p className="font-semibold mb-2">Follow Us</p>
          <div className="flex space-x-4 text-white">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Blogs</li>
            <li>Newsletters</li>
            <li>Help & Support</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund & Cancellation Policy</li>
            <li>Data Deletion</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-bold mb-2">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>Fastag Services</li>
            <li>Nearby Parking</li>
            <li>EV Parking</li>
            <li>Doorstep Car Wash</li>
            <li>Road Assistance</li>
            <li>Car Insurance</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Reach Us */}
        <div>
          <h3 className="font-bold mb-2">Reach Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <Mail size={16} /> <span>info@parkqwik.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} /> <span>+91 842 842 88 33</span>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin size={16} /> <span>Level 7, IIFL Towers, 143, MGR Main Road, Perungudi, Chennai - 96</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Office Dropdowns */}
      <div className="mt-10 text-center">
        <h3 className="text-lg font-bold mb-4">Our Office Address</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {['Chennai', 'Bangalore', 'Mumbai', 'Delhi'].map((city) => (
            <div
              key={city}
              className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg flex items-center justify-between w-60"
            >
              {city} Office <ChevronDown size={18} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center mt-8 text-sm text-white">
        © {new Date().getFullYear()} Parkqwik Private Limited. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
