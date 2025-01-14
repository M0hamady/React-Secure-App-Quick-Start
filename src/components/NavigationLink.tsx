import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  return (
    <div className="group relative py-4 md:py-0 px-6 md:px-0">
      <Link to={to} className="text-lg font-bold text-white">
        {label}
      </Link>
      <div className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-[#F7C35F] group-hover:w-full transition-all duration-300"></div>
    </div>
  );
};

export default NavigationLink;