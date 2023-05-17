import React from 'react';
import Button from './Button';

const DonationSection = () => {
  return (
    <section className="py-16 bg-gradient-to-l from-[#dc2430] to-[#7B1FA2]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Make a Donation</h2>
        <p className="text-gray-800 mb-6 text-gray-100">Your contribution can make a real difference in the lives of girls and women in need.</p>
        <Button>Donate Now</Button>
      </div>
    </section>
  );
}

export default DonationSection;
