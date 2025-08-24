import React from 'react';
import { Home, Building, Factory, Wrench, HardHat, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: Home, title: 'Residential Construction', description: 'Custom homes, apartments, and residential complexes built with precision and care.' },
    { icon: Building, title: 'Commercial Construction', description: 'Office buildings, retail spaces, and commercial complexes for modern businesses.' },
    { icon: Factory, title: 'Industrial Projects', description: 'Manufacturing facilities, factories, and industrial infrastructure development.' },
    { icon: Wrench, title: 'Renovation Services', description: 'Transform existing spaces with our comprehensive renovation and remodeling services.' },
    { icon: HardHat, title: 'Project Management', description: 'End-to-end project management ensuring timely delivery and quality control.' },
    { icon: Truck, title: 'Construction Consulting', description: 'Expert advice on construction projects, feasibility studies, and technical guidance.' },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl font-bold font-serif mt-2 mb-4">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            From concept to completion, we offer a full spectrum of construction services 
            tailored to meet your unique requirements and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-background-alt hover:bg-white rounded-lg p-8 transition-all duration-300 hover:shadow-xl border border-border hover:border-brand-secondary">
              <div className="bg-brand-secondary w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;    