"use client";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Manager",
    question: "Why like us?",
    answer:
      "We provide top-notch customer service, fast delivery, and a dedicated support team who are always ready to assist you with any need at any time.",
  },
  {
    title: "Manager",
    question: "Why like us?",
    answer:
      "Our platform ensures secure transactions, user-friendly interface, and a seamless shopping experience that makes customers return again and again for quality.",
  },
];

export default function WhyLikeUsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("left"); // or "right"

  // Auto slide (every 4 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goNext = () => {
    setDirection("left");
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setDirection("right");
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden bg-white rounded-xl shadow-lg">
      {/* Slide content */}
      <div className="relative h-64">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full px-6 py-10 text-center transition-all duration-700 ease-in-out 
            ${index === current ? "opacity-100 z-20" : "opacity-0 z-10"} 
            ${index === current && direction === "left" ? "animate-slideInLeft" : ""}
            ${index === current && direction === "right" ? "animate-slideInRight" : ""}`}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{slide.title}</h3>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">{slide.question}</h2>
            <p className="text-gray-600">{slide.answer}</p>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={goNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
