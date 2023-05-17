import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="/path/to/about-image.jpg" alt="About Image" className="w-full" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About CareCycle</h2>
          <p className="text-gray-800 mb-6">CareCycle is a non-profit organization dedicated to providing sanitary pads to girls and women in need. We believe that access to menstrual hygiene products is a basic right, and our mission is to ensure that no one is left without the necessary supplies to manage their periods with dignity.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
