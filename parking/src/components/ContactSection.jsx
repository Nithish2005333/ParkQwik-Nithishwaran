import { FaEnvelope, FaPhone } from 'react-icons/fa';
import contactImg from "../assets/contactImg.jpg"

export default function ContactSection() {
  return (
    <div
      className="relative bg-cover bg-center h-[60vh] md:h-[75vh] flex flex-col items-center justify-center text-center px-4"
      style={{
        background:"#D1F7AB" ,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 text-gray-800">
        <h2 className="text-3xl md:text-5xl font-semibold mb-2">Get In Touch</h2>
        <p className="text-lg md:text-xl font-medium mb-4">
          CHENNAI | BANGALORE | MUMBAI | DELHI
        </p>
        <p className="text-sm md:text-base mb-2">Need to get in touch with us ?</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-2 text-green-700 font-semibold text-sm md:text-base">
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <a href="mailto:hr@parkqwik.com" className="hover:underline">
              hr@parkqwik.com
            </a>
          </div>
          <span className="hidden md:inline">|</span>
          <div className="flex items-center gap-2">
            <FaPhone />
            <a href="tel:+918428428833" className="hover:underline">
              +91 842 842 88 33
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
