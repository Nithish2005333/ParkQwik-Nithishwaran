import React from "react";
import TestimonialSection from "../components/TestimonialSection";
import DownloadSection from "../components/DownloadSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <ContactSection />
      <TestimonialSection />
      <ContactForm />
      <DownloadSection />
      <FAQSection />
    </div>
  );
};

export default Contact;
