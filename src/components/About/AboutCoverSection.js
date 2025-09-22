import Image from "next/image";
import React from "react";
import profileCharacter from "../../../public/character.png";

const AboutCoverSection = () => {
  return (
    <section className="w-full min-h-[70vh] border-b-2 border-solid border-dark flex flex-col lg:flex-row items-center justify-center text-dark">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 h-[40vh] lg:h-full border-b-2 lg:border-b-0 lg:border-r-2 border-solid border-dark flex items-center justify-center bg-gray-50">
        <Image
          src={profileCharacter}
          alt="Hirdu character"
          className="w-3/4 h-auto max-h-[60vh] object-contain object-center drop-shadow-xl"
          priority
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2 px-6 md:px-12 py-10 lg:py-0 text-center lg:text-left space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug">
          Dream Big, <span className="text-violet-600">Learn Always</span>, Create Impact.
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
          Hi! I’m <span className="font-semibold">Hridaaey Rayamajhi</span>, a bachelor’s student at
          <span className="font-medium"> BITM</span> and an aspiring web developer & designer.
          I love blending modern technology with creative design to craft digital
          experiences that are both functional and beautiful.
        </p>
        <div className="flex justify-center lg:justify-start gap-4 pt-2">
          <button className="px-5 py-2 rounded-lg bg-violet-600 text-white font-medium shadow-md hover:bg-violet-700 transition">
            Let’s Connect
          </button>
          <button className="px-5 py-2 rounded-lg border border-violet-600 text-violet-600 font-medium hover:bg-violet-50 transition">
            My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCoverSection;
