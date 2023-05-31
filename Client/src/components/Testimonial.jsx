import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-l from-[#dc2430] to-[#7B1FA2] px-4 sm:px-8">
      <div className="container max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-800 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo non augue feugiat sagittis. Aliquam ullamcorper rhoncus nisi."</p>
            <p className="font-bold">- John Doe</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-800 mb-4">"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse ut vulputate magna."</p>
            <p className="font-bold">- Jane Smith</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-800 mb-4">"Vivamus facilisis semper ultricies. Fusce laoreet bibendum elit, non efficitur nibh tempus in. In vel lacus sed mauris gravida pulvinar."</p>
            <p className="font-bold">- David Johnson</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
