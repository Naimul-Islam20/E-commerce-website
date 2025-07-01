

import React from 'react';
import FaqToggol from './faq';

const FAQ = () => {
  return (
    <div className="container mx-auto px-10 md:px-20 lg:px-32 py-15">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      {/* 🔷 Flex Grid: Left + Right */}
      <div className="flex flex-wrap justify-between gap-6">
        {/* 🔵 Left */}
        <div className="w-full md:w-[48%] space-y-4">
          <FaqToggol  />
        </div>

        {/* 🔵 Right */}
        <div className="w-full md:w-[48%] space-y-4">
          <FaqToggol />
        </div>
      </div>

      {/* 🟢 Full Width Below */}
      <div className="mt-12 space-y-4">
        <FaqToggol  />
      </div>
    </div>
  );
};

export default FAQ;
