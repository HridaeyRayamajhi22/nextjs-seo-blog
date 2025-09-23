'use client'

import React from "react";

const InsightRoll = ({ insights }) => {
  return (
    <div className="w-full bg-accent text-light py-6 overflow-hidden relative">
      <div
        className="flex gap-12 whitespace-nowrap absolute animate-marquee"
        style={{ willChange: "transform" }}
      >
        {insights.concat(insights).map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-shrink-0 px-4">
            <span className="text-2xl font-bold">{item.value}</span>
            <span className="text-sm opacity-90 mt-1">{item.label}</span>
          </div>
        ))}
      </div>

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
      `}</style>
    </div>
  );
};

export default InsightRoll;
