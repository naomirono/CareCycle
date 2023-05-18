import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="py-16 bg-white max-w-[1200px] mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-800 mb-6 pr-10">Have questions or want to get involved? We'd love to hear from you. Reach out to us using the contact details below or fill out the form and we'll get back to you as soon as possible.</p>
            <ul className="text-gray-800">
              <li className="mb-2"><FaEnvelope className="inline-block mr-2" /> Email: info@carecycle.org</li>
              <li className="mb-2"><FaPhoneAlt className="inline-block mr-2" /> Phone: +1234567890</li>
              <li className="mb-2"><FaTwitter className="inline-block mr-2 text-blue-500 hover:text-blue-700 cursor-pointer" /> Twitter: @carecycle</li>
              <li className="mb-2"><FaFacebook className="inline-block mr-2 text-blue-500 hover:text-blue-700 cursor-pointer" /> Facebook: @carecycle</li>
              <li><FaInstagram className="inline-block mr-2 text-pink-500 hover:text-pink-700 cursor-pointer" /> Instagram: @carecycle</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-800 font-medium mb-2">Your Name</label>
                <input type="text" id="name" className="border border-gray-400 py-2 px-4 rounded w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Your Email</label>
                <input type="email" id="email" className="border border-gray-400 py-2 px-4 rounded w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-800 font-medium mb-2">Message</label>
                <textarea id="message" className="border border-gray-400 py-2 px-4 rounded w-full h-32"></textarea>
              </div>
              <button type="submit" className="bg-[#7B1FA2] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
