import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Floating Navbar */}
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'scale-95' : 'scale-100'
      }`}>
        <div className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''}`}>
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="logo-container">
              <Shield className="w-5 h-5 text-black" />
            </div>
            <div className="logo-text">
              <h1 className="text-lg font-light text-white tracking-tight">ErtixNodes</h1>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Premium VPS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link-floating"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Access Panel Button */}
          <div className="hidden md:block">
            <a
              href="https://my.ertixnodes.space"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-access-panel"
            >
              Access Panel
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden mobile-menu-btn"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="space-y-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-nav-link"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://my.ertixnodes.space"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-access-panel-mobile"
              style={{ animationDelay: '300ms' }}
            >
              Access Panel
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
