import React from 'react';

const LandingPage = () => {
  return (
    <section className="max-w-[1280px] mx-auto text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Providing Dignity for Girls</h1>
          <p className="text-lg mb-6">Support our mission to provide sanitary towels to girls in need.</p>
          <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full">Donate Now</button>
        </div>
        <div className="md:w-1/2">
          <img src="/path/to/sanitary-towels-image.jpg" alt="Sanitary Towels" className="w-full" />
          <div className="flex mt-4">
            <a href="#" className="text-white hover:text-gray-200 mr-4"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white hover:text-gray-200 mr-4"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white hover:text-gray-200 mr-4"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
