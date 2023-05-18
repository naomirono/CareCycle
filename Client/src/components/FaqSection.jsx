import React from 'react';

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
    // Add more FAQs as needed
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Frequently Asked Questions</h2>
          <p className="mt-2 leading-6 text-3xl font-extrabold text-gray-900">Have a question? We have answers.</p>
        </div>
        <div className="mt-20">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-gray-200 py-8">
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
