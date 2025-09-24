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
    { href: "https://linkedin.com/in/hridaaeyrayamajhi22", src: "/svgs/linkedin.svg", alt: "LinkedIn" },
    { href: "https://instagram.com/hridaey__", src: "/svgs/insta.png", alt: "Instagram" },
    { href: "https://github.com/HridaeyRayamajhi22", src: "/svgs/github.svg", alt: "Github" },
    { href: "https://youtube.com/@hridaaey_rayamajhi", src: "/svgs/youtube.svg", alt: "YouTube" },
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
      <nav className="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 bg-light/80 dark:text-white dark:bg-slate-950 dark:border-white backdrop-blur-sm border border-dark dark:border-gray-700 rounded-full px-8 py-3 font-medium capitalize items-center space-x-6 z-40">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition ${
              pathname === link.href
                ? "text-lime-600 dark:text-lime-400 font-semibold underline"
                : "hover:text-lime-500 dark:hover:text-lime-300 hover:underline"
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

      {/* Mobile Hamburger (turns into X) */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span
          className={`block h-0.5 w-6 mb-1 transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          } ${mode === "dark" ? "bg-white" : "bg-dark"}`}
        />
        <span
          className={`block h-0.5 w-6 mb-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          } ${mode === "dark" ? "bg-white" : "bg-dark"}`}
        />
        <span
          className={`block h-0.5 w-6 transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          } ${mode === "dark" ? "bg-white" : "bg-dark"}`}
        />
      </button>

      {/* Overlay (click to close) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-1/2 bg-light dark:bg-slate-950 text-dark dark:text-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header with Close (X) button */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-300 dark:border-gray-700">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
            className="flex flex-col justify-center items-center w-8 h-8"
          >
            <span
              className={`block h-0.5 w-6 mb-1 rotate-45 translate-y-2 ${
                mode === "dark" ? "bg-white" : "bg-dark"
              }`}
            />
            <span
              className={`block h-0.5 w-6 -rotate-45 -translate-y-2 ${
                mode === "dark" ? "bg-white" : "bg-dark"
              }`}
            />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col items-center mt-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`transition ${
                pathname === link.href
                  ? "text-teal-600 dark:text-teal-400 font-semibold underline"
                  : "hover:text-teal-500 dark:hover:text-teal-300 hover:underline"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="mt-6"
            aria-label="Toggle Theme"
          >
            {mode === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} />}
          </button>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-10">
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
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
