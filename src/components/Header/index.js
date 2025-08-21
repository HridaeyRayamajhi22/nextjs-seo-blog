import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
// import { MoonIcon } from "@/project-files/Icons";
import { SunIcon } from "@/project-files/Icons";

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      {/* Logo */}
      <Logo />

      {/* Navigation */}
      <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm">
        <Link href="/" className="mr-4 ">
          <p className="hover:text-teal-400 hover:underline hover:font-semibold"> Home</p>
        </Link>
        <Link href="/about" className="mr-4">
          <p className="hover:text-teal-400 hover:underline hover:font-semibold">About</p>
        </Link>
        <Link href="/contact" className="mr-4">
          <p className="hover:text-teal-400 hover:underline hover:font-semibold">Contact</p>
        </Link>
        <button className="ml-4">
           <SunIcon />
           {/* <MoonIcon /> */}
        </button>
      </nav>

      {/* Social Links */}
      <div className="flex gap-4">
        <a
          href="https://linkedin.com/in/hridaaeyrayamajhi22"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110 hover:-rotate-6 hover:-translate-y-1"
        >
          <Image src="/svgs/linkedin.svg" alt="LinkedIn" width={24} height={24} />
        </a>

        <a
          href="https://instagram.com/hridaey__"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:-translate-y-1"
        >
          <Image src="/svgs/insta.png" alt="Instagram" width={24} height={24} />
        </a>

        <a
          href="https://github.com/HridaeyRayamajhi22"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110 hover:-rotate-6 hover:-translate-y-1"
        >
          <Image src="/svgs/github.svg" alt="Github" width={24} height={24} />
        </a>

        <a
          href="https://youtube.com/@hridaaey_rayamajhi"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:-translate-y-1"
        >
          <Image src="/svgs/youtube.svg" alt="YouTube" width={24} height={24} />
        </a>
      </div>
    </header>
  );
};

export default Header;
