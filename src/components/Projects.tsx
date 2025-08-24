// Projects.tsx
import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Filter, Grid } from 'lucide-react';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch(() => {
        // Fallback data if fetch fails
        const fallbackData = [
          {
            id: 1,
            title: "Modern Residential Complex",
            category: "Residential",
            location: "DHA Phase 6, Karachi",
            value: "$2.5M",
            duration: "18 Months",
            images: [
              "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"
            ],
            description: "A contemporary residential complex featuring modern amenities and sustainable design."
          },
          {
            id: 2,
            title: "Commercial Office Tower",
            category: "Commercial",
            location: "Clifton, Karachi",
            value: "$5.8M",
            duration: "24 Months",
            images: [
              "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"
            ],
            description: "A 15-story commercial tower with state-of-the-art facilities and smart building technology."
          }
        ];
        setProjects(fallbackData);
        setIsLoading(false);
      });
  }, []);

  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(PROJECTS_PER_PAGE);
  };

  const loadMoreProjects = () => {
    setVisibleCount(prevCount => prevCount + PROJECTS_PER_PAGE);
  };

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);
  
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider flex items-center justify-center">
            <div className="w-12 h-0.5 bg-orange-500 mr-2"></div>
            Our Projects
            <div className="w-12 h-0.5 bg-orange-500 ml-2"></div>
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-6">
            Showcasing Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 block">Construction Excellence</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of completed projects that demonstrate our commitment to
            quality, innovation, and client satisfaction.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-100">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  {category === 'All' && <Grid size={18} className="mr-2" />}
                  {category !== 'All' && <Filter size={18} className="mr-2" />}
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md animate-pulse">
                <div className="h-60 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
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
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Show More Projects
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;