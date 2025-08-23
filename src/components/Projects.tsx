import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin, DollarSign } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

  const projects = [
    {
      id: 1,
      title: 'Luxury Residential Complex',
      category: 'Residential',
      location: 'Karachi, Pakistan',
      value: '$2.5M',
      duration: '18 Months',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Modern 120-unit residential complex with premium amenities and sustainable design features.'
    },
    {
      id: 2,
      title: 'Corporate Office Tower',
      category: 'Commercial',
      location: 'Lahore, Pakistan',
      value: '$5.2M',
      duration: '24 Months',
      image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: '25-story modern office building with state-of-the-art facilities and smart building technology.'
    },
    {
      id: 3,
      title: 'Manufacturing Facility',
      category: 'Industrial',
      location: 'Faisalabad, Pakistan',
      value: '$3.8M',
      duration: '15 Months',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Large-scale textile manufacturing facility with modern equipment and efficient workflow design.'
    },
    {
      id: 4,
      title: 'Shopping Mall Complex',
      category: 'Commercial',
      location: 'Islamabad, Pakistan',
      value: '$4.1M',
      duration: '20 Months',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Multi-level shopping center with entertainment zones, food courts, and parking facilities.'
    },
    {
      id: 5,
      title: 'Residential Villas',
      category: 'Residential',
      location: 'Rawalpindi, Pakistan',
      value: '$1.8M',
      duration: '12 Months',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Luxury villa development with 15 custom-designed homes featuring modern architecture.'
    },
    {
      id: 6,
      title: 'Warehouse Complex',
      category: 'Industrial',
      location: 'Multan, Pakistan',
      value: '$2.2M',
      duration: '10 Months',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Modern logistics and storage facility with automated systems and efficient loading docks.'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Our Projects</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            Showcasing Our
            <span className="text-orange-500 block">Construction Excellence</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of completed projects that demonstrate our commitment to 
            quality, innovation, and client satisfaction.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-sm">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:text-orange-500'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-blue-900 p-3 rounded-full hover:scale-110 transition-transform duration-200">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="mr-2 text-orange-500" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign size={16} className="mr-2 text-orange-500" />
                    {project.value}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2 text-orange-500" />
                    {project.duration}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <button className="text-orange-500 hover:text-orange-600 font-medium text-sm group-hover:underline transition-colors duration-200">
                    View Project Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">150+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">$50M+</div>
              <div className="text-gray-600">Total Project Value</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">14+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;