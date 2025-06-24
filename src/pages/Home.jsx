import Hero from '../components/Hero';
import ServicesSection from '../components/ServiceCard';
import AboutSection from '../components/About';
import WhyChooseUsSection from '../components/WhyChooseUs';
//import VideoSection from '../components/VideoSection'; 
import TestimonialSection from '../components/Testimonial';
import InstagramSection from "../components/Instagram";

const Home = () => {
  return (
    <div className="w-screen">
      <Hero />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUsSection />
      {/*<VideoSection />*/}
      <TestimonialSection />   
      <InstagramSection />     
             
    </div>
  );
};

export default Home;