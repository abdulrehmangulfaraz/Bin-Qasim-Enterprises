import React from 'react';
import { CheckCircle, Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Construction Site"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Modern Building"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg shadow-xl">
              <div className="text-3xl font-bold">14+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <div className="mb-6">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
                Building Trust Through
                <span className="text-orange-500 block">Quality Construction</span>
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
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Target className="text-orange-500 mb-3" size={24} />
                <h3 className="font-semibold text-gray-800 mb-2">Our Mission</h3>
                <p className="text-gray-600 text-sm">
                  To deliver outstanding construction solutions that exceed client expectations 
                  while maintaining the highest standards of safety and quality.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Eye className="text-orange-500 mb-3" size={24} />
                <h3 className="font-semibold text-gray-800 mb-2">Our Vision</h3>
                <p className="text-gray-600 text-sm">
                  To be Pakistan's leading construction company, known for innovation, 
                  sustainability, and creating spaces that enhance communities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Recognized Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              'Best Construction Company 2023',
              'Safety Excellence Award',
              'Client Satisfaction Award',
              'Innovation in Construction'
            ].map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <Award className="text-orange-500 mx-auto mb-3" size={32} />
                <h4 className="font-medium text-gray-800">{award}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;