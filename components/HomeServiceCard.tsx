import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';
import ServiceStaticIcon from './ServiceStaticIcon';

interface HomeServiceCardProps {
  service: Service;
}



const HomeServiceCard: React.FC<HomeServiceCardProps> = ({ service }) => {
  return (
    <Link
      to={service.path}
      className="group relative flex flex-col items-center p-6 bg-card border border-border/40 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-secondary/30"
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon Container */}
      <div className="relative mb-4 p-4 rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
        <ServiceStaticIcon serviceId={service.id} className="w-8 h-8" />
      </div>

      {/* Content */}
      <div className="relative text-center z-10">
        <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2 group-hover:text-secondary transition-colors">
          {service.title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300">
          {service.descriptions[0]}
        </p>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-tertiary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </Link>
  );
};

export default HomeServiceCard;