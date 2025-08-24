// Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active link based on scroll position
      const sections = ['home', 'about', 'services', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveLink(section);
            break;
          }
        }
      }
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
    setActiveLink(sectionId);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')} 
            className="cursor-pointer flex items-center group"
          >
            
            <button onClick={() => scrollToSection('home')} className="cursor-pointer">
            <img src="/logo1.png" alt="Bin Qasim Enterprises Logo" className="h-16 w-auto" />
          </button>
          
            <div className={`hidden md:flex flex-col ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <span className="font-bold text-lg leading-tight transition-all duration-300 group-hover:text-orange-500"> Bin Qasim</span>
              <span className="text-sm transition-all duration-300 group-hover:text-orange-500"> Enterprises</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 px-4 py-2 rounded-lg ${
                  activeLink === item.id 
                    ? 'bg-orange-500 text-white shadow-md' 
                    : isScrolled 
                      ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50' 
                      : 'text-white hover:text-orange-300 hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className={`flex items-center ${isScrolled ? 'text-gray-700' : 'text-white'} transition-all duration-300 hover:text-orange-500`}>
              <Phone size={18} className="mr-2" />
              <span className="text-sm font-medium">+92 300 1234567</span>
            </div>
            
            {/* Get Quote Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className={`bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ${
                isScrolled ? '' : 'bg-white/20 backdrop-blur-sm hover:bg-orange-500'
              }`}
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'bg-gray-100 text-gray-800' : 'bg-white/10 text-white backdrop-blur-sm'
              }`}
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`lg:hidden ${isScrolled ? 'bg-white' : 'bg-gray-900'} border-t ${isScrolled ? 'border-gray-200' : 'border-gray-700'}`}>
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 text-left ${
                  activeLink === item.id
                    ? 'bg-orange-500 text-white'
                    : isScrolled
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200 mt-2">
              <div className="flex items-center text-orange-500 pb-3">
                <Phone size={18} className="mr-2" />
                <span className="font-medium">+92 300 1234567</span>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md"
              >
                Get Quote
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;