// Logo.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router

const Logo: React.FC = () => (
  <Link to="/" aria-label="template 1">
    <div className="flex items-center space-x-2">
      <img src="/eldesouky_name.png" alt="template 1 Logo" className="w-10 h-10" />
      <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        template 1
      </span>
    </div>
  </Link>
);

export default Logo;
