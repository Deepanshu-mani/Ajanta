import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <div className="w-full bg-gray-100 py-3 px-6 flex justify-between items-center text-gray-800 text-sm">
      {/* Left Section - Contact Info */}
      <div className="flex space-x-6">
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-gray-600" />
          <span>+91 98765 43210</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-gray-600" />
          <span>info@example.com</span>
        </div>
      </div>

      {/* Right Section - Social Media */}
      <div className="flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-blue-600">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-pink-500">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-700">
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
}

export default Header;