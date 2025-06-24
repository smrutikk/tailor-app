import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    text: "Brook presents your services with flexible, convenient and compose layouts. You can select your favorite layouts & elements for cularts with unlimited customization possibilities. Pixel-perfect replication of the designers' intended contents your use.",
    name: "Robert Brown",
    role: "Creative designer at Celerio",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Our experience has been nothing short of amazing. Great flexibility and clean, modern layout. Truly pixel-perfect components with high-level customization options.",
    name: "Jane Smith",
    role: "Lead UX Designer at OpenCode",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "Exceptional service and attention to detail. The team delivered beyond our expectations with a perfect blend of creativity and functionality.",
    name: "Michael Johnson",
    role: "Product Manager at TechSolutions",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    text: "The quality of work exceeded all our expectations. Every detail was carefully considered and implemented to perfection. We couldn't be happier with the results.",
    name: "Sarah Williams",
    role: "Marketing Director at BrandVision",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Working with this team transformed our digital presence. Their innovative approach and technical expertise delivered solutions that perfectly matched our vision.",
    name: "David Lee",
    role: "CTO at Innovatech",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
];

const QuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-12 h-12 text-indigo-400 opacity-20"
  >
    <path
      fillRule="evenodd"
      d="M3.792 10.5c-.682 0-1.274.41-1.53 1.002a9.03 9.03 0 00-.162.496 9.03 9.03 0 00-.162-.496C1.518 10.91.926 10.5.244 10.5H0V12h.244c.194 0 .38.045.548.127.168.082.313.2.424.347.11.147.185.318.217.503.033.186.022.38-.03.564a1.55 1.55 0 01-.607.762 1.55 1.55 0 01-.762.607 1.618 1.618 0 00-.564.03 1.618 1.618 0 00-.503.217 1.55 1.55 0 00-.347.424A1.55 1.55 0 000 17.244V18.5h.244c.682 0 1.274-.41 1.53-1.002l.162-.496c.054-.165.114-.327.162-.496-.048-.169-.108-.331-.162-.496C1.518 15.09.926 14.68.244 14.68H0v1.564c.168-.082.354-.127.548-.127.194 0 .38.045.548.127.168.082.313.2.424.347.11.147.185.318.217.503.033.186.022.38-.03.564a1.55 1.55 0 01-.607.762 1.55 1.55 0 01-.762.607 1.618 1.618 0 00-.564.03 1.618 1.618 0 00-.503.217A1.55 1.55 0 000 21.756V24h12v-2.244c0-.682-.41-1.274-1.002-1.53a9.03 9.03 0 00-.496-.162 9.03 9.03 0 00.496-.162c.592-.256 1.002-.848 1.002-1.53V12h-.244c-.682 0-1.274.41-1.53 1.002a9.03 9.03 0 00-.162.496 9.03 9.03 0 00-.162-.496c-.256-.592-.848-1.002-1.53-1.002H3.792zM24 10.5h-.244c-.682 0-1.274.41-1.53 1.002a9.03 9.03 0 00-.162.496 9.03 9.03 0 00-.162-.496c-.256-.592-.848-1.002-1.53-1.002H18V12h.244c.194 0 .38.045.548.127.168.082.313.2.424.347.11.147.185.318.217.503.033.186.022.38-.03.564a1.55 1.55 0 01-.607.762 1.55 1.55 0 01-.762.607 1.618 1.618 0 00-.564.03 1.618 1.618 0 00-.503.217 1.55 1.55 0 00-.347.424A1.55 1.55 0 0016 17.244V18.5h.244c.682 0 1.274-.41 1.53-1.002l.162-.496c.054-.165.114-.327.162-.496-.048-.169-.108-.331-.162-.496.592-.256 1.002-.848 1.002-1.53V12h-.244c-.682 0-1.274.41-1.53 1.002a9.03 9.03 0 00-.162.496 9.03 9.03 0 00-.162-.496c-.256-.592-.848-1.002-1.53-1.002H12V24h12V10.5z"
      clipRule="evenodd"
    />
  </svg>
);

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [transitionDirection, setTransitionDirection] = useState("next");
  const delay = 6000; // 6 seconds between transitions

  const handlePrev = () => {
    setTransitionDirection("prev");
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), delay * 2);
  };

  const handleNext = () => {
    setTransitionDirection("next");
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), delay * 2);
  };

  const goToTestimonial = (i) => {
    setTransitionDirection(i > index ? "next" : "prev");
    setIndex(i);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), delay * 2);
  };

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(handleNext, delay);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [index, autoPlay]);

  const { text, name, role, image } = testimonials[index];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4 font-inter">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Client Testimonials
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Don't just take our word for it - hear what our clients say about us
      </p>
    </div>

    <div className="relative">
      {/* Large quote icon in background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <svg className="w-64 h-64 text-indigo-100" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <div className="p-10 md:p-16">
          <div 
            className={`transition-all duration-500 ease-in-out ${
              transitionDirection === "next" 
                ? "animate-fadeInRight" 
                : "animate-fadeInLeft"
            }`}
          >
            {/* Testimonial text */}
            <div className="relative mb-10">
              <svg 
                className="absolute -top-8 -left-8 w-16 h-16 text-indigo-100 opacity-80" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center font-medium relative z-10">
                "{text}"
              </p>
            </div>

            {/* Client info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="relative">
                <img
                  src={image}
                  alt={name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="absolute -bottom-2 -right-2 bg-indigo-500 p-2 rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-gray-900">{name}</h4>
                <p className="text-indigo-600 font-medium">{role}</p>
                <div className="flex justify-center md:justify-start mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="bg-gray-50 px-6 py-5 border-t border-gray-200">
          <div className="flex items-center justify-between">
            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === i
                      ? "bg-indigo-600 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button 
                onClick={handlePrev}
                className="p-3 rounded-full bg-white shadow-md hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="text-xl text-gray-600 group-hover:text-indigo-600" />
              </button>
              <button 
                onClick={handleNext}
                className="p-3 rounded-full bg-white shadow-md hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="text-xl text-gray-600 group-hover:text-indigo-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Animation styles */}
  <style jsx global>{`
    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .animate-fadeInRight {
      animation: fadeInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .animate-fadeInLeft {
      animation: fadeInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `}</style>
</section>
  );
};

export default TestimonialSection;