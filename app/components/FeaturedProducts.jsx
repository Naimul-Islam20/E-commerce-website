import React, { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const images = ["/img/f6.jpg", "/img/f4.jpg", "/img/f5.jpg"];

const FeaturedProducts = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const startAutoSlide = () => {
    timeoutRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  const resetAutoSlide = () => {
    clearInterval(timeoutRef.current);
    startAutoSlide();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    resetAutoSlide();
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    resetAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(timeoutRef.current);
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-24"
      style={{ backgroundImage: "url('/img/home2.jpg')" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="max-w-6xl mx-auto flex flex-col items-center px-4">
          <h1 className="text-5xl font-extrabold mb-6 text-black tracking-wide uppercase text-center">
            popular items
          </h1>

          <p className="text-black text-base mt-6 mb-12 max-w-xl text-center">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit.
          </p>
        </div>

        {/* Slide and Info Section */}
        <div className="relative flex flex-col md:flex-row items-center gap-8">
          {/* White background */}
          <div
            className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 
             h-[400px] bg-white opacity-90 rounded-lg z-0 
             border-4 border-blue-400 hidden md:block"
          ></div>

          {/* Slider */}
          <div className="w-full md:w-1/2 z-10 flex justify-center md:justify-start pl-18">
            <div className="relative w-[430px] h-[500px] md:w-[430px] md:h-[500px]  max-w-md max-h-[500px] mx-auto">
              <img
                src={images[current]}
                alt="Featured Product"
                className="w-full h-full object-cover rounded-lg shadow-lg transition duration-500 ease-in-out"
              />
              {/* Slide Change Buttons */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 rounded-full transition z-20"
              >
                <IoIosArrowBack size={32} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 rounded-full transition z-20"
              >
                <IoIosArrowForward size={32} />
              </button>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left z-10">
            <p className="text-sm text-gray-600 uppercase mb-2">New Arrival</p>
            <h1 className="text-4xl font-bold text-black mb-6">
              Stylish Jacket
            </h1>
            <h3 className="flex justify-center md:justify-start text-yellow-500 mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="mr-1" />
              ))}
            </h3>
            <p className="text-gray-700 mb-6">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit.
            </p>
            {/* Shop Now Button */}
            <button className="px-6 py-2 border border-black text-black  hover:bg-blue-500  hover:-translate-y-1 transition-all duration-500 ease-in-out transform ">
              Add to cart
            </button>
            <button className="px-6 py-2 border border-black text-black  hover:bg-blue-500  hover:-translate-y-1 transition-all duration-500 ease-in-out transform ">
              <Link href="/rout/element/team"> Team Page</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
