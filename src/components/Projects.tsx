import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  value: string;
  duration: string;
  images: string[];
  description: string;
}

const PROJECTS_PER_PAGE = 6;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [projects, setProjects] = useState<Project[]>([]);
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(PROJECTS_PER_PAGE); // Reset visible count when category changes
  };

  const loadMoreProjects = () => {
    setVisibleCount(prevCount => prevCount + PROJECTS_PER_PAGE);
  };

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);
  
  const visibleProjects = filteredProjects.slice(0, visibleCount);

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
                  onClick={() => handleCategoryChange(category)}
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
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreProjects}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105"
            >
              Show More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;