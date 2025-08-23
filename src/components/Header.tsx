import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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

  const navLinks = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background-light/80 dark:bg-background-dark/80 shadow-md backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <button onClick={() => scrollToSection('home')} className="cursor-pointer">
            <img src="/logo1.png" alt="Bin Qasim Enterprises Logo" className="h-16 w-auto" />
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="font-medium text-text-primary-light dark:text-text-primary-dark hover:text-brand-secondary-dark dark:hover:text-brand-secondary-light transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-brand-secondary hover:bg-brand-secondary-dark text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X size={24} className="text-text-primary-light dark:text-text-primary-dark" />
              ) : (
                <Menu size={24} className="text-text-primary-light dark:text-text-primary-dark" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background-alt-light dark:bg-background-alt-dark border-t border-border-light dark:border-border-dark">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="font-medium text-text-primary-light dark:text-text-primary-dark hover:text-brand-secondary-dark dark:hover:text-brand-secondary-light transition-colors duration-200 text-left"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-brand-secondary hover:bg-brand-secondary-dark text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 w-fit"
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