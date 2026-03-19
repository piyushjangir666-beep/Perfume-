import React, { useState, useEffect } from 'react';
import slider10 from "./images/slider10.png"
import slider11 from "./images/slider11.png"
import slider13 from "./images/slider13.png"
import slider14 from "./images/slider14.png"
function Bottemslider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { image: slider10, name: "MUMBAI - PHOENIX, PALLADIUM MALLL" },
    { image: slider11, name: "MUMBAI - International Airport T2" },
    { image: slider13, name: "CHANDIGARH - ELANTE MALL" },
    { image: slider14, name: "DELHI - Select City Walk Mall" },
  ];

  useEffect(() => { 
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full bg-white py-8">
      <div className="relative w-full overflow-hidden group">
        <img
          src={images[currentIndex].image}
          alt={images[currentIndex].name}
          className="w-full h-96 object-cover transition-all duration-700"
          key={currentIndex}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

        {/* Text Animation */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h2 className="text-white text-4xl font-bold text-center mb-6 animate-fade-in-up">
            {images[currentIndex].name}
          </h2>
          <button className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition">
            GET DIRECTION
          </button>
        </div>

        {/* Left Arrow */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 z-10 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 z-10 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Bottemslider;
