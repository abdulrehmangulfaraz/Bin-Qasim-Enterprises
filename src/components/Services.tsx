import React from 'react';
import { Home, Building, Factory, Wrench, HardHat, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, apartments, and residential complexes built with precision and care.',
      features: ['Custom Home Design', 'Apartment Buildings', 'Villa Construction', 'Home Renovations']
    },
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and commercial complexes for modern businesses.',
      features: ['Office Buildings', 'Shopping Centers', 'Hotels & Restaurants', 'Warehouses']
    },
    {
      icon: Factory,
      title: 'Industrial Projects',
      description: 'Manufacturing facilities, factories, and industrial infrastructure development.',
      features: ['Factory Construction', 'Industrial Parks', 'Manufacturing Units', 'Storage Facilities']
    },
    {
      icon: Wrench,
      title: 'Renovation Services',
      description: 'Transform existing spaces with our comprehensive renovation and remodeling services.',
      features: ['Interior Renovation', 'Structural Upgrades', 'Modernization', 'Space Optimization']
    },
    {
      icon: HardHat,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery and quality control.',
      features: ['Planning & Design', 'Quality Control', 'Timeline Management', 'Budget Control']
    },
    {
      icon: Truck,
      title: 'Construction Consulting',
      description: 'Expert advice on construction projects, feasibility studies, and technical guidance.',
      features: ['Feasibility Studies', 'Technical Consulting', 'Cost Estimation', 'Risk Assessment']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            Comprehensive Construction
            <span className="text-orange-500 block">Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            From concept to completion, we offer a full spectrum of construction services 
            tailored to meet your unique requirements and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-50 hover:bg-white rounded-lg p-8 transition-all duration-300 hover:shadow-xl border hover:border-orange-200">
              <div className="bg-orange-500 group-hover:bg-orange-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 text-sm flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="text-orange-500 hover:text-orange-600 font-medium text-sm group-hover:underline transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Construction Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure every project is delivered on time, 
              within budget, and to the highest quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Planning', description: 'Initial consultation and project planning' },
              { step: '02', title: 'Design', description: 'Architectural design and engineering' },
              { step: '03', title: 'Construction', description: 'Professional construction execution' },
              { step: '04', title: 'Delivery', description: 'Final inspection and project handover' }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm">{process.description}</p>
                
                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-orange-200 -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;