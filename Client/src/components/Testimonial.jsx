import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-l from-[#dc2430] to-[#7B1FA2] px-4 sm:px-8">
    <div className="container max-w-[1200px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-800 mb-4">"The sanitary donations have made a significant impact on our community, providing essential supplies to those in need. Thank you for your generosity!"</p>
          <p className="font-bold">- John Doe</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-800 mb-4">"I'm grateful for the support received through the sanitary donation website. It has helped us improve hygiene conditions and protect the vulnerable population."</p>
          <p className="font-bold">- Jane Smith</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-800 mb-4">"The sanitary donations have been crucial in preventing the spread of diseases and ensuring the well-being of our community. Your contributions are making a difference!"</p>
          <p className="font-bold">- David Johnson</p>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default TestimonialsSection;
