"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Top Banner */}
      <div
        className="w-full h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/img/about5.jpg')" }}
      >
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
          About Page
        </h1>
      </div>

      {/* Slide Section */}
      <section className="container h-[60vh] mx-auto px-4 py-20 relative">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-26 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-black"
        >
          <FaChevronLeft />
        </button>

        {/* Slide Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl pt-4 font-bold mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg pt-4 mb-6">{slides[currentSlide].text}</p>
          <h3 className="text-xl font-semibold">{slides[currentSlide].name}</h3>
          <p className="text-gray-600">{slides[currentSlide].role}</p>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-26 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-black"
        >
          <FaChevronRight />
        </button>
      </section>
    </div>
  );
}
