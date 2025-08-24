// About.tsx
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle, Target, Eye, Award, Sparkles } from 'lucide-react';

const About = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="grid grid-cols-2 gap-6">
              <motion.div className="relative group" variants={imageVariants}>
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <img
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Construction Site"
                  className="relative rounded-lg shadow-lg transform group-hover:scale-105 transition duration-500"
                />
              </motion.div>
              <motion.div className="relative group mt-12" variants={imageVariants} transition={{ delay: 0.2 }}>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <img
                  src="https://images.pexels.com/photos/323503/pexels-photo-323503.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Modern Building"
                  className="relative rounded-lg shadow-lg transform group-hover:scale-105 transition duration-500"
                />
              </motion.div>
            </div>
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.5 }}
            >
              <div className="flex items-center">
                <Sparkles className="mr-2" size={20} />
                <div>
                  <div className="text-3xl font-bold">14+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants}>
            <div className="mb-8">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider flex items-center">
                <div className="w-12 h-0.5 bg-orange-500 mr-2"></div>
                About Us
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-6">
                Building Trust Through
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 block">Quality Construction</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Established in 2010, Bin Qasim Enterprises has been at the forefront of Pakistan's 
                construction industry, delivering exceptional projects that stand the test of time.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                'Licensed and Insured Contractors',
                'Quality Materials and Craftsmanship',
                'On-Time Project Delivery',
                '24/7 Customer Support'
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200"
                  custom={index}
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-orange-500" size={16} />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group" variants={itemVariants}>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <Target className="text-orange-500 group-hover:text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">Our Mission</h3>
                <p className="text-gray-600 text-sm">
                  To deliver outstanding construction solutions that exceed client expectations 
                  while maintaining the highest standards of safety and quality.
                </p>
              </motion.div>
              <motion.div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group" variants={itemVariants}>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                  <Eye className="text-blue-500 group-hover:text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">Our Vision</h3>
                <p className="text-gray-600 text-sm">
                  To be Pakistan's leading construction company, known for innovation, 
                  sustainability, and creating spaces that enhance communities.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Awards Section */}
        <div className="mt-20 text-center">
          <motion.h3 className="text-2xl font-bold text-gray-800 mb-10" variants={itemVariants}>Recognized Excellence</motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              'Best Construction Company 2023',
              'Safety Excellence',
              'Client Satisfaction',
              'Innovation in Construction'
            ].map((award, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
                custom={index}
                variants={itemVariants}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-white" size={32} />
                </div>
                <h4 className="font-medium text-gray-800 group-hover:text-orange-600 transition-colors duration-300">{award}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;