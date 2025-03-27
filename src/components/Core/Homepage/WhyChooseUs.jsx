import React from 'react';
import chooseUs from "../../../assets/chooseUs.jpg";

function WhyChooseUs() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white max-w-[1600px] mx-auto rounded-xl p-8 shadow-xl mt-16 transition-all duration-300 ease-in-out hover:shadow-2xl">
      
      {/* Text Section */}
      <div className="choose-us md:w-1/2 w-full flex flex-col justify-center  p-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Why Choose Us?</h2>
        <p className="text-gray-700 text-lg  leading-relaxed mb-4">
          We are committed to delivering top-notch quality, innovative designs, and exceptional customer service. Here’s why we stand out:
        </p>
        <ul className="text-gray-700 text-lg space-y-4">
          <li className="flex items-center">
            <span className="text-green-600 text-xl mr-3">✔</span> Premium-quality materials & craftsmanship
          </li>
          <li className="flex items-center">
            <span className="text-green-600 text-xl mr-3">✔</span> Trendy & innovative designs
          </li>
          <li className="flex items-center">
            <span className="text-green-600 text-xl mr-3">✔</span> Affordable pricing with high value
          </li>
          <li className="flex items-center">
            <span className="text-green-600 text-xl mr-3">✔</span> Customer satisfaction is our top priority
          </li>
          <li className="flex items-center">
            <span className="text-green-600 text-xl mr-3">✔</span> A diverse range of products for all needs
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full flex justify-center p-4">
        <img 
          src={chooseUs} 
          className="w-full md:max-w-md lg:max-w-lg object-cover bg-center rounded-xl transform hover:scale-110 transition-transform duration-300 ease-in-out" 
          alt="Why Choose Us" 
        />
      </div>
      
    </div>
  );
}

export default WhyChooseUs;