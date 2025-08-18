import React from "react";

const perks = [
  {
    number: "01",
    title: "Faster Booking",
    description: "You can book parking space in just a few steps",
    icon: "https://parkqwik.com/static/media/reserve.f1a5b84f081918130a3db9426ad774d5.svg", // Replace with actual icon
  },
  {
    number: "02",
    title: "Cheaper Price",
    description: "We offer cost-effective parking subscription plans",
    icon: "https://parkqwik.com/static/media/money.8c99d9ea6ce8ae7215b6dca87e2dc27f.svg", // Replace with actual icon
  },
  {
    number: "03",
    title: "Enchanced Security",
    description: "Equipped with CCTV and array system",
    icon: "https://parkqwik.com/static/media/cctv.88ff33ca629c3691aa2fde4b1f485e24.svg", // Replace with actual icon
  },
  {
    number: "04",
    title: "Covered Parking",
    description: "Offers convenience and enhanced security",
    icon: "https://parkqwik.com/static/media/cargarage.9ef1604cc3bd2444a19e15e64f2e300c.svg", // Replace with actual icon
  },
];

const ProductPerks = () => {
  return (
    <section className="bg-green-50 py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-900">
        Our Product Perks
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {perks.map((perk, index) => (
          <div key={index} className="flex items-start space-x-6">
            <div className="flex flex-col items-center">
              <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm mb-2">
                {perk.number}
              </div>
              <img
                src={perk.icon}
                alt={perk.title}
                className="h-14 w-14 object-contain"
              />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-green-700">
                {perk.title}
              </h3>
              <p className="text-gray-700 mt-1 text-sm">{perk.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPerks;
