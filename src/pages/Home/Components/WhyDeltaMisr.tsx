import React from 'react';
import { organic, TestimonialsImage, whyDeltaImage } from '../../../assets';
import { ReactComponent as Icon } from './icons/icon.svg';
import { ReactComponent as Icon1 } from './icons/icon (1).svg';

const WhyDeltaMisr = () => {
  // Define the content for the component
  const content = [
    {
      title: 'Sustainability',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla obcaecati pariatur, quisquam repellendus ea rerum consectetur reiciendis qui unde commodi fugiat assumenda mollitia, a totam officiis id quis? Illum, temporibus!',
      logo: <Icon /> // Add SVG component
    },
    {
      title: 'Making Healthy Foods',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla obcaecati pariatur, quisquam repellendus ea rerum consectetur reiciendis qui unde commodi fugiat assumenda mollitia',
      logo: <Icon1 /> // Add SVG component
    },
  ];

  return (
    <div className="relative h-fit w-full p-4 md:p-8 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      
      {/* Image Section */}
      <div className="relative flex items-center justify-center">
        <img
          className="w-full h-auto object-cover"
          src={whyDeltaImage}
          alt="Delta Misr Farm"
        />
        <img
          className="w-[80px] h-[80px] object-cover absolute -right-8 top-5"
          src={organic}
          alt="Organic Badge"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-start gap-8">
        <div className="text-white text-lg font-semibold uppercase">
          Why template 1 Products
        </div>
        <div className="text-white text-2xl font-secondary font-thin leading-tight md:text-2xl lg:text-3xl">
          Providing High Quality
          <br />
          Products
        </div>
        <div className="flex flex-col gap-4 md:gap-4 lg:gap-4 h-full">
          {content.map((item, index) => (
            <div key={index} className="flex flex-row items-start gap-4 border-t border-white/20 pt-4">
              <div className="w-[90px] h-[90px]">
                {item.logo}
              </div>
              <div className="flex flex-col">
                <div className="text-white text-lg font-pop font-semibold">{item.title}</div>
                <div className="text-white text-lg leading-[18px]">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyDeltaMisr;
