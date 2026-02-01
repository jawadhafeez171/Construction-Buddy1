import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import OptimizedImage from './OptimizedImage';
import { ScrollAnimated } from './ScrollAnimated';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

import { TiltCard } from './TiltCard';

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  return (
    <ScrollAnimated animation="fadeInUp" delay={index * 100}>
      <TiltCard>
        <Link
          to={`/projects/${project.id}`}
          className="group block overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl"
        >
          <div className="relative">
            <OptimizedImage
              src={project.coverImage}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
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
      </TiltCard>
    </ScrollAnimated>
  );
};

export default ProjectCard;