// app/about/page.jsx
"use client";

import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row h-[70vh]">
      {/* Left Side with Background Image */}
      <div
        className="w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/img/about1.jpg')" }}
      ></div>

      {/* Right Side with Content and Background Image */}
      <div
        className="w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center relative flex items-center justify-start"
        style={{ backgroundImage: "url('/img/about2.jpg')" }}
      >
        <div className="absolute top-1/2 left-[1in] transform -translate-y-1/2 text-white max-w-md">
          <h1 className="text-4xl font-bold mb-4">for the occassion </h1>
          <p className="text-lg mb-6">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec 
          </p>
           <button className="px-6 py-2 border hover:bg-blue-400  hover:-translate-y-1 transition-all duration-550 transform text-white ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
