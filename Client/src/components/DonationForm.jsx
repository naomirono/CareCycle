import React from 'react';

const DonationForm = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Make a Donation</h2>
      <p className="text-gray-600 mb-6">Help us provide sanitary towels to those in need by making a donation.</p>
      
      <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">Donation Amount:</label>
          <input type="number" id="amount" placeholder="Enter the donation amount" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
        </div>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name:</label>
          <input type="text" id="name" placeholder="Enter your name" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email:</label>
          <input type="email" id="email" placeholder="Enter your email address" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
        </div>
        
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
          Donate
        </button>
      </form>
    </div>
  );
}

export default DonationForm;
