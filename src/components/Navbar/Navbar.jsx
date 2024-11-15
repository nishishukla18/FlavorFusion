import React, { useState } from "react";
import Logo from "../../assets/food-logo.png";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Toggle Dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close Dropdown
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Toggle Popup
  // const togglePopup = () => {
  //   setIsPopupOpen(!isPopupOpen);
  // };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container mx-auto py-3 sm:py-0 px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
              <img src={Logo} alt="Logo" className="w-10" />
              Flavour Fusion
            </Link>
          </div>

          {/* Navigation Section */}
          <div className="flex items-center gap-6">
            {/* Dark Mode Toggle */}
            <div>
              <DarkMode />
            </div>

            {/* Navigation Links */}
            <ul className="hidden sm:flex items-center gap-6">
              <li>
                <Link
                  to="/"
                  className="inline-block py-2 px-4 hover:text-yellow-500 duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="inline-block py-2 px-4 hover:text-yellow-500 duration-200"
                >
                  About
                </Link>
              </li>
              <li className="relative">
                {/* Search Options Button */}
                <button
                  onClick={toggleDropdown}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-6 rounded-full"
                >
                  Search Options
                </button>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 bg-white dark:bg-gray-800 shadow-md rounded-md mt-2 z-10">
                    <Link
                      to="/cuisine"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 duration-200"
                      onClick={closeDropdown}
                    >
                      Cuisine
                    </Link>
                    <Link
                      to="/region"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 duration-200"
                      onClick={closeDropdown}
                    >
                      Region
                    </Link>
                    <Link
                      to="/ingredient"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 duration-200"
                      onClick={closeDropdown}
                    >
                      Ingredients
                    </Link>
                    <Link
                      to="/subregion"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 duration-200"
                      onClick={closeDropdown}
                    >
                      SubRegion
                    </Link>
                    <Link
                      to="/continent"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 duration-200"
                      onClick={closeDropdown}
                    >
                      Continent
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link
                  to="/flavours"
                  className="block px-4 py-2 hover:text-yellow-500 dark:hover:text-gray-300 duration-200"
                >
                  Flavours
                </Link>
              </li>
              <li>
  {/* Recipe of the Day Button */}
  <Link
    to="/recipe-of-the-day"
    className="bg-green-500 hover:bg-green-600 text-white py-1 px-6 rounded-full duration-200 inline-block"
  >
    Recipe of the Day
  </Link>
</li>

            </ul>
          </div>
        </div>
      </div>

      {/* Popup */}
      {/* {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6 rounded-lg shadow-lg relative w-96">
            <h2 className="text-xl font-bold mb-3">Recipe of the Day</h2>
            <p className="mb-5">
              Discover today's featured recipe and try something amazing!
            </p>
            <Link
              to="/recipe-of-the-day"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 duration-200"
              onClick={() => setIsPopupOpen(false)}
            >
              View Recipe
            </Link>
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
            >
              ✕
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
