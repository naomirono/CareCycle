import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/carelogo1.png'

const Footer = () => {
  return (
    <footer className="py-6 bg-gradient-to-l from-[#dc2430] to-[#7B1FA2]">
    <div className="container mx-auto flex justify-between items-center max-w-[1200px]">
      <div>
        <img className="h-16 w-22" src={Logo} alt="Logo" />
      </div>
      <div className="text-white">
        <ul className="flex space-x-6">
          <li>
            <a href="/privacy-policy" className="text-white hover:text-black">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-of-service" className="text-white hover:text-black">Terms of Service</a>
          </li>
          <li>
            <a href="/affiliations" className="text-white hover:text-black">Affiliations</a>
          </li>
          <li>
            <a href="/certifications" className="text-white hover:text-black">Certifications</a>
          </li>
        </ul>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/" className="text-white">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.twitter.com/" className="text-white">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.instagram.com/" className="text-white">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
    <div className="border-t border-white mt-4 max-w-[1200px] mx-auto"></div>
    <div className="container mx-auto pt-4 text-center text-white text-sm">
      &copy; {new Date().getFullYear()} Your Organization. All rights reserved.
    </div>
  </footer>
  );
};

export default Footer;
