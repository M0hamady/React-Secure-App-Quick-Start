import React, { useEffect, useState } from "react";
import { farmBackground, treePaper } from "../../../assets";

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Adjust the delay if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative w-full h-[70vh] md:h-[80vh] bg-cover bg-bottom transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url(${farmBackground})`,
        backdropFilter: "blur(5px) brightness(0.7)",
        WebkitBackdropFilter: "blur(5px) brightness(0.7)",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#263c28] via-[#263c28] to-[#263c27] opacity-70" />

      {/* Content Wrapper */}
      <div className="relative flex flex-col gap-6 p-4 sm:p-8 max-w-screen-lg mx-auto h-full justify-center animate-fade-in">
        {/* Title Section */}
        {/* <div className="text-[#f7c35f] text-[18px] max-sm:text-[20px] font-bold leading-[24px] sm:leading-[32px] mb-2 sm:mb-4 animate-slide-up">
          Original & Natural
        </div>
         */}
        {/* Main Content */}
        <div className="flex flex-col gap-4 animate-slide-up">
          <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
            <div className="text-[#f7c35f] text-[36px] sm:text-[56px] font-normal font-primary w-fit max-sm:text-[32px]">
              template 1
            </div>
            <img
              className="w-[40px] h-[30px] sm:w-[60px] sm:h-[50px] animate-pulse"
              src={treePaper}
              alt="Farm Logo"
            />
          </div>
          <div className="text-white text-[36px] sm:text-[56px] font-normal font-secondary mb-2 sm:mb-4 animate-slide-up">
            slogan
          </div>
          <div className="text-white text-base sm:text-lg font-semibold max-w-xl animate-slide-up">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit..
          </div>
        </div>

        {/* Explore Button */}
        <div className="px-4 sm:px-6 py-2 sm:py-3 bg-[#f7c35f] rounded-[8px] sm:rounded-[12px] shadow-lg text-center w-fit animate-fade-in">
          <div className="text-[#f3f6fe] text-base sm:text-lg font-normal font-secondary uppercase">
            <a href="#fruits" className="hover:underline">
              Explore Our Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
