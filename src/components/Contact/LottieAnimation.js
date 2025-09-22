"use client" 
import React from "react";
import Lottie from "lottie-react";
import slothAnimation from "@/public/Sloth meditate.json"; // adjust path if needed

const LottieAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-64 h-64">
        <Lottie animationData={slothAnimation} loop={true} />
      </div>
      <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center">
        Slow and Steady, but Always Moving Forward 🦥
      </h2>
    </div>
  );
};

export default LottieAnimation;
