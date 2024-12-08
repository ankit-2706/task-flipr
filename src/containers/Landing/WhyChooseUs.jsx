import React from 'react';
import { Home, Palette, BarChart } from 'lucide-react';

const WhyChooseUs = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-blue-500" />,
      title: "Potential ROI",
      description: "We understand your goals. Whether it's to increase your property's resale value or find you a rental guide that delivers results."
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-500" />,
      title: "Design",
      description: "Our in-house design services provide custom solutions to guide them up your design space and avoid costly building mistakes to turn ideas into tangible results."
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-500" />,
      title: "Marketing",
      description: "Using tried and tested cutting edge technology together with all of the remaining pieces each property and bringing it all together to create success."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">
            Not Your Average Realtor
          </h1>
          <p className="text-gray-600 max-w-md">
            Real estate is not simply about transactions; it's about making dreams come true and helping people find the places where life's best moments unfold.
          </p>
        </div>

        {/* Right Images Grid */}
        <div className="relative">
          {/* Background Circles */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full" />
            <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-orange-500 rounded-full" />
            <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-blue-300 rounded-full" />
          </div>

          {/* Image Grid */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img
                src="\src\assets\cheerful-young-caucasian-businessman_171337-727.avif"
                alt="Main realtor"
                className="w-3/4 mx-auto rounded-full"
              />
            </div>
            <div className="flex justify-end">
              <img
                src="\src\assets\benefits-for-workers-and-employers-who-return-to-work-header.webp"
                alt="Happy couple"
                className="w-32 h-32 rounded-full"
              />
            </div>
            <div>
              <img
                src="\src\assets\depositphotos_112228738-stock-photo-asian-business-people-working-together.jpg"
                alt="Satisfied client"
                className="w-32 h-32 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          Why Choose Us?
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-500 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Arrow */}
        <div className="flex justify-end mt-12">
          <button className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;