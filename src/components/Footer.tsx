import React from 'react';
import { Shield, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Status', href: 'https://status.ertixnodes.org', external: true }
    ],
    support: [
      { name: 'Discord Community', href: 'https://discord.gg/2YM3eYuZ5m', external: true },
      { name: 'Control Panel', href: 'https://my.ertixnodes.space', external: true },
      { name: 'Documentation', href: '#', external: false },
      { name: 'Contact', href: 'https://discord.gg/2YM3eYuZ5m', external: true }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  };

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="container mx-auto section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <Shield className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-light text-white">ErtixNodes</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Premium VPS</p>
              </div>
            </div>
            <p className="text-body max-w-sm">
              Enterprise-grade VPS hosting with uncompromising performance, 
              security, and reliability. Built for developers who demand excellence.
            </p>
            <div className="flex items-center space-x-3">
              <div className="status-dot"></div>
              <span className="text-caption">All Systems Operational</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h4 className="text-white font-medium">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="nav-link flex items-center space-x-2"
                  >
                    <span>{link.name}</span>
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <h4 className="text-white font-medium">Support</h4>
            <ul className="space-y-3">
              {links.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="nav-link flex items-center space-x-2"
                  >
                    <span>{link.name}</span>
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h4 className="text-white font-medium">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-body">
            © {currentYear} ErtixNodes. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="text-body">
              Made with precision in Europe
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://discord.gg/2YM3eYuZ5m" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-4 py-2 text-sm"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
