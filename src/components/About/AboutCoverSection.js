import Image from "next/image";
import React from "react";
import profileCharacter from "../../../public/character.png";

const AboutCoverSection = () => {
  return (
    <section className="w-full min-h-[70vh] border-b-2 border-solid border-dark flex flex-col lg:flex-row items-center justify-center text-dark">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-0">
        <div className="w-full h-[50vh] lg:h-[80vh] flex items-center justify-center bg-gray-50 border-b-2 lg:border-b-0 lg:border-r-2 border-dark">
          <Image
            src={profileCharacter}
            alt="Hirdu character"
            className="w-3/4 h-auto max-h-[70vh] object-contain object-center drop-shadow-xl"
            priority
          />
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 py-12 lg:py-0">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight md:leading-snug text-center lg:text-left">
          Dream Big, <span className="text-violet-600">Learn Always</span>, Create Impact.
        </h2>

        {/* Subheading / Description */}
        <p className="mt-6 text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          Hi! I’m <span className="font-semibold">Hridaaey Rayamajhi</span>, a bachelor’s student at
          <span className="font-medium"> BITM</span> and an aspiring web developer & designer. I
          love blending modern technology with creative design to craft digital experiences
          that are both functional and beautiful.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <button className="px-6 py-3 rounded-lg bg-violet-600 text-white font-semibold shadow-md hover:bg-violet-700 transition">
            Let’s Connect
          </button>
          <button className="px-6 py-3 rounded-lg border border-violet-600 text-violet-600 font-semibold hover:bg-violet-50 transition">
            My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCoverSection;