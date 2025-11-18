import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="group block overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <span className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-1 rounded mb-1">
            {project.category}
          </span>
          <h3 className="text-white text-xl font-bold">{project.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;