import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load non-critical components
const Features = lazy(() => import('./components/Features'));
const Stats = lazy(() => import('./components/Stats'));
const Pricing = lazy(() => import('./components/Pricing'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-pulse text-gray-500">Loading...</div>
  </div>
);

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
        <Route path="/privacy" element={
          <Suspense fallback={<Loading />}>
            <PrivacyPolicy />
          </Suspense>
        } />
        <Route path="/terms" element={
          <Suspense fallback={<Loading />}>
            <TermsOfService />
          </Suspense>
        } />
        <Route path="/" element={
          <div className="min-h-screen bg-black text-white">
            <Navbar />
            <Hero />
            <div className="divider" />
            <Suspense fallback={<Loading />}>
              <Features />
            </Suspense>
            <div className="divider" />
            <Suspense fallback={<Loading />}>
              <Stats />
            </Suspense>
            <div className="divider" />
            <Suspense fallback={<Loading />}>
              <Pricing />
            </Suspense>
            <div className="divider" />
            <Suspense fallback={<Loading />}>
              <FAQ />
            </Suspense>
            <Suspense fallback={<Loading />}>
              <Footer />
            </Suspense>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
