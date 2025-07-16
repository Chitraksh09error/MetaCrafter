import React from "react";
import { FaPhoneAlt, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const cards = [
    {
      id: 1,
      title: "Call Us",
      detail: "+91 80100 63514",
      icon: <FaPhoneAlt size={50} className="text-white" />,
      gradient: "bg-gradient-to-r from-green-400 via-green-500 to-green-600",
    },
    {
      id: 2,
      title: "Follow on Instagram",
      detail: "@metacrafter.01",
      icon: <FaInstagram size={50} className="text-white" />,
      gradient: "bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600",
    },
    {
      id: 3,
      title: "Email Us",
      detail: "metacrafter01@gmail.com",
      icon: <FaEnvelope size={50} className="text-white" />,
      gradient: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600",
    },
  ];

  return (
    <div className=" flex flex-col items-center justify-center px-6 lg:py-10 py-5 bg-[#eee8d5] relative">
      {/* Background Pattern */}

      {/* Heading & Subheading */}
      <h1 className="text-5xl font-extrabold mb-4 text-gray-800 tracking-tight">
        Contact Us
      </h1>
      <p className="text-lg text-gray-600 mb-16 text-center max-w-xl">
        We’re here to help you! Reach out via call, Instagram, or email.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-3xl overflow-hidden shadow-xl bg-white hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
          >
            {/* Top Section with Gradient */}
            <div
              className={`flex items-center justify-center h-52 ${card.gradient}`}
            >
              <div className="animate-pulse">{card.icon}</div>
            </div>

            {/* Bottom Section */}
            <div className="lg:p-8 p-2 text-center">
              <h2 className="lg:text-2xl text-xl font-bold mb-2 text-gray-800">
                {card.title}
              </h2>
              <p className="text-gray-600 text-lg text-center ">{card.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-gray-700">
          Ready to Work With Us?
        </h3>
        <button className="mt-6 px-8 py-3 bg-black text-white text-lg rounded-xl hover:bg-gray-800 transition">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Contact;
