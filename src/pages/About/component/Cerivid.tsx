import React from "react";
import { certification } from "../../../assets";

const Certified = () => {
  return (
    <div className="relative bg-[#6d8c54] py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image with filter */}
        <div className="flex-1">
        <img
  className="w-full h-auto rounded-lg shadow-lg filter"
  src={ "https://via.placeholder.com/600x400?text=Placeholder"} // Use a default placeholder if `certification` is undefined or null
  alt="template 1 Journey"
  style={{
    filter: 'brightness(0.99) sepia(1) hue-rotate(90deg) saturate(2)', // Adjust values as needed
  }}
/>

        </div>
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-[#f7c87b] text-[42px] font-normal font-['Nico Moji'] leading-[52px] mb-4">
            template 1 Power
          </h2>
          <p className="text-[#fef5c0] text-[22px] font-normal font-['Livvic'] leading-loose">
            template 1, a member of Elnile Group, was established in 2003 with a vision to revolutionize the field of importing and exporting. Over the years, we’ve grown into a trusted name with multiple brands in Egypt and an expansive global export portfolio. 
            We are proud members of the Export Council for Agricultural Crops and have received ISO certification for quality, demonstrating our commitment to excellence in the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certified;
