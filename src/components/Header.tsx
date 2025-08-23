import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // A scroll of more than 20px will trigger the background effect
      setIsScrolled(window.scrollY > 20);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-800/90 shadow-md backdrop-blur-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <a href="#home" onClick={() => scrollToSection('home')} className="cursor-pointer">
            <img src="/logo1.png" alt="Bin Qasim Enterprises Logo" className="h-16 w-auto" />
          </a>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 dark:text-gray-300 hover:text-brand-orange dark:hover:text-brand-orange font-medium transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-brand-orange hover:opacity-90 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Get Quote
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen 
                ? <X size={24} className="text-gray-800 dark:text-gray-200" /> 
                : <Menu size={24} className="text-gray-800 dark:text-gray-200" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
             {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 dark:text-gray-300 hover:text-brand-orange dark:hover:text-brand-orange font-medium transition-colors duration-200 text-left"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-brand-orange hover:opacity-90 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 w-fit"
            >
              Get Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;