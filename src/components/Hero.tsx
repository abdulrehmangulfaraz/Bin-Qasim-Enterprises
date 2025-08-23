import React from 'react';
import { ArrowRight, Award, Users, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-brand-primary-dark/70 dark:bg-brand-primary-dark/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-brand-secondary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Building Excellence Since 2010
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight font-serif">
            Constructing Your <span className="text-brand-secondary-light">Dream Projects</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Bin Qasim Enterprises delivers exceptional construction services with unmatched quality, innovation, and reliability. We bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-brand-secondary hover:bg-brand-secondary-dark text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center group transform hover:scale-105"
            >
              Get Free Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary-dark px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300"
            >
              View Our Work
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Award, value: '150+', label: 'Projects Completed' },
              { icon: Users, value: '500+', label: 'Happy Clients' },
              { icon: Calendar, value: '14+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <stat.icon className="mx-auto text-brand-secondary-light mb-2" size={32} />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;