import React from "react";

const PromoSection = () => {
  return (
    <div className="relative w-full bg-fixed bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('/img/pre.jpg')" }}>
      <div className="relative max-w-7xl mx-auto px-4  flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left Side Text */}
        <div className="text-white me-18 text-center md:text-right  md:mb-0 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-14"> black sneakers, so classy!</h1>
          <p className="text-lg mb-10">
           This is Photoshop's version of Lorem Ipsum. auctor aliquet. Aenean so licitudin, lorem quis bibendum auctor, nisi elit. 
          </p>
          <button className="px-6 py-2 border hover:border-white hover:bg-blue-500  hover:-translate-y-1 transition-all duration-500 ease-in-out transform text-white">
            Explore Now
          </button>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center me-2 items-end relative z-10 overflow-visible">
          <img
            src="/img/pre.png"
            alt="Promo Image"
            className="max-w-full h-auto object-contain  translate-y-[100px] "
          />
        </div>
      </div>

      {/* Overlay Background Layer for Payment - positioned below children but above background */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-[url('/img/payment-bg.jpg')] bg-cover bg-center z-[1] pointer-events-none" /> */}
    </div>
  );
};

export default PromoSection;
