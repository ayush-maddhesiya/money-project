import React from 'react';
import  './Hero.css'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Money Doesn't Come Without Guidance</h1>
        <p>Price is what you pay; value is what you get.</p>
        <button className="hero-button rounded-full py-2 px-4 text-white font-bold">
          READ MORE
        </button>
        <button className="hero-button bg-transparent border border-white rounded-full py-2 px-4 text-white font-bold hover:bg-white hover:text-black">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Hero;
