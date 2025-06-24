// components/FabricShowcase.jsx
import React from 'react';

const fabrics = [
  {
    name: 'Premium Wool',
    description: 'Luxurious warmth with natural breathability',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
    properties: ['Wrinkle-resistant', 'Durable', 'All-season']
  },
  {
    name: 'Italian Cotton',
    description: 'Soft, breathable and perfect for warm weather',
    image: 'https://images.unsplash.com/photo-1520367445093-50dc08a59d9d',
    properties: ['Lightweight', 'Hypoallergenic', 'Easy care']
  },
  {
    name: 'Silk Blend',
    description: 'Elegant drape with a subtle sheen',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
    properties: ['Luxurious', 'Temperature regulating', 'Delicate']
  },
  {
    name: 'Linen',
    description: 'Natural texture with excellent breathability',
    image: 'https://images.unsplash.com/photo-1534057308991-b9b3a578f1b1',
    properties: ['Eco-friendly', 'Absorbent', 'Casual elegance']
  }
];

const FabricShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Fabric Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-selected materials for unparalleled quality and comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fabrics.map((fabric, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={fabric.image}
                  alt={fabric.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{fabric.name}</h3>
                <p className="text-gray-600 mb-4">{fabric.description}</p>
                <ul className="space-y-2">
                  {fabric.properties.map((prop, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-4 h-4 text-[#8B5E4F] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{prop}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FabricShowcase;