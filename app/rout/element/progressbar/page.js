'use client';

import React from 'react';
import ProgressBar from './progress';

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-5 py-10">
      {/* 🔷 Top Two Columns */}
      <div className="flex flex-wrap justify-between gap-6">
        {/* 🔶 Left - 50% */}
        <div className="w-full md:w-[48%] p-10">
          <ProgressBar />
        </div>

        {/* 🔵 Right - 50% */}
        <div className="w-full md:w-[48%] p-10">
          <ProgressBar />
        </div>
      </div>

      {/* 🟢 Full Width Below */}
      <div className="mt-5 p-10 w-full">
        <ProgressBar />
      </div>
    </div>
  );
}
