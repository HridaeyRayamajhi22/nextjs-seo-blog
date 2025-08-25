"use client";

import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import GAnimation from "../../animations/G.json";
import Lottie from "lottie-react";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const socialLinks = [
    {
      href: "https://linkedin.com/in/hridaaeyrayamajhi22",
      src: "/svgs/linkedin.svg",
      alt: "LinkedIn",
    },
    {
      href: "https://instagram.com/hridaey__",
      src: "/svgs/insta.png",
      alt: "Instagram",
    },
    {
      href: "https://github.com/HridaeyRayamajhi22",
      src: "/svgs/github.gif",
      alt: "Github",
    },
    {
      href: "https://youtube.com/@hridaaey_rayamajhi",
      src: "/svgs/youtube.svg",
      alt: "YouTube",
    },
  ];

  return (
    <footer className="mt-20 mx-4 md:mx-10 rounded-2xl bg-gradient-to-tr from-dark via-gray-900 to-black text-lime-50 flex flex-col items-center px-6 py-14 shadow-xl">
      {/* Heading */}
      <h3 className="text-2xl md:text-4xl font-bold text-center tracking-tight">
        Explore Stories | Updates | Guides
      </h3>

      {/* Description */}
      <p className="mt-4 text-center text-base md:text-lg font-light max-w-2xl leading-relaxed">
        Subscribe to stay ahead with the latest in{" "}
        <span className="font-semibold">web development</span> and{" "}
        <span className="font-semibold">design</span>. Join{" "}
        <span className="font-medium text-lime-400">200+ learners</span> in our
        growing community.
      </p>

      {/* Subscription Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-full max-w-md flex items-stretch bg-white/10 backdrop-blur-lg border border-lime-400/30 rounded-xl overflow-hidden shadow-md"
      >
        <input
          className="flex-1 px-4 py-3 text-lime-50 placeholder:text-lime-200/70 
             bg-transparent focus:outline-none 
             focus:ring-2 focus:ring-lime-500 focus:ring-offset-0 border border-blue-950"
          type="email"
          placeholder="Enter your email"
          {...register("Email", { required: true, maxLength: 80 })}
        />
        <button
          type="submit"
          className="bg-lime-400 px-6 py-3 font-semibold text-dark hover:bg-lime-500 transition-colors"
        >
          Subscribe
        </button>
      </form>

      {/* Error Message */}
      {errors.Email && (
        <p className="mt-2 text-sm text-red-400">Please enter a valid email.</p>
      )}

      {/* Social Links */}
      <div className="flex gap-6 mt-10">
        {socialLinks.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md 
              transition-all duration-300 hover:scale-110
              hover:bg-lime-300 
              hover:shadow-[0_0_12px_4px_rgba(163,230,53,0.9)]"
          >
            <Image src={social.src} alt={social.alt} width={22} height={22} />
          </a>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-lime-100/70">
        <p>© 2025 Hridaaey Rayamajhi. All Rights Reserved.</p>
        <p className="mt-1">
          A small <span className="text-lime-400">performance</span> for you guys...
        </p>
      </div>

      {/* Guitarist Animation*/}
      <div className="mt-10 relative flex justify-center items-center">
  {/* Pulsing glowing circle behind the animation */}
  <div className="absolute w-60 h-60 md:w-80 md:h-80 rounded-full bg-pink-800/30 filter blur-3xl animate-pulse"></div>

  {/* Lottie Animation */}
  <Lottie
    animationData={GAnimation}
    loop={true}
    className="w-40 h-40 md:w-60 md:h-60 drop-shadow-2xl transition-transform duration-500 hover:scale-110 hover:-translate-y-2"
  />
</div>
    </footer>
  );
};

export default Footer;
