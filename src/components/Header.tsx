import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+92 300 1234567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>info@binqasimEnterprises.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BQ</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Bin Qasim Enterprises</h1>
                <p className="text-sm text-gray-600">Construction Excellence</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 text-left"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 w-fit"
              >
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;