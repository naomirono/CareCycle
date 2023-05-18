import React from 'react';

const GetInvolved = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Get Involved
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Volunteer
              </h3>
              <p className="mb-4">
                Are you passionate about making a difference in the lives of women and girls? Join our volunteer team and contribute to our mission of providing access to sanitary pads. As a volunteer, you will have the opportunity to participate in various activities such as organizing donation drives, conducting awareness campaigns, and assisting in distribution efforts. Together, we can create a positive impact and improve menstrual hygiene in our community.
              </p>
              <p className="mb-4">
                To volunteer, please contact us at:
              </p>
              <p className="mb-4">
                Email: volunteers@carecycle.org
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Advocate
              </h3>
              <p className="mb-4">
                Raise your voice and become an advocate for menstrual hygiene and the importance of access to sanitary pads. By spreading awareness, sharing information, and initiating conversations, you can help break the stigma surrounding menstruation and contribute to a more inclusive and supportive society. Join our advocate network and make a lasting impact on the lives of women and girls in need.
              </p>
              <p className="mb-4">
                To become an advocate, please contact us at:
              </p>
              <p className="mb-4">
                Email: advocates@carecycle.org
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Partner
              </h3>
              <p className="mb-4">
                Raise your voice and become an advocate for menstrual hygiene and the importance of access to sanitary pads. By spreading awareness, sharing information, and initiating conversations, you can help break the stigma surrounding menstruation and contribute to a more inclusive and supportive society. Join our advocate network and make a lasting impact on the lives of women and girls in need.
              </p>
              <p className="mb-4">
                To become a partner, please contact us at:
              </p>
              <p className="mb-4">
                Email: partners@carecycle.org
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
