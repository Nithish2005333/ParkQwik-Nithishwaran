import { FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

export default function CareersSection() {
  return (
    <div
      className="relative bg-cover bg-center h-auto md:h-[75vh] flex flex-col items-center justify-center text-center px-4 py-16"
      style={{
        backgroundColor: "#D1F7AB",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-gray-800 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold mb-2">Careers at ParkQwik</h2>
        <p className="text-lg md:text-xl font-medium mb-6">
          CHENNAI | BANGALORE | MUMBAI | DELHI
        </p>

        <p className="text-sm md:text-base mb-6 px-2">
          We're on the lookout for skilled and dynamic individuals to join our team. If you're passionate about innovation and ready to contribute to our success, be part of a thriving workplace where your talents are valued and growth is encouraged.
        </p>

        <div className="text-sm md:text-base mb-4 flex flex-col md:flex-row items-center justify-center gap-2 text-gray-800">
          <span>Send your resumes to</span>
          <div className="flex items-center gap-2 text-green-700 font-semibold">
            <FaEnvelope />
            <a href="mailto:hr@parkqwik.com" className="hover:underline">
              hr@parkqwik.com
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm md:text-base text-green-700 font-semibold">
          <FaExternalLinkAlt />
          <a
            href="https://www.indeed.com/cmp/Parkqwik" // Replace with actual link if different
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Visit our Indeed Page To Apply Current Openings
          </a>
        </div>
      </div>
    </div>
  );
}
