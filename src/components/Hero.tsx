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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 text-center text-white"
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-gray-800/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-fadeIn">
          {/* Badge */}
          <span className="inline-block bg-brand-secondary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg mb-6 tracking-wide">
            Building Excellence Since 2010
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight font-serif drop-shadow-lg">
            <span className="text-white">Constructing Your</span>{' '}
            <span className="text-brand-secondary">Dream Projects</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Bin Qasim Enterprises delivers exceptional construction services
            with unmatched quality, innovation, and reliability. We bring your
            vision to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-brand-secondary hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center group transform hover:scale-105 shadow-md hover:shadow-xl"
            >
              Get Free Quote
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                size={20}
              />
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md"
            >
              View Our Work
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Award, value: '150+', label: 'Projects Completed' },
              { icon: Users, value: '500+', label: 'Happy Clients' },
              { icon: Calendar, value: '14+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition duration-300 shadow-md hover:shadow-xl"
              >
                <stat.icon
                  className="mx-auto text-brand-secondary mb-3"
                  size={36}
                />
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
