import React from 'react';
import { about_hero } from '../../../assets';

const HeroSection = () => {
  return (
    <div className="h-[800px]  flex flex-col justify-center items-center relative">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src={about_hero}
        alt="Background"
      />
      
      {/* Overlay Content */}
      <div className="relative flex flex-col justify-center items-center gap-7 text-center">
        {/* Title */}
        <h1 className="text-white text-[58px] font-['Luckiest Guy'] leading-[70px]">
          Harvesting Quality, Nourishing Lives 🌾
        </h1>
        
        {/* Subtitle */}
        <p className="text-white text-[23px] font-bold font-['Lora'] leading-7">
          template 1 is committed to providing fresh, high-quality product. We prioritize <span className="font-['Livvic']">sustainable</span> farming, delivering nutritious food that enriches lives and supports a healthier community.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
