import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <p>&copy; {new Date().getFullYear()} CareCycle Organization</p>
          <p>All rights reserved.</p>
        </div>
        <div className="text-white">
          <ul className="flex space-x-4">
            <li>
              <a href="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service" className="text-gray-300 hover:text-white">Terms of Service</a>
            </li>
            <li>
              <a href="/affiliations" className="text-gray-300 hover:text-white">Affiliations</a>
            </li>
            <li>
              <a href="/certifications" className="text-gray-300 hover:text-white">Certifications</a>
            </li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/carecycle" className="text-white hover:text-gray-300">
            <FaFacebook size={20} />
          </a>
          <a href="https://www.twitter.com/carecycle" className="text-white hover:text-gray-300">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/carecycle" className="text-white hover:text-gray-300">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
