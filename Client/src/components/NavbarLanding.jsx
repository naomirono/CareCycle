import React from 'react';
import DonateButton from './DonateButton';
import Logo from '../assets/carelogo1.png';

const NavbarLanding = () => {
  return (
    <div>
    <header className="bg-gradient-to-l from-[#dc2430] to-[#7B1FA2]">
      <nav className="max-w-7xl mx-auto pt-2 pb-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-16 w-22" src={Logo} alt="Logo" />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:block md:flex md:items-center md:pb-0 pb-14 absolute md:static md:z-auto left-0 w-full md:w-auto md-pl-0 pl-9 transition-all duration-500 ease-in">
            <a
              href="#"
              className="font-medium text-white hover:text-gray-100 px-3 py-2 rounded-md md:ml-8 text-[16px] md:my-0 my-10"
            >
              Home
            </a>
            <a
              href="#"
              className="font-medium text-white hover:text-gray-100 px-3 py-2 rounded-md md:ml-8 text-[16px] md:my-0 my-10"
            >
              About
            </a>
            <a
              href="#"
              className="font-medium text-white hover:text-gray-100 px-3 py-2 rounded-md md:ml-8 text-[16px] md:my-0 my-10"
            >
              Impact
            </a>
            <a
              href="#"
              className="font-medium text-white hover:text-gray-100 px-3 py-2 rounded-md md:ml-8 text-[16px] md:my-0 my-10"
            >
              Contact
            </a>
            <a
              href="#"
              className="font-medium text-white hover:text-gray-100 px-3 py-2 rounded-md md:ml-8 text-[16px] md:my-0 my-10"
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
  
  
  )
}

export default NavbarLanding
