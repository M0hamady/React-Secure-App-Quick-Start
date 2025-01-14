import React from 'react';
import { farmBackground } from '../../../assets';

const Introduction = () => {
  return (
    <div className="relative bg-[#334b35] p-6 md:h-[910px]">
      <div className="absolute bg-[#263c28] h-[250px] w-full md:w-[658px] md:h-[497px] top-0 left-0" />
      <div className="relative mt-[250px] md:mt-0 md:absolute md:top-[100px] md:left-[220px] w-full md:w-[584px] h-auto md:h-[710px]">
        <div className="absolute top-0 left-0 h-[5px] w-[258px] bg-[#f7c35f] rounded-tl-[5px] rounded-bl-[5px] md:h-[258px] md:w-[5px]" />
        <img
          className="w-full h-auto max-h-[300px] md:max-h-none md:w-[564px] md:h-[651px] rounded-[10px] object-cover "
          src={farmBackground}
          alt="Agriculture"
        />

      </div>
      <div className="mt-6 md:mt-0 md:ml-[884px] space-y-8 md:space-y-[55px]">
        <div className="space-y-2">
          <p className="text-white text-xl font-semibold leading-[30px]">INTRODUCTION</p>
          <h1 className="text-white text-3xl md:text-[50px] font-medium leading-tight font-secondary" >
            Lorem ipsum dolor <br/>Organic Farm
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-[#f7c35f] text-xl md:text-3xl font-medium font-pop">A Legacy of Egyptian Agricultural Excellence</p>
          <p className="text-white text-base md:text-lg font-semibold leading-[27px] max-w-full md:max-w-[796px] font-pop max-sm:w-fit ">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium ipsam cumque ipsa, tenetur nostrum id error amet corporis facilis inventore neque tempore suscipit aspernatur sed cum earum voluptas, reiciendis nihil!          </p>
        </div>
        <div className="space-y-4 font-pop">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 p-0.5 flex justify-center items-center bg-white rounded-full" />
            <p className="text-white text-lg font-medium leading-[27px]">Hand-picked and rigorously inspected.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 p-0.5 flex justify-center items-center bg-white rounded-full" />
            <p className="text-white text-lg font-medium leading-[27px]">Long-term partnerships with trusted farms.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 p-0.5 flex justify-center items-center bg-white rounded-full" />
            <p className="text-white text-lg font-medium leading-[27px]">Advanced machinery ensures food safety and freshness.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
