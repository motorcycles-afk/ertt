import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Discord from './components/Discord';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Cube3D from './components/Cube3D';
import Testimonials from './components/Testimonials';

function App() {
  React.useEffect(() => {
    document.title = 'ErtixNodes - Free VPS Hosting';
    
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.setAttribute("href", "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310b981'><path d='M22 5H9V2a1 1 0 0 0-1.71-.71L2.8 6.79a1 1 0 0 0 0 1.42l4.49 4.49A1 1 0 0 0 9 12V9h13a1 1 0 0 0 0-2zM2 17h13v3a1 1 0 0 0 1.71.71l4.5-4.49a1 1 0 0 0 0-1.42l-4.5-4.49A1 1 0 0 0 15 11v3H2a1 1 0 0 0 0 2z'/></svg>");
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gray-950 text-white">
            <BackgroundEffect />
            <Hero />
            <Features />
            <div className="py-24 bg-gray-900">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Experience Our <span className="text-green-400">Technology</span>
                </h2>
                <Cube3D />
              </div>
            </div>
            <Stats />
            <Pricing />
            <Testimonials />
            <Discord />
            <FAQ />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;