import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { LazyImage } from '../components/LazyImage';
import { Lightbox } from '../components/Lightbox';
import { ScrollAnimated } from '../components/ScrollAnimated';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS.find(p => p.id === projectId);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="bg-background">
      {/* Project Header */}
      <div className="relative h-[50vh] bg-cover bg-center overflow-hidden">
        <LazyImage
          src={project.coverImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
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
        <ScrollAnimated animation="fadeInUp">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">About the Project</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
          </div>
        </ScrollAnimated>

        {/* Image Gallery */}
        <ScrollAnimated animation="fadeInUp" delay={200}>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow group"
                  onClick={() => openLightbox(index)}
                >
                  <LazyImage
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimated>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={project.images}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </div>
  );
};

export default ProjectDetailPage;