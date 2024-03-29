import React, { useState } from 'react';
import DonateButton from './DonateButton';
import Logo from '../assets/carelogo1.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavbarLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-gradient-to-l from-[#dc2430] to-[#7B1FA2] relative">
        <nav className="max-w-7xl mx-auto pt-2 pb-2 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center relative z-10">
              <div className="flex-shrink-0">
                <img className="h-12 w-18 sm:h-16 sm:w-22" src={Logo} alt="Logo" />
              </div>
              <div
                onClick={toggleMenu}
                className="text-white focus:outline-none text-3xl md:hidden flex items-center ml-12 mt-2"
              >
                {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
              </div>
            </div>
            <div
              className={`${
                isMenuOpen ? 'block' : 'hidden'
              } mt-4 sm:mt-0 md:flex md:items-center bg-black bg-opacity-90 md:bg-transparent absolute md:relative top-full md:top-auto left-0 w-full md:w-auto md:z-0 z-20 md:pt-0 py-4 transition-all duration-500 ease-in text-center `}
            >
              <a
                href="#home"
                onClick={toggleMenu}
                className="block font-medium text-white hover:text-gray-100 px-6 py-6 rounded-md text-lg "
              >
                Home
              </a>
              <a
                href="#about"
                onClick={toggleMenu}
                className="block font-medium text-white hover:text-gray-100 px-6 py-6 rounded-md text-lg"
              >
                About
              </a>
              <a
                href="#impact"
                onClick={toggleMenu}
                className="block font-medium text-white hover:text-gray-100 px-6 py-6 rounded-md text-lg"
              >
                Impact
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="block font-medium text-white hover:text-gray-100 px-6 py-6 rounded-md text-lg"
              >
                Contact
              </a>
              <a
                href="#FAQ"
                onClick={toggleMenu}
                className="block font-medium text-white hover:text-gray-100 px-6 py-6 rounded-md text-lg"
              >
                FAQ
              </a>
            </div>
            <div className="md:block hidden">
              <DonateButton />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavbarLanding;
