import React from "react";

const locations = [
  {
    title: "Shopping Malls",
    icon: "https://parkqwik.com/static/media/malls.bb4cdd1daf512d03fcf084192f12434a.svg",
  },
  {
    title: "Restaurants",
    icon: "https://parkqwik.com/static/media/restaurant.0cad8dae65ab5bfbe2ef8cc65db9d4f1.svg",
  },
  {
    title: "Residential Areas",
    icon: "https://parkqwik.com/static/media/residential.d87b24f6f8040e47f0c49b674f34d832.svg",
  },
  {
    title: "Shops",
    icon: "https://parkqwik.com/static/media/supermarket.2da32a34fa85c3538df5d19fd7e49c0d.svg",
  },
];

const HeroParkingLocations = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-gray-800">
        We Offer Parking Services At
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <img
              src={loc.icon}
              alt={loc.title}
              className="h-20 w-20 mx-auto mb-4 object-contain"
            />
            <p className="text-green-600 font-medium">{loc.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroParkingLocations;
