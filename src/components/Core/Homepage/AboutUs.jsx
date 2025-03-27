import React from 'react';
import aboutUs from "../../../assets/aboutUs.png";

function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row max-w-[1600px] mx-auto rounded-xl p-8 shadow-xl mt-16 transition-all duration-300 ease-in-out hover:shadow-2xl">
      
      {/* Image Section */}
      <div className="md:w-1/2 w-full flex justify-center p-4">
        <img 
          src={aboutUs} 
          className="w-full md:max-w-md lg:max-w-lg object-cover bg-center rounded-xl transform hover:scale-110 transition-transform duration-300 ease-in-out" 
          alt="About Us" 
        />
      </div>

      {/* Text Section */}
      <div className="about-us md:w-1/2 w-full flex flex-col justify-center p-6">
        <h2 className="text-4xl font-extrabold text-gray-900 underline mb-6">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          At <strong className="text-blue-600">Ajanta Bags</strong>, we are committed to delivering **high-quality, stylish, and durable** bags for every need. 
          Since our establishment in <strong className="text-gray-900">1978</strong>, we have grown into a trusted name in the industry, offering a diverse range of products from travel and office bags to school and sports bags.
        </p>
        <p className="text-gray-700 text-xl leading-relaxed">
          Our designs combine <span className="text-green-600 font-semibold">innovation</span> with <span className="text-blue-600 font-semibold">practicality</span>, ensuring the perfect balance between **functionality and aesthetics**. With years of expertise and a passion for excellence, Ajanta Bags continues to set new standards in **quality and craftsmanship**.
        </p>
      </div>
      
    </div>
  );
}

export default AboutUs;