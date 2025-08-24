// Services.tsx
import React from 'react';
import { Home, Building, Factory, Wrench, HardHat, Truck, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      icon: Home, 
      title: 'Residential Construction (with / without Material)', 
      description: 'Custom homes, apartments, and residential complexes built with precision and care.',
      features: ['Custom Design', 'Quality Materials', 'Timely Completion']
    },
    { 
      icon: Building, 
      title: 'Commercial Construction', 
      description: 'Office buildings, retail spaces, and commercial complexes for modern businesses.',
      features: ['Modern Design', 'Functional Spaces', 'Cost-Effective']
    },
    { 
      icon: Factory, 
      title: 'Industrial Projects', 
      description: 'Manufacturing facilities, factories, and industrial infrastructure development.',
      features: ['Heavy Duty', 'Efficient Layouts', 'Safety Compliance']
    },
    { 
      icon: Wrench, 
      title: 'Renovation Services', 
      description: 'Transform existing spaces with our comprehensive renovation and remodeling services.',
      features: ['Space Optimization', 'Material Upgrade', 'Minimal Disruption']
    },
    { 
      icon: HardHat, 
      title: 'Project Management', 
      description: 'End-to-end project management ensuring timely delivery and quality control.',
      features: ['Expert Supervision', 'Budget Management', 'Quality Assurance']
    },
    { 
      icon: Truck, 
      title: 'Construction Consulting', 
      description: 'Expert advice on construction projects, feasibility studies, and technical guidance.',
      features: ['Technical Expertise', 'Feasibility Studies', 'Cost Analysis']
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-orange-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-400 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider flex items-center justify-center">
            <div className="w-12 h-0.5 bg-orange-500 mr-2"></div>
            Our Services
            <div className="w-12 h-0.5 bg-orange-500 ml-2"></div>
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-6">
            Comprehensive Construction
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 block">Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            From concept to completion, we offer a full spectrum of construction services 
            tailored to meet your unique requirements and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white rounded-xl p-8 transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-orange-100">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;