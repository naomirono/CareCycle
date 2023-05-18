import React from 'react';

const ProblemSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">The Problem</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="/images/problem-image.jpg"
              alt="Illustration depicting the problem"
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <p className="text-xl text-gray-800 mb-6">
              Many girls and women around the world face significant challenges
              when it comes to menstrual hygiene and access to sanitary pads.
              This leads to various problems:
            </p>
            <ul className="list-disc pl-6">
              <li className="text-lg text-gray-700 mb-4">
                Limited access to affordable and quality sanitary pads.
              </li>
              <li className="text-lg text-gray-700 mb-4">
                Stigma and shame surrounding menstruation, preventing open
                conversations and education.
              </li>
              <li className="text-lg text-gray-700 mb-4">
                Increased risk of infection and health issues due to using
                unhygienic alternatives.
              </li>
              <li className="text-lg text-gray-700">
                Disruption of education and limited opportunities for girls and
                women.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
