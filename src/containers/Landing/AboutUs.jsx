import React from 'react';

const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-white py-24 px-4">
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-50 rounded-full opacity-30" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-50 rounded-full opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Image Grid */}
        <div className="relative mb-20">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-1/4 w-8 h-8 bg-blue-500" />
          <div className="absolute bottom-1/4 left-1/4 w-8 h-8 border-2 border-orange-500" />
          <div className="absolute top-1/4 right-0 w-8 h-8 border-2 border-blue-500" />

          {/* Images */}
          <div className="grid grid-cols-3 gap-8">
            <div className="relative">
              <img
                src="\src\assets\pexels-brett-sayles-2881232.svg"
                alt="Realtor with client"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-500" />
            </div>
            <div className="relative mt-12">
              <img
                src="\src\assets\pexels-andres-ayrton-6578391.svg"
                alt="Team meeting"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500" />
            </div>
            <div className="relative mt-24">
              <img
                src="\src\assets\pexels-fauxels-3182834.svg"
                alt="Client consultation"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-orange-500" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            About Us
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4" />
          </h2>
          <p className="text-gray-600 mb-8">
            With over 5 years of experience in real estate development, we take pride in 
            our ability to work hard, think out of the box and deliver great results. We establish
            quality working relationships with clients and, more importantly, maintain these relationships
            by communicating effectively.
          </p>
          <button className="text-blue-500 border-b-2 border-blue-500 pb-1 hover:text-blue-600 transition-colors">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;