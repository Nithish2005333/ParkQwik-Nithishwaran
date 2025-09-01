import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMsg("Message submitted successfully!");
        setFormData({ name: "", contact: "", message: "" });

        // Hide success message after 3 seconds
        setTimeout(() => {
          setSuccessMsg("");
        }, 2000);
      } else {
        setErrorMsg(data.message || "Submission failed.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Server error. Please try again later.");
    }
  };

  return (
    <section className="flex items-center justify-center py-16 px-4">
      <div className="bg-green-50 p-10 rounded-[60px] w-full max-w-2xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          To Know More About Our Product
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Feel free to reach out with your questions or requests. We're here to assist you!
        </p>

        {successMsg && (
          <p className="text-green-700 bg-green-100 border border-green-400 p-3 rounded-md mb-4 text-center transition-opacity duration-500">
            {successMsg}
          </p>
        )}

        {errorMsg && (
          <p className="text-red-700 bg-red-100 border border-red-400 p-3 rounded-md mb-4 text-center">
            {errorMsg}
          </p>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="border border-green-500 rounded-md p-3"
          />
          <input
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter Your Email Address/ Mobile Number"
            className="border border-green-500 rounded-md p-3"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write something about your inquiry"
            rows="5"
            className="border border-green-500 rounded-md p-3"
          ></textarea>
          <button
            type="submit"
            className="bg-green-700 text-white py-2 px-6 rounded-md w-fit mx-auto mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
