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
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Building Excellence Since 2010
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Constructing Your
            <span className="text-orange-400 block">Dream Projects</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Bin Qasim Enterprises delivers exceptional construction services with unmatched quality, 
            innovation, and reliability. From residential buildings to commercial complexes, 
            we bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 flex items-center justify-center group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200"
            >
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Award className="mx-auto text-orange-400 mb-2" size={32} />
              <div className="text-3xl font-bold text-white mb-1">150+</div>
              <div className="text-gray-200">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Users className="mx-auto text-orange-400 mb-2" size={32} />
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-200">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Calendar className="mx-auto text-orange-400 mb-2" size={32} />
              <div className="text-3xl font-bold text-white mb-1">14+</div>
              <div className="text-gray-200">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;