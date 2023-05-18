import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-6 bg-gradient-to-l from-[#dc2430] to-[#7B1FA2]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <p>&copy; {new Date().getFullYear()} CareCycle Organization</p>
          <p>All rights reserved.</p>
        </div>
        <div className="text-white">
          <ul className="flex space-x-4">
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
            <FaFacebook size={20} />
          </a>
          <a href="https://www.twitter.com/" className="text-white">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/" className="text-white">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
