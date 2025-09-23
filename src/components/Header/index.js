"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import { SunIcon, MoonIcon } from "@/project-files/Icons";
import { usePathname } from "next/navigation";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [mode, setMode] = useThemeSwitch();

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
      src: "/svgs/github.svg",
      alt: "Github",
    },
    {
      href: "https://youtube.com/@hridaaey_rayamajhi",
      src: "/svgs/youtube.svg",
      alt: "YouTube",
    },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full px-4 md:px-10 py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 bg-light/80 backdrop-blur-sm border border-dark rounded-full px-8 py-3 font-medium capitalize items-center space-x-6 z-40">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition ${
              pathname === link.href
                ? "text-indigo-600 font-semibold underline"
                : "hover:text-indigo-500 hover:underline"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="ml-4"
          aria-label="Toggle Theme"
        >
          {mode === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} />}
        </button>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50 dark:text-slate-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span
          className={`block h-0.5 w-6 bg-dark mb-1 transition-transform ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-dark mb-1 transition-opacity ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-dark transition-transform ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-light/95 backdrop-blur-sm overflow-hidden transition-max-h duration-300 dark:text-white dark:bg-slate-950 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mx-2 transition ${
                pathname === link.href
                  ? "text-teal-500 font-semibold underline"
                  : "hover:text-teal-400 hover:underline"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="ml-4"
            aria-label="Toggle Theme"
          >
            {mode === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} />}
          </button>
        </nav>

        {/* Mobile Social Links */}
        <div className="flex justify-center gap-4 mt-4 mb-4">
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={social.src} alt={social.alt} width={24} height={24} />
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Social Links */}
      <div className="hidden md:flex gap-4 ml-auto">
        {socialLinks.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110 hover:-rotate-6 hover:-translate-y-1"
          >
            <Image src={social.src} alt={social.alt} width={24} height={24} />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
