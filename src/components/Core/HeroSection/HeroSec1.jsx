import React from 'react';
import img1 from '../../../assets/img1.webp';
import img2 from '../../../assets/img2.webp';

function HeroSec1() {
  return (
    <div className="mt-30 flex flex-col items-center w-full">
      {/* First Image - Full Width */}
      <img src={img1} alt="Image 1" className="w-full max-w-6xl rounded-lg shadow-lg" />

      {/* Second Image - Full Width with Spacing */}
      <img src={img2} alt="Image 2" className="w-full max-w-6xl rounded-lg shadow-lg mt-8" />
    </div>
  );
}

export default HeroSec1;