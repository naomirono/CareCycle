import React from 'react'
import Button from './Button';
import Logo from '../assets/carelogo1.png'

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
            <div className="hidden md:block md:flex md:items-center md:pb-0 pb-14 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto
        md-pl-0 pl-9 transition-all duration-500 ease-in">
              <a href="#" className="font-medium text-white hover:text-gray-100 px-3 py-2 rounded-md md:ml-8 text-[16px] md:my-0 my-10">
                Home
              </a>
              <a href="#" className="font-medium text-white hover:text-gray-100 px-3 py-2 rounded-md md:ml-8 text-[16px] md:my-0 my-10">
                About 
              </a>
              <a href="#" className="font-medium text-white hover:text-gray-100 px-3 py-2 rounded-md md:ml-8 text-[16px] md:my-0 my-10">
                Impact 
              </a>
              <a href="#" className="font-medium text-white hover:text-gray-100 px-3 py-2 rounded-md md:ml-8 text-[16px] md:my-0 my-10">
                Contact
              </a>
              <a href="#" className="font-medium text-white hover:text-gray-100 px-3 py-2 rounded-md md:ml-8 text-[16px] md:my-0 my-10">
                FAQ
              </a>
            </div>
            <Button>Donate Now</Button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default NavbarLanding
