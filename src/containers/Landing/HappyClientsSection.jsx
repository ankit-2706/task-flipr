import React from 'react';

const ClientCard = ({ image, description, name, designation }) => (
  <div className="flex flex-col items-center text-center p-4 max-w-xs mx-auto">
    <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
      <img 
        src={image} 
        alt={`${name}`}
        className="w-full h-full object-cover"
      />
    </div>
    <p className="text-gray-600 mb-4 text-sm">
      {description}
    </p>
    <h3 className="font-semibold text-blue-600 mb-1">
      {name}
    </h3>
    <p className="text-gray-500 text-sm">
      {designation}
    </p>
  </div>
);

const HappyClientsSection = () => {
  // This would typically come from your backend
  const clients = [
    {
      id: 1,
      image: "/api/placeholder/80/80",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      name: "Rowhan Smith",
      designation: "CEO, FlowelScare"
    },
    {
      id: 2,
      image: "/api/placeholder/80/80",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      name: "Shipra Kayak",
      designation: "Brand Designer"
    },
    {
      id: 3,
      image: "/api/placeholder/80/80",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      name: "John Lepore",
      designation: "CEO, FlowelScare"
    },
    {
      id: 4,
      image: "/api/placeholder/80/80",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      name: "Marry Freeman",
      designation: "Marketing Manager at MNM"
    },
    {
      id: 5,
      image: "/api/placeholder/80/80",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      name: "Lucy",
      designation: "Sales Rep at AliBaba"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Happy Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clients.map(client => (
            <ClientCard
              key={client.id}
              image={client.image}
              description={client.description}
              name={client.name}
              designation={client.designation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyClientsSection;