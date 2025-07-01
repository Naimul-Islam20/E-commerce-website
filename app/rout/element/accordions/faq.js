'use client';

import React, { useState } from 'react';
import FaqData from './faqData.json';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default  function FAQ  () {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
        <div >
          {FaqData.map((item, index) => (
            <div key={`left-${index}`}
              className=" cursor-pointer hover:bg-black hover:text-white mb-3 me-2"
              onClick={() => toggleFAQ(`left-${index}`)}>
              <div className="flex justify-between items-center border border-black ">
                <h5 className="text-lg font-medium p-3 ">{item.question}</h5>
                {activeIndex === `left-${index}` ?
                ( <FaChevronUp/> ) : ( <FaChevronDown/> )}
              </div>
              {activeIndex === `left-${index}` && (
                <p className="bg-white text-black">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
  );
};


