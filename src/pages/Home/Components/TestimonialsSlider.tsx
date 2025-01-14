import React, { useState, useEffect } from "react";
import {  MohamedAtef,  TestimonialsImage } from "../../../assets";

// Testimonial interface
interface Testimonial {
  text: string;
  author: string;
  role: string;
  image: string; // New image property
}

const TestimonialsSlider: React.FC = () => {
  // List of testimonials with text, author, role, and image
  const testimonials: Testimonial[] = [
    {
      text: "“template 1 is dedicated to delivering the highest quality fruits and vegetables from farm to table. nutritious produce to markets around the globe. We believe in fostering strong relationships with our partners and customers, ensuring that every product we deliver meets the highest standards of quality and safety. Join us in our mission to nourish the world with the best nature has to offer.”",
      author: "Mohamed Atef",
      role: "Farm owner",
      image: MohamedAtef, // Replace with actual image path
    },
    {
      text: "“At template 1, we strive to maintain sustainable farming practices that respect nature while producing the highest-quality fruits and vegetables. Our dedication to clean agriculture, innovation, and customer satisfaction ensures that we continue to set the standard for the industry.”",
      author: "Mohamed Hany",
      role: "CEO",
      image: MohamedAtef,
    },
    {
      text: "“Our customers trust template 1 for our commitment to quality, sustainability, and fresh, wholesome produce. From seed to harvest, every step of the process is carefully managed to ensure only the best for our clients.”",
      author: "Fathim",
      role: "Head of Marketing",
      image: MohamedAtef,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div
      className="h-auto px-4 sm:px-12 md:px-24 lg:px-[360px] py-12 sm:py-16 flex-col justify-start items-center gap-[50px] md:gap-[100px] inline-flex bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${TestimonialsImage})` }} // Update the path to the actual background image
    >
      {/* Title Section */}
      <div className="flex-col justify-start items-center gap-5 flex  bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${TestimonialsImage})` }} // Update the path to the actual background image

      >
        <div className="text-white text-lg sm:text-xl font-semibold  uppercase leading-[30px]">
          Our Testimonials
        </div>
        <div className="text-white text-[30px] sm:text-[40px] lg:text-[50px] font-bold font-pop text-center">
          template 1 words to the world
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-col justify-start items-center gap-[50px] flex duration-300 ease-in-out transition-all  bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${TestimonialsImage})` }} // Update the path to the actual background image
            >
        <div className="justify-start items-center gap-[20px] md:gap-[85px] inline-flex duration-300 ease-in-out transition-all max-sm:flex-col">
          {/* Testimonial Image */}
          <div className="w-[250px] h-[250px!important] max-md:w-[250px!important] max-md:h-[250px!important] max-sm:w-[100px] relative duration-300 ease-in-out transition-all">
            <div className="absolute top-0 right-0">
              <svg
                width="60"
                height="33"
                viewBox="0 0 70 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M64.7345 0.294174H49.911L40.0286 20.0589V49.7059H69.6757V20.0589H54.8521L64.7345 0.294174ZM25.2051 0.294174H10.3815L0.499191 20.0589V49.7059H30.1462V20.0589H15.3227L25.2051 0.294174Z"
                  fill="#F7CC35"
                />
              </svg>
            </div>
            <img
              src={testimonials[currentSlide].image}
              alt={testimonials[currentSlide].author}
              className="w-[250px] h-[250px!important] max-md:w-[250px!important] max-md:h-[250px!important] max-sm:w-[100px]  object-cover rounded-full duration-500 ease-in-out"
            />
          </div>

          {/* Testimonial Text Content */}
          <div className="flex-col justify-start items-start gap-4 md:gap-10 inline-flex duration-300 ease-in-out transition-all">
            <div className="text-white/80 text-base sm:text-lg duration-300 ease-in-out transition-all font-semibold leading-[27px] max-w-full sm:max-w-[600px] md:max-w-[764px]">
              {testimonials[currentSlide].text}
            </div>
            <div className="flex-col justify-start items-start flex">
              <div className="text-white text-base duration-300 ease-in-out transition-all sm:text-xl font-medium font-pop leading-[27px]">
                {testimonials[currentSlide].author}
              </div>
              <div className="text-[#acacac] text-sm duration-300 ease-in-out transition-all sm:text-base font-semibold leading-tight">
                {testimonials[currentSlide].role}
              </div>
            </div>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="justify-start items-start gap-[7px] inline-flex">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`${
                currentSlide === index
                  ? "w-5 h-2.5 bg-[#f7c35f] rounded-[50px]"
                  : "w-2.5 h-2.5 bg-[#cccccc] rounded-full"
              } cursor-pointer transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
