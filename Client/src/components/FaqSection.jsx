import React, { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'How can I donate sanitary pads?',
      answer: 'You can donate sanitary pads by visiting our "Donate" page and filling out the donation form. We accept both new and unused pads.',
    },
    {
      question: 'Where do the donated sanitary pads go?',
      answer: 'The donated sanitary pads go to women and girls in underserved communities, shelters, and schools where menstrual hygiene products are needed the most.',
    },
    {
      question: 'Can I make a monetary donation?',
      answer: 'Yes, we also accept monetary donations. You can visit our "Donate" page and choose the monetary donation option.',
    },
    {
        question: 'How often should I donate sanitary pads?',
        answer: 'You can donate sanitary pads at any time. However, we recommend regular donations to ensure a steady supply for those in need. Consider setting up a monthly donation to make a lasting impact.',
      },
      {
        question: 'Can I donate other menstrual hygiene products besides sanitary pads?',
        answer: 'Absolutely! While sanitary pads are the most commonly requested item, we also accept other menstrual hygiene products such as tampons, menstrual cups, and panty liners.',
      },
      {
        question: 'Are my donations tax-deductible?',
        answer: 'Yes, we are a registered non-profit organization, and donations made to us are typically tax-deductible. Please consult with your tax advisor for specific details and guidelines.',
      },
      {
        question: 'How can I get involved in volunteering?',
        answer: 'We greatly appreciate your interest in volunteering! Please visit our "Get Involved" page to learn more about the volunteer opportunities available and how you can contribute your time and skills.',
      },
      {
        question: 'How do you ensure that the donated sanitary pads reach the intended recipients?',
        answer: 'We have established partnerships with local NGOs and community organizations in underserved areas. These partners help us identify the areas of greatest need and ensure that the donated sanitary pads are distributed directly to women and girls in those communities.',
      },
      {
        question: 'Can I donate sanitary pads that have been opened or partially used?',
        answer: 'For hygiene and safety reasons, we can only accept new and unused sanitary pads. This ensures that the recipients receive products that are in the best condition and meet quality standards.',
      },
      {
        question: 'Do you provide any additional resources or education on menstrual health?',
        answer: 'Yes, alongside distributing sanitary pads, we also conduct workshops and educational sessions to promote menstrual health and hygiene. We believe in empowering women and girls with knowledge and providing them with the necessary tools for managing their periods safely and comfortably.',
      },
      {
        question: 'Can I donate in bulk or on behalf of an organization?',
        answer: 'Absolutely! We welcome bulk donations and contributions from organizations. If you are interested in making a larger donation, please reach out to us through our contact form, and we will provide you with further instructions and support.',
      },
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="lg:text-center">
          <h2 className="text-base text-[#7B1FA2] font-semibold tracking-wide uppercase">Frequently Asked Questions</h2>
          <p className="mt-2 leading-6 text-3xl font-extrabold text-gray-900">Have a question? We have answers.</p>
        </div>
        <div className="mt-20">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-[#7B1FA2] py-8">
              <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
              <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
