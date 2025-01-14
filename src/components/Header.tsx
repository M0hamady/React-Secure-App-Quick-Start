import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the AuthContext
import NavigationLink from "./NavigationLink";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { user, logout } = useAuth(); // Get user and logout function from AuthContext

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="flex justify-between items-center w-full h-[110px] px-6 py-5 bg-[#334b35] md:px-[52px] relative z-50">
      {/* Logo Section */}
      <Link
        to="/"
        className="text-xl font-semibold text-white md:text-[40px] font-primary"
      >
        template 1
      </Link>

      {/* Burger Icon (Mobile/Tablet) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleNav} className="text-white focus:outline-none">
          {isNavOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`duration-700 ${
          isNavOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row gap-6 md:gap-10 absolute md:static top-[110px] left-0 w-full md:w-auto bg-[#334b35] md:bg-transparent md:flex md:items-center transition-all duration-500 ease-in-out`}
      >
        <NavigationLink to="/" label="Home" />
        <NavigationLink to="/about" label="About Us" />
        <NavigationLink to="/contact" label="Contact Us" />
        <NavigationLink to="/products" label="Products" />

        {user ? (
          // Links for authenticated users
          <>
            <NavigationLink to="/profile" label="profile" />
            <button
              onClick={logout}
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          // Links for unauthenticated users
          <>
            <NavigationLink to="/login" label="Login" />
            <NavigationLink to="/register" label="Register" />
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
