// Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const sections = ['home', 'about', 'services', 'projects', 'testimonials', 'contact'];
      let currentSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollY + 100) {
          currentSection = section;
        }
      }
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-xl py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div onClick={() => scrollToSection('home')} className="cursor-pointer flex items-center group">
            <img src="/logo1.png" alt="Bin Qasim Enterprises Logo" className="h-16 w-auto" />
            <div className={`hidden md:flex flex-col ml-2 transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <span className="font-extrabold text-xl leading-tight group-hover:text-orange-500 transition-colors duration-300">Bin Qasim</span>
              <span className="text-xs tracking-widest group-hover:text-orange-500 transition-colors duration-300">Enterprises</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-medium transition-colors duration-300 px-4 py-2 rounded-lg ${
                  isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-300'
                }`}
              >
                {activeLink === item.id && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 bg-orange-500 rounded-lg"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${activeLink === item.id ? 'text-white' : ''}`}>{item.name}</span>
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:+923001234567" className={`flex items-center transition-colors duration-300 hover:text-orange-500 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <Phone size={18} className="mr-2" />
              <span className="text-sm font-medium">+92 321 4853051</span>
            </a>
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get a Quote
            </motion.button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'x' : 'menu'}
                  initial={{ rotate: isOpen ? -90 : 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: isOpen ? -90 : 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden bg-white shadow-xl"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium py-3 px-4 rounded-lg text-left transition-colors duration-200 ${
                    activeLink === item.id ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200 mt-2">
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md flex items-center justify-center"
                >
                  <Briefcase size={18} className="mr-2"/> Get a Quote
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;