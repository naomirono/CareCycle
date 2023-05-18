import React from 'react';
import Button from './Button';
import Image from '../assets/donation.jpg'

const DonationSection = () => {
  return (
    <section className="  bg-cover bg-no-repeat" style={{ backgroundImage: `url(${Image})` }}>
      <div className=" py-16 mx-auto text-center bg-white bg-opacity-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Make a Donation</h2>
        <p className="text-gray-800 mb-6 text-gray-100 text-black">Your contribution can make a real difference in the lives of girls and women in need.</p>
        <Button>Donate Now</Button>
      </div>
    </section>
  );
}

export default DonationSection;
