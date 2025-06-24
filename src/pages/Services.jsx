import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceCard';
import WhyChooseUsSection from '../components/WhyChooseUs';
import TestimonialSection from '../components/Testimonial';
import InstagramSection from "../components/Instagram";
import FabricShowcase from '../components/FabricShowcase';
import CustomizationProcess from '../components/CustomizationProcess';
import StyleGallery from '../components/StyleGallery';
import TailoringSpecialties from '../components/TailoringSpecialties';
import BookingCTA from '../components/BookingCTA';

import heroBg from '../assets/hero-tailor.png';

const Services = () => {
  return (
    <div className="min-h-screen w-screen">
      <Hero title="Services" bgImage={heroBg} />
      <ServiceSection />
      <FabricShowcase />
      <CustomizationProcess />
      <WhyChooseUsSection />
      <StyleGallery />
      <TailoringSpecialties />
      <TestimonialSection />
      <BookingCTA />
      <InstagramSection />
    </div>
  );
}

export default Services;