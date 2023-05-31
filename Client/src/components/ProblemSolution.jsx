import React from 'react';

const ProblemSolutionSection = () => {
  return (
    <section className="py-16 max-w-[1200px] mx-auto sm:px-8">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Addressing Menstrual Hygiene Challenges</h2>
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 md:mr-8 pr-8 md:border-r-2 md:border-[#7B1FA2]">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 text-center">The Problem</h3>
          <p className="text-lg text-gray-800">
            Many girls and women around the world face significant challenges
            when it comes to menstrual hygiene and access to sanitary pads.
            This leads to various problems:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li className="text-base text-gray-700">
              Limited access to affordable and quality sanitary pads.
            </li>
            <li className="text-base text-gray-700">
              Stigma and shame surrounding menstruation, preventing open
              conversations and education.
            </li>
            <li className="text-base text-gray-700">
              Increased risk of infection and health issues due to using
              unhygienic alternatives.
            </li>
            <li className="text-base text-gray-700">
              Disruption of education and limited opportunities for girls and
              women.
            </li>
          </ul>
        </div>
      </div>
      <div className="md:w-1/2 md:ml-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-center">Our Solution</h3>
          <p className="text-lg text-gray-800">
            At CareCycle, we are dedicated to addressing the challenges faced
            by girls and women in accessing sanitary pads. Our solution involves:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li className="text-base text-gray-700">
              Partnering with local organizations to distribute affordable and
              quality sanitary pads to those in need.
            </li>
            <li className="text-base text-gray-700">
              Conducting awareness campaigns to break the stigma surrounding
              menstruation and promote open conversations.
            </li>
            <li className="text-base text-gray-700">
              Providing education and resources on menstrual hygiene
              management, empowering girls and women with knowledge.
            </li>
            <li className="text-base text-gray-700">
              Collaborating with schools and communities to ensure access to
              sanitary facilities and support girls' education.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default ProblemSolutionSection;
