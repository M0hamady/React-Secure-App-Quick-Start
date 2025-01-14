import React from "react";
import { FlowerYellow } from "../../../assets";

const OurGoal = () => {
  return (
    <div className="relative h-[700px] flex items-center justify-center bg-[#273d29]">
      {/* Background Image */}
      <img
        src={FlowerYellow} // Replace with your image URL
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      {/* Content Overlay */}
      <div className="relative w-full max-w-[792px] h-fit py-6 flex items-center justify-center">
        <div className="absolute inset-0 rounded-[20px] border-2 border-white opacity-40" />
        <div className="relative z-10 text-center text-white text-[42px] max-sm:text-3xl font-bold font-['Livvic'] leading-[52px] px-[20px]">
          Our Goal is to offer a diverse range of high-quality products at competitive prices, while fostering long-term relationships with our customers through dedicated follow-up and after-sales services.
        </div>
      </div>
    </div>
  );
};

export default OurGoal;
