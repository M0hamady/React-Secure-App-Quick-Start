import React from 'react';
import { Link } from 'react-router-dom';

interface LightProductProps {
  name: string;
  category: string;
  description: string;
  id: string;
  image: string;
}

const LightProduct: React.FC<LightProductProps> = ({ name, category, description, id, image }) => {
  // Determine background color based on the product ID
  const isEvenId = parseInt(id) % 2 === 0;
  const bgColor = isEvenId ? '#1a1a1a' : '#6D8C54'; // Darker for even IDs, default for odd IDs

  return (
    <div
      id={`product-${id}`} // Adding a unique ID here
      className={`flex flex-col md:flex-row justify-center items-center gap-5 h-auto md:h-[699px] py-6 md:py-[114px] ${bgColor === '#1a1a1a' ? 'bg-[#6D8C54]' : 'bg-[#0f3236]'} rounded-lg shadow-lg`}
    >
      <div className="w-full md:w-[300px] px-3 pb-5 md:pb-[250.68px] flex flex-col gap-6">
        <div className="flex flex-col">
          <div className="text-white text-[22px] font-normal font-['Luckiest_Guy'] leading-7 tracking-wide">
            {name}
          </div>
          <div className="text-white text-2xl font-normal font-['Livvic'] leading-7 tracking-wide mt-1">
            {category}
          </div>
          <div className="w-0.5 h-[23.53px] bg-[#00eac7] mt-1" />
        </div>

        <div className="text-[#bccbd6] text-base font-light font-['Livvic'] leading-normal tracking-wide">
          {description}
        </div>

        <Link
          to={`/products/${id}`} // Link to the product detail page
          className="bg-[#03d1b5] text-[#1a1a1a] rounded-[48px] py-[11px] px-6 flex justify-center items-center hover:bg-[#02bfb0] transition mt-2 text-center"
        >
          Preview
        </Link>
      </div>

      <img
        className="w-full md:w-[753px] h-auto md:h-[471px] rounded-[22px] shadow-inner object-cover"
        src={image}
        alt={name}
      />
    </div>
  );
};

export default LightProduct;
