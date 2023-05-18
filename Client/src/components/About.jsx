import React from 'react';
import Image from '../assets/About.jpg'
import Button from './Button';

const About = () => {
  return (
    <section className="py-16 bg-[#fff] max-w-[1200px] mx-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="border-4 border-purple-700">
          <img src={Image} alt="About Image" className="w-full" />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Building a Happy Community Together</h2>
          <p className="text-gray-800">Happiness is contagious, and at CareCycle, we believe in spreading it far and wide. Our vision is to build a community where everyone has access to menstrual hygiene products and support, enabling them to lead happier, healthier lives. By working together, we can create a ripple effect of positivity, compassion, and joy, making a lasting impact on the lives of girls and women in need.</p>
          <p className="text-gray-800 mb-8">
            We invite you to join us in our mission to create a world where no one has to compromise their health or dignity due to a lack of access to menstrual hygiene products. Together, we can make a difference one pad at a time.
          </p>
          <Button>Read More</Button>
        </div>
      </div>
    </section>
  );
}

export default About;
