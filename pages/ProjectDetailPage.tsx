import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="mt-4 text-muted-foreground">Sorry, we couldn't find the project you were looking for.</p>
        <Link to="/projects" className="mt-8 inline-block bg-secondary text-secondary-foreground font-bold py-3 px-8 rounded-md hover:bg-secondary/90 transition-colors">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Project Header */}
      <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${project.coverImage})` }}>
        <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <span className="inline-block bg-secondary text-secondary-foreground text-sm font-semibold px-3 py-1 rounded mb-2 w-max">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Project Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">About the Project</h2>
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        </div>

        {/* Image Gallery */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;