import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  const filters: (ProjectCategory | 'All')[] = ['All', ProjectCategory.RESIDENTIAL, ProjectCategory.COMMERCIAL, ProjectCategory.INSTITUTIONAL];

  const getButtonClasses = (f: ProjectCategory | 'All') => {
    return filter === f
      ? 'bg-secondary text-secondary-foreground'
      : 'bg-card text-card-foreground hover:bg-muted';
  };

  return (
    <div>
      {/* Page Header */}
      <div className="bg-accent text-accent-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Our Projects</h1>
          <p className="mt-2 text-lg text-accent-foreground/80 max-w-3xl mx-auto">
            Discover the quality and craftsmanship in our diverse portfolio of completed projects.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 shadow-sm border border-border ${getButtonClasses(f)}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-xl">No projects found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;