import React from "react";
import { FaClock } from "react-icons/fa"; // Import clock icon

function Footer() {
  return (
    <footer className="bg-[#244447] fixed text-white py-12 px-10 w-full  bottom-0 left-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        
        {/* Left Section - Company Info */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold">Ajanta</h1>
          <p className="text-gray-300 mt-2">Corporate Industry</p>
          <div className="flex items-center gap-3 mt-4">
            <FaClock className="text-lg text-gray-400" />
            <div>
              <p className="font-medium">Monday - Saturday</p>
              <p className="text-gray-300 text-sm">9:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

        {/* Middle Section - Useful Links */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Other Links</h2>
          <ul className="space-y-3">
            {["Home", "About Us", "Privacy Policy", "Terms & Condition", "Latest Blog"].map((link, index) => (
              <li key={index} className="flex items-center gap-3 group">
                <span className="text-gray-400 group-hover:text-white transition-all">+</span>
                <a href="#" className="text-gray-300 hover:text-white transition-all font-medium">{link}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;