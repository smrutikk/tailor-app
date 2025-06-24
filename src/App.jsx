import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUsPage from './pages/AboutUs';
import Services from './pages/Services';
import BlogPage from './pages/BlogPage';
import Contact from './pages/ContactUs';
//import VisitUs from './pages/VisitUs';
import FooterSection from "../src/components/Footer";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
        {/*  <Route path="/visit-us" element={<VisitUs />} />*/}
        </Routes>
         <FooterSection /> 
      </div>
    </Router>
  );
};

export default App;