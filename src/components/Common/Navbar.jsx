import React from "react";
import logo from "../../assets/logo.webp";

function Navbar() {
  return (
    <nav className="bg-[#567C8D] fixed top-0 left-0 w-full text-white py-4 px-30 flex items-center justify-between z-50 shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300">
      {/* Logo & Tagline */}
      <div className="flex gap-4 items-center">
        <div className="transition-transform cursor-pointer duration-300 hover:scale-105">
          <img src={logo} alt="Ajanta Logo" className="h-16 rounded-3xl shadow-lg" />
        </div>
        <div className="flex flex-col cursor-pointer">
          <h1 className="text-4xl font-serif font-bold tracking-wide ">AJANTA</h1>
          <span className="text-lg font-light opacity-80">Corporate Industry</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-10 text-lg font-semibold">
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
    </nav>
  );
}

export default Navbar;