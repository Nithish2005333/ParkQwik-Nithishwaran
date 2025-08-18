import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const faqs = [
  {
    question: 'Can I reserve a parking spot in advance?',
    answer: 'Yes, ParkQwik allows you to reserve spots in advance for convenience and peace of mind.',
  },
  {
    question: 'Can I cancel my parking reservation?',
    answer: 'Yes, you can cancel your reservation through the app before the parking time starts.',
  },
  {
    question: 'Does ParkQwik operate in multiple cities?',
    answer: 'Yes, we are operational in major cities across India, and expanding rapidly.',
  },
  {
    question: 'How can I extend my parking reservation?',
    answer: 'You can extend your reservation time from within the app as long as the spot is available.',
  },
  {
    question: 'Do you offer valet parking service?',
    answer: 'Valet services are available in select locations. Check the app for details in your area.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium text-gray-900"
            >
              {faq.question}
              {activeIndex === index ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
