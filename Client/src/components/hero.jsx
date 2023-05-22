import React from 'react';
import Image from '../assets/careherro.png'
import DonateButton from './DonateButton';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-l from-[#dc2430] to-[#7B1FA2] py-20 h-[89vh]">
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
      <div className="w-full md:w-1/2 pl-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
          Empowering Women Through Sanitary Pad Donations
        </h1>
        <p className="text-lg text-white mb-8">
          Join us in ensuring every woman has access to safe and hygienic menstrual products.
        </p>
        <DonateButton />
      </div>
      <div className="w-full md:w-1/2">
        <img src={Image} alt="Sanitary Pads" className="max-w-full h-auto" />
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="hidden md:block absolute bottom-0">
      <path fill="#fff" d="M0,300L1440,120L1440,320L0,320Z"></path>
    </svg>
  </section>
  
  );
};

export default HeroSection;
