import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons
import logo from "../../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#567C8D] md:bg-opacity-100 bg-opacity-70 backdrop-blur-md text-white py-4 lg:px-30 md:px-20 sm:px-6 px-2 flex items-center justify-between z-50 shadow-md">
      {/* Left Section (Contact Info - Visible on both Mobile & Desktop) */}
      <div className="pl-3 flex flex-col items-start md:items-center flex-1 md:flex-row md:space-x-5">
        <a href="mailto:support@ajanta.com" className="text-xs md:text-sm hover:underline hover:font-bold transition-all ease-in-out duration-200">
          📧 Email Us
        </a>
        <a href="tel:+919876543210" className="text-xs md:text-sm hover:underline hover:font-bold transition-all ease-in-out duration-200">
          📞 Call Us
        </a>
      </div>

      {/* Logo - Always Centered */}
      <div className="flex-1 flex justify-center">
        <img src={logo} alt="Ajanta Logo" className="h-14 w-auto rounded-sm shadow-lg" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-10 text-lg font-semibold flex-1 justify-end">
        {["Home", "Product", "About Us", "Contact Us"].map((item, index) => (
          <a
            key={index}
            href="#"
            className="relative transition-all duration-300 ease-in-out hover:opacity-80 after:content-[''] after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end flex-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none p-2 hover:bg-white/20 rounded-full transition-all ease-in-out duration-200"
        >
          {isOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
        </button>
      </div>

      {/* Mobile Navigation (Full Menu Container) */}
      <div
        className={`fixed top-0 right-0 h-72 rounded-b-lg bg-[#567c8dbe] w-1/2 sm:w-1/2 bg-opacity-80 backdrop-blur-lg text-white flex flex-col items-center space-y-8 py-10 text-lg font-semibold shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button inside menu */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 cursor-pointer hover:bg-white/20 transition-all ease-in-out duration-200 rounded-full right-5 text-4xl"
        >
          <FiX />
        </button>

        <div className="w-full flex flex-col items-center py-5 rounded-lg">
          {["Home", "Product", "About Us", "Contact Us"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="w-full text-center py-3 hover:bg-white/30 hover:backdrop-blur-lg hover:bg-opacity-50 rounded-md transition-colors duration-300"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;