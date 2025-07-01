'use client';

import React, { useEffect, useState } from 'react';

const skills = [
  { name: 'danim', level: 80 },
  { name: 'courderoy', level: 80 },
  { name: 'tweed', level: 60 },
  { name: 'polymer', level: 70 },
];

export default function ProgressBar() {
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    const duration = 3000; 
    let start = null;

    function animate(timestamp) {
      if (!start) start = timestamp;
      let elapsed = timestamp - start;    

      setProgress(
        skills.map(skill => (elapsed / duration) * skill.level)
      );

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <div>
      {skills.map((skill, i) => (
        <div key={skill.name} className="mb-7">
          <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-gray-700">{skill.name}</span>
            <span className="text-sm font-medium text-gray-500">{Math.floor(progress[i])}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div
              className="bg-gray-600 h-1 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress[i]}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
