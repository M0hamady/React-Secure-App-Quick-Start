import React from "react";
import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { CrewBG,  MohamedAtef,  } from "../../../assets";

const CrewSection = () => {
  // Crew members data
  const crew = [
    {
      name: "Mohamed Atef",
      image: MohamedAtef,
      social: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        pinterest: "https://pinterest.com",
        instagram: "https://instagram.com",
      },
    },
    {
      name: "Mohamed Hany",
      image: MohamedAtef,
      social: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        pinterest: "https://pinterest.com",
        instagram: "https://instagram.com",
      },
    },
    {
      name: "fathi",
      image: MohamedAtef,
      social: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        pinterest: "https://pinterest.com",
        instagram: "https://instagram.com",
      },
    },
  ];

  return (
    <div className="relative bg-[#6d8c54] py-12">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        src={CrewBG}
        alt="Background"
      />
      <div className="relative z-10 container mx-auto flex flex-col items-center text-center px-4">
        <h2 className="text-white text-[42px] font-normal font-['Luckiest Guy'] leading-[52px] mb-4">
          OUR CREW
        </h2>
        <p className="text-[#fef5c0] text-[22px] font-medium font-['Livvic'] leading-loose max-w-4xl mb-12">
          Our dedicated crew at template 1 expertly prepares every product, working passionately and meticulously to ensure the freshest, highest-quality produce reaches your table.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {crew.map((member, index) => (
            <div key={index} className="relative bg-white/15 rounded-lg shadow-lg overflow-hidden w-[245px] h-[275px] p-4">
              <img
                className="w-full h-40 object-cover object-top rounded-t-lg"
                src={member.image}
                alt={member.name}
              />
              <div className="text-center mt-4 text-[#d9d9d9] text-[22px] font-normal font-['Nico Moji'] leading-loose">
                {member.name}
              </div>
              <div className="flex justify-center gap-2 mt-2 text-[#151438]/40 text-[22px]">
                <a href={member.social.twitter} className="hover:text-white">
                  <FaTwitter />
                </a>
                <a href={member.social.facebook} className="hover:text-white">
                  <FaFacebookF />
                </a>
                <a href={member.social.pinterest} className="hover:text-white">
                  <FaPinterestP />
                </a>
                <a href={member.social.instagram} className="hover:text-white">
                  <FaInstagram />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrewSection;
