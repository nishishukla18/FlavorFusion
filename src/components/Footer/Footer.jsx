import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-5">
          {/* Logo and About Section */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 dark:text-white">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Flavor Fusion
            </h1>
            <p className="dark:text-gray-300">
              A Culinary Website that uses Extensive <b>Recipe API</b> and{" "}
              <b>Flavor API</b> to generate recipes tailored to users' preferred flavor profiles.
            </p>
            <br />
            {/* Social Media Links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 dark:text-white">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400">
                  Home
                </li>
                <li className="cursor-pointer dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400">
                  Flavor
                </li>
                <li className="cursor-pointer dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400">
                  Recipes
                </li>
                <li className="cursor-pointer dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400">
                  About Us
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50 dark:border-gray-700 dark:text-gray-400">
            Made by Team NanoBots.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
