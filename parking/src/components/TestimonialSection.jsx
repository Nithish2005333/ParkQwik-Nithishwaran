import React from "react";

const testimonials = [
  {
    name: "Charle",
    rating: 5,
    title: "My car looks absolutely shiny every morning.",
    text: "I tried ParkQwik car wash service on the recommendation of a friend, and there has been no looking back since then.",
    image:
      "https://media.istockphoto.com/id/1398385367/photo/happy-millennial-business-woman-in-glasses-posing-with-hands-folded.jpg?s=612x612&w=0&k=20&c=Wd2vTDd6tJ5SeEY-aw0WL0bew8TAkyUGVvNQRj3oJFw=",
  },
  {
    name: "Kumar",
    rating: 5,
    title: "ParkQwik is the best parking app I've used so far.",
    text: "I can quickly check for open spots and secure one with ease. The convenience is unmatched.",
    image:
      "https://st3.depositphotos.com/10313122/14438/i/450/depositphotos_144388651-stock-photo-studio-shot-young-persian-man.jpg",
  },
  {
    name: "Jessica",
    rating: 5,
    title: "Had a great experience with ParkQwik.",
    text: "ParkQwik has been a lifesaver in urban areas with limited parking options. I no longer waste time driving around aimlessly.",
    image:
      "https://t3.ftcdn.net/jpg/12/96/54/02/360_F_1296540226_YeoRZKS3BDQaRrF46Ui6xFj1ytVQrDPK.jpg",
  },
  {
    name: "Liya",
    rating: 5,
    title: "Using ParkQwik has been a game-changer for me.",
    text: "I can reserve a spot in advance and have peace of mind knowing it's waiting for me. Highly recommended!",
    image:
      "https://media.istockphoto.com/id/1129638608/photo/smiling-businesswoman-looking-at-camera-webcam-make-conference-business-call.jpg?s=612x612&w=0&k=20&c=NH4ZQvdy7E8Gnen21e50zgKjbZzgNygnrVzCI0E3u9o=",
  },
];

const TestimonialSection = () => {
  return (
    <section className="w-full py-12 px-6 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Our Happy Customers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all ">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 object-cover "
            />
            <div className="p-6 bg-white rounded-t-2xl -mt-6 relative z-10 shadow-md m-4 ">
              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 mt-2">{item.text}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-1 text-yellow-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-800 font-semibold">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
