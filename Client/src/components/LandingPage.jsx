import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Hero from '../assets/carehero1.jpg'
import Button from './Button';

const LandingPage = () => {
  return (
    // <section className="max-w-[1280px] mx-auto text-white py-16 h-[90vh]">
    //   <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    //     <div className="md:w-1/2 mb-8 md:mb-0">
    //       <h1 className="text-4xl md:text-6xl font-bold mb-4">Providing Dignity for Girls</h1>
    //       <p className="text-lg mb-6">Support our mission to provide sanitary towels to girls in need.</p>
    //       <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full">Donate Now</button>
    //     </div>
    //     <div className="md:w-1/2">
    //       <img src={Hero} alt="Sanitary Towels" className="w-full" />
    //       <div className="flex mt-4">
    //         <a href="#" className="text-white hover:text-gray-200 mr-4"><FaFacebookF /></a>
    //         <a href="#" className="text-white hover:text-gray-200 mr-4"><FaTwitter /></a>
    //         <a href="#" className="text-white hover:text-gray-200 mr-4"><FaInstagram /></a>
    //       </div>
    //     </div> 
    //     </div> 
    // </section>
    
    <section className="relative h-[90vh] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${Hero})` }}>
    <div className=" h-full flex flex-col justify-center items-center bg-black bg-opacity-80">
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">Donate Sanitary Pads</h1>
      <p className="text-lg text-white text-center mb-8">Help provide sanitary pads to girls in need and empower them.</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full">Donate Now</button>
      <div className="flex justify-center mt-8">
        <a href="#" className="text-white hover:text-gray-200 mr-4"><FaFacebookF size={24} /></a>
        <a href="#" className="text-white hover:text-gray-200 mr-4"><FaTwitter size={24} /></a>
        <a href="#" className="text-white hover:text-gray-200 mr-4"><FaInstagram size={24} /></a>
      </div>
    </div>
  </section>
);
}

export default LandingPage;
