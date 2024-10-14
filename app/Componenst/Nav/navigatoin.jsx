"use client";
import Image from "next/image";
import logo from "@/public/logo.jpg";
import { useState, useEffect } from "react";
import './btn.css'; // Custom button styles

const Navigatoin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <div
        className={`w-full h-[80px] p-4 py-4 px-6 flex justify-between items-center  fixed  top-0 z-10 transition-all duration-300 ${
          isScrolled ? "blur-background shadow-md" : "bg-white"
        }`}
      >
        {/* Logo */}
        <div>
          <Image src={logo} alt="logo" width={60} height={50} />
        </div>

        {/* Hamburger Menu Icon for Small/Mid Devices */}
        
        <div
          className={`${isMenuOpen ? "change" : ""} lg:hidden`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        {/* Regular Navigation Links (for larger devices) */}
        <div className="hidden lg:flex gap-6 justify-center items-center w-full md:w-auto">
          <ul className="flex gap-6">
            <li className="text-lg font-semibold">Home</li>
            <li className="text-lg font-semibold">About</li>
            <li className="text-lg font-semibold">Services</li>
            <li className="text-lg font-semibold">Blogs</li>
            <li className="text-lg font-semibold">Contact</li>
          </ul>
        </div>

        {/* Request Quote Button */}
        <div className="hidden lg:block">
          <button className="custom-button">Request Quote</button>
        </div>
      </div>

      {/* Sidebar Navigation Links (for small/mid devices) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 ${
          isScrolled ? "bg-slate-600" : "bg-slate-500"
        } transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 lg:hidden`}
      >
        <ul className="flex flex-col p-6 gap-4 h-full">
          <li className="text-lg font-semibold text-white">Home</li>
          <li className="text-lg font-semibold text-white">About</li>
          <li className="text-lg font-semibold text-white">Services</li>
          <li className="text-lg font-semibold text-white">Blogs</li>
          <li className="text-lg font-semibold text-white">Contact</li>
          <li className="text-lg font-semibold text-white">Request Quote</li>
        </ul>
      </div>
    </div>
  );
};

export default Navigatoin;
