// ProjectCard.tsx
import React, { useState } from 'react';
import { Calendar, MapPin, DollarSign, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

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

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? project.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isLastSlide = currentIndex === project.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(slideIndex);
  };

  return (
    <div 
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <div
          style={{ backgroundImage: `url(${project.images[currentIndex]})` }}
          className="w-full h-full bg-center bg-cover duration-500 group-hover:scale-110 transition-transform"
        ></div>

        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4`}>
          {/* <button className="bg-white text-orange-500 px-4 py-2 rounded-lg font-medium flex items-center ml-auto transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
            View Project
            <ExternalLink size={16} className="ml-2" />
          </button> */}
        </div>

        {/* Navigation Arrows */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isHovered ? 'hover:bg-black/50' : ''}`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isHovered ? 'hover:bg-black/50' : ''}`}
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {project.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {project.images.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={(e) => goToSlide(slideIndex, e)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  slideIndex === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">{project.description}</p>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin size={16} className="mr-2 text-orange-500 flex-shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>
          {/* <div className="flex items-center text-sm text-gray-600">
            <DollarSign size={16} className="mr-2 text-orange-500 flex-shrink-0" />
            <span>{project.value}</span>
          </div> */}
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2 text-orange-500 flex-shrink-0" />
            <span>{project.duration}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;