// components/TailoringSpecialties.jsx
import React from 'react';

const specialties = [
  {
    title: 'Bespoke Suits',
    description: 'Handcrafted suits tailored to your exact measurements and style preferences',
    icon: '👔'
  },
  {
    title: 'Shirt Alterations',
    description: 'Perfect sleeve lengths, collar adjustments, and waist tapering',
    icon: '👕'
  },
  {
    title: 'Wedding Attire',
    description: 'Custom wedding suits and tuxedos for the groom and wedding party',
    icon: '💍'
  },
  {
    title: 'Vintage Restoration',
    description: 'Breathing new life into cherished vintage garments',
    icon: '🕰️'
  },
  {
    title: 'Leather Work',
    description: 'Custom leather jackets and alterations',
    icon: '🧥'
  },
  {
    title: 'Formal Wear',
    description: 'Evening wear and black-tie attire',
    icon: '🎩'
  }
];

const TailoringSpecialties = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Tailoring Specialties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Areas where our craftsmanship truly shines
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{specialty.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{specialty.title}</h3>
              <p className="text-gray-600">{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TailoringSpecialties;