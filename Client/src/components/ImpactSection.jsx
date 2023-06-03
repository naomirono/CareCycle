import React from 'react';
import Empowered from '../assets/empowered.JPG';
import Schools from '../assets/schools.JPG';


const ImpactSection = () => {
  return (
    <section id='impact' className="py-16 bg-[#fff] max-w-[1200px] mx-auto px-4 sm:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img src={Schools} alt="Girls Empowered" className="mx-auto mb-4 w-26 h-26 " />
            <h3 className="text-2xl font-bold mb-2">Schools Reached</h3>
            <p className="text-gray-800 font-bold">100+</p>
          </div>
          <div className="text-center">
            <img src={Empowered} alt="Schools Reached" className="mx-auto mb-4 w-26 h-26 " />
            <h3 className="text-2xl font-bold mb-2">Girls Empowered</h3>
            <p className="text-gray-800 font-bold">5000+</p>
          </div>
          <div className="text-center">
            <img src={Schools} alt="Pads Distributed" className="mx-auto mb-4 w-26 h-26 " />
            <h3 className="text-2xl font-bold mb-2">Pads Distributed</h3>
            <p className="text-gray-800 font-bold">5000+</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
