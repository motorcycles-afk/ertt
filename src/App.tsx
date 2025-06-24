import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  React.useEffect(() => {
    document.title = 'ErtixNodes — Premium VPS Hosting';
    
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.setAttribute("href", "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'><path d='M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z'/></svg>");
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/" element={
          <div className="min-h-screen bg-black text-white">
            <Navbar />
            <Hero />
            <div className="divider" />
            <Features />
            <div className="divider" />
            <Stats />
            <div className="divider" />
            <Pricing />
            <div className="divider" />
            <FAQ />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
