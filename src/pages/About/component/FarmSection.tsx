import React from "react";
import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { EldesoukyOwner } from "../../../assets";

const FarmSection = () => {
  return (
    <div className="w-full h-[80vh] relative bg-[#6d8c54] flex flex-col justify-center items-center sm:items-start p-4 sm:p-8">
      {/* Header Section */}
      <div className="text-center sm:text-left">
        <h1 className="text-white text-[36px] sm:text-[48px] lg:text-[58px] font-['Luckiest Guy'] leading-[42px] sm:leading-[58px] lg:leading-[70px]">
          How To Maintain Your Farm
          <br />
          Essential Tips
        </h1>
        <p className="mt-4 sm:mt-[26.73px] text-white text-xs sm:text-sm font-bold font-['Lora'] uppercase tracking-widest">
          Sustain Your Crops
        </p>
      </div>

      {/* Image Section */}
      

      {/* Footer Section */}
      <div className="w-full mt-10 sm:mt-0">
        <div className="flex flex-col sm:flex-row mt-5 gap-6 sm:gap-4 justify-center sm:justify-start items-center sm:items-start">
        <div className="mt-4 sm:mt-0">
        {/* <img
          className="rounded-full h-[20vh] object-cover"
          src={EldesoukyOwner}
          alt="Farm Image"
        /> */}
      </div>
          <div className="text-center sm:text-left">
            <h2 className="text-white text-sm font-['Nico Moji'] uppercase tracking-widest">
              FarmPro Experts
            </h2>
            <p className="opacity-70 text-white text-lg font-['Livvic'] leading-relaxed mt-1">
              Cultivating the Future, One Seed at a Time.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4 justify-center sm:justify-start">
              <a href="https://twitter.com" className="text-white text-lg">
                <FaTwitter />
              </a>
              <a href="https://facebook.com" className="text-white text-lg">
                <FaFacebookF />
              </a>
              <a href="https://pinterest.com" className="text-white text-lg">
                <FaPinterestP />
              </a>
              <a href="https://instagram.com" className="text-white text-lg">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmSection;
