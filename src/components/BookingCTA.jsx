// components/BookingCTA.jsx
import React from 'react';

const BookingCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#8B5E4F] to-[#A08474] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Perfect Fit?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Book a consultation with our master tailors today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-[#8B5E4F] font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book an Appointment
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;