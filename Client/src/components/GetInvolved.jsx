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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu ligula vitae diam dictum condimentum.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu ligula vitae diam dictum condimentum.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu ligula vitae diam dictum condimentum.
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
