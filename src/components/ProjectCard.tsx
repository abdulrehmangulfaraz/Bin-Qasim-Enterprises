import React, { useState } from 'react';
import { Calendar, MapPin, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

// Define the structure of a Project
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

// Define the props for our component
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? project.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === project.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden h-64">
        <div
          style={{ backgroundImage: `url(${project.images[currentIndex]})` }}
          className="w-full h-full bg-center bg-cover duration-500"
        ></div>

        {/* Left Arrow */}
        {project.images.length > 1 && (
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <ChevronLeft onClick={prevSlide} size={30} />
          </div>
        )}
        {/* Right Arrow */}
        {project.images.length > 1 && (
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <ChevronRight onClick={nextSlide} size={30} />
          </div>
        )}
        
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>
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
      </div>
    </div>
  );
};

export default ProjectCard;