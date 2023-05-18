import React from 'react';
import Button from './Button';
import Image from '../assets/donation.jpg'

const DonationSection = () => {
  return (
    <section className="  bg-cover bg-no-repeat" style={{ backgroundImage: `url(${Image})` }}>
      <div className=" py-16  text-center bg-white bg-opacity-50">
      
      <div className='max-w-[1000px] mx-auto'>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Donate to Support Our Cause</h2>
        <p className="text-gray-800 mb-6 text-gray-100 text-black text-center">
          Together, we can empower women and break the barriers of menstrual stigma. Your support can provide access to sanitary pads and promote menstrual hygiene education, making a real difference in the lives of girls and women in need.
        </p>
        <Button>Donate Now</Button>
      </div>
        
      </div>
    </section>
  );
}

export default DonationSection;
