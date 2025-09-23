'use client'

import React from "react";

const InsightRoll = ({ insights }) => {
  return (
    <div className="w-full bg-gradient-to-r from-accent via-accent/90 to-accent text-light py-2 overflow-hidden relative">
      {/* Main marquee container */}
      <div className="flex gap-8 sm:gap-12 whitespace-nowrap animate-marquee">
        {insights.concat(insights).map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-shrink-0 px-3 sm:px-4 group hover:scale-105 transition-transform duration-300"
          >
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-b from-white to-light bg-clip-text text-transparent">
              {item.value}
            </span>
            <span className="text-xs sm:text-sm opacity-90 mt-1 font-medium tracking-wide">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 w-8 sm:w-12 h-full bg-gradient-to-r from-accent to-transparent z-10" />
      <div className="absolute right-0 top-0 w-8 sm:w-12 h-full bg-gradient-to-l from-accent to-transparent z-10" />

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 18s;
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default InsightRoll;
