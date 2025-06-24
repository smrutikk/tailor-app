// components/StyleGallery.jsx
import React from 'react';

const styles = [
  {
    name: 'Business Formal',
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9',
    tags: ['Suits', 'Dress Shirts', 'Ties']
  },
  {
    name: 'Smart Casual',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f',
    tags: ['Blazers', 'Chinos', 'Polos']
  },
  {
    name: 'Evening Wear',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7',
    tags: ['Tuxedos', 'Dress Pants', 'Bow Ties']
  },
  {
    name: 'Summer Collection',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
    tags: ['Linen Shirts', 'Lightweight Jackets', 'Seersucker']
  }
];

const StyleGallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Style Inspiration
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover looks we've created for our discerning clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {styles.map((style, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl h-96"
            >
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{style.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {style.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-6 py-3 bg-white text-[#8B5E4F] font-medium rounded-full hover:bg-[#F2D0B8] transition-all duration-300 transform group-hover:scale-110">
                  Get This Look
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleGallery;