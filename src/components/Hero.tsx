// Hero.tsx
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Award, Users, Calendar, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 text-center text-white overflow-hidden"
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

      {/* Animated Elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="w-6 h-6 bg-orange-500 rounded-full opacity-70"></div>
      </div>
      <div className="absolute bottom-1/3 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-10 h-10 border-4 border-orange-500 rounded-full opacity-50"></div>
      </div>
      <div className="absolute top-1/3 right-1/4 animate-pulse">
        <div className="w-8 h-8 bg-blue-500 rounded-lg opacity-40"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg mb-6 tracking-wide border border-white/20 hover:scale-105 transition-transform duration-300"
            variants={itemVariants}
          >
            <Award size={16} className="mr-2" />
            Building Excellence Since 2010
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="text-white">Constructing Your</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 animate-pulse">
              Dream Projects
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Bin Qasim Enterprises delivers exceptional construction services
            with unmatched quality, innovation, and reliability. We bring your
            vision to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                Get Free Quote
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  size={20}
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="group relative bg-transparent border-2 border-white text-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                <Play size={18} className="mr-2" />
                View Our Work
              </span>
              <div className="absolute inset-0 bg-white transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {[
              { icon: Award, value: '20+', label: 'Projects Completed' },
              { icon: Users, value: '20+', label: 'Happy Clients' },
              { icon: Calendar, value: '12+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
                variants={itemVariants}
              >
                <stat.icon
                  className="mx-auto text-orange-400 mb-3"
                  size={36}
                />
                <div className="text-3xl font-bold mb-1 text-white">{stat.value}</div>
                <div className="text-gray-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;