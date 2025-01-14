import React from "react";
import { whyDeltaImage } from "../../../assets";

const JourneySection = () => {
  return (
    <div className="relative bg-[#606628] py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src={whyDeltaImage}
            alt="template Journey"
          />
        </div>
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-[#f7c87b] text-[42px] font-normal font-['Nico Moji'] leading-[52px] mb-4">
             template Journey
          </h2>
          <p className="text-[#fef5c0] text-[22px] font-normal font-['Livvic'] leading-loose">
            template, a  member of Elnile Group, was established in 2003 with a vision to revolutionize the field of importing and exporting. Over the years, we’ve grown into a trusted name with multiple brands in Egypt and an expansive global export portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
