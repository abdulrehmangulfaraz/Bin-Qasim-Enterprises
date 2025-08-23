import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              {/* Logo Updated Here */}
              <img src="/logo1.png" alt="Bin Qasim Enterprises Logo" className="h-24 w-auto" />
              <div>
                <h3 className="text-xl font-bold">Bin Qasim Enterprises</h3>
                <p className="text-sm text-gray-400">Construction Excellence</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building Pakistan's future with quality construction, innovative designs, 
              and exceptional service since 2010.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-colors duration-200">
                <Facebook size={20} />
              </button>
              <button className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-colors duration-200">
                <Linkedin size={20} />
              </button>
              <button className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-colors duration-200">
                <Twitter size={20} />
              </button>
              <button className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-colors duration-200">
                <Instagram size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Residential Construction',
                'Commercial Buildings',
                'Industrial Projects',
                'Renovation Services',
                'Project Management',
                'Construction Consulting'
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-orange-500 cursor-pointer transition-colors duration-200">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-400">
                    Office # 123, Main Boulevard,<br />
                    DHA Phase 2, Karachi, Pakistan
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-orange-500 flex-shrink-0" size={18} />
                <div className="text-gray-400">
                  <p>+92 300 1234567</p>
                  <p>+92 321 7654321</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-500 flex-shrink-0" size={18} />
                <div className="text-gray-400">
                  <p>info@binqasimenterprises.com</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <p className="text-sm text-gray-400">
                Mon - Sat: 8:00 AM - 6:00 PM<br />
                Sunday: Emergency Only
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>&copy; 2025 Bin Qasim Enterprises. All rights reserved.</p>
              <div className="flex space-x-6">
                <button className="hover:text-orange-500 transition-colors duration-200">Privacy Policy</button>
                <button className="hover:text-orange-500 transition-colors duration-200">Terms of Service</button>
                <button className="hover:text-orange-500 transition-colors duration-200">Sitemap</button>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-400">
                Licensed & Insured | License #: BQ-2010-001
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;