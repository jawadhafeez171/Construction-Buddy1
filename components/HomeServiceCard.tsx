import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';
import ServiceStaticIcon from './ServiceStaticIcon';

interface HomeServiceCardProps {
  service: Service;
}

const HomeServiceCard: React.FC<HomeServiceCardProps> = ({ service }) => {
  return (
    <Link to={service.path} className="group relative aspect-square bg-card p-3 shadow-lg rounded-lg overflow-hidden flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-2xl hover:bg-primary group-hover:scale-105">
      {/* Title and Icon Container */}
      <div className="transition-opacity duration-300 group-hover:opacity-0">
        <div className="w-16 h-16 mx-auto mb-2 text-primary">
          <ServiceStaticIcon serviceId={service.id} className="w-16 h-16" />
        </div>
        <h3 className="text-lg font-bold text-card-foreground uppercase">{service.title}</h3>
      </div>

      {/* Hover Overlay with Description */}
      <div className="absolute inset-0 p-3 flex flex-col justify-center items-center bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-lg font-bold text-primary-foreground mb-2 uppercase">{service.title}</h3>
        <p className="text-sm text-primary-foreground/80">{service.descriptions[0]}</p>
      </div>
    </Link>
  );
};

export default HomeServiceCard;