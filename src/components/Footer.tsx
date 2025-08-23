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

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const services = [
    'Residential Construction',
    'Commercial Buildings',
    'Industrial Projects',
    'Renovation Services',
    'Project Management',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-background-alt-dark text-text-secondary-dark relative">
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-brand-secondary hover:bg-brand-secondary-dark text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <img src="/logo1.png" alt="Bin Qasim Enterprises Logo" className="h-16 w-auto mb-6 bg-white p-2 rounded-lg" />
            <p className="mb-6 leading-relaxed">
              Building Pakistan's future with quality construction, innovative designs, and exceptional service since 2010.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="bg-background-dark hover:bg-brand-secondary text-white p-3 rounded-full transition-colors duration-200">
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-text-primary-dark">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-brand-secondary-light transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-text-primary-dark">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="cursor-default">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-text-primary-dark">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-brand-secondary-light mt-1 flex-shrink-0" size={18} />
                <p>Office # 123, Main Boulevard, DHA Phase 2, Karachi, Pakistan</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-brand-secondary-light flex-shrink-0" size={18} />
                <p>+92 300 1234567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-brand-secondary-light flex-shrink-0" size={18} />
                <p>info@binqasimenterprises.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-background-dark border-t border-border-dark mt-8 py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bin Qasim Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;